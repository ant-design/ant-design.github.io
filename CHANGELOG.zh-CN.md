---
order: 6
title: 更新日志
timeline: true
tag: vVERSION
---

`antd` 遵循 [Semantic Versioning 2.0.0](http://semver.org/lang/zh-CN/) 语义化版本规范。

#### 发布周期

- 修订版本号：每周末会进行日常 bugfix 更新。（如果有紧急的 bugfix，则任何时候都可发布）
- 次版本号：每月发布一个带有新特性的向下兼容的版本。
- 主版本号：含有破坏性更新和新特性，不在发布周期内。

---

## 5.24.3

`2025-03-05`

- Input
  - 🐞 修复 Input 开启 `allowClear` 后按下 Tab 键后没有正确选中下个元素的问题。[#52977](https://github.com/ant-design/ant-design/pull/52977) [@wanpan11](https://github.com/wanpan11)
  - 💄 修复 Input 开启 `variant="underlined"` 时 `disabled` 状态下 hover 时边框显示问题。[#52959](https://github.com/ant-design/ant-design/pull/52959) [@ustcfury](https://github.com/ustcfury)
- 💄 修复 DatePicker 头部按钮意外间距导致的未对齐问题。[#53007](https://github.com/ant-design/ant-design/pull/53007) [@DDDDD12138](https://github.com/DDDDD12138)
- 💄 修复 AutoComplete 在 `size="large"` 时文字未居中对齐的问题。[#52819](https://github.com/ant-design/ant-design/pull/52819) [@aojunhao123](https://github.com/aojunhao123)
- 🇩🇪 完善 `de_DE` Transfer 本地化. [#53047](https://github.com/ant-design/ant-design/pull/53047) [@chrisinick](https://github.com/chrisinick)

## 5.24.2

`2025-02-24`

- Input
  - 🐞 修复 Input 配置 `inputFontSize` component token 时，`controlHeight` 会不生效的问题。[#52865](https://github.com/ant-design/ant-design/pull/52865) [@zombieJ](https://github.com/zombieJ)
  - 🐞 修复 Input.Search 在设置 `variant` 为 `underlined` 时下边框与搜索按钮底部没对齐的问题。[#52861](https://github.com/ant-design/ant-design/pull/52861) [@ustcfury](https://github.com/ustcfury)
  - 🛠 优化 Input.OTP 的默认状态创建逻辑。[#52878](https://github.com/ant-design/ant-design/pull/52878) [@Dandelion-F](https://github.com/Dandelion-F)
  - 🛠 优化 Input.OTP 的分隔符渲染实现。[#52841](https://github.com/ant-design/ant-design/pull/52841) [@li-jia-nan](https://github.com/li-jia-nan)
- Watermark
  - 🐞 修复 Watermark 重新渲染时可能导致页面卡死的问题。[#52897](https://github.com/ant-design/ant-design/pull/52897) [@765477020](https://github.com/765477020)
  - 🆕 调整 Watermark 渲染逻辑，防止通过开发者工具添加 `hidden` 属性来去掉水印。[#52891](https://github.com/ant-design/ant-design/pull/52891) [@arronlai](https://github.com/arronlai)
- 🐞 修复 DatePicker.RangePicker 在弹层重新打开的时候，有可能出现箭头位置不正确的问题。[#52854](https://github.com/ant-design/ant-design/pull/52854) [@zombieJ](https://github.com/zombieJ)
- 🐞 修复 Layout.Sider 当 `collapsedWidth={0}` 时的内容溢出的问题。[#52862](https://github.com/ant-design/ant-design/pull/52862) [@afc163](https://github.com/afc163)
- 🛠 重构 Grid 内部响应式逻辑以复用其他组件类似的逻辑，该更新不会于使用上有所变化。[#52870](https://github.com/ant-design/ant-design/pull/52870) [@zombieJ](https://github.com/zombieJ)
- 💄 修复 Button 超链接模式的样式。[#52888](https://github.com/ant-design/ant-design/pull/52888) [@DDDDD12138](https://github.com/DDDDD12138)
- 💄 修复 Table 可排序列头不自动换行的问题。[#52899](https://github.com/ant-design/ant-design/pull/52899) [@765477020](https://github.com/765477020)
- ⚡️ 优化 Menu 在 `expandIcon` 属性传入函数时重新渲染的性能。[#52863](https://github.com/ant-design/ant-design/pull/52863) [@wanpan11](https://github.com/wanpan11)
- ⚡️ 优化 Carousel 指示器的动画性能。[#52881](https://github.com/ant-design/ant-design/pull/52881) [@li-jia-nan](https://github.com/li-jia-nan)
- RTL
  - 💄 修复 DatePicker 在 RTL 模式下图标方向错误的问题。[#52896](https://github.com/ant-design/ant-design/pull/52896) [@li-jia-nan](https://github.com/li-jia-nan)
  - 💄 修复 Dropdown 在 RTL 模式下多级菜单箭头方向错误的问题。[#52885](https://github.com/ant-design/ant-design/pull/52885) [@yellowryan](https://github.com/yellowryan)

## 5.24.1

`2025-02-17`

- 🐞 修复 Button 配置 `color` 为 `primary` 并且 `variant` 为 `text` 或 `link` 时，没有取用正确的色板的问题。[#52812](https://github.com/ant-design/ant-design/pull/52812) [@zombieJ](https://github.com/zombieJ)
- 💄 修复 Input.Group 与 Input.OTP 由于 css 变量未定义导致样式异常的问题。[#52799](https://github.com/ant-design/ant-design/pull/52799) [@afc163](https://github.com/afc163)
- 🐞 修复 DatePicker 的 `prefix` 内容多时会换行的问题。[#52776](https://github.com/ant-design/ant-design/pull/52776) [@guoyunhe](https://github.com/guoyunhe)
- 🐞 修复 Table 列标题在排序时丢失 `aria-label` 的问题。[#52772](https://github.com/ant-design/ant-design/pull/52772) [@mellis481](https://github.com/mellis481)
- 🐞 修复 Alert.ErrorBoundary 在 `@types/react@18.x` 中无法作为 JSX 组件使用的类型错误问题。[#52766](https://github.com/ant-design/ant-design/pull/52766) [@afc163](https://github.com/afc163)
- 💄 修复 Segmented 设置 `size` 时，`shape` 不生效的问题。[#52757](https://github.com/ant-design/ant-design/pull/52757) [@yellowryan](https://github.com/yellowryan)

## 5.24.0

`2025-02-11`

- 🆕 Notification 支持 `actions` 属性并废弃 `btn` 属性。[#52703](https://github.com/ant-design/ant-design/pull/52703) [@thinkasany](https://github.com/thinkasany)
- 🆕 Carousel 支持展示指示点进度。[#52672](https://github.com/ant-design/ant-design/pull/52672) [@yellowryan](https://github.com/yellowryan)
- 🆕 Input.OTP 支持 `separator` 属性。[#52668](https://github.com/ant-design/ant-design/pull/52668) [@HaceraI](https://github.com/HaceraI)
- 🆕 Descriptions 增加 `labelColor` 组件 token。[#52700](https://github.com/ant-design/ant-design/pull/52700) [@guoyunhe](https://github.com/guoyunhe)
- 🆕 Segmented 支持 `shape="round"` 的胶囊形状的样式。[#52685](https://github.com/ant-design/ant-design/pull/52685) [@afc163](https://github.com/afc163)
- 🆕 ConfigProvider 支持 Card 组件的 `variant` 配置。[#52552](https://github.com/ant-design/ant-design/pull/52552) [@thinkasany](https://github.com/thinkasany)
- 🆕 Progress/Step 支持使用 `rounding` 属性自定义取整方法。[#52017](https://github.com/ant-design/ant-design/pull/52017) [@yanghoxom](https://github.com/yanghoxom)
- 🆕 Divider 的 `orientation` 属性支持 `start` 和 `end`.[#52567](https://github.com/ant-design/ant-design/pull/52567) [@li-jia-nan](https://github.com/li-jia-nan)
- 🆕 为 Input、InputNumber、Mentions、Form、Select、Cascader、TreeSelect、DatePicker、TimePicker 组件的 `variant` 添加 `underlined` 属性。[#52546](https://github.com/ant-design/ant-design/pull/52546) [@ustcfury](https://github.com/ustcfury)
- 🆕 ConfigProvider 支持 Modal `centered` 全局配置。[#52343](https://github.com/ant-design/ant-design/pull/52343) [@guoyunhe](https://github.com/guoyunhe)
- 🆕 为 Checkbox 和 Radio 增加 `label` 类名。[#52322](https://github.com/ant-design/ant-design/pull/52322) [@guoyunhe](https://github.com/guoyunhe)
- 🐞 修复 Tooltip/Popover/Popconfirm/Dropdown 在 React 19 下 children 为自定义组件时弹层位置错乱的问题。[react-component/util#623](https://github.com/react-component/util/pull/623) [@zombieJ](https://github.com/zombieJ)
- 🐞 修复 DatePicker.RangePicker 弹出窗体自动调整位置时，面板的箭头位置不正确的问题。[#52719](https://github.com/ant-design/ant-design/pull/52719) [@zombieJ](https://github.com/zombieJ)
- 🐞 修正 locale 中 `filterCheckall` 为 `filterCheckAll`。[#52517](https://github.com/ant-design/ant-design/pull/52517) [@thinkasany](https://github.com/thinkasany)
- 🐞 修复 Form `scrollToField` 和 `scrollToFirstError` 无法聚焦 antd 组件的问题。[#52726](https://github.com/ant-design/ant-design/pull/52726) [@Wxh16144](https://github.com/Wxh16144)
- 💄 修复 Button 预设值按钮的阴影色在暗色背景下显示突兀的问题。[#52701](https://github.com/ant-design/ant-design/pull/52701) [@afc163](https://github.com/afc163)
- 💄 修复 Segmented 组件在暗黑模式下的动画过渡效果不自然的问题。[#52708](https://github.com/ant-design/ant-design/pull/52708) [@yellowryan](https://github.com/yellowryan)
- 💄 拆分 Input 和 TextArea 样式。[#52570](https://github.com/ant-design/ant-design/pull/52570) [@guoyunhe](https://github.com/guoyunhe)
- 💄 修复 Input 和 Select 在 css var 模式下的样式问题。[#52554](https://github.com/ant-design/ant-design/pull/52554) [@li-jia-nan](https://github.com/li-jia-nan)
- ⌨️ Form field error 移除 role="alert" 以提升可访问性。[#52661](https://github.com/ant-design/ant-design/pull/52661) [@mellis481](https://github.com/mellis481)
- ⌨️ 优化无障碍体验，为空表头和面板按钮添加本地化标签。[#52689](https://github.com/ant-design/ant-design/pull/52689) [@aojunhao123](https://github.com/aojunhao123)
- ⌨️ 优化 Tabs 组件的可访问性，修复 `Certain ARIA roles must contain particular children` 的报错。[#52677](https://github.com/ant-design/ant-design/pull/52677) [@afc163](https://github.com/afc163)
- ⌨️ 为 Tooltip 添加读屏器支持。[#52293](https://github.com/ant-design/ant-design/pull/52293) [@aojunhao123](https://github.com/aojunhao123)
- TypeScript
  - 🤖 Button 根据 `href` 属性区分 `onClick` 事件类型。[#52654](https://github.com/ant-design/ant-design/pull/52654) [@Brew-Brew](https://github.com/Brew-Brew)
  - 🤖 废弃 Button.Group, 推荐 Space.Compact。[#52572](https://github.com/ant-design/ant-design/pull/52572) [@guoyunhe](https://github.com/guoyunhe)
  - 🤖 废弃 Input.Group，推荐 Space.Compact。[#52571](https://github.com/ant-design/ant-design/pull/52571) [@guoyunhe](https://github.com/guoyunhe)
  - 🤖 Tooltip 导出 TooltipRef 类型。[#49230](https://github.com/ant-design/ant-design/pull/49230) [@nuintun](https://github.com/nuintun)

## 5.23.4

`2025-02-05`

蛇年第一个版本，开工大吉！🐍

- 🐞 修复 Pagination 可访问性问题，补充缺失的 ARIA 属性支持。[#52616](https://github.com/ant-design/ant-design/pull/52616) [@aojunhao123](https://github.com/aojunhao123)
- 🐞 Space.Compact 支持 textarea 组件。[#52639](https://github.com/ant-design/ant-design/pull/52639) [@Can-Chen](https://github.com/Can-Chen)
- 🐞 修复 Menu `theme="dark"` 时水平菜单的文字色和背景色同色的问题。[#52617](https://github.com/ant-design/ant-design/pull/52617) [@afc163](https://github.com/afc163)
- 🇪🇬 Tour 增加阿拉伯文(埃及) (ar_EG) 的翻译。 [#52642](https://github.com/ant-design/ant-design/pull/52642) [@Sagie501](https://github.com/Sagie501)
- 🇮🇱 Tour 增加以色列的国际化翻译。[#52641](https://github.com/ant-design/ant-design/pull/52641) [@Sagie501](https://github.com/Sagie501)


## 5.23.3

`2025-01-28`

龙年最后一版，祝各位新春愉快！🐲

- ⌨️ MISC: 为所有组件的示例添加了可访问性测试，确保符合无障碍标准。并优化了部分组件的可访问性支持，改进了对屏幕阅读器和键盘操作的兼容性。[#51372](https://github.com/ant-design/ant-design/pull/51372) [@aojunhao123](https://github.com/aojunhao123)
- 🐞 MISC: 修复导入 `antd/dist/reset.css` 文件的问题。[#52559](https://github.com/ant-design/ant-design/pull/52559) [@CaptainVolcom](https://github.com/CaptainVolcom)
- 🐞 修复 Button `loading` 为 `null` 时抛错的问题。[#52508](https://github.com/ant-design/ant-design/pull/52508) [@li-jia-nan](https://github.com/li-jia-nan)
- 🐞 修复 Table 最后一行边框颜色过渡问题。[#52549](https://github.com/ant-design/ant-design/pull/52549) [@DDDDD12138](https://github.com/DDDDD12138)
- 💄 修复 Cascader 组件禁用状态下复选框的鼠标指针样式问题。[#52539](https://github.com/ant-design/ant-design/pull/52539) [@aojunhao123](https://github.com/aojunhao123)
- 💄 修复 ConfigProvider 在 StyleProvider 配置 `layer` 时不会正确修改图标对应样式优先级的问题。[#52533](https://github.com/ant-design/ant-design/pull/52533) [@zombieJ](https://github.com/zombieJ)
- 🐞 修复 Layout 切换侧边栏按钮在非 cssVar 模式下样式丢失的问题。. [#52537](https://github.com/ant-design/ant-design/pull/52537) [@afc163](https://github.com/afc163)
- 🐞 修复 Tree 组件禁用状态下复选框的鼠标指针样式问题。[#52525](https://github.com/ant-design/ant-design/pull/52525) [@aojunhao123](https://github.com/aojunhao123)
- notification
  - 🐞 修复 notification `useNotification` 中 `closeIcon` 配置无效的问题。[#52516](https://github.com/ant-design/ant-design/pull/52516) [@typenoob](https://github.com/typenoob)
  - 🐞 修复 notification 组件在 App 组件下的显示闪烁问题。[#52499](https://github.com/ant-design/ant-design/pull/52499) [@afc163](https://github.com/afc163)
- RTL
  - 🐞 修复 Splitter 在 rtl 模式下折叠行为异常的问题。[#52501](https://github.com/ant-design/ant-design/pull/52501) [@aojunhao123](https://github.com/aojunhao123)
  - 💄 修复 Spin 在 rtl 模式下的样式问题。[#52538](https://github.com/ant-design/ant-design/pull/52538) [@afc163](https://github.com/afc163)

## 5.23.2

`2025-01-20`

- 🐞 修复 Space.Compact 抛出 `Should not use more than one & in a selector` 警告信息的问题。[#52489](https://github.com/ant-design/ant-design/pull/52489)
- 💄 修复 Layout 切换侧边栏按钮样式丢失的问题。[#52477](https://github.com/ant-design/ant-design/pull/52477)
- 💄 修复 Table 收起虚拟滚动表格第一行时滚动条高度不为 0 的问题。[#52447](https://github.com/ant-design/ant-design/pull/52447) [@LeeSSHH](https://github.com/LeeSSHH)
- 💄 修复 Descriptions 最后一项未正确填充满剩余空间的问题。[#52410](https://github.com/ant-design/ant-design/pull/52410) [@anyuxuan](https://github.com/anyuxuan)
- 💄 修复 Radio.Group 最后一项多余 margin 的问题。[#52433](https://github.com/ant-design/ant-design/pull/52433)
- 💄 修复 Input/Mentions 清除按钮 padding 不正确的问题。[#52407](https://github.com/ant-design/ant-design/pull/52407) [@ustcfury](https://github.com/ustcfury)
- 💄 修复 Input 紧凑模式中 `addonAfter` 的圆角问题。[#52490](https://github.com/ant-design/ant-design/pull/52490) [@DDDDD12138](https://github.com/DDDDD12138)
- 💄 修复 Menu.Item 在禁用状态下链接仍可点击且缺少禁用样式的问题。[#52402](https://github.com/ant-design/ant-design/pull/52402) [@aojunhao123](https://github.com/aojunhao123)
- TypeScript
  - 🤖 MISC: 优化 PurePanel 使用 React.ComponentType 类型。[#52480](https://github.com/ant-design/ant-design/pull/52480)
  - 🤖 修复 Skeleton 和 Rate 缺失的 token 类型。[#52406](https://github.com/ant-design/ant-design/pull/52406) [@coding-ice](https://github.com/coding-ice)

## 5.23.1

`2025-01-13`

- 🆕 新增 Tree 组件叶子节点的 className 用于区分节点类型。[#52274](https://github.com/ant-design/ant-design/pull/52274) [@EmilyyyLiu](https://github.com/EmilyyyLiu)
- 🐞 修复 DatePicker `superPrevIcon/superNextIcon/prevIcon/nextIcon` 设置为 null 时切换按钮依旧存在的问题。[#52327](https://github.com/ant-design/ant-design/pull/52327) [@afc163](https://github.com/afc163)
- 🐞 修复 Select 组件在 jest 测试中报错 `not a valid selector` 的问题。[#51844](https://github.com/ant-design/ant-design/pull/51844) [@renovate](https://github.com/renovate)
- 🐞 修复 Layout.Sider 直接嵌套在 ConfigProvider 下时，`theme` 配置无效的问题。[#52302](https://github.com/ant-design/ant-design/pull/52302) [@zombieJ](https://github.com/zombieJ)
- 🐞 修复 Splitter 二次展开时丢失上一次状态的问题。[#52222](https://github.com/ant-design/ant-design/pull/52222) [@jjlstruggle](https://github.com/jjlstruggle)
- 🐞 修复 Table 树形展示且设置 `checkStrictly` 为 false 时，某些行被错误选中的问题。[#52338](https://github.com/ant-design/ant-design/pull/52338) [@LeeSSHH](https://github.com/LeeSSHH)
- Button
  - 🐞 调整 Button 纯图标的大小从而修复按钮对齐和图标居中问题。[#52353](https://github.com/ant-design/ant-design/pull/52353) [@afc163](https://github.com/afc163)
  - 💄 修复 Button 丢失阴影样式的问题。[#52304](https://github.com/ant-design/ant-design/pull/52304) [@zombieJ](https://github.com/zombieJ)
- RTL
  - 💄 修复 Collapse 在 RTL 模式下的箭头方向。[#52374](https://github.com/ant-design/ant-design/pull/52374) [@aojunhao123](https://github.com/aojunhao123)
  - 💄 修复 Layout.Sider 在 RTL 模式下的箭头方向。[#52374](https://github.com/ant-design/ant-design/pull/52374) [@aojunhao123](https://github.com/aojunhao123)

## 5.23.0

`2025-01-06`

- 🔥 TreeSelect 新增 `maxCount` 属性以限制最大选择数量。[#51759](https://github.com/ant-design/ant-design/pull/51759) [@aojunhao123](https://github.com/aojunhao123)
- 🔥 Modal `width` 支持响应式尺寸。[#51653](https://github.com/ant-design/ant-design/pull/51653) [@zombieJ](https://github.com/zombieJ)
- 🔥 Splitter 增加 `lazy` 模式。[#51557](https://github.com/ant-design/ant-design/pull/51557) [@OysterD3](https://github.com/OysterD3)
- Button
  - 🔥 Button `color` 属性支持完整色板。[#51550](https://github.com/ant-design/ant-design/pull/51550) [@OysterD3](https://github.com/OysterD3)
  <img width="520" alt="Button Colors" src="https://mdn.alipayobjects.com/huamei_iwk9zp/afts/img/A*ApyYQpXQQfgAAAAAAAAAAAAADgCCAQ/original">
  - 🆕 Button 组件新增 `loading={{ icon: ReactNode }}` 以自定义加载图标。[#51758](https://github.com/ant-design/ant-design/pull/51758) [@zhangchao-wooc](https://github.com/zhangchao-wooc)
- Menu
  - 🆕 Menu 新增 token `subMenuItemSelectedColor`，避免 `itemSelectedColor` 覆盖子菜单标题样式。[#52182](https://github.com/ant-design/ant-design/pull/52182) [@afc163](https://github.com/afc163)
  - 🐞 修复 Menu `extra` 字体大小和垂直居中对齐问题。[#52217](https://github.com/ant-design/ant-design/pull/52217) [@guoyunhe](https://github.com/guoyunhe)
- 🆕 语义化
  - 🆕 ConfigProvider 支持 Empty 组件语义化 `classNames` 和 `styles`。[#52208](https://github.com/ant-design/ant-design/pull/52208) [@thinkasany](https://github.com/thinkasany)
  - 🆕 ConfigProvider 支持 Slider 组件语义化 `classNames` 和 `styles`。[#52185](https://github.com/ant-design/ant-design/pull/52185) [@thinkasany](https://github.com/thinkasany)
  - 🆕 ConfigProvider 支持 Popconfirm 组件语义化 `classNames` 和 `styles`。[#52126](https://github.com/ant-design/ant-design/pull/52126) [@thinkasany](https://github.com/thinkasany)
  - 🆕 ConfigProvider 支持 Popover 组件语义化 `classNames` 和 `styles`。[#52110](https://github.com/ant-design/ant-design/pull/52110) [@thinkasany](https://github.com/thinkasany)
  - 🆕 ConfigProvider 支持 Tooltip 组件语义化 `classNames` 和 `styles`。[#51872](https://github.com/ant-design/ant-design/pull/51872) [@thinkasany](https://github.com/thinkasany)
  - 🆕 ConfigProvider 支持 Descriptions 组件语义化 `classNames` 和 `styles`。[#52120](https://github.com/ant-design/ant-design/pull/52120) [@thinkasany](https://github.com/thinkasany)
- Tree
  - 🛠 重构 Tree 部分代码为 Function Component 以为 React 19 做更好性能准备。[#52209](https://github.com/ant-design/ant-design/pull/52209) [@li-jia-nan](https://github.com/li-jia-nan)
  - 💄 优化 Tree `disabled` 与 `selected` 节点状态下的颜色展示。[#52173](https://github.com/ant-design/ant-design/pull/52173) [@EmilyyyLiu](https://github.com/EmilyyyLiu)
- 🆕 Transfer 支持 `showSearch` 配置 `defaultValue` 和 `placeholder`。[#52125](https://github.com/ant-design/ant-design/pull/52125) [@EmilyyyLiu](https://github.com/EmilyyyLiu)
- 🆕 Calendar 支持 `showWeek` 属性用于显示周数列。[#52072](https://github.com/ant-design/ant-design/pull/52072) [@afc163](https://github.com/afc163)
- 🆕 Mentions 新增 `onPopupScroll` 属性。[#51858](https://github.com/ant-design/ant-design/pull/51858) [@OysterD3](https://github.com/OysterD3)
- 🆕 Card 增加 `bodyPaddingSM`、`headerPaddingSM`、`bodyPadding`、`headerPadding` 组件 token。[#51762](https://github.com/ant-design/ant-design/pull/51762) [@thinkasany](https://github.com/thinkasany)
- 🆕 ColorPicker `presets` 支持传入 `key`。[#51794](https://github.com/ant-design/ant-design/pull/51794) [@li-jia-nan](https://github.com/li-jia-nan)
- 🆕 Cascader 新增 `optionSelectedColor` token。[#51769](https://github.com/ant-design/ant-design/pull/51769) [@thinkasany](https://github.com/thinkasany)
- 🐞 修复 Layout.Sider `trigger` 样式不正确的问题。[#46a8eff](https://github.com/ant-design/ant-design/commit/46a8eff) [@Wxh16144](https://github.com/Wxh16144)
- Table
  - 🐞 修复 Table `expandable` 中设置 `fixed：right` 不生效的问题。[#52176](https://github.com/ant-design/ant-design/pull/52176) [@afc163](https://github.com/afc163)
  - 🐞 修复 Table `sticky` 模式下水平固定滚动条在 rtl 模式下不生效的问题。[#52176](https://github.com/ant-design/ant-design/pull/52176) [@afc163](https://github.com/afc163)
- 💄 优化 Flex 使其在自定义渲染组件时总是重置 `margin`、`padding` 样式。[#52170](https://github.com/ant-design/ant-design/pull/52170) [@li-jia-nan](https://github.com/li-jia-nan)
- 🐞 修复 DatePicker.RangePicker `needConfirm` 模式偶尔在不确认仍然可以切换面板的问题。[#52102](https://github.com/ant-design/ant-design/pull/52102) [@Zyf665](https://github.com/Zyf665)
- 🐞 修复 Slider 当 `tipFormatter` 未定义时导致崩溃的问题。[#52184](https://github.com/ant-design/ant-design/pull/52184) [@thinkasany](https://github.com/thinkasany)
- 💄 优化 Collapse 聚焦样式以及折叠项圆角。[#52086](https://github.com/ant-design/ant-design/pull/52086) [@aojunhao123](https://github.com/aojunhao123)
- ⌨️ 为 Radio.Group 添加默认 `name` 属性以提升无障碍体验。[#52076](https://github.com/ant-design/ant-design/pull/52076) [@aojunhao123](https://github.com/aojunhao123)
- ⌨️ Input.Search 添加默认 `type=search` 类型。[#52083](https://github.com/ant-design/ant-design/pull/52083) [@Kaikiat1126](https://github.com/Kaikiat1126)
- ⌨️ 优化 Tabs 键盘操作时的焦点样式。[#52002](https://github.com/ant-design/ant-design/pull/52002) [@aojunhao123](https://github.com/aojunhao123)
- Segmented
  - ⌨️ 优化 Segmented 聚焦样式以提升无障碍体验。[#51934](https://github.com/ant-design/ant-design/pull/51934) [@aojunhao123](https://github.com/aojunhao123)
  - ⌨️ Segmented 支持 `name` 属性以提升无障碍体验。[#51725](https://github.com/ant-design/ant-design/pull/51725) [@thinkasany](https://github.com/thinkasany)
- 📦 MISC: 用 `@ant-design/fast-color` 替换 `@ctrl/tinycolor` 以降低打包体积。[#52190](https://github.com/ant-design/ant-design/pull/52190) [#52157](https://github.com/ant-design/ant-design/pull/52157) [@aojunhao123](https://github.com/aojunhao123)
- ⌨️ 调整 Input、InputNumber、Mentions、Textarea 组件清除图标从 `span` 元素更改为 `button` 元素，提高了可访问性和交互性。[#52180](https://github.com/ant-design/ant-design/pull/52180) [@li-jia-nan](https://github.com/li-jia-nan)
- 🐞 MISC: 修复 React 19 下构建报错的问题。[#52168](https://github.com/ant-design/ant-design/pull/52168) [@zombieJ](https://github.com/zombieJ)
- TypeScript
  - 🤖 调整 Table `ref` 类型为 React.Ref。[#52205](https://github.com/ant-design/ant-design/pull/52205) [@li-jia-nan](https://github.com/li-jia-nan)
  - 🤖 Calendar 导出 CalendarMode 类型。[#52160](https://github.com/ant-design/ant-design/pull/52160) [@Kaikiat1126](https://github.com/Kaikiat1126)

## 5.22.7

`2024-12-27`

- 🐞 修复 Button 文字和图标不对齐的问题。[#52132](https://github.com/ant-design/ant-design/pull/52132) [@afc163](https://github.com/afc163)
- 🐞 修复在 React 19 下点击 Button 时抛出 `reactRender is not a function` 错误的问题。[#52105](https://github.com/ant-design/ant-design/pull/52105) [@afc163](https://github.com/afc163)
- TypeScript
  - 🤖 修复 Menu `component` 属性类型抛错。[#51715](https://github.com/ant-design/ant-design/pull/51715) [@msyavuz](https://github.com/msyavuz)

## 5.22.6

`2024-12-23`

- 🐞 修复 Button 有图标和无图标按钮对齐差一像素的问题。[#52070](https://github.com/ant-design/ant-design/pull/52070)
- 🐞 修复 Splitter 组件折叠图标 `z-index` 层级过低问题。[#52065](https://github.com/ant-design/ant-design/pull/52065) [@wanpan11](https://github.com/wanpan11)
- 🐞 修复 Button 启用 `loading` 时，动画不够顺滑的问题。[#52059](https://github.com/ant-design/ant-design/pull/52059) [@zombieJ](https://github.com/zombieJ)
- 🐞 修复 Button 暗色模式下默认填充按钮文本在悬停时消失的问题。[#52024](https://github.com/ant-design/ant-design/pull/52024) [@DDDDD12138](https://github.com/DDDDD12138)

## 5.22.5

`2024-12-15`

- 🛠 重构 Wave/Menu/Form `ref` 检查逻辑以解决 React 19 `ref` 部分冲突（注：该更新不会完全解决 React 19 兼容问题，后续将会持续更新）。[#51952](https://github.com/ant-design/ant-design/pull/51952) [@zombieJ](https://github.com/zombieJ)
- 🐞 修复 Dropdown `children` 不支持传入 ReactNode 的问题。[#50174](https://github.com/ant-design/ant-design/pull/50174) [@coding-ice](https://github.com/coding-ice)
- 🐞 修复 Carousel 某些情况下在 Modal 中无法正确展示的问题。[#51988](https://github.com/ant-design/ant-design/pull/51988) [@quan060798](https://github.com/quan060798)
- 🐞 修复 Select 选中文本溢出的问题 。[#52011](https://github.com/ant-design/ant-design/pull/52011) [@OysterD3](https://github.com/OysterD3)
- 🐞 修复 Form `setFieldValue` 没有重置字段校验信息的问题。[#51993](https://github.com/ant-design/ant-design/pull/51993) [@zombieJ](https://github.com/zombieJ)
- 🐞 修复 Pagination 配置 `showSizeChanger.showSearch` 无效的问题。[#51962](https://github.com/ant-design/ant-design/pull/51962) [@zombieJ](https://github.com/zombieJ)
- 🇰🇷 优化 DatePicker 韩语本地化文案。[#51983](https://github.com/ant-design/ant-design/pull/51983) [@DevLeti](https://github.com/DevLeti)
- 🤖 从 antd 里导出 `CheckboxChangeEvent` 类型。[#52008](https://github.com/ant-design/ant-design/pull/52008) [@SpecLad](https://github.com/SpecLad)

## 5.22.4

`2024-12-09`

- Transfer
  - 🐞 修复 Transfer 选中当前页最后一项时背景溢出的问题。[#51884](https://github.com/ant-design/ant-design/pull/51884) [@ayangweb](https://github.com/ayangweb)
  - 🐞 修正 Transfer 切换按钮当所有 item 禁用时依然可用的问题。[#51784](https://github.com/ant-design/ant-design/pull/51784) [@WwwHhhYran](https://github.com/WwwHhhYran)
- 🐞 修复 Tooltip 内容过少时，箭头会在容器外的问题。[#51904](https://github.com/ant-design/ant-design/pull/51904)
- 🐞 修复点击 Upload 下的 Radio 或 Checkbox 会触发两次弹窗的问题。[#51874](https://github.com/ant-design/ant-design/pull/51874)
- 💄 修复 Menu 在使用 `collapsedIconSize` 时图标对齐的问题。[#51863](https://github.com/ant-design/ant-design/pull/51863) [@Gnomeek](https://github.com/Gnomeek)
- 💄 修复 Tabs 组件在 `type="editable-card"` 时样式不正确的问题。[#51935](https://github.com/ant-design/ant-design/pull/51935) [@aojunhao123](https://github.com/aojunhao123)
- 💄 修复 Layout.Sider 组件在 `zero-width` 模式下触发器样式优先级不足的问题。[#51936](https://github.com/ant-design/ant-design/pull/51936) [@aojunhao123](https://github.com/aojunhao123)
- 💄 MISC: 修复 icon 样式被重复创建的问题。[#51897](https://github.com/ant-design/ant-design/pull/51897) [@YumoImer](https://github.com/YumoImer)
- 💄 MISC: 行内样式重构为 cssinjs。[#51843](https://github.com/ant-design/ant-design/pull/51843)

## 5.22.3

`2024-12-02`

- 🐞 修复 Select 清除按钮在 Form.Item 中位置可能错误的问题。[#51649](https://github.com/ant-design/ant-design/pull/51649) [@dislido](https://github.com/dislido)
- 🐞 修复 InputNumber `handleVisible` token 不生效的问题。[#51728](https://github.com/ant-design/ant-design/pull/51728) [@dengfuping](https://github.com/dengfuping)
- 🐞 修复 ColorPicker 的 `presets` 属性中的 `label` 字段传入 `ReactNode` 会报错的问题。[#51808](https://github.com/ant-design/ant-design/pull/51808) [@li-jia-nan](https://github.com/li-jia-nan)
- 🐞 修复 Menu 的 `inlineCollapsed` 属性在 Layout 中不生效的问题。[#51775](https://github.com/ant-design/ant-design/pull/51775) [@coderz-w](https://github.com/coderz-w)
- 🐞 修复 Table `onHeaderCell` 提供的 `style` 无法被覆盖的问题。[#51793](https://github.com/ant-design/ant-design/pull/51793) [@Wxh16144](https://github.com/Wxh16144)
- ⌨️ 优化 Collapse 组件的可访问性。[#51836](https://github.com/ant-design/ant-design/pull/51836) [@aojunhao123](https://github.com/aojunhao123)
- TypeScript
  - 🤖 增加 Table 属性中 `clearFilters` 函数的入参类型。[#51754](https://github.com/ant-design/ant-design/pull/51754) [@fubd](https://github.com/fubd)
  - 🤖 修复 Form 设置 `preserve` 为 `false` 时，Form.List 中嵌套的字段卸载会丢失值的问题。[#51796](https://github.com/ant-design/ant-design/pull/51796) [@zombieJ](https://github.com/zombieJ)

## 5.22.2

`2024-11-21`

- 🐞 修复 Input.OTP 组件在有非法输入时仍会切换到下一个输入框的问题。[#51664](https://github.com/ant-design/ant-design/pull/51664) [@thecodesalim](https://github.com/thecodesalim)
- 🐞 调整 Modal 确认函数，使其在弹出后聚焦确认按钮时不要滚动窗体。[#51647](https://github.com/ant-design/ant-design/pull/51647) [@zombieJ](https://github.com/zombieJ)
- 🐞 修复 Form `rules` 生成多条相同错误时会报 React 渲染错误的问题。[#51636](https://github.com/ant-design/ant-design/pull/51636) [@zombieJ](https://github.com/zombieJ)
- 🐞 调整 Button 使用 `useEffect` 来触发 `autoFocus` 逻辑，以解决一些异步渲染场景下 Button 无法自动聚焦的问题。[#51624](https://github.com/ant-design/ant-design/pull/51624) [@zombieJ](https://github.com/zombieJ)
- 🐞 修复 Button 中使用自定义三方图标库时图标未居中的问题。[#51652](https://github.com/ant-design/ant-design/pull/51652) [@afc163](https://github.com/afc163)
- 🐞 修复 Table 组件 `getCheckboxProps` 中的事件处理器被内部选择逻辑覆盖的问题。[#51661](https://github.com/ant-design/ant-design/pull/51661) [@Zyf665](https://github.com/Zyf665)
- 🐞 修复 Tree 组件的 `onCheck` 和 `onSelect` 事件没有被正确触发的问题。[#51448](https://github.com/ant-design/ant-design/pull/51448) [@Wxh16144](https://github.com/Wxh16144)
- 🐞 修复 Input 组件的清除按钮未能垂直居中的问题。[#51700](https://github.com/ant-design/ant-design/pull/51700) [@jynxio](https://github.com/jynxio)
- 🐞 修复 Select 组件的 `prefix` 组合导致的颜色、折行、状态等一系列样式问题。[#51694](https://github.com/ant-design/ant-design/pull/51694) [@zombieJ](https://github.com/zombieJ)
- 🌐 本地化
  - 🇷🇺 添加了俄语翻译支持。[#51619](https://github.com/ant-design/ant-design/pull/51619) [@avvakumovid](https://github.com/avvakumovid)
  - 🇮🇹 为 TimePicker 添加了意大利语翻译。[#51685](https://github.com/ant-design/ant-design/pull/51685) [@LorenzoCardinali](https://github.com/LorenzoCardinali)

## 5.22.1

`2024-11-13`

- 🛠 调整 DatePicker.RangePicker 当 `needConfirm` 切用户未提交日期时，不允许通过点击输入框切换到下一个字段。[#51591](https://github.com/ant-design/ant-design/pull/51591) [@zombieJ](https://github.com/zombieJ)
- 🛠 禁用 Input.OTP `ctrl + z` 操作以防止数据变化非预期的问题。[#51609](https://github.com/ant-design/ant-design/pull/51609) [@zombieJ](https://github.com/zombieJ)
- 🐞 修复 Select 标签模式下展示异常的问题。[#51605](https://github.com/ant-design/ant-design/pull/51605) [@guoyunhe](https://github.com/guoyunhe)
- 🐞 修复 Badge `count` 在 Safari 下动画丢失的问题。[#51598](https://github.com/ant-design/ant-design/pull/51598) [@zombieJ](https://github.com/zombieJ)
- 🐞 修复 Tabs `centered` 下标签展示不全的问题。[#51571](https://github.com/ant-design/ant-design/pull/51571) [@DDDDD12138](https://github.com/DDDDD12138)
- 🐞 修复 Transfer 受控 `dataSource` 和 `selectedKeys` 时，偶尔会出现勾选不正确的问题。[#51523](https://github.com/ant-design/ant-design/pull/51523) [@IsKaros](https://github.com/IsKaros)
- 🐞 回滚 Button `display` 的 `inline-flex` 为 `inline-block` 以解决 Icon 位置偏移的问题。[#51588](https://github.com/ant-design/ant-design/pull/51588) [@Wxh16144](https://github.com/Wxh16144)

## 5.22.0

`2024-11-12`

- Form
  - 🆕 Form.Item 支持隐藏 label。[#51524](https://github.com/ant-design/ant-design/pull/51524) [@crazyair](https://github.com/crazyair)
  - 🐞 Form 移除了用于撑开 error 高度的 div，将 errorDom 和 extraDom 用一个 div 包裹，并为该 div 设置了最小高度。[#51254](https://github.com/ant-design/ant-design/pull/51254) [@hongzzz](https://github.com/hongzzz)
  - 🐞 修复 Form 在字段触发 change 但是值没有变化时，`onValuesChange` 仍然会触发的问题。[#51437](https://github.com/ant-design/ant-design/pull/51437) [@crazyair](https://github.com/crazyair)
  - 🆕 Form 支持在表单验证失败时，scrollToFirstError 中的 focus 属性。[#51231](https://github.com/ant-design/ant-design/pull/51231) [@nathanlao](https://github.com/nathanlao)
- Table
  - 🆕 Table 列过滤下拉框支持 `filterDropdownProps`。[#51297](https://github.com/ant-design/ant-design/pull/51297) [@Wxh16144](https://github.com/Wxh16144)
  - 🆕 Table `expandedRowClassName` 支持 string 。[#51067](https://github.com/ant-design/ant-design/pull/51067) [@li-jia-nan](https://github.com/li-jia-nan)
- Tree
  - 💄 修复 Tree 选中节点丢失 padding 样式的问题。[#51492](https://github.com/ant-design/ant-design/pull/51492) [@zombieJ](https://github.com/zombieJ)
  - 🆕 Tree 组件 Token 增加 `nodeHoverColor` 和 `nodeSelectedColor` 支持。[#51367](https://github.com/ant-design/ant-design/pull/51367) [@zmbxy](https://github.com/zmbxy)
  - 🆕 Tree 新增 `indentSize` token 用于自定义缩进宽度。[#51010](https://github.com/ant-design/ant-design/pull/51010) [@afc163](https://github.com/afc163)
- DatePicker
  - 🆕 DatePicker 支持 `prefix` 属性。[#51335](https://github.com/ant-design/ant-design/pull/51335) [@guoyunhe](https://github.com/guoyunhe)
  - 💄 修复 DatePicker.RangePicker 当鼠标移动到单元格之间时出现闪烁样式的问题。[#51533](https://github.com/ant-design/ant-design/pull/51533) [@afc163](https://github.com/afc163)
- Input.OTP
  - 🆕 Input.OTP 组件新增 `onInput` 事件用于获取用户每一次输入的值。[#51289](https://github.com/ant-design/ant-design/pull/51289) [@aojunhao123](https://github.com/aojunhao123)
  - 🐞 修复 Input.OTP 无法指定 `inputMode` 的问题。[#51271](https://github.com/ant-design/ant-design/pull/51271) [@alan-rudzinski](https://github.com/alan-rudzinski)
- 🆕 ColorPicker 支持 `disabledFormat` 属性以禁用格式切换器。[#51539](https://github.com/ant-design/ant-design/pull/51539) [@su-muzhi](https://github.com/su-muzhi)
- 🆕 为 InputNumber 组件的 `focus` 方法增加 `cursor` 配置项以控制光标位置。[#51444](https://github.com/ant-design/ant-design/pull/51444) [@aojunhao123](https://github.com/aojunhao123)
- 🆕 Cascader 新增 `disabled` 属性以禁用组件的所有一级目录项。[#51272](https://github.com/ant-design/ant-design/pull/51272) [@aojunhao123](https://github.com/aojunhao123)
- 🆕 Descriptions 支持单行铺满。[#51365](https://github.com/ant-design/ant-design/pull/51365) [@crazyair](https://github.com/crazyair)
- 🆕 Select/TreeSelect/Cascader 组件增加 `prefix` 属性以支持自定义前缀。[#51186](https://github.com/ant-design/ant-design/pull/51186) [@guoyunhe](https://github.com/guoyunhe)
- 🐞 修复 Image 设置 `ImageProps.preview.rootClassName` 导致预览图类名丢失。[#51538](https://github.com/ant-design/ant-design/pull/51538) [@dislido](https://github.com/dislido)
- 🐞 修复 TimePicker 面板列的最后一项无法滚动到最上面的问题。[#51481](https://github.com/ant-design/ant-design/pull/51481) [@zombieJ](https://github.com/zombieJ)
- 🐞 修复 TreeSelect 弹层高度不够的问题。[#51567](https://github.com/ant-design/ant-design/pull/51567) [@afc163](https://github.com/afc163)
- 🐞 修复 Typography 在 ConfigProvider 语言切换时候没有立即更新。[#51453](https://github.com/ant-design/ant-design/pull/51453) [@thinkasany](https://github.com/thinkasany)
- 🐞 修复 Upload `itemRender` 调用 `action.preview` 会导致崩溃的问题。[#51419](https://github.com/ant-design/ant-design/pull/51419) [@yoyo837](https://github.com/yoyo837)
- 🐞 修复 Splitter 伪元素符号问题。[#51536](https://github.com/ant-design/ant-design/pull/51536) [@dislido](https://github.com/dislido)
- 💄 优化 Collapse 可访问性属性和鼠标 hover 样式。[#51400](https://github.com/ant-design/ant-design/pull/51400) [@afc163](https://github.com/afc163)
- 💄 修复 Menu title 内容的样式问题。[#51425](https://github.com/ant-design/ant-design/pull/51425) [@coding-ice](https://github.com/coding-ice)
- 🇵🇹 修正葡萄牙语 (pt_PT) 本地化文件中的翻译，以提高准确性和一致性。[#51501](https://github.com/ant-design/ant-design/pull/51501) [@alexandre-p-marques-alb](https://github.com/alexandre-p-marques-alb)
- 🇺🇿 优化 uz_UZ 国际化。[#51407](https://github.com/ant-design/ant-design/pull/51407) [@Zukhrik](https://github.com/Zukhrik)
- TypeScript
  - 🤖 Upload 导出类型 DraggerProps。[#51546](https://github.com/ant-design/ant-design/pull/51546) [@DBvc](https://github.com/DBvc)
  - 🤖 将 defaultValue 属性添加到 TimePicker.RangePicker 示例中。[#51413](https://github.com/ant-design/ant-design/pull/51413) [@nathanlao](https://github.com/nathanlao)
  - 🤖 Message 优化 message.config 中的 top 类型。[#51468](https://github.com/ant-design/ant-design/pull/51468) [@Fog3211](https://github.com/Fog3211)
  - 🤖 优化 Tree 和 TreeSelect 的 TS 定义。[#51251](https://github.com/ant-design/ant-design/pull/51251) [@afc163](https://github.com/afc163)

## 5.21.6

`2024-10-28`

- 🐞 修复 Tree.DirectoryTree 交互区域不是整行的问题。[#51210](https://github.com/ant-design/ant-design/pull/51210)
- 🐞 修复 Button 图标未垂直居中的问题。[#51381](https://github.com/ant-design/ant-design/pull/51381)
- 🐞 修复 Input 组件 `variant` 设置 `borderless` 时，`disabled` 状态下指针样式未设置 `not-allowed` 的问题。[#51387](https://github.com/ant-design/ant-design/pull/51387) [@ustcfury](https://github.com/ustcfury)
- Splitter
  - 💄 优化 Splitter 在 SSR 下预渲染的样式。[#51378](https://github.com/ant-design/ant-design/pull/51378)
  - 💄 增大 Splitter 折叠按钮点击区域，提高可用性。[#51383](https://github.com/ant-design/ant-design/pull/51383) [@aojunhao123](https://github.com/aojunhao123)
- 💄 优化 Checkbox `indeterminate` 提升无障碍体验。[#51350](https://github.com/ant-design/ant-design/pull/51350) [@SpaNb4](https://github.com/SpaNb4)
- 💄 优化 Empty 预设 svg 图片的 `title` 提升无障碍体验。[#51368](https://github.com/ant-design/ant-design/pull/51368)

## 5.21.5

`2024-10-21`

- 🐞 修复 Cascader `limit` 属性设置 `false` 不生效的问题。[#51263](https://github.com/ant-design/ant-design/pull/51263) [@dongbanban](https://github.com/dongbanban)
- 🐞 修复 DatePicker 的禁用日期项无法响应鼠标事件的问题。[#51294](https://github.com/ant-design/ant-design/pull/51294) [@ajenkins-mparticle](https://github.com/ajenkins-mparticle)
- 🐞 修复 FloatButton 悬浮菜单难以点击的问题。[#51208](https://github.com/ant-design/ant-design/pull/51208) [@aojunhao123](https://github.com/aojunhao123)
- 🐞 修复 QRCode `onRefresh` 属性不生效的问题。[#51315](https://github.com/ant-design/ant-design/pull/51315) [@kiner-tang](https://github.com/kiner-tang)
- 🐞 修复 Typography 中的超链接无法被用户选中的问题。[#51243](https://github.com/ant-design/ant-design/pull/51243) [@thinkasany](https://github.com/thinkasany)
- 💄 修复 Badge 文本样式 token 不正确的问题。[#51252](https://github.com/ant-design/ant-design/pull/51252) [@Wxh16144](https://github.com/Wxh16144)
- 💄 修复 Layout 折叠按钮样式缺失的问题。[#51313](https://github.com/ant-design/ant-design/pull/51313) [@aojunhao123](https://github.com/aojunhao123)
- 🛠 优化 Button 事件处理器实现。[#42037](https://github.com/ant-design/ant-design/pull/42037) [@SohaibRaza](https://github.com/SohaibRaza)
- 🛠 优化 Splitter 样式 token 的命名语义。[#51223](https://github.com/ant-design/ant-design/pull/51223) [@wanpan11](https://github.com/wanpan11)

## 5.21.4

`2024-10-14`

- 🐞 修复 Input.Search 无法使用 Input Token `hoverBorderColor/activeBorderColor` 修改边框颜色的问题。[#51226](https://github.com/ant-design/ant-design/pull/51226) [@iqingting](https://github.com/iqingting)
- 🐞 修复 Tree 的图标不对齐的问题。[#51181](https://github.com/ant-design/ant-design/pull/51181) [@Meowu](https://github.com/Meowu)
- 🐞 修复 Splitter 在嵌套组合时，偶尔会出现多余滚动条的问题。[#51169](https://github.com/ant-design/ant-design/pull/51169) [@zombieJ](https://github.com/zombieJ)
- 💄 修改 Button `textHoverBg` 在悬浮状态下的背景色为 `colorFillTertiary`。[#51187](https://github.com/ant-design/ant-design/pull/51187) [@coding-ice](https://github.com/coding-ice)
- TypeScript
  - 🤖 优化 Switch `eventHandler` 类型。[#51165](https://github.com/ant-design/ant-design/pull/51165) [@thinkasany](https://github.com/thinkasany)

## 5.21.3

`2024-10-09`

- 💄 优化 Dropdown 列表较长时的滚动条样式。[#51112](https://github.com/ant-design/ant-design/pull/51112) [@Cameron-Asdf](https://github.com/Cameron-Asdf)
- Slider [#51150](https://github.com/ant-design/ant-design/pull/51150) [@yoyo837](https://github.com/yoyo837)
  - 🐞 修复 Slider 不支持 `id` 属性的问题。
  - 🐞 修复 Slider 导致 `extractStyle` 时抛出 `useLayoutEffect does nothing on the server` 警告信息的问题。
- 🐞 修复 ColorPicker 渐变色时，部分节点颜色拖拽会被强制重置为第一个节点颜色的问题。[#51161](https://github.com/ant-design/ant-design/pull/51161) [@zombieJ](https://github.com/zombieJ)
- 🐞 修复 Table 组件在切换页面时 `onChange` 函数接收到错误的 sorter 值的问题。[#51114](https://github.com/ant-design/ant-design/pull/51114) [@nathanlao](https://github.com/nathanlao)
- Splitter
  - 🐞 修复 Splitter 嵌套在一个隐藏的 Tabs 面板中时抛出警告的问题。[#51109](https://github.com/ant-design/ant-design/pull/51109) [@kiner-tang](https://github.com/kiner-tang)
  - 🐞 修复 Splitter 组件在 Flex 组件下时出现异常间距的问题。[#51096](https://github.com/ant-design/ant-design/pull/51096) [@kiner-tang](https://github.com/kiner-tang)
- 🐞 杂项：重新将 `react` 和 `react-dom` 添加进 peerDependencies。[#51079](https://github.com/ant-design/ant-design/pull/51079) [@chentsulin](https://github.com/chentsulin)
- TypeScript
  - 🤖 优化 Slider `eventName` 类型。[#51156](https://github.com/ant-design/ant-design/pull/51156) [@thinkasany](https://github.com/thinkasany)

## 5.21.2

`2024-10-01`

- 🐞 回滚 [#49221](https://github.com/ant-design/ant-design/pull/49221) 以修复 Typography `copyable` 图标位置偏上的问题。[#51066](https://github.com/ant-design/ant-design/pull/51066) [@afc163](https://github.com/afc163)
- 🐞 修复 Tabs 在浏览器缩放时无限闪烁的问题。[#51072](https://github.com/ant-design/ant-design/pull/51072) [@afc163](https://github.com/afc163)
- 🐞 修复了 Input.Search 组件中在不同缩放级别下输入框和按钮的对齐问题。[#50926](https://github.com/ant-design/ant-design/pull/50926) [@nathanlao](https://github.com/nathanlao)
- 🐞 修复 Select `variant="filled"` 时 `activeBorderColor` token 失效的问题。[#51054](https://github.com/ant-design/ant-design/pull/51054) [@coding-ice](https://github.com/coding-ice)
- 💄 MISC: 调整 focus 时的 outline 边框宽度，从 `4px` 调整到 `3px`。[#51069](https://github.com/ant-design/ant-design/pull/51069) [@afc163](https://github.com/afc163)
- Splitter
  - 🐞 修复 Splitter 在触屏设备上拖拽异常的问题。[#51060](https://github.com/ant-design/ant-design/pull/51060) [@sakuraee](https://github.com/sakuraee)
  - 💄 修复 Splitter.Panel 无法隐藏的问题。[#51032](https://github.com/ant-design/ant-design/pull/51032) [@wanpan11](https://github.com/wanpan11)
- 📦 移除 Table/Transfer/Typography 内的 TransButton 实现以降低打包体积。[#51068](https://github.com/ant-design/ant-design/pull/51068) [@afc163](https://github.com/afc163)

## 5.21.1

`2024-09-25`

- 🐞 修复 Button `type="link"` 错误使用 `colorPrimary` 的问题。[#50962](https://github.com/ant-design/ant-design/pull/50962) [@coding-ice](https://github.com/coding-ice)
- 🐞 修复 Button 样式类名权重问题导致的自定义渐变样式覆盖失效的问题。[#50962](https://github.com/ant-design/ant-design/pull/50962) [@coding-ice](https://github.com/coding-ice)
- 💄 修复 Transfer 在自定义为 TableTransfer 时，宽度不正确的问题。[#50974](https://github.com/ant-design/ant-design/pull/50974) [@zombieJ](https://github.com/zombieJ)
- 🇹🇷 补充 Table 组件 `filterCheckall` 的土耳其语文案。[#51000](https://github.com/ant-design/ant-design/pull/51000) [@ytahirkose](https://github.com/ytahirkose)

## 5.21.0 🔥

`2024-09-22`

- 🔥 **全新 Splitter 区域分割组件**，自由拖拽调整区域大小。[#50038](https://github.com/ant-design/ant-design/pull/50038) [@wanpan11](https://github.com/wanpan11)
  <img width="520" alt="Splitter" src="https://github.com/user-attachments/assets/25fc4e3c-1aa5-41bb-8f39-f34f7149e0f6">
- Button
  - 🔥 Button 支持 `variant` 变体和 `color` 颜色属性，以支持更多组合样式。[#50051](https://github.com/ant-design/ant-design/pull/50051) [@coding-ice](https://github.com/coding-ice)
  <img width="420" alt="Button" src="https://github.com/user-attachments/assets/cd5cb7fb-25e8-445f-b217-7fdd4ae0f9b4">
  - 💄 Button 添加 `textColor`、`textHoverColor` 和 `textActiveColor` 三个 token。[#47870](https://github.com/ant-design/ant-design/pull/47870) [@madocto](https://github.com/madocto)
- FloatButton
  - 🆕 FloatButton 组件支持 `placement` 属性，支持从四个方向弹出菜单。（实现方式改为 `position: absolute` + flex 布局，可能会对你现有的布局造成 breaking change，请注意兼容）[#50407](https://github.com/ant-design/ant-design/pull/50407) [@li-jia-nan](https://github.com/li-jia-nan)
  <img width="300" alt="float button" src="https://github.com/user-attachments/assets/4b53c0f6-7bdd-4e2a-91cc-2fb804f6e6d3" />
  - 💄 统一 FloatButton 和 FloatButton.Group 的按钮圆角。[#50513](https://github.com/ant-design/ant-design/pull/50513) [@Layouwen](https://github.com/Layouwen)
  - 💄 FloatButton 组件的 `z-index` 加入 `useZIndex` 管理，兼容弹层类组件。[#50311](https://github.com/ant-design/ant-design/pull/50311) [@li-jia-nan](https://github.com/li-jia-nan)
  - 🆕 FloatButton 支持传入 `htmlType` 属性。[#50892](https://github.com/ant-design/ant-design/pull/50892) [@li-jia-nan](https://github.com/li-jia-nan)
- Menu
  - 🆕 Menu.Item 和 Dropdown 的 menu 支持 `extra` 属性。[#50431](https://github.com/ant-design/ant-design/pull/50431) [@coding-ice](https://github.com/coding-ice)
  <img width="259" alt="menu extra" src="https://github.com/user-attachments/assets/fee57c43-b948-4f98-8a6b-0d94094a8a65">
  - 🐞 修复 Menu `popupStyle` 在 SubMenu 上失效的问题。[#50922](https://github.com/ant-design/ant-design/pull/50922) [@Wxh16144](https://github.com/Wxh16144)
- Table
  - 🆕 Table 列支持配置 `minWidth` 属性。[#50416](https://github.com/ant-design/ant-design/pull/50416) [@linxianxi](https://github.com/linxianxi)
  - 🐞 修复 Table 虚拟表格下的空数据和阴影问题。[#50416](https://github.com/ant-design/ant-design/pull/50416) [@linxianxi](https://github.com/linxianxi)
  - 🐞 修复 Table 列选择在某些情况下无法取消选择的问题。[#50746](https://github.com/ant-design/ant-design/pull/50746) [@Jarryxin](https://github.com/Jarryxin)
- Input
  - 🆕 Input.OTP 添加 `type` 属性以支持只需要输入数字的场景。[#50811](https://github.com/ant-design/ant-design/pull/50811) [@zombieJ](https://github.com/zombieJ)
  - 🐞 修复 Input Addon 内 Select 选中时的文字颜色。[#50486](https://github.com/ant-design/ant-design/pull/50486) [@DDDDD12138](https://github.com/DDDDD12138)
- Modal
  - ⌨️ 修复 Modal 抛出 `avoid using aria-hidden on a focused element or its ancestor` 警告的问题。[#50823](https://github.com/ant-design/ant-design/pull/50823) [@afc163](https://github.com/afc163)
  - 🆕 Modal 支持 `closable.disabled` 属性以禁用关闭按钮。[#50522](https://github.com/ant-design/ant-design/pull/50522) [@Ke1sy](https://github.com/Ke1sy)
- Descriptions
  - 🐞 优化 Descriptions 在某些情况下列内容消失的问题。[#50895](https://github.com/ant-design/ant-design/pull/50895) [@yezhonghu0503](https://github.com/yezhonghu0503)
  - 🐞 回滚 [#49946](https://github.com/ant-design/ant-design/pull/49946) 以修复 Descriptions 内弹层组件被截断的问题。[#50891](https://github.com/ant-design/ant-design/pull/50891) [@afc163](https://github.com/afc163)
- Upload
  - 🆕 Upload `name` 属性将透传给 `<input type="file" />`。[#50652](https://github.com/ant-design/ant-design/pull/50652) [@Wxh16144](https://github.com/Wxh16144)
  - 🆕 Upload 的 `showUploadList.showXxxIcon` 选项支持传入函数。[#50245](https://github.com/ant-design/ant-design/pull/50245) [@guoyunhe](https://github.com/guoyunhe)
- ColorPicker
  - 🐞 修复 ColorPicker 在 hex 输入框输入颜色时，部分颜色会因为精度问题得到不正确的颜色的问题。[#50843](https://github.com/ant-design/ant-design/pull/50843) [@zombieJ](https://github.com/zombieJ)
  - 🐞 调整 ColorPicker 在受控时，弹出面板现在不会被 `value` 锁定从而允许与 `onChangeComplete` 配合使用的受控场景。[#50785](https://github.com/ant-design/ant-design/pull/50785) [@zombieJ](https://github.com/zombieJ)
- App
  - 🐞 修复 App 的 `useApp` 调用 `modal` 方法时，填入弹层组件会警告 `zIndex` 过大的问题。[#50829](https://github.com/ant-design/ant-design/pull/50829) [@zombieJ](https://github.com/zombieJ)
  - 🐞 修复 App rtl 样式不遵守 ConfigProvider `direction` 配置。[#50246](https://github.com/ant-design/ant-design/pull/50246) [@li-jia-nan](https://github.com/li-jia-nan)
- Pagination
  - 🆕 Pagination `showSizeChanger` 属性现在支持传入 Select 属性对象。[#50952](https://github.com/ant-design/ant-design/pull/50952) [@afc163](https://github.com/afc163)
  - 💄 移除 Pagination 默认 `font-family` 样式。[#50808](https://github.com/ant-design/ant-design/pull/50808) [@afc163](https://github.com/afc163)
- Select
  - 💄 Select 组件新增一些 token 以支持自定义 hover 和 focus 样式。[#50951](https://github.com/ant-design/ant-design/pull/50951) [@kiner-tang](https://github.com/kiner-tang)
  - 🐞 修复 Select 搜索模式下搜索词内容覆盖右侧图标的问题。[#50917](https://github.com/ant-design/ant-design/pull/50917) [@yezhonghu0503](https://github.com/yezhonghu0503)
  - 🐞 修复 Select 同时启用 `allowClear` 和 `variant="filled"` 时清除图标多余的白色背景的问题。[#50916](https://github.com/ant-design/ant-design/pull/50916) [@thinkasany](https://github.com/thinkasany)
- 🆕 Segmented 新增 `vertical` 属性以支持垂直模式，并优化了可访问性。[#50708](https://github.com/ant-design/ant-design/pull/50708) [@liangchaofei](https://github.com/liangchaofei)
  <img width="72" alt="Segmented vertical demo" src="https://github.com/user-attachments/assets/c1b0f971-9966-48d4-b641-4fd476c59513">
- 🆕 Radio.Group 支持 `block` 属性以撑满一行。[#50828](https://github.com/ant-design/ant-design/pull/50828) [@yuanliu147](https://github.com/yuanliu147)
- 🆕 ConfigProvider 支持配置 Splitter 组件的 `className` 和 `style` 属性。[#50855](https://github.com/ant-design/ant-design/pull/50855) [@li-jia-nan](https://github.com/li-jia-nan)
- 🆕 Image 新增 `onActive` 到 `toolbarRender` 以切换图片 。[#50812](https://github.com/ant-design/ant-design/pull/50812) [@madocto](https://github.com/madocto)
- 🆕 List 组件支持传递 `ref` 属性。[#50772](https://github.com/ant-design/ant-design/pull/50772) [@Asanio06](https://github.com/Asanio06)
- 🆕 Collapse 支持语义化 `classNames` 和 `styles` 属性。[#50557](https://github.com/ant-design/ant-design/pull/50557) [@wanpan11](https://github.com/wanpan11)
- 💄 移除 Skeleton.Node 默认的图标 `children` 使其成为真正的自定义节点。[#50278](https://github.com/ant-design/ant-design/pull/50278) [@afc163](https://github.com/afc163)
- 🐞 修复 Typography `copyable` 对数组 `children` 复制时会有额外 `,` 字符的问题。[#50813](https://github.com/ant-design/ant-design/pull/50813) [@zombieJ](https://github.com/zombieJ)
- 🐞 修复 Layout.Sider 单独使用时无法修改主题的问题。[#50780](https://github.com/ant-design/ant-design/pull/50780) [@zombieJ](https://github.com/zombieJ)
- 🐞 修复 Tour 组件标题过长时会遮挡关闭按钮的问题。[#50942](https://github.com/ant-design/ant-design/pull/50942) [@kiner-tang](https://github.com/kiner-tang)
- 🌐 本地化
  - 🇯🇵 补充 DatePicker `ja_JP` 语言环境的 `shortWeekDays` 和 `shortMonths` 文案。[#50893](https://github.com/ant-design/ant-design/pull/50893) [@harapeko](https://github.com/harapeko)
  - 🇪🇬 补充 Image 预览功能的 `ar_EG` 阿拉伯语文案。[#50851](https://github.com/ant-design/ant-design/pull/50851) [@nathanlao](https://github.com/nathanlao)
  - 🇬🇷 补充 Form 组件的希腊语文案。[#50825](https://github.com/ant-design/ant-design/pull/50825) [@nathanlao](https://github.com/nathanlao)
  - 🇪🇸 补充 Tour 组件的西班牙语文案。[#50805](https://github.com/ant-design/ant-design/pull/50805) [@thinkasany](https://github.com/thinkasany)
- TypeScript
  - 🤖 Checkbox 新增 `onFocus` 和 `onBlur` 类型定义。[#50842](https://github.com/ant-design/ant-design/pull/50842) [@huiliangShen](https://github.com/huiliangShen)
  - 🤖 修复 Badge 属性类型定义不支持传递鼠标事件的问题。[#50774](https://github.com/ant-design/ant-design/pull/50774) [@yuanliu147](https://github.com/yuanliu147)

## 5.20.6

`2024-09-09`

- 🐞 修复 Menu 折叠动画不够丝滑的问题。[#50751](https://github.com/ant-design/ant-design/pull/50751) [@afc163](https://github.com/afc163)
- 🐞 修复 Table 虚拟滚动时单元格宽度可能溢出的问题。[#50737](https://github.com/ant-design/ant-design/pull/50737) [@huiliangShen](https://github.com/huiliangShen)
- 🐞 修复 Input.Search 的按钮圆角不随 `size` 变化的问题。[#50734](https://github.com/ant-design/ant-design/pull/50734) [@afc163](https://github.com/afc163)
- 🐞 修复 Form 禁用时仍可切换密码显隐的问题。[#50616](https://github.com/ant-design/ant-design/pull/50616) [@Jarryxin](https://github.com/Jarryxin)
- 🐞 回滚 [#49899](https://github.com/ant-design/ant-design/pull/49899) 以修复 Dropdown 菜单项文字溢出菜单的问题，并重新修复屏幕视口外菜单项内容换行错误的问题。[#50752](https://github.com/ant-design/ant-design/pull/50752) [#50718](https://github.com/ant-design/ant-design/pull/50718) [@afc163](https://github.com/afc163)
- 💄 修复 Badge 鼠标移出时无背景色过渡动画的问题。[#50743](https://github.com/ant-design/ant-design/pull/50743) [@coding-ice](https://github.com/coding-ice)
- TypeScript
  - 🤖 修复 Collapse 的 `onChange` 的函数入参类型。[#50754](https://github.com/ant-design/ant-design/pull/50754) [@yuanliu147](https://github.com/yuanliu147)

## 5.20.5

`2024-09-03`

- 🛠 调整 Tree 与 TreeSelect 的 `defaultExpandAll` 的行为，仅将有子节点的 `treeNode` 加入 `expandedKeys` 以防止在大数据与 `loadData` 异步的情况下引发的性能问题。[#50689](https://github.com/ant-design/ant-design/pull/50689) [@zombieJ](https://github.com/zombieJ)
- 🐞 修复 Cascader 在 `multiple` 下搜索不会显示父节点作为选项的问题。[#50689](https://github.com/ant-design/ant-design/pull/50689)
- 🐞 修复 Typography `ellipsis.tooltip.title` 配置 ReactNode 会导致死循环的问题。[#50688](https://github.com/ant-design/ant-design/pull/50688) [@zombieJ](https://github.com/zombieJ)

## 5.20.4

`2024-09-02`

- Menu
  - 🐞 修复 Menu 的 `itemPaddingInline` token 不生效的问题。[#50663](https://github.com/ant-design/ant-design/pull/50663) [@coding-ice](https://github.com/coding-ice)
  - 🐞 修复 Menu `hover` 时背景色切换渐变效果丢失的问题。[#50624](https://github.com/ant-design/ant-design/pull/50624) [@afc163](https://github.com/afc163)
- 💄 给 Badge 增加一个动画缓动效果。[#50607](https://github.com/ant-design/ant-design/pull/50607) [@afc163](https://github.com/afc163)
- 💄 修复 Table 列头切换状态时多余的的移动缓动动画。[#50605](https://github.com/ant-design/ant-design/pull/50605) [@afc163](https://github.com/afc163)
- 🛠 重构 Typography 代码以优化内部实现逻辑。[#50561](https://github.com/ant-design/ant-design/pull/50561) [@afc163](https://github.com/afc163)
- 🐞 当表单被禁用时，禁用 Form.Item 中的 Rate 组件。[#50594](https://github.com/ant-design/ant-design/pull/50594) [@nikzanda](https://github.com/nikzanda)
- 🌐 补充土耳其 `Transfer.deselectAll` 本地化文本。[#50672](https://github.com/ant-design/ant-design/pull/50672) [@coding-ice](https://github.com/coding-ice)

## 5.20.3

`2024-08-26`

- 🐞 重构 Typography 在使用 css 原生省略时的检查逻辑，以解决屏幕缩放等情况下的精度问题。[#50514](https://github.com/ant-design/ant-design/pull/50514) [@zombieJ](https://github.com/zombieJ)
- 🐞 修复 ColorPicker 组件在面板上不拖拽直接点击的时候，`onChangeComplete` 返回值不正确的问题。[#50501](https://github.com/ant-design/ant-design/pull/50501) [@zombieJ](https://github.com/zombieJ)
- 🐞 修复 FloatButton.Group 在受控模式下 React 会警告递归更新的问题。[#50500](https://github.com/ant-design/ant-design/pull/50500) [@zombieJ](https://github.com/zombieJ)

## 5.20.2

`2024-08-19`

- 💄 修复 InputNumber 没有控件的后缀样式问题。[#50450](https://github.com/ant-design/ant-design/pull/50450) [@coding-ice](https://github.com/coding-ice)
- 🆕 Form `rule.message` 支持通过 `\\${}` 跳过变量替换。[#50412](https://github.com/ant-design/ant-design/pull/50412) [@zombieJ](https://github.com/zombieJ)
- 🐞 修复了 FloatButton 组件当 shape=“square” 时，并且在菜单模式下，菜单弹出时 trigger 元素圆角缺失的问题。[#50408](https://github.com/ant-design/ant-design/pull/50408) [@li-jia-nan](https://github.com/li-jia-nan)
- 🐞 修复 Upload.Dragger 拖拽上传文件夹时不工作问题。[#50394](https://github.com/ant-design/ant-design/pull/50394) [@huiliangShen](https://github.com/huiliangShen)
- 🐞 修复 Select 指定 `getPopcontainer={node=node.parentNode}` 时箭头图标 hover 后会消失的问题。[#50382](https://github.com/ant-design/ant-design/pull/50382) [@afc163](https://github.com/afc163)
- 🐞 修复 Popover 设置 `arrow.pointAtCenter` 属性时箭头未对齐错误。[#50260](https://github.com/ant-design/ant-design/pull/50260) [@Wxh16144](https://github.com/Wxh16144)
- 📖 Transfer 补充俄罗斯语和乌克兰语本地化文案。[#50429](https://github.com/ant-design/ant-design/pull/50429) [@alexlag](https://github.com/alexlag)
- TypeScript
  - 🤖 将 Table 部分泛型约束 object 回滚为 any，以减少 [#50351](https://github.com/ant-design/ant-design/pull/50351) 造成的 break change。[#50372](https://github.com/ant-design/ant-design/pull/50372) [@crazyair](https://github.com/crazyair)

## 5.20.1

`2024-08-11`

- ColorPicker
  - 🐞 修复 ColorPicker 出现 `@ant-design/fast-color` 编译报错问题。[#50293](https://github.com/ant-design/ant-design/pull/50293) [@afc163](https://github.com/afc163)
  - 💄 修复 ColorPicker 在 Space.Compact 下圆角样式不会调整的问题。[#50291](https://github.com/ant-design/ant-design/pull/50291) [@zombieJ](https://github.com/zombieJ)
- 💄 修复 Table `zIndexTableFixed` token 不支持传入 CSS 变量的问题。[#50355](https://github.com/ant-design/ant-design/pull/50355) [@li-jia-nan](https://github.com/li-jia-nan)
- 🐞 修复 FloatButton 不支持 `zIndexPopupBase` token 的问题。[#50349](https://github.com/ant-design/ant-design/pull/50349) [@Yuzu-io](https://github.com/Yuzu-io)
- 🐞 修复 Typography 的 `ellipsis` 因为精度问题导致 `tooltip` 无法显示的问题。[#50315](https://github.com/ant-design/ant-design/pull/50315) [@zombieJ](https://github.com/zombieJ)
- 🐞 修复 Form `preserve={false}` 会触发 `shouldUpdate` rerender 的问题。[#50283](https://github.com/ant-design/ant-design/pull/50283) [@zombieJ](https://github.com/zombieJ)
- 🐞 修复 Tour 默认 `z-index` 没有使用 `zIndexPopup` token 的问题。[#50300](https://github.com/ant-design/ant-design/pull/50300) [@zombieJ](https://github.com/zombieJ)
- 🐞 修复 Calendar `locale` 没有正确覆盖 ConfigProvider `locale` 的问题。[#50236](https://github.com/ant-design/ant-design/pull/50236) [@Asanio06](https://github.com/Asanio06)
- 🐞 修复 Spin 组件设置 `percent` 时未水平居中的问题。[#50277](https://github.com/ant-design/ant-design/pull/50277) [@Wxh16144](https://github.com/Wxh16144)
- 🐞 修复 Tree 展开按钮在标题折行时没有顶上对齐的问题。[#50313](https://github.com/ant-design/ant-design/pull/50313) [@zombieJ](https://github.com/zombieJ)
- 🌐 本地化
  - 🇦🇿 修复 `az_AZ` 本地化文案缺少空格的问题。[#50238](https://github.com/ant-design/ant-design/pull/50238) [@thinkasany](https://github.com/thinkasany)
- TypeScript
  - 🤖 优化 Table 中所有的 Record 类型从 any 约束为 Object 类型。[#50351](https://github.com/ant-design/ant-design/pull/50351) [@li-jia-nan](https://github.com/li-jia-nan)

## 5.20.0

`2024-08-03`

- ColorPicker
  - 🛠 替换 ColorPicker 内部使用的 `@ctrl/tinycolor` 为 `@ant-design/fast-color`。[#49846](https://github.com/ant-design/ant-design/pull/49846)
  - 🆕 ColorPicker 支持渐变色选择，并修复受控模式不生效的问题。[#50050](https://github.com/ant-design/ant-design/pull/50050)
  - 🐞 修复 ColorPicker 在 cssinjs 模式下 line-height 失效的问题。[#50220](https://github.com/ant-design/ant-design/pull/50220) [@vagusX](https://github.com/vagusX)
  - 🐞 修复 ColorPicker 在 disabled 状态下的光标问题。[#50217](https://github.com/ant-design/ant-design/pull/50217) [@coding-ice](https://github.com/coding-ice)
  - 💄 ColorPicker 当从 `transparent` 状态进行颜色选取时，默认使用亮色以代替原本的纯黑色以提升用户交互体验。[#50148](https://github.com/ant-design/ant-design/pull/50148)
- 🆕 ConfigProvider 支持配置 Spin 的 indicator 属性。[#50183](https://github.com/ant-design/ant-design/pull/50183) [@coding-ice](https://github.com/coding-ice)
- 🆕 Upload `showUploadList` 添加 `extra` 以支持渲染额外信息。[#50098](https://github.com/ant-design/ant-design/pull/50098) [@guoyunhe](https://github.com/guoyunhe)
- 🆕 Tree 新增 `switcherLoadingIcon` 属性以支持自定义树节点的加载图标[#49716](https://github.com/ant-design/ant-design/pull/49716) [@coding-ice](https://github.com/coding-ice)
- Slider
  - 🆕 Slider 支持 `range.editable` 以动态添加/删除节点。[#49923](https://github.com/ant-design/ant-design/pull/49923)
  - 🆕 Slider `range.editable` 支持 `minCount` 与 `maxCount` 以配置可编辑节点树。[#49987](https://github.com/ant-design/ant-design/pull/49987)
- 🆕 QRCode 支持自定义状态渲染器。[#49563](https://github.com/ant-design/ant-design/pull/49563) [@kiner-tang](https://github.com/kiner-tang)
- 🆕 Table 组件支持自定义过滤器下拉框空状态。[#49613](https://github.com/ant-design/ant-design/pull/49613) [@Wxh16144](https://github.com/Wxh16144)
- 🆕 Divider 支持添加 `dashed`（虚线）、`dotted`（点线）或 `solid`（实线）的样式。[#49654](https://github.com/ant-design/ant-design/pull/49654) [@pinaki-08](https://github.com/pinaki-08)
- 🆕 InputNumber 支持 `suffix` 属性。[#49674](https://github.com/ant-design/ant-design/pull/49674) [@coding-ice](https://github.com/coding-ice)
- 🆕 Input/TextArea/Mentions 组件支持 `onClear` 回调，便于区分点击 x 清除和手动清除这两个行为。[#49905](https://github.com/ant-design/ant-design/pull/49905) [@li-jia-nan](https://github.com/li-jia-nan)
- ⌨️ 优化 Input 下长按回车会不断触发变更的问题。[rc-input#72](https://github.com/react-component/input/pull/72/files) [@crazyair](https://github.com/crazyair)
- 🐞 修复 Table 存在分组列时排序不生效的问题。[#50086](https://github.com/ant-design/ant-design/pull/50086) [@Zyf665](https://github.com/Zyf665)
- 🐞 修复 Popover/PopConfirm/Tooltip 在目标元素宽度过大时，使用 `topLeft`, `topRight`, `bottomLeft`, `bottomRight` 的弹出动画起始缩放中心有所偏移的问题。[#50134](https://github.com/ant-design/ant-design/pull/50134)
- 💄 修复 Tree 组件 filter-node 节点高亮样式丢失。[#49773](https://github.com/ant-design/ant-design/pull/49773) [@wanpan11](https://github.com/wanpan11)
- TypeScript
  - 🤖 Component Token 支持 string 或 number。[#49837](https://github.com/ant-design/ant-design/pull/49837) [@thinkasany](https://github.com/thinkasany)
  - 🤖 改进 Radio 类型导出。[#50203](https://github.com/ant-design/ant-design/pull/50203) [@baicie](https://github.com/baicie)
- 🌐 本地化
  - 🇪🇸 改进西班牙语本地化文案。[#50179](https://github.com/ant-design/ant-design/pull/50179) [@sergioalmela](https://github.com/sergioalmela)
  - 🇺🇦 补全 `uk_UA` 本地化文案。[#50178](https://github.com/ant-design/ant-design/pull/50178) [@Andrik264](https://github.com/Andrik264)

## 5.19.4

`2024-07-30`

- 🐞 修复 Form.Item 内部元素没有继承行高的问题。[#50020](https://github.com/ant-design/ant-design/pull/50020) [@Wanpan](https://github.com/Wanpan)
- 🐞 修复 Popover `title` 和 `content` 都不存在时 Overlay 仍显示的问题。[#50064](https://github.com/ant-design/ant-design/pull/50064) [@LLmoskk](https://github.com/LLmoskk)
- 🐞 修复 Empty Token 设置 `opacityImage` 不生效的问题。[#50066](https://github.com/ant-design/ant-design/pull/50066) [@thinkasany](https://github.com/thinkasany)
- 💄 修复 Tour 在移动端下溢出屏幕的问题。[#50082](https://github.com/ant-design/ant-design/pull/50082)
- 💄 修复 Checkbox `indeterminate` 状态的 hover 样式。[#50083](https://github.com/ant-design/ant-design/pull/50083)
- 💄 修复 DatePicker 在 rtl 下选择样式不符直觉。[#50045](https://github.com/ant-design/ant-design/pull/50045) [@Layouwen](https://github.com/Layouwen)
- 💄 修复 Descriptions 在 `bordered` 模式下溢出容器的问题。[#49946](https://github.com/ant-design/ant-design/pull/49946) [@leefinder](https://github.com/leefinder)
- 🛠 MISC：将通用样式工具迁移到 `@ant-design/cssinjs-utils`。[#50030](https://github.com/ant-design/ant-design/pull/50030) [@YumoImer](https://github.com/YumoImer)
- 🌐 国际化
  - 🇵🇱 为 pl_PL 补充 DatePicker 国际化。[#50023](https://github.com/ant-design/ant-design/pull/50023) [@ang33l](https://github.com/ang33l)
  - 🇧🇪🇫🇷 为 fr_BE fr_FR 补充 Modal Tour 国际化。[#50058](https://github.com/ant-design/ant-design/pull/50058) [@JaccoGoris](https://github.com/JaccoGoris)

## 5.19.3

`2024-07-19`

- 🐞 修复 Table 的 `onChange` 事件中排序器参数错误的问题。[#49533](https://github.com/ant-design/ant-design/pull/49533) [@Zyf665](https://github.com/Zyf665)
- 🐞 修复 Pagination `token.itemBg` 设置不生效的问题。[#49933](https://github.com/ant-design/ant-design/pull/49933)
- 🐞 修复 List 默认分页位置错误的问题。[#49925](https://github.com/ant-design/ant-design/pull/49925) [@coding-ice](https://github.com/coding-ice)
- 🐞 修复 Image 预览操作栏两侧空白区域被点击时，无法关闭预览的问题。[#49915](https://github.com/ant-design/ant-design/pull/49915) [@wanpan11](https://github.com/wanpan11)
- 🐞 修复 Card 圆角对 `cover` 属性中的非 img 元素不生效的问题。[#49862](https://github.com/ant-design/ant-design/pull/49862) [@coding-ice](https://github.com/coding-ice)
- 💄 修复 Dropdown 菜单内容在视口边缘换行的问题。[#49899](https://github.com/ant-design/ant-design/pull/49899)
- 💄 修复 Descriptions 子项之间可能没有边距的问题。[#49895](https://github.com/ant-design/ant-design/pull/49895) [@crazyair](https://github.com/crazyair)
- ⌨️ 优化 Select 多选模式下长按回车会不断触发变更的问题。[#49963](https://github.com/ant-design/ant-design/pull/49963) [@crazyair](https://github.com/crazyair)
- 🇪🇬 添加阿拉伯文(埃及) (ar_EG) 的翻译。[#49852](https://github.com/ant-design/ant-design/pull/49852) [@ahmedsamirdev](https://github.com/ahmedsamirdev)
- TypeScript
  - 🤖 复用 Tooltips 的定义以简化 ColorPicker 的类型声明。[#49949](https://github.com/ant-design/ant-design/pull/49949) [@Wxh16144](https://github.com/Wxh16144)

## 5.19.2

`2024-07-15`

- 🐞 修复 List `actions` 为空数组时会渲染 `0` 的问题。[#49842](https://github.com/ant-design/ant-design/pull/49842) [@int64ago](https://github.com/int64ago)
- 🐞 修复 Upload 拖拽上传文件夹时，`beforeUpload ` 中 `fileList` 不完整的问题。[#49832](https://github.com/ant-design/ant-design/pull/49832) [@coderz-w](https://github.com/coderz-w)
- Descriptions
  - 🐞 修复 Descriptions 在内容过长时会遮盖后面内容的问题。[#49803](https://github.com/ant-design/ant-design/pull/49803) [@coding-ice](https://github.com/coding-ice)
  - 🐞 修复 Descriptions 在 Table `expandedRowRender` 中渲染样式异常的问题。[#49727](https://github.com/ant-design/ant-design/pull/49727) [@ljw-codeking](https://github.com/ljw-codeking)
- 🐞 修复 Spin `percent` 和 `size` 一同使用时，样式不正确的问题。[#49876](https://github.com/ant-design/ant-design/pull/49876)
- 🇮🇳 补充 DatePicker 的 `kn_IN` 本地化文案。[#49860](https://github.com/ant-design/ant-design/pull/49860) [@neerajap-01](https://github.com/neerajap-01)
- Typescript
  - 🐞 修复 Tree `icon` 和 `switcherIcon` 参数类型未能正确推导的问题。[#49821](https://github.com/ant-design/ant-design/pull/49821)
  - 🐞 回滚 Cascader `multiple` 定义更新导致 `value` 定义丢失的问题。[#49741](https://github.com/ant-design/ant-design/pull/49741) [@YangZhi1](https://github.com/YangZhi1)

## 5.19.1

`2024-07-05`

- 🐞 Global: @ant-design/colors 使用预编译颜色预设来提升运行时性能。[#49714](https://github.com/ant-design/ant-design/pull/49714) [@guoyunhe](https://github.com/guoyunhe)
- 🐞 Global: 对于弹层类自动增长 `zIndex` 不再限制最大值，而是改成控制台警告。[#49720](https://github.com/ant-design/ant-design/pull/49720)
- 🐞 优化 Input.TextArea 清除图标的位置，与其他输入组件统一。[#49718](https://github.com/ant-design/ant-design/pull/49718) [@wanpan11](https://github.com/wanpan11)
- 🐞 修复 Input 组件 `filled` 变体下 `activeBorderColor` 不生效问题。[#49699](https://github.com/ant-design/ant-design/pull/49699) [@wanpan11](https://github.com/wanpan11)
- TypeScript
  - 🤖 修复 Cascader 组件 `multiple` 的类型问题。[#49669](https://github.com/ant-design/ant-design/pull/49669) [@YangZhi1](https://github.com/YangZhi1)

## 5.19.0

`2024-07-01`

- 🆕 ConfigProvider 现支持全局配置 `variant`。[#49535](https://github.com/ant-design/ant-design/pull/49535) [@MadCcc](https://github.com/MadCcc)
- 🆕 QRCode
  - QRCode 使用 `rc-qrcode` 替代了 `qrcode.react`。[#49454](https://github.com/ant-design/ant-design/pull/49454) [@kiner-tang](https://github.com/kiner-tang)
  - QRCode 新增支持点击事件和 `iconSize` 宽高配置。[#49240](https://github.com/ant-design/ant-design/pull/49240) [@thinkasany](https://github.com/thinkasany)
- 🆕 Select 组件的 `filterSort` 属性现新增获取 `searchValue` 的参数。[#49352](https://github.com/ant-design/ant-design/pull/49352) [@MadCcc](https://github.com/MadCcc)
- 🆕 Pagination 支持 `simple={{ readOnly }}` 属性和 `align` 属性。[#49562](https://github.com/ant-design/ant-design/pull/49562) [@coding-ice](https://github.com/coding-ice)
- 💄 优化了 Slider 滑块的激活样式。[#49630](https://github.com/ant-design/ant-design/pull/49630)
- 🐞 增强了 Anchor 的 `affix` 属性，支持更多配置项。[#49295](https://github.com/ant-design/ant-design/pull/49295) [@gin-lsl](https://github.com/gin-lsl)
- DatePicker
  - 🐞 修复了 DatePicker/TimePicker 的 RangePicker 在 `placement` 设置为 `topRight` 或 `bottomRight` 时箭头丢失的问题。[#49333](https://github.com/ant-design/ant-design/pull/49333)
  - 🐞 修复了 DatePicker 切换按钮缺失可访问性文本的问题，修复了 `DatePicker.RangePicker` 在 RTL 模式下的样式问题。[#49333](https://github.com/ant-design/ant-design/pull/49333)
  - 🐞 修复了 DatePicker.RangePicker 年选择器输入结束值错误导致报错的问题。[#49333](https://github.com/ant-design/ant-design/pull/49333)
  - 🐞 修复了 DatePicker.RangePicker 键盘输入日期时已选日期重置的问题。[#49333](https://github.com/ant-design/ant-design/pull/49333)
- 🐞 Button 修复了用作 Dropdown `trigger` 时 `disabled` 属性不生效的问题。[#47363](https://github.com/ant-design/ant-design/pull/47363)
- 🐞 InputNumber 在同时使用 `type=number` 和 `changeOnWheel` 时现在会给出警告提示。[#49648](https://github.com/ant-design/ant-design/pull/49648) [@wanpan11](https://github.com/wanpan11)
- 🐞 修复 Dropdown 次级菜单 reset 样式丢失的问题。[#49643](https://github.com/ant-design/ant-design/pull/49643) [@wanpan11](https://github.com/wanpan11)
- 💄 优化了 DatePicker、TimePicker、Select、TreeSelect、Input、InputNumber、Mentions 的 `variant="borderless"` 样式，现在在设置 `status` 属性时也能够被区分。[#49608](https://github.com/ant-design/ant-design/pull/49608)
- Table
  - 🐞 Table 修复了 `locale.emptyText` 设置为非 `undefined` 值时仍会显示默认值的问题。[#49599](https://github.com/ant-design/ant-design/pull/49599) [@照明胧](https://github.com/mmmml-zhao)
  - 🐞 Table 自定义全局组件的 Empty 样式后，Table的过滤面板没生效的问题。[#49548](https://github.com/ant-design/ant-design/pull/49548) [@duqigit](https://github.com/duqigit)
- 🐞 Upload 修复了在列表模式下文件过多时出现的渲染性能问题。[#49598](https://github.com/ant-design/ant-design/pull/49598) [@tlkv](https://github.com/tlkv)
- 🐞 Typography 修复在父元素存在 `nowrap` 样式时，`ellipsis` 不生效的问题。[#49667](https://github.com/ant-design/ant-design/pull/49667)
- TypeScript:
  - 🤖 ConfigProvider 改进了 `renderEmpty` 方法的 TypeScript 类型定义。[#49602](https://github.com/ant-design/ant-design/pull/49602) [@Wxh16144](https://github.com/Wxh16144)
- 🌐 国际化
  - 🇹🇭 添加了缺失的泰语翻译，包括 `Transfer.deselectAll`、`Text.collapse`、`QRCode.scanned`、`ColorPicker.presetEmpty`。[#49588](https://github.com/ant-design/ant-design/pull/49588) [@Tantatorn-dev](https://github.com/Tantatorn-dev)
  - 🇳🇱 Tour 修复了 nl_NL 本地化问题。[#49612](https://github.com/ant-design/ant-design/pull/49612) [@Hannnnnnnnnnnnnnnn](https://github.com/Hannnnnnnnnnnnnnnn)
  - 🇹🇷 调整了 DatePicker 的土耳其语言文案。[#49333](https://github.com/ant-design/ant-design/pull/49333)

## 5.18.3

`2024-06-19`

- 🐞 回滚 [#49289](https://github.com/ant-design/ant-design/pull/49289) 以修复 5.18.2 引入的 Table 排序状态失效的问题。[#49487](https://github.com/ant-design/ant-design/pull/49487)
- 🛠 将样式处理的部分功能迁移到 `@ant-design/cssinjs` 中。[#49463](https://github.com/ant-design/ant-design/pull/49463) [@YumoImer](https://github.com/YumoImer)
- 🇳🇵 补充 ne_NP 本地化文案。[#49492](https://github.com/ant-design/ant-design/pull/49492) [@FuliangZhang](https://github.com/FuliangZhang)

## 5.18.2

`2024-06-17`

- 🐞 修复了 message 图标与文本内容没有严格居中对齐的问题。[#49429](https://github.com/ant-design/ant-design/pull/49429) [@nova1751](https://github.com/nova1751)
- 🐞 修复 #49134 [#49289](https://github.com/ant-design/ant-design/pull/49289) 中提到的 Table 组件的 `onChange` 事件中排序器参数的问题。[@Zyf665](https://github.com/Zyf665)
- 🐞 为 Collapse 组件中展开/折叠图标 添加具有语义的 `aria-label` 属性值。[#49395](https://github.com/ant-design/ant-design/pull/49395) [@wanpan11](https://github.com/wanpan11)
- 🐞 修复 InputNumber 组件中 token `inputFontSizeSM` 和 `inputFontSizeLG` 不生效的问题。[#49369](https://github.com/ant-design/ant-design/pull/49369)
- 💄 修复 Empty 部分样式下，描述的 `colorTextDescription` 不生效的问题。[#49408](https://github.com/ant-design/ant-design/pull/49408)
- 💄 解决 Badge `processing` 与 Tailwind CSS 样式冲突的问题。[#49379](https://github.com/ant-design/ant-design/pull/49379)
- 🌐 国际化
  - 🇲🇳 添加蒙古语言 (mn_MN) 翻译。[#49373](https://github.com/ant-design/ant-design/pull/49373) [@JiyinShao](https://github.com/JiyinShao)

## 5.18.1

`2024-06-12`

- Typography
  - 🐞 修复 Typography 组件的 `ellipsis` 在 `pre` 标签中没有正常工作的问题。[#49168](https://github.com/ant-design/ant-design/pull/49168) [@nova1751](https://github.com/nova1751)
  - 🐞 修复 Typography `ellipsis` 在 Safari 中有时不生效的问题。[#49221](https://github.com/ant-design/ant-design/pull/49221)
- 🐞 修复 Space `size` 设置 0 不生效的问题。[#49192](https://github.com/ant-design/ant-design/pull/49192) [@coding-ice](https://github.com/coding-ice)
- 🐞 修复 Progress 文本的 padding 在 cssinjs 下单位失效问题。[#49250](https://github.com/ant-design/ant-design/pull/49250) [@vagusX](https://github.com/vagusX)
- 🐞 修复 Modal 关闭按钮的 `zIndex` 在 `cssVar` 模式下不正确的问题。[#49238](https://github.com/ant-design/ant-design/pull/49238)
- 🐞 修复 Image `width` `height` 被应用到预览图片上的问题。[#49259](https://github.com/ant-design/ant-design/pull/49259) [@nova1751](https://github.com/nova1751)
- 🐞 修复 Pagination 页码切换器 hover 时图标消失的问题。[#49262](https://github.com/ant-design/ant-design/pull/49262)
- 🐞 修复 Mentions 当 `loading=true` 时不响应 Enter 事件的问题。[#49292](https://github.com/ant-design/ant-design/pull/49292) [@wanpan11](https://github.com/wanpan11)
- 🐞 修复 Notification 没有继承 App config 属性的问题。[#49339](https://github.com/ant-design/ant-design/pull/49339) [@hemengke1997](https://github.com/hemengke1997)
- 💄 修复 Drawer 在暗黑模式下，文本颜色不正确的问题。[#49217](https://github.com/ant-design/ant-design/pull/49217)
- 💄 修复 Spin 自定义 `indicator` 时，样式不可见以及 `percent` 进度没有传递的问题。[#49211](https://github.com/ant-design/ant-design/pull/49211) [@wanpan11](https://github.com/wanpan11)
- DatePicker
  - 🐞 修复 DatePicker/TimePicker `placement` 属性失效的问题。[#49303](https://github.com/ant-design/ant-design/pull/49303)
  - 💄 修复 DatePicker 头部区域内容不居中对齐的问题。[#49332](https://github.com/ant-design/ant-design/pull/49332)
- TypeScript
  - 🤖 Mentions 新增导出类型 `MentionsProps`。[#49281](https://github.com/ant-design/ant-design/pull/49281) [@thinkasany](https://github.com/thinkasany)
  - 🤖 移除 Statistic 重复的联合类型。[#49218](https://github.com/ant-design/ant-design/pull/49218) [@thinkasany](https://github.com/thinkasany)
- 🌐 国际化
  - 🇲🇾 补充 Table、Form、Tour 等 ms_MY 文案。[#49353](https://github.com/ant-design/ant-design/pull/49353) [@cs-gavin-huang](https://github.com/cs-gavin-huang)
  - 🇦🇿 补充 DatePicker az_AZ 文案。[#49247](https://github.com/ant-design/ant-design/pull/49247) [@sabitalizade](https://github.com/sabitalizade)

## 5.18.0

`2024-06-03`

- 🛎 Button 默认布局由 `inline-block` 切换为 `inline-flex` 以修复图标和文字对齐问题，并简化了 `iconPosition` 的实现。[#47318](https://github.com/ant-design/ant-design/pull/47318)
- Drawer
  - 🆕 Drawer 新增 `drawerRender` 属性以支持自定义渲染。[#49125](https://github.com/ant-design/ant-design/pull/49125) [@crazyair](https://github.com/crazyair)
  - 🛠 Drawer 加载中的状态实现由 Spin 替换为 Skeleton。[#48886](https://github.com/ant-design/ant-design/pull/48886) [@li-jia-nan](https://github.com/li-jia-nan)
- Form
  - 🆕 Form.Item 新增 `layout` 属性以切换布局方式。[#49119](https://github.com/ant-design/ant-design/pull/49119) [@crazyair](https://github.com/crazyair)
  - 🆕 Form 的 `ref` 属性支持获取原生节点。[#48841](https://github.com/ant-design/ant-design/pull/48841) [@wanpan11](https://github.com/wanpan11)
  - 🆕 Form 新增 `clearOnDestroy` 属性以在卸载时清空表单数据。[#48921](https://github.com/ant-design/ant-design/pull/48921) [@crazyair](https://github.com/crazyair)
- Image
  - 🆕 Image 新增 `onReset` 和 `onClose` 属性。[#48936](https://github.com/ant-design/ant-design/pull/48936) [@kiner-tang](https://github.com/kiner-tang)
  - 🆕 Image 的 `toolbarRender` 和 `imageRender` 渲染函数入参新增 `ImgInfo` 信息。[#48729](https://github.com/ant-design/ant-design/pull/48729) [@nova1751](https://github.com/nova1751)
- notification
  - 🆕 notification 增加 `pauseOnHover` 属性以暂停计时器。[#49024](https://github.com/ant-design/ant-design/pull/49024) [@yociduo](https://github.com/yociduo)
  - 🆕 notification 新增 `showProgress` 属性以显示进度条。[#48353](https://github.com/ant-design/ant-design/pull/48353) [@yociduo](https://github.com/yociduo)
- Progress
  - 🆕 Progress 新增 `percentPosition` 属性用于控制数值位置。[#48157](https://github.com/ant-design/ant-design/pull/48157) [@LonelySnowman](https://github.com/LonelySnowman)
  - 🆕 Progress 的 `size` 属性支持配置为对象值。[#48805](https://github.com/ant-design/ant-design/pull/48805) [@crazyair](https://github.com/crazyair)
- 🆕 Avatar.Group 新增 `max` 属性以替代 `maxCount`、`maxStyle`、`maxPopoverPlacement` 和 `maxPopoverTrigger`。[#49131](https://github.com/ant-design/ant-design/pull/49131) [@wanpan11](https://github.com/wanpan11)
- 🆕 Modal 新增 `loading` 属性以展示加载中的状态。[#48848](https://github.com/ant-design/ant-design/pull/48848) [@li-jia-nan](https://github.com/li-jia-nan)
- 🆕 Rate 新增 `keyboard` 属性以支持禁用键盘事件。[#49132](https://github.com/ant-design/ant-design/pull/49132) [@Wxh16144](https://github.com/Wxh16144)
- 🆕 Spin 支持 `percent`属性以进度形态展示。[#48657](https://github.com/ant-design/ant-design/pull/48657)
- 🐞 Watermark 添加 `overflow: hidden` 样式以防止通过设置 `height: 0` 样式达到隐藏水印的效果。[#49130](https://github.com/ant-design/ant-design/pull/49130)
- 🐞 Anchor 修复设置 `replace` 属性时滚动动画丢失的问题。[#49136](https://github.com/ant-design/ant-design/pull/49136) [@mySkey](https://github.com/mySkey)
- 🐞 Tour 修复 `onClose` 的 `current` 参数错误的问题。[#49124](https://github.com/ant-design/ant-design/pull/49124)
- 💄 List.Item 增加 `styles` 及 `classNames` 属性。[#49154](https://github.com/ant-design/ant-design/pull/49154) [@wanpan11](https://github.com/wanpan11)
- 🇯🇵 DatePicker 补充 ja_JP 本地化文案。[#49155](https://github.com/ant-design/ant-design/pull/49155) [@huyikai](https://github.com/huyikai)
- 🛠 精简数处判断逻辑及类型定义。[#49146](https://github.com/ant-design/ant-design/pull/49146) [#49156](https://github.com/ant-design/ant-design/pull/49156) [#49169](https://github.com/ant-design/ant-design/pull/49169) [#49162](https://github.com/ant-design/ant-design/pull/49162) [@coding-ice](https://github.com/coding-ice)

## 5.17.4

`2024-05-27`

- 🐞 修复 Modal 的 `confirm` 在 `onOk` 或 `onCancel` 中返回 `true` 时，窗体不会正确关闭的问题。[#49054](https://github.com/ant-design/ant-design/pull/49054) [@wanpan11](https://github.com/wanpan11)
- 🐞 修复 Carousel 会被提示存在非标准 dom 属性的问题。[#49031](https://github.com/ant-design/ant-design/pull/49031)
- 🐞 修复 Form 的 `scrollToFirstError` 对 InputNumber 无效的问题。[#48989](https://github.com/ant-design/ant-design/pull/48989) [@Wxh16144](https://github.com/Wxh16144)
- TypeScript
  - 🤖 修复 Modal `styles.wrapper` TS 定义丢失的问题。[#49055](https://github.com/ant-design/ant-design/pull/49055)
  - 🤖 优化 Spin 的 TypeScript 定义并提供更详细的描述信息。[#49036](https://github.com/ant-design/ant-design/pull/49036) [@arvinxx](https://github.com/arvinxx)
  - 🤖 优化 Checkbox.Group 的 TypeScript 类型约束。[#49073](https://github.com/ant-design/ant-design/pull/49073)

## 5.17.3

`2024-05-19`

- 🐞 杂项：修复部分组件在 React 18.3.0 下警告 `findDOMNode` 的问题。[#48958](https://github.com/ant-design/ant-design/pull/48958)
- 🐞 修复 Button 字体大小 token 无效的问题。[#48893](https://github.com/ant-design/ant-design/pull/48893) [@wanpan11](https://github.com/wanpan11)
- 💄 修复 Pagination 组件跳转选择元素样式问题。[#48931](https://github.com/ant-design/ant-design/pull/48931) [@wanpan11](https://github.com/wanpan11)

## 5.17.2

`2024-05-14`

- 🐞 MISC: 修复 `lib` 产物错误引入 `es` 依赖导致构建错误的问题。[#48914](https://github.com/ant-design/ant-design/pull/48914)

## 5.17.1

`2024-05-14`

- 🐞 优化 Form 组件底层逻辑，修复了 antd 在 Next.js 中构建时间太长的问题。[react-component/async-validator#9](https://github.com/react-component/async-validator/pull/9)
- 🐞 修复 Tooltip 内容只有一个字符时视觉不居中的问题。[#48890](https://github.com/ant-design/ant-design/pull/48890) [@kiner-tang](https://github.com/kiner-tang)
- Button
  - 🐞 修复 Button `type="text"` 和`type="danger"` 同时使用时 hover 和 active 样式没有区分的问题。[#48876](https://github.com/ant-design/ant-design/pull/48876) [@LonelySnowman](https://github.com/LonelySnowman)
- 修复部分组件抛出 findDOMNode 警告的问题
  - 🐞 修复 Button 抛出 `findDOMNode` 警告的问题。[#48830](https://github.com/ant-design/ant-design/pull/48830) [@wanpan11](https://github.com/wanpan11)
  - 🐞 修复 Badge 抛出 `findDOMNode` 警告的问题。[#48878](https://github.com/ant-design/ant-design/pull/48878) [@wanpan11](https://github.com/wanpan11)
  - 🐞 修复 Alert 抛出 `findDOMNode` 警告的问题。[#48868](https://github.com/ant-design/ant-design/pull/48868) [@wanpan11](https://github.com/wanpan11)
  - 🐞 修复 FloatButton.BackTop 抛出 `findDOMNode` 警告的问题。[#48865](https://github.com/ant-design/ant-design/pull/48865) [@wanpan11](https://github.com/wanpan11)
- 💄 给 Drawer 的内部组件 Spin 添加 className，防止内部 Spin 样式覆盖用户传入的 Spin 样式。[#48857](https://github.com/ant-design/ant-design/pull/48857) [@li-jia-nan](https://github.com/li-jia-nan)
- 💄 修复 Card `size="small"` 时下边框丢失的问题。[#48787](https://github.com/ant-design/ant-design/pull/48787) [@wanpan11](https://github.com/wanpan11)
- 🐞 AutoComplete 修复 `tagRender` 对 maxTag 无效的问题和点击边缘会触发弹层意外关闭的问题。[#48798](https://github.com/ant-design/ant-design/pull/48798)
- RTL
  - 💄 修复 Button 在 RTL 下的图标顺序和边距缺失问题。[#48821](https://github.com/ant-design/ant-design/pull/48821)
- TypeScript
  - 🤖 修复 Cascader 多余泛型问题。[#48879](https://github.com/ant-design/ant-design/pull/48879) [@crazyair](https://github.com/crazyair)

## 5.17.0

`2024-05-03`

- 🔥🔥🔥 `@ant-design/cssinjs` StyleProvider 支持配置 `layer` 统一降级 默认 CSS 优先级。经过降权后，antd 的样式将始终低于默认的 CSS 选择器优先级，以便于用户进行样式覆盖（请务必注意检查 [@layer](https://developer.mozilla.org/en-US/docs/Web/CSS/@layer#browser_compatibility) 浏览器兼容性），详情可见[文档](https://ant.design/docs/react/compatible-style-cn#layer-%E9%99%8D%E6%9D%83)。[#48229](https://github.com/ant-design/ant-design/pull/48229)
- 🆕 Carousel 现在支持 `arrows` 来开启箭头切换功能。[#48542](https://github.com/ant-design/ant-design/pull/48542)
- Form
  - 🛠 Form 依赖的 `async-validator` 替换为 `@rc-component/async-validator`，并修复 `transform` 没有自动检测返回值类型的问题。[#48486](https://github.com/ant-design/ant-design/pull/48486) [@crazyair](https://github.com/crazyair)
  - 🆕 Form 新增 `inlineMargin` token。[#48362](https://github.com/ant-design/ant-design/pull/48362) [@CooperHash](https://github.com/CooperHash)
  - 🐞 修复 Form 下出现错误时无法滚动到 Upload 组件的问题。[#48211](https://github.com/ant-design/ant-design/pull/48211) [@Wxh16144](https://github.com/Wxh16144)
- Typography
  - 🆕 Typography.Paragraph 的编辑、复制按钮允许修改 `tableIndex`。[#48567](https://github.com/ant-design/ant-design/pull/48567) [@nova1751](https://github.com/nova1751)
  - 🐞 修复 Typography 开启 `editable` 时会意外触发 focus 行为的问题。[#48741](https://github.com/ant-design/ant-design/pull/48741)
- DatePicker
  - 🆕 DatePicker.RangePicker `showTime.disabledTime` 支持 `info.from` 以供时间维度的自定义限制能力。[#48625](https://github.com/ant-design/ant-design/pull/48625)
  - 🐞 修复 DatePicker 关闭时回填 hover 值闪烁的问题。[#48734](https://github.com/ant-design/ant-design/pull/48734)
- Drawer
  - 🆕 Drawer 新增 `loading` 属性。[#48563](https://github.com/ant-design/ant-design/pull/48563) [@Enigama](https://github.com/Enigama)
  - 🐞 修复 Drawer 不支持 `classNames.wrapper` 的问题。[#48721](https://github.com/ant-design/ant-design/pull/48721) [@replygirl](https://github.com/replygirl)
- Slider
  - 🐞 修复 Slider `tooltip={{ open: false }}` 时提示框未正确隐藏的问题。[#48708](https://github.com/ant-design/ant-design/pull/48708)
  - 🐞 修复 Slider `tooltip={{ formatter: null }}` 无法隐藏 Tooltip 的问题。[#48673](https://github.com/ant-design/ant-design/pull/48673) [@wanpan11](https://github.com/wanpan11)
- Button
  - 🆕 Button 新增 `iconPosition` 以指定预置图标位置。[#47791](https://github.com/ant-design/ant-design/pull/47791) [@GeorgeHcc](https://github.com/GeorgeHcc)
  - 🆕 Button 组件支持 `autoInsertSpace` 属性，用来移除两个汉字之间的空格。[#48348](https://github.com/ant-design/ant-design/pull/48348) [@li-jia-nan](https://github.com/li-jia-nan)
- 🆕 ConfigProvider 组件支持 `button.autoInsertSpace` 属性并废弃 `autoInsertSpaceInButton` 属性。[#48348](https://github.com/ant-design/ant-design/pull/48348) [@li-jia-nan](https://github.com/li-jia-nan)
- 🆕 TreeSelect 支持 `onPopScroll` 属性。[#48636](https://github.com/ant-design/ant-design/pull/48636) [@wanpan11](https://github.com/wanpan11)
- 🆕 Tabs 新增 `more={{ ... }}` 属性以支持自定义下拉菜单的属性。[#48321](https://github.com/ant-design/ant-design/pull/48321) [@CooperHash](https://github.com/CooperHash)
- 🆕 Flex 组件 `wrap` 参数支持 boolean 类型。[#48391](https://github.com/ant-design/ant-design/pull/48391) [@li-jia-nan](https://github.com/li-jia-nan)
- 🆕 Input.OTP 组件支持 `mask` 属性，以自定义遮罩字符。[#48257](https://github.com/ant-design/ant-design/pull/48257) [@li-jia-nan](https://github.com/li-jia-nan)
- 🆕 Alert 组件支持 `id` 和 `ref` 属性。[#48336](https://github.com/ant-design/ant-design/pull/48336) [@li-jia-nan](https://github.com/li-jia-nan)
- 🆕 Upload 组件 `ref.nativeElenent` 以支持访问原生元素。[#48210](https://github.com/ant-design/ant-design/pull/48210) [@Wxh16144](https://github.com/Wxh16144)
- 🐞 修复 List `grid` 属性值更新后组件未重新渲染的问题。[#48683](https://github.com/ant-design/ant-design/pull/48683) [@coderz-w](https://github.com/coderz-w)
- 🐞 修复 Progress tooltip 提示距离太近的问题。[#48686](https://github.com/ant-design/ant-design/pull/48686)
- 🐞 修复 QRCode 无法自适应容器大小的问题并移除 `bordered={false}` 时的默认边距。[#48194](https://github.com/ant-design/ant-design/pull/48194) [@thinkasany](https://github.com/thinkasany)
- 🐞 修复 Table 组件设置 `fixed={false}` 时的某些特殊情况下未正常显示投影的问题。[#1113](https://github.com/react-component/table/pull/1113) [@linxianxi](https://github.com/linxianxi)
- 📖 添加 Table 表格列拖拽排序演示。[#48434](https://github.com/ant-design/ant-design/pull/48434) [@GeorgeHcc](https://github.com/GeorgeHcc)
- TypeScript
  - 🤖 优化 Cascader 属性定义。[#48420](https://github.com/ant-design/ant-design/pull/48420) [@crazyair](https://github.com/crazyair)
- 本地化
  - 🇯🇵 补充日语本地化文案。[#48704](https://github.com/ant-design/ant-design/pull/48704) [@edikurniawan-dev](https://github.com/edikurniawan-dev)
  - 🇮🇩 补充印尼语本地化文案。[#48703](https://github.com/ant-design/ant-design/pull/48703) [@edikurniawan-dev](https://github.com/edikurniawan-dev)

## 5.16.5

`2024-04-28`

- 🐞 修复 Transfer 组件在 targetKeys 中含有 "unknown-key" 时，尝试从右侧列选中单项的问题。[#48664](https://github.com/ant-design/ant-design/pull/48664) [@andreyk1512](https://github.com/andreyk1512)
- 🐞 修复 Steps 自定义图标未垂直居中问题。[#48650](https://github.com/ant-design/ant-design/pull/48650) [@ZinkWu](https://github.com/ZinkWu)
- 🐞 修复 Badge 数字居中偏右的问题。[#48605](https://github.com/ant-design/ant-design/pull/48605) [@akinocccc](https://github.com/akinocccc)
- 🐞 修复 Popover 和 Popconfirm 在屏幕右侧边缘闪烁的问题。[#48591](https://github.com/ant-design/ant-design/pull/48591)
- 🐞 修复 ColorPicker 在初始未受控时清除图标不会改变的问题。[#48584](https://github.com/ant-design/ant-design/pull/48584) [@MadCcc](https://github.com/MadCcc)
- 💄 修复 Collapse 组件底部边框样式问题。[#48561](https://github.com/ant-design/ant-design/pull/48561) [@hamzaseif13](https://github.com/hamzaseif13)
- 💄 调整 Input 组件在禁用的时候在表单校验时的边框颜色。[#48616](https://github.com/ant-design/ant-design/pull/48616) [@nova1751](https://github.com/nova1751)
- TypeScript
  - 🤖 补充 Upload 组件缺失的泛型。[#48614](https://github.com/ant-design/ant-design/pull/48614) [@li-jia-nan](https://github.com/li-jia-nan)
  - 🤖 修复 Upload `customRequest` 参数丢失泛型的问题。[#48612](https://github.com/ant-design/ant-design/pull/48612) [@jas0ncn](https://github.com/jas0ncn)
- 国际化
  - 🇪🇸 为 DatePicker 补充 西班牙语 多语言。[#48601](https://github.com/ant-design/ant-design/pull/48601) [@JMMOLLER](https://github.com/JMMOLLER)
  - 🇩🇪 为 DatePicker 补充 德语 多语言。[#48586](https://github.com/ant-design/ant-design/pull/48586) [@sebhs](https://github.com/sebhs)

## 5.16.4

`2024-04-22`

- 🐞 修复 Select 配置 `paddingXXS=0` 时，多选下超出设定的 `controlHeight` token 的问题。[#48574](https://github.com/ant-design/ant-design/pull/48574)
- 🐞 修复 Upload 在开启 CSS Variable 时样式丢失的问题。[#48569](https://github.com/ant-design/ant-design/pull/48569) [@nova1751](https://github.com/nova1751)
- 🐞 修复 Slider 在范围选择下，拖动滑块越过另一个滑块时提示框闪动的问题。[#48536](https://github.com/ant-design/ant-design/pull/48536)
- Input
  - 🐞 修复 Input.Search 设置大尺寸时，按钮的文字不是大尺寸的问题。[#48527](https://github.com/ant-design/ant-design/pull/48527)
  - 🐞 修复 Input.TextArea 的文字显示异常问题。[#48489](https://github.com/ant-design/ant-design/pull/48489) [@korkt-kim](https://github.com/korkt-kim)
- 🐞 修复 Upload 组件图片卡顿的动画效果。[#48522](https://github.com/ant-design/ant-design/pull/48522) [@nova1751](https://github.com/nova1751)
- 🐞 修复 Switch 组件使用 `checkedChildren` `unCheckedChildren` 未添加默认高度的问题。[#48513](https://github.com/ant-design/ant-design/pull/48513) [@wanpan11](https://github.com/wanpan11)
- 🐞 修复 Form.Item 使用 noStyle 无值时的警告提醒。[#48508](https://github.com/ant-design/ant-design/pull/48508)
- 🐞 修复 Popover `defaultOpen` 设置失效的问题。[#48481](https://github.com/ant-design/ant-design/pull/48481) [@linhf123](https://github.com/linhf123)
- 🐞 修复 DatePicker 配置 `multiple` 时 `placeholder` 不展示的问题。[#48387](https://github.com/ant-design/ant-design/pull/48387) [@nova1751](https://github.com/nova1751)
- 🐞 修复 ColorPicker 在严格模式下受控时清除颜色无法改变的问题。[#48450](https://github.com/ant-design/ant-design/pull/48450)
- 💄 修复 Collapse 使用第三方图标时的 arrow 样式问题。[#48417](https://github.com/ant-design/ant-design/pull/48417) [@guoyunhe](https://github.com/guoyunhe)
- 💄 优化内嵌 Menu 的 Sider 在展开时的动画效果。[#48127](https://github.com/ant-design/ant-design/pull/48127) [@metouch](https://github.com/metouch)
- 💄 优化 Steps process 样式。[#48464](https://github.com/ant-design/ant-design/pull/48464)
- 国际化
  - 🇨🇳 补充 zh_CN zh_HK zh_TW Table 文案。[#48543](https://github.com/ant-design/ant-design/pull/48543) [@thinkasany](https://github.com/thinkasany)
  - 🇮🇩 补充 id_ID DatePicker Form Table 等文案。[#48537](https://github.com/ant-design/ant-design/pull/48537) [#48287](https://github.com/ant-design/ant-design/pull/48287) [@edikurniawan-dev](https://github.com/edikurniawan-dev)
  - 🌐 优化 Transfer 本地化，现在反选会使用 `deselectAll` locale 配置。[#48553](https://github.com/ant-design/ant-design/pull/48553) [@coderz-w](https://github.com/coderz-w)

## 5.16.3

`2024-04-21`

- 🛠 脚本错误发布空包，请勿使用。

## 5.16.2

`2024-04-15`

- 🐞 修复 Input.OTP 组件受控设置 `value` 为 `''` 时不生效的问题。[#48399](https://github.com/ant-design/ant-design/pull/48399)
- 🐞 修复 DatePicker 对周选择器配置 `multiple` 多选时，弹出面板不会正确高亮选中项的问题。[#48355](https://github.com/ant-design/ant-design/pull/48355)
- 🐞 修复 Upload 配置 `listType` 为 `picture-card` 或 `picture-circle` 时，上方有额外空隙的问题。[#48370](https://github.com/ant-design/ant-design/pull/48370)
- Typography
  - 🐞 修复 Typography 动态配置 `copyable` 或 `editable` 时不会显示操作按钮的问题。[#48350](https://github.com/ant-design/ant-design/pull/48350)
  - 🐞 修复 Typography 动态调整 `copyable.text` 不生效的问题。[#48347](https://github.com/ant-design/ant-design/pull/48347)
  - 🐞 修复 Typography 的 `ellipsis` 同时配置 `expandable="collapsible"` 和 `row={1}` 时，不会正确省略的问题。[#48340](https://github.com/ant-design/ant-design/pull/48340)
- 💄 修复 Steps 的进度样式在紧凑模式下不正确的问题。[#48251](https://github.com/ant-design/ant-design/pull/48251)
- 💄 重构 Tabs 和波纹样式相关组件的 CSS 过渡时间值，替换为 `motionDurationSlow` Component Token。[#48311](https://github.com/ant-design/ant-design/pull/48311) [#48312](https://github.com/ant-design/ant-design/pull/48312) [@li-jia-nan](https://github.com/li-jia-nan)
- 🇯🇵 补充 Transfer 的 ja_JP 本地化文案。[#48411](https://github.com/ant-design/ant-design/pull/48411) [@Inshiku-Han](https://github.com/Inshiku-Han)
- 🇯🇵🇰🇷 修复 Picker 的 ja_JP 和 ko_KR 本地化文案。[#48382](https://github.com/ant-design/ant-design/pull/48382) [@li-jia-nan](https://github.com/li-jia-nan)
- 📦 使用常量替代枚举减小包体积。[#48406](https://github.com/ant-design/ant-design/pull/48406) [@kiner-tang](https://github.com/kiner-tang)

## 5.16.1

`2024-04-05`

- 🛠 调整 Typography 的 `ellipsis` 使其在 SSR 阶段使用 CSS 省略以优化用户体验。[#48205](https://github.com/ant-design/ant-design/pull/48205)
- 🐞 修复 FloatButton 中同时配置 `tooltip` 和 `badge` 时， `badge` 的自定义背景色会失效的问题。[#48198](https://github.com/ant-design/ant-design/pull/48198) [@LonelySnowman](https://github.com/LonelySnowman)

## 5.16.0

`2024-03-31`

- 🔥 新增 Input.OTP 组件。[#48076](https://github.com/ant-design/ant-design/pull/48076)
- 🆕 可关闭组件支持在 `closable` 中配置 `aria-*` 属性 [@kiner-tang](https://github.com/kiner-tang)
  - 🆕 [Tag](https://github.com/ant-design/ant-design/pull/47678)
  - 🆕 [Notification](https://github.com/ant-design/ant-design/pull/47710)
- 🆕 Table 增加 `rowHoverable` 开启或关闭 hover 效果。[#48112](https://github.com/ant-design/ant-design/pull/48112) [@madocto](https://github.com/madocto)
- 🆕 Typography 组件支持异步复制。[#48123](https://github.com/ant-design/ant-design/pull/48123) [@crazyair](https://github.com/crazyair)
- 🆕 Progress 组件 `circle` 模式下支持 `steps`。[#47940](https://github.com/ant-design/ant-design/pull/47940) [@yykoypj](https://github.com/yykoypj)
- 🆕 Table 支持 `onScroll` 事件用于监听表单内容滚动。[#47986](https://github.com/ant-design/ant-design/pull/47986)
- 🆕 Typography 省略支持展开和收起。[#47264](https://github.com/ant-design/ant-design/pull/47264) [@crazyair](https://github.com/crazyair)
- 🆕 ConfigProvider 支持配置 FloatButton.Group 的 `closeIcon` 属性。[#47953](https://github.com/ant-design/ant-design/pull/47953) [@li-jia-nan](https://github.com/li-jia-nan)
- 🆕 Table 支持配置排序的 `showSorterTooltip.target` 属性。[#47409](https://github.com/ant-design/ant-design/pull/47409) [@Ke1sy](https://github.com/Ke1sy)
- 🆕 Cascader 支持 `optionRender`。[#47727](https://github.com/ant-design/ant-design/pull/47727) [@crazyair](https://github.com/crazyair)
- ⌨️ Popover 当 `trigger` 是 `focus` 或 `click` 时能被 ESC 按键所关闭。[#47928](https://github.com/ant-design/ant-design/pull/47928) [@CooperHash](https://github.com/CooperHash)
- 🐞 修复 Button 图标位置居中问题。[#48178](https://github.com/ant-design/ant-design/pull/48178) [@momesana](https://github.com/momesana)
- 🐞 修复 Modal.confirm 无图标时内容不居中的问题。[#48173](https://github.com/ant-design/ant-design/pull/48173)
- Form [#48163](https://github.com/ant-design/ant-design/pull/48163) [@madocto](https://github.com/madocto)
  - 🐞 修复 Form 当 FormItem 的 `name` 不存在时，`getValueProps` 不应该执行。
  - 🐞 修复 Form 的 `setFieldsValue` 和 `setFields` 的行为应该相同。
- 🐞 修复 Table 表格列在搜索情况下，国际化失效的问题。[#48126](https://github.com/ant-design/ant-design/pull/48126) [@LingJinT](https://github.com/LingJinT)
- 🐞 修复 Upload 当文件数量超出限制时，删除不起作用，无法触发 `onChange` 的问题。[#47747](https://github.com/ant-design/ant-design/pull/47747) [@Zhou-Bill](https://github.com/Zhou-Bill)
- 🐞 Carousel 组件同步上游 react-slick 改动，修复一系列<a href="https://github.com/ant-design/react-slick/pull/110" data-hovercard-type="pull_request" data-hovercard-url="/ant-design/react-slick/pull/110/hovercard">问题</a>，并更新到最新 TS 定义。[#48093](https://github.com/ant-design/ant-design/pull/48093)
- 🐞 修复 ColorPicker 展示的清除颜色在受控 `value` 变化后不会改变的问题。[#47816](https://github.com/ant-design/ant-design/pull/47816) [@MadCcc](https://github.com/MadCcc)
- 🐞 Badge 与 Tag 组件保持一致，processing 状态使用 `colorInfo` token 。[#47695](https://github.com/ant-design/ant-design/pull/47695) [@pfdgithub](https://github.com/pfdgithub)
- 🇮🇸 添加冰岛语缺失的 From 翻译。[#48104](https://github.com/ant-design/ant-design/pull/48104) [@LonelySnowman](https://github.com/LonelySnowman)
- 🇺🇿 添加乌兹别克语(拉丁字母) 国际化。[#47899](https://github.com/ant-design/ant-design/pull/47899)
- TypeScript
  - 🤖 改进 Transfer 的`key` 类型，将 `key: string` 改为`key: React.Key`。[#47879](https://github.com/ant-design/ant-design/pull/47879) [@madocto](https://github.com/madocto)
  - 🤖 Table 支持泛型对 dataIndex 属性校验。[#48190](https://github.com/ant-design/ant-design/pull/48190) [@crazyair](https://github.com/crazyair)

## 5.15.4

`2024-03-25`

- 💄 修复 QRCode 组件自定义样式会被内部样式覆盖的问题。[#48053](https://github.com/ant-design/ant-design/pull/48053) [@li-jia-nan](https://github.com/li-jia-nan)
- 💄 修复 Radio 禁用状态 hover 样式。[#47972](https://github.com/ant-design/ant-design/pull/47972) [@madocto](https://github.com/madocto)
- 🐞 修复 Watermark 在特定屏幕缩放下会不断重复渲染的问题。[#47895](https://github.com/ant-design/ant-design/pull/47895)
- TypeScript
  - 🤖 Affix 导出 AffixRef 类型。[#47982](https://github.com/ant-design/ant-design/pull/47982) [@li-jia-nan](https://github.com/li-jia-nan)
  - 🤖 MISC: 修复 GetRef 工具类型不能正确获得某些组件 ref 类型的问题。[#47983](https://github.com/ant-design/ant-design/pull/47983)

## 5.15.3

`2024-03-17`

- 💄 统一 Modal、Drawer、notification 和 Tour 关闭按钮的样式，并增大 Modal 和 Drawer 关闭按钮的交互区域使其更容易点击。[#47909](https://github.com/ant-design/ant-design/pull/47909)
- 🐞 修复 Badge 和文本元素在 Space 下排版不对齐的问题。[#47908](https://github.com/ant-design/ant-design/pull/47908)
- 💄 修复 Upload 列表行动点换行的问题。[#47898](https://github.com/ant-design/ant-design/pull/47898)
- 🐞 修复 Typography 配置的 `ellipsis.symbol` 超出单行高度时，省略行数不正确的问题。[#47889](https://github.com/ant-design/ant-design/pull/47889)
- 🐞 修复 DatePicker 配置自定义 `controlHeight` 时展示高度不正确的问题。[#47874](https://github.com/ant-design/ant-design/pull/47874)
- 🐞 修复 DatePicker 设置 `multiple` 多选换行时行与行之间没有间隙的问题。[#47821](https://github.com/ant-design/ant-design/pull/47821)
- 💄 调深 Empty 文本色彩使其更清晰可读一些。[#47268](https://github.com/ant-design/ant-design/pull/47268) [@evgmol](https://github.com/evgmol)

## 5.15.2

`2024-03-11`

- 🛠 调整 Tour、Dropdown、Menu、Tabs、Mentions、Picker、Select、TreeSelect、Cascader、Tooltip、Popover 弹层点击外部的关闭时机，从 `click` 调整至 `mouseDown` 以统一解决一些与弹窗相关交互中的事件时序问题。[#47775](https://github.com/ant-design/ant-design/pull/47775)
- 🐞 修复 Descriptions 内容区域额外的边距问题。[#47737](https://github.com/ant-design/ant-design/pull/47737)
- 🐞 修复 Anchor 界限值为 0 时 active 状态错误的问题。[#47795](https://github.com/ant-design/ant-design/pull/47795)[@winchesHe](https://github.com/winchesHe)
- 💄 给 ColorPicker 清除按钮补上鼠标 hover 反馈样式。[#47761](https://github.com/ant-design/ant-design/pull/47761)
- 🇷🇺 更新 DatePicker 的俄语文案。[#47768](https://github.com/ant-design/ant-design/pull/47768) [@AlexeyTeterin](https://github.com/AlexeyTeterin)

## 5.15.1

`2024-03-06`

- 🐞 回滚移除 Tag 默认间距的代码。[#47736](https://github.com/ant-design/ant-design/pull/47736)
- 🇷🇺 更新 DatePicker 的俄语文案。[#47705](https://github.com/ant-design/ant-design/pull/47705)

## 5.15.0

`2024-03-02`

- ConfigProvider
  - 🆕 ConfigProvider 支持 Input.TextArea 组件 `allowClear`、`autoComplete`、`className`、`style`、`classNames`、`styles` 属性。[#47589](https://github.com/ant-design/ant-design/pull/47589)
  - 🆕 ConfigProvider 支持 Input 组件 `allowClear` 属性。[#47602](https://github.com/ant-design/ant-design/pull/47602)
  - 🆕 ConfigProvider 支持 Menu 组件 `expandIcon` 属性。[#47561](https://github.com/ant-design/ant-design/pull/47561)
  - 🆕 ConfigProvider 支持 Collapse 组件 `expandIcon` 属性。[#47473](https://github.com/ant-design/ant-design/pull/47473)
  - 🆕 ConfigProvider 支持 Tabs `removeIcon` 属性, 在设置 `type="editable-card"` 时有效。[#47334](https://github.com/ant-design/ant-design/pull/47334)
  - 🆕 CSS 变量的前缀默认跟随 ConfigProvider 的 `prefixCls` 属性。[#47481](https://github.com/ant-design/ant-design/pull/47481)
  - 🤖 ConfigProvider 中 CardProps `styles` 设为可选。[#47601](https://github.com/ant-design/ant-design/pull/47601) [@Yawenina](https://github.com/Yawenina)
- 🆕 Select、Checkbox、Radio、DatePicker、TreeSelect、Cascader 支持 `focus` 功能支持传递 `options`。[#47664](https://github.com/ant-design/ant-design/pull/47664)
- 🆕 Select 新增 `labelRender` 属性以自定义当前选中的 label 展示。[#47664](https://github.com/ant-design/ant-design/pull/47664)
- 🆕 Modal 支持在 `closable` 中配置 `aria-*`。[#47650](https://github.com/ant-design/ant-design/pull/47650)
- 🆕 Alert 支持在 `closable` 中配置 `aria-*`。[#47474](https://github.com/ant-design/ant-design/pull/47474)
- 🆕 Tabs 组件支持 `removeIcon` 属性，在设置 `type="editable-card"` 时有效。[#47334](https://github.com/ant-design/ant-design/pull/47334)
- Drawer
  - 🆕 Drawer 支持在 `closable` 中配置 `aria-*`。[#47543](https://github.com/ant-design/ant-design/pull/47543)
  - 🆕 Drawer 支持传递 `aria-*` 属性给 panel 节点。[#47387](https://github.com/ant-design/ant-design/pull/47387)
- Table
  - 🆕 Table 新增 `filterOnClose` 用于指定是否在筛选菜单关闭时触发筛选。[#47451](https://github.com/ant-design/ant-design/pull/47451) [@xsjcTony](https://github.com/xsjcTony)
  - 🆕 Table 新增 `components.header.table` 以自定义滚动列时的标题组件。[#47382](https://github.com/ant-design/ant-design/pull/47382)
  - 🐞 修复 Table `sticky` 下，初次渲染不会显示滚动条的问题。[#47382](https://github.com/ant-design/ant-design/pull/47382)
  - 🐞 修复 Table `column.title` 为空时列头没有使用 `th` 元素的问题。[#47382](https://github.com/ant-design/ant-design/pull/47382)
  - 🐞 修复 Table 使用虚拟列表时 `prefixCls` 无效的问题。[#47639](https://github.com/ant-design/ant-design/pull/47639)
  - 💄 修复 Table 固定列时阴影展示异常的问题。[#47518](https://github.com/ant-design/ant-design/pull/47518)
- 🐞 修复 Tree 使用 DirectoryTree 时，按住 shift 连续多选报错的问题。[#47567](https://github.com/ant-design/ant-design/pull/47567) [@wkmyws](https://github.com/wkmyws)
- 🐞 修复 Form 存在 Form.List 时，`isFieldsTouched(true)` 始终会返回 `false` 的问题。[#47629](https://github.com/ant-design/ant-design/pull/47629) [@lemonied](https://github.com/lemonied)
- 🐞 修复 Button 不兼容 v4 `type=''` 的问题。[#47612](https://github.com/ant-design/ant-design/pull/47612)
- 🛠 重构 Typography 省略测量逻辑以支持动态行高的场景。[#47597](https://github.com/ant-design/ant-design/pull/47597)
- 💄 移除 Tag 组件多余的 margin 样式。[#47504](https://github.com/ant-design/ant-design/pull/47504)
- 🤖 杂项：修复不能在 pnpm 配置 `hoist: false` 下编译的问题。[#47587](https://github.com/ant-design/ant-design/pull/47587)

## 5.14.2

`2024-02-23`

- 🐞 修复 DatePicker.RangePicker 的时间列有时不会滚动到正确位置的问题。[#47542](https://github.com/ant-design/ant-design/pull/47542)
- 🐞 修复 Modal 在打开期间会触发其他鼠标事件的问题。[#47508](https://github.com/ant-design/ant-design/pull/47508) [@MadCcc](https://github.com/MadCcc)
- 🐞 修复 Avatar.Group 的 tooltip 存在多余 dom 残留的问题。[#47478](https://github.com/ant-design/ant-design/pull/47478)
- 💄 修复 Progress 组件多余的 `margin` 样式。[#47493](https://github.com/ant-design/ant-design/pull/47493) [@li-jia-nan](https://github.com/li-jia-nan)
- 💄 修复 Table 滚动条在暗黑模式下的颜色。[#47487](https://github.com/ant-design/ant-design/pull/47487) [@wkmyws](https://github.com/wkmyws)
- 💄 修复 Layout 内容字体在暗黑模式下的颜色。[#47441](https://github.com/ant-design/ant-design/pull/47441) [@nova1751](https://github.com/nova1751)
- 💄 修复 Menu 组件在水平暗黑模式下自定义 `darkItemSelectedColor` 和 `darkItemSelectedBg` token 不生效的问题。[#47463](https://github.com/ant-design/ant-design/pull/47463) [@gandavarapurajasekhar](https://github.com/gandavarapurajasekhar)

## 5.14.1

`2024-02-13`

- 🐞 修复 Steps `type="inline"` 时鼠标无法 hover 到正确的步骤上的问题。[#47406](https://github.com/ant-design/ant-design/pull/47406)
- 🐞 修复 DatePicker 与 TimePicker 弹出面板箭头没有考虑面板本身圆角的问题。[#47389](https://github.com/ant-design/ant-design/pull/47389)
- 🐞 修复 Dropdown `menu.items` 为空时依然显示的问题。[#47375](https://github.com/ant-design/ant-design/pull/47375)
- 🐞 修复 Tag 无边框模式没有正确使用 `defaultBg` 组件 token 的问题。[#47372](https://github.com/ant-design/ant-design/pull/47372) [@MadCcc](https://github.com/MadCcc)
- 🐞 杂项：修复主题 `inherit` 配置会隔断 `hashed` 和 `cssVar` 配置的问题。[#47360](https://github.com/ant-design/ant-design/pull/47360) [@MadCcc](https://github.com/MadCcc)
- 🐞 修复 Calendar 在切换年月时，面板没有跟着切换的问题。[#47361](https://github.com/ant-design/ant-design/pull/47361)
- 💄 修复 Table 在虚拟模式下子表格的样式问题。[#47333](https://github.com/ant-design/ant-design/pull/47333) [@Enigama](https://github.com/Enigama)

## 5.14.0

`2024-02-04`

- 🔥 重构了 DatePicker 组件，详细改动如下。[#46982](https://github.com/ant-design/ant-design/pull/46982)
  - 🆕 DatePicker 新增 `multiple` 支持多选能力。
  - 🆕 DatePicker 支持 `showWeek` 属性。
  - 🆕 DatePicker.RangePicker 下的 `id` 属性支持分别设置 `start` 和 `end` 输入框的 `id`。
  - 🆕 DatePicker.RangePicker 的 `onFocus` 和 `onBlur` 事件会额外提供一个 `info.range` 告知当前的焦点来自于哪个输入框。
  - 🆕 DatePicker.RangePicker 支持 `order` 属性。
  - 🆕 DatePicker 新增配套 `pickerValue`、`defaultPickerValue` 属性用于受控管理展开面板所在日期。
  - 🆕 DatePicker 新增 `preserveInvalidOnBlur` 属性用于无障碍时失去焦点需要保留输入内容的场景。
  - 🆕 DatePicker `format` 支持 `align` 属性，允许通过掩码模式输入内容。
  - 🆕 DatePicker 支持 `required` 属性。
  - 🆕 DatePicker 时间面板支持 `scrollOnChange` 设置滚动时间时自动选择对应的时间。
  - 🆕 DatePicker 添加 `needConfirm` 属性，允许设置需要确认、或者不确认的提交模式。
  - 🆕 DatePicker 添加 `components` 属性，允许自定义部分面板。
  - 🆕 DatePicker 面板中所有的日期相关信息都会允许通过 `locale` 进行配置。
  - 🆕 DatePicker `format` 支持 `LT`、`LTS` 日期格式。
  - 🆕 DatePicker 新增 `minDate` 和 `maxDate` 用于设置面板切换范围。
  - 🐞 DatePicker 的`defaultPickerValue` 现在会在每次面板展开时都进行重置。
  - 🐞 DatePicker 修复输入框功能按键会唤起弹出框的问题，现在只有在交互按键、以及输入内容变化时唤起。
  - 🐞 DatePicker 通过输入框输入日期后失去焦点会提交变更，而不是丢失输入内容（即不再强制需要按下回车提交）。
  - 🐞 DatePicker 修复 `use12Hours` 下，`disabledTime` 获取的 `hour` 也会被裁剪成 0~12 的问题。
  - 🐞 DatePicker 修复某些交互下，禁用日期没有生效依然可以提交的问题。
  - ⚡️ DatePicker 优化 `disabledDate` 检查逻辑，现在会提供 `info.type` 告知当前面板信息。
  - 🛠 DatePicker 的 `allowClear` 触发事件从 `onMouseDown` 切换为 `onClick`。
  - 🛠 移除 DatePicker 的键盘对面板交互，它需要基于无障碍重新设计。
  - 🛠 DatePicker 废弃 `onKeyDown` 的 `preventDefault` 参数，请直接通过 `event.preventDefault` 进行调用。
  - 💄 DatePicker.RangePicker 移除虚线样式，减少视觉干扰。
  - 💄 DatePicker.RangePicker 移除在选择开始或者结束时间时的禁用范围，优化交互体验。
- 🔥 Table 支持堆叠固定列。[#47245](https://github.com/ant-design/ant-design/pull/47245)
- 🆕 Table 支持 `virtual` 下的 `components.body`。[#47098](https://github.com/ant-design/ant-design/pull/47098) [@linxianxi](https://github.com/linxianxi)
- 🆕 Segmented `value` 类型支持泛型。[#47091](https://github.com/ant-design/ant-design/pull/47091) [@madocto](https://github.com/madocto)
- 🆕 InputNumber 组件支持 `changeOnWheel` 属性，以启用鼠标滚轮控制。[#47158](https://github.com/ant-design/ant-design/pull/47158) [@MadCcc](https://github.com/MadCcc)
- 🆕 Button 添加 `defaultHoverBg`、`defaultHoverColor`、`defaultHoverBorderColor`、 `defaultActiveBg`、`defaultActiveColor` 和 `defaultActiveBorderColor` 六个 token。[#47075](https://github.com/ant-design/ant-design/pull/47075) [@madocto](https://github.com/madocto)
- 🆕 Notification `useNotification` 支持 `duration` 配置，该更新同样适用于 App 组件的 `notification` 配置。[#47141](https://github.com/ant-design/ant-design/pull/47141)
- 🆕 Grid 支持为响应式布局配置 `flex` 属性。[#47124](https://github.com/ant-design/ant-design/pull/47124)
- 🐞 改进 Transfer 组件分页器的内边距。[#47231](https://github.com/ant-design/ant-design/pull/47231) [@qmhc](https://github.com/qmhc)
- 🐞 修复 Avatar 组件当高度小于 16px 内容不居中的问题。[#47236](https://github.com/ant-design/ant-design/pull/47236) [@lcgash](https://github.com/lcgash)
- 🐞 修复 Input 组件禁用时鼠标指针不正确的问题。[#47280](https://github.com/ant-design/ant-design/pull/47280) [@MadCcc](https://github.com/MadCcc)
- 🐞 修复 Input 组件 `hoverBorderColor` 和 `activeBorderColor` token 定制无效的问题。[#47243](https://github.com/ant-design/ant-design/pull/47243) [@MadCcc](https://github.com/MadCcc)
- 💄 修复 Menu 组件子菜单 hover 样式在边缘消失的问题。[#47227](https://github.com/ant-design/ant-design/pull/47227) [@MadCcc](https://github.com/MadCcc)
- 💄 修复 Menu 在无 hash 模式下的组件样式问题。[#46609](https://github.com/ant-design/ant-design/pull/46609) [@MadCcc](https://github.com/MadCcc)
- 💄 Card 组件增加 `classNames` 和 `styles` 属性。[#46811](https://github.com/ant-design/ant-design/pull/46811) [@zh-lx](https://github.com/zh-lx)
- ConfigProvider
  - 🆕 ConfigProvide 支持 Transfer 的 `selectionsIcon`。[#47301](https://github.com/ant-design/ant-design/pull/47301) [@li-jia-nan](https://github.com/li-jia-nan)
  - 🆕 ConfigProvide 支持 Tabs 的 `addIcon` 和 `moreIcon`。[#47274](https://github.com/ant-design/ant-design/pull/47274) [@li-jia-nan](https://github.com/li-jia-nan)
  - 🆕 ConfigProvide 支持 Image 的 `closeIcon`。[#47252](https://github.com/ant-design/ant-design/pull/47252) [@li-jia-nan](https://github.com/li-jia-nan)
  - 🆕 ConfigProvide 支持 Tag 的 `closeIcon`。[#47250](https://github.com/ant-design/ant-design/pull/47250) [@li-jia-nan](https://github.com/li-jia-nan)
  - 🆕 ConfigProvide 支持 Notification 的 `closeIcon`。[#47244](https://github.com/ant-design/ant-design/pull/47244) [@li-jia-nan](https://github.com/li-jia-nan)
  - 🆕 ConfigProvide 支持 Modal 的 `closeIcon`。[#47226](https://github.com/ant-design/ant-design/pull/47226) [@li-jia-nan](https://github.com/li-jia-nan)
  - 🆕 ConfigProvide 支持 Table 的 `expandIcon`。[#47225](https://github.com/ant-design/ant-design/pull/47225) [@li-jia-nan](https://github.com/li-jia-nan)
  - 🆕 ConfigProvide 支持 Tour 的 `closeIcon`。[#47200](https://github.com/ant-design/ant-design/pull/47200) [@li-jia-nan](https://github.com/li-jia-nan)
  - 🆕 ConfigProvide 支持 Drawer 的 `icons`。[#46894](https://github.com/ant-design/ant-design/pull/46894) [@li-jia-nan](https://github.com/li-jia-nan)
  - 🆕 ConfigProvide 支持 Alert 的 `closeIcon`。[#47235](https://github.com/ant-design/ant-design/pull/47235) [@li-jia-nan](https://github.com/li-jia-nan)

## 5.13.3

`2024-01-28`

- Input
  - 🐞 修复 Input.Search 宽度比 Input 少 1px 的问题。[#47193](https://github.com/ant-design/ant-design/pull/47193)
  - 🐞 修复 Input 启用 `showCount` 时在 Space.Compact 下的样式错误。[#47112](https://github.com/ant-design/ant-design/pull/47112) [@huiliangShen](https://github.com/huiliangShen)
- 🐞 修复 Descriptions 当 `item` 的 `children` 为 `null` 时丢失单元格右边框样式的问题。[#47191](https://github.com/ant-design/ant-design/pull/47191)
- 🐞 修复 Table `column.onFilter` 方法未过滤树形数据的问题。[#47170](https://github.com/ant-design/ant-design/pull/47170) [@Mumujianguang](https://github.com/Mumujianguang)
- 🐞 修复 Affix 在 Chrome 缩放 `80%` 的情况下占位高度异常的问题。[#46823](https://github.com/ant-design/ant-design/pull/46823) [@zhipenglin](https://github.com/zhipenglin)
- 🐞 修复 QRCode 在暗黑模式下的背景色。[#47128](https://github.com/ant-design/ant-design/pull/47128) [@kampiu](https://github.com/kampiu)
- 🐞 修复 Statistic 组件不支持 HTML `role`、`data-*` 和 `aria-*` 等属性的问题。[#47149](https://github.com/ant-design/ant-design/pull/47149)
- 🐞 修复 Transfer 反选当页错误的问题[#47125](https://github.com/ant-design/ant-design/pull/47125) [@linxianxi](https://github.com/linxianxi)
- 💄 降低 Button `size` 样式权重以方便覆盖。[#47074](https://github.com/ant-design/ant-design/pull/47074) [@crazyair](https://github.com/crazyair)
- 🐞 修复 Modal 自定义 `classNames.wrapper` 时 `centered` 属性不生效的问题。[#47076](https://github.com/ant-design/ant-design/pull/47076) [@sunsunmonkey](https://github.com/sunsunmonkey)
- 🐞 修复 Spin 组件在 `tip` 和 `fullscreen` 同时使用时的控制台误报。[#47015](https://github.com/ant-design/ant-design/pull/47015) [@xsjcTony](https://github.com/xsjcTony)
- 🗑 移除了早已失效的 PageHeader 组件相关的多语言文案和 ConfigProvider 的 `pageHeader` 属性。[#47163](https://github.com/ant-design/ant-design/pull/47163) [@li-jia-nan](https://github.com/li-jia-nan)
- 🛠 重构简化 Drawer 的动画代码。[#47194](https://github.com/ant-design/ant-design/pull/47194)
- 国际化
  - 🇮🇹 为 Tour 组件补充 it_IT 本地化文案。[#47148](https://github.com/ant-design/ant-design/pull/47148) [@nikzanda](https://github.com/nikzanda)
  - 🇯🇵 为 Table 组件筛选功能补充 ja_JP 本地化文案。[#47072](https://github.com/ant-design/ant-design/pull/47072) [@sebastibe](https://github.com/sebastibe)

## 5.13.2

`2024-01-19`

- 🐞 修复 Image 组件 `preview.getContainer` 值为 false 时，内联渲染不生效的问题。[#47034](https://github.com/ant-design/ant-design/pull/47034) [@FEyudong](https://github.com/FEyudong)
- 🐞 修复 Modal 静态方法配置 `prefixCls` 时，会改变所有子元素的 `prefixCls` 并导致动画丢失的问题。[#47010](https://github.com/ant-design/ant-design/pull/47010)
- 🐞 修复 Space.Compact 与 DatePicker 一起使用导致 DatePicker 的确认按钮样式错误。[#46769](https://github.com/ant-design/ant-design/pull/46769) [@Fatpandac](https://github.com/Fatpandac)
- 💄 优化 Tree 拖拽节点和展开收起按钮的鼠标 hover 样式。[#46974](https://github.com/ant-design/ant-design/pull/46974)

## 5.13.1

`2024-01-15`

- 🐞 修复 Checkbox 组件在 `@types/react` 16 或 17 版本下 Typescript 报错。[#46962](https://github.com/ant-design/ant-design/pull/46962) [@crazyair](https://github.com/crazyair)

## 5.13.0

`2024-01-13`

- 🔥 Form 组件新增 `variant` 属性用于设置内部组件形态变体。[#46573](https://github.com/ant-design/ant-design/pull/46573)
  - 🆕 Cascader、DatePicker、Select、TreeSelect、Input、InputNumber、Mentions 组件新增形态变体 `variant` 属性。[#46568](https://github.com/ant-design/ant-design/pull/46568) [#46549](https://github.com/ant-design/ant-design/pull/46549) [#46435](https://github.com/ant-design/ant-design/pull/46435) [#46381](https://github.com/ant-design/ant-design/pull/46381) [#46379](https://github.com/ant-design/ant-design/pull/46379) [#46337](https://github.com/ant-design/ant-design/pull/46337)
- 🆕 QRCode 组件 `status` 新增已扫描选项。[#46704](https://github.com/ant-design/ant-design/pull/46704)
- 🆕 Table 组件新增 `hidden` 属性可设置隐藏列。[#46957](https://github.com/ant-design/ant-design/pull/46957) [@madocto](https://github.com/madocto)
- 🆕 Select 组件新增支持 `maxCount` 属性，用于设置最大可选。[#46667](https://github.com/ant-design/ant-design/pull/46667)
- 🆕 Mentions 组件新增 `allowClear` 属性，用于设置清除功能。[#46396](https://github.com/ant-design/ant-design/pull/46396) [@yociduo](https://github.com/yociduo)
- 🆕 ColorPicker 新增支持显示清空状态。[#45993](https://github.com/ant-design/ant-design/pull/45993)
- 🆕 Drawer 组件新增 `styles.wrapper` 并废弃 `contentWrapperStyle` `drawerStyle` `maskStyle` 属性，并简化 dom 结构。[#46858](https://github.com/ant-design/ant-design/pull/46858)
- Tour
  - 🆕 Tour 新增 `disabledInteraction` 属性，用于禁用高亮区域的交互行为。[#46304](https://github.com/ant-design/ant-design/pull/46304)
  - 🐞 修复 Tour 组件在 `arrow` 属性下修改 `pointAtCenter` 不生效的问题。[#46301](https://github.com/ant-design/ant-design/pull/46301)
- Tabs
  - 🆕 Tabs 组件支持 `indicator: { align: xxx }` 属性，用于设置 Tabs 指示条对齐方式。[#46786](https://github.com/ant-design/ant-design/pull/46786)
  - 🛠 Tabs 组件废弃 `indicatorSize` 属性，改为 `indicator: { size: xxx }` 代替。[#46786](https://github.com/ant-design/ant-design/pull/46786)
- ConfigProvider
  - 🆕 ConfigProvider 组件新增 `ConfigProvider.config` 支持 `holderRender`，用于 `message` `modal` `notification` 静态方法设置 `Provider`。[#46596](https://github.com/ant-design/ant-design/pull/46596)
  - 🆕 ConfigProvider 组件支持 `indicator: { align: xxx }` 属性，用于设置 Tabs 指示条对齐方式。[#46786](https://github.com/ant-design/ant-design/pull/46786)
  - 🛠 ConfigProvider 组件废弃 Tabs 组件的 `indicatorSize` 属性，改为 `indicator: { size: xxx }` 代替。[#46786](https://github.com/ant-design/ant-design/pull/46786)
- 🐞 修复 Segmented 在 `hover` 和 `active` 内容被遮挡的问题。[#46925](https://github.com/ant-design/ant-design/pull/46925) [@madocto](https://github.com/madocto)
- 🐞 修复 Checkbox 定制字体大小在 Form 下不生效的问题。[#46904](https://github.com/ant-design/ant-design/pull/46904)
- 🐞 修复 Radio 组件配置 `title` 未生效的问题。[#46809](https://github.com/ant-design/ant-design/pull/46809)
- 🐞 修复 Input 组件在 css 变量模式下的悬浮态样式问题。[#46946](https://github.com/ant-design/ant-design/pull/46946)
- 💄 修复 Dropdown 在多级菜单下样式显示异常的问题。[#46888](https://github.com/ant-design/ant-design/pull/46888)
- 🛠 重构 ColorPicker 组件弹出面板逻辑，避免使用 `panelRender` 自定义时样式冲突的问题。[#46327](https://github.com/ant-design/ant-design/pull/46327)
- TypeScript
  - 🆕 MISC: 导出 `GetProp` `GetProps` `GetRef` 工具方法，便于开发者获取未导出的类型定义。[#46923](https://github.com/ant-design/ant-design/pull/46923)
  - 🆕 Checkbox.Group 新增支持范型可配置 `options.value`。[#46423](https://github.com/ant-design/ant-design/pull/46423) [@daledelv](https://github.com/daledelv)
- 🌈 Token
  - 🆕 Button 组件新增支持 `contentLineHeight` 系列 token。[#46936](https://github.com/ant-design/ant-design/pull/46936)
  - 🆕 Input 组件新增支持 `inputFontSize` token。[#46875](https://github.com/ant-design/ant-design/pull/46875)
  - 🆕 Menu 组件新增支持 `darkPopupBg` token。[#46618](https://github.com/ant-design/ant-design/pull/46618)
  - 🆕 Segmented 组件新增 `trackPadding` 和 `trackBg` token。[#46674](https://github.com/ant-design/ant-design/pull/46674)
  - 🐞 修复 Button 组件定制 `contentFontSize` token 后 `paddingBlock` 不生效的问题。[#46901](https://github.com/ant-design/ant-design/pull/46901)
  - 🐞 修复 InputNumber 组件无法定制 `padding` token 的问题。[#46878](https://github.com/ant-design/ant-design/pull/46878)
- 🌐 国际化
  - 🇩🇰 完善 da_DK Form 文案。[#46493](https://github.com/ant-design/ant-design/pull/46493) [@Eloi0424](https://github.com/Eloi0424)

## 5.12.8

`2024-01-05`

- 🐞 修复 Upload.Dragger 内容不居中和多余的 focus 样式的问题。[#46810](https://github.com/ant-design/ant-design/pull/46810)
- 🐞 修复 Popconfirm 配置空的 `okText` 和 `cancelText` 时不会被预设 locale 兜底的问题。[#46812](https://github.com/ant-design/ant-design/pull/46812)
- 🐞 修复 Progress 线性模式圆角无法覆盖的问题。[#46789](https://github.com/ant-design/ant-design/pull/46789)
- 🐞 修复 Typography 没有 `children` 并启用 `copyable` 时多余的 margin。[#46748](https://github.com/ant-design/ant-design/pull/46748)
- 🐞 修复 Typography 复制成功后的图标颜色问题。[#46748](https://github.com/ant-design/ant-design/pull/46748)

## 5.12.7

`2024-01-02`

- 🐞 MISC: 修复升级 `@ctrl/tinycolor@4.0.2` 导致的错误。[#46744](https://github.com/ant-design/ant-design/pull/46744) [@MadCcc](https://github.com/MadCcc)
- 🐞 修复 Mentions 选项高度偏大的问题。[#46737](https://github.com/ant-design/ant-design/pull/46737)

## 5.12.6

`2023-12-30`

- 🐞 修复 Upload 组件包裹 Button 时 Tab 键会聚焦两次的问题。[#46432](https://github.com/ant-design/ant-design/pull/46432)
- 🐞 修复 Modal `footer` 内 Button 可能重复的边距样式问题。[#46702](https://github.com/ant-design/ant-design/pull/46702)
- Select
  - 🐞 修复 Select 组件滚动条在某些条件下不会显示的问题。[#46696](https://github.com/ant-design/ant-design/pull/46696) [@MadCcc](https://github.com/MadCcc)
  - 💄 优化 Select 组件多选时选项样式。[#46646](https://github.com/ant-design/ant-design/pull/46646) [@MadCcc](https://github.com/MadCcc)
- Tree
  - 🐞 修复 Tree 组件滚动条在某些条件下不会显示的问题。[#46672](https://github.com/ant-design/ant-design/pull/46672) [@yyz945947732](https://github.com/yyz945947732)
  - 💄 优化 Tree 组件 TreeNode 节点聚焦样式。[#46608](https://github.com/ant-design/ant-design/pull/46608) [@MadCcc](https://github.com/MadCcc)
- 🐞 修复触发打印时，Layout.Sider 会收起的问题。[#46650](https://github.com/ant-design/ant-design/pull/46650) [@anilpixel](https://github.com/anilpixel)
- 🐞 修复 Table 边缘阴影会超出 Table 高度。[#46644](https://github.com/ant-design/ant-design/pull/46644) [@Fatpandac](https://github.com/Fatpandac)
- 🐞 修复 Typography.Text 省略模式下修改宽度 Tooltip 不会触发的问题。[#46613](https://github.com/ant-design/ant-design/pull/46613) [@linxianxi](https://github.com/linxianxi)
- 🐞 修复 Tooltip、Popover 等弹出组件嵌套使用时，箭头样式问题。[#46294](https://github.com/ant-design/ant-design/pull/46294) [@bestlyg](https://github.com/bestlyg)
- TypeScript
  - 🤖 ConfigProvider 导出 `ConfigProviderProps` 类型。[#46605](https://github.com/ant-design/ant-design/pull/46605) [@li-jia-nan](https://github.com/li-jia-nan)

## 5.12.5

`2023-12-22`

- 💄 修复 Tabs 在可编辑模式下只剩新增按钮时的样式问题。[#46585](https://github.com/ant-design/ant-design/pull/46585) [@hzyhbk](https://github.com/hzyhbk)
- 💄 修复 Progress `strokeLinecap` 不生效的问题。[#46551](https://github.com/ant-design/ant-design/pull/46551) [@ZN1996](https://github.com/ZN1996)
- 🐞 修复 ColorPicker 配置 `prefixCls` 不生效的问题。[#46561](https://github.com/ant-design/ant-design/pull/46561)

## 5.12.4

`2023-12-19`

- 🐞 修复 DatePicker 组件在 CSS 变量模式下的样式错乱问题。[#46526](https://github.com/ant-design/ant-design/pull/46526)

## 5.12.3

`2023-12-18`

- 💄 修复 Tag 组件在 SSR 场景下的样式丢失问题。[#46500](https://github.com/ant-design/ant-design/pull/46500) [@MadCcc](https://github.com/MadCcc)
- 🐞 Upload 的 `disabled` 属性不再对下载按钮生效。[#46454](https://github.com/ant-design/ant-design/pull/46454)
- 💄 Upload.Dragger 增加一个水平内边距。[#46457](https://github.com/ant-design/ant-design/pull/46457)
- 🐞 修复 Upload `actions` 的颜色问题。[#46456](https://github.com/ant-design/ant-design/pull/46456)
- 🐞 修复 Form 使用 `getValueProps` 展示值无法更新的问题。[#46445](https://github.com/ant-design/ant-design/pull/46445)
- 💄 修复 Checkbox 自定义 `token.lineWidth` 时勾选箭头错位问题。[#46431](https://github.com/ant-design/ant-design/pull/46431)
- 🐞 修复 Select 组件定制 token 会让 padding 失效的问题。[#46427](https://github.com/ant-design/ant-design/pull/46427) [@MadCcc](https://github.com/MadCcc)
- 🐞 修复 Message 在 `cssVar` 模式下覆盖组件 token 无效的问题。[#46415](https://github.com/ant-design/ant-design/pull/46415) [@MadCcc](https://github.com/MadCcc)
- 💄 Flex 组件不应该应用额外的样式。[#46404](https://github.com/ant-design/ant-design/pull/46404) [@li-jia-nan](https://github.com/li-jia-nan)

## 5.12.2

`2023-12-11`

- 🐞 MISC: 修复 React 17 以下使用 webpack 构建时报错 `useId` 找不到的问题。[#46261](https://github.com/ant-design/ant-design/pull/46261)
- Pagination
  - 🐞 修复 Pagination 在低版本浏览器上报错的问题。[react-component/pagination#545](https://github.com/react-component/pagination/pull/545)
  - 🐞 修复 Pagination `simple` 模式下 `current` 受控选中分页不生效的问题。[react-component/pagination#546](https://github.com/react-component/pagination/pull/546)
- 🐞 修复 Table 筛选菜单在 CSS 变量模式下丢失背景色的问题。[#46314](https://github.com/ant-design/ant-design/pull/46314)
- 🐞 优化 Spin 交互，全屏状态时禁止用户触发鼠标事件。[#46303](https://github.com/ant-design/ant-design/pull/46303) [@li-jia-nan](https://github.com/li-jia-nan)
- 🐞 修复 Form `hideRequiredMark` 属性的优先级低于 ConfigProvider 的 form 配置的问题。[#46299](https://github.com/ant-design/ant-design/pull/46299) [@linhf123](https://github.com/linhf123)
- TypeScript
  - 🤖 修复 Descriptions TS 定义不支持 `id` 属性的问题。[#46367](https://github.com/ant-design/ant-design/pull/46367) [@RSS1102](https://github.com/RSS1102)

## 5.12.1

`2023-12-04`

- 🐞 MISC: 修复 token 转换 less 变量丢失的问题。[#46250](https://github.com/ant-design/ant-design/pull/46250)
- 🐞 修复 Notification 标题太长时会与关闭图标重叠的问题。[#46211](https://github.com/ant-design/ant-design/pull/46211) [@zh-lx](https://github.com/zh-lx)

## 5.12.0

`2023-12-04`

- 🔥 Component Token 支持 CSS 变量模式，详情见 [使用 CSS 变量](/docs/react/css-variables-cn)。感谢以下同学对此的贡献：[@li-jia-nan](https://github.com/li-jia-nan) [@RedJue](https://github.com/RedJue) [@c0dedance](https://github.com/c0dedance) [@kiner-tang](https://github.com/kiner-tang) [@JarvisArt](https://github.com/JarvisArt) [@cc-hearts](https://github.com/cc-hearts)
- 🛠 rc-pagination 重构为 FC。[#46204](https://github.com/ant-design/ant-design/pull/46204) [@Wxh16144](https://github.com/Wxh16144)
- 🆕 `Form.useWatch` 支持 selector 函数参数调用。[#46180](https://github.com/ant-design/ant-design/pull/46180) [@crazyair](https://github.com/crazyair)
- 🆕 Slider 组件支持 `onChangeComplete` 事件，并废弃 `onAfterChange`。[#46182](https://github.com/ant-design/ant-design/pull/46182) [@MadCcc](https://github.com/MadCcc)
- 🆕 Tabs 配置项 `items` 支持 `icon` 属性。[#46096](https://github.com/ant-design/ant-design/pull/46096) [@li-jia-nan](https://github.com/li-jia-nan)
- 🆕 Tour 支持 `getPopupContainer` 属性。[#45751](https://github.com/ant-design/ant-design/pull/45751) [@li-jia-nan](https://github.com/li-jia-nan)
- 🆕 Switch 支持 `value` and `defaultValue` 属性。[#45747](https://github.com/ant-design/ant-design/pull/45747) [@Wxh16144](https://github.com/Wxh16144)
- 🐞 修复 Progress 进度条视觉效果，渐变效果应该随着百分比改变。[#46209](https://github.com/ant-design/ant-design/pull/46209) [@MadCcc](https://github.com/MadCcc)
- 🐞 修复点击 Form `tooltip` 图标会触发 Switch 切换的问题。[#46155](https://github.com/ant-design/ant-design/pull/46155)
- 🐞 修复 Notification 图标行高为 0 的问题。[#46148](https://github.com/ant-design/ant-design/pull/46148) [@MadCcc](https://github.com/MadCcc)
- 💄 Button 按钮支持自定义为渐变色风格。[#46192](https://github.com/ant-design/ant-design/pull/46192)
- 💄 Alert 背景色现在可以通过 `colorInfoBg` token 定义为渐变色。[#46188](https://github.com/ant-design/ant-design/pull/46188)
- 💄 修复 InputNumber 带有 `addon` 时在 Space.Compact 下使用的样式问题。[#46130](https://github.com/ant-design/ant-design/pull/46130) [@MadCcc](https://github.com/MadCcc)
- TypeScript
  - 🤖 更新 FloatButton 的类型定义，透出原生事件处理函数类型。[#46175](https://github.com/ant-design/ant-design/pull/46175) [@li-jia-nan](https://github.com/li-jia-nan)

## 5.11.5

`2023-11-27`

- 🐞 MISC: 修复打包 `dist` 产物错误。[#46103](https://github.com/ant-design/ant-design/pull/46103) [@MadCcc](https://github.com/MadCcc)
- 💄 修复 DatePicker 禁用状态下悬浮样式。[#45940](https://github.com/ant-design/ant-design/pull/45940) [@crazyair](https://github.com/crazyair)

## 5.11.4

`2023-11-24`

- 🐞 修复 Image 在嵌套 Modal 中设置 `z-index` 异常的问题。[#46035](https://github.com/ant-design/ant-design/pull/46035)
- 🐞 修复 Button 禁用的链接按钮右键点击时会有打开新链接选项的问题。[#46021](https://github.com/ant-design/ant-design/pull/46021)
- Card
  - 🛠 把 Card 内部方法 `getAction` 重构为函数组件。[#46032](https://github.com/ant-design/ant-design/pull/46032)
  - 🐞 解决 Card 在 Rollup 中会警告 `invalid annotation` 的问题。[#46024](https://github.com/ant-design/ant-design/pull/46024)
- TypeScript
  - 🤖 导出 Radio 和 Checkbox 组件的 `required` 属性的类型定义。[#46028](https://github.com/ant-design/ant-design/pull/46028) [@nnmax](https://github.com/nnmax)

## 5.11.3

`2023-11-22`

- 🐞 修复 Modal 静态方法创建 `zIndex` 过高会覆盖其他弹出内容的问题。[#46012](https://github.com/ant-design/ant-design/pull/46012)
- Image
  - 🆕 Image 预览支持移动触摸事件交互。[#45989](https://github.com/ant-design/ant-design/pull/45989) [@JarvisArt](https://github.com/JarvisArt)
  - 🐞 修复 Image 预览在嵌套弹框中 `z-index` 设置不正确的问题。[#45979](https://github.com/ant-design/ant-design/pull/45979) [@kiner-tang](https://github.com/kiner-tang)
- 🐞 修复 Collapse 可折叠区域鼠标 `hover` 样式问题。[#45994](https://github.com/ant-design/ant-design/pull/45994)
- 🐞 修复 ColorPicker 不支持 Form 组件的禁用问题。[#45978](https://github.com/ant-design/ant-design/pull/45978) [@RedJue](https://github.com/RedJue)
- 🐞 修复 Typography.Text `code` 在 Layout 下开启 `ellipsis` 时 tooltip 无效的问题。[#45962](https://github.com/ant-design/ant-design/pull/45962)
- 🐞 修复 Select 搜索框在 Safari 下显示多余的 🔍 图标。[#46008](https://github.com/ant-design/ant-design/pull/46008)
- 💄 删除 Rate 组件无用样式。[#45927](https://github.com/ant-design/ant-design/pull/45927) [@JarvisArt](https://github.com/JarvisArt)
- 🛠 UMD 版本 `antd.js` 现在会优先使用全局的 `@ant-design/cssinjs` 依赖。[#46009](https://github.com/ant-design/ant-design/pull/46009)
- 🌐 补充 `eu_ES` 国际化内容。[#45928](https://github.com/ant-design/ant-design/pull/45928) [@ionlizarazu](https://github.com/ionlizarazu)

## 5.11.2

`2023-11-17`

- 🆕 放开 Table `virtual` 下 `components` 的限制，现在除了 `components.body` 都可以自定义。[#45857](https://github.com/ant-design/ant-design/pull/45857)
- 🐞 修复 Button 带有链接且禁用时可以被聚焦到的问题。[#45910](https://github.com/ant-design/ant-design/pull/45910) [@MadCcc](https://github.com/MadCcc)
- 🐞 修复 `zIndex` 逻辑，解决多层 Modal 打开时，message 与 notification 被遮盖的问题。[#45911](https://github.com/ant-design/ant-design/pull/45911) [#45864](https://github.com/ant-design/ant-design/pull/45864) [@kiner-tang](https://github.com/kiner-tang)
- 💄 修复 QRCode 设置 `style.padding` 时无效的问题。[#45815](https://github.com/ant-design/ant-design/pull/45815)
- 💄 优化 Carousel 切换条圆角样式。[#45817](https://github.com/ant-design/ant-design/pull/45817)
- TypeScript
  - 🤖 优化 List 属性 `gutter` 的类型定义。[#45791](https://github.com/ant-design/ant-design/pull/45791) [@Asanio06](https://github.com/Asanio06)

## 5.11.1

`2023-11-09`

- 🐞 修复 Dropdown 在嵌套列表时 `zIndex` 错误的问题。[#45761](https://github.com/ant-design/ant-design/pull/45761)
- 🐞 修复 Upload 显式指定 `showRemoveIcon: true` 时删除图标未显示的问题。[#45752](https://github.com/ant-design/ant-design/pull/45752)
- 🐞 修复 Descriptions 使用 `children` 结构语法糖时，会丢失 Descriptions.Item 的 `key` 的问题。[#45757](https://github.com/ant-design/ant-design/pull/45757)
- 🐞 修复 Message 组件在组件范围设置全局 `token` 无效的问题。[#45721](https://github.com/ant-design/ant-design/pull/45721) [@MadCcc](https://github.com/MadCcc)
- 🐞 修复 Popconfirm 不兼容 `visible` 的问题。[#45702](https://github.com/ant-design/ant-design/pull/45702) [@linhf123](https://github.com/linhf123)
- 🐞 修复默认 Tag 的背景颜色不正确的问题。[#45711](https://github.com/ant-design/ant-design/pull/45711) [@kiner-tang](https://github.com/kiner-tang)
- 💄 修复 Notification 组件设置 `style.width` 无效的问题。[#45681](https://github.com/ant-design/ant-design/pull/45681) [@MadCcc](https://github.com/MadCcc)
- 🐞 修复 App 设置 `component=false` 时，会报非预期的属性警告的问题。[#45671](https://github.com/ant-design/ant-design/pull/45671) [@li-jia-nan](https://github.com/li-jia-nan)
- TypeScript
  - 🤖 App 支持泛型定义。[#45669](https://github.com/ant-design/ant-design/pull/45669) [@JexLau](https://github.com/JexLau)

## 5.11.0

`2023-11-03`

- Slider
  - 🆕 Slider 聚焦滑块时现在会显示 Tooltip。[#45653](https://github.com/ant-design/ant-design/pull/45653)
  - 💄 优化 Slider 交互体验，点击轨道后可直接拖拽滑块。[#45651](https://github.com/ant-design/ant-design/pull/45651)
- InputNumber
  - 🆕 InputNumber 添加 `changeOnBlur` 属性以支持在失去焦点时不触发 `onChange` 事件。[#45395](https://github.com/ant-design/ant-design/pull/45395)
  - 🐞 修复 InputNumber 组件在 Form 组件中使用并且启用 `hasFeedback` 时，反馈图标出现会使 InputNumber 失去焦点的问题。[#45632](https://github.com/ant-design/ant-design/pull/45632) [@MadCcc](https://github.com/MadCcc)
  - 🐞 修复 InputNumber 动态改变 `formatter` 不生效的问题。[#45325](https://github.com/ant-design/ant-design/pull/45325)
- Table
  - 🆕 Table 组件 `columnTitle` 支持传入 render 方法。[#41937](https://github.com/ant-design/ant-design/pull/41937) [@Zhou-Bill](https://github.com/Zhou-Bill)
  - 🛠 重构 Table `ref` 支持 `scrollTo` 以滚动到目标 `key` 或 `index` 或 `top`。[#45245](https://github.com/ant-design/ant-design/pull/45245)
- Tabs
  - 🆕 Tabs `items` 支持单个标签页设置 `destroyInactiveTabPane`。[#45359](https://github.com/ant-design/ant-design/pull/45359)
  - 🐞 修复 Tabs 的标签宽度存在小数时，滚动会出现抖动的问题。[#45370](https://github.com/ant-design/ant-design/pull/45370)
- ConfigProvider
  - 🆕 ConfigProvider 支持 RangePicker 组件的 `className` 和 `style` 属性。[#45479](https://github.com/ant-design/ant-design/pull/45479) [@chenzhuo198](https://github.com/chenzhuo198)
  - 🆕 ConfigProvider 支持 Dropdown 组件的 `className` 和 `style` 属性。[#45621](https://github.com/ant-design/ant-design/pull/45621) [@li-jia-nan](https://github.com/li-jia-nan)
- 🆕 ColorPicker 组件 `preset` 新增 `defaultOpen` 属性，可控制预设颜色默认是否展开。[#45607](https://github.com/ant-design/ant-design/pull/45607) [@Wxh16144](https://github.com/Wxh16144)
- 🆕 Select 组件支持 `optionRender` 方法。[#45529](https://github.com/ant-design/ant-design/pull/45529) [@RedJue](https://github.com/RedJue)
- 🆕 Pagination 组件支持组合 `simple` 和 `showSizeChanger` 使用。[#45538](https://github.com/ant-design/ant-design/pull/45538)
- 🆕 Spin 组件新增 `fullscreen` 属性，支持全屏展示。[#44986](https://github.com/ant-design/ant-design/pull/44986) [@Rafael-Martins](https://github.com/Rafael-Martins) [#45436](https://github.com/ant-design/ant-design/pull/45436) [@li-jia-nan](https://github.com/li-jia-nan)
- 🆕 Form `validateFields` 支持 `dirty` 参数以校验被修改过和校验过的字段。[#45389](https://github.com/ant-design/ant-design/pull/45389)
- 🆕 Watermark 支持 `inherit` 配置，关闭水印传导至弹出 Drawer 与 Modal。[#45319](https://github.com/ant-design/ant-design/pull/45319)
- 🆕 App 支持 `component` 以自定义渲染元素。[#45292](https://github.com/ant-design/ant-design/pull/45292)
- 🆕 Input 与 Input.TextArea 支持 `count` 自定义字符计数（例如固定 emoji 字符长度为 `1`）；`count.max` 支持超出范围样式；将 emoji 计数还原为原生计数以解决 `maxLength` 与 `value` 不匹配的问题。[#45140](https://github.com/ant-design/ant-design/pull/45140)
- 🐞 修复 Dropdown 在点击菜单项关闭弹出框时不会触发 `onOpenChange` 的问题。[#45378](https://github.com/ant-design/ant-design/pull/45378)
- 💄 Modal 静态方法支持 `styles` 属性。[#45558](https://github.com/ant-design/ant-design/pull/45558) [@KotoriK](https://github.com/KotoriK)
- 💄 优化弹层组件的 `z-index` 逻辑，使其在默认情况下不会互相遮挡。[#45512](https://github.com/ant-design/ant-design/pull/45512) [#45490](https://github.com/ant-design/ant-design/pull/45490) [@kiner-tang](https://github.com/kiner-tang)
  - 优化 Menu 组件 `z-index` 逻辑。[#45498](https://github.com/ant-design/ant-design/pull/45498) [@kiner-tang](https://github.com/kiner-tang)
  - 优化 DatePicker、TimePicker 组件 `z-index` 逻辑。[#45497](https://github.com/ant-design/ant-design/pull/45497) [@kiner-tang](https://github.com/kiner-tang)
  - 优化 Drawer 组件 `z-index` 逻辑。[#45496](https://github.com/ant-design/ant-design/pull/45496) [#45417](https://github.com/ant-design/ant-design/pull/45417) [@kiner-tang](https://github.com/kiner-tang)
  - 优化 Cascader、TreeSelect、AutoComplete 组件 `z-index` 逻辑。[#45494](https://github.com/ant-design/ant-design/pull/45494) [@kiner-tang](https://github.com/kiner-tang)
  - 优化 Dropdown 组件 `z-index` 逻辑。[#45486](https://github.com/ant-design/ant-design/pull/45486) [@kiner-tang](https://github.com/kiner-tang)
  - 优化 Tour 组件 `z-index` 逻辑。[#45425](https://github.com/ant-design/ant-design/pull/45425) [@kiner-tang](https://github.com/kiner-tang)
  - 优化 Tooltip 组件 `z-index` 逻辑。[#45422](https://github.com/ant-design/ant-design/pull/45422) [@kiner-tang](https://github.com/kiner-tang)
  - 优化 Popover 组件 `z-index` 逻辑。[#45420](https://github.com/ant-design/ant-design/pull/45420) [@kiner-tang](https://github.com/kiner-tang)
  - 优化 Popconfirm 组件 `z-index` 逻辑。[#45421](https://github.com/ant-design/ant-design/pull/45421) [@kiner-tang](https://github.com/kiner-tang)
  - 优化 Modal、Select 组件 `z-index` 逻辑。[#45346](https://github.com/ant-design/ant-design/pull/45346) [@kiner-tang](https://github.com/kiner-tang)

## 5.10.3

`2023-10-30`

- 💄 修复 Typography.Text 同时启用 `ellipsis` 和 `code` 时丢失右边框样式的问题。[#45575](https://github.com/ant-design/ant-design/pull/45575)
- 💄 调整 TimePicker 滚动条样式。[#45478](https://github.com/ant-design/ant-design/pull/45478) [@GeorgeHcc](https://github.com/GeorgeHcc) [#45586](https://github.com/ant-design/ant-design/pull/45586)
- 🆕 FloatButton.BackTop 支持使用 `ref` 获取 `nativeElement`。[#45547](https://github.com/ant-design/ant-design/pull/45547) [@li-jia-nan](https://github.com/li-jia-nan)
- 🐞 修复 Watermark 组件 `gap` 在数组中含有 `undefined` 时没有默认值的问题。[#45537](https://github.com/ant-design/ant-design/pull/45537) [@MadCcc](https://github.com/MadCcc)
- 🐞 修复 Dropdown 在点击子项后总是关闭的问题。[#45513](https://github.com/ant-design/ant-design/pull/45513) [@vyachsed](https://github.com/vyachsed)
- 💄 修复 Notification 组件在 windows 系统下的样式问题。[#45500](https://github.com/ant-design/ant-design/pull/45500) [@MadCcc](https://github.com/MadCcc)
- 💄 修复 Notification 组件 `style` 属性会重复添加到外层的问题。[#45487](https://github.com/ant-design/ant-design/pull/45487) [@MadCcc](https://github.com/MadCcc)
- TypeScript
  - 🤖 修复 `App.useApp` 中 `modal` 类型定义。[#45462](https://github.com/ant-design/ant-design/pull/45462) [@mjss](https://github.com/mjss)

## 5.10.2

`2023-10-21`

- 🐞 Layout 支持自动检测 `hasSider` 以防止在 SSR 场景下的闪烁问题。[#45361](https://github.com/ant-design/ant-design/pull/45361)
- 🐞 修复 FloatButton.BackTop 组件显示 `findDOMNode is deprecated in StrictMode` 警告的问题。[#45390](https://github.com/ant-design/ant-design/pull/45390) [@li-jia-nan](https://github.com/li-jia-nan)
- 🐞 修复 ColorPicker 不支持 `id` 和 `data-*` 属性的问题。[#45413](https://github.com/ant-design/ant-design/pull/45413) [@cheng87126](https://github.com/cheng87126)
- 🐞 修复 Table 当 `column.showSorterTooltip` 是一个对象时排序 tooltip 不显示的问题。[#45403](https://github.com/ant-design/ant-design/pull/45403)
- 🐞 修复 Form `inline` 模式在小屏幕发生元素重叠的问题。[#45340](https://github.com/ant-design/ant-design/pull/45340) [@Yuiai01](https://github.com/Yuiai01)
- 💄 移除 Upload.Dragger 中重复的 `disabled` 样式。[#45446](https://github.com/ant-design/ant-design/pull/45446) [@vagusX](https://github.com/vagusX)
- TypeScript
  - 🐞 修复 Table `pagination.position` TS 定义不支持 `'none'` 的问题。[#45398](https://github.com/ant-design/ant-design/pull/45398)
- RTL
  - 💄 修复 Notification 组件在 `rtl` 模式下边缘间距错误的问题。[#45386](https://github.com/ant-design/ant-design/pull/45386)

## 5.10.1

`2023-10-15`

- ⚡️ 优化 CSS-in-JS Design Token 缓存命中性能。[#45302](https://github.com/ant-design/ant-design/pull/45302)
- 🆕 为 Checkbox.Group 与 Radio.Group 的 `options` 添加 `id` 属性支持。[#45287](https://github.com/ant-design/ant-design/pull/45287)
- 🐞 修复 Affix 组件设置 `target` 失效的问题。[#45314](https://github.com/ant-design/ant-design/pull/45314) [@mingming-ma](https://github.com/mingming-ma)
- 🐞 MISC: 为图标样式设置 `csp` 属性。[#45334](https://github.com/ant-design/ant-design/pull/45334) [@AlexeyTeterin](https://github.com/AlexeyTeterin)
- 🐞 修复 Button 组件 `loading` 属性设置为 `{ delay: 0 }` 时不显示加载状态。[#45282](https://github.com/ant-design/ant-design/pull/45282) [@YDFlame13](https://github.com/YDFlame13)
- 🐞 修复 Segmented 在 Safari 下切换时的样式跳动问题。[#45310](https://github.com/ant-design/ant-design/pull/45310)
- 🐞 修复 Watermark可以使用浏览器的 `Hide Element` 来隐藏水印。[#45290](https://github.com/ant-design/ant-design/pull/45290) [@Yuiai01](https://github.com/Yuiai01)
- 🐞 修复 Input 组件 hover 或者 focus 状态时背景色变为透明的问题。[#45297](https://github.com/ant-design/ant-design/pull/45297) [@MadCcc](https://github.com/MadCcc)
- 🐞 修复 Form 在调用 `resetFields` 时，无法重置配置了 `initialValue` 的 Form.List 的问题。[#45284](https://github.com/ant-design/ant-design/pull/45284)
- 🐞 修复 Tree.DirectoryTree 在配置 `fieldNames` 时，`onSelect` 方法中的 `selectedNodes` 无法获取值。[#45036](https://github.com/ant-design/ant-design/pull/45036) [@Zian502](https://github.com/Zian502)
- 💄 回滚 Input、InputNumber、Select、Cascader、TreeSelect、DatePicker、TimePicker、ColorPicker 的描边样式。[#45286](https://github.com/ant-design/ant-design/pull/45286) [@MadCcc](https://github.com/MadCcc)
- 💄 修复 Card 搭配小尺寸 Tabs 时的样式问题。[#45272](https://github.com/ant-design/ant-design/pull/45272) [@MadCcc](https://github.com/MadCcc)

## 5.10.0

`2023-10-10`

- 🔥 新增 Flex 组件，用于设置弹性布局。[#44362](https://github.com/ant-design/ant-design/pull/44362)
- 🔥 Notification 组件支持 `stack` 配置，默认超过三个以上的提示会堆叠起来。[#44618](https://github.com/ant-design/ant-design/pull/44618)
- 🔥 更新 Input、InputNumber、Select、Cascader、TreeSelect、DatePicker、ColorPicker 的激活态样式。[#45009](https://github.com/ant-design/ant-design/pull/45009)
- 🆕 Watermark 支持通过 `textAlign` 设置文本对齐方向。[#44888](https://github.com/ant-design/ant-design/pull/44888) [@Yuiai01](https://github.com/Yuiai01)
- 🆕 Slider 支持任意节点数并且将 xxxStyle 迁移至语义化 `styles` 和 `classNames` 属性中。[#45000](https://github.com/ant-design/ant-design/pull/45000)
- 🆕 Cascader 支持 Cascader.Panel 组件供内联使用。[#45089](https://github.com/ant-design/ant-design/pull/45089)
- 🆕 Tooltip 添加 `fresh` 属性以支持在关闭时仍然需要更新内容的场景。[#45020](https://github.com/ant-design/ant-design/pull/45020)
- 🆕 Drawer 支持通过 `classNames` 自定义内置模块的 `className`。[#44935](https://github.com/ant-design/ant-design/pull/44935)
- 🆕 ConfigProvider 支持 `warning` 属性以配置警告等级（如过滤掉废弃 API 警告）。[#44809](https://github.com/ant-design/ant-design/pull/44809)
- Modal
  - 🆕 Modal 支持通过 `classNames` 自定义内置模块的 `className`。[#44934](https://github.com/ant-design/ant-design/pull/44934)
  - 🐞 修复 Modal.confirm `description` 是长文本时的内容溢出问题。[#45212](https://github.com/ant-design/ant-design/pull/45212)
- 🐞 修复 Menu.Item 嵌套的 Typography 其 `ellipsis` 为 true 时无法垂直居中的问题。[#41146](https://github.com/ant-design/ant-design/pull/41146) [@Yuiai01](https://github.com/Yuiai01)
- 🐞 修复 Select 内部 input 无法应用 fontFamily 的问题。[#45197](https://github.com/ant-design/ant-design/pull/45197) [@Yuiai01](https://github.com/Yuiai01)
- 🐞 修复 InputNumber 在 Space.Compact 中使用 `addonBefore` 时的边框问题。[#45004](https://github.com/ant-design/ant-design/pull/45004) [@Yuiai01](https://github.com/Yuiai01)
- 🐞 修复 Tag.CheckableTag 不支持 ref 的问题。[#45164](https://github.com/ant-design/ant-design/pull/45164) [@mingming-ma](https://github.com/mingming-ma)
- 🐞 修复 Avatar.Group 组件内的字体不支持响应式的问题。[#34722](https://github.com/ant-design/ant-design/pull/34722) [@laishiwen](https://github.com/laishiwen)
- 🛠 重构 Affix 为函数组件。[#42674](https://github.com/ant-design/ant-design/pull/42674)
- 🛠 Popover 组件废弃 `minWidth` 组件 token，并添加 `titleMinWidth` 作为替代。[#44750](https://github.com/ant-design/ant-design/pull/44750)
- 🌈 Token
  - 🆕 Input 新增 `hoverBg` `activeBg` token 用以设置输入框 hover 和 激活时背景颜色。[#44752](https://github.com/ant-design/ant-design/pull/44752) [@Pan-yongyong](https://github.com/Pan-yongyong)
  - 🆕 Descriptions 新增 `titleColor` `contentColor` 用以设置标题颜色和内容区域文字颜色。[#44729](https://github.com/ant-design/ant-design/pull/44729) [@Child-qjj](https://github.com/Child-qjj)
  - 🐞 修复 Input 组件 Token `addonBg` 失效的问题。[#45222](https://github.com/ant-design/ant-design/pull/45222)
- TypeScript
  - 🤖 导出 Notification 的 ArgsProps 类型为 NotificationArgsProps。[#45147](https://github.com/ant-design/ant-design/pull/45147)
- 🌐 国际化
  - 🇵🇱 为 pl_PL 补充 Tour 国际化。[#45166](https://github.com/ant-design/ant-design/pull/45166) [@antonisierakowski](https://github.com/antonisierakowski)
  - 🇰🇷 优化 ko_KR 国际化。[#45150](https://github.com/ant-design/ant-design/pull/45150) [@owjs3901](https://github.com/owjs3901)

## 5.9.4

`2023-09-28`

- Button
  - 🐞 修复 Button 组件只有两个汉字且嵌套在多层 span 中时间距丢失的问题。[#45126](https://github.com/ant-design/ant-design/pull/45126) [@MadCcc](https://github.com/MadCcc)
  - 🐞 修复 Button 条件渲染时意外出现加载图标的问题。[#45030](https://github.com/ant-design/ant-design/pull/45030) [@lzl0304](https://github.com/lzl0304)
- 🐞 修复 Tour 组件第一次展示时 `step.type` 无效的问题。[#45086](https://github.com/ant-design/ant-design/pull/45086) [@MadCcc](https://github.com/MadCcc)
- 🐞 修复 Select 和 DatePicker 组件没有使用 `fontFamily` token 的问题。[#45088](https://github.com/ant-design/ant-design/pull/45088) [@MadCcc](https://github.com/MadCcc)

## 5.9.3

`2023-09-25`

- 🔥 Tooltip 删除对 `disabled` 子元素额外包括 `span` 的逻辑，现在始终能够正确触发。[#44895](https://github.com/ant-design/ant-design/pull/44895) [@Yuiai01](https://github.com/Yuiai01)
- 🐞 修复 Popover 超出屏幕时不会自动调整偏移的问题。[#45015](https://github.com/ant-design/ant-design/pull/45015) [@MadCcc](https://github.com/MadCcc)
- 🐞 修复 Tooltip / Popover 在内容高度变化时，位置会闪动的问题。[#44976](https://github.com/ant-design/ant-design/pull/44976)
- 🛠 ComponentToken 移除 `radiusBase` 必须小于 `16` 的限制。[#44980](https://github.com/ant-design/ant-design/pull/44980)
- 🐞 修复 Dropdown 通过 `dropdownRender` 渲染的子节点配置 `ref` 不生效的问题。[#44971](https://github.com/ant-design/ant-design/pull/44971)
- 🐞 修复 Table `cellPaddingBlock` 不生效的问题。[#45040](https://github.com/ant-design/ant-design/pull/45040)
- 🐞 修复 Input 组件在小尺寸 `controlHeight` 下高度不正确的问题。[#45048](https://github.com/ant-design/ant-design/pull/45048)
- 🐞 修复 Typography 在设置 `fontSize` 为奇数时的样式问题。[#45031](https://github.com/ant-design/ant-design/pull/45031)
- TypeScript
  - 🤖 MISC: 修复 `@types/react@18.2.22` React.Key 定义更新引发的问题。[#44938](https://github.com/ant-design/ant-design/pull/44938)

## 5.9.2

`2023-09-19`

- 🐞 修复 Table `small` 尺寸时选择列没有居中对齐的问题。[#44922](https://github.com/ant-design/ant-design/pull/44922)
- 🐞 修复 Select 当 `label` 内使用了 `div` 块级元素时的样式问题。[#44927](https://github.com/ant-design/ant-design/pull/44927)
- 🐞 修复 Modal 自定义 `footer` 时按钮内容丢失的问题。[#44929](https://github.com/ant-design/ant-design/pull/44929) [@Wxh16144](https://github.com/Wxh16144)
- 🐞 修复 notification 底部弹出动画的问题。[#44918](https://github.com/ant-design/ant-design/pull/44918) [@linxianxi](https://github.com/linxianxi)
- 🐞 修复 Form.Item 有 `noStyle` 属性时没有继承上下文的反馈图标的问题。[#44937](https://github.com/ant-design/ant-design/pull/44937)

## 5.9.1

`2023-09-15`

- 🐞 修复小尺寸 Select 组件 `controlHeightSM` token 配置无效的问题。[#44859](https://github.com/ant-design/ant-design/pull/44859) [@MadCcc](https://github.com/MadCcc)
- 🐞 修复 Rate 组件星星变换中心不在正中心的问题。[#44855](https://github.com/ant-design/ant-design/pull/44855) [@MadCcc](https://github.com/MadCcc)
- 🐞 修复 DatePicker 组件 `dateTime` 模式切换输入框不会触发 `onCalendarChange` 的问题。[#44845](https://github.com/ant-design/ant-design/pull/44845) [@Yuiai01](https://github.com/Yuiai01)
- 🐞 修复 Table `virtual` 配置下，选择框没有居中对齐的问题。[#44786](https://github.com/ant-design/ant-design/pull/44786)
- 🐞 修复 Select 开启 `maxTagCount` 时搜索光标偏上的问题。[#44757](https://github.com/ant-design/ant-design/pull/44757)
- 🐞 修复 Select 的 label 为 Typography 组件时的选中文本对齐问题。[#44756](https://github.com/ant-design/ant-design/pull/44756)
- 💄 修复 Table `virtual` 开启虚拟滚动时，当 `columns` 小于表格宽度会显示异常的问题以及部分边框、悬浮样式丢失的问题。[#44818](https://github.com/ant-design/ant-design/pull/44818)
- 💄 修复 Select 组件在 Input `addon` 中使用时的样式错误。[#44825](https://github.com/ant-design/ant-design/pull/44825) [@MadCcc](https://github.com/MadCcc)
- 💄 修复 Tree 组件样式，使 Checkbox 与文字第一行对齐。[#44827](https://github.com/ant-design/ant-design/pull/44827) [@MadCcc](https://github.com/MadCcc)
- 💄 修复 Card 组件 Card.Grid 边缘样式问题。[#44801](https://github.com/ant-design/ant-design/pull/44801) [@Jason-huang66](https://github.com/Jason-huang66)
- 💄 修复 Select/Cascader/TreeSelect 自定义高度时的样式问题。[#44753](https://github.com/ant-design/ant-design/pull/44753)
- TypeScript
  - 🤖 优化 Radio.Button 的 `ref` 类型。[#44747](https://github.com/ant-design/ant-design/pull/44747) [@LexiosAlex](https://github.com/LexiosAlex)
  - 🤖 优化 Checkbox 的 `ref` 类型。[#44746](https://github.com/ant-design/ant-design/pull/44746) [@LexiosAlex](https://github.com/LexiosAlex)

## 5.9.0

`2023-09-08`

- 🔥 Table 支持 `virtual` 属性开启虚拟滚动。[#44349](https://github.com/ant-design/ant-design/pull/44349)
- 🔥 Form `validateFields` 支持 `recursive` 以校验所有包含路径的字段。[#44130](https://github.com/ant-design/ant-design/pull/44130)
- 🔥 Form.Item 支持 `validateDebounce` 以配置校验防抖。[#44633](https://github.com/ant-design/ant-design/pull/44633)
- 🆕 Button 组件新增 `contentFontSize` `contentFontSizeSM` `contentFontSizeLG` 三个组件 token ，用于定制各个尺寸下的字体大小。[#44257](https://github.com/ant-design/ant-design/pull/44257)
- 🆕 Form `requiredMark` 支持自定义渲染。[#44073](https://github.com/ant-design/ant-design/pull/44073)
- 🆕 Tabs 组件添加新组件 Token `itemColor`，用于控制常态 tab 的文本颜色。[#44201](https://github.com/ant-design/ant-design/pull/44201)
- 🆕 ColorPicker 组件支持 `defaultFormat` 属性。[#44487](https://github.com/ant-design/ant-design/pull/44487) [@CYBYOB](https://github.com/CYBYOB)
- 🆕 Form 新增 `feedbackIcons` 属性且 Form.Item 支持 `hasFeedback={{ icons: ... }}`，用于自定义校验图标。[#43894](https://github.com/ant-design/ant-design/pull/43894) [@gldio](https://github.com/gldio)
- 🆕 Segmented 组件新增 `itemSelectedColor` 的组件 Token。[#44570](https://github.com/ant-design/ant-design/pull/44570) [@xiaozisong](https://github.com/xiaozisong)
- 🆕 Modal 页脚 `footer` 支持自定义函数渲染。[#44318](https://github.com/ant-design/ant-design/pull/44318) [@RedJue](https://github.com/RedJue)
- 🆕 Descriptions 的 `items.span` 支持响应式设置。[#44534](https://github.com/ant-design/ant-design/pull/44534)
- 🆕 Tabs 组件 `indicatorSize` 支持通过 ConfigProvider 全局配置。[#44406](https://github.com/ant-design/ant-design/pull/44406)
- 🆕 Transfer 组件 `filterOption` 函数新增 `direction` 入参。[#44417](https://github.com/ant-design/ant-design/pull/44417) [@Zian502](https://github.com/Zian502)
- 🆕 Input.Search 组件支持在 `onSearch` 方法中接受 `source` 参数。[#44457](https://github.com/ant-design/ant-design/pull/44457) [@kiner-tang](https://github.com/kiner-tang)
- 🆕 Input 组件新增组件 Token 用于定制激活态阴影。[#44410](https://github.com/ant-design/ant-design/pull/44410)
- 🆕 Radio 组件新增组件 Token，用于定制填充按钮选中时的颜色。[#44389](https://github.com/ant-design/ant-design/pull/44389)
- 🆕 Tour 组件间距支持横向偏移量。[#44377](https://github.com/ant-design/ant-design/pull/44377) [@RedJue](https://github.com/RedJue)
- 🆕 Tour 组件支持通过 `closeIcon` 来自定义关闭按钮。[#44312](https://github.com/ant-design/ant-design/pull/44312) [@kiner-tang](https://github.com/kiner-tang)
- 🆕 Avatar 支持使用 ConfigProvider 的 `componentSize` 配置 `size`。[#44288](https://github.com/ant-design/ant-design/pull/44288) [@li-jia-nan](https://github.com/li-jia-nan)
- 🆕 List 支持使用 ConfigProvider 的 `componentSize` 配置 `size`。[#44267](https://github.com/ant-design/ant-design/pull/44267) [@Yuiai01](https://github.com/Yuiai01)
- 🆕 Cascader 支持 `autoClearSearchValue` 属性。[#44033](https://github.com/ant-design/ant-design/pull/44033) [@linxianxi](https://github.com/linxianxi)
- 🆕 在 [Upload](https://github.com/ant-design/ant-design/pull/44060)、[AutoComplete](https://github.com/ant-design/ant-design/pull/44055)、[Badge.Ribbon](https://github.com/ant-design/ant-design/pull/44056)、[Input.TextArea](https://github.com/ant-design/ant-design/pull/44058)、[RangePicker](https://github.com/ant-design/ant-design/pull/44057)、[TimePicker](https://github.com/ant-design/ant-design/pull/44059) 中添加了对 `rootClassName` 的支持。[@kiner-tang](https://github.com/kiner-tang)。
- 💄 重构 Modal.confirm 结构以修复 `width: fit-content` 导致宽度异常问题以及大量文本下的样式断行问题。抽离 confirm 样式至懒加载以优化 SSR 下的样式尺寸。[#44557](https://github.com/ant-design/ant-design/pull/44557)
- 💄 Progress 调整 `circle` 和 `dashboard` 的线性渐变色为锥形渐变色。[#44404](https://github.com/ant-design/ant-design/pull/44404)
- 💄 修复 DatePicker 组件自定义页脚样式问题。[#44642](https://github.com/ant-design/ant-design/pull/44642) [@li-jia-nan](https://github.com/li-jia-nan)
- 💄 修复 ConfigProvider `tag.className` 与 `tag.style` 无法作用于 Tag.CheckableTag 的问题。[#44602](https://github.com/ant-design/ant-design/pull/44602)
- 💄 修复 Select 配置的 `getPopupContainer` 容器有 `transform: scale` 样式时，弹出框宽度与输入框不一致的情况。[#44378](https://github.com/ant-design/ant-design/pull/44378)
- 🐞 修复 Form.Item 配置 `noStyle` 时，被绑定的元素无法消费 `useStatus` 的问题。[#44576](https://github.com/ant-design/ant-design/pull/44576)
- 🐞 修复 Tag 被 Popover/Popconfirm 包裹时，Hover 会导致 `font-size` 错误的问题。[#44663](https://github.com/ant-design/ant-design/pull/44663)
- 🐞 修复 Input.Search 组合中，搜索按钮存在额外阴影的问题。[#44660](https://github.com/ant-design/ant-design/pull/44660) [@daledelv](https://github.com/daledelv)
- 🐞 修复 Modal 的 hooks 调用通过按键 `esc` 关闭时无法正确触发 await 的问题。[#44646](https://github.com/ant-design/ant-design/pull/44646)
- 🐞 修复 Space 的预设 `size` 不会跟随 Design Token 的问题，现在紧凑模式也会正确处理对应的间距数值。[#44598](https://github.com/ant-design/ant-design/pull/44598) [@li-jia-nan](https://github.com/li-jia-nan)
- 🐞 修复 Upload 组件点击某文件的下载按钮后，鼠标移出该文件时仍展示下载按钮的问题。[#44594](https://github.com/ant-design/ant-design/pull/44594) [@zbw-zbw](https://github.com/zbw-zbw)
- 🐞 修复 FloatButton 组件添加 `href` 后在 FloatButton.Group 中间距失效的问题。[#44707](https://github.com/ant-design/ant-design/pull/44707) [@Yuiai01](https://github.com/Yuiai01)
- 🐞 修复 Button `fontSizeSM` token 不生效的问题。[#44217](https://github.com/ant-design/ant-design/pull/44217) [@CHENGTIANG](https://github.com/CHENGTIANG)
- 🐞 Watermark 现在可以在嵌套的 Modal 和 Drawer 组件中生效。[#44104](https://github.com/ant-design/ant-design/pull/44104)
- 🛠 迁移 Alert、Tree、Cascader、Layout、Table、Modal、Drawer、Button、Switch、Select、Badge、Form、TimePicker、Spin、Input、Progress、Divider 的 less 变量到 Token。[#42142](https://github.com/ant-design/ant-design/pull/42142) [#42607](https://github.com/ant-design/ant-design/pull/42607) [#42627](https://github.com/ant-design/ant-design/pull/42627) [#42757](https://github.com/ant-design/ant-design/pull/42757) [#42774](https://github.com/ant-design/ant-design/pull/42774) [#42778](https://github.com/ant-design/ant-design/pull/42778) [#44090](https://github.com/ant-design/ant-design/pull/44090)[#44118](https://github.com/ant-design/ant-design/pull/44118) [#44174](https://github.com/ant-design/ant-design/pull/44174) [#44228](https://github.com/ant-design/ant-design/pull/44228) [#44261](https://github.com/ant-design/ant-design/pull/44261) [#44282](https://github.com/ant-design/ant-design/pull/44282) [#44334](https://github.com/ant-design/ant-design/pull/44334) [#42192](https://github.com/ant-design/ant-design/pull/42192) [@hms181231](https://github.com/hms181231) [@linhf123](https://github.com/linhf123) [@poyiding](https://github.com/poyiding) [@Wxh16144](https://github.com/Wxh16144) [@Yuiai01](https://github.com/Yuiai01)
- 📦 移除 Space 和 Grid 对于旧版 IE 浏览器兼容逻辑，减少打包产物体积。[#44620](https://github.com/ant-design/ant-design/pull/44620) [@li-jia-nan](https://github.com/li-jia-nan)
- TypeScript
  - 🤖 从 Tree 中导出 `BasicDataNode` 类型。[#44624](https://github.com/ant-design/ant-design/pull/44624) [@kiner-tang](https://github.com/kiner-tang)

## 5.8.6

`2023-09-02`

- 🛠 针对 CSSInJS 加载 styles 大小进行了优化。
  - 🛠 Notification 和 Message 组件只有在展示时才会插入对应样式。[#44488](https://github.com/ant-design/ant-design/pull/44488)
  - 🛠 剥离 Tag 状态与预设颜色样式，现在只有当使用的时候才会生成它们。[#44512](https://github.com/ant-design/ant-design/pull/44512)
  - 🛠 剥离 Button 紧凑模式样式，现在只有当使用了 Space.Compact 的时候才会生成它们。[#44475](https://github.com/ant-design/ant-design/pull/44475)
- 📦 移除 `@ant-design/icons` 依赖 `lodash/camelCase` 以优化 bundle size。[ant-design-icons#595](https://github.com/ant-design/ant-design-icons/pull/595)
- Form
  - 🐞 修复 Form.Item 设置 `wrapperCol.span` 为 `0` 时，子元素不隐藏的问题。[#44485](https://github.com/ant-design/ant-design/pull/44485) [#44472](https://github.com/ant-design/ant-design/pull/44472) [@crazyair](https://github.com/crazyair)
  - 🐞 修复 Form `labelCol` 设置为 24 时，会使 `wrapperCol` 设置 24 失效的问题。[#44541](https://github.com/ant-design/ant-design/pull/44541)
- 🐞 修复 Watermark 组件在 `content` 是空字符串时报错的问题。[#44501](https://github.com/ant-design/ant-design/pull/44501)
- 🐞 修复 ColorPicker 禁用时依然能弹出选择窗口的问题。[#44466](https://github.com/ant-design/ant-design/pull/44466) [@RedJue](https://github.com/RedJue)
- 🐞 修复 Transfer 点击 Checkbox 时有时会触发两次选择行为的问题。[#44471](https://github.com/ant-design/ant-design/pull/44471) [@kovsu](https://github.com/kovsu)
- 🐞 修复 Typography 使用 `ellipsis` 时滚动条闪动的问题。[#43058](https://github.com/ant-design/ant-design/pull/43058) [@bbb169](https://github.com/bbb169)
- Slider
  - 🐞 修复 Slider 滑块可拖拽区域范围异常的问题。[#44503](https://github.com/ant-design/ant-design/pull/44503) [@BoyYangzai](https://github.com/BoyYangzai) [@yoyo837](https://github.com/yoyo837)
  - ⌨️ 优化 Slider `aria-orientation` 可访问性属性。[react-component/slider#859](https://github.com/react-component/slider/pull/859) [@5im0n](https://github.com/5im0n)
- 🐞 修复 Steps `type="nav"` 垂直导航步骤条的最后一项箭头没隐藏的问题。[#44582](https://github.com/ant-design/ant-design/pull/44582) [@ohhoney1](https://github.com/ohhoney1)
- TypeScript
  - 🤖 修复 Upload 文件状态定义，移除未使用过的 `success` 状态。[#44468](https://github.com/ant-design/ant-design/pull/44468)

## 5.8.5

`2023-08-28`

- 🛠 重构 Badge 样式逻辑将 Ribbon 样式抽离以降低 SSR 内联样式尺寸。[#44451](https://github.com/ant-design/ant-design/pull/44451)
- 🐞 修复 App 组件下使用 `@ant-design/icons` 的图标样式异常的问题。[#41208](https://github.com/ant-design/ant-design/pull/41208) [@Wxh16144](https://github.com/Wxh16144)
- 🐞 修复 Carousel 组件垂直方向拖动失效的问题。[#44460](https://github.com/ant-design/ant-design/pull/44460) [@RedJue](https://github.com/RedJue)
- 🐞 修复 Tour 面板使用的 design token 错误的问题。[#44428](https://github.com/ant-design/ant-design/pull/44428)
- 🐞 修复 Form `wrapperCol` 配置响应式 `xs` 属性无效的问题。[#44388](https://github.com/ant-design/ant-design/pull/44388)
- 🐞 修复 ColorPicker 中重复 `key` 的问题。[#44370](https://github.com/ant-design/ant-design/pull/44370) [@xr0master](https://github.com/xr0master)
- 🐞 修复 Radio 组件组合 Tree 组件后失效的问题。[#44380](https://github.com/ant-design/ant-design/pull/44380)
- 🐞 修复 Table 组件 `filterDropdown` 不支持 `ref` 时报错的问题。[#44357](https://github.com/ant-design/ant-design/pull/44357)
- 🐞 修复 Form `inline` 布局在校验失败时出现额外空行的问题。[#44360](https://github.com/ant-design/ant-design/pull/44360)
- 🐞 修复 DatePicker 中 `showTime` 为 true 且 `format` 为数组时，组件报错。[#44306](https://github.com/ant-design/ant-design/pull/44306) [@Zian502](https://github.com/Zian502)
- 🐞 修复 Watermark 中 `content` 内容过长时无法完整显示的问题。[#44321](https://github.com/ant-design/ant-design/pull/44321)
- TypeScript
  - 🤖 修复 Dropdown 组件中 `align` 属性的类型错误。[#44423](https://github.com/ant-design/ant-design/pull/44423) [@LeTuongKhanh](https://github.com/LeTuongKhanh)

## 5.8.4

`2023-08-18`

- ColorPicker
  - 🐞 修复 ColorPicker 色值输入框输入小写英文字母时光标跳动的问题。[#44137](https://github.com/ant-design/ant-design/pull/44137) [@gouge666](https://github.com/gouge666)
  - 🐞 修复 ColorPicker 在不同尺寸下样式变形的问题。[#44273](https://github.com/ant-design/ant-design/pull/44273) [@kouchao](https://github.com/kouchao)
- 🐞 修复 Descriptions 抛出 `key is not a prop` 的错误提示。[#44278](https://github.com/ant-design/ant-design/pull/44278) [@RedJue](https://github.com/RedJue)
- 🐞 修复 Pagination `itemRender` 自定义为 `null` 时，仍然渲染节点的问题。[#44226](https://github.com/ant-design/ant-design/pull/44226)
- 🐞 修复 Modal 在 Dropdown `menu.items` 中，展开 Modal 时快速移动鼠标会使 Dropdown 重新打开的问题。[#44204](https://github.com/ant-design/ant-design/pull/44204)
- DatePicker
  - 💄 修复 DatePicker 内容不居中问题。[#44245](https://github.com/ant-design/ant-design/pull/44245) [@Zian502](https://github.com/Zian502)
  - 💄 优化 DatePicker 中范围选择区域样式。[#44206](https://github.com/ant-design/ant-design/pull/44206) [@kiner-tang](https://github.com/kiner-tang)
- 💄 修复移动端点击 Tabs 区域触发颜色改变的问题。[#44200](https://github.com/ant-design/ant-design/pull/44200) [@yilaikesi](https://github.com/yilaikesi)
- RTL
  - 💄 修复了当页面的文字方向为 RTL 时 Badge 里面的数字也是 RTL 的问题。[#43998](https://github.com/ant-design/ant-design/pull/43998) [@NotEvenANeko](https://github.com/NotEvenANeko)

## 5.8.3

`2023-08-11`

- DatePicker
  - 🐞 修复 DatePicker 在 `open` 和 `defaultOpen` 为 `true` 时选中时间不会切换面板的问题。[#44105](https://github.com/ant-design/ant-design/pull/44105) [@Yuiai01](https://github.com/Yuiai01)
  - 🐞 修复 DatePicker 和 RangePicker 禁用 `allowClear` 时仍然展示清除按钮的问题。[#44015](https://github.com/ant-design/ant-design/pull/44015) [@bartpio](https://github.com/bartpio)
- Carousel
  - 🐞 修复 Carousel 不支持 `id` 属性的问题。[#44079](https://github.com/ant-design/ant-design/pull/44079)
  - 💄 修复 Carousel `dots` 切换点有多余 margin 的问题。[#44076](https://github.com/ant-design/ant-design/pull/44076)
- 🐞 修复 Modal 页脚禁用态受 Form 影响的问题。[#43055](https://github.com/ant-design/ant-design/pull/43055) [@Wxh16144](https://github.com/Wxh16144)
- 🐞 修复 Upload gif 缩略图不会动的问题。[#44083](https://github.com/ant-design/ant-design/pull/44083) [@linxianxi](https://github.com/linxianxi)
- 🐞 修复 FloatButton 组件菜单模式不支持 `badge` 配置的问题。[#44109](https://github.com/ant-design/ant-design/pull/44109)
- 🐞 修复 Grid 与 List 响应式布局生效稍晚于首次渲染导致屏幕闪动的问题。[#44075](https://github.com/ant-design/ant-design/pull/44075)
- 🐞 修复 `@ant-design/cssinjs` 版本小于 `1.15.0` 时 Design Token 部分丢失的问题。[#44091](https://github.com/ant-design/ant-design/pull/44091)
- 💄 修复 Badge `status="processing"` 和 `dot` 配合使用时，波纹样式异常的问题。[#44153](https://github.com/ant-design/ant-design/pull/44153)
- 💄 修复 Descriptions 组件自行嵌套时的边框样式问题。[#43454](https://github.com/ant-design/ant-design/pull/43454) [@Yuiai01](https://github.com/Yuiai01)
- 💄 修复 Pagination 上下页切换按钮 `transition` 丢失的问题。[#44030](https://github.com/ant-design/ant-design/pull/44030)
- 💄 修复 Popconfirm 按钮组意外换行的问题。[#44022](https://github.com/ant-design/ant-design/pull/44022) [@MuxinFeng](https://github.com/MuxinFeng)
- 💄 优化 Image 组件预览操作图标的样式。[#44141](https://github.com/ant-design/ant-design/pull/44141)
- 💄 优化 Input 和 InputNumber 在大尺寸下的字体大小。[#44000](https://github.com/ant-design/ant-design/pull/44000) [@MuxinFeng](https://github.com/MuxinFeng)
- 💄 移除 Space 部分未使用的样式。[#44098](https://github.com/ant-design/ant-design/pull/44098)

## 5.8.2

`2023-08-04`

- 🐞 修复 Checkbox 与 Radio 不支持自定义水波纹效果的问题，并添加 `ant-wave-target` className 到对应元素上。[#44014](https://github.com/ant-design/ant-design/pull/44014)
- 🐞 调整 Form.Item renderProps 定义，现在会返回正确的 `FormInstance`。[#43996](https://github.com/ant-design/ant-design/pull/43996)
- 🐞 修复 Table 在 `direction` 为 `rlt` 时展开图标的方向和展开行的缩进有误的问题。[#43977](https://github.com/ant-design/ant-design/pull/43977) [@Yuiai01](https://github.com/Yuiai01)
- 💄 修复 Pagination 组件禁用状态仍然有悬浮和聚焦样式的问题。[#43970](https://github.com/ant-design/ant-design/pull/43970)
- TypeScript
  - 🤖 修正 Drawer 和 Anchor 部分 Design Token 的 TS 描述信息错误的问题。[#43994](https://github.com/ant-design/ant-design/pull/43994) [@wving5](https://github.com/wving5)

## 5.8.1

`2023-08-02`

- 🐞 修复 Select、TreeSelect、Cascader、DatePicker 预期外的 `clearIcon` 废弃报错。[#43945](https://github.com/ant-design/ant-design/pull/43945) [@kiner-tang](https://github.com/kiner-tang)
- TypeScript
  - 🤖 导出 `MappingAlgorithm` 作为 Design Token 主题算法的类型。[#43953](https://github.com/ant-design/ant-design/pull/43953)

## 5.8.0

`2023-08-01`

- 🔥 组件 ComponentToken 支持配置 `algorithm` 参数，添加配置即可像全局 Token 一样由部分修改的 token 计算派生 token 的值并用于组件样式中。[#43810](https://github.com/ant-design/ant-design/pull/43810)
- 🔥 Modal hooks 方法支持 `await` 调用。[#43470](https://github.com/ant-design/ant-design/pull/43470)
- 🔥 ConfigProvider 支持 `wave` 配置以自定义水波纹效果。[#43784](https://github.com/ant-design/ant-design/pull/43784)
- 🆕 Form 新增 `getFieldsValue({ strict: true })` 以支持获取仅通过 Item 绑定的字段。[#43828](https://github.com/ant-design/ant-design/pull/43828)
- 🆕 Descriptions 支持 `items` 属性。[#43483](https://github.com/ant-design/ant-design/pull/43483) [@RedJue](https://github.com/RedJue)
- 🆕 ColorPicker 支持 `disabledAlpha` 属性。[#43355](https://github.com/ant-design/ant-design/pull/43355) [@RedJue](https://github.com/RedJue)
- 🆕 Avatar.Group 支持设置 `shape` 属性。[#43817](https://github.com/ant-design/ant-design/pull/43817) [@li-jia-nan](https://github.com/li-jia-nan)
- 🆕 AutoComplete/Cascader/DatePicker/Input.Textarea/TimePicker/TreeSelect 组件均已支持通过 `allowClear.clearIcon` 属性自定义清除按钮。[#43582](https://github.com/ant-design/ant-design/discussions/43582) [@kiner-tang](https://github.com/kiner-tang)
- 🆕 DatePicker.RangePicker `presets` 属性支持回调函数。[#43476](https://github.com/ant-design/ant-design/pull/43476) [@Wxh16144](https://github.com/Wxh16144)
- 🆕 Image 新增 `preivew={{ movable: Boolean }}` 属性以支持可拖拽到文件夹。[#43823](https://github.com/ant-design/ant-design/pull/43823) [@linxianxi](https://github.com/linxianxi)
- 🆕 Slider `tooltip` 支持配置 `autoAdjustOverflow` 属性。[#43788](https://github.com/ant-design/ant-design/pull/43788)
- 🆕 Transfer 组件新增 `selectionsIcon` 属性以支持自定义下拉菜单图标。[#43773](https://github.com/ant-design/ant-design/pull/43773) [@li-jia-nan](https://github.com/li-jia-nan)
- 🗑 Select、Tree-Select 和 Cascader 组件废弃 `showArrow` 属性，可由 `suffixIcon` 统一配置。[#43520](https://github.com/ant-design/ant-design/pull/43520) [@MuxinFeng](https://github.com/MuxinFeng)
- 🐞 优化 `@ant-design/icons` 导入写法以避免 Tree Shaking 在 Next.js 中失效的问题。[#43915](https://github.com/ant-design/ant-design/pull/43915) [@ssxenon01](https://github.com/ssxenon01)
- 🐞 修复 Anchor 在滚动时无法触发 `getCurrentAnchor` 的问题。[#43916](https://github.com/ant-design/ant-design/pull/43916)
- 🐞 修复 Tooltip hover 时无法在 `disabled` 元素上触发的问题。[#43872](https://github.com/ant-design/ant-design/pull/43872)
- 🐞 修复 ColorPicker 在更改值时未调用 `onChangeComplete` 回调的问题。[#43867](https://github.com/ant-design/ant-design/pull/43867) [@RedJue](https://github.com/RedJue)
- 🐞 修复 `Modal.confirm` 的 `locale` 设置被重置的问题。[#43277](https://github.com/ant-design/ant-design/pull/43277) [@Yuiai01](https://github.com/Yuiai01)
- 🐞 修复 Slider 中描述信息和滑块手柄重叠问题。[#43780](https://github.com/ant-design/ant-design/pull/43780) [@Wxh16144](https://github.com/Wxh16144)
- 🐞 修复 Select 弹出框翻转时动画不正确的问题。[#43764](https://github.com/ant-design/ant-design/pull/43764)
- 🐞 修复 InputNumber 在圆角不同下的样式异常。[#43875](https://github.com/ant-design/ant-design/pull/43875) [@yee94](https://github.com/yee94)
- 💄 `@ant-design/icons` 优化了 CloseCircleFilled / CloseSquareFilled / CloseOutlined / CloseCircleOutlined / CloseSquareOutlined / ExportOutlined / ImportOutlined 等图标的设计。[824500](https://github.com/ant-design/ant-design-icons/commit/824500349894a87562f033dbdc5e3c5d301a2f5c)
- 💄 修复和其他使用 `@ant-design/cssinjs` 的组件库混合使用，antd 的样式总是会插入在最前面，以避免加载顺序导致的样式覆盖问题。[#43847](https://github.com/ant-design/ant-design/pull/43847)
- 💄 优化 message 和 notification 渲染逻辑，现在在 SSR 环境下不会导出样式。[#43808](https://github.com/ant-design/ant-design/pull/43808)
- ⌨️ 修复 Select `aria-activedescendant` 缺少有效值的问题。[#43800](https://github.com/ant-design/ant-design/pull/43800)
- ⌨️ 修复 `Layout.Header` a11y `role` 属性。[#43749](https://github.com/ant-design/ant-design/pull/43749) [@khalibloo](https://github.com/khalibloo)
- TypeScript
  - 🤖 `Form.Item` 支持泛型对 `name` 属性校验。[#43904](https://github.com/ant-design/ant-design/pull/43904) [@crazyair](https://github.com/crazyair)

## 5.7.3

`2023-07-24`

- 🐞 修复 Tour 当 `target` 为 `null` 时弹出位置不居中的问题。[#43694](https://github.com/ant-design/ant-design/pull/43694) [@linxianxi](https://github.com/linxianxi)
- 🐞 修复 Button 丢失部分 `React.ButtonHTMLAttributes` 定义的问题。[#43716](https://github.com/ant-design/ant-design/pull/43716)
- 💄 Watermark 将固定的颜色替换成 Design Token 以适应暗黑主题。[#43754](https://github.com/ant-design/ant-design/pull/43754)
- TypeScript
  - 🤖 Button `ref` 类型优化。[#43703](https://github.com/ant-design/ant-design/pull/43703) [@Negentropy247](https://github.com/Negentropy247)

## 5.7.2

`2023-07-20`

- 💄 修复 Menu 组件悬浮态样式丢失的问题。[#43656](https://github.com/ant-design/ant-design/pull/43656)
- 🐞 修复 Notification 报错 PurePanel 定义未找到的问题。[#43687](https://github.com/ant-design/ant-design/pull/43687) [@li-jia-nan](https://github.com/li-jia-nan)
- 🐞 修复 Button `onClick` 事件丢失 `event` 定义的问题。[#43666](https://github.com/ant-design/ant-design/pull/43666)
- 🐞 修复 Input 和 InputNumber 行内对齐问题。[#43548](https://github.com/ant-design/ant-design/pull/43548) [@bbb169](https://github.com/bbb169)
- 🐞 修复 DatePicker 后缀颜色使用 `token` 不当的问题。[#43646](https://github.com/ant-design/ant-design/pull/43646)
- 🐞 修复 Steps 配置可点击时不能通过键盘操作的问题。[#43644](https://github.com/ant-design/ant-design/pull/43644)
- TypeScript
  - 🤖 移除 Button 无用的 `type="ghost"` 属性定义。[#43675](https://github.com/ant-design/ant-design/pull/43675)

## 5.7.1

`2023-07-19`

- 💄 补全 Menu 主题定制 token。[#43576](https://github.com/ant-design/ant-design/pull/43576)
- 🐞 修复 QRCode 在 Next.js 13 中报错 `Can't resolve 'antd/lib/qr-code'` 的问题。[#43572](https://github.com/ant-design/ant-design/issues/43572)
- 🐞 修复 antd 不支持在 Next.js App Router 中使用的问题，查看[使用文档](/docs/react/use-with-next#使用-nextjs-的-app-router)。[#43573](https://github.com/ant-design/ant-design/pull/43573)
- 🐞 修复 InputNumber 幽灵依赖报错 `Cannot find module 'rc-component/mini-decimal'`。[#43635](https://github.com/ant-design/ant-design/pull/43635)
- 🐞 修复 App.useApp 方式调用 notification 组件时 `placement` 属性不生效的问题。[#43522](https://github.com/ant-design/ant-design/pull/43522) [@Rajil1213](https://github.com/Rajil1213)
- 🐞 修复 Checkbox 同时配置 `checked` 和 `indeterminate` 时没有展示为 `indeterminate` 样式的问题。[#43626](https://github.com/ant-design/ant-design/pull/43626)
- 🐞 修复 Form.Item 设置 `label=""` 时垂直方向对齐偏移的问题。[#43614](https://github.com/ant-design/ant-design/pull/43614)
- 🐞 修复 Pagination 分页选择器弹层抖动的问题。[#43556](https://github.com/ant-design/ant-design/pull/43556)
- 🐞 修复 Button 幽灵按钮禁用状态丢失的问题。[#43558](https://github.com/ant-design/ant-design/pull/43558) [@kiner-tang](https://github.com/kiner-tang)
- 🐞 修复 Tag 仅传入 `icon` 时渲染多余间距的问题。[#43518](https://github.com/ant-design/ant-design/pull/43518) [@Yuiai01](https://github.com/Yuiai01)
- 🐞 修复 ColorPicker 不跟随表单校验状态改变 UI 的问题。[#42880](https://github.com/ant-design/ant-design/pull/42880) [@RedJue](https://github.com/RedJue)
- TypeScript
  - 🤖 修复 Space 的 `SpaceContext` 没有正确导出的问题。[#43501](https://github.com/ant-design/ant-design/pull/43501) [@VovkaGoodwin](https://github.com/VovkaGoodwin)
  - 🤖 优化 AutoComplete 组件 TS 定义实现。[#43581](https://github.com/ant-design/ant-design/pull/43581) [@thinkasany](https://github.com/thinkasany)
  - 🤖 优化 Select 和 List 组件 TS 定义实现。[#43545](https://github.com/ant-design/ant-design/pull/43545) [@thinkasany](https://github.com/thinkasany)
  - 🤖 优化 Button 组件 TS 定义实现。[#43588](https://github.com/ant-design/ant-design/pull/43588) [#43629](https://github.com/ant-design/ant-design/pull/43629) [@thinkasany](https://github.com/thinkasany)
  - 🤖 优化 Cascader、ConfigProvider、DatePicker、InputNumber、Slider 和 Upload 组件 TS 定义实现。[#43610](https://github.com/ant-design/ant-design/pull/43610)

## 5.7.0

`2023-07-11`

- 🆕 ConfigProvider 支持所有组件的 `className` 和 `style` 属性控制。感谢 [@Yuiai01](https://github.com/Yuiai01)、[@li-jia-nan](https://github.com/li-jia-nan) 和 [@MuxinFeng](https://github.com/MuxinFeng) 的贡献。
- 🆕 Badge 支持 `classNames` 属性和 `styles` 属性。[#43245](https://github.com/ant-design/ant-design/pull/43245) [@li-jia-nan](https://github.com/li-jia-nan)
- ColorPicker
  - 🆕 ColorPicker 支持 `showText`。[#42865](https://github.com/ant-design/ant-design/pull/42865) [@RedJue](https://github.com/RedJue)
  - 🆕 ColorPicker 支持 `destroyTooltipOnHide`。[#42645](https://github.com/ant-design/ant-design/pull/42645) [@linxianxi](https://github.com/linxianxi)
  - 🆕 ColorPicker 支持 `onChangeComplete`。[#43370](https://github.com/ant-design/ant-design/pull/43370) [@RedJue](https://github.com/RedJue)
  - 🆕 ColorPicker 支持 `panelRender`。[#43134](https://github.com/ant-design/ant-design/pull/43134) [@RedJue](https://github.com/RedJue)
  - 🆕 ColorPicker 支持 `size`。[#43116](https://github.com/ant-design/ant-design/pull/43116) [@RedJue](https://github.com/RedJue)
- 🆕 Alert、Drawer、Modal、Notification、Tag、Tabs 均已支持通过设置 `closeIcon` 为 null 或 false 隐藏关闭按钮。[#42828](https://github.com/ant-design/ant-design/discussions/42828) [@kiner-tang](https://github.com/kiner-tang)
- 🆕 Anchor 添加 `replace` 属性。[#43006](https://github.com/ant-design/ant-design/pull/43006) [@ds1371dani](https://github.com/ds1371dani)
- 🆕 Image 支持 `imageRender`、`toolbarRender` 属性以支持预览图和工具栏的自定义渲染，还支持了 `onTransform`、`minScale`、`maxScale` 等新属性，Image.PreviewGroup 支持 `items` 属性传入列表数据，并修复了 img 标签的原生属性没有传递给预览图的问题。[#43075](https://github.com/ant-design/ant-design/pull/43075) [@linxianxi](https://github.com/linxianxi)
- 🆕 修改 Image 预览图的布局风格，`preview` 属性支持 `closeIcon`，Image.PreviewGroup 支持 `fallback` 属性，修复加载预览资源提前加载的问题。[#43167](https://github.com/ant-design/ant-design/pull/43167) [@linxianxi](https://github.com/linxianxi)
- 🛠 InputNumber 使用 rc-input 进行重构。[#43000](https://github.com/ant-design/ant-design/pull/43000) [@MuxinFeng](https://github.com/MuxinFeng)
- 🛠 解决 vite、rollup、meteor、microbundle 等构建工具中遇到的循环依赖问题，并增加相关的检测。[#42750](https://github.com/ant-design/ant-design/pull/42750)，感谢 [@jrr997](https://github.com/jrr997)、[@kiner-tang](https://github.com/kiner-tang) 和 [@MuxinFeng](https://github.com/MuxinFeng) 的贡献。
- 🐞 移除 Anchor/CollapsePanel/Input.Group 组件中 `className` 属性的默认值（空字符串）。[#43481](https://github.com/ant-design/ant-design/pull/43481) [@thinkasany](https://github.com/thinkasany)
- 🐞 修复 Upload 上传进度条延迟消失且丢失动画效果的问题。[#43471](https://github.com/ant-design/ant-design/pull/43471)
- 🐞 为 Menu 中组件 Token `colorItemBgSelected` 添加废弃警告。[#43461](https://github.com/ant-design/ant-design/pull/43461)
- 🐞 杂项：修复样式特性支持检测时部分浏览器因为未重绘导致出现滚动条的问题。[#43358](https://github.com/ant-design/ant-design/pull/43358) [@LeeeeeeM](https://github.com/LeeeeeeM)
- 🐞 修复 Card `tabList` 为空时 Tab 完全不展示的问题。[#43416](https://github.com/ant-design/ant-design/pull/43416) [@linxianxi](https://github.com/linxianxi)
- 🐞 修复 ConfigProvider 嵌套使用时，`form.validateMessages` 配置会丢失的问题。[#43239](https://github.com/ant-design/ant-design/pull/43239) [@Wxh16144](https://github.com/Wxh16144)
- 🐞 修复 Tag 点击的水波纹效果有时候会和 Tag 元素产生偏移的问题。[#43402](https://github.com/ant-design/ant-design/pull/43402)
- 🐞 修复 DatePicker 切换到年月面板时，`此刻` 点击无效的问题。[#43367](https://github.com/ant-design/ant-design/pull/43367) [@Yuiai01](https://github.com/Yuiai01)
- 🐞 修复 Input.TextArea 组件在屏幕大小变化时设置的高度失效的问题。[#43169](https://github.com/ant-design/ant-design/pull/43169)
- 💄 Slider 中 `tooltip` 在内容很少时应该居中。[#43430](https://github.com/ant-design/ant-design/pull/43430) [@Jomorx](https://github.com/Jomorx)
- 💄 Design Token 将 `colorLink` 添加至 seed token 中, `colorLinkHover` 和 `colorLinkActive` 将会由 `colorLink` 计算得出。[#43183](https://github.com/ant-design/ant-design/pull/43183)
- 💄 调整 Slider 中部分 token 为 component token。[#42428](https://github.com/ant-design/ant-design/pull/42428) [@heiyu4585](https://github.com/heiyu4585)
- RTL
  - 🤖 Progress 支持 rtl 方向的动画。[#43316](https://github.com/ant-design/ant-design/pull/43316) [@Yuiai01](https://github.com/Yuiai01)
- TypeScript
  - 🤖 Popover 增加 `RawPurePanelProps` 接口描述。[#43453](https://github.com/ant-design/ant-design/pull/43453) [@thinkasany](https://github.com/thinkasany)
  - 🤖 Popconfirm 替换 `ref` 类型 `unknown` 为 `TooltipRef`。[#43452](https://github.com/ant-design/ant-design/pull/43452) [@thinkasany](https://github.com/thinkasany)
  - 🤖 Popover 替换 `ref` 类型 `unknown` 为 `TooltipRef`。[#43450](https://github.com/ant-design/ant-design/pull/43450) [@Negentropy247](https://github.com/Negentropy247)
  - 🤖 改进 Button.ButtonGroup 中 `GroupSizeContext` 的类型声明。[#43439](https://github.com/ant-design/ant-design/pull/43439) [@thinkasany](https://github.com/thinkasany)
  - 🤖 改进 Select 的 `mode` 属性的类型声明。[#43413](https://github.com/ant-design/ant-design/pull/43413) [@thinkasany](https://github.com/thinkasany)
  - 🤖 Checkbox 替换 `ref` 类型 `unknown` 为 `CheckboxRef`。[#43424](https://github.com/ant-design/ant-design/pull/43424) [@li-jia-nan](https://github.com/li-jia-nan)
  - 🤖 改进 Table 内部类型实现。[#43366](https://github.com/ant-design/ant-design/pull/43366) [@li-jia-nan](https://github.com/li-jia-nan)
  - 🤖 改进 Tag 内部类型实现。[#43357](https://github.com/ant-design/ant-design/pull/43357) [@thinkasany](https://github.com/thinkasany)
  - 🤖 改进 Notification 内部类型实现。[#43351](https://github.com/ant-design/ant-design/pull/43351) [@thinkasany](https://github.com/thinkasany)

## 5.6.4

`2023-07-03`

- Form
  - 🐞 修复 Form 在提交时，字段没有配置 `rules` 时仍会错误触发 `onFieldsChange` 事件的问题。[#43290](https://github.com/ant-design/ant-design/pull/43290)
  - 🐞 修复 Form.List 的 `name` 为 0 时误报 `name` 为空的警告信息的问题。[#43199](https://github.com/ant-design/ant-design/pull/43199) [@Yuiai01](https://github.com/Yuiai01)
- 🐞 修复 Badge `color` 属性不生效的问题。[#43304](https://github.com/ant-design/ant-design/pull/43304)
- 🐞 修复 Select 组件的消除图标在 FormItem 设置 `hasFeedback` 时的位置问题。[#43302](https://github.com/ant-design/ant-design/pull/43302) [@tinyfind](https://github.com/tinyfind)
- 🐞 修复 Transfer 分页下拉按钮被隐藏以及 `showSizeChanger` 方法无效。[#41906](https://github.com/ant-design/ant-design/pull/41906) [@Yuiai01](https://github.com/Yuiai01)
- 🐞 修复 Popconfirm 组件 `colorText` 和 `fontSize` 修改无效的问题。[#43212](https://github.com/ant-design/ant-design/pull/43212)
- 🐞 修复 Upload 配置 `maxCount` 后删除文件不会触发 `onChange` 的问题。[#43193](https://github.com/ant-design/ant-design/pull/43193)
- 💄 修复 Button 在有 `link` 或 `href` 属性时禁用样式错误。[#43091](https://github.com/ant-design/ant-design/pull/43091) [@BoyYangzai](https://github.com/BoyYangzai)
- TypeScript
  - 🤖 优化 Breadcrumb `params` 类型，支持泛型。[#43211](https://github.com/ant-design/ant-design/pull/43211)
  - 🤖 优化 Typography `copyIdRef` 类型。[#43257](https://github.com/ant-design/ant-design/pull/43257) [@thinkasany](https://github.com/thinkasany)
  - 🤖 移除 Button `loading` 多余 number 类型。[#43256](https://github.com/ant-design/ant-design/pull/43256) [@thinkasany](https://github.com/thinkasany)
  - 🤖 透传 Cascader `optionType` 泛型。[#43231](https://github.com/ant-design/ant-design/pull/43231) [@ZWkang](https://github.com/ZWkang)

## 5.6.3

`2023-06-25`

- Breadcrumb
  - 🐞 修复 Breadcrumb 传递 `dropdownProps` 不生效的问题。[#43151](https://github.com/ant-design/ant-design/pull/43151) [@linxianxi](https://github.com/linxianxi)
  - 🛠 优化 Breadcrumb 处理 `title` 为 `null` 时的行为。[#43099](https://github.com/ant-design/ant-design/pull/43099) [@Asanio06](https://github.com/Asanio06)
- 🐞 修复 Slider 在 Form 内部时的禁用状态。[#43142](https://github.com/ant-design/ant-design/pull/43142) [@Starpuccino](https://github.com/Starpuccino)
- 🐞 修复 Form 标签偏移值在垂直布局中不生效的问题。[#43155](https://github.com/ant-design/ant-design/pull/43155) [@kiner-tang](https://github.com/kiner-tang)
- 🐞 修复 Table 打开筛选面板会报 `react ref` 错误警告信息。[#43139](https://github.com/ant-design/ant-design/pull/43139)
- 🐞 修复 Transfer 配置 `rowKey` 后无法选中的问题。[#43115](https://github.com/ant-design/ant-design/pull/43115)
- 🐞 修复 Space 与其他组件搭配使用时的 `size` 优先级[#42752](https://github.com/ant-design/ant-design/pull/42752) [@linxianxi](https://github.com/linxianxi)
- 🐞 修复 QRCode 在暗黑模式下的颜色。[#43162](https://github.com/ant-design/ant-design/pull/43162) [@ds1371dani](https://github.com/ds1371dani)
- 💄 修复 Select 选项使用 Badge 和 Tag 时底部存在意外边距的问题。[#43097](https://github.com/ant-design/ant-design/pull/43097) [@Yuiai01](https://github.com/Yuiai01)
- TypeScript
  - 🤖 优化 Button 的 `target` 属性类型定义。[#43129](https://github.com/ant-design/ant-design/pull/43129) [@li-jia-nan](https://github.com/li-jia-nan)
  - 🤖 优化 Progress 的 `size` 属性类型定义以支持百分比值。[#43123](https://github.com/ant-design/ant-design/pull/43123) [@Ali-ovo](https://github.com/Ali-ovo)
  - 🤖 优化 Slider tooltip 的类型定义。[#43094](https://github.com/ant-design/ant-design/pull/43094) [@li-jia-nan](https://github.com/li-jia-nan)

## 5.6.2

`2023-06-19`

- 🐞 修复 Dropdown 配置 `autoFocus` 无效的问题。[#43002](https://github.com/ant-design/ant-design/pull/43002) [@Yuiai01](https://github.com/Yuiai01)
- 🐞 修复 InputNumber 设置 `prefix` 在 Form.Item `hasFeedBack` 内高度异常的问题。[#43049](https://github.com/ant-design/ant-design/pull/43049)
- 💄 修复 Input 和 InputNumber 禁用状态样式。[#42974](https://github.com/ant-design/ant-design/pull/42974) [@kampiu](https://github.com/kampiu)
- 🐞 修复 Upload 配置 `maxCount` 后，上传超出范围的文件仍然会触发 `onChange` 事件的问题。[#43034](https://github.com/ant-design/ant-design/pull/43034)
- 🐞 修复打包时即便没有使用 Form，`rc-field-form` 包仍然会包含它的问题。[#43023](https://github.com/ant-design/ant-design/pull/43023)
- 🐞 修复 DatePicker 动态设置 `disabledTime` 时值不正确的问题。[#42991](https://github.com/ant-design/ant-design/pull/42991) [@linxianxi](https://github.com/linxianxi)
- 📖 补充 FloatButton 受控实例，并添加对应的 warning 提示。[#42835](https://github.com/ant-design/ant-design/pull/42835) [@poyiding](https://github.com/poyiding)
- 🐞 修复 Button 禁用时子节点仍然可以交互的问题。[#42949](https://github.com/ant-design/ant-design/pull/42949) [@kiner-tang](https://github.com/kiner-tang)
- 🐞 Drawer 添加最大宽度以防止在小屏幕下超出的问题。[#42914](https://github.com/ant-design/ant-design/pull/42914) [@amir2mi](https://github.com/amir2mi)
- 🐞 修复 Table 设置 `checkStrictly` 时，`preserveSelectedRowKeys` 无效的问题。[#42784](https://github.com/ant-design/ant-design/pull/42784) [@linxianxi](https://github.com/linxianxi)
- 🐞 修复 Transfer 在动态变更数据时，展示的选中数不同步的问题。[#42785](https://github.com/ant-design/ant-design/pull/42785) [@BoyYangzai](https://github.com/BoyYangzai)
- 🐞 修复 Radio.Button `title` 属性不生效，并补齐对应定义。[#43012](https://github.com/ant-design/ant-design/pull/43012) [@linxianxi](https://github.com/linxianxi)

## 5.6.1

`2023-06-07`

- ColorPicker
  - 🐞 修复 ColorPicker 预设颜色没法选中的问题。[#42882](https://github.com/ant-design/ant-design/pull/42882) [@RedJue](https://github.com/RedJue)
  - 🐞 修复 ColorPicker 组件清除后再点击清除仍然触发 `onChange` 的问题。[#42643](https://github.com/ant-design/ant-design/pull/42643) [@linxianxi](https://github.com/linxianxi)
- 🐞 修复 Collapse 组件废弃警告异常显示问题。[#42876](https://github.com/ant-design/ant-design/pull/42876) [@kiner-tang](https://github.com/kiner-tang)
- TypeScript
  - 🤖 修复 Collapse 组件 `items` 类型应该为可选。[#42877](https://github.com/ant-design/ant-design/pull/42877) [@Dunqing](https://github.com/Dunqing)

## 5.6.0

`2023-06-06`

- 🆕 ColorPicker 添加 `onClear` 属性，清除选中颜色时不自动关闭弹窗。[#42634](https://github.com/ant-design/ant-design/pull/42634) [@linxianxi](https://github.com/linxianxi)
- 🆕 Collapse 支持通过 `items` 属性来配置面板内容。[#42545](https://github.com/ant-design/ant-design/pull/42545) [@kiner-tang](https://github.com/kiner-tang)
- 🆕 Design Token 新增静态方法 `getDesignToken` 用于获取完整的主题 token。[#42723](https://github.com/ant-design/ant-design/pull/42723)
- 🆕 ConfigProvider 支持配置 Space 组件的 `classNames` 和 `styles` 属性。[#42748](https://github.com/ant-design/ant-design/pull/42748) [@RedJue](https://github.com/RedJue)
- 🆕 Space 组件支持 `classNames` 和 `styles` 属性。[#42743](https://github.com/ant-design/ant-design/pull/42743) [@RedJue](https://github.com/RedJue)
- 🆕 Drawer 抽屉面板支持事件监听，包裹元素支持传入 `data-*` 属性。[#42718](https://github.com/ant-design/ant-design/pull/42718) [@kiner-tang](https://github.com/kiner-tang)
- 🆕 ConfigProvider 支持自定义 Button 的 `style` / `className` / `styles` / `classNames`。[#42623](https://github.com/ant-design/ant-design/pull/42623) [@LuZhenJie1999](https://github.com/LuZhenJie1999)
- 🆕 Pagination 的页码选择器可以进行搜索了。[#42608](https://github.com/ant-design/ant-design/pull/42608)
- 🆕 QRCode 支持渲染 svg。[#42570](https://github.com/ant-design/ant-design/pull/42570) [@sy296565890](https://github.com/sy296565890)
- 🆕 Calendar 支持将 `panelMode` 作为选择源类型传递给内部选择触发器回调，以便在调用时使用正确的源类型。[#42459](https://github.com/ant-design/ant-design/pull/42459) [@bombillazo](https://github.com/bombillazo)
- 🆕 Select `fieldNames` 新增 `groupLabel` 字段映射分组标题。[#42492](https://github.com/ant-design/ant-design/pull/42492) [@BoyYangzai](https://github.com/BoyYangzai)
- 🆕 Table 添加对列自定义排序图标的支持。[#42498](https://github.com/ant-design/ant-design/pull/42498) [@sawadyecma](https://github.com/sawadyecma)
- 🆕 DatePicker 支持 `kk:mm` 格式的 `format` 以支持显示 24:00。[#42494](https://github.com/ant-design/ant-design/pull/42494) [@cooljser](https://github.com/cooljser)
- 🆕 ConfigProvider.config 新增 `theme` 支持配置静态方法主题。[#42473](https://github.com/ant-design/ant-design/pull/42473)
- 🆕 Calendar `onSelect` 支持 `info.source` 参数以获取选择来源。[#42432](https://github.com/ant-design/ant-design/pull/42432)
- 💄 优化 ColorPicker 组件在暗黑模式下的样式。[#42827](https://github.com/ant-design/ant-design/pull/42827) [@RedJue](https://github.com/RedJue)
- 💄 修复 Popconfirm、Alert 和 Notification 组件 `colorTextHeading` 和 `colorText` 误用问题。[#42839](https://github.com/ant-design/ant-design/pull/42839)
- 💄 修复 Divider 组件的样式问题。[#42797](https://github.com/ant-design/ant-design/pull/42797) [@kongmingLatern](https://github.com/kongmingLatern)
- 🐞 修复 Image.PreviewGroup 预览时图片切换后状态没有重置的问题。[#42793](https://github.com/ant-design/ant-design/pull/42793) [@linxianxi](https://github.com/linxianxi)
- 🐞 统一使用 `rc-util/lib/pickAttrs` 以节省包体积。修复 Rate 组件在 StrictMode 下 `findDOMNode is deprecated` 警告信息。[#42688](https://github.com/ant-design/ant-design/pull/42688)
- 🐞 Rate 组件支持传入 `id` `data-*` `aria-*` `role` `onMouseEnter` `onMouseLeave` 等属性，修复不支持 Tooltip 包裹的问题。[#42676](https://github.com/ant-design/ant-design/pull/42676)
- 🐞 修复 Menu 组件横向模式下子菜单没有对齐的问题。[#42648](https://github.com/ant-design/ant-design/pull/42648)
- 🐞 将 Card `tabList` 的 API 与 Tab `items` 对齐。[#42413](https://github.com/ant-design/ant-design/pull/42413)
- 🐞 修复循环依赖问题。
  - 🐞 修复 Modal 组件循环依赖问题。[#42841](https://github.com/ant-design/ant-design/pull/42841) [@kiner-tang](https://github.com/kiner-tang)
  - 🐞 修复 Space 组件循环依赖问题。[#42811](https://github.com/ant-design/ant-design/pull/42811) [@kiner-tang](https://github.com/kiner-tang)
  - 🐞 修复 Statistic 组件循环依赖问题。[#42814](https://github.com/ant-design/ant-design/pull/42814) [@kiner-tang](https://github.com/kiner-tang)
  - 🐞 修复 List 组件循环依赖问题。[#42806](https://github.com/ant-design/ant-design/pull/42806) [@kiner-tang](https://github.com/kiner-tang)
  - 🐞 修复 Dropdown 组件循环依赖问题。[#42764](https://github.com/ant-design/ant-design/pull/42764) [@Dunqing](https://github.com/Dunqing)
- ⌨️ 增强 Progress 可访问性表现，添加 `aria` 属性。[#42704](https://github.com/ant-design/ant-design/pull/42704) [@MehmetYararVX](https://github.com/MehmetYararVX)
- ⌨️ Notification 添加 `role` 属性。[#42484](https://github.com/ant-design/ant-design/pull/42484) [@guan404ming](https://github.com/guan404ming)
- 🛠 Collapse 使用 `onKeyDown` 替代 `onKeyPress` 来改变折叠面板的激活状态。[#42592](https://github.com/ant-design/ant-design/pull/42592) [@kiner-tang](https://github.com/kiner-tang)
- 🛠 使用 `@rc-component/trigger` 重构 Menu 组件。移除 `rc-trigger` 依赖，缩小打包体积。[#42554](https://github.com/ant-design/ant-design/pull/42554)
- 🛠 Table 组件将 `sorterOrder` 重命名为 `sortOrder` 用于 `sortIcon` 的参数。[#42519](https://github.com/ant-design/ant-design/pull/42519) [@sawadyecma](https://github.com/sawadyecma)
- 组件 Token 迁移，更多详情请查看文档：[迁移 less 变量](/docs/react/migrate-less-variables-cn)
  - 🛠 使用新的命名标准重命名 Menu 组件 token。[#42848](https://github.com/ant-design/ant-design/pull/42848)
  - 🛠 迁移 Radio 组件 less 变量。[#42050](https://github.com/ant-design/ant-design/pull/42050) [@Yuiai01](https://github.com/Yuiai01)
  - 🛠 迁移 Image 组件 less 变量。[#42048](https://github.com/ant-design/ant-design/pull/42048) [@guan404ming](https://github.com/guan404ming)
  - 🛠 迁移 Tooltip 组件 less 变量。[#42046](https://github.com/ant-design/ant-design/pull/42046) [@guan404ming](https://github.com/guan404ming)
  - 🛠 迁移 Transfer 组件 less 变量。[#42431](https://github.com/ant-design/ant-design/pull/42431) [@heiyu4585](https://github.com/heiyu4585)
  - 🛠 迁移 Tabs 组件 less 变量。[#42186](https://github.com/ant-design/ant-design/pull/42186) [@heiyu4585](https://github.com/heiyu4585)
  - 🛠 迁移 Card 组件 less 变量。[#42061](https://github.com/ant-design/ant-design/pull/42061) [@heiyu4585](https://github.com/heiyu4585)
  - 🛠 迁移 Mentions 组件 less 变量。[#42711](https://github.com/ant-design/ant-design/pull/42711) [@heiyu4585](https://github.com/heiyu4585)
  - 🛠 迁移 Avatar 组件 less 变量。[#42063](https://github.com/ant-design/ant-design/pull/42063) [@heiyu4585](https://github.com/heiyu4585)
  - 🛠 迁移 Pagination 组件 less 变量。[#42330](https://github.com/ant-design/ant-design/pull/42330) [@heiyu4585](https://github.com/heiyu4585)
  - 🛠 迁移 Popover 组件 less 变量。[#42337](https://github.com/ant-design/ant-design/pull/42337) [@heiyu4585](https://github.com/heiyu4585)
  - 🛠 迁移 Tag 组件 less 变量。[#42053](https://github.com/ant-design/ant-design/pull/42053) [@heiyu4585](https://github.com/heiyu4585)
  - 🛠 迁移 List 组件 less 变量。[#42041](https://github.com/ant-design/ant-design/pull/42041) [@jrr997](https://github.com/jrr997)
  - 🛠 迁移 Dropdown 组件 less 变量。[#42258](https://github.com/ant-design/ant-design/pull/42258) [@poyiding](https://github.com/poyiding)
  - 🛠 迁移 Timeline 组件 less 变量。[#42491](https://github.com/ant-design/ant-design/pull/42491) [@jrr997](https://github.com/jrr997)
  - 🛠 迁移 Anchor 组件 less 变量。[#42141](https://github.com/ant-design/ant-design/pull/42141) [@MuxinFeng](https://github.com/MuxinFeng)
  - 🛠 迁移 Carousel 组件 less 变量。[#42157](https://github.com/ant-design/ant-design/pull/42157) [@MuxinFeng](https://github.com/MuxinFeng)
  - 🛠 迁移 Upload 组件 less 变量。[#42042](https://github.com/ant-design/ant-design/pull/42042) [@jrr997](https://github.com/jrr997)
  - 🛠 迁移 Typography 组件 less 变量。[#42442](https://github.com/ant-design/ant-design/pull/42442) [@jrr997](https://github.com/jrr997)
  - 🛠 迁移 Segmented 组件 less 变量。[#42136](https://github.com/ant-design/ant-design/pull/42136) [@kiner-tang](https://github.com/kiner-tang)
  - 🛠 迁移 Checkbox 组件 less 变量。[#42097](https://github.com/ant-design/ant-design/pull/42097) [@poyiding](https://github.com/poyiding)
  - 🛠 迁移 Skeleton 组件 less 变量。[#42134](https://github.com/ant-design/ant-design/pull/42134) [@kiner-tang](https://github.com/kiner-tang)
  - 🛠 迁移 Breadcrumb 组件 less 变量。[#42342](https://github.com/ant-design/ant-design/pull/42342) [@heiyu4585](https://github.com/heiyu4585)
  - 🛠 迁移 Calendar 组件 less 变量。[#42194](https://github.com/ant-design/ant-design/pull/42194) [@MuxinFeng](https://github.com/MuxinFeng)
  - 🛠 迁移 Rate 组件 less 变量。[#42135](https://github.com/ant-design/ant-design/pull/42135) [@MuxinFeng](https://github.com/MuxinFeng)
  - 🛠 迁移 Descriptions 组件 less 变量。[#42038](https://github.com/ant-design/ant-design/pull/42038) [@jrr997](https://github.com/jrr997)

## 5.5.2

`2023-05-30`

- 🐞 修复 ColorPicker 组件悬停边界问题。[#42669](https://github.com/ant-design/ant-design/pull/42669) [@RedJue](https://github.com/RedJue)
- 🐞 修复 Menu 组件 `overflowedIndicatorClassName` 覆盖了原本的 class 的问题。[#42692](https://github.com/ant-design/ant-design/pull/42692)
- 🐞 修复 Select 组件在某些情况下显示乱码问题。[#42651](https://github.com/ant-design/ant-design/pull/42651) [@895433995](https://github.com/895433995)
- 🐞 修复 Card 组件，当 Image 设置 `cover` 属性时，悬停蒙版没有圆角属性，导致 UI 异常。[#42642](https://github.com/ant-design/ant-design/pull/42642) [@iNeedToCopy](https://github.com/iNeedToCopy)
- 🐞 修复 Checkbox 和 label 不对齐的问题。[#42590](https://github.com/ant-design/ant-design/pull/42590)
- 🐞 修复使用 ConfigProvider 会导致未使用的 Form 组件也被打包的问题。[#42604](https://github.com/ant-design/ant-design/pull/42604)
- 🐞 修复 InputNumber 和其他组件无法基线对齐的问题。[#42580](https://github.com/ant-design/ant-design/pull/42580)
- 🐞 修复 Badge 组件中旋转的 `icon` 动画。[#42575](https://github.com/ant-design/ant-design/pull/42575)
- 📦 优化 Form `setFieldsValue` 相关代码以降低打包尺寸。[#42635](https://github.com/ant-design/ant-design/pull/42635)
- 💄 优化 Image 组件预览组样式。[#42675](https://github.com/ant-design/ant-design/pull/42675) [@kiner-tang](https://github.com/kiner-tang)
- 💄 修复 Tag 无边框样式在 `error` 等状态下不生效的问题。[#42619](https://github.com/ant-design/ant-design/pull/42619) [@li-jia-nan](https://github.com/li-jia-nan)
- 💄 修复 Table `rowSpan` 悬浮高亮背景颜色丢失的问题。[#42572](https://github.com/ant-design/ant-design/pull/42572)
- 💄 修复 Pagination 在禁用状态下 link 图标和 ellipsis hover 时的样式。[#42541](https://github.com/ant-design/ant-design/pull/42541) [@qmhc](https://github.com/qmhc)
- 💄 修复部分全局 Design Token 无法覆盖组件样式的问题。[#42535](https://github.com/ant-design/ant-design/pull/42535)
- 🇱🇹 为 `lt_LT` 添加缺失的部分文案。[#42664](https://github.com/ant-design/ant-design/pull/42664) [@Digital-512](https://github.com/Digital-512)
- RTL
  - 💄 修复 ColorPicker 组件 RTL 模式样式。[#42716](https://github.com/ant-design/ant-design/pull/42716) [@RedJue](https://github.com/RedJue)
  - 💄 修复 Anchor RTL 模式下轨道的位置。[#42706](https://github.com/ant-design/ant-design/pull/42706) [@qmhc](https://github.com/qmhc)

## 5.5.1

`2023-05-22`

- 🐞 修复 Button 组件 icon 尺寸和间距问题。[#42516](https://github.com/ant-design/ant-design/pull/42516)
- 🐞 修复 Select 移除和选中按钮不居中的问题。[#42513](https://github.com/ant-design/ant-design/pull/42513)
- 🐞 重构 Popconfirm DOM 结构以解决 `icon={null}` 时 `title` 和 `description` 的多余 margin 问题。[#42433](https://github.com/ant-design/ant-design/pull/42433)
- 🐞 修复 Menu 图标在 `itemMarginInline` 为 0 时不居中的问题。[#42426](https://github.com/ant-design/ant-design/pull/42426) [@zzwgh](https://github.com/zzwgh)
- 🐞 修复 Tag 被 Tooltip 包裹时，hover 会导致 `font-size` 错误的问题。[#42414](https://github.com/ant-design/ant-design/pull/42414)
- 🐞 修复 Popconfirm 的 `onVisibleChange` 会重复触发的问题。[#42393](https://github.com/ant-design/ant-design/pull/42393)
- 🐞 调整 Tooltip 和 Popover 展示逻辑，现在会优先保证不会被 `overflow: hidden` 裁剪，其次保证尽可能在可见屏幕范围内展示。[#42394](https://github.com/ant-design/ant-design/pull/42394)
- ColorPicker
  - 🐞 优化 ColorPicker `allowClear` 交互逻辑，重新打开面板选择颜色会默认 100% 透明度，而不是 0%。[#42439](https://github.com/ant-design/ant-design/pull/42439) [@RedJue](https://github.com/RedJue)
  - 🐞 优化 ColorPicker 交互，点击清除按钮时隐藏面板。[#42406](https://github.com/ant-design/ant-design/pull/42406) [@kiner-tang](https://github.com/kiner-tang)
- 💄 修改 Table 筛选下拉菜单的圆角。[#42451](https://github.com/ant-design/ant-design/pull/42451) [@Yuiai01](https://github.com/Yuiai01)
- 🛠 全局移除 `rc-util/lib/Dom/addEventListener` 引入的 `addEventListener` 方法，用原生代替。[#42464](https://github.com/ant-design/ant-design/pull/42464) [@li-jia-nan](https://github.com/li-jia-nan)
- 🛠 优化 @ant-design/icons 的 bundle 体积大小。修复 TwoTone 类的图标色为 5.0 的新主色。[#42443](https://github.com/ant-design/ant-design/pull/42443)
- 🌐 添加 `mn_MN` 中缺失的翻译。[#42512](https://github.com/ant-design/ant-design/pull/42512) [@ariunbatb](https://github.com/ariunbatb)
- RTL
  - 💄 修复 Select `direction` 为 `rtl` 时 scrollbar 的位置。[#42508](https://github.com/ant-design/ant-design/pull/42508) [@BoyYangzai](https://github.com/BoyYangzai)
- TypeScript
  - 🤖 优化 Slider ref 类型，移除 `unknown` 和 `any` 类型，用 `SliderRef` 代替。[#42420](https://github.com/ant-design/ant-design/pull/42420) [@li-jia-nan](https://github.com/li-jia-nan)

## 5.5.0

`2023-05-15`

- 🔥 新增颜色选择器组件 ColorPicker。[#41990](https://github.com/ant-design/ant-design/pull/41990) [@RedJue](https://github.com/RedJue)
- 🆕 新增 `DatePicker.generateCalendar` 与 `Calendar.generateCalendar` 自定义日期库组件方法，不再需要通过路径引入使用。[#41773](https://github.com/ant-design/ant-design/pull/41773)
- 💄 优化 Select、TreeSelect、Cascader 多选模式下的样式，去除标签的边框。[#41480](https://github.com/ant-design/ant-design/pull/41480)
- 🆕 Form `validateFields` 支持 `validateOnly` 配置仅做校验而不改变 UI 状态。[#42273](https://github.com/ant-design/ant-design/pull/42273)
- 🆕 DatePicker 支持 `changeOnBlur` 以允许不点击确认按钮，在失去焦点时也能触发 change 事件。[#42168](https://github.com/ant-design/ant-design/pull/42168)
- 🆕 Cascader `options` 支持 `disableCheckbox` 在多选时禁用勾选框。[#42024](https://github.com/ant-design/ant-design/pull/42024) [@BoyYangzai](https://github.com/BoyYangzai)
- 🆕 Popconfirm 新增 `onPopupClick` 属性。[#42272](https://github.com/ant-design/ant-design/pull/42272) [@bolosea](https://github.com/bolosea)
- 🆕 QRCode 新增 `bgColor` 属性设置背景色。[#42214](https://github.com/ant-design/ant-design/pull/42214) [@bolosea](https://github.com/bolosea)
- 🆕 Table.Summary.Row 组件增加 `onClick` 属性。[#42175](https://github.com/ant-design/ant-design/pull/42175) [@Ylg12345](https://github.com/Ylg12345)
- 🆕 Space 新增支持 ref。[#42266](https://github.com/ant-design/ant-design/pull/42266) [@RedJue](https://github.com/RedJue)
- 🆕 Tab 新增默认继承 Card 的 `size`。[#42183](https://github.com/ant-design/ant-design/pull/42183) [@huangkairan](https://github.com/huangkairan)
- ConfigProvider
  - 🐞 修复 ConfigProvider `size` 对 Pagination 无效的问题。[#42206](https://github.com/ant-design/ant-design/pull/42206)
  - 🐞 修复 ConfigProvider `size` 对 Steps 无效的问题。[#42278](https://github.com/ant-design/ant-design/pull/42278) [@wanghui2021](https://github.com/wanghui2021)
  - 🐞 修复 ConfigProvider `size` 对 Descriptions 无效的问题。[#42244](https://github.com/ant-design/ant-design/pull/42244) [@wanghui2021](https://github.com/wanghui2021)
  - 🐞 修复当 ConfigProvider 中 `componentSize` 被设定时 Space.Compact 没有继承的问题。[#42199](https://github.com/ant-design/ant-design/pull/42199) [@Ec-tracker](https://github.com/Ec-tracker)
- 🐞 修复 Input 在 Space.Compact 下使用图标的样式错误。[#42167](https://github.com/ant-design/ant-design/pull/42167) [@pengyw97](https://github.com/pengyw97)
- 🐞 修复 Popover 当 `title` 和 `content` 属性均为空值时，展示空白气泡的问题。[#42217](https://github.com/ant-design/ant-design/pull/42217) [@hairgc](https://github.com/hairgc)
- 🐞 修复 Circle Progress 未设置 `size` 的报错问题。[#41875](https://github.com/ant-design/ant-design/pull/41875) [@notzheng](https://github.com/notzheng)
- 🐞 修复 Progress 抛出的警告 `findDOMNode is deprecated in StrictMode`。[#42241](https://github.com/ant-design/ant-design/pull/42241) [@BoyYangzai](https://github.com/BoyYangzai)
- 💄 修复 InputNumber 超出范围样式不生效的问题。[#42250](https://github.com/ant-design/ant-design/pull/42250) [@pengyw97](https://github.com/pengyw97)
- 💄 修复 Divider 在垂直方向虚线样式被覆盖导致无法正常显示的问题。[#40418](https://github.com/ant-design/ant-design/pull/40418) [@buqiyuan](https://github.com/buqiyuan)
- 💄 调整 Tooltip 动画，现在弹出位置会动态从箭头方向弹出。[#42225](https://github.com/ant-design/ant-design/pull/42225)
- 💄 调整 Checkbox.Group 样式风格与 v4 保持一致。[#42103](https://github.com/ant-design/ant-design/pull/42103) [@BoyYangzai](https://github.com/BoyYangzai)
- 💄 完善 Menu 溢出时样式。[#42294](https://github.com/ant-design/ant-design/pull/42294) [@dhalenok](https://github.com/dhalenok)
- 💄 完善 Segmented 鼠标 active 样式。[#42249](https://github.com/ant-design/ant-design/pull/42249)
- 🤖 Spin 添加在非嵌套下使用 `tip` 的警告提示。[#42293](https://github.com/ant-design/ant-design/pull/42293)
- 🤖 组件 ComponentToken 名称规范化。[#42184](https://github.com/ant-design/ant-design/pull/42184)
- TypeScript
  - 🤖 完善 Tag 的类型定义。[#42235](https://github.com/ant-design/ant-design/pull/42235) [@gaoqiiii](https://github.com/gaoqiiii)
  - 🤖 完善 Notification `getContainer` 类型定义。[#40206](https://github.com/ant-design/ant-design/pull/40206) [@leshalv](https://github.com/leshalv)
  - 🤖 改进了 Menu 组件对 MenuItemType 和 MenuItemProps 泛型的支持。[#42240](https://github.com/ant-design/ant-design/pull/42240) [@yangyuanxx](https://github.com/yangyuanxx)
- 国际化
  - 🇧🇬 补充 bg_BG Form 文案。[#42203](https://github.com/ant-design/ant-design/pull/42203) [@tangzixuan](https://github.com/tangzixuan)

## 5.4.7

`2023-05-06`

- 🐞 修复 Menu.Item 与 Submenu 之间间距不统一的问题。[#42160](https://github.com/ant-design/ant-design/pull/42160)
- 🐞 修复 Breadcrumb 使用 `itemRender` 并且配置 `path` 时，渲染元素会额外包一层 a 元素的问题。[#42049](https://github.com/ant-design/ant-design/pull/42049)
- 🐞 修复 Transfer 在受控模式下报 React 状态嵌套更新错误信息。[#42033](https://github.com/ant-design/ant-design/pull/42033)
- 🐞 修复 Upload 禁用状态的逻辑。[#42102](https://github.com/ant-design/ant-design/pull/42102) [@Wxh16144](https://github.com/Wxh16144)
- 💄 修复 Spin 与其 icon 子元素高度不一致的问题。[#42162](https://github.com/ant-design/ant-design/pull/42162) [@cheapCoder](https://github.com/cheapCoder)
- ⚡️ 优化 Affix 组件在无需更新时计算逻辑。[#42015](https://github.com/ant-design/ant-design/pull/42015) [@Simon-He95](https://github.com/Simon-He95)
- ⚡️ 优化 Anchor 组件在无需跳转时计算逻辑。[#42018](https://github.com/ant-design/ant-design/pull/42018) [@Simon-He95](https://github.com/Simon-He95)

## 5.4.6

`2023-04-26`

- 🐞 修复 Table 一系列边框和圆角的样式细节问题。[#41985](https://github.com/ant-design/ant-design/pull/41985)
- 💄 修复 Layout.Sider 折叠时丢失动画的问题。[#41993](https://github.com/ant-design/ant-design/pull/41993)
- 🐞 修复 InputNumber 字体样式错误。[#41983](https://github.com/ant-design/ant-design/pull/41983)
- 🐞 修复响应式 Col `colSize` 不支持 `flex` 的问题。[#41962](https://github.com/ant-design/ant-design/pull/41962) [@AlexisSniffer](https://github.com/AlexisSniffer)
- 🐞 修复 Carousel `goTo` 在动画播放时无效的问题。[#41969](https://github.com/ant-design/ant-design/pull/41969) [@guan404ming](https://github.com/guan404ming)
- Form
  - 🐞 修复 Form 触发重置事件后反馈图标未重置的问题。[#41976](https://github.com/ant-design/ant-design/pull/41976)
  - 🐞 修复 Form `onValuesChange` 收集到的数据不准确的问题。[#41976](https://github.com/ant-design/ant-design/pull/41976)
- TypeScript
  - 🤖 修复 Menu 报错 OverrideContext 类型定义不存在的问题。[#41907](https://github.com/ant-design/ant-design/pull/41907)
  - 🤖 修复 TreeSelect 定义不支持 `aria-*` 的问题。[#41978](https://github.com/ant-design/ant-design/pull/41978) [@guan404ming](https://github.com/guan404ming)

## 5.4.5

`2023-04-23`

- 🐞 修复 Anchor 组件 `onChange` 方法改变后不触发的问题。[#41934](https://github.com/ant-design/ant-design/pull/41934) [@Yuiai01](https://github.com/Yuiai01)
- 🐞 修复 InputNumber 组件样式被浏览器原生样式覆盖的问题。[#41940](https://github.com/ant-design/ant-design/pull/41940) [@Wxh16144](https://github.com/Wxh16144)
- Tree
  - 🐞 修复 Tree 组件可拖拽树文本换行时其标题不对齐。[#41928](https://github.com/ant-design/ant-design/pull/41928) [@Yuiai01](https://github.com/Yuiai01)
  - 🐞 修复 Checkbox 组件标题没有对齐的问题。[#41920](https://github.com/ant-design/ant-design/pull/41920) [@Yuiai01](https://github.com/Yuiai01)
- 🛠 Switch 升级 `rc-switch` 以修复重复引入 `@babel/runtime/helpers` 的问题，减小打包体积。[#41954](https://github.com/ant-design/ant-design/pull/41954)

## 5.4.4

`2023-04-20`

- 💄 修复 Message hooks 的图标样式不跟随动态主题 token 切换的问题。[#41899](https://github.com/ant-design/ant-design/pull/41899)
- 🐞 修复 `@ant-design/cssinjs` 中 CSS 属性值为 `undefined` 时 cssinjs 报错的问题。[#41896](https://github.com/ant-design/ant-design/pull/41896)

## 5.4.3

`2023-04-19`

- 🐞 修复 FloatButton 警告: findDOMNode is deprecated in StrictMode.。[#41833](https://github.com/ant-design/ant-design/pull/41833) [@fourcels](https://github.com/fourcels)
- 🐞 杂项：箭头元素兼容旧版本不支持 `clip-path: path()` 的浏览器。[#41872](https://github.com/ant-design/ant-design/pull/41872)
- 🐞 修复 Layout.Sider 切换主题时存在背景切换延迟的问题。[#41828](https://github.com/ant-design/ant-design/pull/41828)
- 🐞 修复 Tour 的 `type="primary"` 时箭头的颜色仍为白色的问题。[#41761](https://github.com/ant-design/ant-design/pull/41761)
- 🐞 优化 Form 字段绑定，现在会忽略在 Form.Item 内的注释不再作为子组件进行绑定。[#41771](https://github.com/ant-design/ant-design/pull/41771)
- 🐞 修复 Input.Password 在 Edge 中会额外展示切换按钮的问题。[#41759](https://github.com/ant-design/ant-design/pull/41759)
- 💄 修复 Space.Compact 包裹底层为 Tooltip 组件的组件时的样式问题。[#41707](https://github.com/ant-design/ant-design/pull/41707) [@foryuki](https://github.com/foryuki)
- 🇩🇪 修复德语本地化文案。[#41780](https://github.com/ant-design/ant-design/pull/41780) [@aaarichter](https://github.com/aaarichter)
- TypeScript
  - 🤖 完善 Modal 的类型定义。[#41742](https://github.com/ant-design/ant-design/pull/41742) [@MuxinFeng](https://github.com/MuxinFeng)

## 5.4.2

`2023-04-11`

- 🐞 修复 DatePicker 组件异常显示废弃警告的问题。[#41753](https://github.com/ant-design/ant-design/pull/41753) [@kiner-tang](https://github.com/kiner-tang)
- 🇩🇪 补充 `de_DE` 遗漏的国际化。[#41747](https://github.com/ant-design/ant-design/pull/41747) [@eldarcodes](https://github.com/eldarcodes)
- TypeScript
  - 🤖 优化 TimePicker `hourStep` 的类型。[1fc3675](https://github.com/ant-design/ant-design/commit/1fc3675) [@Wuxh](https://github.com/Wuxh)

## 5.4.1

`2023-04-11`

- 💄 优化类 Select 组件弹窗逻辑（如 Select、TreeSelect、Cascader），现在总是会尝试优先在可视区域展示以减少用户额外滚动成本。[#41619](https://github.com/ant-design/ant-design/pull/41619)
- 💄 去除 Badge.Ribbon 里固定的高度。[#41661](https://github.com/ant-design/ant-design/pull/41661) [@MuxinFeng](https://github.com/MuxinFeng)
- 🐞 修复 Select 在搜索时宽度变为 `0px` 的问题。[#41722](https://github.com/ant-design/ant-design/pull/41722)
- 🐞 修复 Empty 空数据组件在宽度不够的容器内样式错位的问题。[#41727](https://github.com/ant-design/ant-design/pull/41727)
- 🐞 改进 Form.Item `noStyle` 验证消息显隐逻辑。[#41698](https://github.com/ant-design/ant-design/pull/41698) [@Wxh16144](https://github.com/Wxh16144)
- 🐞 修正 Form.Item 不应支持设置 `requiredMark` 的问题。[#41725](https://github.com/ant-design/ant-design/pull/41725) [@Wxh16144](https://github.com/Wxh16144)
- 🐞 修复 Space 影响父元素字体大小和样式的问题。[#40326](https://github.com/ant-design/ant-design/pull/40326)
- 🐞 修复 Pagination 简洁模式中的上一页下一页按钮 hover 样式丢失的问题。[#41685](https://github.com/ant-design/ant-design/pull/41685)
- 🐞 修复 Tree `switcherIcon` 无法隐藏。[#41708](https://github.com/ant-design/ant-design/pull/41708) [@acyza](https://github.com/acyza)
- 🐞 修复 `List.Item.Meta` 的 `avatar` 和 `title` 不对齐的问题。[#41688](https://github.com/ant-design/ant-design/pull/41688) [@Yuiai01](https://github.com/Yuiai01)
- 🐞 修复 Row 的 `justify` 设置为 `space-evenly` 无效。[#41679](https://github.com/ant-design/ant-design/pull/41679) [@Yuiai01](https://github.com/Yuiai01)
- 🐞 修复 Button 类型定义不支持 `data-*` 属性的问题。[#41650](https://github.com/ant-design/ant-design/pull/41650)
- 🐞 修复 Table `rowSelection.selections` 有值时选择列宽度不够的问题。[#41626](https://github.com/ant-design/ant-design/pull/41626)
- 🐞 修复 Mentions 弹层样式。[#41660](https://github.com/ant-design/ant-design/pull/41660)
- 🐞 改进 Form.Item 关于 `require` 的判断逻辑。[#41623](https://github.com/ant-design/ant-design/pull/41623) [@Wxh16144](https://github.com/Wxh16144)
- 国际化
  - 🇹🇭 添加 Tour、Image 和 QRCode 泰语语言环境。[#41697](https://github.com/ant-design/ant-design/pull/41697) [@buildingwatsize](https://github.com/buildingwatsize)

## 5.4.0

`2023-04-03`

- 🗑 移除 `antd/es/locale-provider` `antd/lib/locale-provider` 目录，LocaleProvider 已在 4.x 版本移除，使用 ConfigProvider 作为替代。[#41289](https://github.com/ant-design/ant-design/pull/41289) [@li-jia-nan](https://github.com/li-jia-nan)
- 🆕 DatePicker 等时间类组件可以定制 luxon 作为日期库。[#41580](https://github.com/ant-design/ant-design/pull/41580) [@hihuz](https://github.com/hihuz)
- 🆕 新增 Form.Item.useStatus 以支持获取错误状态信息。[#41554](https://github.com/ant-design/ant-design/pull/41554) [@Yuiai01](https://github.com/Yuiai01)
- 🆕 Input 和 Input.TextArea 组件支持 `classNames` 和 `styles` 属性，用于更细粒度的样式自定义。[#41493](https://github.com/ant-design/ant-design/pull/41493)
- 🆕 Tag 新增无边框模式。[#41305](https://github.com/ant-design/ant-design/pull/41305) [@li-jia-nan](https://github.com/li-jia-nan)
- 🆕 FloatButton 支持用 `badge` 属性开启角标功能。[#41040](https://github.com/ant-design/ant-design/pull/41040) [@li-jia-nan](https://github.com/li-jia-nan)
- 🆕 Select 支持 `title` 属性以便覆盖一些自带的 title 提示。[#41280](https://github.com/ant-design/ant-design/pull/41280)
- 🆕 Image 组件支持设置 `preview.rootClassName`。[#41265](https://github.com/ant-design/ant-design/pull/41265) [@Yuiai01](https://github.com/Yuiai01)
- 🆕 Modal 组件支持 `afterOpenChange` 属性。[#41253](https://github.com/ant-design/ant-design/pull/41253) [@MuxinFeng](https://github.com/MuxinFeng)
- 🆕 Form.useWatch 新增 `preserve` 参数，支持在 Form.Item 未注册的情况下 `setFieldValue` 时触发监听。[#41191](https://github.com/ant-design/ant-design/pull/41191) [@li-jia-nan](https://github.com/li-jia-nan)
- 🛠 使用 `useMemo` 重构部分组件代码。[#41533](https://github.com/ant-design/ant-design/pull/41533) [#41550](https://github.com/ant-design/ant-design/pull/41550) [@li-jia-nan](https://github.com/li-jia-nan)
- 🛠 使用 React hooks 重构 Checkbox，并优化了 TS 定义。[#41117](https://github.com/ant-design/ant-design/pull/41117)
- 🛠 重构 Input.TextArea 文字计数实现方式，移至 `affixWrapper` 元素中。[#41450](https://github.com/ant-design/ant-design/pull/41450)
- 🆕 DatePicker/Calendar 组件新增 `cellRender` 用于自定义日期单元格，同时在 DatePicker 中废弃 `dateRender` 和 `monthRender` 等属性，在 Calendar 中废弃 `dateCellRender`、`monthCellRender`、`dateFullCellRender`、`monthFullCellRender` 等属性。[#41584](https://github.com/ant-design/ant-design/pull/41584) [@kiner-tang](https://github.com/kiner-tang)
- 🐞 修复 Tour 出现两个箭头的问题。[#41578](https://github.com/ant-design/ant-design/pull/41578) [@acyza](https://github.com/acyza)
- 🐞 修复 Checkbox 配置 `controlHeight` token 时勾选框与文字不对齐的问题。[#41566](https://github.com/ant-design/ant-design/pull/41566)
- 🐞 修复 Form.Item 存在 `help` 值时在 Modal 中没有正确渲染元素。[#40519](https://github.com/ant-design/ant-design/pull/40519) [@Yuiai01](https://github.com/Yuiai01)
- 🐞 修复 Form 使用 `hasFeedback` 时表单状态不对的问题。[#41594](https://github.com/ant-design/ant-design/pull/41594) [@Yuiai01](https://github.com/Yuiai01)
- 🐞 修复 Slider 组件显示 `Warning: [antd: Tooltip] forcePopupAlign is align to forceAlign instead` 警告信息的问题。[#41540](https://github.com/ant-design/ant-design/pull/41540) [@MuxinFeng](https://github.com/MuxinFeng)
- 🐞 修复可选择 Table 的勾选框在边缘点击的时候无法触发勾选的问题。[#41519](https://github.com/ant-design/ant-design/pull/41519)
- 国际化
  - 🇩🇪 更新 TimePicker 德语本地化文案。[#41521](https://github.com/ant-design/ant-design/pull/41521) [@Yuiai01](https://github.com/Yuiai01)
  - 🇻🇳 修复越南语本地化文案。[#41320](https://github.com/ant-design/ant-design/pull/41320) [@trongtai37](https://github.com/trongtai37) [#41345](https://github.com/ant-design/ant-design/pull/41345) [@duypham90](https://github.com/duypham90)
  - 🇲🇲 添加缅甸语本地化文案。[#41366](https://github.com/ant-design/ant-design/pull/41366) [@enson0131](https://github.com/enson0131)

## 5.3.3

`2023-03-28`

- Menu
  - 🐞 修复 Menu `items` 没有使用传入的 `key` 的问题。[#41434](https://github.com/ant-design/ant-design/pull/41434) [@Yuiai01](https://github.com/Yuiai01)
  - 🐞 修复 Menu 使用 `getPopupContainer` 选择主菜单时子菜单主题被覆盖。[#41465](https://github.com/ant-design/ant-design/pull/41465) [@Yuiai01](https://github.com/Yuiai01)
- 🐞 修复 Table 过滤器未保持状态当筛选下拉框展示时。[#41445](https://github.com/ant-design/ant-design/pull/41445) [@ablakey](https://github.com/ablakey)
- 🐞 修复 Modal 使用 `useModal` 未透传并优先选择用户设定。[#41422](https://github.com/ant-design/ant-design/pull/41422) [@luo3house](https://github.com/luo3house)
- Form
  - 🐞 修复 Form 验证状态不按照顺序改变的问题。[#41412](https://github.com/ant-design/ant-design/pull/41412) [@kiner-tang](https://github.com/kiner-tang)
  - 💄 修复 Form 组件 `layout="inline"` 时组件标题与表单项布局异常换行问题。[#41140](https://github.com/ant-design/ant-design/pull/41140) [@itkui](https://github.com/itkui)
- 💄 修复 ConfigProvider `nonce` 对 CSS-in-JS 样式不生效的问题。[#41482](https://github.com/ant-design/ant-design/pull/41482)
- 💄 修复 Pagination `size=small` 时，分页按钮 active、上一页下一页按钮 hover 和 active 样式丢失。[#41462](https://github.com/ant-design/ant-design/pull/41462) [#41458](https://github.com/ant-design/ant-design/pull/41458)
- 💄 修复 Tabs 组件下边框与其他边框叠加的样式问题。[#41381](https://github.com/ant-design/ant-design/pull/41381)
- 💄 修复 Dropdown.Button down 图标尺寸问题。[#41501](https://github.com/ant-design/ant-design/pull/41501)
- TypeScript
  - 🐞 修复 Breadcrumb.Item `menu` 类型定义不正确的问题。[#41373](https://github.com/ant-design/ant-design/pull/41373)
  - 🤖 优化 Grid Col 类型提示。[#41453](https://github.com/ant-design/ant-design/pull/41453) [@vaakian](https://github.com/vaakian)
  - 🤖 优化 Table `resetPagination` 类型提示。[#41415](https://github.com/ant-design/ant-design/pull/41415)
  - 🤖 优化 TreeSelect `InternalTreeSelect` 类型提示。[#41386](https://github.com/ant-design/ant-design/pull/41386) [@Andarist](https://github.com/Andarist)
- 国际化
  - 🇮🇷 完善 DatePicker `fa_IR` 翻译。[#41455](https://github.com/ant-design/ant-design/pull/41455) [@ds1371dani](https://github.com/ds1371dani)
  - 🇸🇪 完善 `sv_SE` 语言缺失内容。[#41424](https://github.com/ant-design/ant-design/pull/41424) [@dhalenok](https://github.com/dhalenok)

## 5.3.2

`2023-03-20`

- Anchor
  - 💄 修复 Anchor 组件设置为水平方向时多余的 border 样式。[#41336](https://github.com/ant-design/ant-design/pull/41336) [@gooyoung](https://github.com/gooyoung)
  - 💄 修复 Anchor 处于 `vertical` 方向时 ink 小方块的样式。[#41317](https://github.com/ant-design/ant-design/pull/41317) [@acyza](https://github.com/acyza)
- 🐞 修复 Grid 在不同设备屏幕下的 `offset` 设置不会被覆盖的问题。[#41309](https://github.com/ant-design/ant-design/pull/41309) [@Yuiai01](https://github.com/Yuiai01)
- 🐞 修复 Breadcrumb `onClick` 不工作的问题。[#41283](https://github.com/ant-design/ant-design/pull/41283) [@acyza](https://github.com/acyza)
- 🐞 修复 Upload 在上传完毕后 Progress 组件抛出警告的问题。[#41234](https://github.com/ant-design/ant-design/pull/41234) [@kiner-tang](https://github.com/kiner-tang)
- 🐞 修复 Table 在拖动元素一直右移时布局错误的问题。[#41139](https://github.com/ant-design/ant-design/pull/41139) [@hoho2017](https://github.com/hoho2017)
- 💄 修复 Tabs 在深色模式下更多图标的色值。[#41313](https://github.com/ant-design/ant-design/pull/41313) [@PhosphorusP](https://github.com/PhosphorusP)
- 💄 修复 Button 下拉时聚焦轮廓被其他元素遮挡的问题。[#41282](https://github.com/ant-design/ant-design/pull/41282) [@Yuiai01](https://github.com/Yuiai01)
- 💄 修复 Input.TextArea 在 focus 状态下的样式问题。[#41228](https://github.com/ant-design/ant-design/pull/41228) [@MuxinFeng](https://github.com/MuxinFeng)

- RTL
  - 💄 修复 Input.TextArea 在启用 `showCount` 时 RTL 模式下位置不正确的问题。[#41319](https://github.com/ant-design/ant-design/pull/41319) [@ds1371dani](https://github.com/ds1371dani)
- TypeScript
  - 🤖 导出 Statistic 的 `CountdownProps` 类型。[#41341](https://github.com/ant-design/ant-design/pull/41341) [@li-jia-nan](https://github.com/li-jia-nan)
  - 🤖 优化 Design Token 的类型提示和说明。[#41297](https://github.com/ant-design/ant-design/pull/41297) [@arvinxx](https://github.com/arvinxx)
  - 🤖 优化 Badge `React.forwardRef` 类型定义。[#41189](https://github.com/ant-design/ant-design/pull/41189) [@li-jia-nan](https://github.com/li-jia-nan)

## 5.3.1

`2023-03-13`

- 🐞 更新 DatePicker 底层依赖，修复 Safari 下卡顿，支持 `transform scale` 下对齐。[#41090](https://github.com/ant-design/ant-design/pull/41090)
- 🐞 修复 Menu 收缩时，Tooltip 有时会弹出的问题。[#41081](https://github.com/ant-design/ant-design/issues/41081)
- 🐞 修复 Modal.confirm 窗体有额外节点导致高度不正确的问题。[#41173](https://github.com/ant-design/ant-design/pull/41173) [@Svudec](https://github.com/Svudec)
- 🐞 修复 InputNumber `disabled` 时字体高亮不正确的问题。[#41167](https://github.com/ant-design/ant-design/pull/41167) [@Yuiai01](https://github.com/Yuiai01)
- 🐞 修复 Anchor 动态添加 `items` 后高亮失效问题。[#40743](https://github.com/ant-design/ant-design/pull/40743) [@zqran](https://github.com/zqran)
- 🛠 更新 Mentions 底层依赖，支持 `transform scale` 下对齐。[#41160](https://github.com/ant-design/ant-design/pull/41160) [@MuxinFeng](https://github.com/MuxinFeng)
- 🐞 修复 Form 手动调用 `validateFields` 时，`hasFeedback` 对成功态不生效的问题。[#41116](https://github.com/ant-design/ant-design/pull/41116) [@kiner-tang](https://github.com/kiner-tang)
- 🐞 修复 Cascader 在悬浮至叶子节点时，展开面板没有关闭的问题。[#41134](https://github.com/ant-design/ant-design/issues/41134)
- 🐞 修复 Popconfirm 使用 `Promise` 关闭时再次打开仍然是 `loading` 状态的问题。[#41121](https://github.com/ant-design/ant-design/pull/41121)
- 🐞 修复 Upload 在 React 18 下 `onChange` 有时数据不正确的问题。[#41082](https://github.com/ant-design/ant-design/pull/41082) [@li-jia-nan](https://github.com/li-jia-nan)
- 🛎 补充官网中没有切换到 Space.Compact 的遗留示例，并且添加相应警告。[#41080](https://github.com/ant-design/ant-design/pull/41080) [@Yuiai01](https://github.com/Yuiai01)
- 🌐 更新韩语国际化，添加国际化阿姆哈拉语。[#41103](https://github.com/ant-design/ant-design/pull/41103) [@li-jia-nan](https://github.com/li-jia-nan)

## 5.3.0

`2023-03-06`

- 🆕 Tooltip 组件新增 `arrow.pointAtCenter`， 废弃 `arrow.arrowPointAtCenter`。[#40989](https://github.com/ant-design/ant-design/pull/40989)
- 🆕 Progress 组件支持自定义 `size`。[#40903](https://github.com/ant-design/ant-design/pull/40903) [@kiner-tang](https://github.com/kiner-tang)
- 🆕 Tour 组件支持自定义 `zIndex`。[#40982](https://github.com/ant-design/ant-design/pull/40982) [@kiner-tang](https://github.com/kiner-tang)
- 🆕 Table `onHeaderCell` 支持自定义 `colSpan` 和 `rowSpan`。[#40885](https://github.com/ant-design/ant-design/pull/40885)
- 🆕 Image.Group 支持 `onChange` 回调。[#40857](https://github.com/ant-design/ant-design/pull/40857) [@kiner-tang](https://github.com/kiner-tang)
- App
  - 🆕 App 支持自定义 `style`。[#40708](https://github.com/ant-design/ant-design/pull/40708) [@li-jia-nan](https://github.com/li-jia-nan)
  - 🆕 App 提供预先配置 `message`、`notification` 的选项。[#40458](https://github.com/ant-design/ant-design/pull/40458) [@luo3house](https://github.com/luo3house)
- 🆕 ConfigProvider 新增 `useConfig` 以获取上下文中的 `size` 和 `disabled`。[#40215](https://github.com/ant-design/ant-design/pull/40215) [@xliez](https://github.com/xliez)
- 🆕 Breadcrumb 支持 `items` 数据驱动。[#40543](https://github.com/ant-design/ant-design/pull/40543) [@heiyu4585](https://github.com/heiyu4585)
- 🛠 Breadcrumb 分隔符统一为 `li` 元素。[#40887](https://github.com/ant-design/ant-design/pull/40887) [@heiyu4585](https://github.com/heiyu4585)
- 🛠 Tooltip 现在自动调整自身以及箭头位置以更好的展示。同时废弃 `destroyTooltipOnHide.keepParent`，现在总是会自动销毁不需要的容器。[#40632](https://github.com/ant-design/ant-design/pull/40632)
- 🛠 重命名 token 中的预设颜色，如 `blue-1` 变为 `blue1`，废弃原有的 token。[#41071](https://github.com/ant-design/ant-design/pull/41071)
- 💄 Message 组件使用 `colorText` 优化样式。[#41047](https://github.com/ant-design/ant-design/pull/41047) [@Yuiai01](https://github.com/Yuiai01)
- 💄 修复 Select, TreeSelect, Cascader 父元素存在 `transform: scale` 样式时的对齐问题。[#41013](https://github.com/ant-design/ant-design/pull/41013)
- 💄 优化 Table 中 `rowScope` 的样式。[#40304](https://github.com/ant-design/ant-design/pull/40304) [@Yuiai01](https://github.com/Yuiai01)
- 💄 Design Token 为组件聚焦时的 `outline` 提供新的 AliasToken `lineWidthFocus`。[#40840](https://github.com/ant-design/ant-design/pull/40840)
- 💄 DatePicker.WeekPicker 支持鼠标悬浮样式。[#40772](https://github.com/ant-design/ant-design/pull/40772)
- 💄 调整 Select, TreeSelect, Cascader 在多选时总是默认显示下拉箭头。[#41028](https://github.com/ant-design/ant-design/pull/41028)
- 🐞 修复 Form 组件 `Form.Item.useStatus` 导致的服务端渲染问题。[#40977](https://github.com/ant-design/ant-design/pull/40977) [@AndyBoat](https://github.com/AndyBoat)
- 🐞 杂项：修复部分组件箭头形状问题。[#40971](https://github.com/ant-design/ant-design/pull/40971)
- 🐞 修复 Layout 报错 "React does not recognize the `suffixCls` prop on a DOM element" 的问题。[#40969](https://github.com/ant-design/ant-design/pull/40969)
- 🐞 修复 Watermark 组件图片加载异常时的问题，默认展示文字。[#40770](https://github.com/ant-design/ant-design/pull/40770) [@OriginRing](https://github.com/OriginRing)
- 🐞 Image 预览新增图片翻转功能。并修复 Image `fallback` 在 ssr 下失效的问题。[#40660](https://github.com/ant-design/ant-design/pull/40660)
- 🐞 修复 Select 中使用 Typography 不居中的问题。[#40422](https://github.com/ant-design/ant-design/pull/40422) [@Yuiai01](https://github.com/Yuiai01)
- 🌐 完善 Form 的 `vi_VN` 语言包。[#40992](https://github.com/ant-design/ant-design/pull/40992) [@lamvananh](https://github.com/lamvananh)
- RTL
  - 💄 修复 FloatButton 不支持 `rtl` 模式的问题。[#40990](https://github.com/ant-design/ant-design/pull/40990) [@li-jia-nan](https://github.com/li-jia-nan)
- TypeScript
  - 🤖 修复 Cascader 泛型为非必传。[#40961](https://github.com/ant-design/ant-design/pull/40961) [@crazyair](https://github.com/crazyair)

## 5.2.3

`2023-02-27`

- 🐞 修复 Progress 同时设置 percent 和 success.percent 时，进度文本不会随着 percent 改变而改变。[#40922](https://github.com/ant-design/ant-design/pull/40922)
- 🐞 修复 Image 预览图标不对齐的问题。[#40911](https://github.com/ant-design/ant-design/pull/40911)
- 🐞 修复 ConfigProvider 组件表单校验消息生效顺序。[#40533](https://github.com/ant-design/ant-design/pull/40533) [@Wxh16144](https://github.com/Wxh16144)
- 🐞 修复 Confirm Modal `onOk` 可能触发两次的问题。[#40719](https://github.com/ant-design/ant-design/pull/40719) [@Rafael-Martins](https://github.com/Rafael-Martins)
- 🛠 重写 `useLocale` 方法，对外暴露 `localeCode`。[#40884](https://github.com/ant-design/ant-design/pull/40884) [@li-jia-nan](https://github.com/li-jia-nan)
- 🐞 修复 Segmented 组件子项不响应鼠标事件的问题。[#40894](https://github.com/ant-design/ant-design/pull/40894)
- 🛠 重构：使用 `useLocale` 替换 LocaleReceiver 组件，并删除 LocaleReceiver 组件。[#40870](https://github.com/ant-design/ant-design/pull/40870) [@li-jia-nan](https://github.com/li-jia-nan)
- 🐞 修复 ConfigProvider 注入的 `getPopupContainer` 属性 不生效的问题。[#40871](https://github.com/ant-design/ant-design/pull/40871) [@RedJue](https://github.com/RedJue)
- 🐞 修复 Descriptions 不接受 `data-*` 和 `aria-*` 等属性的问题。[#40859](https://github.com/ant-design/ant-design/pull/40859) [@goveo](https://github.com/goveo)
- 🛠 修改 Breadcrumb 的 Separator dom 由 `span` 改为 `li`。[#40867](https://github.com/ant-design/ant-design/pull/40867) [@heiyu4585](https://github.com/heiyu4585)
- 💄 Design Token 修改组件聚焦下的 `outline` 为默认 `4px`。[#40839](https://github.com/ant-design/ant-design/pull/40839)
- 🐞 修复 Layout.Header 单独使用时，`Layout.colorBgHeader` token 配置不生效的问题。[#40933](https://github.com/ant-design/ant-design/pull/40933)
- 🐞 修复 Badge 颜色显示异常问题。[#40848](https://github.com/ant-design/ant-design/pull/40848) [@kiner-tang](https://github.com/kiner-tang)
- 🐞 修复 Timeline 的子项的 `className` 错误。[#40835](https://github.com/ant-design/ant-design/pull/40835) [@Yuiai01](https://github.com/Yuiai01)
- 💄 修复 Rate 在禁用状态下的交互样式。[#40836](https://github.com/ant-design/ant-design/pull/40836) [@Yuiai01](https://github.com/Yuiai01)
- 🇮🇷 增加了伊朗本地化。[#40895](https://github.com/ant-design/ant-design/pull/40895) [@majidsadr](https://github.com/majidsadr)

## 5.2.2

`2023-02-19`

- DatePicker
  - 💄 调整 DatePicker 组件日期面板的间距样式。[#40768](https://github.com/ant-design/ant-design/pull/40768)
  - 🐞 修复 DatePicker.RangePicker `hover` 日期错位的问题。[#40785](https://github.com/ant-design/ant-design/pull/40785) [@Yuiai01](https://github.com/Yuiai01)
- Form
  - 🐞 修复 Form 下 Radio/Checkbox 的 disabled 优先级问题。[#40741](https://github.com/ant-design/ant-design/pull/40741) [@Yuiai01](https://github.com/Yuiai01)
  - 🐞 修复 Form 为 `disabled` 时 Checkbox 和 Radio 表现不一致的问题。[#40728](https://github.com/ant-design/ant-design/pull/40728) [@Yuiai01](https://github.com/Yuiai01)
- 🐞 修复 List 启用 `grid` 时下额外 `padding` 样式。[#40806](https://github.com/ant-design/ant-design/pull/40806)
- 🐞 修复 Upload 操作图标不对齐的问题。[#40805](https://github.com/ant-design/ant-design/pull/40805)
- 💄 调整 Table 筛选菜单的底部圆角样式。[#40802](https://github.com/ant-design/ant-design/pull/40802)
- 🐞 修复 Button 组件 `loading.delay` 第一次不生效的问题。[#40759](https://github.com/ant-design/ant-design/pull/40759) [@RedJue](https://github.com/RedJue)
- 🐞 修复 Input `addonAfter` 和 `addonBefore` 的各种状态样式。[#40744](https://github.com/ant-design/ant-design/pull/40744) [@carla-cn](https://github.com/carla-cn)
- 🐞 修复 Skeleton 在 Safari 下 `active` 效果闪烁的问题。[#40692](https://github.com/ant-design/ant-design/pull/40692) [@slotDumpling](https://github.com/slotDumpling)
- 国际化
  - 🇫🇷 补充 Tour 法语本地化文案。[#40750](https://github.com/ant-design/ant-design/pull/40750) [@RedJue](https://github.com/RedJue)
  - 🇰🇷 更新韩国本地化文案。[#40716](https://github.com/ant-design/ant-design/pull/40716) [@owjs3901](https://github.com/owjs3901)

## 5.2.1

`2023-02-13`

- 🛠 重构 Tour 中 `panelRender` 为函数式组件。[#40670](https://github.com/ant-design/ant-design/pull/40670) [@li-jia-nan](https://github.com/li-jia-nan)
- 🐞 修复 Timeline 中 `className` 传给子节点的问题。[#40700](https://github.com/ant-design/ant-design/pull/40700) [@any1024](https://github.com/any1024)
- 🐞 修复 Slider 中的标记点在边缘无法点击的问题。[#40679](https://github.com/ant-design/ant-design/pull/40679) [@LongHaoo](https://github.com/LongHaoo)
- 🐞 修复 Tour 不支持 `0` 作为节点的问题。[#40631](https://github.com/ant-design/ant-design/pull/40631) [@li-jia-nan](https://github.com/li-jia-nan)
- 💄 修复 DatePicker.RangePicker 的 hover 范围样式。[#40607](https://github.com/ant-design/ant-design/pull/40607) [@Yuiai01](https://github.com/Yuiai01)
- 💄 优化 Steps 组件自定义 `icon` 的大小。[#40672](https://github.com/ant-design/ant-design/pull/40672)
- TypeScript
  - 🤖 Upload 组件支持泛型。[#40634](https://github.com/ant-design/ant-design/pull/40634) [@riyadelberkawy](https://github.com/riyadelberkawy)
- 🌐 国际化
  - 🇷🇺/🇺🇦 补全 `ru_RU` 和 `uk_UA` 文案。[#40656](https://github.com/ant-design/ant-design/pull/40656) [@eldarcodes](https://github.com/eldarcodes)

## 5.2.0

`2023-02-08`

- 🔥 Upload 的 `listType` 属性添加 `picture-circle` 支持。[#40134](https://github.com/ant-design/ant-design/pull/40134) [@ds1371dani](https://github.com/ds1371dani)
- 🔥 Anchor 组件新增 `direction` 属性，支持 vertical。[#39372](https://github.com/ant-design/ant-design/pull/39372) [@foryuki](https://github.com/foryuki)
- 🆕 Tooltip 新增 `arrow` 属性用来改变箭头的显示状态和箭头是否指向目标元素的中心。[#40234](https://github.com/ant-design/ant-design/pull/40234) [@kiner-tang](https://github.com/kiner-tang)
- 🆕 List 分页新增 `align` 配置。[#39858](https://github.com/ant-design/ant-design/pull/39858) [@Yuiai01](https://github.com/Yuiai01)
- 🆕 Timeline 新增 `items` 支持选项配置。[#40424](https://github.com/ant-design/ant-design/pull/40424)
- Collapse
  - 🆕 Collapse 新增支持设置 `size`。[#40286](https://github.com/ant-design/ant-design/pull/40286) [@Yuiai01](https://github.com/Yuiai01)
  - 🆕 为 Collapse 和 Panel 添加 ref。[#40443](https://github.com/ant-design/ant-design/pull/40443) [@any1024](https://github.com/any1024)
- Slider
  - 🆕 Slider 新增 `railStyle` 属性用于自定义样式。[#40579](https://github.com/ant-design/ant-design/pull/40579) [@david-cord](https://github.com/david-cord)
  - 🆕 Slider 新增 `keyboard` 属性以支持禁用键盘事件。[#40526](https://github.com/ant-design/ant-design/pull/40526)
  - 🐞 修复 Slider 展示 Tooltip 时动画丢失的问题。[#39857](https://github.com/ant-design/ant-design/pull/39857)
- Dropdown
  - 🆕 Dropdown 组件支持 `autoAdjustOverflow` 属性。[#39735](https://github.com/ant-design/ant-design/pull/39735)
  - 💄 修复 Dropdown `danger` 和 `disable` 属性同时使用样式问题。[#39904](https://github.com/ant-design/ant-design/pull/39904) [@Wxh16144](https://github.com/Wxh16144)
- Tour
  - 🆕 Tour 新增 `indicatorsRender` 支持自定义指示器。[#40613](https://github.com/ant-design/ant-design/pull/40613)
  - 🆕 Tour 支持通过 `scrollIntoViewOptions` 改变`scrollIntoView` 的选项。[#39980](https://github.com/ant-design/ant-design/pull/39980) [@kiner-tang](https://github.com/kiner-tang)
  - 🆕 Tour 遮罩支持传递自定义样式和填充颜色。[#39919](https://github.com/ant-design/ant-design/pull/39919) [@kiner-tang](https://github.com/kiner-tang)
  - 🐞 修复 Tour 在严格模式下调用 `findDomNode` 抛出警告问题。[#40160](https://github.com/ant-design/ant-design/pull/40160) [@kiner-tang](https://github.com/kiner-tang)
  - 💄 优化 Tour 样式，删除了最后一个指示器的 margin。[#40624](https://github.com/ant-design/ant-design/pull/40624)
- 🆕 新增 Design token `fontFamilyCode` 并应用到 Typography 的 `code` `kbd` `pre` 等元素上。[#39823](https://github.com/ant-design/ant-design/pull/39823)
- 🆕 ConfigProvider 新增 Form `scrollToFirstError`。[#39509](https://github.com/ant-design/ant-design/pull/39509) [@linxianxi](https://github.com/linxianxi)
- 🆕 Global: 为全部组件补足 `rootClassName` 属性。[#40217](https://github.com/ant-design/ant-design/pull/40217)
- 🐞 修复 Empty 在默认主题和暗黑主题下的描述文字颜色。[#40584](https://github.com/ant-design/ant-design/pull/40584) [@MuxinFeng](https://github.com/MuxinFeng)
- Table
  - 🐞 修复 Table 行 `aria-label` 和 `role="presentation"` 无法一起使用的问题。[#40413](https://github.com/ant-design/ant-design/pull/40413) [@Ke1sy](https://github.com/Ke1sy)
  - 🐞 修复 Table 修改非受控 `filtered` 修改不生效的问题。[#39883](https://github.com/ant-design/ant-design/pull/39883)
  - 🐞 修复 Table 表头过滤器在分组标题情况下失效的问题。[#40463](https://github.com/ant-design/ant-design/pull/40463) [@roman40a](https://github.com/roman40a)
  - 🐞 修复 Table 选择列固定时滚动会被其他单元格遮盖的问题。[#39940](https://github.com/ant-design/ant-design/pull/39940) [@kiner-tang](https://github.com/kiner-tang)
  - 🐞 修复 Table 排序/筛选的表格的固定列背景色透明导致显示异常问题。[#39012](https://github.com/ant-design/ant-design/pull/39012) [@kiner-tang](https://github.com/kiner-tang)
  - 💄 优化 Table 组件 hover 样式，修复边框异常问题。[#40469](https://github.com/ant-design/ant-design/pull/40469)
- DatePicker
  - 🐞 修复 DatePicker 组件禁用时状态样式生效的问题。[#40608](https://github.com/ant-design/ant-design/pull/40608)
  - 💄 优化 DatePicker 输入框样式。[#40549](https://github.com/ant-design/ant-design/pull/40549) [@Wxh16144](https://github.com/Wxh16144)
  - 💄 优化 DatePicker Dropdown 箭头样式。[#40521](https://github.com/ant-design/ant-design/pull/40521)
- 🐞 修复 Space `ant-space-item` 选择器错误。[#40554](https://github.com/ant-design/ant-design/pull/40554) [@cncolder](https://github.com/cncolder)
- 🐞 修复 Spin 当设置 `delay` 时，没有立即关闭的问题。[#40475](https://github.com/ant-design/ant-design/pull/40475) [@3Alan](https://github.com/3Alan)
- 🐞 修复 Modal `useModal` 默认确认按钮文本逻辑。[#39884](https://github.com/ant-design/ant-design/pull/39884) [@BoyYangzai](https://github.com/BoyYangzai)
- 🛠 重构水波纹视效，以支持多个水波纹同时触发了。[#39705](https://github.com/ant-design/ant-design/pull/39705) [@li-jia-nan](https://github.com/li-jia-nan)
- 🛠 重构 Input.TextArea 组件和 Mentions 组件。[#40045](https://github.com/ant-design/ant-design/pull/40045)
- 🛠 重构 Affix Calendar 使用 React.createRef 代替函数。[#40538](https://github.com/ant-design/ant-design/pull/40538) [@li-jia-nan](https://github.com/li-jia-nan)
- 💄 修复 Tabs 更多按钮高度样式错误。[#40488](https://github.com/ant-design/ant-design/pull/40488)
- 💄 修复 Image 预览样式会被 TailwindCSS 影响的问题。[#39914](https://github.com/ant-design/ant-design/pull/39914)
- 💄 修复 Progress 成功进度条 `transition` 样式丢失问题。[#40487](https://github.com/ant-design/ant-design/pull/40487)
- 💄 修复 Input.Group 在 windows 下缩放屏幕时的错位问题。[#39842](https://github.com/ant-design/ant-design/pull/39842) [@heiyu4585](https://github.com/heiyu4585)
- 💄 修复 Select placeholder 样式问题。[#40477](https://github.com/ant-design/ant-design/pull/40477) [@Wxh16144](https://github.com/Wxh16144)
- 💄 调整 Descriptions 标签样式使其更容易区分。[#40085](https://github.com/ant-design/ant-design/pull/40085)
- 💄 优化 QRCode 过期显示样式。[#39849](https://github.com/ant-design/ant-design/pull/39849)
- 💄 Design Token 优化 `boxShadow` token 分级。[#40516](https://github.com/ant-design/ant-design/pull/40516)
- TypeScript
  - 🤖 优化 Badge Tag Tooltip `color` 类型定义。[#39871](https://github.com/ant-design/ant-design/pull/39871)
  - 🤖 杂项：新增 `Breakpoint` `ThemeConfig` `GlobalToken` 类型导出。[#40508](https://github.com/ant-design/ant-design/pull/40508) [@Kamahl19](https://github.com/Kamahl19)
  - 🤖 更新 Upload `fileList` 类型。[#40585](https://github.com/ant-design/ant-design/pull/40585)
  - 🤖 移除 Tour ForwardRefRenderFunction。[#39924](https://github.com/ant-design/ant-design/pull/39924)
- 🌐 国际化
  - 🇮🇳 补全 `ta_IN` 文案。[#39936](https://github.com/ant-design/ant-design/pull/39936) [@KIRUBASHANKAR26](https://github.com/KIRUBASHANKAR26)

## 5.1.7

`2023-01-31`

- Input
  - 🐞 修复 Input 组件 `type="search"` 时未隐藏浏览器原生取消按钮的问题。[#40457](https://github.com/ant-design/ant-design/pull/40457)
  - 🐞 修复 Input 的 suffix 颜色不随组件状态改变的问题。[#40344](https://github.com/ant-design/ant-design/pull/40344) [@Yuiai01](https://github.com/Yuiai01)
- 🐞 修复 Switch 在 Safari 和 Chrome <= 84 兼容模式下文本的显示问题。[#40453](https://github.com/ant-design/ant-design/pull/40453) [@Ifeinstein](https://github.com/Ifeinstein)
- 🐞 修复 Progress 的 `percent` 属性设置为 `null` 时报错的问题。[#40378](https://github.com/ant-design/ant-design/pull/40378) [@li-jia-nan](https://github.com/li-jia-nan)
- 🐞 修复 List 中 title 和 avatar 渲染错位的问题。[#40395](https://github.com/ant-design/ant-design/pull/40395) [@li-jia-nan](https://github.com/li-jia-nan)
- 🐞 修复 Dropdown 子菜单位置不正确的问题。[#40349](https://github.com/ant-design/ant-design/pull/40349)
- 🐞 修复 Badge 在 StrictMode 下切换 `dot` 时会报 `findDOMNode` 警告的问题。[#40347](https://github.com/ant-design/ant-design/pull/40347)
- 🐞 修复 Message 图标颜色错误的问题。[#40471](https://github.com/ant-design/ant-design/pull/40471) [@Wxh16144](https://github.com/Wxh16144)
- 💄 优化 Empty 在暗色主题下默认的颜色。[#40447](https://github.com/ant-design/ant-design/pull/40447)
- RTL
  - 💄 修复 Table 在 RTL 模式下的滚动阴影。[#40441](https://github.com/ant-design/ant-design/pull/40441) [@ds1371dani](https://github.com/ds1371dani)
- TypeScript
  - 🤖 导出 ConfigProvider 组件的 ThemeConfig 类型。[#40370](https://github.com/ant-design/ant-design/pull/40370) [@Kamahl19](https://github.com/Kamahl19)

## 5.1.6

`2023-01-20`

- 🐞 修复 DatePicker 等组件动画 timing function 错误的问题。[#40133](https://github.com/ant-design/ant-design/pull/40133)
- Menu
  - 🐞 修复 Menu 收缩时，Tooltip 偶尔会错误展示的问题。[#40328](https://github.com/ant-design/ant-design/pull/40328)
  - 🐞 修复 Menu 分割线样式错误。[#40268](https://github.com/ant-design/ant-design/pull/40268) [@Wxh16144](https://github.com/Wxh16144)
- 🐞 修复带波纹效果的组件（如 Button、Switch、Tag）在波纹展示前移除时，控制台报错的问题。[#40307](https://github.com/ant-design/ant-design/pull/40307) [@luo3house](https://github.com/luo3house)
- 🐞 修复 Breadcrumb 组件使用 `menu` 属性，但是出现 overlay deprecation 警告的问题。[#40211](https://github.com/ant-design/ant-design/pull/40211) [@candy4290](https://github.com/candy4290)
- 🐞 修复 Modal.useModal `destroyAll` 不工作的问题。[#40281](https://github.com/ant-design/ant-design/pull/40281) [@ds1371dani](https://github.com/ds1371dani)
- 🐞 修复 `message` 组件通过 `config` 设置 `duration` 无效问题。[#40232](https://github.com/ant-design/ant-design/pull/40232) [@Yuiai01](https://github.com/Yuiai01)
- 🐞 修复 Button 包含 `a` 标签时的 文本颜色不正确的问题。[#40269](https://github.com/ant-design/ant-design/pull/40269) [@ds1371dani](https://github.com/ds1371dani)
- 🐞 修复 Radio 在 `disabled` 时显示错误的文本颜色和光标。[#40273](https://github.com/ant-design/ant-design/pull/40273) [@ds1371dani](https://github.com/ds1371dani)
- 💄 Design Token 优化 focus `outline` 计算逻辑，替换 `lineWidth` 为 `lineWidthBold`。[#40291](https://github.com/ant-design/ant-design/pull/40291) [@simonpfish](https://github.com/simonpfish)
- 💄 杂项：重写部分组件样式以兼容部分对 `:not` 支持不完全的旧版浏览器。[#40264](https://github.com/ant-design/ant-design/pull/40264)
- 🌐 修复 `pt_BR` 缺失的国际化。[#40270](https://github.com/ant-design/ant-design/pull/40270) [@rafaelncarvalho](https://github.com/rafaelncarvalho)

## 5.1.5

`2023-01-15`

- 🐞 修复 Checkbox 组件 label 不对齐的问题。[#40208](https://github.com/ant-design/ant-design/pull/40208)
- 🐞 修复 Button 水波纹效果有时会使得布局抖动的问题。[#40192](https://github.com/ant-design/ant-design/pull/40192)
- 🐞 修复 Select 组件会卡住的问题。[#40158](https://github.com/ant-design/ant-design/pull/40158) [@helloqian12138](https://github.com/helloqian12138)
- 🐞 修复 Timeline 组件自定义颜色显示错误类名和对齐溢出的问题。[#39394](https://github.com/ant-design/ant-design/pull/39394) [@Wxh16144](https://github.com/Wxh16144)
- 🐞 修复 Breadcrumb 最后一项颜色。[#40119](https://github.com/ant-design/ant-design/pull/40119) [@messaooudi](https://github.com/messaooudi)
- 💄 修复 Table 固定表头阴影样式错误。[#40171](https://github.com/ant-design/ant-design/pull/40171) [@Wxh16144](https://github.com/Wxh16144)
- 💄 修复 Segmented hover 时圆角和选中圆角不一致的问题。[#40175](https://github.com/ant-design/ant-design/pull/40175) [#40179](https://github.com/ant-design/ant-design/pull/40179)
- TypeScript
  - 🤖 修复 Tabs 组件 `onEdit` 类型问题。[#39926](https://github.com/ant-design/ant-design/pull/39926) [@RSS1102](https://github.com/RSS1102)
- RTL
  - 💄 优化 DatePicker 在 RTL 模式下 next 和 prev 图标。[#40238](https://github.com/ant-design/ant-design/pull/40238) [@ds1371dani](https://github.com/ds1371dani)
  - 💄 修复 Badge 作用在块级元素上时 RTL 样式不生效的问题。[#40125](https://github.com/ant-design/ant-design/pull/40125)

## 5.1.4

`2023-01-09`

- 🐞 修复 locale 文件丢失的问题。[#40116](https://github.com/ant-design/ant-design/pull/40116)
- 🐞 修复 Cascader 组件 RTL 模式中下拉菜单位置问题。[#40109](https://github.com/ant-design/ant-design/pull/40109) [@3hson](https://github.com/3hson)
- 🐞 修复 `rc-motion` 部分组件动画闪烁的问题。[react-component/motion#39](https://github.com/react-component/motion/pull/39)

## 5.1.3

`2023-01-09`

- Table
  - 🛠 优化 Table `shouldCellUpdate` 逻辑，提升二次渲染速度。[#40063](https://github.com/ant-design/ant-design/pull/40063)
  - 🐞 修复 Table `columns.render` 中如果使用闭包数据，更新闭包数据不会触发重新渲染的问题。[#40004](https://github.com/ant-design/ant-design/pull/40004)
  - 🐞 修复 Table filter 时,边框会有黑色的问题。[#39938](https://github.com/ant-design/ant-design/pull/39938) [@JarvisArt](https://github.com/JarvisArt)
- Button
  - 🐞 修复 Button 水波纹效果不跟随屏幕滚动的问题。[#39954](https://github.com/ant-design/ant-design/pull/39954)
  - 🐞 修复 Button `block` 属性不生效的问题。[#39992](https://github.com/ant-design/ant-design/pull/39992) [@li-jia-nan](https://github.com/li-jia-nan)
- 🐞 修复 Menu 自定义展开图标无法隐藏的错误。[#40071](https://github.com/ant-design/ant-design/pull/40071) [@Wxh16144](https://github.com/Wxh16144)
- 💄 修复横向 Menu 组件暗色模式样式。[#40105](https://github.com/ant-design/ant-design/pull/40105)
- 💄 修复圆形 Progress 文本在 rtl 模式下不显示的问题。[#40103](https://github.com/ant-design/ant-design/pull/40103)
- 🐞 修复 Cascader `notFoundContent` 内容无法交互的问题。[#40067](https://github.com/ant-design/ant-design/pull/40067)
- 🐞 修复 Transfer 中 CheckBox 在列表为空的时候没有变成 disabled 状态的问题。[#40038](https://github.com/ant-design/ant-design/pull/40038) [@li-jia-nan](https://github.com/li-jia-nan)
- 💄 修复 Checkbox 同时开启 `disabled` 和 `indeterminate` 时的样式问题。[#39974](https://github.com/ant-design/ant-design/pull/39974) [@ds1371dani](https://github.com/ds1371dani)
- 🐞 修复 Alert.ErrorBoundary 内容溢出的问题。[#40033](https://github.com/ant-design/ant-design/pull/40033)
- 💄 修复 Tag `onClick` 为 undefined，鼠标点击也会出现边框样式。[#40023](https://github.com/ant-design/ant-design/pull/40023) [@crazyair](https://github.com/crazyair)
- 💄 修复 Avatar.Group 内 Avatar 外层包裹其他元素时间距样式失效问题。[#39993](https://github.com/ant-design/ant-design/pull/39993)
- 🐞 修复 Menu.Submenu 箭头过渡动画不正确的问题。[#39945](https://github.com/ant-design/ant-design/pull/39945) [@JarvisArt](https://github.com/JarvisArt)
- 🐞 修复 Table 选择列固定时滚动会被其他单元格遮盖的问题。[#39940](https://github.com/ant-design/ant-design/pull/39940) [@kiner-tang](https://github.com/kiner-tang)
- 🌐 增加缺失的泰米尔语翻译。[#39936](https://github.com/ant-design/ant-design/pull/39936) [@KIRUBASHANKAR26](https://github.com/KIRUBASHANKAR26)

## 5.1.2

`2022-12-30`

- 📖 官网主题编辑器添加主题上传功能。[#39621](https://github.com/ant-design/ant-design/pull/39621) [@BoyYangzai](https://github.com/BoyYangzai)
- 💄 重构 Wave 水波纹视效，现在可以多个水波纹同时触发了。[#39705](https://github.com/ant-design/ant-design/pull/39705) [@li-jia-nan](https://github.com/li-jia-nan)
- Table
  - 🐞 修复 Table `column.filtered` 更新不生效的问题。[#39883](https://github.com/ant-design/ant-design/pull/39883)
  - 🐞 修复 Table 排序/筛选的固定列背景色透明的样式异常问题。[#39012](https://github.com/ant-design/ant-design/pull/39012) [@kiner-tang](https://github.com/kiner-tang)
- 🐞 解决 Image 预览样式会被 TailwindCSS 影响的问题。[#39914](https://github.com/ant-design/ant-design/pull/39914)
- 🐞 修复 Dropdown 组件 `danger` 和 `disabled` 属性同时使用的样式问题。[#39904](https://github.com/ant-design/ant-design/pull/39904) [@Wxh16144](https://github.com/Wxh16144)
- 🐞 修复 App `useApp` 中 `modal` 确认按钮文案。[#39884](https://github.com/ant-design/ant-design/pull/39884) [@BoyYangzai](https://github.com/BoyYangzai)
- 🐞 修复 Input.Group 在 windows 下缩放屏幕时的错位问题。[#39842](https://github.com/ant-design/ant-design/pull/39842) [@heiyu4585](https://github.com/heiyu4585)
- 🐞 修复 Slider 展示 Tooltip 时动画丢失的问题。[#39857](https://github.com/ant-design/ant-design/pull/39857)
- 🐞 修复 QRCode 过期文案在暗色模式下看不清的问题。[#39849](https://github.com/ant-design/ant-design/pull/39849) [@li-jia-nan](https://github.com/li-jia-nan)
- 🐞 修复 Tree 在暗黑模式下 `switcher` 背景显示异常问题。[#39838](https://github.com/ant-design/ant-design/pull/39838) [@kiner-tang](https://github.com/kiner-tang)
- 🐞 修复 Menu 组件滑块在 `border` 被预设值重置时的样式问题。[#39819](https://github.com/ant-design/ant-design/pull/39819)
- 🐞 修复 Checkbox 禁用时不支持 Tooltip 和 Popover 的问题。[#39829](https://github.com/ant-design/ant-design/pull/39829)

## 5.1.1

`2022-12-26`

- 📦 在构建流程中去掉对 IE 等旧版本浏览器的支持以减少包体积。[#38779](https://github.com/ant-design/ant-design/pull/38779)
- ⚡️ 提升 Transfer 在大数据量下勾选和移动节点时的性能。[#39465](https://github.com/ant-design/ant-design/pull/39465) [@wqs576222103](https://github.com/wqs576222103)
- 🐞 Design Token 修复组件字体错误问题。[#39806](https://github.com/ant-design/ant-design/pull/39806)
- 🐞 修复 Drawer `placement` `open` `width` 等参数为 undefined 时默认值不生效的问题。[#39782](https://github.com/ant-design/ant-design/pull/39782)
- 🐞 修复 Menu 切换时图标动画效果不流畅的问题。[#39800](https://github.com/ant-design/ant-design/pull/39800) [@JarvisArt](https://github.com/JarvisArt)
- 🐞 修复 Image 预览操作条在动态过程中会被高 zIndex 的元素覆盖。[#39788](https://github.com/ant-design/ant-design/pull/39788) [@JarvisArt](https://github.com/JarvisArt)
- 🐞 修复 List 组件分页器错误参数导致报错问题。[#39681](https://github.com/ant-design/ant-design/pull/39681) [@Wxh16144](https://github.com/Wxh16144)
- 🐞 修复 Space `align="baseline"` 不生效的问题。[#39748](https://github.com/ant-design/ant-design/pull/39748) [@candy4290](https://github.com/candy4290)
- Table
  - 🐞 修复 Table 可扩展行标题没有左上边框半径的问题。[#39781](https://github.com/ant-design/ant-design/pull/39781) [@chunsch](https://github.com/chunsch)
  - 🐞 修复 Table 列头的圆角丢失问题。[#39723](https://github.com/ant-design/ant-design/pull/39723)
  - 🐞 修复 Table 组件合并单元格后底部边框消失和边框重叠时颜色变深的问题。[#39729](https://github.com/ant-design/ant-design/pull/39729)
  - ⌨️ 修正 Table `aria-*` 属性到 table 元素上以支持更好的可访问性。[#39700](https://github.com/ant-design/ant-design/pull/39700)
  - ⌨️ 重置 Table 列的 `aria-label` 属性值。[#39738](https://github.com/ant-design/ant-design/pull/39738) [@kiner-tang](https://github.com/kiner-tang)
  - 💄 为 Table 边框添加过渡动画使其 hover 效果更顺滑。[#39713](https://github.com/ant-design/ant-design/pull/39713) [@JarvisArt](https://github.com/JarvisArt)
- 🐞 修复 Tabs 添加按钮在暗色模式下不可见的问题。[#39724](https://github.com/ant-design/ant-design/pull/39724)
- 🐞 修复 Card 只有 `extra` 时标题栏高度不足的问题。[#39646](https://github.com/ant-design/ant-design/pull/39646) [@JarvisArt](https://github.com/JarvisArt)
- 🐞 修复 Row 组件 `justify` 和 `align` 属性，动态改变不生效的问题。[#39704](https://github.com/ant-design/ant-design/pull/39704) [@candy4290](https://github.com/candy4290)
- 🐞 修复 App 中 `children` 使用相同 key 的警告。[#39695](https://github.com/ant-design/ant-design/pull/39695) [@Kamahl19](https://github.com/Kamahl19)，[#39701](https://github.com/ant-design/ant-design/pull/39701) [@li-jia-nan](https://github.com/li-jia-nan)
- 💄 Image 组件预览交互优化。[#39812](https://github.com/ant-design/ant-design/pull/39812) [@JarvisArt](https://github.com/JarvisArt)
- 💄 修复 Table 筛选菜单选中背景色和菜单阴影样式。[#39805](https://github.com/ant-design/ant-design/pull/39805)
- TypeScript
  - 🤖 修复部分 Design Token 缺少类型提示的问题。[#39754](https://github.com/ant-design/ant-design/pull/39754)

## 5.1.0

`2022-12-20`

- 🔥 新增 App 包裹组件，提供重置样式和提供消费上下文的默认环境。[#39046](https://github.com/ant-design/ant-design/pull/39046)
- 🔥 新增 QRCode 二维码组件。[#38948](https://github.com/ant-design/ant-design/pull/38948)
- 🔥 新增 Watermark 水印组件。[#39064](https://github.com/ant-design/ant-design/pull/39064) [@JarvisArt](https://github.com/JarvisArt)
- 🆕 Mentions 新增 `options` 配置。[#38630](https://github.com/ant-design/ant-design/pull/38630) [@heiyu4585](https://github.com/heiyu4585)
- 🆕 FloatButton 新增支持点击外侧自动关闭功能。[#39501](https://github.com/ant-design/ant-design/pull/39501) [@BoyYangzai](https://github.com/BoyYangzai)
- 🆕 Popconfirm 组件新增 `description` 属性。[#39250](https://github.com/ant-design/ant-design/pull/39250) [@xhh0223](https://github.com/xhh0223)
- 🆕 Modal.confirm 新增 `footer` 属性以自定义按钮列表。[#39048](https://github.com/ant-design/ant-design/pull/39048) [@owjs3901](https://github.com/owjs3901)
- 🆕 Table 新增 `rowScope` 以设置列范围。[#39571](https://github.com/ant-design/ant-design/pull/39571)
- 🆕 Anchor 新增 `items` 数据化配置选项内容，支持通过 children 嵌套。[#39034](https://github.com/ant-design/ant-design/pull/39034) [@foryuki](https://github.com/foryuki)
- 🆕 Grid 组件的响应式断点现在会消费主题 token 配置。[#39105](https://github.com/ant-design/ant-design/pull/39105) [@azro352](https://github.com/azro352)
- 🆕 Tour 的 prevButtonProps nextButtonProps 新增 `style` 和 `classname` 设置。[#38939](https://github.com/ant-design/ant-design/pull/38939) [@ONLY-yours](https://github.com/ONLY-yours)
- 🆕 ConfigProvider 支持配置 `select.showSearch`。[#39531](https://github.com/ant-design/ant-design/pull/39531) [@YinDongFang](https://github.com/YinDongFang)
- 🐞 修复 Tabs `inkBar` 在 StrictMode 下不展示的问题。[#39653](https://github.com/ant-design/ant-design/pull/39653)
- 🐞 修复 Badge 组件宽度不受父元素影响。[#39605](https://github.com/ant-design/ant-design/pull/39605) [@AydenGen](https://github.com/AydenGen)
- Select
  - 🐞 修复 Select 组件 icon 颜色使用的 token。[#39644](https://github.com/ant-design/ant-design/pull/39644)
  - 💄 优化 Select 无障碍体验，当 `virtual=false` 时，将会绑定无障碍访问到实际选项元素上。[#39550](https://github.com/ant-design/ant-design/pull/39550)
- 🐞 修复 Tour steps 设置 `type="primary"` 无效的问题。[#39382](https://github.com/ant-design/ant-design/pull/39382) [@heiyu4585](https://github.com/heiyu4585)
- 🐞 修复带有 `href` 的 Button 组件 `disabled` 时 style 不生效的问题。[#39456](https://github.com/ant-design/ant-design/pull/39456) [@BoyYangzai](https://github.com/BoyYangzai)
- 🐞 修复 Segmented 组件 icon 与文字间距消失的问题。[#39575](https://github.com/ant-design/ant-design/pull/39575)
- 🐞 修复 Drawer 组件关于 `DefaultProps` 的警告。[#39562](https://github.com/ant-design/ant-design/pull/39562)
- Menu
  - 🐞 修复 React18 中使用 `createRoot` 渲染 Menu.Submenu 会闪烁的问题。[#38855](https://github.com/ant-design/ant-design/pull/38855) [@JarvisArt](https://github.com/JarvisArt)
  - 🛠 重构 Menu.MenuItem 为 Function Component。[#38751](https://github.com/ant-design/ant-design/pull/38751)
  - 💄 优化 Menu 组件选中样式。[#39439](https://github.com/ant-design/ant-design/pull/39439)
- 🛠 LocaleProvider 在 4.x 中已经废弃（使用 `<ConfigProvider locale />` 替代），我们在 5.x 里彻底移除了相关目录 antd/es/locale-provider、antd/lib/locale-provider。[#39373](https://github.com/ant-design/ant-design/pull/39373)
- 🛠 简化 lodash 方法引用。[#39599](https://github.com/ant-design/ant-design/pull/39599) [#39602](https://github.com/ant-design/ant-design/pull/39602)
- TypeScript
  - 🤖 优化 Button DropDown Modal Popconfirm Select Transfer 鼠标事件类型定义。[#39533](https://github.com/ant-design/ant-design/pull/39533)
  - 🤖 新增 FloatButton 导出类型 `FloatButtonGroupProps`。[#39553](https://github.com/ant-design/ant-design/pull/39553)
- 🌐 国际化
  - 🇧🇪 补全 `fr_BE` 文案。[#39415](https://github.com/ant-design/ant-design/pull/39415) [@azro352](https://github.com/azro352)
  - 🇨🇦 补全 `fr_CA` 文案。[#39416](https://github.com/ant-design/ant-design/pull/39416) [@azro352](https://github.com/azro352)
  - 🇪🇸 补全 `eu_ES` 文案。[#39371](https://github.com/ant-design/ant-design/pull/39371) [@Ian-Inizias](https://github.com/Ian-Inizias)

## 5.0.7

`2022-12-13`

- 🐞 修复 Slider 组件 Tooltip 动画丢失问题。[#39463](https://github.com/ant-design/ant-design/pull/39463) [@YinDongFang](https://github.com/YinDongFang)
- 🐞 修复 Table 组件有边框且为空时出现横向滚动条的问题。[#39455](https://github.com/ant-design/ant-design/pull/39455) [@zjfresh](https://github.com/zjfresh)
- 🐞 修复 Popover 组件箭头背景色不随自定义颜色改变的问题。[#39517](https://github.com/ant-design/ant-design/pull/39517)
- 🐞 修复 Modal hooks 没有完全传递 ConfigProvider 配置的问题。[#39513](https://github.com/ant-design/ant-design/pull/39513)
- 🐞 修复 Radio 组件尺寸修改后不对齐的问题。[#39476](https://github.com/ant-design/ant-design/pull/39476)

## 5.0.6

`2022-12-12`

- 🐞 修复 FloatButton 的 `toolip` 属性不支持设置为 `0` 的问题。[#39425](https://github.com/ant-design/ant-design/pull/39425) [@li-jia-nan](https://github.com/li-jia-nan)
- 🐞 修复 Space 组件包裹的 Select 系列组件在 hover 时清除图标不展示的问题。[#39468](https://github.com/ant-design/ant-design/pull/39468) [@foryuki](https://github.com/foryuki)
- 💄 修复 Cascader 内部 ul 的 margin 值异常的问题。[#39436](https://github.com/ant-design/ant-design/pull/39436) [@ZN1996](https://github.com/ZN1996)
- 💄 修复 Input 组件在紧凑模式下内边距异常的问题。[#39428](https://github.com/ant-design/ant-design/pull/39428)
- 💄 优化 Message 组件在紧凑模式下的内边距。[#39428](https://github.com/ant-design/ant-design/pull/39428)
- 💄 修复 Radio.Button 组件在暗色模式下的文字颜色。[#39428](https://github.com/ant-design/ant-design/pull/39428)
- 💄 修复 Select 组件在紧凑模式下内边距异常的问题。[#39428](https://github.com/ant-design/ant-design/pull/39428)
- 💄 修复 Slider 组件标签原点样式问题。[#39428](https://github.com/ant-design/ant-design/pull/39428)
- 💄 优化 Switch 组件暗色模式下的颜色。[#39428](https://github.com/ant-design/ant-design/pull/39428)

## 5.0.5

`2022-12-08`

- 🐞 修复 Space.Compact 下 Button hover 样式问题。[#39157](https://github.com/ant-design/ant-design/pull/39157) [@foryuki](https://github.com/foryuki)
- 🐞 修复 Tabs 在 windows Chrome 下高亮条有时候会丢失的问题。[#39352](https://github.com/ant-design/ant-design/pull/39352) [@heiyu4585](https://github.com/heiyu4585)
- 🐞 修复 Divider `horizontal` 在 flex 布局下的对齐问题。[#39339](https://github.com/ant-design/ant-design/pull/39339)
- 🐞 修复 Popover 在 rtl 模式下宽度异常的问题。[#39311](https://github.com/ant-design/ant-design/pull/39311)
- 🐞 修复 Popconfirm 组件 token 配置线框化后边框坍缩的样式问题。[#39313](https://github.com/ant-design/ant-design/pull/39313)
- 💄 修复 Select 组件搜索框会出现空白区域的样式问题。[#39299](https://github.com/ant-design/ant-design/pull/39299)
- 💄 修复 Tree 丢失选中样式的问题。[#39292](https://github.com/ant-design/ant-design/pull/39292)
- 🐞 修复 FloatButton 自定义尺寸时，内容不居中的问题。[#39282](https://github.com/ant-design/ant-design/pull/39282) [@li-jia-nan](https://github.com/li-jia-nan)
- 🐞 修复 DatePicker.RangePicker 日期 hover 样式。[#39266](https://github.com/ant-design/ant-design/pull/39266)
- 💄 优化 Button 在 Space.Compact 下的 Hover 样式。[#39241](https://github.com/ant-design/ant-design/pull/39241) [@foryuki](https://github.com/foryuki)
- 🌐 修正 `vi_VN` 国际化描述。[#39279](https://github.com/ant-design/ant-design/pull/39279) [@nghiepdev](https://github.com/nghiepdev)
- 🌐 修正 `he_IL` 国际化描述。[#39280](https://github.com/ant-design/ant-design/pull/39280) [@Ran-Sagy](https://github.com/Ran-Sagy)
- TypeScript
  - 🤖 优化 Anchor `onClick` 的事件类型定义。[#39305](https://github.com/ant-design/ant-design/pull/39305) [@li-jia-nan](https://github.com/li-jia-nan)

## 5.0.4

`2022-12-05`

- Modal
  - 🐞 修复 Modal 文字内容过多会超出框体的样式问题。[#39249](https://github.com/ant-design/ant-design/pull/39249) [@MuxinFeng](https://github.com/MuxinFeng)
  - 🐞 修复 Modal.info 没有图标时，内容宽度不正确的问题。[#39047](https://github.com/ant-design/ant-design/pull/39047) [@owjs3901](https://github.com/owjs3901)
- 🐞 修复 Tree `checkable` 与 `blockNode` 配合时，`title` 元素不拉伸的问题。[#39209](https://github.com/ant-design/ant-design/pull/39209) [@Wxh16144](https://github.com/Wxh16144)
- 🐞 修复 Dropdown 二级菜单丢失动画的问题。[#39235](https://github.com/ant-design/ant-design/pull/39235)
- 💄 修复 DatePicker.RangePicker 内时间面板的 padding 样式。[#39228](https://github.com/ant-design/ant-design/pull/39228)
- 🐞 修复 Card 的按钮组圆角样式。[#39210](https://github.com/ant-design/ant-design/pull/39210) [@MuxinFeng](https://github.com/MuxinFeng)
- 🐞 修复了 Badge 自定义颜色的时候，波纹的颜色不会跟着小圆点颜色发生变化的问题。[#39182](https://github.com/ant-design/ant-design/pull/39182) [@li-jia-nan](https://github.com/li-jia-nan)
- 🐞 修复 Radio 禁用状态选中样式。[#39165](https://github.com/ant-design/ant-design/pull/39165) [@Wxh16144](https://github.com/Wxh16144)
- 🐞 修复 Input.TextArea `resize` 不是 `none` 时计数文字的样式问题。[#39121](https://github.com/ant-design/ant-design/pull/39121) [@51wangping](https://github.com/51wangping)
- 🐞 修复 Transfer 组件 点击复选框位置不可以取消选中，并触发了两次 onSelectChange 问题。[#39078](https://github.com/ant-design/ant-design/pull/39078) [@edc-hui](https://github.com/edc-hui)
- 🐞 修复 Steps `size="small"` 第一项带有进度时，进度条显示不全的问题。[#39100](https://github.com/ant-design/ant-design/pull/39100) [@Wxh16144](https://github.com/Wxh16144)
- 🐞 修复 Form 水平布局下 `xs` 的响应式布局不生效的问题。[#39130](https://github.com/ant-design/ant-design/pull/39130)
- 🐞 修复 message 在 RTL 下位置不正确的问题。[#39248](https://github.com/ant-design/ant-design/pull/39248) [@Yuiai01](https://github.com/Yuiai01)
- 🐞 修复 Switch 在只设置 `checkedChildren` 或 `unCheckedChildren` 时，其内容不会显示的问题。[#39262](https://github.com/ant-design/ant-design/pull/39262)

## 5.0.3

`2022-11-30`

- 🐞 修复 Spin 包裹模式时的样式偏移问题。[#38923](https://github.com/ant-design/ant-design/pull/38923) [@sribich](https://github.com/sribich)
- Menu
  - 🐞 修复 Menu 溢出时下拉菜单的样式问题。[#39093](https://github.com/ant-design/ant-design/pull/39093)
  - 🐞 修复 hover 在 Menu.Item 外面时颜色变蓝的问题。[#39077](https://github.com/ant-design/ant-design/pull/39077) [@Pulset](https://github.com/Pulset)
- 🐞 修复 Input.TextArea 没有重置样式导致 resize 行为和 4.x 不一致的问题。[aa92f02](https://github.com/ant-design/ant-design/commit/aa92f02)
- 🐞 修复 Upload 默认图标颜色。[#39114](https://github.com/ant-design/ant-design/pull/39114) [@MARKX97](https://github.com/MARKX97)
- 🐞 修复 `@ant-design/cssinjs` dev 下动态 hashId 导致的 ssr 注水失败的问题。[#39069](https://github.com/ant-design/ant-design/pull/39069)
- 🐞 修复 FloatButton.Group 关闭时闪烁的问题。[#39061](https://github.com/ant-design/ant-design/pull/39061)
- 🐞 修复 Card.Meta 宽度没有默认填满容器的问题。[#39026](https://github.com/ant-design/ant-design/pull/39026) [@justanotheranonymoususer](https://github.com/justanotheranonymoususer)

## 5.0.2

`2022-11-27`

- 💄 修复 Card 组件设置 `bodyStyle` 的背景颜色后圆角失效的问题。[#38973](https://github.com/ant-design/ant-design/pull/38973) [@Yukiniro](https://github.com/Yukiniro)
- 💄 Design Token 优化错误色的默认算法。[#38933](https://github.com/ant-design/ant-design/pull/38933)
- 💄 修复 RTL 模式下的样式问题。[#38829](https://github.com/ant-design/ant-design/pull/38829) [@Wxh16144](https://github.com/Wxh16144)
- Space.Compact
  - 💄 Space.Compact 包裹单个子组件时，展示该子组件本身的样式。[#38896](https://github.com/ant-design/ant-design/pull/38896) [@foryuki](https://github.com/foryuki)
  - 💄 修复 Space.Compact 组件嵌套 Modal，Dropdown，Drawer 等组件时的样式问题。[#38870](https://github.com/ant-design/ant-design/pull/38870) [@foryuki](https://github.com/foryuki)
- 🐞 修复横向 Menu 组件有溢出时宽度问题。[#38989](https://github.com/ant-design/ant-design/pull/38989)
- 🐞 修复 Table 组件过滤列被移除后过滤效果仍然影响列表数据的问题。[#38982](https://github.com/ant-design/ant-design/pull/38982)
- 🐞 修复 Select 和 Pagination 在暗色主题下文字颜色不正确。[#38979](https://github.com/ant-design/ant-design/pull/38979) [@Dunqing](https://github.com/Dunqing)
- 🐞 修复 Mentions `options` 不生效的问题。[#38968](https://github.com/ant-design/ant-design/pull/38968) [@heiyu4585](https://github.com/heiyu4585)
- 🐞 修复 `reset.css` 不会被打包的问题。[#38956](https://github.com/ant-design/ant-design/pull/38956) [@passerV](https://github.com/passerV)
- 🐞 修复 Badge 组件 `showZero` 和 `color` 不能一起使用问题。[#38967](https://github.com/ant-design/ant-design/pull/38967) [@Wxh16144](https://github.com/Wxh16144)
- 🐞 修复 Form 校验信息动效卡顿的问题。[#38962](https://github.com/ant-design/ant-design/pull/38962)
- 🐞 修复 Tabs 下拉菜单动画消失的问题。[#38892](https://github.com/ant-design/ant-design/pull/38892)
- 🐞 修复 ConfigProvider `componentDisabled` 失效问题。[#38886](https://github.com/ant-design/ant-design/pull/38886) [@lidianhao123](https://github.com/lidianhao123)
- 🐞 修复 Button `block` 属性有时不生效的问题。[#38869](https://github.com/ant-design/ant-design/pull/38869) [@jjlstruggle](https://github.com/jjlstruggle)
- 🐞 修复 Dropdown.Button 的 `dropdownRender` 未执行的问题。[#38862](https://github.com/ant-design/ant-design/pull/38862) [@imoctopus](https://github.com/imoctopus)

## 5.0.1

`2022-11-22`

- 💄 优化 Empty 组件的 svg 图片在暗色主题下的颜色。[#38785](https://github.com/ant-design/ant-design/pull/38785)
- 💄 修复 Form, Input, Select, Tree 转换到 CSS-in-JS 丢失少量样式的问题。[#38742](https://github.com/ant-design/ant-design/pull/38742)
- 💄 修复 Dropdown 在 Firefox 下拉菜单动画抖动的问题。[#38729](https://github.com/ant-design/ant-design/pull/38729)
- Menu
  - 🐞 修复 Menu SubMenu 间距问题。[#38714](https://github.com/ant-design/ant-design/pull/38714) [@JarvisArt](https://github.com/JarvisArt)
  - 🐞 修复 Menu 暗色主题下高度多了 1px 的问题。[#38741](https://github.com/ant-design/ant-design/pull/38741) [@LuciNyan](https://github.com/LuciNyan)
  - 🐞 修复 Menu 展开 Submenu 时抖动的问题。[#38748](https://github.com/ant-design/ant-design/pull/38748) [@JarvisArt](https://github.com/JarvisArt)
- 🐞 修复 Table 组件展开 icon 不对齐的问题。[#38823](https://github.com/ant-design/ant-design/pull/38823) [@turdiyev](https://github.com/turdiyev)
- 🐞 修复 FloatButton.BackTop 组件动画丢失的问题。[#38770](https://github.com/ant-design/ant-design/pull/38770) [@li-jia-nan](https://github.com/li-jia-nan)
- 🛠 清除残留 `Moment.js` 依赖。[#38762](https://github.com/ant-design/ant-design/pull/38762)
- 🛠 修复外部暴露类 `CompoundedComponent` 的组件的类型报错。[#38666](https://github.com/ant-design/ant-design/pull/38666) [@wangcch](https://github.com/wangcch)
- 🛠 重新添加 `lib` 产物。[#38832](https://github.com/ant-design/ant-design/pull/38832) [@chunsch](https://github.com/chunsch)

## 5.0.0

`2022-11-18`

🏆 Ant Design 5.0.0 已发布！欢迎阅读我们的 [发布文档](https://www.yuque.com/ant-design/ant-design/cy5nfvdo8oidvwmz)。

#### 升级必读

🌟 如果你想升级到 Ant Design 5.0，请仔细查阅我们的[迁移文档](/docs/react/migration-v5-cn)。

#### 主要变化

- 🔥 新增组件
  - 🔥 FloatButton 悬浮按钮，原 BackTop 移至 FloatButton 子组件。[#37520](https://github.com/ant-design/ant-design/pull/37520) [@li-jia-nan](https://github.com/li-jia-nan)
  - 🔥 Tour 漫游式引导。[#37867](https://github.com/ant-design/ant-design/pull/37867) [#38469](https://github.com/ant-design/ant-design/pull/38469) [@heiyu4585](https://github.com/heiyu4585)
- 🔥 新增组件变体
  - 🔥 DatePicker 新增 `presets` 属性用于预设时间范围快捷选择。[#38249](https://github.com/ant-design/ant-design/pull/38249)
  - 🔥 Progress `circle` 类型支持小尺寸自适应。[#38231](https://github.com/ant-design/ant-design/pull/38231) [@li-jia-nan](https://github.com/li-jia-nan)
  - 🔥 Steps 新增 `inline` 类型。[#38311](https://github.com/ant-design/ant-design/pull/38311) [@JarvisArt](https://github.com/JarvisArt)
- 💄 设计变化
  - 💄 调整主色为 `#1677ff`。[#37254](https://github.com/ant-design/ant-design/pull/37254)
  - 💄 基础圆角调整为 `6px`，并支持梯度圆角。[#37146](https://github.com/ant-design/ant-design/pull/37146) [#37369](https://github.com/ant-design/ant-design/pull/37369)
  - 💄 优化组件整体动画速度，效果更简练。[#37438](https://github.com/ant-design/ant-design/pull/37438)
  - 💄 对部分组件进行了去线框化和间距上的调整，整体风格更加简洁。[#37283](https://github.com/ant-design/ant-design/pull/37283)
    - 💄 Pagination 组件去线框化。[#37441](https://github.com/ant-design/ant-design/pull/37441)
    - 💄 优化 Timeline 组件 UI 设计。[#37465](https://github.com/ant-design/ant-design/pull/37465)
    - 💄 优化 Steps 组件 UI 设计。[#37473](https://github.com/ant-design/ant-design/pull/37473)
  - 💄 优化部分组件 focus 样式。[#37483](https://github.com/ant-design/ant-design/pull/37483)
  - 💄 优化组件圆角较大时的部分样式。
    - 💄 优化 Table 组件 hover 样式。[#37370](https://github.com/ant-design/ant-design/pull/37370)
    - 💄 优化 Segmented 组件 hover 样式。[#37498](https://github.com/ant-design/ant-design/pull/37498)
    - 💄 优化 Dropdown 组件 hover 样式。[#37491](https://github.com/ant-design/ant-design/pull/37491)
    - 💄 优化 Modal 等组件关闭按钮样式。[#37634](https://github.com/ant-design/ant-design/pull/37634)
    - 💄 优化 Menu 组件样式。[#38009](https://github.com/ant-design/ant-design/pull/38009)
    - 💄 更多组件 hover 样式优化。[#37433](https://github.com/ant-design/ant-design/pull/37433)
  - 💄 优化 Switch 组件动画效果。[#37658](https://github.com/ant-design/ant-design/pull/37658)
  - 💄 优化 Anchor 组件样式 UI 设计。[#38616](https://github.com/ant-design/ant-design/pull/38616)
- 🆕 新增导出对象 `theme`，用于获取主题相关属性。[#36302](https://github.com/ant-design/ant-design/pull/36302)
  - 🆕 新增 `theme.useToken` hook，用于获取当前上下文的主题变量。[#36267](https://github.com/ant-design/ant-design/pull/36267)
  - 🆕 新增内置算法。
    - 🆕 默认算法 `theme.defaultAlgorithm`。[#36175](https://github.com/ant-design/ant-design/pull/36175)
    - 🆕 暗色算法 `theme.darkAlgorithm`。[#36546](https://github.com/ant-design/ant-design/pull/36546) [#36656](https://github.com/ant-design/ant-design/pull/36656)
    - 🆕 紧凑算法 `theme.compactAlgorithm`。[#38105](https://github.com/ant-design/ant-design/pull/38105)
- 🆕 ConfigProvider 新增 `theme` 属性，用于更改主题配置，详情：[定制主题](https://ant.design/docs/react/customize-theme-cn)。
  - 🆕 支持多个 `algorithm`。[#37082](https://github.com/ant-design/ant-design/pull/37082)
  - 🆕 支持线框化切换。[#37507](https://github.com/ant-design/ant-design/pull/37507)
  - 🆕 支持覆盖单个组件的主题变量。[#37568](https://github.com/ant-design/ant-design/pull/37568)
- 🆕 产物新增 `locale` 目录，内含 cjs 格式的语言文件。[#38194](https://github.com/ant-design/ant-design/pull/38194) [@chunsch](https://github.com/chunsch)
- 🗑 移除对 IE 的支持。
- 🗑 移除 `lib` 产物。[#36362](https://github.com/ant-design/ant-design/pull/36362)
  - 🛠 调整 `package.json` 中 `main` 为 `dist/antd.js`。[eb8835f](https://github.com/ant-design/ant-design/commit/eb8835fe29b39767c0f5e310f5c69619a75d5840)
- 🗑 移除 `dist/antd.css` 产物。默认不再入侵全局样式，新增 `dist/reset.css` 用于重置部分常见样式。[#36224](https://github.com/ant-design/ant-design/pull/36224)
- 🗑 废弃下列组件的 `visible` 属性，改用 `open`。[@yykoypj](https://github.com/yykoypj)
  - 🗑 Tag 废弃 `visible` 属性。[#36671](https://github.com/ant-design/ant-design/pull/36671)
  - 🗑 Table `filterDropdownVisible` 调整为 `filterDropdownOpen`。[#36747](https://github.com/ant-design/ant-design/pull/36747)
  - 🗑 Drawer 废弃 `visible` 属性，改用 `open`。[#36750](https://github.com/ant-design/ant-design/pull/36750)
  - 🗑 Modal 废弃 `visible` 属性，改用 `open`。[#36774](https://github.com/ant-design/ant-design/pull/36774)
  - 🗑 Dropdown 废弃 `visible` 属性，改用 `open`。[#36799](https://github.com/ant-design/ant-design/pull/36799)
  - 🗑 Tooltip & Popover & Popconfirm 废弃 `visible` 属性，改用 `open`。[#36807](https://github.com/ant-design/ant-design/pull/36807)
- 🗑 废弃下列组件的 `dropdownClassName`，统一为 `popupClassName`。[@heiyu4585](https://github.com/heiyu4585)
  - 🗑 AutoComplete 废弃 `dropdownClassName`，改用 `popupClassName`。[#37087](https://github.com/ant-design/ant-design/pull/37087)
  - 🗑 Mentions 废弃 `dropdownClassName`，改用 `popupClassName`。[#37122](https://github.com/ant-design/ant-design/pull/37122)
  - 🗑 Cascader 废弃 `dropdownClassName`，改用 `popupClassName`。[#37089](https://github.com/ant-design/ant-design/pull/37089)
  - 🗑 Select 废弃 `dropdownClassName`，改用 `popupClassName`。[#37091](https://github.com/ant-design/ant-design/pull/37091)
  - 🗑 TreeSelect 废弃 `dropdownClassName`，改用 `popupClassName`。[#37092](https://github.com/ant-design/ant-design/pull/37092)
  - 🗑 DatePicker 和 TimePicker 废弃 `dropdownClassName`，改用 `popupClassName`。[#37207](https://github.com/ant-design/ant-design/pull/37207)
- 🛠 所有组件使用 CSS-in-JS 重构样式。
  - 🗑 移除 less 及相关 less 和 css 产物。[#36244](https://github.com/ant-design/ant-design/pull/36244)
- 🛠 内置时间库由 Moment.js 替换为 Day.js，详情：[使用自定义日期库](https://ant.design/docs/react/use-custom-date-library-cn)。[b22815d](https://github.com/ant-design/ant-design/commit/b22815d4d223b80755b472e14d7888beab8dd1da) [@iamkun](https://github.com/iamkun)
- 🛠 重构 Notification 以支持 React 18 concurrent 模式，并重构 useNotification hook，推荐替代静态方法使用。[#35423](https://github.com/ant-design/ant-design/pull/35423) [#35568](https://github.com/ant-design/ant-design/pull/35568)
- 🛠 Slider 组件 Tooltip 相关 API 合并至 `tooltip` 属性中。[#37043](https://github.com/ant-design/ant-design/pull/37043) [@yykoypj](https://github.com/yykoypj)
- 🛠 文档站技术栈迁移 [dumi@2](https://next.d.umijs.org/)。[#38328](https://github.com/ant-design/ant-design/pull/38328)

## 4.x

去 [GitHub](https://github.com/ant-design/ant-design/blob/4.x-stable/CHANGELOG.zh-CN.md) 查看 `4.x` 的 Change Log。

## 3.x

去 [GitHub](https://github.com/ant-design/ant-design/blob/3.x-stable/CHANGELOG.zh-CN.md) 查看 `3.x` 的 Change Log。

## 2.x

去 [GitHub](https://github.com/ant-design/ant-design/blob/2.x-stable/CHANGELOG.zh-CN.md) 查看 `2.x` 的 Change Log。

## 1.11.4

去 [GitHub](https://github.com/ant-design/ant-design/blob/1.x-stable/CHANGELOG.md) 查看 `0.x` 到 `1.x` 的 Change Log。
