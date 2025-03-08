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
<code src="./demo/colorful.tsx">Colorful Tag</code>
<code src="./demo/control.tsx">Add & Remove Dynamically</code>
<code src="./demo/checkable.tsx">Checkable</code>
<code src="./demo/animation.tsx">Animate</code>
<code src="./demo/icon.tsx">Icon</code>
<code src="./demo/status.tsx">Status Tag</code>
<code src="./demo/customize.tsx" debug>Customize close</code>
<code src="./demo/draggable.tsx">Draggable Tag</code>
<code src="./demo/component-token.tsx" debug>Component Token</code>
<code src="./demo/disabled.tsx" debug>Disabled</code>

## API

Common props ref：[Common props](/docs/react/common-props)

### Tag

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| closeIcon | Custom close icon. 5.7.0: close button will be hidden when setting to `null` or `false` | ReactNode | false | 4.4.0 |
| color | Color of the Tag | string | - |  |
| variant | Variant of the tag | `'outlined' \| 'filled' \| 'borderless'` | - | 6.0.0 |
| icon | Set the icon of tag | ReactNode | - |  |
| onClose | Callback executed when tag is closed | (e: React.MouseEvent<HTMLElement, MouseEvent>) => void | - |  |
| disabled | Whether the tag is disabled | boolean | false | 6.0.0 |
| href | The address to jump when clicking, when this property is specified, the `tag` component will be rendered as an `<a>` tag | string | - | 6.0.0 |
| target | The target attribute of the a tag, which takes effect when href is specified | string | - | 6.0.0 |

### Tag.CheckableTag

| Property | Description                                     | Type              | Default |
| -------- | ----------------------------------------------- | ----------------- | ------- |
| checked  | Checked status of Tag                           | boolean           | false   |
| onChange | Callback executed when Tag is checked/unchecked | (checked) => void | -       |

## Semantic DOM

<code src="./demo/_semantic.tsx" simplify="true"></code>

## Design Token

<ComponentTokenTable component="Tag"></ComponentTokenTable>
