---
category: Components
title: Alert
subtitle: 警告提示
description: 警告提示，展现需要关注的信息。
cover: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*QsvtS41m45UAAAAAAAAAAAAADrJ8AQ/original
coverDark: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*gOTISoMFZV0AAAAAAAAAAAAADrJ8AQ/original
demo:
  cols: 2
group:
  title: 反馈
  order: 6
---

## 何时使用

- 当某个页面需要向用户显示警告的信息时。
- 非浮层的静态展现形式，始终展现，不会自动消失，用户可以点击关闭。

## 代码演示

<!-- prettier-ignore -->
<code src="./demo/basic.tsx">基本</code>
<code src="./demo/style.tsx">四种样式</code>
<code src="./demo/closable.tsx">可关闭的警告提示</code>
<code src="./demo/description.tsx">含有辅助性文字介绍</code>
<code src="./demo/icon.tsx">图标</code>
<code src="./demo/banner.tsx" iframe="250">顶部公告</code>
<code src="./demo/loop-banner.tsx">轮播的公告</code>
<code src="./demo/smooth-closed.tsx">平滑地卸载</code>
<code src="./demo/error-boundary.tsx">React 错误处理</code>
<code src="./demo/custom-icon.tsx" debug>自定义图标</code>
<code src="./demo/action.tsx">操作</code>
<code src="./demo/component-token.tsx" debug>组件 Token</code>

## API

通用属性参考：[通用属性](/docs/react/common-props)

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| action | 自定义操作项 | ReactNode | - | 4.9.0 |
| afterClose | 关闭动画结束后触发的回调函数 | () => void | - |  |
| banner | 是否用作顶部公告 | boolean | false |  |
| closable | 可关闭配置，>=5.15.0: 支持 `aria-*` | boolean \| ({ closeIcon?: React.ReactNode } & React.AriaAttributes) | `false` |  |
| description | 警告提示的辅助性文字介绍 | ReactNode | - |  |
| icon | 自定义图标，`showIcon` 为 true 时有效 | ReactNode | - |  |
| icons | 内置图标 | { info?: ReactNode; success?: ReactNode; warning?: ReactNode; error?: ReactNode; close?: ReactNode; } | `{ info: <InfoCircleFilled/>, success: <CheckCircleFilled/>, warning: <ExclamationCircleFilled/>, error: <CloseCircleFilled/>, close: <CloseOutlined/> }` | 6.0.0 |
| ~~message~~ | 警告提示内容，请使用 `title` 替换 | ReactNode | - |  |
| title | 警告提示内容 | ReactNode | - |  |
| showIcon | 是否显示辅助图标 | boolean | false，`banner` 模式下默认值为 true |  |
| type | 指定警告提示的样式，有四种选择 `success`、`info`、`warning`、`error` | string | `info`，`banner` 模式下默认值为 `warning` |  |
| onClose | 关闭时触发的回调函数 | (e: MouseEvent) => void | - |  |

### Alert.ErrorBoundary

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| description | 自定义错误内容，如果未指定会展示报错堆栈 | ReactNode | {{ error stack }} |  |
| ~~message~~ | 自定义错误标题，如果未指定会展示原生报错信息，请使用 `title` 替换 | ReactNode | {{ error }} |  |
| title | 自定义错误标题，如果未指定会展示原生报错信息 | ReactNode | {{ error }} |  |

## Semantic DOM

<code src="./demo/_semantic.tsx" simplify="true"></code>

## Design Token

<ComponentTokenTable component="Alert"></ComponentTokenTable>
