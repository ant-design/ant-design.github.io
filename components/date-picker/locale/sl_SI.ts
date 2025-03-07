import TimePickerLocale from '../../time-picker/locale/sl_SI';
import CalendarLocale from 'rc-picker/lib/locale/sl_SI';
import type { PickerLocale } from '../generatePicker';

// Merge into a locale object
const locale: PickerLocale = {
  lang: {
    ...CalendarLocale,
    locale: 'sl',
    placeholder: 'Izberite datum',
    rangePlaceholder: ['Začetni datum', 'Končni datum'],
    today: 'Danes',
    now: 'Trenutno',
    backToToday: 'Nazaj na trenutni datum',
    ok: 'OK',
    clear: 'Počisti',
    week: 'Teden',
    month: 'Mesec',
    year: 'Leto',
    timeSelect: 'Izberi čas',
    dateSelect: 'Izberi datum',
    monthSelect: 'Izberite mesec',
    yearSelect: 'Izberite leto',
    decadeSelect: 'Izberite desetletje',
    yearFormat: 'YYYY',
    fieldDateFormat: 'D.M.YYYY',
    cellDateFormat: 'D',
    fieldDateTimeFormat: 'D.M.YYYY HH:mm:ss',
    fieldMonthFormat: 'MMMM',
    monthBeforeYear: true,
    previousMonth: 'Prejšnji mesec (PageUp)',
    nextMonth: 'Naslednji mesec (PageDown)',
    previousYear: 'Lansko leto (Control + left)',
    nextYear: 'Naslednje leto (Control + right)',
    previousDecade: 'Prejšnje desetletje',
    nextDecade: 'Naslednje desetletje',
    previousCentury: 'Zadnje stoletje',
    nextCentury: 'Naslednje stoletje',
  },
  timePickerLocale: {
    ...TimePickerLocale,
  },
};

// All settings at:
// https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json

export default locale;
