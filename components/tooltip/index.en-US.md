---
category: Components
group: Data Display
title: Tooltip
description: Simple text popup box.
cover: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*9LKlRbWytugAAAAAAAAAAAAADrJ8AQ/original
coverDark: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*bCbPTJ7LQngAAAAAAAAAAAAADrJ8AQ/original
demo:
  cols: 2
---

## When To Use

- The tip is shown on mouse enter, and is hidden on mouse leave. The Tooltip doesn't support complex text or operations.
- To provide an explanation of a `button/text/operation`. It's often used instead of the html `title` attribute.

## Examples

<!-- prettier-ignore -->
<code src="./demo/basic.tsx">Basic</code>
<code src="./demo/placement.tsx">Placement</code>
<code src="./demo/arrow.tsx">Arrow</code>
<code src="./demo/shift.tsx" iframe="300">Auto Shift</code>
<code src="./demo/auto-adjust-overflow.tsx" debug>Adjust placement automatically</code>
<code src="./demo/destroy-tooltip-on-hide.tsx" debug>Destroy tooltip when hidden</code>
<code src="./demo/colorful.tsx">Colorful Tooltip</code>
<code src="./demo/render-panel.tsx" debug>_InternalPanelDoNotUseOrYouWillBeFired</code>
<code src="./demo/debug.tsx" debug>Debug</code>
<code src="./demo/disabled.tsx">Disabled</code>
<code src="./demo/disabled-children.tsx" debug>Disabled children</code>
<code src="./demo/wrap-custom-component.tsx" debug>Wrap custom component</code>

## API

Common props ref：[Common props](/docs/react/common-props)

| Property | Description                   | Type                         | Default |
| -------- | ----------------------------- | ---------------------------- | ------- |
| title    | The text shown in the tooltip | ReactNode \| () => ReactNode | -       |

### Common API

<embed src="./shared/sharedProps.en-US.md"></embed>

## Semantic DOM

<code src="./demo/_semantic.tsx" simplify="true"></code>

## Design Token

<ComponentTokenTable component="Tooltip"></ComponentTokenTable>

## FAQ

### Why does the warning `findDOMNode is deprecated` sometimes appear in strict mode?

This is due to the implementation of `rc-trigger`. `rc-trigger` forces children to accept ref, otherwise it will fall back to findDOMNode, so children need to be native html tags. If not, you need to use `React.forwardRef` transparently passes `ref` to native html tags.

- `findDOMNode is deprecated` reproduce: <https://codesandbox.io/p/sandbox/finddomnode-c5hy96>
- Using `forwardRef` to fix: <https://codesandbox.io/p/sandbox/no-finddomnode-warning-forked-gdxczs>

#### Why is the tooltip for my custom component not opening?

The `Tooltip` component requires the child node to accept `onMouseEnter`, `onMouseLeave`, `onPointerEnter`, `onPointerLeave`, `onFocus`, and `onClick` events, so if you create your own component and do not explicitly add these mouse and pointer events as props, the tooltip will never appear. (See "Wrap custom component" example.)

See https://github.com/ant-design/ant-design/issues/15909#issuecomment-480659039

See https://github.com/ant-design/ant-design/issues/15909

### What's the placement logic?

It will follow `placement` config when screen has enough space. And flip when space is not enough (Such as `top` to `bottom` or `topLeft` to `bottomLeft`). Single direction such as `top` `bottom` `left` `right` will auto shift on the view:

<img alt="shift" height="200" src="https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*sxaTTJjLtIMAAAAAAAAAAAAADrJ8AQ/original" />

When `placement` is set to edge align such as `topLeft` `bottomRight`, it will only do flip but not do shift.

### Why Tooltip not update content when close?

Tooltip will cache content when it is closed to avoid flicker when content is updated:

```jsx
// `title` will not blink when `user` is empty
<Tooltip open={user} title={user?.name} />
```

<div>
<img alt="no blink" height="50" src="https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*KVx7QLOYwVsAAAAAAAAAAAAADrJ8AQ/original" />
</div>

If need update content when close, you can set `fresh` property ([#44830](https://github.com/ant-design/ant-design/issues/44830)):

```jsx
<Tooltip open={user} title={user?.name} fresh />
```

<div>
<img alt="no blink" height="50" src="https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*rUbsR4xWpMsAAAAAAAAAAAAADrJ8AQ/original" />
</div>
