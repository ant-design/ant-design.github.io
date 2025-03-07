import CalendarLocale from 'rc-picker/lib/locale/pt_PT';

import TimePickerLocale from '../../time-picker/locale/pt_PT';
import type { PickerLocale } from '../generatePicker';

// Merge into a locale object
const locale: PickerLocale = {
  lang: {
    ...CalendarLocale,
    placeholder: 'Data',
    rangePlaceholder: ['Data inicial', 'Data final'],
    today: 'Hoje',
    now: 'Agora',
    backToToday: 'Hoje',
    ok: 'OK',
    clear: 'Limpar',
    month: 'Mês',
    year: 'Ano',
    timeSelect: 'Hora',
    dateSelect: 'Selecionar data',
    monthSelect: 'Selecionar mês',
    yearSelect: 'Selecionar ano',
    decadeSelect: 'Selecionar década',
    yearFormat: 'YYYY',
    fieldDateFormat: 'D/M/YYYY',
    cellDateFormat: 'D',
    fieldDateTimeFormat: 'D/M/YYYY HH:mm:ss',
    fieldMonthFormat: 'MMMM',
    monthBeforeYear: false,
    previousMonth: 'Mês anterior (PageUp)',
    nextMonth: 'Mês seguinte (PageDown)',
    previousYear: 'Ano anterior (Control + left)',
    nextYear: 'Ano seguinte (Control + right)',
    previousDecade: 'Última década',
    nextDecade: 'Próxima década',
    previousCentury: 'Último século',
    nextCentury: 'Próximo século',
  },
  timePickerLocale: {
    ...TimePickerLocale,
    placeholder: 'Hora',
  },
};

// All settings at:
// https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json

export default locale;
