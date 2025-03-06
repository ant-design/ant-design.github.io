---
category: Components
group: Data Display
title: Popover
description: The floating card pops up when clicking/mouse hovering over an element.
cover: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*kfW5RrfF4L8AAAAAAAAAAAAADrJ8AQ/original
coverDark: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*6b8fSKVVtXIAAAAAAAAAAAAADrJ8AQ/original
demo:
  cols: 2
---

## When To Use

A simple popup menu to provide extra information or operations.

Comparing with `Tooltip`, besides information `Popover` card can also provide action elements like links and buttons.

## Examples

<!-- prettier-ignore -->
<code src="./demo/basic.tsx">Basic</code>
<code src="./demo/triggerType.tsx">Three ways to trigger</code>
<code src="./demo/placement.tsx">Placement</code>
<code src="./demo/arrow.tsx">Arrow</code>
<code src="./demo/arrow-point-at-center.tsx" debug>Arrow.pointAtCenter</code>
<code src="./demo/shift.tsx" iframe="300">Auto Shift</code>
<code src="./demo/control.tsx">Controlling the close of the dialog</code>
<code src="./demo/hover-with-click.tsx">Hover with click popover</code>
<code src="./demo/render-panel.tsx" debug>_InternalPanelDoNotUseOrYouWillBeFired</code>
<code src="./demo/wireframe.tsx" debug>Wireframe</code>
<code src="./demo/component-token.tsx" debug>Component Token</code>

## API

Common props ref：[Common props](/docs/react/common-props)

| Param   | Description         | Type                         | Default value | Version |
| ------- | ------------------- | ---------------------------- | ------------- | ------- |
| content | Content of the card | ReactNode \| () => ReactNode | -             |         |
| title   | Title of the card   | ReactNode \| () => ReactNode | -             |         |

<!-- Common API -->

<embed src="../tooltip/shared/sharedProps.en-US.md"></embed>

## Note

Please ensure that the child node of `Popover` accepts `onMouseEnter`, `onMouseLeave`, `onFocus`, `onClick` events.

## Semantic DOM

<code src="./demo/_semantic.tsx" simplify="true"></code>

## Design Token

<ComponentTokenTable component="Popover"></ComponentTokenTable>

## FAQ

<embed src="../tooltip/shared/sharedFAQ.en-US.md"></embed>

For more questions, please refer to [Tooltip FAQ](/components/tooltip#faq).
