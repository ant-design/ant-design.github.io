---
category: Components
group: Data Entry
title: Cascader
description: Cascade selection box.
cover: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*ngTnQZNOcK0AAAAAAAAAAAAADrJ8AQ/original
coverDark: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*Nt8xR7afyr0AAAAAAAAAAAAADrJ8AQ/original
demo:
  cols: 2
---

## When To Use

- When you need to select from a set of associated data set. Such as province/city/district, company level, things classification.
- When selecting from a large data set, with multi-stage classifications separated for easy selection.
- Chooses cascade items in one float layer for better user experience.

## Examples

<!-- prettier-ignore -->
<code src="./demo/basic.tsx">Basic</code>
<code src="./demo/default-value.tsx">Default value</code>
<code src="./demo/custom-trigger.tsx">Custom trigger</code>
<code src="./demo/hover.tsx">Hover</code>
<code src="./demo/disabled-option.tsx">Disabled option</code>
<code src="./demo/change-on-select.tsx">Change on select</code>
<code src="./demo/multiple.tsx">Multiple</code>
<code src="./demo/showCheckedStrategy.tsx">ShowCheckedStrategy</code>
<code src="./demo/size.tsx">Size</code>
<code src="./demo/custom-render.tsx">Custom render</code>
<code src="./demo/search.tsx">Search</code>
<code src="./demo/lazy.tsx">Load Options Lazily</code>
<code src="./demo/fields-name.tsx">Custom Field Names</code>
<code src="./demo/suffix.tsx" version="5.22.0">Prefix and Suffix</code>
<code src="./demo/custom-dropdown.tsx">Custom dropdown</code>
<code src="./demo/placement.tsx">Placement</code>
<code src="./demo/variant.tsx" version="5.13.0">Variants</code>
<code src="./demo/status.tsx">Status</code>
<code src="./demo/panel.tsx" version=">= 5.10.0">Panel</code>
<code src="./demo/render-panel.tsx" debug>_InternalPanelDoNotUseOrYouWillBeFired</code>
<code src="./demo/component-token.tsx" debug>Component Token</code>

## API

Common props ref：[Common props](/docs/react/common-props)

```jsx
<Cascader options={options} onChange={onChange} />
```

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| allowClear | Show clear button | boolean \| { clearIcon?: ReactNode } | true | 5.8.0: Support object type |
| autoClearSearchValue | Whether the current search will be cleared on selecting an item. Only applies when `multiple` is `true` | boolean | true | 5.9.0 |
| autoFocus | If get focus when component mounted | boolean | false |  |
| changeOnSelect | Change value on each selection if set to true, see above demo for details | boolean | false |  |
| className | The additional css class | string | - |  |
| defaultValue | Initial selected value | string\[] \| number\[] | \[] |  |
| disabled | Whether disabled select | boolean | false |  |
| displayRender | The render function of displaying selected options | (label, selectedOptions) => ReactNode | label => label.join(`/`) | `multiple`: 4.18.0 |
| tagRender | Custom render function for tags in `multiple` mode | (label: string, onClose: function, value: string) => ReactNode | - |  |
| popupClassName | The additional className of popup overlay | string | - | 4.23.0 |
| dropdownRender | Customize dropdown content | (menus: ReactNode) => ReactNode | - | 4.4.0 |
| expandTrigger | expand current item when click or hover, one of `click` `hover` | string | `click` |  |
| fieldNames | Custom field name for label and value and children | object | { label: `label`, value: `value`, children: `children` } |  |
| getPopupContainer | Parent Node which the selector should be rendered to. Default to `body`. When position issues happen, try to modify it into scrollable content and position it relative. [example](https://codepen.io/afc163/pen/zEjNOy?editors=0010) | function(triggerNode) | () => document.body |  |
| loadData | To load option lazily, and it cannot work with `showSearch` | (selectedOptions) => void | - |  |
| maxTagCount | Max tag count to show. `responsive` will cost render performance | number \| `responsive` | - | 4.17.0 |
| maxTagPlaceholder | Placeholder for not showing tags | ReactNode \| function(omittedValues) | - | 4.17.0 |
| maxTagTextLength | Max tag text length to show | number | - | 4.17.0 |
| notFoundContent | Specify content to show when no result matches | ReactNode | `Not Found` |  |
| open | Set visible of cascader popup | boolean | - | 4.17.0 |
| options | The data options of cascade | [Option](#option)\[] | - |  |
| placeholder | The input placeholder | string | - |  |
| placement | Use preset popup align config from builtinPlacements | `bottomLeft` `bottomRight` `topLeft` `topRight` | `bottomLeft` | 4.17.0 |
| prefix | The custom prefix | ReactNode | - | 5.22.0 |
| showSearch | Whether show search input in single mode | boolean \| [Object](#showsearch) | false |  |
| size | The input size | `large` \| `middle` \| `small` | - |  |
| status | Set validation status | 'error' \| 'warning' | - | 4.19.0 |
| style | The additional style | CSSProperties | - |  |
| suffixIcon | The custom suffix icon | ReactNode | - |  |
| value | The selected value | string\[] \| number\[] | - |  |
| variant | Variants of selector | `outlined` \| `borderless` \| `filled` \| `underlined` | `outlined` | 5.13.0 \| `underlined`: 5.24.0 |
| onChange | Callback when finishing cascader select | (value, selectedOptions) => void | - |  |
| onDropdownVisibleChange | Callback when popup shown or hidden | (value) => void | - | 4.17.0 |
| multiple | Support multiple or not | boolean | - | 4.17.0 |
| removeIcon | The custom remove icon | ReactNode | - |  |
| showCheckedStrategy | The way show selected item in box. ** `SHOW_CHILD`: ** just show child treeNode. **`Cascader.SHOW_PARENT`:** just show parent treeNode (when all child treeNode under the parent treeNode are checked) | `Cascader.SHOW_PARENT` \| `Cascader.SHOW_CHILD` | `Cascader.SHOW_PARENT` | 4.20.0 |
| searchValue | Set search value, Need work with `showSearch` | string | - | 4.17.0 |
| onSearch | The callback function triggered when input changed | (search: string) => void | - | 4.17.0 |
| dropdownMenuColumnStyle | The style of the drop-down menu column | CSSProperties | - |  |
| optionRender | Customize the rendering dropdown options | (option: Option) => React.ReactNode | - | 5.16.0 |
| icons | Built-in icons | { expand?: ReactNode; loading?: ReactNode; } | `{ expand: <RightOutlined/>, loading: <LoadingOutlined/> }` | 6.0.0 |

### showSearch

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| filter | The function will receive two arguments, inputValue and option, if the function returns true, the option will be included in the filtered set; Otherwise, it will be excluded | function(inputValue, path): boolean | - |  |
| limit | Set the count of filtered items | number \| false | 50 |  |
| matchInputWidth | Whether the width of list matches input, ([how it looks](https://github.com/ant-design/ant-design/issues/25779)) | boolean | true |  |
| render | Used to render filtered options | function(inputValue, path): ReactNode | - |  |
| sort | Used to sort filtered options | function(a, b, inputValue) | - |  |

### Option

```typescript
interface Option {
  value: string | number;
  label?: React.ReactNode;
  disabled?: boolean;
  children?: Option[];
  // Determines if this is a leaf node(effective when `loadData` is specified).
  // `false` will force trade TreeNode as a parent node.
  // Show expand icon even if the current node has no children.
  isLeaf?: boolean;
}
```

## Methods

| Name    | Description  | Version |
| ------- | ------------ | ------- |
| blur()  | Remove focus |         |
| focus() | Get focus    |         |

## Design Token

<ComponentTokenTable component="Cascader"></ComponentTokenTable>
