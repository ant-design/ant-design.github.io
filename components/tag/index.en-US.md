---
category: Components
group: Data Display
title: Tag
description: Used for marking and categorization.
cover: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*_SBsSrKLg00AAAAAAAAAAAAADrJ8AQ/original
coverDark: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*JPNAQYrVkYkAAAAAAAAAAAAADrJ8AQ/original
demo:
  cols: 2
---

## When To Use

- It can be used to tag by dimension or property.

- When categorizing.

## Examples

<!-- prettier-ignore -->
<code src="./demo/basic.tsx">Basic</code>
<code src="./demo/variant.tsx" debug>Transparent variant</code>
<code src="./demo/compact.tsx" debug>Combined Tag</code>
<code src="./demo/colorful.tsx">Colorful Tag</code>
<code src="./demo/colorful-inverse.tsx" debug>Inverse Colorful Tag</code>
<code src="./demo/control.tsx">Add & Remove Dynamically</code>
<code src="./demo/checkable.tsx">Checkable</code>
<code src="./demo/animation.tsx">Animate</code>
<code src="./demo/icon.tsx">Icon</code>
<code src="./demo/status.tsx">Status Tag</code>
<code src="./demo/borderless.tsx">borderless</code>
<code src="./demo/borderlessLayout.tsx" debug>borderless in layout</code>
<code src="./demo/customize.tsx" debug>Customize close</code>
<code src="./demo/draggable.tsx">Draggable Tag</code>
<code src="./demo/component-token.tsx" debug>Component Token</code>

## API

Common props ref：[Common props](/docs/react/common-props)

### Tag

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| closeIcon | Custom close icon. 5.7.0: close button will be hidden when setting to `null` or `false` | ReactNode | false | 4.4.0 |
| color | Color of the Tag | string | - |  |
| variant | Variant | `clear` \| `default` | `default` |  |
| icon | Set the icon of tag | ReactNode | - |  |
| bordered | Whether has border style | boolean | true | 5.4.0 |
| onClose | Callback executed when tag is closed | (e: React.MouseEvent<HTMLElement, MouseEvent>) => void | - |  |

### Tag.Compact

| Property  | Description   | Type         | Default    |
| --------- | ------------- | ------------ | ---------- | --------- | ------------ |
| direction | Layout method | "horizontal" | "vertical" | undefined | “horizontal” |

### Tag.CheckableTag

| Property | Description                                     | Type              | Default |
| -------- | ----------------------------------------------- | ----------------- | ------- |
| checked  | Checked status of Tag                           | boolean           | false   |
| onChange | Callback executed when Tag is checked/unchecked | (checked) => void | -       |

## Design Token

<ComponentTokenTable component="Tag"></ComponentTokenTable>
