import React from 'react';
import { ConfigProvider, Tabs } from 'antd';
import SourceCode from 'dumi/theme-default/builtins/SourceCode';
import type { Tab } from 'rc-tabs/lib/interface';

import NpmLogo from './npm';
import PnpmLogo from './pnpm';
import YarnLogo from './yarn';

interface InstallProps {
  npm?: string;
  yarn?: string;
  pnpm?: string;
}

const InstallDependencies: React.FC<InstallProps> = (props) => {
  const { npm, yarn, pnpm } = props;
  const items: Tab[] = [
    {
      key: 'npm',
      label: 'npm',
      children: npm ? <SourceCode lang="bash">{npm}</SourceCode> : null,
      icon: <NpmLogo />,
    },
    {
      key: 'yarn',
      label: 'yarn',
      children: yarn ? <SourceCode lang="bash">{yarn}</SourceCode> : null,
      icon: <YarnLogo />,
    },
    {
      key: 'pnpm',
      label: 'pnpm',
      children: pnpm ? <SourceCode lang="bash">{pnpm}</SourceCode> : null,
      icon: <PnpmLogo />,
    },
  ].filter((item) => item.children);

  return (
    <ConfigProvider theme={{ components: { Tabs: { horizontalMargin: '0' } } }}>
      <Tabs className="markdown" size="small" defaultActiveKey="npm" items={items} />
    </ConfigProvider>
  );
};

export default InstallDependencies;
