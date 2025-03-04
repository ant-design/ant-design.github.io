---
category: Components
title: Alert
description: Display warning messages that require attention.
cover: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*QsvtS41m45UAAAAAAAAAAAAADrJ8AQ/original
coverDark: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*gOTISoMFZV0AAAAAAAAAAAAADrJ8AQ/original
demo:
  cols: 2
group:
  title: Feedback
  order: 6
---

## When To Use

- When you need to show alert messages to users.
- When you need a persistent static container which is closable by user actions.

## Examples

<!-- prettier-ignore -->
<code src="./demo/basic.tsx">Basic</code>
<code src="./demo/style.tsx">More types</code>
<code src="./demo/closable.tsx">Closable</code>
<code src="./demo/description.tsx">Description</code>
<code src="./demo/icon.tsx">Icon</code>
<code src="./demo/banner.tsx" iframe="250">Banner</code>
<code src="./demo/loop-banner.tsx">Loop Banner</code>
<code src="./demo/smooth-closed.tsx">Smoothly Unmount</code>
<code src="./demo/error-boundary.tsx">ErrorBoundary</code>
<code src="./demo/custom-icon.tsx" debug>Custom Icon</code>
<code src="./demo/action.tsx">Custom action</code>
<code src="./demo/component-token.tsx" debug>Component Token</code>

## API

Common props ref：[Common props](/docs/react/common-props)

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| action | The action of Alert | ReactNode | - | 4.9.0 |
| afterClose | Called when close animation is finished | () => void | - |  |
| banner | Whether to show as banner | boolean | false |  |
| closable | The config of closable, >=5.15.0: support `aria-*` | boolean \| ({ closeIcon?: React.ReactNode } & React.AriaAttributes) | `false` |  |
| description | Additional content of Alert | ReactNode | - |  |
| icon | Custom icon, effective when `showIcon` is true | ReactNode | - |  |
| icons | Built-in icons | { info?: ReactNode; success?: ReactNode; warning?: ReactNode; error?: ReactNode; close?: ReactNode; } | `{ info: <InfoCircleFilled/>, success: <CheckCircleFilled/>, warning: <ExclamationCircleFilled/>, error: <CloseCircleFilled/>, close: <CloseOutlined/> }` | 6.0.0 |
| ~~message~~ | Content of Alert, please use `title` instead | ReactNode | - |  |
| title | Content of Alert | ReactNode | - |  |
| showIcon | Whether to show icon | boolean | false, in `banner` mode default is true |  |
| type | Type of Alert styles, options: `success`, `info`, `warning`, `error` | string | `info`, in `banner` mode default is `warning` |  |
| onClose | Callback when Alert is closed | (e: MouseEvent) => void | - |  |

### Alert.ErrorBoundary

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| description | Custom error description to show | ReactNode | {{ error stack }} |  |
| ~~message~~ | Custom error message to show, please use `title` instead | ReactNode | {{ error }} |  |
| title | Custom error title to show | ReactNode | {{ error }} |  |

## Semantic DOM

<code src="./demo/_semantic.tsx" simplify="true"></code>

## Design Token

<ComponentTokenTable component="Alert"></ComponentTokenTable>
