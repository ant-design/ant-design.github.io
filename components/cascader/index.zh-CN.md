---
category: Components
group: 数据录入
title: Cascader
subtitle: 级联选择
description: 级联选择框。
cover: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*ngTnQZNOcK0AAAAAAAAAAAAADrJ8AQ/original
coverDark: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*Nt8xR7afyr0AAAAAAAAAAAAADrJ8AQ/original
demo:
  cols: 2
---

## 何时使用

- 需要从一组相关联的数据集合进行选择，例如省市区，公司层级，事物分类等。
- 从一个较大的数据集合中进行选择时，用多级分类进行分隔，方便选择。
- 比起 Select 组件，可以在同一个浮层中完成选择，有较好的体验。

## 代码演示

<!-- prettier-ignore -->
<code src="./demo/basic.tsx">基本</code>
<code src="./demo/default-value.tsx">默认值</code>
<code src="./demo/custom-trigger.tsx">可以自定义显示</code>
<code src="./demo/hover.tsx">移入展开</code>
<code src="./demo/disabled-option.tsx">禁用选项</code>
<code src="./demo/change-on-select.tsx">选择即改变</code>
<code src="./demo/multiple.tsx">多选</code>
<code src="./demo/showCheckedStrategy.tsx">自定义回填方式</code>
<code src="./demo/size.tsx">大小</code>
<code src="./demo/custom-render.tsx">自定义已选项</code>
<code src="./demo/search.tsx">搜索</code>
<code src="./demo/lazy.tsx">动态加载选项</code>
<code src="./demo/fields-name.tsx">自定义字段名</code>
<code src="./demo/suffix.tsx" version="5.22.0">前后缀</code>
<code src="./demo/custom-dropdown.tsx">扩展菜单</code>
<code src="./demo/placement.tsx">弹出位置</code>
<code src="./demo/variant.tsx" version="5.13.0">形态变体</code>
<code src="./demo/status.tsx">自定义状态</code>
<code src="./demo/panel.tsx" version=">= 5.10.0">面板使用</code>
<code src="./demo/render-panel.tsx" debug>_InternalPanelDoNotUseOrYouWillBeFired</code>
<code src="./demo/component-token.tsx" debug>Component Token</code>

## API

通用属性参考：[通用属性](/docs/react/common-props)

```jsx
<Cascader options={options} onChange={onChange} />
```

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| allowClear | 支持清除 | boolean \| { clearIcon?: ReactNode } | true | 5.8.0: 支持对象形式 |
| autoClearSearchValue | 是否在选中项后清空搜索框，只在 `multiple` 为 `true` 时有效 | boolean | true | 5.9.0 |
| autoFocus | 自动获取焦点 | boolean | false |  |
| changeOnSelect | 单选时生效（multiple 下始终都可以选择），点选每级菜单选项值都会发生变化。 | boolean | false |  |
| className | 自定义类名 | string | - |  |
| defaultValue | 默认的选中项 | string\[] \| number\[] | \[] |  |
| disabled | 禁用 | boolean | false |  |
| displayRender | 选择后展示的渲染函数 | (label, selectedOptions) => ReactNode | label => label.join(`/`) | `multiple`: 4.18.0 |
| tagRender | 自定义 tag 内容 render，仅在多选时生效 | ({ label: string, onClose: function, value: string }) => ReactNode | - |  |
| popupClassName | 自定义浮层类名 | string | - | 4.23.0 |
| dropdownRender | 自定义下拉框内容 | (menus: ReactNode) => ReactNode | - | 4.4.0 |
| expandTrigger | 次级菜单的展开方式，可选 'click' 和 'hover' | string | `click` |  |
| fieldNames | 自定义 options 中 label value children 的字段 | object | { label: `label`, value: `value`, children: `children` } |  |
| getPopupContainer | 菜单渲染父节点。默认渲染到 body 上，如果你遇到菜单滚动定位问题，试试修改为滚动的区域，并相对其定位。[示例](https://codepen.io/afc163/pen/zEjNOy?editors=0010) | function(triggerNode) | () => document.body |  |
| loadData | 用于动态加载选项，无法与 `showSearch` 一起使用 | (selectedOptions) => void | - |  |
| maxTagCount | 最多显示多少个 tag，响应式模式会对性能产生损耗 | number \| `responsive` | - | 4.17.0 |
| maxTagPlaceholder | 隐藏 tag 时显示的内容 | ReactNode \| function(omittedValues) | - | 4.17.0 |
| maxTagTextLength | 最大显示的 tag 文本长度 | number | - | 4.17.0 |
| notFoundContent | 当下拉列表为空时显示的内容 | ReactNode | `Not Found` |  |
| open | 控制浮层显隐 | boolean | - | 4.17.0 |
| options | 可选项数据源 | [Option](#option)\[] | - |  |
| placeholder | 输入框占位文本 | string | - |  |
| placement | 浮层预设位置 | `bottomLeft` `bottomRight` `topLeft` `topRight` | `bottomLeft` | 4.17.0 |
| prefix | 自定义前缀 | ReactNode | - | 5.22.0 |
| showSearch | 在选择框中显示搜索框 | boolean \| [Object](#showsearch) | false |  |
| size | 输入框大小 | `large` \| `middle` \| `small` | - |  |
| status | 设置校验状态 | 'error' \| 'warning' | - | 4.19.0 |
| style | 自定义样式 | CSSProperties | - |  |
| suffixIcon | 自定义的选择框后缀图标 | ReactNode | - |  |
| value | 指定选中项 | string\[] \| number\[] | - |  |
| variant | 形态变体 | `outlined` \| `borderless` \| `filled` \| `underlined` | `outlined` | 5.13.0 \| `underlined`: 5.24.0 |
| onChange | 选择完成后的回调 | (value, selectedOptions) => void | - |  |
| onDropdownVisibleChange | 显示/隐藏浮层的回调 | (value) => void | - | 4.17.0 |
| multiple | 支持多选节点 | boolean | - | 4.17.0 |
| showCheckedStrategy | 定义选中项回填的方式。`Cascader.SHOW_CHILD`: 只显示选中的子节点。`Cascader.SHOW_PARENT`: 只显示父节点（当父节点下所有子节点都选中时）。 | `Cascader.SHOW_PARENT` \| `Cascader.SHOW_CHILD` | `Cascader.SHOW_PARENT` | 4.20.0 |
| removeIcon | 自定义的多选框清除图标 | ReactNode | - |  |
| searchValue | 设置搜索的值，需要与 `showSearch` 配合使用 | string | - | 4.17.0 |
| onSearch | 监听搜索，返回输入的值 | (search: string) => void | - | 4.17.0 |
| dropdownMenuColumnStyle | 下拉菜单列的样式 | CSSProperties | - |  |
| optionRender | 自定义渲染下拉选项 | (option: Option) => React.ReactNode | - | 5.16.0 |
| icons | 内置图标 | { expand?: ReactNode; loading?: ReactNode; } | `{ expand: <RightOutlined/>, loading: <LoadingOutlined/> }` | 6.0.0 |

### showSearch

`showSearch` 为对象时，其中的字段：

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| filter | 接收 `inputValue` `path` 两个参数，当 `path` 符合筛选条件时，应返回 true，反之则返回 false | function(inputValue, path): boolean | - |  |
| limit | 搜索结果展示数量 | number \| false | 50 |  |
| matchInputWidth | 搜索结果列表是否与输入框同宽（[效果](https://github.com/ant-design/ant-design/issues/25779)） | boolean | true |  |
| render | 用于渲染 filter 后的选项 | function(inputValue, path): ReactNode | - |  |
| sort | 用于排序 filter 后的选项 | function(a, b, inputValue) | - |  |

### Option

```typescript
interface Option {
  value: string | number;
  label?: React.ReactNode;
  disabled?: boolean;
  children?: Option[];
  // 标记是否为叶子节点，设置了 `loadData` 时有效
  // 设为 `false` 时会强制标记为父节点，即使当前节点没有 children，也会显示展开图标
  isLeaf?: boolean;
}
```

## 方法

| 名称    | 描述     | 版本 |
| ------- | -------- | ---- |
| blur()  | 移除焦点 |      |
| focus() | 获取焦点 |      |

> 注意，如果需要获得中国省市区数据，可以参考 [china-division](https://gist.github.com/afc163/7582f35654fd03d5be7009444345ea17)。

## 主题变量（Design Token）

<ComponentTokenTable component="Cascader"></ComponentTokenTable>
