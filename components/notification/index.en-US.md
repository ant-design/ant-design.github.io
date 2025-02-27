---
category: Components
group: Feedback
noinstant: true
title: Notification
description: Prompt notification message globally.
cover: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*cRmqTY4nKPEAAAAAAAAAAAAADrJ8AQ/original
coverDark: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*W3RmSov-xVMAAAAAAAAAAAAADrJ8AQ/original
demo:
  cols: 2
---

## When To Use

To display a notification message at any of the four corners of the viewport. Typically it can be used in the following cases:

- A notification with complex content.
- A notification providing a feedback based on the user interaction. Or it may show some details about upcoming steps the user may have to follow.
- A notification that is pushed by the application.

## Examples

<!-- prettier-ignore -->
<code src="./demo/hooks.tsx">Hooks usage (recommended)</code>
<code src="./demo/duration.tsx">Duration after which the notification box is closed</code>
<code src="./demo/with-icon.tsx">Notification with icon</code>
<code src="./demo/with-btn.tsx">Custom close button</code>
<code src="./demo/custom-icon.tsx">Customized Icon</code>
<code src="./demo/placement.tsx">Placement</code>
<code src="./demo/custom-style.tsx">Customized style</code>
<code src="./demo/update.tsx">Update Message Content</code>
<code src="./demo/stack.tsx" version="5.10.0">Stack</code>
<code src="./demo/show-with-progress.tsx" version="5.18.0">Show with progress</code>
<code src="./demo/basic.tsx">Static Method (deprecated)</code>
<code src="./demo/progress-color.tsx">Customize progress bar color</code>
<code src="./demo/render-panel.tsx" debug>_InternalPanelDoNotUseOrYouWillBeFired</code>

## API

Common props ref：[Common props](/docs/react/common-props)

- `notification.success(config)`
- `notification.error(config)`
- `notification.info(config)`
- `notification.warning(config)`
- `notification.open(config)`
- `notification.destroy(key?: String)`

The properties of config are as follows:

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| actions | Customized button group | ReactNode | - | 5.24.0 |
| ~~btn~~ | Customized close button group, please use `actions` instead | ReactNode | - | - |
| className | Customized CSS class | string | - | - |
| closeIcon | Custom close icon | ReactNode | true | 5.7.0: close button will be hidden when setting to null or false |
| description | The content of notification box (required) | ReactNode | - | - |
| duration | Time in seconds before Notification is closed. When set to 0 or null, it will never be closed automatically | number | 4.5 | - |
| showProgress | Show progress bar for auto-closing notification | boolean |  | 5.18.0 |
| pauseOnHover | keep the timer running or not on hover | boolean | true | 5.18.0 |
| icon | Customized icon | ReactNode | - | - |
| key | The unique identifier of the Notification | string | - | - |
| message | The title of notification box (required) | ReactNode | - | - |
| placement | Position of Notification, can be one of `top` \| `topLeft` \| `topRight` \| `bottom` \| `bottomLeft` \| `bottomRight` | string | `topRight` | - |
| style | Customized inline style | [CSSProperties](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/e434515761b36830c3e58a970abf5186f005adac/types/react/index.d.ts#L794) | - | - |
| role | The semantics of notification content recognized by screen readers. The default value is `alert`. When set as the default value, the screen reader will promptly interrupt any ongoing content reading and prioritize the notification content for immediate attention. | `alert \| status` | `alert` | 5.6.0 |
| onClick | Specify a function that will be called when the notification is clicked | function | - | - |
| onClose | Trigger when notification closed | function | - | - |
| props | An object that can contain `data-*`, `aria-*`, or `role` props, to be put on the notification `div`. This currently only allows `data-testid` instead of `data-*` in TypeScript. See https://github.com/microsoft/TypeScript/issues/28960. | Object | - | - |

- `notification.useNotification(config)`

The properties of config are as follows:

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| bottom | Distance from the bottom of the viewport, when `placement` is `bottom` `bottomRight` or `bottomLeft` (unit: pixels) | number | 24 |  |
| closeIcon | Custom close icon | ReactNode | true | 5.7.0: close button will be hidden when setting to null or false |
| getContainer | Return the mount node for Notification | () => HTMLNode | () => document.body |  |
| placement | Position of Notification, can be one of `top` \| `topLeft` \| `topRight` \| `bottom` \| `bottomLeft` \| `bottomRight` | string | `topRight` |  |
| showProgress | Show progress bar for auto-closing notification | boolean |  | 5.18.0 |
| pauseOnHover | keep the timer running or not on hover | boolean | true | 5.18.0 |
| rtl | Whether to enable RTL mode | boolean | false |  |
| stack | Notifications will be stacked when amount is over threshold | boolean \| `{ threshold: number }` | `{ threshold: 3 }` | 5.10.0 |
| top | Distance from the top of the viewport, when `placement` is `top` `topRight` or `topLeft` (unit: pixels) | number | 24 |  |
| maxCount | Max Notification show, drop oldest if exceed limit | number | - | 4.17.0 |

`notification` also provides a global `config()` method that can be used for specifying the default options. Once this method is used, all the notification boxes will take into account these globally defined options when displaying.

### Global configuration

`notification.config(options)`

> When you use `ConfigProvider` for global configuration, the system will automatically start RTL mode by default.(4.3.0+)
>
> When you want to use it alone, you can start the RTL mode through the following settings.

#### notification.config

```js
notification.config({
  placement: 'bottomRight',
  bottom: 50,
  duration: 3,
  rtl: true,
});
```

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| bottom | Distance from the bottom of the viewport, when `placement` is `bottom` `bottomRight` or `bottomLeft` (unit: pixels) | number | 24 |  |
| closeIcon | Custom close icon | ReactNode | true | 5.7.0: close button will be hidden when setting to null or false |
| duration | Time in seconds before Notification is closed. When set to 0 or null, it will never be closed automatically | number | 4.5 |  |
| getContainer | Return the mount node for Notification, but still display at fullScreen | () => HTMLNode | () => document.body |  |
| placement | Position of Notification, can be one of `top` `topLeft` `topRight` `bottom` `bottomLeft` `bottomRight` | string | `topRight` |  |
| showProgress | Show progress bar for auto-closing notification | boolean |  | 5.18.0 |
| pauseOnHover | keep the timer running or not on hover | boolean | true | 5.18.0 |
| rtl | Whether to enable RTL mode | boolean | false |  |
| top | Distance from the top of the viewport, when `placement` is `top` `topRight` or `topLeft` (unit: pixels) | number | 24 |  |
| maxCount | Max Notification show, drop oldest if exceed limit | number | - | 4.17.0 |

## Design Token

<ComponentTokenTable component="Notification"></ComponentTokenTable>

## FAQ

### Why I can not access context, redux, ConfigProvider `locale/prefixCls/theme` in notification?

antd will dynamic create React instance by `ReactDOM.render` when call notification methods. Whose context is different with origin code located context.

When you need context info (like ConfigProvider context), you can use `notification.useNotification` to get `api` instance and `contextHolder` node. And put it in your children:

```tsx
const [api, contextHolder] = notification.useNotification();

return (
  <Context1.Provider value="Ant">
    {/* contextHolder is inside Context1 which means api will get value of Context1 */}
    {contextHolder}
    <Context2.Provider value="Design">
      {/* contextHolder is outside Context2 which means api will **not** get value of Context2 */}
    </Context2.Provider>
  </Context1.Provider>
);
```

**Note:** You must insert `contextHolder` into your children with hooks. You can use origin method if you do not need context connection.

> [App Package Component](/components/app) can be used to simplify the problem of `useNotification` and other methods that need to manually implant contextHolder.

### How to set static methods prefixCls ？

You can config with [`ConfigProvider.config`](/components/config-provider#configproviderconfig-4130)
