import { fireEvent } from '../../../tests/utils';
import type { render } from '../../../tests/utils';

export function openPanel(wrapper: ReturnType<typeof render>) {
  fireEvent.click(wrapper.container.querySelector('.ant-calendar-picker-input')!);
}

export function clearInput(wrapper: ReturnType<typeof render>) {
  fireEvent.click(wrapper.container.querySelector('.ant-calendar-picker-clear')!);
}

export function nextYear(wrapper: ReturnType<typeof render>) {
  fireEvent.click(wrapper.container.querySelector('.ant-calendar-next-year-btn')!);
}

export function nextMonth(wrapper: ReturnType<typeof render>) {
  fireEvent.click(wrapper.container.querySelector('.ant-calendar-next-month-btn')!);
}

export function openPicker(wrapper: ReturnType<typeof render>, index = 0) {
  fireEvent.mouseDown(wrapper.container.querySelectorAll('input')[index]!);
  fireEvent.focus(wrapper.container.querySelectorAll('input')[index]!);
}

export function closePicker(wrapper: ReturnType<typeof render>, index = 0) {
  fireEvent.blur(wrapper.container.querySelectorAll('input')[index]!);
}

export function selectCell(wrapper: ReturnType<typeof render>, text: string | number, index = 0) {
  let matchCell: HTMLTableCellElement | null = null;
  const tds = wrapper.container?.querySelectorAll('table')?.[index]?.querySelectorAll('td');
  tds.forEach(td => {
    if (td.querySelector('div')?.innerHTML === String(text) && td.className.includes('-in-view')) {
      matchCell = td;
      fireEvent.click(td);
    }
  });

  if (!matchCell) {
    throw new Error('Cell not match in picker panel.');
  }

  return matchCell;
}
