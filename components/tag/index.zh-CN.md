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
<code src="./demo/variant.tsx" debug>透底变体</code>
<code src="./demo/compact.tsx" debug>组合标签</code>
<code src="./demo/colorful.tsx">多彩标签</code>
<code src="./demo/colorful-inverse.tsx" debug>反色多彩标签</code>
<code src="./demo/control.tsx">动态添加和删除</code>
<code src="./demo/checkable.tsx">可选择标签</code>
<code src="./demo/animation.tsx">添加动画</code>
<code src="./demo/icon.tsx">图标按钮</code>
<code src="./demo/status.tsx">预设状态的标签</code>
<code src="./demo/borderless.tsx">无边框</code>
<code src="./demo/borderlessLayout.tsx" debug>深色背景中无边框</code>
<code src="./demo/customize.tsx" debug>自定义关闭按钮</code>
<code src="./demo/draggable.tsx">可拖拽标签</code>
<code src="./demo/component-token.tsx" debug>组件 Token</code>

## API

通用属性参考：[通用属性](/docs/react/common-props)

### Tag

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| closeIcon | 自定义关闭按钮。5.7.0：设置为 `null` 或 `false` 时隐藏关闭按钮 | ReactNode | false | 4.4.0 |
| color | 标签色 | string | - |  |
| variant | 变体 | `clear` \| `default` | `default` |  |
| icon | 设置图标 | ReactNode | - |  |
| bordered | 是否有边框 | boolean | true | 5.4.0 |
| onClose | 关闭时的回调（可通过 `e.preventDefault()` 来阻止默认行为） | (e: React.MouseEvent<HTMLElement, MouseEvent>) => void | - |  |

### Tag.CheckableTag

| 参数     | 说明                 | 类型              | 默认值 |
| -------- | -------------------- | ----------------- | ------ |
| checked  | 设置标签的选中状态   | boolean           | false  |
| onChange | 点击标签时触发的回调 | (checked) => void | -      |

### Tag.Compact

| 参数      | 说明     | 类型                                    | 默认值       |
| --------- | -------- | --------------------------------------- | ------------ |
| direction | 布局方式 | "horizontal" \| "vertical" \| undefined | “horizontal” |

## 主题变量（Design Token）

<ComponentTokenTable component="Tag"></ComponentTokenTable>
