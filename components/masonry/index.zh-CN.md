---
category: Components
subtitle: 瀑布流布局
group: 布局
title: Masonry
cover: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*e8nNSayZcBMAAAAAAAAAAAAADrJ8AQ/original
coverDark: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*e8nNSayZcBMAAAAAAAAAAAAADrJ8AQ/original
demo:
  cols: 1
tag: 6.0.0
---

瀑布流布局组件，用于展示不同高度的内容。

## 何时使用

- 展示不规则高度的图片或卡片时
- 需要按照列数均匀分布内容时
- 需要响应式调整列数时

## 代码演示

<!-- prettier-ignore -->
<code src="./demo/basic.tsx">基础用法</code>
<code src="./demo/responsive.tsx">响应式</code>
<code src="./demo/image.tsx">图片</code>
<code src="./demo/dynamic.tsx">动态更新</code>
<code src="./demo/fresh.tsx" debug>持续更新</code>

## API

通用属性参考：[通用属性](/docs/react/common-props)

### Masonry

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| classNames | 语义化结构 className | [Record<SemanticDOM, string>](#semantic-dom) | - |
| columns | 列数，可以是固定值或响应式配置 | `number \| { xs?: number; sm?: number; md?: number }` | `3` |
| fresh | 是否持续监听子项尺寸变化 | `boolean` | `false` |
| gutter | 间距，可以是固定值、响应式配置或水平垂直间距配置 | [Gap](#gap) \| \[[Gap](#gap), [Gap](#gap)\] | `0` |
| items | 瀑布流项 | [MasonryItem](#masonryitem)[] | - |
| itemRender | 自定义项渲染 | `(item: MasonryItem) => React.ReactNode` | - |
| styles | 语义化结构 style | [Record<SemanticDOM, CSSProperties>](#semantic-dom) | - |
| onSortChange | 列排序回调 | `({ key: React.Key; column: number }[]) => void` | - |

### MasonryItem

| 参数     | 说明                                             | 类型                 | 默认值 |
| -------- | ------------------------------------------------ | -------------------- | ------ |
| children | 自定义展示内容，相对 `itemRender` 具有更高优先级 | `React.ReactNode`    | -      |
| column   | 自定义所在列                                     | `number`             | -      |
| data     | 自定义存储数据                                   | `T`                  | -      |
| height   | 高度                                             | `number`             | -      |
| key      | 唯一标识                                         | `string` \| `number` | -      |

### Gap

Gap 是项之间的间距，可以是固定值，也可以是响应式配置。

```ts
type Gap = undefined | number | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl', number>>;
```

## Semantic DOM

<code src="./demo/_semantic.tsx" simplify="true"></code>

## Design Token

<ComponentTokenTable component="Alert"></ComponentTokenTable>
