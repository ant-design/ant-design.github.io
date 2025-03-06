---
group:
  title: 进阶使用
order: 4
title: 使用自定义日期库
---

Ant Design 默认使用 [Day.js](https://day.js.org) 来处理时间日期问题。Day.js 相比于 moment 使用了不可变数据结构，性能更快，体积仅 2KB，API 设计完全一致。你可以很方便的改用其他自定义日期库如（[moment](http://momentjs.com/)、[date-fns](https://date-fns.org)、[luxon](https://moment.github.io/luxon/)）。在这里我们提供了两种方式来实现替换:

## 自定义组件

第一种方法是使用 `generatePicker`（或 `generateCalendar`）辅助创建 Picker 组件。

我们先初始化一个 antd demo，你可以参考 [脚手架指南](https://u.ant.design/guide) 进行构建，也可以直接从这里开始[init antd](https://github.com/xiaohuoni/antd4-generate-picker/commit/47fec964e36d48bd15760f8f5abcb9655c259aa6)

### DatePicker.tsx

新建 `src/components/DatePicker.tsx`。

编写如下代码:

```tsx
import { DatePicker } from 'antd';
import type { Moment } from 'moment';
import momentGenerateConfig from 'rc-picker/lib/generate/moment';

const MyDatePicker = DatePicker.generatePicker<Moment>(momentGenerateConfig);

export default MyDatePicker;
```

### TimePicker.tsx

新建 `src/components/TimePicker.tsx`。

编写如下代码:

```tsx
import * as React from 'react';
import type { PickerTimeProps } from 'antd/es/date-picker/generatePicker';
import type { Moment } from 'moment';

import DatePicker from './DatePicker';

export interface TimePickerProps extends Omit<PickerTimeProps<Moment>, 'picker'> {}

const TimePicker = React.forwardRef<any, TimePickerProps>((props, ref) => (
  <DatePicker {...props} picker="time" mode={undefined} ref={ref} />
));

TimePicker.displayName = 'TimePicker';

export default TimePicker;
```

### Calendar.tsx

新建 `src/components/Calendar.tsx`。

编写如下代码:

```tsx
import { Calendar } from 'antd';
import type { Moment } from 'moment';
import momentGenerateConfig from 'rc-picker/es/generate/moment';

const MyCalendar = Calendar.generateCalendar<Moment>(momentGenerateConfig);

export default MyCalendar;
```

#### 导出自定义组件

新建 `src/components/index.tsx`。

编写如下代码:

```tsx
export { default as Calendar } from './Calendar';
export { default as DatePicker } from './DatePicker';
export { default as TimePicker } from './TimePicker';
```

### 使用自定义组件

修改 `src/App.tsx`，引入 `moment` 和自定义的组件。

```diff
- import { DatePicker, Calendar } from 'antd';
- import format from 'dayjs';

+ import { DatePicker, TimePicker, Calendar } from './components';
+ import format from 'moment';
```

## antd-moment-webpack-plugin

我们还提供另一种实现方式。使用 `@ant-design/moment-webpack-plugin` 插件，无需对现有代码做任何修改直接替换成 `Moment.js`。请参考 [@ant-design/moment-webpack-plugin](https://github.com/ant-design/antd-moment-webpack-plugin)。

```js
// webpack-config.js
const AntdMomentWebpackPlugin = require('@ant-design/moment-webpack-plugin');

module.exports = {
  // ...
  plugins: [new AntdMomentWebpackPlugin()],
};
```

## 使用 date-fns

[date-fns](https://date-fns.org/) 目前支持和 dayjs 类似的自定义组件方法，区别在于使用的参数类型不同，在 antd 4.5.0 以上版本提供支持。

做一个简单的例子：

### DatePicker.tsx

新建 `src/components/DatePicker.tsx`。

编写如下代码:

```tsx
import { DatePicker } from 'antd';
import dateFnsGenerateConfig from 'rc-picker/es/generate/dateFns';

const MyDatePicker = DatePicker.generatePicker<Date>(dateFnsGenerateConfig);

export default MyDatePicker;
```

## 使用 luxon

自 `antd 5.4.0` 起，可以使用 [luxon](https://moment.github.io/luxon/) 代替 dayjs 并支持同样的功能，但它与 dayjs 有一些差异，我们将在下面解释：

### 执行

创建一个 `DatePicker.tsx` 文件，并定义一个基于 luxon 的 DatePicker 组件：

```tsx
import { DatePicker } from 'antd';
import type { DateTime } from 'luxon';
import luxonGenerateConfig from 'rc-picker/lib/generate/luxon';

const MyDatePicker = DatePicker.generatePicker<DateTime>(luxonGenerateConfig);

export default MyDatePicker;
```

### 与 dayjs 的差异

luxon 用户应该悉知，它本身没有 local 的实现。相反，它依赖于原生浏览器的 [Intl](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Intl)。

这导致了与其他日期库的一些差异，主要区别是：

- 无论语言环境如何，一周的第一天总是星期一。
- 一年中的周数有时不同（ISO 周规则用于确定它）。
- 短工作日格式有时会因自定义区域而异（可能有 3 个字符而不是 2 个）。
- 选定的周标签格式会略有不同（例如“2021-01”而不是“2021-1st”）。

可以通过调整 luxon 配置来自定义这些默认的 luxon 行为：

```tsx
import { DatePicker } from 'antd';
import type { DateTime } from 'luxon';
import luxonGenerateConfig from 'rc-picker/lib/generate/luxon';

const customLuxonConfig = {
  ...luxonGenerateConfig,
  getWeekFirstDay(locale) {
    // 在这里编写你的自定义实现
  },
};

const MyDatePicker = DatePicker.generatePicker<DateTime>(customLuxonConfig);

export default MyDatePicker;
```

请注意，通过进行此类自定义，生成的 DatePicker 行为可能会以意想不到的方式发生变化，因此请确保你测试过一些边界情况。
