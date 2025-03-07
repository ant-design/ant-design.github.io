import Dayjs from 'dayjs';

import 'dayjs/locale/zh-cn';

import React from 'react';
import MockDate from 'mockdate';
import type { PickerPanelProps } from 'rc-picker';
import dayjsGenerateConfig from 'rc-picker/lib/generate/dayjs';
import type { Locale } from 'rc-picker/lib/interface';
import { resetWarned } from 'rc-util/lib/warning';

import Calendar from '..';
import mountTest from '../../../tests/shared/mountTest';
import rtlTest from '../../../tests/shared/rtlTest';
import { fireEvent, render } from '../../../tests/utils';
import Group from '../../radio/group';
import Button from '../../radio/radioButton';
import Select from '../../select';
import Header from '../Header';
import type { CalendarHeaderProps } from '../Header';
import ConfigProvider from '../../config-provider';

const ref: {
  calendarProps?: PickerPanelProps;
  calendarHeaderProps?: CalendarHeaderProps<unknown>;
} = {};

jest.mock('../Header', () => {
  const HeaderModule = jest.requireActual('../Header');
  const HeaderComponent = HeaderModule.default;
  return (props: CalendarHeaderProps<any>) => {
    ref.calendarHeaderProps = props;
    return <HeaderComponent {...props} />;
  };
});

jest.mock('rc-picker', () => {
  const RcPicker = jest.requireActual('rc-picker');
  const PickerPanelComponent = RcPicker.PickerPanel;
  return {
    ...RcPicker,
    PickerPanel: (props: PickerPanelProps) => {
      ref.calendarProps = props;
      return <PickerPanelComponent {...props} />;
    },
  };
});

describe('Calendar', () => {
  mountTest(Calendar);
  rtlTest(Calendar, true);

  function openSelect(wrapper: HTMLElement, className: string) {
    fireEvent.mouseDown(wrapper.querySelector(className)!.querySelector('.ant-select-selector')!);
  }

  function findSelectItem(wrapper: HTMLElement) {
    return wrapper.querySelectorAll('.ant-select-item-option')!;
  }

  function clickSelectItem(wrapper: HTMLElement, index = 0) {
    fireEvent.click(findSelectItem(wrapper)[index]);
  }

  function getCell(text: string) {
    const cells = Array.from(document.querySelectorAll('.ant-picker-cell'));
    return cells.find((cell) => cell.textContent === text);
  }

  function getSelectItem(title: string) {
    const nodes = Array.from(document.querySelectorAll('.ant-select-item'));
    return nodes.find((node) => node.getAttribute('title') === title);
  }

  // https://github.com/ant-design/ant-design/issues/30392
  it('should be able to set undefined or null', () => {
    expect(() => {
      render(<Calendar value={null as any} />);
    }).not.toThrow();

    expect(() => {
      render(<Calendar value={undefined} />);
    }).not.toThrow();
  });

  it('Calendar should be selectable', () => {
    MockDate.set(Dayjs('2000-01-01').valueOf());

    const onSelect = jest.fn();
    const onChange = jest.fn();
    const { container } = render(<Calendar onSelect={onSelect} onChange={onChange} />);

    fireEvent.click(container.querySelector('.ant-picker-cell')!);
    expect(onSelect).toHaveBeenCalledWith(expect.anything(), { source: 'date' });

    const value = onSelect.mock.calls[0][0];
    expect(Dayjs.isDayjs(value)).toBe(true);

    expect(onChange).toHaveBeenCalled();

    MockDate.reset();
  });

  it('only Valid range should be selectable', () => {
    const onSelect = jest.fn();
    const validRange: [Dayjs.Dayjs, Dayjs.Dayjs] = [Dayjs('2018-02-02'), Dayjs('2018-02-18')];
    const wrapper = render(
      <Calendar onSelect={onSelect} validRange={validRange} defaultValue={Dayjs('2018-02-02')} />,
    );
    fireEvent.click(wrapper.container.querySelectorAll('[title="2018-02-01"]')[0]);
    fireEvent.click(wrapper.container.querySelectorAll('[title="2018-02-02"]')[0]);
    expect(onSelect.mock.calls.length).toBe(1);
  });

  it('dates other than in valid range should be disabled', () => {
    const onSelect = jest.fn();
    const validRange: [Dayjs.Dayjs, Dayjs.Dayjs] = [Dayjs('2018-02-02'), Dayjs('2018-02-18')];
    const { container } = render(
      <Calendar onSelect={onSelect} validRange={validRange} defaultValue={Dayjs('2018-02-02')} />,
    );
    fireEvent.click(container.querySelector('[title="2018-02-20"]')!);
    const elem = container
      .querySelector('[title="2018-02-20"]')!
      .className.includes('ant-picker-cell-disabled');
    expect(elem).toBe(true);
    expect(onSelect.mock.calls.length).toBe(0);
  });

  it('months other than in valid range should be disabled', () => {
    const onSelect = jest.fn();
    const validRange: [Dayjs.Dayjs, Dayjs.Dayjs] = [Dayjs('2018-02-02'), Dayjs('2018-05-18')];
    const { container } = render(
      <Calendar
        onSelect={onSelect}
        validRange={validRange}
        defaultValue={Dayjs('2018-02-02')}
        mode="year"
      />,
    );
    expect(
      container.querySelector('[title="2018-01"]')?.className.includes('ant-picker-cell-disabled'),
    ).toBe(true);
    expect(
      container.querySelector('[title="2018-02"]')?.className.includes('ant-picker-cell-disabled'),
    ).toBe(false);
    expect(
      container.querySelector('[title="2018-06"]')?.className.includes('ant-picker-cell-disabled'),
    ).toBe(true);
    fireEvent.click(container.querySelector('[title="2018-01"]')!);
    fireEvent.click(container.querySelector('[title="2018-03"]')!);
    expect(onSelect.mock.calls.length).toBe(1);
  });

  it('months other than in valid range should not be shown in header', () => {
    const validRange: [Dayjs.Dayjs, Dayjs.Dayjs] = [Dayjs('2017-02-02'), Dayjs('2018-05-18')];
    const { container } = render(<Calendar validRange={validRange} />);
    openSelect(container, '.ant-picker-calendar-year-select');
    clickSelectItem(container);
    openSelect(container, '.ant-picker-calendar-month-select');
    // 2 years and 11 months
    expect(container.querySelectorAll('.ant-select-item-option').length).toBe(13);
  });

  it('getDateRange should returns a disabledDate function', () => {
    const validRange: [Dayjs.Dayjs, Dayjs.Dayjs] = [Dayjs('2018-02-02'), Dayjs('2018-05-18')];
    render(<Calendar validRange={validRange} defaultValue={Dayjs('2018-02-02')} />);
    expect(ref.calendarProps?.disabledDate?.(Dayjs('2018-06-02'), {} as any)).toBe(true);
    expect(ref.calendarProps?.disabledDate?.(Dayjs('2018-04-02'), {} as any)).toBe(false);
  });

  it('validRange should work with disabledDate function', () => {
    const validRange: [Dayjs.Dayjs, Dayjs.Dayjs] = [Dayjs('2018-02-02'), Dayjs('2018-05-18')];
    render(
      <Calendar
        validRange={validRange}
        disabledDate={(data) => data.isSame(Dayjs('2018-02-03'))}
      />,
    );

    expect(ref.calendarProps?.disabledDate?.(Dayjs('2018-02-01'), {} as any)).toBe(true);
    expect(ref.calendarProps?.disabledDate?.(Dayjs('2018-02-02'), {} as any)).toBe(false);
    expect(ref.calendarProps?.disabledDate?.(Dayjs('2018-02-03'), {} as any)).toBe(true);
    expect(ref.calendarProps?.disabledDate?.(Dayjs('2018-02-04'), {} as any)).toBe(false);
    expect(ref.calendarProps?.disabledDate?.(Dayjs('2018-06-01'), {} as any)).toBe(true);
  });

  it('Calendar MonthSelect should display correct label', () => {
    const validRange: [Dayjs.Dayjs, Dayjs.Dayjs] = [Dayjs('2018-02-02'), Dayjs('2019-06-1')];
    const wrapper = render(<Calendar validRange={validRange} defaultValue={Dayjs('2019-01-01')} />);
    expect(wrapper.container.children[0]).toMatchSnapshot();
  });

  it('Calendar should change mode by prop', () => {
    const monthMode = 'month';
    const yearMode = 'year';
    const wrapper = render(<Calendar />);
    expect(ref.calendarHeaderProps?.mode).toEqual(monthMode);
    wrapper.rerender(<Calendar mode={yearMode} />);
    expect(ref.calendarHeaderProps?.mode).toEqual(yearMode);
  });

  it('Calendar should switch mode', () => {
    const monthMode = 'month';
    const yearMode = 'year';
    const onPanelChangeStub = jest.fn();
    const wrapper = render(<Calendar mode={yearMode} onPanelChange={onPanelChangeStub} />);
    expect(ref.calendarHeaderProps?.mode).toEqual(yearMode);
    wrapper.rerender(<Calendar mode={monthMode} onPanelChange={onPanelChangeStub} />);
    expect(ref.calendarHeaderProps?.mode).toEqual(monthMode);
    expect(onPanelChangeStub).toHaveBeenCalledTimes(0);
  });

  it('Calendar should support locale', () => {
    MockDate.set(Dayjs('2018-10-19').valueOf());

    const zhCN = require('../locale/zh_CN').default;
    const wrapper = render(<Calendar locale={zhCN} />);
    expect(wrapper.container.children[0]).toMatchSnapshot();
    MockDate.reset();
  });

  it('Calendar locale support should override ConfigProvider locale', () => {
    MockDate.set(Dayjs('2018-10-19').valueOf());

    const zhCN = require('../locale/zh_CN').default;

    const enUs = require('../../locale/en_US').default;
    const wrapper = render(
      <ConfigProvider locale={enUs}>
        <Calendar locale={zhCN} />
      </ConfigProvider>,
    );
    expect(wrapper.container.querySelector('.ant-picker-content thead')?.textContent).toBe(
      '一二三四五六日',
    );
    MockDate.reset();
  });

  describe('onPanelChange', () => {
    it('trigger when click last month of date', () => {
      const onPanelChange = jest.fn();
      const date = Dayjs('1990-09-03');
      const wrapper = render(<Calendar onPanelChange={onPanelChange} value={date} />);

      fireEvent.click(Array.from(wrapper.container.querySelectorAll('.ant-picker-cell')).at(0)!);

      expect(onPanelChange).toHaveBeenCalled();
      expect(onPanelChange.mock.calls[0][0].month()).toEqual(date.month() - 1);
    });

    it('not trigger when in same month', () => {
      const onPanelChange = jest.fn();
      const date = Dayjs('1990-09-03');
      const wrapper = render(<Calendar onPanelChange={onPanelChange} value={date} />);

      fireEvent.click(Array.from(wrapper.container.querySelectorAll('.ant-picker-cell')).at(10)!);

      expect(onPanelChange).not.toHaveBeenCalled();
    });
  });

  it('switch should work correctly without prop mode', async () => {
    const onPanelChange = jest.fn();
    const date = Dayjs(new Date(Date.UTC(2017, 7, 9, 8)));
    const wrapper = render(<Calendar onPanelChange={onPanelChange} value={date} />);

    expect(ref.calendarHeaderProps?.mode).toBe('month');
    expect(wrapper.container.querySelectorAll('.ant-picker-date-panel').length).toBe(1);
    expect(wrapper.container.querySelectorAll('.ant-picker-month-panel').length).toBe(0);
    fireEvent.click(wrapper.container.querySelector('.ant-radio-button-input[value="year"]')!);
    expect(wrapper.container.querySelectorAll('.ant-picker-date-panel').length).toBe(0);
    expect(wrapper.container.querySelectorAll('.ant-picker-month-panel').length).toBe(1);

    expect(onPanelChange).toHaveBeenCalled();
    expect(onPanelChange.mock.calls[0][1]).toEqual('year');
  });

  const createWrapper = (
    start: Dayjs.Dayjs,
    end: Dayjs.Dayjs,
    value: Dayjs.Dayjs,
    onValueChange: (v: Dayjs.Dayjs) => void,
  ) => {
    const wrapper = render(
      // @ts-ignore
      <Header
        prefixCls="ant-picker-calendar"
        generateConfig={dayjsGenerateConfig}
        onChange={onValueChange}
        value={value}
        validRange={[start, end]}
        locale={{ year: '年' } as Locale}
      />,
    );
    openSelect(wrapper.container, '.ant-picker-calendar-year-select');
    clickSelectItem(wrapper.container);
  };

  it('if value.month > end.month, set value.month to end.month', () => {
    const value = Dayjs('1990-01-03');
    const start = Dayjs('2019-04-01');
    const end = Dayjs('2019-11-01');
    const onValueChange = jest.fn();
    createWrapper(start, end, value, onValueChange);
    expect(onValueChange).toHaveBeenCalledWith(value.year(2019).month(3), 'year');
  });

  it('if start.month > value.month, set value.month to start.month', () => {
    const value = Dayjs('1990-01-03');
    const start = Dayjs('2019-11-01');
    const end = Dayjs('2019-03-01');
    const onValueChange = jest.fn();
    createWrapper(start, end, value, onValueChange);
    expect(onValueChange).toHaveBeenCalledWith(value.year(2019).month(10), 'year');
  });

  it('if change year and month > end month, set value.month to end.month', () => {
    const value = Dayjs('2018-11-03');
    const start = Dayjs('2000-01-01');
    const end = Dayjs('2019-03-01');
    const onValueChange = jest.fn();
    const wrapper = render(
      <Header
        prefixCls="ant-picker-calendar"
        generateConfig={dayjsGenerateConfig}
        onChange={onValueChange}
        value={value}
        validRange={[start, end]}
        // @ts-ignore
        locale={{ year: '年' }}
      />,
    );
    openSelect(wrapper.container, '.ant-picker-calendar-year-select');
    fireEvent.click(
      Array.from(wrapper.container.querySelectorAll('.ant-select-item-option')).at(-1)!,
    );
    expect(onValueChange).toHaveBeenCalledWith(value.year(2019).month(2), 'year');
  });

  it('onMonthChange should work correctly', () => {
    const start = Dayjs('2018-11-01');
    const end = Dayjs('2019-03-01');
    const value = Dayjs('2018-12-03');
    const onValueChange = jest.fn();
    const wrapper = render(
      <Header
        prefixCls="ant-picker-calendar"
        generateConfig={dayjsGenerateConfig}
        onChange={onValueChange}
        value={value}
        validRange={[start, end]}
        // @ts-ignore
        locale={{ year: '年', locale: 'zh_CN' }}
        mode="month"
      />,
    );
    openSelect(wrapper.container, '.ant-picker-calendar-month-select');
    clickSelectItem(wrapper.container);
    expect(onValueChange).toHaveBeenCalledWith(value.month(10), 'month');
  });

  it('onTypeChange should work correctly', () => {
    const onTypeChange = jest.fn();
    const value = Dayjs('2018-12-03');
    const wrapper = render(
      <Header<Dayjs.Dayjs>
        prefixCls="ant-picker-calendar"
        generateConfig={dayjsGenerateConfig}
        onModeChange={onTypeChange}
        locale={{ year: '年', month: '月', locale: 'zh_CN' } as any}
        value={value}
        // @ts-ignore
        type="date"
      />,
    );
    fireEvent.click(
      Array.from(wrapper.container.querySelectorAll(`.ant-radio-button-input`)).at(1)!,
    );
    expect(onTypeChange).toHaveBeenCalledWith('year');
  });

  it('headerRender should work correctly', () => {
    const onMonthChange = jest.fn();
    const onYearChange = jest.fn();
    const onTypeChange = jest.fn();

    // Year
    const headerRender = jest.fn(({ value }) => {
      const year = value.year();
      const options = [];
      for (let i = year - 100; i < year + 100; i += 1) {
        options.push(
          <Select.Option className="year-item" key={i} value={i}>
            {i}
          </Select.Option>,
        );
      }

      return (
        <Select
          size="small"
          popupMatchSelectWidth={false}
          className="my-year-select"
          onChange={onYearChange}
          value={String(year)}
        >
          {options}
        </Select>
      );
    });
    const uiWithYear = <Calendar fullscreen={false} headerRender={headerRender} />;
    const wrapperWithYear = render(uiWithYear);

    openSelect(wrapperWithYear.container, '.ant-select');
    wrapperWithYear.rerender(uiWithYear);

    fireEvent.click(Array.from(findSelectItem(wrapperWithYear.container)).at(-1)!);

    expect(onYearChange).toHaveBeenCalled();

    // Month
    const headerRenderWithMonth = jest.fn(({ value }) => {
      const start = 0;
      const end = 12;
      const monthOptions = [];
      const current = value.clone();
      const localeData = value.localeData();
      const months = [];
      for (let i = 0; i < 12; i += 1) {
        current.month(i);
        months.push(localeData.monthsShort(current));
      }

      for (let index = start; index < end; index += 1) {
        monthOptions.push(
          <Select.Option className="month-item" key={index} value={index}>
            {months[index]}
          </Select.Option>,
        );
      }

      const month = value.month();
      return (
        <Select
          size="small"
          popupMatchSelectWidth={false}
          className="my-month-select"
          onChange={onMonthChange}
          value={String(month)}
        >
          {monthOptions}
        </Select>
      );
    });
    const uiWithMonth = <Calendar fullscreen={false} headerRender={headerRenderWithMonth} />;
    const wrapperWithMonth = render(uiWithMonth);
    openSelect(wrapperWithMonth.container, '.ant-select');
    wrapperWithMonth.rerender(uiWithMonth);

    fireEvent.click(Array.from(findSelectItem(wrapperWithMonth.container)).at(-1)!);

    expect(onMonthChange).toHaveBeenCalled();

    // Type
    const headerRenderWithTypeChange = jest.fn(({ type }) => (
      <Group size="small" onChange={onTypeChange} value={type}>
        <Button value="month">Month</Button>
        <Button value="year">Year</Button>
      </Group>
    ));

    const wrapperWithTypeChange = render(
      <Calendar fullscreen={false} headerRender={headerRenderWithTypeChange} />,
    );

    fireEvent.click(
      Array.from(wrapperWithTypeChange.container.querySelectorAll('.ant-radio-button-input')).at(
        -1,
      )!,
    );
    expect(onTypeChange).toHaveBeenCalled();
  });

  it('dateFullCellRender', () => {
    const { container } = render(
      <Calendar dateFullCellRender={() => <div className="light">Bamboo</div>} />,
    );
    expect(container.querySelectorAll('.light')[0].innerHTML).toEqual('Bamboo');
  });

  it('monthFullCellRender', () => {
    const { container } = render(
      <Calendar mode="year" monthFullCellRender={() => <div className="bamboo">Light</div>} />,
    );
    expect(container.querySelectorAll('.bamboo')[0].innerHTML).toEqual('Light');
  });

  it('fullCellRender in date', () => {
    const { container } = render(
      <Calendar fullCellRender={() => <div className="light">Bamboo</div>} />,
    );
    expect(container.querySelectorAll('.light')[0].innerHTML).toEqual('Bamboo');
  });

  it('fullCellRender in month', () => {
    const { container } = render(
      <Calendar mode="year" fullCellRender={() => <div className="bamboo">Light</div>} />,
    );
    expect(container.querySelectorAll('.bamboo')[0].innerHTML).toEqual('Light');
  });

  it('when fullscreen is false, the element returned by dateFullCellRender should be interactive', () => {
    const onClick = jest.fn();
    const { container } = render(
      <Calendar
        fullscreen={false}
        dateFullCellRender={() => (
          <div className="bamboo" onClick={onClick}>
            Light
          </div>
        )}
      />,
    );
    fireEvent.click(container.querySelectorAll('.bamboo')[0]);
    expect(onClick).toHaveBeenCalled();
  });

  it('deprecated dateCellRender and monthCellRender', () => {
    resetWarned();

    const errSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
    const { container } = render(
      <Calendar
        dateCellRender={() => <div className="bamboo">Light</div>}
        monthCellRender={() => <div className="bar">Bar</div>}
      />,
    );
    expect(errSpy).toHaveBeenCalledWith(
      'Warning: [antd: Calendar] `monthCellRender` is deprecated. Please use `cellRender` instead.',
    );
    expect(errSpy).toHaveBeenCalledWith(
      'Warning: [antd: Calendar] `dateCellRender` is deprecated. Please use `cellRender` instead.',
    );

    expect(container.querySelector('.bamboo')).toBeTruthy();

    fireEvent.click(Array.from(container.querySelectorAll(`.ant-radio-button-input`)).at(1)!);
    expect(container.querySelector('.bar')).toBeTruthy();
    errSpy.mockRestore();
  });

  it('deprecated dateFullCellRender and monthFullCellRender', () => {
    resetWarned();

    const errSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
    const { container } = render(
      <Calendar
        dateFullCellRender={() => <div className="bamboo">Light</div>}
        monthFullCellRender={() => <div className="bar">Bar</div>}
      />,
    );
    expect(errSpy).toHaveBeenCalledWith(
      'Warning: [antd: Calendar] `dateFullCellRender` is deprecated. Please use `fullCellRender` instead.',
    );
    expect(errSpy).toHaveBeenCalledWith(
      'Warning: [antd: Calendar] `monthFullCellRender` is deprecated. Please use `fullCellRender` instead.',
    );
    expect(container.querySelector('.bamboo')).toBeTruthy();
    fireEvent.click(Array.from(container.querySelectorAll(`.ant-radio-button-input`)).at(1)!);
    expect(container.querySelector('.bar')).toBeTruthy();
    errSpy.mockRestore();
  });

  it('support Calendar.generateCalendar', () => {
    jest.useFakeTimers().setSystemTime(new Date('2000-01-01'));

    const MyCalendar = Calendar.generateCalendar(dayjsGenerateConfig);
    const { container } = render(<MyCalendar />);
    expect(container.firstChild).toMatchSnapshot();

    jest.useRealTimers();
  });

  it('disabledDate should work correctly', () => {
    const disabledDate = (current: any) => current && current < Dayjs('2025-02-11');
    const zhCN = require('../locale/zh_CN').default;
    const { container } = render(
      <Calendar disabledDate={disabledDate} fullscreen={false} locale={zhCN} />,
    );
    expect(getCell('10')).toHaveClass('ant-picker-cell-disabled');
    expect(getCell('11')).not.toHaveClass('ant-picker-cell-disabled');
    expect(getCell('12')).not.toHaveClass('ant-picker-cell-disabled');

    openSelect(container, '.ant-picker-calendar-year-select');
    expect(getSelectItem('2024年')).toHaveClass('ant-select-item-option-disabled');
    expect(getSelectItem('2025年')).not.toHaveClass('ant-select-item-option-disabled');
    expect(getSelectItem('2026年')).not.toHaveClass('ant-select-item-option-disabled');

    openSelect(container, '.ant-picker-calendar-month-select');
    expect(getSelectItem('1月')).toHaveClass('ant-select-item-option-disabled');
    expect(getSelectItem('2月')).not.toHaveClass('ant-select-item-option-disabled');
    expect(getSelectItem('3月')).not.toHaveClass('ant-select-item-option-disabled');
  });
});
