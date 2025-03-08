---
category: Components
group: 数据展示
title: Tag
subtitle: 标签
description: 进行标记和分类的小标签。
cover: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*_SBsSrKLg00AAAAAAAAAAAAADrJ8AQ/original
coverDark: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*JPNAQYrVkYkAAAAAAAAAAAAADrJ8AQ/original
demo:
  cols: 2
---

## 何时使用

- 用于标记事物的属性和维度。
- 进行分类。

## 代码演示

<!-- prettier-ignore -->
<code src="./demo/basic.tsx">基本</code>
<code src="./demo/colorful.tsx">多彩标签</code>
<code src="./demo/control.tsx">动态添加和删除</code>
<code src="./demo/checkable.tsx">可选择标签</code>
<code src="./demo/animation.tsx">添加动画</code>
<code src="./demo/icon.tsx">图标按钮</code>
<code src="./demo/status.tsx">预设状态的标签</code>
<code src="./demo/customize.tsx" debug>自定义关闭按钮</code>
<code src="./demo/draggable.tsx">可拖拽标签</code>
<code src="./demo/component-token.tsx" debug>组件 Token</code>
<code src="./demo/disabled.tsx" debug>禁用标签</code>

## API

通用属性参考：[通用属性](/docs/react/common-props)

### Tag

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| closeIcon | 自定义关闭按钮。5.7.0：设置为 `null` 或 `false` 时隐藏关闭按钮 | ReactNode | false | 4.4.0 |
| color | 标签色 | string | - |  |
| variant | 标签变体 | `'outlined' \| 'filled' \| 'borderless'` | - | 6.0.0 |
| icon | 设置图标 | ReactNode | - |  |
| onClose | 关闭时的回调（可通过 `e.preventDefault()` 来阻止默认行为） | (e: React.MouseEvent<HTMLElement, MouseEvent>) => void | - |  |
| disabled | 是否禁用标签 | boolean | false | 6.0.0 |
| href | 点击跳转的地址，指定此属性`tag`组件会渲染成 `<a>` 标签 | string | - | 6.0.0 |
| target | 相当于 a 标签的 target 属性，href 存在时生效 | string | - | 6.0.0 |

### Tag.CheckableTag

| 参数     | 说明                 | 类型              | 默认值 |
| -------- | -------------------- | ----------------- | ------ |
| checked  | 设置标签的选中状态   | boolean           | false  |
| onChange | 点击标签时触发的回调 | (checked) => void | -      |

## Semantic DOM

<code src="./demo/_semantic.tsx" simplify="true"></code>

## 主题变量（Design Token）

<ComponentTokenTable component="Tag"></ComponentTokenTable>
