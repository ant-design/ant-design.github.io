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
<code src="./demo/wrap-custom-component.tsx">Wrap custom component</code>

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

---

<!-- 请确保在 FAQ 最后 -->

<embed src="./shared/sharedFAQ.en-US.md"></embed>
