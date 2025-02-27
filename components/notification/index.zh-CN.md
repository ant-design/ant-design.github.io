---
category: Components
group: 反馈
noinstant: true
title: Notification
subtitle: 通知提醒框
description: 全局展示通知提醒信息。
cover: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*cRmqTY4nKPEAAAAAAAAAAAAADrJ8AQ/original
coverDark: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*W3RmSov-xVMAAAAAAAAAAAAADrJ8AQ/original
demo:
  cols: 2
---

## 何时使用

在系统四个角显示通知提醒信息。经常用于以下情况：

- 较为复杂的通知内容。
- 带有交互的通知，给出用户下一步的行动点。
- 系统主动推送。

## 代码演示

<!-- prettier-ignore -->
<code src="./demo/hooks.tsx">Hooks 调用（推荐）</code>
<code src="./demo/duration.tsx">自动关闭的延时</code>
<code src="./demo/with-icon.tsx">带有图标的通知提醒框</code>
<code src="./demo/with-btn.tsx">自定义按钮</code>
<code src="./demo/custom-icon.tsx">自定义图标</code>
<code src="./demo/placement.tsx">位置</code>
<code src="./demo/custom-style.tsx">自定义样式</code>
<code src="./demo/update.tsx">更新消息内容</code>
<code src="./demo/stack.tsx" version="5.10.0">堆叠</code>
<code src="./demo/show-with-progress.tsx" version="5.18.0">显示进度条</code>
<code src="./demo/basic.tsx">静态方法（不推荐）</code>
<code src="./demo/progress-color.tsx">自定义进度条颜色</code>
<code src="./demo/render-panel.tsx" debug>_InternalPanelDoNotUseOrYouWillBeFired</code>

## API

通用属性参考：[通用属性](/docs/react/common-props)

- `notification.success(config)`
- `notification.error(config)`
- `notification.info(config)`
- `notification.warning(config)`
- `notification.open(config)`
- `notification.destroy(key?: String)`

config 参数如下：

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| actions | 自定义按钮组 | ReactNode | - | 5.24.0 |
| ~~btn~~ | 自定义按钮组，请使用 `actions` 替换 | ReactNode | - | - |
| className | 自定义 CSS class | string | - | - |
| closeIcon | 自定义关闭图标 | ReactNode | true | 5.7.0：设置为 null 或 false 时隐藏关闭按钮 |
| description | 通知提醒内容，必选 | ReactNode | - | - |
| duration | 默认 4.5 秒后自动关闭，配置为 null 则不自动关闭 | number | 4.5 | - |
| showProgress | 显示自动关闭通知框的进度条 | boolean |  | 5.18.0 |
| pauseOnHover | 悬停时是否暂停计时器 | boolean | true | 5.18.0 |
| icon | 自定义图标 | ReactNode | - | - |
| key | 当前通知唯一标志 | string | - | - |
| message | 通知提醒标题，必选 | ReactNode | - | - |
| placement | 弹出位置，可选 `top` \| `topLeft` \| `topRight` \| `bottom` \| `bottomLeft` \| `bottomRight` | string | `topRight` | - |
| style | 自定义内联样式 | [CSSProperties](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/e434515761b36830c3e58a970abf5186f005adac/types/react/index.d.ts#L794) | - | - |
| role | 供屏幕阅读器识别的通知内容语义，默认为 `alert`。此情况下屏幕阅读器会立即打断当前正在阅读的其他内容，转而阅读通知内容 | `alert \| status` | `alert` | 5.6.0 |
| onClick | 点击通知时触发的回调函数 | function | - | - |
| onClose | 当通知关闭时触发 | function | - | - |
| props | 透传至通知 `div` 上的 props 对象，支持传入 `data-*` `aria-*` 或 `role` 作为对象的属性。需要注意的是，虽然在 TypeScript 类型中声明的类型支持传入 `data-*` 作为对象的属性，但目前只允许传入 `data-testid` 作为对象的属性。 详见 https://github.com/microsoft/TypeScript/issues/28960 | Object | - | - |

- `notification.useNotification(config)`

config 参数如下：

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| bottom | 消息从底部弹出时，距离底部的位置，单位像素 | number | 24 |  |
| closeIcon | 自定义关闭图标 | ReactNode | true | 5.7.0：设置为 null 或 false 时隐藏关闭按钮 |
| getContainer | 配置渲染节点的输出位置 | () => HTMLNode | () => document.body |  |
| placement | 弹出位置，可选 `top` \| `topLeft` \| `topRight` \| `bottom` \| `bottomLeft` \| `bottomRight` | string | `topRight` |  |
| showProgress | 显示自动关闭通知框的进度条 | boolean |  | 5.18.0 |
| pauseOnHover | 悬停时是否暂停计时器 | boolean | true | 5.18.0 |
| rtl | 是否开启 RTL 模式 | boolean | false |  |
| stack | 堆叠模式，超过阈值时会将所有消息收起 | boolean \| `{ threshold: number }` | `{ threshold: 3 }` | 5.10.0 |
| top | 消息从顶部弹出时，距离顶部的位置，单位像素 | number | 24 |  |
| maxCount | 最大显示数，超过限制时，最早的消息会被自动关闭 | number | - | 4.17.0 |

### 全局配置

还提供了一个全局配置方法，在调用前提前配置，全局一次生效。

`notification.config(options)`

> 当你使用 `ConfigProvider` 进行全局化配置时，系统会默认自动开启 RTL 模式。(4.3.0+)
>
> 当你想单独使用，可通过如下设置开启 RTL 模式。

```js
notification.config({
  placement: 'bottomRight',
  bottom: 50,
  duration: 3,
  rtl: true,
});
```

#### notification.config

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| bottom | 消息从底部弹出时，距离底部的位置，单位像素 | number | 24 |  |
| closeIcon | 自定义关闭图标 | ReactNode | true | 5.7.0：设置为 null 或 false 时隐藏关闭按钮 |
| duration | 默认自动关闭延时，单位秒 | number | 4.5 |  |
| showProgress | 显示自动关闭通知框的进度条 | boolean |  | 5.18.0 |
| pauseOnHover | 悬停时是否暂停计时器 | boolean | true | 5.18.0 |
| getContainer | 配置渲染节点的输出位置，但依旧为全屏展示 | () => HTMLNode | () => document.body |  |
| placement | 弹出位置，可选 `top` `topLeft` `topRight` `bottom` `bottomLeft` `bottomRight` | string | `topRight` |  |
| rtl | 是否开启 RTL 模式 | boolean | false |  |
| top | 消息从顶部弹出时，距离顶部的位置，单位像素 | number | 24 |  |
| maxCount | 最大显示数，超过限制时，最早的消息会被自动关闭 | number | - | 4.17.0 |

## 主题变量（Design Token）

<ComponentTokenTable component="Notification"></ComponentTokenTable>

## FAQ

### 为什么 notification 不能获取 context、redux 的内容和 ConfigProvider 的 `locale/prefixCls/theme` 等配置？

直接调用 notification 方法，antd 会通过 `ReactDOM.render` 动态创建新的 React 实体。其 context 与当前代码所在 context 并不相同，因而无法获取 context 信息。

当你需要 context 信息（例如 ConfigProvider 配置的内容）时，可以通过 `notification.useNotification` 方法会返回 `api` 实体以及 `contextHolder` 节点。将其插入到你需要获取 context 位置即可：

```tsx
const [api, contextHolder] = notification.useNotification();

return (
  <Context1.Provider value="Ant">
    {/* contextHolder 在 Context1 内，它可以获得 Context1 的 context */}
    {contextHolder}
    <Context2.Provider value="Design">
      {/* contextHolder 在 Context2 外，因而不会获得 Context2 的 context */}
    </Context2.Provider>
  </Context1.Provider>
);
```

**异同**：通过 hooks 创建的 `contextHolder` 必须插入到子元素节点中才会生效，当你不需要上下文信息时请直接调用。

> 可通过 [App 包裹组件](/components/app-cn) 简化 `useNotification` 等方法需要手动植入 contextHolder 的问题。

### 静态方法如何设置 prefixCls ？

你可以通过 [`ConfigProvider.config`](/components/config-provider-cn#configproviderconfig-4130) 进行设置。
