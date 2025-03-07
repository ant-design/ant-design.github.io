import CalendarLocale from 'rc-picker/lib/locale/pl_PL';

import TimePickerLocale from '../../time-picker/locale/pl_PL';
import type { PickerLocale } from '../generatePicker';

// Merge into a locale object
const locale: PickerLocale = {
  lang: {
    placeholder: 'Wybierz datę',
    rangePlaceholder: ['Data początkowa', 'Data końcowa'],
    yearFormat: 'YYYY',
    fieldDateFormat: 'M/D/YYYY',
    cellDateFormat: 'D',
    fieldDateTimeFormat: 'M/D/YYYY HH:mm:ss',
    fieldMonthFormat: 'MMMM',
    monthBeforeYear: true,
    shortWeekDays: ['Niedz', 'Pon', 'Wt', 'Śr', 'Czw', 'Pt', 'Sob'],
    shortMonths: [
      'Sty',
      'Lut',
      'Mar',
      'Kwi',
      'Maj',
      'Cze',
      'Lip',
      'Sie',
      'Wrz',
      'Paź',
      'Lis',
      'Gru',
    ],
    ...CalendarLocale,
  },
  timePickerLocale: {
    ...TimePickerLocale,
  },
};

// All settings at:
// https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json

export default locale;
