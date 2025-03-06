<Antd component="Alert" message="以下常见问题均适用于 Tooltip、Popconfirm、Popover 组件" type="warning" banner="true"></Antd>

### 为何在严格模式中有时候会出现 `findDOMNode is deprecated` 这个警告？

这是由于 `rc-trigger` 的实现方式导致的，`rc-trigger` 强制要求 children 能够接受 ref，否则就会 fallback 到 findDOMNode，所以 children 需要是原生 html 标签，如果不是，则需要使用 `React.forwardRef` 把 `ref` 透传到原生 html 标签。

- `findDOMNode is deprecated` 重现：<https://codesandbox.io/p/sandbox/finddomnode-c5hy96>
- 使用 `forwardRef` 消除警告：<https://codesandbox.io/p/sandbox/no-finddomnode-warning-forked-gdxczs>

### 为什么自定义子组件无法正常工作？

类似问题: [#15909](https://github.com/ant-design/ant-design/issues/15909), [#12812](https://github.com/ant-design/ant-design/issues/12812)。

请确保子元素能接受 `onMouseEnter`、`onMouseLeave`、`onPointerEnter`、`onPointerLeave`、`onFocus`、`onClick` 事件。[参考示例](http://ant.design/components/tooltip-cn#tooltip-demo-wrap-custom-component)

### placement 的行为逻辑是什么？

当屏幕空间足够时，会按照 `placement` 的设置进行弹层。当空间不足时则会取反向位置进行弹层（例如 `top` 不够时，会改为 `bottom`，`topLeft` 不够时会改为 `bottomLeft`）。单一方向如 `top` `bottom` `left` `right` 当贴边时进行自动位移：

<img alt="shift" height="200" src="https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*sxaTTJjLtIMAAAAAAAAAAAAADrJ8AQ/original" />

当设置为边缘对齐方向如 `topLeft` `bottomRight` 等，则会仅做翻转而不做位移。
