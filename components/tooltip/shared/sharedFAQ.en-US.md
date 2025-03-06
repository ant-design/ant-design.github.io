<Antd component="Alert" message="The following FAQ applies to Tooltip, Popconfirm, Popover components." type="warning" banner="true"></Antd>

### Why does the warning `findDOMNode is deprecated` sometimes appear in strict mode?

This is due to the implementation of `rc-trigger`. `rc-trigger` forces children to accept ref, otherwise it will fall back to findDOMNode, so children need to be native html tags. If not, you need to use `React.forwardRef` transparently passes `ref` to native html tags.

- `findDOMNode is deprecated` reproduce: <https://codesandbox.io/p/sandbox/finddomnode-c5hy96>
- Using `forwardRef` to fix: <https://codesandbox.io/p/sandbox/no-finddomnode-warning-forked-gdxczs>

### Why is the tooltip for my custom component not opening?

Similar issues: [#15909](https://github.com/ant-design/ant-design/issues/15909), [#12812](https://github.com/ant-design/ant-design/issues/12812).

Please ensure that the child node to accept `onMouseEnter`, `onMouseLeave`, `onPointerEnter`, `onPointerLeave`, `onFocus`, and `onClick` events, If you create your own component and do not explicitly add these mouse and pointer events as props, the tooltip will never appear. [See Example](http://ant.design/components/tooltip#tooltip-demo-wrap-custom-component).

### What's the placement logic?

It will follow `placement` config when screen has enough space. And flip when space is not enough (Such as `top` to `bottom` or `topLeft` to `bottomLeft`). Single direction such as `top` `bottom` `left` `right` will auto shift on the view:

<img alt="shift" height="200" src="https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*sxaTTJjLtIMAAAAAAAAAAAAADrJ8AQ/original" />

When `placement` is set to edge align such as `topLeft` `bottomRight`, it will only do flip but not do shift.
