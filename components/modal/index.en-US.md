---
group: Feedback
category: Components
title: Modal
description: Display a modal dialog box, providing a title, content area, and action buttons.
cover: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*Z9vzQZAdJDQAAAAAAAAAAAAADrJ8AQ/original
coverDark: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*WtgsSLPa1Z4AAAAAAAAAAAAADrJ8AQ/original
demo:
  cols: 2
---

## When To Use

When requiring users to interact with the application, but without jumping to a new page and interrupting the user's workflow, you can use `Modal` to create a new floating layer over the current page to get user feedback or display information.

Additionally, if you need to show a simple confirmation dialog, you can use [`App.useApp`](/components/app/) hooks.

## Examples

<!-- prettier-ignore -->
<code src="./demo/basic.tsx">Basic</code>
<code src="./demo/async.tsx">Asynchronously close</code>
<code src="./demo/footer.tsx">Customized Footer</code>
<code src="./demo/loading.tsx" version="5.18.0">Loading</code>
<code src="./demo/footer-render.tsx" version="5.9.0">Customized Footer render function</code>
<code src="./demo/hooks.tsx">Use hooks to get context</code>
<code src="./demo/locale.tsx">Internationalization</code>
<code src="./demo/manual.tsx">Manual to update destroy</code>
<code src="./demo/position.tsx">To customize the position of modal</code>
<code src="./demo/dark.tsx" debug>Dark Bg</code>
<code src="./demo/button-props.tsx">Customize footer buttons props</code>
<code src="./demo/modal-render.tsx">Custom modal content render</code>
<code src="./demo/width.tsx">To customize the width of modal</code>
<code src="./demo/static-info.tsx">Static Method</code>
<code src="./demo/confirm.tsx">Static confirmation</code>
<code src="./demo/classNames.tsx">Customize className for build-in module</code>
<code src="./demo/confirm-router.tsx">destroy confirmation modal dialog</code>
<code src="./demo/nested.tsx" debug>Nested Modal</code>
<code src="./demo/render-panel.tsx" debug>\_InternalPanelDoNotUseOrYouWillBeFired</code>
<code src="./demo/custom-mouse-position.tsx" debug>Control modal's animation origin position</code>
<code src="./demo/wireframe.tsx" debug>Wireframe</code>
<code src="./demo/component-token.tsx" debug>Component Token</code>

## API

Common props ref：[Common props](/docs/react/common-props)

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| afterClose | Specify a function that will be called when modal is closed completely | function | - |  |
| classNames | Config Modal build-in module's className | [Record<SemanticDOM, string>](#semantic-dom) | - |  |
| icons | Built-in icons | { info?: ReactNode; success?: ReactNode; warning?: ReactNode; error?: ReactNode; close?: ReactNode; } | `{ info: <InfoCircleFilled/>, success: <CheckCircleFilled/>, warning: <ExclamationCircleFilled/>, error: <CloseCircleFilled/>, close: <CloseOutlined/> }` | 6.0.0 |
| styles | Config Modal build-in module's style | [Record<SemanticDOM, CSSProperties>](#semantic-dom) | - | 5.10.0 |
| cancelButtonProps | The cancel button props | [ButtonProps](/components/button/#api) | - |  |
| cancelText | Text of the Cancel button | ReactNode | `Cancel` |  |
| centered | Centered Modal | boolean | false |  |
| closable | Whether a close (x) button is visible on top right or not | boolean \| { closeIcon?: React.ReactNode; disabled?: boolean; } | true |  |
| closeIcon | Custom close icon. 5.7.0: close button will be hidden when setting to `null` or `false` | ReactNode | &lt;CloseOutlined /> |  |
| confirmLoading | Whether to apply loading visual effect for OK button or not | boolean | false |  |
| destroyOnClose | Whether to unmount child components on onClose | boolean | false |  |
| focusTriggerAfterClose | Whether need to focus trigger element after dialog is closed | boolean | true | 4.9.0 |
| footer | Footer content, set as `footer={null}` when you don't need default buttons | React.ReactNode \| ((params:[footerRenderParams](/components/modal#footerrenderparams))=> React.ReactNode) | (OK and Cancel buttons) | renderFunction: 5.9.0 |
| forceRender | Force render Modal | boolean | false |  |
| getContainer | The mounted node for Modal but still display at fullscreen | HTMLElement \| () => HTMLElement \| Selectors \| false | document.body |  |
| keyboard | Whether support press esc to close | boolean | true |  |
| mask | Whether show mask or not | boolean | true |  |
| maskClosable | Whether to close the modal dialog when the mask (area outside the modal) is clicked | boolean | true |  |
| modalRender | Custom modal content render | (node: ReactNode) => ReactNode | - | 4.7.0 |
| okButtonProps | The ok button props | [ButtonProps](/components/button/#api) | - |  |
| okText | Text of the OK button | ReactNode | `OK` |  |
| okType | Button `type` of the OK button | string | `primary` |  |
| style | Style of floating layer, typically used at least for adjusting the position | CSSProperties | - |  |
| loading | Show the skeleton | boolean |  | 5.18.0 |
| title | The modal dialog's title | ReactNode | - |  |
| open | Whether the modal dialog is visible or not | boolean | false |  |
| width | Width of the modal dialog | string \| number \| [Breakpoint](/components/grid-cn#col) | 520 | Breakpoint: 5.23.0 |
| wrapClassName | The class name of the container of the modal dialog | string | - |  |
| zIndex | The `z-index` of the Modal | number | 1000 |  |
| onCancel | Specify a function that will be called when a user clicks mask, close button on top right or Cancel button | function(e) | - |  |
| onOk | Specify a function that will be called when a user clicks the OK button | function(e) | - |  |
| afterOpenChange | Callback when the animation ends when Modal is turned on and off | (open: boolean) => void | - | 5.4.0 |

#### Note

- The state of Modal will be preserved at it's component lifecycle by default, if you wish to open it with a brand new state every time, set `destroyOnClose` on it.
- There is a situation that using `<Modal />` with Form, which won't clear fields value when closing Modal even you have set `destroyOnClose`. You need `<Form preserve={false} />` in this case.
- `Modal.method()` RTL mode only supports hooks.

### Modal.method()

There are five ways to display the information based on the content's nature:

- `Modal.info`
- `Modal.success`
- `Modal.error`
- `Modal.warning`
- `Modal.confirm`

The items listed above are all functions, expecting a settings object as parameter. The properties of the object are follows:

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| afterClose | Specify a function that will be called when modal is closed completely | function | - | 4.9.0 |
| autoFocusButton | Specify which button to autofocus | null \| `ok` \| `cancel` | `ok` |  |
| cancelButtonProps | The cancel button props | [ButtonProps](/components/button/#api) | - |  |
| cancelText | Text of the Cancel button with Modal.confirm | string | `Cancel` |  |
| centered | Centered Modal | boolean | false |  |
| className | The className of container | string | - |  |
| closable | Whether a close (x) button is visible on top right of the confirm dialog or not | boolean | false | 4.9.0 |
| closeIcon | Custom close icon | ReactNode | undefined | 4.9.0 |
| content | Content | ReactNode | - |  |
| footer | Footer content, set as `footer: null` when you don't need default buttons | React.ReactNode \| ((params:[footerRenderParams](/components/modal#footerrenderparams))=> React.ReactNode) | - | renderFunction: 5.9.0 |
| getContainer | Return the mount node for Modal | HTMLElement \| () => HTMLElement \| Selectors \| false | document.body |  |
| icon | Custom icon | ReactNode | &lt;ExclamationCircleFilled /> |  |
| keyboard | Whether support press esc to close | boolean | true |  |
| mask | Whether show mask or not. | boolean | true |  |
| maskClosable | Whether to close the modal dialog when the mask (area outside the modal) is clicked | boolean | false |  |
| okButtonProps | The ok button props | [ButtonProps](/components/button/#api) | - |  |
| okText | Text of the OK button | string | `OK` |  |
| okType | Button `type` of the OK button | string | `primary` |  |
| style | Style of floating layer, typically used at least for adjusting the position | CSSProperties | - |  |
| title | Title | ReactNode | - |  |
| width | Width of the modal dialog | string \| number | 416 |  |
| wrapClassName | The class name of the container of the modal dialog | string | - | 4.18.0 |
| zIndex | The `z-index` of the Modal | number | 1000 |  |
| onCancel | Click to onCancel the callback, the parameter is the closing function, if it returns a promise, resolve means normal closing, reject means not closing | function(close) | - |  |
| onOk | Click to onOk the callback, the parameter is the closing function, if it returns a promise, resolve means normal closing, reject means not closing | function(close) | - |  |

All the `Modal.method`s will return a reference, and then we can update and close the modal dialog by the reference.

```jsx
const modal = Modal.info();

modal.update({
  title: 'Updated title',
  content: 'Updated content',
});

// on 4.8.0 or above, you can pass a function to update modal
modal.update((prevConfig) => ({
  ...prevConfig,
  title: `${prevConfig.title} (New)`,
}));

modal.destroy();
```

- `Modal.destroyAll`

`Modal.destroyAll()` could destroy all confirmation modal dialogs(`Modal.confirm|success|info|error|warning`). Usually, you can use it in router change event to destroy confirm modal dialog automatically without use modal reference to close( it's too complex to use for all modal dialogs)

```jsx
import { browserHistory } from 'react-router';

// router change
browserHistory.listen(() => {
  Modal.destroyAll();
});
```

### Modal.useModal()

When you need using Context, you can use `contextHolder` which created by `Modal.useModal` to insert into children. Modal created by hooks will get all the context where `contextHolder` are. Created `modal` has the same creating function with `Modal.method`.

```jsx
const [modal, contextHolder] = Modal.useModal();

React.useEffect(() => {
  modal.confirm({
    // ...
  });
}, []);

return <div>{contextHolder}</div>;
```

`modal.confirm` return method:

- `destroy`: Destroy current modal
- `update`: Update current modal
- `then`: (Hooks only) Promise chain call, support `await` operation

```tsx
// Return `true` when click `onOk` and `false` when click `onCancel`
const confirmed = await modal.confirm({ ... });
```

#### footerRenderParams

<!-- prettier-ignore -->
| Property | Description | Type | Default |
| --- | --- | --- | --- |
| originNode | default node | React.ReactNode | - |
| extra | extended options | { OkBtn: FC; CancelBtn: FC } | - |

## Semantic DOM

<code src="./demo/_semantic.tsx" simplify="true"></code>

## Design Token

<ComponentTokenTable component="Modal"></ComponentTokenTable>

## FAQ

### Why content not update when Modal closed?

Modal will use memo to avoid content jumping when closed. Also, if you use Form in Modal, you can reset `initialValues` by calling `resetFields` in effect.

### Why I can not access context, redux, ConfigProvider `locale/prefixCls` in Modal.xxx?

antd will dynamic create React instance by `ReactDOM.render` when call Modal methods. Whose context is different with origin code located context.

When you need context info (like ConfigProvider context), you can use `Modal.useModal` to get `modal` instance and `contextHolder` node. And put it in your children:

```tsx
const [modal, contextHolder] = Modal.useModal();

// then call modal.confirm instead of Modal.confirm

return (
  <Context1.Provider value="Ant">
    {/* contextHolder is in Context1, which means modal will get context of Context1 */}
    {contextHolder}
    <Context2.Provider value="Design">
      {/* contextHolder is out of Context2, which means modal will not get context of Context2 */}
    </Context2.Provider>
  </Context1.Provider>
);
```

**Note:** You must insert `contextHolder` into your children with hooks. You can use origin method if you do not need context connection.

> [App Package Component](/components/app) can be used to simplify the problem of `useModal` and other methods that need to manually implant contextHolder.

### How to set static methods prefixCls ？

You can config with [`ConfigProvider.config`](/components/config-provider#configproviderconfig-4130)
