/* eslint-disable camelcase, no-async-promise-executor */
import fs from 'node:fs';
import runScript from '@npmcli/run-script';
import { Octokit } from '@octokit/rest';
import AdmZip from 'adm-zip';
import axios from 'axios';
import chalk from 'chalk';
import Spinnies from 'spinnies';

import checkRepo from './check-repo';

const { Notification: Notifier } = require('node-notifier');
const simpleGit = require('simple-git');

const spinner = { interval: 80, frames: ['⠋', '⠙', '⠹', '⠸', '⠼', '⠴', '⠦', '⠧', '⠇', '⠏'] };
const spinnies = new Spinnies({ spinner });

let spinniesId = 0;

// `spinnies` 为按条目进度，需要做简单的封装变成接近 `ora` 的形态
const showMessage = (
  message: string,
  status?: 'succeed' | 'fail' | 'spinning' | 'non-spinnable' | 'stopped' | true,
  uniqueTitle?: string,
) => {
  if (!status) {
    spinnies.add(`info-${spinniesId}`, {
      text: message,
      status: 'non-spinnable',
    });
    spinniesId += 1;
  } else {
    const mergedId = uniqueTitle || `msg-${spinniesId}`;
    const mergedMessage = uniqueTitle ? `${uniqueTitle} ${message}` : message;

    const existSpinner = spinnies.pick(mergedId);
    if (!existSpinner) {
      spinnies.add(mergedId, {
        text: '',
      });
    }

    if (status === 'succeed' || status === 'fail' || status === 'stopped') {
      spinnies.update(mergedId, {
        text: mergedMessage,
        status,
      });
      spinniesId += 1;
    } else {
      spinnies.update(mergedId, {
        text: mergedMessage,
        status: status === true ? 'spinning' : status,
      });
    }
  }
};

process.on('SIGINT', () => {
  process.exit(1);
});

const emojify = (status: string = '') => {
  if (!status) {
    return '';
  }
  const emoji = {
    /* status */
    completed: '✅',
    queued: '🕒',
    in_progress: '⌛',
    /* conclusion */
    success: '✅',
    failure: '❌',
    neutral: '⚪',
    cancelled: '❌',
    skipped: '⏭️',
    timed_out: '⌛',
    action_required: '🔴',
  }[status];
  return `${emoji || ''} ${(status || '').padEnd(15)}`;
};

async function downloadArtifact(msgKey: string, url: string, filepath: string, token?: string) {
  const headers: Record<string, string> = {};
  if (token) {
    headers.Authorization = `token ${token}`;
  }

  const response = await axios.get(url, {
    headers,
    responseType: 'arraybuffer',
    onDownloadProgress: (progressEvent) => {
      showMessage(
        `正在下载构建产物 ${((progressEvent.loaded / (progressEvent.total || 0)) * 100).toFixed(
          2,
        )}%`,
        true,
        msgKey,
      );
    },
  });

  fs.writeFileSync(filepath, Buffer.from(response.data));

  await new Promise((resolve) => {
    setTimeout(resolve, 10000);
  });

  return filepath;
}

const runPrePublish = async () => {
  // await checkRepo();
  showMessage(chalk.black.bgGreenBright('本次发布将跳过本地 CI 检查，远程 CI 通过后方可发布'));
  const git = simpleGit();
  const octokit = new Octokit({ auth: process.env.GITHUB_ACCESS_TOKEN });
  const { current: currentBranch } = await git.branch();

  showMessage(`正在拉取远程分支 ${currentBranch}`, true);
  await git.pull('origin', currentBranch);
  showMessage(`成功拉取远程分支 ${currentBranch}`, 'succeed');
  showMessage(`正在推送本地分支 ${currentBranch}`, true);
  await git.push('origin', currentBranch);
  showMessage(`成功推送远程分支 ${currentBranch}`, 'succeed');
  showMessage(`已经和远程分支保持同步 ${currentBranch}`, 'succeed');

  const { latest } = await git.log();
  const sha = process.env.TARGET_SHA || latest.hash;

  showMessage(`找到本地最新 commit:`, 'succeed');
  showMessage(chalk.cyan(`  hash: ${sha}`));
  showMessage(chalk.cyan(`  date: ${latest.date}`));
  showMessage(chalk.cyan(`  message: ${latest.message}`));
  showMessage(chalk.cyan(`  author_name: ${latest.author_name}`));

  const owner = 'ant-design';
  const repo = 'ant-design';
  showMessage(`开始检查远程分支 ${currentBranch} 的 CI 状态`, true);
  const {
    data: { check_runs },
  } = await octokit.checks.listForRef({
    owner,
    repo,
    ref: sha,
  });
  showMessage(`远程分支 CI 状态：`, 'succeed');
  check_runs.forEach((run) => {
    showMessage(`  ${run.name.padEnd(36)} ${emojify(run.status)} ${emojify(run.conclusion || '')}`);
  });
  const conclusions = check_runs.map((run) => run.conclusion);
  if (
    conclusions.includes('failure') ||
    conclusions.includes('cancelled') ||
    conclusions.includes('timed_out')
  ) {
    showMessage(chalk.bgRedBright('远程分支 CI 执行异常，无法继续发布，请尝试修复或重试'), 'fail');
    showMessage(`  点此查看状态：https://github.com/${owner}/${repo}/commit/${sha}`);
    process.exit(1);
  }

  const statuses = check_runs.map((run) => run.status);
  if (check_runs.length < 1 || statuses.includes('queued') || statuses.includes('in_progress')) {
    showMessage(chalk.bgRedBright('远程分支 CI 还在执行中，请稍候再试'), 'fail');
    showMessage(`  点此查看状态：https://github.com/${owner}/${repo}/commit/${sha}`);
    process.exit(1);
  }
  showMessage(`远程分支 CI 已通过`, 'succeed');
  // clean up
  await runScript({ event: 'clean', path: '.', stdio: 'inherit' });
  showMessage(`成功清理构建产物目录`, 'succeed');

  // 从 github artifact 中下载产物
  const downloadArtifactPromise = Promise.resolve().then(async () => {
    showMessage('开始查找远程分支构建产物', true, '[Artifact - Github]');

    const {
      data: { workflow_runs },
    } = await octokit.rest.actions.listWorkflowRunsForRepo({
      owner,
      repo,
      head_sha: sha,
      per_page: 100,
      exclude_pull_requests: true,
      event: 'push',
      status: 'completed',
      conclusion: 'success',
      head_branch: currentBranch,
    });
    const testWorkflowRun = workflow_runs.find((run) => run.name === '✅ test');
    if (!testWorkflowRun) {
      showMessage(chalk.bgRedBright('找不到远程构建工作流'), 'fail', '[Artifact - Github]');
      throw new Error('找不到远程构建工作流');
    }

    const {
      data: { artifacts },
    } = await octokit.actions.listWorkflowRunArtifacts({
      owner,
      repo,
      run_id: testWorkflowRun?.id || 0,
    });
    const artifact = artifacts.find((item) => item.name === 'build artifacts');
    if (!artifact) {
      showMessage(chalk.bgRedBright('找不到远程构建产物'), 'fail', '[Artifact - Github]');
      throw new Error('找不到远程构建产物');
    }

    showMessage(`准备从远程分支下载构建产物`, true, '[Artifact - Github]');
    const { url } = await octokit.rest.actions.downloadArtifact.endpoint({
      owner,
      repo,
      artifact_id: artifact.id,
      archive_format: 'zip',
    });

    // 返回下载后的文件路径
    return downloadArtifact(
      '[Artifact - Github]',
      url,
      'artifacts.zip',
      process.env.GITHUB_ACCESS_TOKEN,
    );
  });
  downloadArtifactPromise
    .then(() => {
      showMessage(`成功下载构建产物`, 'succeed', '[Artifact - Github]');
    })
    .catch(() => {});

  // 从 OSS 下载产物
  const downloadOSSPromise = Promise.resolve().then(async () => {
    const url = `https://antd-visual-diff.oss-cn-shanghai.aliyuncs.com/${sha}/oss-artifacts.zip`;

    showMessage(`准备从远程 OSS 下载构建产物`, true, '[Artifact - OSS]');

    // 返回下载后的文件路径
    return downloadArtifact('[Artifact - OSS]', url, 'oss-artifacts.zip');
  });
  downloadOSSPromise
    .then(() => {
      showMessage(`成功下载构建产物`, 'succeed', '[Artifact - OSS]');
    })
    .catch(() => {});

  // 任意一个完成，则完成
  let firstArtifactFile: string;

  try {
    // @ts-ignore
    firstArtifactFile = await Promise.any([downloadArtifactPromise, downloadOSSPromise]);
  } catch (error) {
    showMessage(
      chalk.bgRedBright(`下载失败，请确认你当前 ${sha.slice(0, 6)} 位于 master 分支中`),
      'fail',
    );
    process.exit(1);
  }

  showMessage(`成功从远程分支下载构建产物`, 'succeed');

  // unzip
  showMessage(`正在解压构建产物`, true);
  const zip = new AdmZip(firstArtifactFile);
  zip.extractAllTo('./', true);
  showMessage(`成功解压构建产物`, 'succeed');
  await runScript({ event: 'test:dekko', path: '.', stdio: 'inherit' });
  await runScript({ event: 'test:package-diff', path: '.', stdio: 'inherit' });
  showMessage(`文件检查通过，准备发布！`, 'succeed');

  new Notifier().notify({
    title: '✅ 准备发布到 npm',
    message: '产物已经准备好了，快回来输入 npm 校验码了！',
    sound: 'Crystal',
  });
  process.exit(0);
};

runPrePublish();
