---
group:
  title: Advanced
order: 4
title: Use custom date library
---

By default, Ant Design uses [Day.js](https://day.js.org) to handle time and date. Day.js is an immutable date-time library alternative to Moment.js with the same API.

You might want to use another date library (**Ant design currently supports [moment](http://momentjs.com/), [date-fns](https://date-fns.org), and [luxon](https://moment.github.io/luxon/)**). We provide two ways to customize:

## Custom component

The first way is to use `generatePicker` (or `generateCalendar`) to help create Picker components.

First, we initialize an antd demo. You can refer to [Scaffolding Guide](https://u.ant.design/guide), or you can start directly here [init antd](https://github.com/xiaohuoni/antd4-generate-picker/commit/47fec964e36d48bd15760f8f5abcb9655c259aa6)

### DatePicker.tsx

Create `src/components/DatePicker.tsx`.

For example:

```tsx
import { DatePicker } from 'antd';
import type { Moment } from 'moment';
import momentGenerateConfig from 'rc-picker/lib/generate/moment';

const MyDatePicker = DatePicker.generatePicker<Moment>(momentGenerateConfig);

export default MyDatePicker;
```

### TimePicker.tsx

Create `src/components/TimePicker.tsx`.

For example:

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

Create `src/components/Calendar.tsx`.

For example:

```tsx
import { Calendar } from 'antd';
import type { Moment } from 'moment';
import momentGenerateConfig from 'rc-picker/es/generate/moment';

const MyCalendar = Calendar.generateCalendar<Moment>(momentGenerateConfig);

export default MyCalendar;
```

### Export Custom component

Create `src/components/index.tsx`.

For example:

```tsx
export { default as Calendar } from './Calendar';
export { default as DatePicker } from './DatePicker';
export { default as TimePicker } from './TimePicker';
```

### Use Custom component

Modify `src/App.tsx`,import `moment` and custom component.

```diff
- import { DatePicker, Calendar } from 'antd';
- import format from 'dayjs';

+ import { DatePicker, TimePicker, Calendar } from './components';
+ import format from 'moment';
```

## antd-moment-webpack-plugin

We also provide another implementation, which we provide with `@ant-design/moment-webpack-plugin`, replacing `Day.js` with `moment` directly without changing a line of existing code. More info can be found at [@ant-design/moment-webpack-plugin](https://github.com/ant-design/antd-moment-webpack-plugin).

```js
// webpack-config.js
const AntdMomentWebpackPlugin = require('@ant-design/moment-webpack-plugin');

module.exports = {
  // ...
  plugins: [new AntdMomentWebpackPlugin()],
};
```

## Use date-fns

[date-fns](https://date-fns.org/) currently supports custom component methods similar to `dayjs`. The difference is that the parameter types used are different. Support is provided in antd 4.5.0 and above.

For Example:

### DatePicker.tsx

Create `src/components/DatePicker.tsx`.

Code as follows:

```tsx
import { DatePicker } from 'antd';
import dateFnsGenerateConfig from 'rc-picker/lib/generate/dateFns';

const MyDatePicker = DatePicker.generatePicker<Date>(dateFnsGenerateConfig);

export default MyDatePicker;
```

## Use luxon

Since `antd 5.4.0`, [luxon](https://moment.github.io/luxon/) can be used instead of `dayjs` and supports the same functionality, but it does introduce some differences in behavior that we will explain below.

### Implementation

Create a `src/components/DatePicker.tsx` file, and implement the luxon based picker as follows:

```tsx
import { DatePicker } from 'antd';
import type { DateTime } from 'luxon';
import luxonGenerateConfig from 'rc-picker/lib/generate/luxon';

const MyDatePicker = DatePicker.generatePicker<DateTime>(luxonGenerateConfig);

export default MyDatePicker;
```

### Notable differences with dayjs

luxon users should be familiar with the fact that it does not come with a custom implementation for localization. Instead, it relies on the browser's native [Intl API](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl).

This introduces some formatting differences with the other date libraries. As of today, the main differences are:

- First day of the week is always Monday regardless of locale.
- Week of year number is sometimes different (ISO week rules are used to determine it).
- Short week days format will sometimes be different for custom locales (it might have 3 characters instead of 2).
- Selected week label format will be slightly different (e.g. "2021-01" instead of "2021-1st").

It is possible to customize these default luxon behaviors by adjusting the luxon config:

```tsx
import { DatePicker } from 'antd';
import type { DateTime } from 'luxon';
import luxonGenerateConfig from 'rc-picker/lib/generate/luxon';

const customLuxonConfig = {
  ...luxonGenerateConfig,
  getWeekFirstDay(locale) {
    // Your custom implementation goes here
  },
};

const MyDatePicker = DatePicker.generatePicker<DateTime>(customLuxonConfig);

export default MyDatePicker;
```

Note that by doing such customization, the resulting DatePicker behavior might be altered in unexpected ways, so make sure you are testing for edge cases.
