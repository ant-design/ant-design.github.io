---
category: Components
group: Layout
title: Space
description: Set components spacing.
cover: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*ZiJ3SbOH9SUAAAAAAAAAAAAADrJ8AQ/original
coverDark: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*37T2R6O9oi0AAAAAAAAAAAAADrJ8AQ/original
---

## When To Use

- Avoid components clinging together and set a unified space.
- Use Space.Compact when child form components are compactly connected and the border is collapsed (After version `antd@4.24.0` Supported).

### Difference with Flex component

- Space is used to set the spacing between inline elements. It will add a wrapper element for each child element for inline alignment. Suitable for equidistant arrangement of multiple child elements in rows and columns.
- Flex is used to set the layout of block-level elements. It does not add a wrapper element. Suitable for layout of child elements in vertical or horizontal direction, and provides more flexibility and control.

## Examples

<!-- prettier-ignore -->
<code src="./demo/base.tsx">Basic Usage</code>
<code src="./demo/vertical.tsx">Vertical Space</code>
<code src="./demo/size.tsx">Space Size</code>
<code src="./demo/align.tsx">Align</code>
<code src="./demo/wrap.tsx">Wrap</code>
<code src="./demo/split.tsx">Split</code>
<code src="./demo/compact.tsx">Compact Mode for form component</code>
<code src="./demo/compact-buttons.tsx">Button Compact Mode</code>
<code src="./demo/compact-button-vertical.tsx">Vertical Compact Mode</code>
<code src="./demo/compact-debug.tsx" debug>Input addon debug</code>
<code src="./demo/compact-nested.tsx" debug>Nested Space Compact</code>
<code src="./demo/debug.tsx" debug>Diverse Child</code>
<code src="./demo/gap-in-line.tsx" debug>Flex gap style</code>

## API

Common props ref：[Common props](/docs/react/common-props)

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| align | Align items | `start` \| `end` \|`center` \|`baseline` | - | 4.2.0 |
| block | Option to fit width to its parent\'s width | boolean | false | 5.25.0 |
| classNames | Semantic className | [Record<SemanticDOM, string>](#semantic-dom) | - |  |
| direction | The space direction | `vertical` \| `horizontal` | `horizontal` | 4.1.0 |
| size | The space size | [Size](#size) \| [Size\[\]](#size) | `small` | 4.1.0 \| Array: 4.9.0 |
| split | Set split | ReactNode | - | 4.7.0 |
| styles | Semantic style | [Record<SemanticDOM, CSSProperties>](#semantic-dom) | - |  |
| wrap | Auto wrap line, when `horizontal` effective | boolean | false | 4.9.0 |

### Size

`'small' | 'middle' | 'large' | number`

### Space.Compact

Use Space.Compact when child form components are compactly connected and the border is collapsed. The supported components are：

- Button
- AutoComplete
- Cascader
- DatePicker
- Input/Input.Search
- InputNumber
- Select
- TimePicker
- TreeSelect

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| block | Option to fit width to its parent\'s width | boolean | false | 4.24.0 |
| direction | Set direction of layout | `vertical` \| `horizontal` | `horizontal` | 4.24.0 |
| size | Set child component size | `large` \| `middle` \| `small` | `middle` | 4.24.0 |

## Semantic DOM

<code src="./demo/_semantic.tsx" simplify="true"></code>

## Design Token

<ComponentTokenTable component="Space"></ComponentTokenTable>
