import React from 'react';
import type { SingleValueType } from 'rc-cascader/lib/Cascader';

import type { DefaultOptionType } from '..';
import Cascader from '..';
import { resetWarned } from '../../_util/warning';
import excludeAllWarning from '../../../tests/shared/excludeWarning';
import focusTest from '../../../tests/shared/focusTest';
import mountTest from '../../../tests/shared/mountTest';
import rtlTest from '../../../tests/shared/rtlTest';
import { fireEvent, render, screen } from '../../../tests/utils';
import ConfigProvider from '../../config-provider';

const { SHOW_CHILD, SHOW_PARENT } = Cascader;

function toggleOpen(container: ReturnType<typeof render>['container']) {
  fireEvent.mouseDown(container.querySelector('.ant-select-selector')!);
}

function isOpen(container: ReturnType<typeof render>['container']) {
  return container.querySelector('.ant-cascader')?.className.includes('ant-select-open');
}

function getDropdown(container: ReturnType<typeof render>['container']) {
  return container.querySelector('.ant-select-dropdown');
}

function clickOption(
  container: ReturnType<typeof render>['container'],
  menuIndex: number,
  itemIndex: number,
  type = 'click',
) {
  const menu = container.querySelectorAll('ul.ant-cascader-menu')[menuIndex];
  const itemList = menu.querySelectorAll('li.ant-cascader-menu-item');
  fireEvent?.[type as keyof typeof fireEvent]?.(itemList[itemIndex]);
}

const options = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake',
          },
        ],
      },
    ],
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
          },
        ],
      },
    ],
  },
];

function filter<OptionType extends DefaultOptionType = DefaultOptionType>(
  inputValue: string,
  path: OptionType[],
): boolean {
  return path.some((option) =>
    option.label?.toString().toLowerCase().includes(inputValue.toLowerCase()),
  );
}

describe('Cascader', () => {
  excludeAllWarning();

  focusTest(Cascader, { refFocus: true });
  mountTest(Cascader);
  rtlTest(Cascader);

  it('popup correctly when panel is hidden', () => {
    const { container } = render(<Cascader options={options} />);
    expect(isOpen(container)).toBeFalsy();
  });

  it('popup correctly when panel is open', () => {
    const onPopupVisibleChange = jest.fn();
    const { container } = render(
      <Cascader options={options} onPopupVisibleChange={onPopupVisibleChange} />,
    );
    toggleOpen(container);
    expect(isOpen(container)).toBeTruthy();
    expect(onPopupVisibleChange).toHaveBeenCalledWith(true);
  });

  it('support controlled mode', () => {
    const { rerender, asFragment } = render(<Cascader options={options} />);
    rerender(<Cascader options={options} value={['zhejiang', 'hangzhou', 'xihu']} />);
    expect(asFragment().firstChild).toMatchSnapshot();
  });

  it('popup correctly with defaultValue', () => {
    const { container } = render(
      <Cascader options={options} defaultValue={['zhejiang', 'hangzhou']} />,
    );
    toggleOpen(container);
    expect(getDropdown(container)).toMatchSnapshot();
  });

  it('should support popupVisible', () => {
    const { container, rerender } = render(
      <Cascader options={options} defaultValue={['zhejiang', 'hangzhou']} />,
    );
    expect(isOpen(container)).toBeFalsy();
    rerender(<Cascader options={options} defaultValue={['zhejiang', 'hangzhou']} popupVisible />);
    expect(isOpen(container)).toBeTruthy();
  });

  it('can be selected', () => {
    const onChange = jest.fn();
    const { container } = render(<Cascader open options={options} onChange={onChange} />);

    clickOption(container, 0, 0);
    expect(getDropdown(container)).toMatchSnapshot();

    clickOption(container, 1, 0);
    expect(getDropdown(container)).toMatchSnapshot();

    clickOption(container, 2, 0);
    expect(getDropdown(container)).toMatchSnapshot();

    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith(['zhejiang', 'hangzhou', 'xihu'], expect.anything());
  });

  it('backspace should work with `Cascader[showSearch]`', () => {
    const { container } = render(<Cascader options={options} showSearch />);
    fireEvent.change(container.querySelector('input')!, { target: { value: '123' } });
    expect(isOpen(container)).toBeTruthy();

    fireEvent.keyDown(container.querySelector('input')!, { key: 'Backspace', keyCode: 8 });
    expect(isOpen(container)).toBeTruthy();

    fireEvent.change(container.querySelector('input')!, { target: { value: '' } });
    expect(isOpen(container)).toBeTruthy();

    fireEvent.keyDown(container.querySelector('input')!, { key: 'Backspace', keyCode: 8 });
    expect(isOpen(container)).toBeFalsy();
  });

  it('should highlight keyword and filter when search in Cascader', () => {
    const { container } = render(<Cascader options={options} showSearch={{ filter }} />);
    fireEvent.change(container.querySelector('input')!, { target: { value: 'z' } });

    // React 18 with testing lib will have additional space. We have to compare innerHTML. Sad.
    expect(getDropdown(container)?.innerHTML).toMatchSnapshot();
  });

  it('should highlight keyword and filter when search in Cascader with same field name of label and value', () => {
    const customOptions = [
      {
        name: 'Zhejiang',
        children: [
          {
            name: 'Hangzhou',
            children: [
              {
                name: 'West Lake',
              },
              {
                name: 'Xia Sha',
                disabled: true,
              },
            ],
          },
        ],
      },
    ];
    function customFilter<OptionType extends DefaultOptionType = DefaultOptionType>(
      inputValue: string,
      path: OptionType[],
    ): boolean {
      return path.some((option) => option.name.toLowerCase().includes(inputValue.toLowerCase()));
    }
    const { container } = render(
      <Cascader
        options={customOptions}
        fieldNames={{ label: 'name', value: 'name' }}
        showSearch={{ filter: customFilter }}
      />,
    );
    fireEvent.change(container.querySelector('input')!, { target: { value: 'z' } });

    // React 18 with testing lib will have additional space. We have to compare innerHTML. Sad.
    expect(getDropdown(container)?.innerHTML).toMatchSnapshot();
  });

  it('should render not found content', () => {
    const { container } = render(<Cascader options={options} showSearch={{ filter }} />);
    fireEvent.change(container.querySelector('input')!, {
      target: { value: '__notfoundkeyword__' },
    });
    expect(getDropdown(container)).toMatchSnapshot();
  });

  it('should support to clear selection', () => {
    const { container } = render(
      <Cascader options={options} defaultValue={['zhejiang', 'hangzhou']} />,
    );
    expect(container.querySelector('.ant-select-selection-item')?.textContent).toEqual(
      'Zhejiang / Hangzhou',
    );
    fireEvent.mouseDown(container.querySelector('.ant-select-clear')!);
    expect(container.querySelector('.ant-select-selection-item')).toBeFalsy();
  });

  it('should clear search input when clear selection', () => {
    const { container } = render(
      <Cascader options={options} defaultValue={['zhejiang', 'hangzhou']} showSearch />,
    );
    fireEvent.change(container.querySelector('input')!, { target: { value: 'xxx' } });
    fireEvent.mouseDown(container.querySelector('.ant-select-clear')!);
    expect(container.querySelector('input')?.value).toEqual('');
  });

  it('should change filtered item when options are changed', () => {
    const { container, rerender } = render(<Cascader options={options} showSearch={{ filter }} />);
    fireEvent.change(container.querySelector('input')!, { target: { value: 'a' } });
    expect(container.querySelectorAll('.ant-cascader-menu-item').length).toBe(2);

    rerender(<Cascader options={[options[0]]} showSearch={{ filter }} />);
    expect(container.querySelectorAll('.ant-cascader-menu-item').length).toBe(1);
  });

  it('should select item immediately when searching and pressing down arrow key', () => {
    const { container } = render(<Cascader options={options} showSearch={{ filter }} />);
    fireEvent.change(container.querySelector('input')!, { target: { value: 'a' } });

    expect(container.querySelectorAll('.ant-cascader-menu-item').length).toBe(2);
    expect(container.querySelectorAll('.ant-cascader-menu-item-active').length).toBe(0);
    fireEvent.keyDown(container.querySelector('input')!, { key: 'Down', keyCode: 40 });
    expect(container.querySelectorAll('.ant-cascader-menu-item-active').length).toBe(1);
  });

  it('can use fieldNames', () => {
    const customOptions = [
      {
        code: 'zhejiang',
        name: 'Zhejiang',
        items: [
          {
            code: 'hangzhou',
            name: 'Hangzhou',
            items: [
              {
                code: 'xihu',
                name: 'West Lake',
              },
            ],
          },
        ],
      },
      {
        code: 'jiangsu',
        name: 'Jiangsu',
        items: [
          {
            code: 'nanjing',
            name: 'Nanjing',
            items: [
              {
                code: 'zhonghuamen',
                name: 'Zhong Hua Men',
              },
            ],
          },
        ],
      },
    ];

    const onChange = jest.fn();

    const { container } = render(
      <Cascader
        options={customOptions}
        onChange={onChange}
        fieldNames={{
          children: 'items',
          label: 'name',
          value: 'code',
        }}
        open
      />,
    );

    clickOption(container, 0, 0);
    clickOption(container, 1, 0);
    clickOption(container, 2, 0);
    expect(container.querySelector('.ant-select-selection-item')?.textContent).toEqual(
      'Zhejiang / Hangzhou / West Lake',
    );
    expect(onChange).toHaveBeenCalledWith(['zhejiang', 'hangzhou', 'xihu'], expect.anything());
  });

  it('should show not found content when options.length is 0', () => {
    const { container } = render(<Cascader options={[]} />);
    toggleOpen(container);
    expect(getDropdown(container)).toMatchSnapshot();
  });

  it('not found content should be disabled', () => {
    const { container } = render(<Cascader options={[]} open />);
    expect(container.querySelectorAll('.ant-cascader-menu-item-disabled').length).toBe(1);
  });

  describe('limit filtered item count', () => {
    const errorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});

    afterAll(() => {
      errorSpy.mockRestore();
    });

    it('limit with positive number', () => {
      const { container } = render(
        <Cascader options={options} showSearch={{ filter, limit: 1 }} />,
      );
      fireEvent.change(container.querySelector('input')!, { target: { value: 'a' } });
      expect(container.querySelectorAll('.ant-cascader-menu-item')).toHaveLength(1);
    });

    it('not limit', () => {
      const { container } = render(
        <Cascader options={options} showSearch={{ filter, limit: false }} />,
      );
      fireEvent.change(container.querySelector('input')!, { target: { value: 'a' } });
      expect(container.querySelectorAll('.ant-cascader-menu-item')).toHaveLength(2);
    });

    it('negative limit', () => {
      const { container } = render(
        <Cascader options={options} showSearch={{ filter, limit: -1 }} />,
      );
      fireEvent.click(container.querySelector('input')!);
      fireEvent.change(container.querySelector('input')!, { target: { value: 'a' } });
      expect(container.querySelectorAll('.ant-cascader-menu-item')).toHaveLength(2);
    });
  });

  // FIXME: Move to `rc-tree-select` instead
  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should warning if not find `value` in `options`', () => {
    const errorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
    render(<Cascader options={[{ label: 'a', value: 'a', children: [{ label: 'b' }] }]} />);
    expect(errorSpy).toHaveBeenCalledWith(
      'Warning: [antd: Cascader] Not found `value` in `options`.',
    );
    errorSpy.mockRestore();
  });

  // https://github.com/ant-design/ant-design/issues/17690
  it('should not breaks when children is null', () => {
    const optionsWithChildrenNull = [
      {
        value: 'zhejiang',
        label: 'Zhejiang',
        children: [
          {
            value: 'hangzhou',
            label: 'Hangzhou',
            children: null as any,
          },
        ],
      },
    ];
    expect(() => {
      render(<Cascader options={optionsWithChildrenNull} />);
    }).not.toThrow();
  });

  it('placeholder works correctly', () => {
    const { container, rerender } = render(<Cascader options={[]} />);
    expect(container.querySelector('.ant-select-selection-placeholder')?.textContent).toEqual('');

    const customPlaceholder = 'Custom placeholder';
    rerender(<Cascader options={[]} placeholder={customPlaceholder} />);
    expect(container.querySelector('.ant-select-selection-placeholder')?.textContent).toEqual(
      customPlaceholder,
    );
  });

  it('placement work correctly', async () => {
    const customOptions = [
      {
        value: 'zhejiang',
        label: 'Zhejiang',
        children: [
          {
            value: 'hangzhou',
            label: 'Hangzhou',
          },
        ],
      },
    ];
    const { container } = render(<Cascader options={customOptions} placement="topRight" />);
    toggleOpen(container);

    // Inject in tests/__mocks__/@rc-component/trigger.tsx
    expect((global as any)?.triggerProps.popupPlacement).toEqual('topRight');
  });

  it('popup correctly with defaultValue RTL', () => {
    const { asFragment } = render(
      <ConfigProvider direction="rtl">
        <Cascader options={options} defaultValue={['zhejiang', 'hangzhou']} open />
      </ConfigProvider>,
    );
    expect(asFragment().firstChild).toMatchSnapshot();
  });

  it('can be selected in RTL direction', () => {
    const options2 = [
      {
        value: 'zhejiang',
        label: 'Zhejiang',
        children: [
          {
            value: 'hangzhou',
            label: 'Hangzhou',
            children: [
              {
                value: 'xihu',
                label: 'West Lake',
              },
            ],
          },
        ],
      },
      {
        value: 'jiangsu',
        label: 'Jiangsu',
        children: [
          {
            value: 'nanjing',
            label: 'Nanjing',
            children: [
              {
                value: 'zhonghuamen',
                label: 'Zhong Hua Men',
              },
            ],
          },
        ],
      },
    ];
    const onChange = jest.fn();
    const { container } = render(
      <ConfigProvider direction="rtl">
        <Cascader
          options={options2}
          defaultValue={['zhejiang', 'hangzhou']}
          onChange={onChange}
          popupPlacement="bottomRight"
          open
        />
      </ConfigProvider>,
    );

    clickOption(container, 0, 0);
    expect(getDropdown(container)).toMatchSnapshot();

    clickOption(container, 1, 0);
    expect(getDropdown(container)).toMatchSnapshot();

    clickOption(container, 2, 0);
    expect(getDropdown(container)).toMatchSnapshot();

    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith(['zhejiang', 'hangzhou', 'xihu'], expect.anything());
  });

  it('defaultValue works correctly when no match options', () => {
    const { container } = render(
      <Cascader options={options} defaultValue={['options1', 'options2']} />,
    );
    expect(container.querySelector('.ant-select-selection-item')?.textContent).toEqual(
      'options1 / options2',
    );
  });

  it('can be selected when showSearch', () => {
    const onChange = jest.fn();
    const { container } = render(<Cascader options={options} onChange={onChange} showSearch />);
    fireEvent.change(container.querySelector('input')!, { target: { value: 'Zh' } });

    expect(container.querySelectorAll('.ant-cascader-menu').length).toBe(1);
    clickOption(container, 0, 0);
    expect(onChange).toHaveBeenCalledWith(['zhejiang', 'hangzhou', 'xihu'], expect.anything());
  });

  it('options should open after press esc and then search', () => {
    const { container } = render(<Cascader options={options} showSearch />);
    fireEvent.change(container.querySelector('input')!, { target: { value: 'jin' } });
    expect(isOpen(container)).toBeTruthy();
    fireEvent.keyDown(container.querySelector('input')!, { key: 'Esc', keyCode: 27 });
    expect(isOpen(container)).toBeFalsy();
    fireEvent.change(container.querySelector('input')!, { target: { value: 'jin' } });
    expect(isOpen(container)).toBeTruthy();
  });

  it('onChange works correctly when the label of fieldNames is the same as value', () => {
    const onChange = jest.fn();
    const sameNames = { label: 'label', value: 'label' } as const;
    const { container } = render(
      <Cascader options={options} onChange={onChange} showSearch fieldNames={sameNames} />,
    );
    fireEvent.change(container.querySelector('input')!, { target: { value: 'est' } });
    clickOption(container, 0, 0);
    expect(onChange).toHaveBeenCalledWith(['Zhejiang', 'Hangzhou', 'West Lake'], expect.anything());
  });

  it('rtl should work well with placement', () => {
    const { container } = render(<Cascader options={options} direction="rtl" />);
    toggleOpen(container);

    // Inject in tests/__mocks__/@rc-component/trigger.tsx
    expect((global as any).triggerProps.popupPlacement).toEqual('bottomRight');
  });

  describe('legacy props', () => {
    it('popupPlacement', () => {
      render(<Cascader open popupPlacement="bottomLeft" />);
      // Inject in tests/__mocks__/@rc-component/trigger.tsx
      expect((global as any).triggerProps.popupPlacement).toEqual('bottomLeft');
    });

    it('should support showCheckedStrategy child', () => {
      const multipleOptions = [
        {
          value: 'zhejiang',
          label: 'Zhejiang',
          children: [
            {
              value: 'hangzhou',
              label: 'Hangzhou',
              children: [
                {
                  value: 'xihu',
                  label: 'West Lake',
                },
                {
                  value: 'donghu',
                  label: 'East Lake',
                },
              ],
            },
          ],
        },
        {
          value: 'jiangsu',
          label: 'Jiangsu',
          children: [
            {
              value: 'nanjing',
              label: 'Nanjing',
              children: [
                {
                  value: 'zhonghuamen',
                  label: 'Zhong Hua Men',
                },
              ],
            },
          ],
        },
      ];

      let selectedValue: SingleValueType[];
      const onChange = function onChange(value: SingleValueType[]) {
        selectedValue = value;
      };

      const { container, asFragment } = render(
        <Cascader
          options={multipleOptions}
          onChange={onChange}
          multiple
          showCheckedStrategy={SHOW_CHILD}
        />,
      );
      toggleOpen(container);
      expect(asFragment().firstChild).toMatchSnapshot();

      clickOption(container, 0, 0);
      clickOption(container, 1, 0);
      clickOption(container, 2, 0);
      clickOption(container, 2, 1);
      expect(selectedValue![0].join(',')).toBe('zhejiang,hangzhou,xihu');
      expect(selectedValue![1].join(',')).toBe('zhejiang,hangzhou,donghu');
      expect(selectedValue!.join(',')).toBe('zhejiang,hangzhou,xihu,zhejiang,hangzhou,donghu');
    });

    it('should support showCheckedStrategy parent', () => {
      const multipleOptions = [
        {
          value: 'zhejiang',
          label: 'Zhejiang',
          children: [
            {
              value: 'hangzhou',
              label: 'Hangzhou',
              children: [
                {
                  value: 'xihu',
                  label: 'West Lake',
                },
                {
                  value: 'donghu',
                  label: 'East Lake',
                },
              ],
            },
          ],
        },
        {
          value: 'jiangsu',
          label: 'Jiangsu',
          children: [
            {
              value: 'nanjing',
              label: 'Nanjing',
              children: [
                {
                  value: 'zhonghuamen',
                  label: 'Zhong Hua Men',
                },
              ],
            },
          ],
        },
      ];

      let selectedValue: SingleValueType[];
      const onChange = function onChange(value: SingleValueType[]) {
        selectedValue = value;
      };

      const { container, asFragment } = render(
        <Cascader
          options={multipleOptions}
          onChange={onChange}
          multiple
          showCheckedStrategy={SHOW_PARENT}
        />,
      );
      toggleOpen(container);
      expect(asFragment().firstChild).toMatchSnapshot();
      clickOption(container, 0, 0);
      clickOption(container, 1, 0);
      clickOption(container, 2, 0);
      clickOption(container, 2, 1);

      expect(selectedValue!.length).toBe(1);
      expect(selectedValue!.join(',')).toBe('zhejiang');
    });
  });

  it('should be correct expression with disableCheckbox', () => {
    const { container } = render(
      <Cascader
        multiple
        options={[
          {
            label: '台湾',
            value: 'tw',
            children: [
              {
                label: '福建',
                value: 'fj',
                disableCheckbox: true,
              },
              {
                label: '兰州',
                value: 'lz',
              },
              { label: '北京', value: 'bj' },
            ],
          },
        ]}
      />,
    );
    fireEvent.mouseDown(container.querySelector('.ant-select-selector')!);
    // disabled className
    fireEvent.click(container.querySelector('.ant-cascader-menu-item')!);
    expect(container.querySelectorAll('.ant-cascader-checkbox-disabled')).toHaveLength(1);
    // Check all children except disableCheckbox When the parent checkbox is checked
    expect(container.querySelectorAll('.ant-cascader-checkbox')).toHaveLength(4);
    fireEvent.click(container.querySelector('.ant-cascader-checkbox')!);
    expect(container.querySelectorAll('.ant-cascader-checkbox-checked')).toHaveLength(3);
  });

  it('deprecate showArrow', () => {
    resetWarned();

    const errSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
    const { container } = render(<Cascader showArrow />);
    expect(errSpy).toHaveBeenCalledWith(
      'Warning: [antd: Cascader] `showArrow` is deprecated which will be removed in next major version. It will be a default behavior, you can hide it by setting `suffixIcon` to null.',
    );
    expect(container.querySelector('.ant-select-show-arrow')).toBeTruthy();

    errSpy.mockRestore();
  });

  it('should support custom icons via global config', () => {
    render(
      <ConfigProvider cascader={{ icons: { expand: <span>foobar</span> } }}>
        <Cascader open options={[{ value: 1, label: '1', children: [{ value: 2, label: '2' }] }]} />
      </ConfigProvider>,
    );
    expect(screen.getByText('foobar')).toBeTruthy();
  });

  it('should perfer custom icons via props over global config', () => {
    render(
      <ConfigProvider cascader={{ icons: { expand: <span>foobar</span> } }}>
        <Cascader
          icons={{ expand: 'bamboo' }}
          open
          options={[{ value: 1, label: '1', children: [{ value: 2, label: '2' }] }]}
        />
      </ConfigProvider>,
    );
    expect(screen.getByText('bamboo')).toBeTruthy();
  });
});
