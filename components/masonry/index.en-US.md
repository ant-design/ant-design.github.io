---
category: Components
group: Layout
title: Masonry
cover: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*e8nNSayZcBMAAAAAAAAAAAAADrJ8AQ/original
coverDark: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*e8nNSayZcBMAAAAAAAAAAAAADrJ8AQ/original
demo:
  cols: 1
tag: 6.0.0
---

A masonry layout component for displaying content with different heights.

## When To Use

- When displaying images or cards with irregular heights
- When content needs to be evenly distributed in columns
- When column count needs to be responsive

## Examples

<!-- prettier-ignore -->
<code src="./demo/basic.tsx">Basic</code>
<code src="./demo/responsive.tsx">Responsive</code>
<code src="./demo/image.tsx">Image</code>
<code src="./demo/dynamic.tsx">Dynamic</code>
<code src="./demo/fresh.tsx" debug>Fresh</code>

## API

Common props ref：[Common props](/docs/react/common-props)

## Masonry

| Parameter | Description | Type | Default Value |
| --- | --- | --- | --- |
| classNames | Semantic structure className | [Record<SemanticDOM, string>](#semantic-dom) | - |
| columns | Number of columns, can be a fixed value or a responsive configuration | `number \| { xs?: number; sm?: number; md?: number }` | `3` |
| fresh | Whether to continuously monitor the size changes of child items | `boolean` | `false` |
| gutter | Spacing, can be a fixed value, responsive configuration, or a configuration for horizontal and vertical spacing | [Gap](#gap) \| \[[Gap](#gap), [Gap](#gap)\] | `0` |
| items | Masonry items | [MasonryItem](#masonryitem)[] | - |
| itemRender | Custom item rendering function | `(item: MasonryItem) => React.ReactNode` | - |
| styles | Semantic structure style | [Record<SemanticDOM, CSSProperties>](#semantic-dom) | - |
| onSortChange | Callback for column sorting changes | `({ key: React.Key; column: number }[]) => void` | - |

### MasonryItem

| Parameter | Description | Type | Default Value |
| --- | --- | --- | --- |
| children | Custom display content, takes precedence over `itemRender` | `React.ReactNode` | - |
| column | Specifies the column to which the item belongs | `number` | - |
| data | Custom data storage | `T` | - |
| height | Height of the item | `number` | - |
| key | Unique identifier for the item | `string` \| `number` | - |

### Gap

`Gap` represents the spacing between items. It can either be a fixed value or a responsive configuration.

```ts
type Gap = undefined | number | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl', number>>;
```

## Semantic DOM

<code src="./demo/_semantic.tsx" simplify="true"></code>

## Design Token

<ComponentTokenTable component="Alert"></ComponentTokenTable>
