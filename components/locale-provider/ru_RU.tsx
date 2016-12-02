/**
 * Created by Andrey Gayvoronsky on 13/04/16.
 */

import * as moment from 'moment';
import 'moment/locale/ru';
moment.locale('ru');

import Pagination from 'rc-pagination/lib/locale/ru_RU';
import DatePicker from '../date-picker/locale/ru_RU';
import TimePicker from '../time-picker/locale/ru_RU';
import Calendar from '../calendar/locale/ru_RU';

export default {
  Pagination,
  DatePicker,
  TimePicker,
  Calendar,
  Table: {
    filterTitle: 'Фильтр',
    filterConfirm: 'OK',
    filterReset: 'Сбросить',
    emptyText: 'Нет данных',
  },
  Modal: {
    okText: 'OK',
    cancelText: 'Отмена',
    justOkText: 'OK',
  },
  Popconfirm: {
    okText: 'OK',
    cancelText: 'Отмена',
  },
  Transfer: {
    notFoundContent: 'Ничего не найдено',
    searchPlaceholder: 'Введите название для поиска',
    itemUnit: 'item',
    itemsUnit: 'items',
  },
  Select: {
    notFoundContent: 'Ничего не найдено',
  },
};
