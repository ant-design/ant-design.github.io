---
category: Components
group: Data Display
title: Timeline
description: Vertical display timeline.
cover: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*FkTySqNt3sYAAAAAAAAAAAAADrJ8AQ/original
coverDark: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*yIl9S4hAIBcAAAAAAAAAAAAADrJ8AQ/original
demo:
  cols: 2
---

## When To Use

- When a series of information needs to be ordered by time (ascending or descending).
- When you need a timeline to make a visual connection.

<!-- prettier-ignore -->
:::info{title="Upgrade Tip"}
After version 5.2.0, we provide a simpler usage `<Timeline items={[...]} />` with better performance and potential of writing simpler code style in your applications.
Meanwhile, we deprecated the old usage in browser console, we will remove it in antd 6.0.
:::

```jsx
// works when >=5.2.0, recommended ✅
const items = [{ children: 'sample', label: 'sample' }];
return <Timeline items={items} />;

// works when <5.2.0, deprecated when >=5.2.0 🙅🏻‍♀️
return (
  <Timeline onChange={onChange}>
    <Timeline.Item>Sample</Timeline.Item>
  </Timeline>
);
```

## Examples

<!-- prettier-ignore -->
<code src="./demo/basic.tsx">Basic</code>
<code src="./demo/color.tsx">Color</code>
<code src="./demo/pending.tsx">Last node and Reversing</code>
<code src="./demo/alternate.tsx">Alternate</code>
<code src="./demo/custom.tsx">Custom</code>
<code src="./demo/right.tsx">Right alternate</code>
<code src="./demo/label.tsx">Label</code>
<code src="./demo/wireframe.tsx" debug>Wireframe</code>
<code src="./demo/component-token.tsx" debug>Component Token</code>

## API

Common props ref：[Common props](/docs/react/common-props)

### Timeline

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| mode | By sending `alternate` the timeline will distribute the nodes to the left and right | `left` \| `alternate` \| `right` | - |  |
| pending | Set the last ghost node's existence or its content | ReactNode | false |  |
| pendingDot | Set the dot of the last ghost node when pending is true | ReactNode | &lt;LoadingOutlined /&gt; |  |
| reverse | Whether reverse nodes or not | boolean | false |  |
| items | Each node of timeline | [Items](#Items)[] | - | 5.2.0 |

### Items

Node of timeline.

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| color | Set the circle's color to `blue`, `red`, `green`, `gray` or other custom colors | string | `blue` |
| dot | Customize timeline dot | ReactNode | - |
| label | Set the label | ReactNode | - |
| children | Set the content | ReactNode | - |
| position | Customize node position | `left` \| `right` | - |

## Semantic DOM

<code src="./demo/_semantic.tsx" simplify="true"></code>

## Design Token

<ComponentTokenTable component="Timeline"></ComponentTokenTable>
