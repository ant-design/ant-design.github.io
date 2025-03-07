import * as React from 'react';
import { useContext, useMemo } from 'react';
import type { GenerateConfig } from 'rc-picker/lib/generate';
import type { DisabledDate, Locale, PanelMode } from 'rc-picker/lib/interface';

import { FormItemInputContext } from '../form/context';
import { Button, Group } from '../radio';
import Select from '../select';
import type { CalendarMode, SelectInfo } from './generateCalendar';

const YEAR_SELECT_OFFSET = 10;
const YEAR_SELECT_TOTAL = 20;

interface SharedProps<DateType> {
  prefixCls: string;
  value: DateType;
  validRange?: [DateType, DateType];
  generateConfig: GenerateConfig<DateType>;
  locale: Locale;
  fullscreen: boolean;
  divRef: React.RefObject<HTMLDivElement>;
  onChange: (year: DateType) => void;
  disabledDate?: DisabledDate<DateType>;
}

function YearSelect<DateType>(props: SharedProps<DateType>) {
  const {
    fullscreen,
    validRange,
    generateConfig,
    locale,
    prefixCls,
    value,
    onChange,
    divRef,
    disabledDate,
  } = props;

  const year = generateConfig.getYear(value || generateConfig.getNow());

  let start = year - YEAR_SELECT_OFFSET;
  let end = start + YEAR_SELECT_TOTAL;

  if (validRange) {
    start = generateConfig.getYear(validRange[0]);
    end = generateConfig.getYear(validRange[1]) + 1;
  }

  const suffix = locale && locale.year === '年' ? '年' : '';

  // ======================== Disabled ========================
  const mergedDisabledDate = disabledDate
    ? (currentDate: DateType, disabledInfo: { type: PanelMode; from?: DateType }) => {
        // Start
        const startMonth = generateConfig.setMonth(currentDate, 0);
        const startDate = generateConfig.setDate(startMonth, 1);

        // End
        const endMonth = generateConfig.addYear(startDate, 1);
        const endDate = generateConfig.addDate(endMonth, -1);
        return disabledDate(startDate, disabledInfo) && disabledDate(endDate, disabledInfo);
      }
    : null;

  const options: { label: string; value: number; disabled: boolean }[] = [];
  for (let index = start; index < end; index++) {
    const disabled = disabledDate
      ? mergedDisabledDate!(generateConfig.setYear(value, index), { type: 'year' })
      : false;
    options.push({ label: `${index}${suffix}`, value: index, disabled });
  }

  return (
    <Select
      size={fullscreen ? undefined : 'small'}
      options={options}
      value={year}
      className={`${prefixCls}-year-select`}
      onChange={(numYear) => {
        let newDate = generateConfig.setYear(value, numYear);

        if (validRange) {
          const [startDate, endDate] = validRange;
          const newYear = generateConfig.getYear(newDate);
          const newMonth = generateConfig.getMonth(newDate);
          if (
            newYear === generateConfig.getYear(endDate) &&
            newMonth > generateConfig.getMonth(endDate)
          ) {
            newDate = generateConfig.setMonth(newDate, generateConfig.getMonth(endDate));
          }
          if (
            newYear === generateConfig.getYear(startDate) &&
            newMonth < generateConfig.getMonth(startDate)
          ) {
            newDate = generateConfig.setMonth(newDate, generateConfig.getMonth(startDate));
          }
        }

        onChange(newDate);
      }}
      getPopupContainer={() => divRef!.current!}
    />
  );
}

function MonthSelect<DateType>(props: SharedProps<DateType>) {
  const {
    prefixCls,
    fullscreen,
    validRange,
    value,
    generateConfig,
    locale,
    onChange,
    divRef,
    disabledDate,
  } = props;
  const month = generateConfig.getMonth(value || generateConfig.getNow());

  let start = 0;
  let end = 11;

  if (validRange) {
    const [rangeStart, rangeEnd] = validRange;
    const currentYear = generateConfig.getYear(value);
    if (generateConfig.getYear(rangeEnd) === currentYear) {
      end = generateConfig.getMonth(rangeEnd);
    }
    if (generateConfig.getYear(rangeStart) === currentYear) {
      start = generateConfig.getMonth(rangeStart);
    }
  }

  const months = locale.shortMonths || generateConfig.locale.getShortMonths!(locale.locale);

  // ======================== Disabled ========================
  const mergedDisabledDate = disabledDate
    ? (currentDate: DateType, disabledInfo: any) => {
        const startDate = generateConfig.setDate(currentDate, 1);
        const nextMonthStartDate = generateConfig.setMonth(
          startDate,
          generateConfig.getMonth(startDate) + 1,
        );
        const endDate = generateConfig.addDate(nextMonthStartDate, -1);
        return disabledDate(startDate, disabledInfo) && disabledDate(endDate, disabledInfo);
      }
    : null;

  const options: { label: string; value: number; disabled: boolean }[] = [];
  for (let index = start; index <= end; index += 1) {
    const disabled = disabledDate
      ? mergedDisabledDate!(generateConfig.setMonth(value, index), { type: 'month' })
      : false;
    options.push({
      label: months[index],
      value: index,
      disabled,
    });
  }

  return (
    <Select
      size={fullscreen ? undefined : 'small'}
      className={`${prefixCls}-month-select`}
      value={month}
      options={options}
      onChange={(newMonth) => {
        onChange(generateConfig.setMonth(value, newMonth));
      }}
      getPopupContainer={() => divRef!.current!}
    />
  );
}

interface ModeSwitchProps<DateType> extends Omit<SharedProps<DateType>, 'onChange'> {
  mode: CalendarMode;
  onModeChange: (type: CalendarMode) => void;
}

function ModeSwitch<DateType>(props: ModeSwitchProps<DateType>) {
  const { prefixCls, locale, mode, fullscreen, onModeChange } = props;
  return (
    <Group
      onChange={({ target: { value } }) => {
        onModeChange(value);
      }}
      value={mode}
      size={fullscreen ? undefined : 'small'}
      className={`${prefixCls}-mode-switch`}
    >
      <Button value="month">{locale.month}</Button>
      <Button value="year">{locale.year}</Button>
    </Group>
  );
}

export interface CalendarHeaderProps<DateType> {
  prefixCls: string;
  value: DateType;
  validRange?: [DateType, DateType];
  generateConfig: GenerateConfig<DateType>;
  locale: Locale;
  mode: CalendarMode;
  fullscreen: boolean;
  onChange: (date: DateType, source: SelectInfo['source']) => void;
  onModeChange: (mode: CalendarMode) => void;
  disabledDate?: DisabledDate<DateType>;
}
function CalendarHeader<DateType>(props: CalendarHeaderProps<DateType>) {
  const { prefixCls, fullscreen, mode, onChange, onModeChange } = props;
  const divRef = React.useRef<HTMLDivElement>(null!);

  const formItemInputContext = useContext(FormItemInputContext);
  const mergedFormItemInputContext = useMemo(
    () => ({
      ...formItemInputContext,
      isFormItemInput: false,
    }),
    [formItemInputContext],
  );

  const sharedProps = {
    ...props,
    fullscreen,
    divRef,
  };

  return (
    <div className={`${prefixCls}-header`} ref={divRef}>
      <FormItemInputContext.Provider value={mergedFormItemInputContext}>
        <YearSelect
          {...sharedProps}
          onChange={(v) => {
            onChange(v, 'year');
          }}
        />
        {mode === 'month' && (
          <MonthSelect
            {...sharedProps}
            onChange={(v) => {
              onChange(v, 'month');
            }}
          />
        )}
      </FormItemInputContext.Provider>
      <ModeSwitch {...sharedProps} onModeChange={onModeChange} />
    </div>
  );
}

export default CalendarHeader;
