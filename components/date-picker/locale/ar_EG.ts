import CalendarLocale from 'rc-picker/lib/locale/ar_EG';

import TimePickerLocale from '../../time-picker/locale/ar_EG';
import type { PickerLocale } from '../generatePicker';

// Merge into a locale object
const locale: PickerLocale = {
  lang: {
    placeholder: 'اختيار التاريخ',
    rangePlaceholder: ['البداية', 'النهاية'],
    yearFormat: 'YYYY',
    fieldDateFormat: 'D/M/YYYY',
    cellDateFormat: 'D',
    fieldDateTimeFormat: 'DD/MM/YYYY HH:mm:ss',
    fieldMonthFormat: 'MMMM',
    monthBeforeYear: true,
    shortWeekDays: ['الأحد', 'الإثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'],
    shortMonths: [
      'يناير',
      'فبراير',
      'مارس',
      'إبريل',
      'مايو',
      'يونيو',
      'يوليو',
      'أغسطس',
      'سبتمبر',
      'أكتوبر',
      'نوفمبر',
      'ديسمبر',
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
