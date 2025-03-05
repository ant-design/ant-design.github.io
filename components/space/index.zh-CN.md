---
category: Components
group: 布局
title: Space
subtitle: 间距
description: 设置组件之间的间距。
cover: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*ZiJ3SbOH9SUAAAAAAAAAAAAADrJ8AQ/original
coverDark: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*37T2R6O9oi0AAAAAAAAAAAAADrJ8AQ/original
---

## 何时使用

避免组件紧贴在一起，拉开统一的空间。

- 适合行内元素的水平间距。
- 可以设置各种水平对齐方式。
- 需要表单组件之间紧凑连接且合并边框时，使用 Space.Compact（自 `antd@4.24.0` 版本开始提供该组件）。

### 与 Flex 组件的区别

- Space 为内联元素提供间距，其本身会为每一个子元素添加包裹元素用于内联对齐。适用于行、列中多个子元素的等距排列。
- Flex 为块级元素提供间距，其本身不会添加包裹元素。适用于垂直或水平方向上的子元素布局，并提供了更多的灵活性和控制能力。

## 代码演示

<!-- prettier-ignore -->
<code src="./demo/base.tsx">基本用法</code>
<code src="./demo/vertical.tsx">垂直间距</code>
<code src="./demo/size.tsx">间距大小</code>
<code src="./demo/align.tsx">对齐</code>
<code src="./demo/wrap.tsx">自动换行</code>
<code src="./demo/split.tsx">分隔符</code>
<code src="./demo/compact.tsx">紧凑布局组合</code>
<code src="./demo/compact-buttons.tsx">Button 紧凑布局</code>
<code src="./demo/compact-button-vertical.tsx">垂直方向紧凑布局</code>
<code src="./demo/compact-debug.tsx" debug>调试 Input 前置/后置标签</code>
<code src="./demo/compact-nested.tsx" debug>紧凑布局嵌套</code>
<code src="./demo/debug.tsx" debug>多样的 Child</code>
<code src="./demo/gap-in-line.tsx" debug>Flex gap 样式</code>

## API

通用属性参考：[通用属性](/docs/react/common-props)

### Space

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| align | 对齐方式 | `start` \| `end` \|`center` \|`baseline` | - | 4.2.0 |
| block | 将宽度调整为父元素宽度的选项 | boolean | false | 5.25.0 |
| classNames | 语义化 className | [Record<SemanticDOM, string>](#semantic-dom) | - |  |
| direction | 间距方向 | `vertical` \| `horizontal` | `horizontal` | 4.1.0 |
| size | 间距大小 | [Size](#size) \| [Size\[\]](#size) | `small` | 4.1.0 \| Array: 4.9.0 |
| split | 设置分隔符 | ReactNode | - | 4.7.0 |
| styles | 语义化 style | [Record<SemanticDOM, CSSProperties>](#semantic-dom) | - |  |
| wrap | 是否自动换行，仅在 `horizontal` 时有效 | boolean | false | 4.9.0 |

### Size

`'small' | 'middle' | 'large' | number`

### Space.Compact

> 自 antd@4.24.0 版本开始提供该组件。

需要表单组件之间紧凑连接且合并边框时，使用 Space.Compact。支持的组件有：

- Button
- AutoComplete
- Cascader
- DatePicker
- Input/Input.Search
- InputNumber
- Select
- TimePicker
- TreeSelect

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| block | 将宽度调整为父元素宽度的选项 | boolean | false | 4.24.0 |
| direction | 指定排列方向 | `vertical` \| `horizontal` | `horizontal` | 4.24.0 |
| size | 子组件大小 | `large` \| `middle` \| `small` | `middle` | 4.24.0 |

## Semantic DOM

<code src="./demo/_semantic.tsx" simplify="true"></code>

## 主题变量（Design Token）

<ComponentTokenTable component="Space"></ComponentTokenTable>
