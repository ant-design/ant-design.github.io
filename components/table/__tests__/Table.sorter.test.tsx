import React from 'react';

import type { ColumnType, TableProps } from '..';
import Table from '..';
import { act, fireEvent, render } from '../../../tests/utils';
import type { SortOrder, TablePaginationConfig } from '../interface';

describe('Table.sorter', () => {
  const sorterFn: ColumnType<any>['sorter'] = (a, b) =>
    a.name[0].charCodeAt() - b.name[0].charCodeAt();

  const column: ColumnType<any> = {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    sorter: sorterFn,
  };

  const data = [
    { key: 0, name: 'Jack' },
    { key: 1, name: 'Lucy' },
    { key: 2, name: 'Tom' },
    { key: 3, name: 'Jerry' },
  ];

  function createTable(tableProps: TableProps<any> = {}, columnProps = {}) {
    return (
      <Table
        columns={[{ ...column, ...columnProps }]}
        dataSource={data}
        pagination={false}
        {...tableProps}
      />
    );
  }

  function renderedNames(container: ReturnType<typeof render>['container']) {
    const namesList: (Node['textContent'] | undefined)[] = [];
    container
      ?.querySelector('.ant-table-tbody')
      ?.querySelectorAll('tr')
      ?.forEach((tr) => {
        namesList.push(tr.querySelector('td')?.textContent);
      });
    return namesList;
  }

  it('renders sorter icon correctly', () => {
    const { container } = render(createTable());
    expect(container.querySelector('thead')).toMatchSnapshot();
  });

  it('default sort order ascend', () => {
    const { container } = render(createTable({}, { defaultSortOrder: 'ascend' }));

    expect(renderedNames(container)).toEqual(['Jack', 'Jerry', 'Lucy', 'Tom']);
  });

  it('default sort order descend', () => {
    const { container } = render(createTable({}, { defaultSortOrder: 'descend' }));

    expect(renderedNames(container)).toEqual(['Tom', 'Lucy', 'Jack', 'Jerry']);
    expect(container.querySelector('th')?.getAttribute('aria-sort')).toEqual('descending');
  });
  it('sort will work when column with children', () => {
    const onChange = jest.fn();
    const tableData = [
      {
        key: '1',
        estimatedTicketsLeft: 100,
        estimatedTicketsLeftPercentage: 50.25,
      },
      {
        key: '2',
        estimatedTicketsLeft: 200,
        estimatedTicketsLeftPercentage: 75.5,
      },
      {
        key: '3',
        estimatedTicketsLeft: 50,
        estimatedTicketsLeftPercentage: 25.75,
      },
    ];
    const columns = [
      {
        title: 'Tickets',
        children: [
          {
            title: 'Amount',
            dataIndex: 'estimatedTicketsLeft',
            sorter: (a: any, b: any) => a.estimatedTicketsLeft - b.estimatedTicketsLeft,
            sortDirections: ['descend', 'ascend'],
            render: (text: any) => `${text} left`,
          },
          {
            title: '[%]',
            dataIndex: 'estimatedTicketsLeftPercentage',
            sorter: (a: any, b: any) =>
              a.estimatedTicketsLeftPercentage - b.estimatedTicketsLeftPercentage,
            sortDirections: ['descend', 'ascend'],
            render: (text: any) => `${text.toFixed(2)}%`,
          },
        ],
      },
    ];
    const TableSorter: React.FC = () => (
      <Table
        columns={columns}
        dataSource={tableData}
        onChange={onChange}
        showSorterTooltip={{ target: 'sorter-icon' }}
      />
    );
    const { container } = render(<TableSorter />);
    fireEvent.click(container.querySelector('.ant-table-column-sorters')!);
    expect(renderedNames(container)).toEqual(['200 left', '100 left', '50 left']);
  });
  it('should change aria-sort when default sort order is set to descend', () => {
    const { container } = render(
      createTable({ sortDirections: ['descend', 'ascend'] }, { defaultSortOrder: 'descend' }),
    );

    const getNameColumn = () => container.querySelector('th');

    // Test that it cycles through the order of sortDirections
    expect(renderedNames(container)).toEqual(['Tom', 'Lucy', 'Jack', 'Jerry']);
    expect(getNameColumn()?.getAttribute('aria-sort')).toEqual('descending');

    fireEvent.click(container.querySelector('.ant-table-column-sorters')!);
    expect(getNameColumn()?.getAttribute('aria-sort')).toEqual('ascending');

    fireEvent.click(container.querySelector('.ant-table-column-sorters')!);
    expect(getNameColumn()?.getAttribute('aria-sort')).toEqual(null);
  });

  it('should have aria-label if the column is sortable and is not sorted', () => {
    const { container } = render(
      createTable(
        {
          sortDirections: ['descend', 'ascend'],
        },
        {
          defaultSortOrder: 'descend',
        },
      ),
    );

    const getNameColumn = () => container.querySelector('th');

    expect(renderedNames(container)).toEqual(['Tom', 'Lucy', 'Jack', 'Jerry']);
    expect(getNameColumn()?.getAttribute('aria-sort')).toEqual('descending');
    expect(getNameColumn()?.getAttribute('aria-label')).toEqual('Name');

    fireEvent.click(container.querySelector('.ant-table-column-sorters')!);
    expect(getNameColumn()?.getAttribute('aria-sort')).toEqual('ascending');
    expect(getNameColumn()?.getAttribute('aria-label')).toEqual('Name');

    fireEvent.click(container.querySelector('.ant-table-column-sorters')!);
    expect(getNameColumn()?.getAttribute('aria-sort')).toEqual(null);
    expect(getNameColumn()?.getAttribute('aria-label')).toEqual('Name');
  });

  it('sort records', () => {
    const { container } = render(createTable());
    const getNameColumn = () => container.querySelector('th');

    // first assert default state
    expect(renderedNames(container)).toEqual(['Jack', 'Lucy', 'Tom', 'Jerry']);
    expect(getNameColumn()?.getAttribute('aria-sort')).toEqual(null);

    // ascend
    fireEvent.click(container.querySelector('.ant-table-column-sorters')!);
    expect(renderedNames(container)).toEqual(['Jack', 'Jerry', 'Lucy', 'Tom']);
    expect(getNameColumn()?.getAttribute('aria-sort')).toEqual('ascending');

    // descend
    fireEvent.click(container.querySelector('.ant-table-column-sorters')!);
    expect(renderedNames(container)).toEqual(['Tom', 'Lucy', 'Jack', 'Jerry']);
    expect(getNameColumn()?.getAttribute('aria-sort')).toEqual('descending');
  });

  it('sort records when press enter', () => {
    const { container } = render(createTable());

    // ascend
    fireEvent.keyDown(container.querySelector('.ant-table-column-sorters')!, { keyCode: 13 });
    expect(renderedNames(container)).toEqual(['Jack', 'Jerry', 'Lucy', 'Tom']);

    // descend
    fireEvent.keyDown(container.querySelector('.ant-table-column-sorters')!, { keyCode: 13 });
    expect(renderedNames(container)).toEqual(['Tom', 'Lucy', 'Jack', 'Jerry']);
  });

  // https://github.com/ant-design/ant-design/issues/38579
  it('should not sort records when press enter in filter dropdown', () => {
    const { container } = render(
      createTable({
        columns: [
          {
            ...column,
            filters: [{ text: 'J', value: 'J' }],
            onFilter: (value: any, record: any) => record.name.includes(value),
            filterDropdownOpen: true,
          },
        ],
      }),
    );

    // don't trigger ascend
    fireEvent.keyDown(container.querySelector('.ant-table-filter-dropdown')!, { keyCode: 13 });
    expect(renderedNames(container)).toEqual(['Jack', 'Lucy', 'Tom', 'Jerry']);

    // don't trigger descend
    fireEvent.keyDown(container.querySelector('.ant-table-filter-dropdown')!, { keyCode: 13 });
    expect(renderedNames(container)).toEqual(['Jack', 'Lucy', 'Tom', 'Jerry']);
  });

  describe('can be controlled by sortOrder', () => {
    it('single', () => {
      const { container } = render(
        createTable({
          columns: [{ ...column, sortOrder: 'ascend' }],
        }),
      );
      expect(renderedNames(container)).toEqual(['Jack', 'Jerry', 'Lucy', 'Tom']);
    });

    it('invalidate mix with single & multiple sorters', () => {
      const { container } = render(
        createTable({
          columns: [
            {
              title: 'Name',
              dataIndex: 'name',
              sortOrder: 'ascend',
              sorter: {
                multiple: 1,
              },
            },
            {
              title: 'Name',
              dataIndex: 'name',
              sortOrder: 'ascend',
              sorter: {},
            },
          ],
        }),
      );

      expect(renderedNames(container)).toEqual(['Jack', 'Lucy', 'Tom', 'Jerry']);
    });
  });

  it('provides sortOrder in the sorterFn', () => {
    let actualSortOrder: SortOrder;
    render(
      createTable(
        {},
        {
          sortOrder: 'ascend',
          sorter: (a: any, b: any, sortOrder: SortOrder) => {
            actualSortOrder = sortOrder;
            return sorterFn(a, b);
          },
        },
      ),
    );
    expect(actualSortOrder!).toEqual('ascend');
  });

  it('can update column sortOrder', () => {
    const { container, rerender } = render(
      createTable({
        columns: [column],
      }),
    );
    expect(renderedNames(container)).toEqual(['Jack', 'Lucy', 'Tom', 'Jerry']);
    rerender(
      createTable({
        columns: [{ ...column, sortOrder: 'ascend' }],
      }),
    );
    expect(renderedNames(container)).toEqual(['Jack', 'Jerry', 'Lucy', 'Tom']);
  });

  it('fires change event', () => {
    const handleChange = jest.fn();
    const { container } = render(createTable({ onChange: handleChange }));

    // ascent
    fireEvent.click(container.querySelector('.ant-table-column-sorters')!);
    const sorter1 = handleChange.mock.calls[0][2];
    expect(sorter1.column.dataIndex).toBe('name');
    expect(sorter1.order).toBe('ascend');
    expect(sorter1.field).toBe('name');
    expect(sorter1.columnKey).toBe('name');

    fireEvent.click(container.querySelector('.ant-table-column-sorters')!);
    const sorter2 = handleChange.mock.calls[1][2];
    expect(sorter2.column.dataIndex).toBe('name');
    expect(sorter2.order).toBe('descend');
    expect(sorter2.field).toBe('name');
    expect(sorter2.columnKey).toBe('name');

    fireEvent.click(container.querySelector('.ant-table-column-sorters')!);
    const sorter3 = handleChange.mock.calls[2][2];
    expect(sorter3.column).toBe(undefined);
    expect(sorter3.order).toBe(undefined);
    expect(sorter3.field).toBe(undefined);
    expect(sorter3.columnKey).toBe(undefined);
  });

  it('should not retain sorter value when page changes after cancelling sort', () => {
    const handleChange = jest.fn();
    const { container } = render(
      createTable({
        onChange: handleChange,
        pagination: { pageSize: 2 },
      }),
    );

    // ascending sort
    fireEvent.click(container.querySelector('.ant-table-column-sorters')!);
    expect(handleChange).toHaveBeenCalledTimes(1);
    let sorter = handleChange.mock.calls[0][2];
    expect(sorter.column.dataIndex).toBe('name');
    expect(sorter.order).toBe('ascend');
    expect(sorter.field).toBe('name');
    expect(sorter.columnKey).toBe('name');

    // descending sort
    fireEvent.click(container.querySelector('.ant-table-column-sorters')!);
    expect(handleChange).toHaveBeenCalledTimes(2);
    sorter = handleChange.mock.calls[1][2];
    expect(sorter.column.dataIndex).toBe('name');
    expect(sorter.order).toBe('descend');
    expect(sorter.field).toBe('name');
    expect(sorter.columnKey).toBe('name');

    // cancel sort
    fireEvent.click(container.querySelector('.ant-table-column-sorters')!);
    expect(handleChange).toHaveBeenCalledTimes(3);
    sorter = handleChange.mock.calls[2][2];
    expect(sorter.column).toBe(undefined);
    expect(sorter.order).toBe(undefined);
    expect(sorter.field).toBe(undefined);
    expect(sorter.columnKey).toBe(undefined);

    // change page
    fireEvent.click(container.querySelector('.ant-pagination-item-2')!);
    expect(handleChange).toHaveBeenCalledTimes(4);
    sorter = handleChange.mock.calls[3][2];

    expect(sorter.column).toBe(undefined);
    expect(sorter.order).toBe(undefined);
    expect(sorter.field).toBe(undefined);
    expect(sorter.columnKey).toBe(undefined);
  });

  it('hover header show sorter tooltip', () => {
    // tooltip has delay
    jest.useFakeTimers();
    const { container, rerender } = render(createTable());

    // default show sorter tooltip
    fireEvent.mouseEnter(container.querySelector('.ant-table-column-sorters')!);
    act(() => {
      jest.runAllTimers();
    });

    expect(container.querySelector('.ant-tooltip-open')).toBeTruthy();
    fireEvent.mouseOut(container.querySelector('.ant-table-column-sorters')!);

    // set table props showSorterTooltip is false
    rerender(createTable({ showSorterTooltip: false }));
    fireEvent.mouseEnter(container.querySelector('.ant-table-column-sorters')!);
    act(() => {
      jest.runAllTimers();
    });
    expect(container.querySelector('.ant-tooltip-open')).toBeFalsy();
    fireEvent.mouseOut(container.querySelector('.ant-table-column-sorters')!);

    // set table props showSorterTooltip is false, column showSorterTooltip is true
    rerender(
      createTable({ showSorterTooltip: false, columns: [{ ...column, showSorterTooltip: true }] }),
    );
    fireEvent.mouseEnter(container.querySelector('.ant-table-column-sorters')!);
    act(() => {
      jest.runAllTimers();
    });
    expect(container.querySelector('.ant-tooltip-open')).toBeTruthy();
    fireEvent.mouseOut(container.querySelector('.ant-table-column-sorters')!);

    // set table props showSorterTooltip is true, column showSorterTooltip is false
    rerender(
      createTable({
        showSorterTooltip: true,
        columns: [{ ...column, showSorterTooltip: false }],
      }),
    );
    fireEvent.mouseEnter(container.querySelector('.ant-table-column-sorters')!);
    act(() => {
      jest.runAllTimers();
    });
    expect(container.querySelector('.ant-tooltip-open')).toBeFalsy();
    fireEvent.mouseOut(container.querySelector('.ant-table-column-sorters')!);

    // table props showSorterTooltip is 'full-header' by default
    rerender(
      createTable({
        showSorterTooltip: true,
        columns: [{ ...column }],
      }),
    );
    expect(container.querySelector('.ant-table-column-sorters')).not.toHaveClass(
      'ant-table-column-sorters-tooltip-target-sorter',
    );
    fireEvent.mouseEnter(container.querySelector('.ant-table-column-sorters')!);
    act(() => {
      jest.runAllTimers();
    });
    expect(container.querySelector('.ant-tooltip-open')).toBeTruthy();
    fireEvent.mouseOut(container.querySelector('.ant-table-column-sorters')!);

    // set table props showSorterTooltip target is 'sorter-icon'
    rerender(
      createTable({
        showSorterTooltip: { target: 'sorter-icon' },
        columns: [{ ...column }],
      }),
    );
    expect(container.querySelector('.ant-table-column-sorters')).toHaveClass(
      'ant-table-column-sorters-tooltip-target-sorter',
    );
    // hovering over the sorters element does NOT open tooltip
    fireEvent.mouseEnter(container.querySelector('.ant-table-column-sorters')!);
    act(() => {
      jest.runAllTimers();
    });
    expect(container.querySelector('.ant-tooltip-open')).toBeFalsy();
    fireEvent.mouseOut(container.querySelector('.ant-table-column-sorters')!);
    // hovering over the sorter element DOES open tooltip
    fireEvent.mouseEnter(container.querySelector('.ant-table-column-sorter')!);
    act(() => {
      jest.runAllTimers();
    });
    expect(container.querySelector('.ant-tooltip-open')).toBeTruthy();
    fireEvent.mouseOut(container.querySelector('.ant-table-column-sorter')!);

    // set table props showSorterTooltip target is 'sorter-icon', column showSorterTooltip target is 'full-header'
    rerender(
      createTable({
        showSorterTooltip: { target: 'sorter-icon' },
        columns: [{ ...column, showSorterTooltip: { target: 'full-header' } }],
      }),
    );
    expect(container.querySelector('.ant-table-column-sorters')).not.toHaveClass(
      'ant-table-column-sorters-tooltip-target-sorter',
    );
    fireEvent.mouseEnter(container.querySelector('.ant-table-column-sorters')!);
    act(() => {
      jest.runAllTimers();
    });
    expect(container.querySelector('.ant-tooltip-open')).toBeTruthy();
    fireEvent.mouseOut(container.querySelector('.ant-table-column-sorters')!);

    // set table props showSorterTooltip target is 'full-header', column showSorterTooltip target is 'sorter-icon'
    rerender(
      createTable({
        showSorterTooltip: { target: 'full-header' },
        columns: [{ ...column, showSorterTooltip: { target: 'sorter-icon' } }],
      }),
    );
    expect(container.querySelector('.ant-table-column-sorters')).toHaveClass(
      'ant-table-column-sorters-tooltip-target-sorter',
    );
    // hovering over the sorters element does NOT open tooltip
    fireEvent.mouseEnter(container.querySelector('.ant-table-column-sorters')!);
    act(() => {
      jest.runAllTimers();
    });
    expect(container.querySelector('.ant-tooltip-open')).toBeFalsy();
    fireEvent.mouseOut(container.querySelector('.ant-table-column-sorters')!);
    // hovering over the title element does NOT open tooltip
    fireEvent.mouseEnter(container.querySelector('.ant-table-column-title')!);
    act(() => {
      jest.runAllTimers();
    });
    expect(container.querySelector('.ant-tooltip-open')).toBeFalsy();
    // hovering over the sorter element DOES open tooltip
    fireEvent.mouseEnter(container.querySelector('.ant-table-column-sorter')!);
    act(() => {
      jest.runAllTimers();
    });
    expect(container.querySelector('.ant-tooltip-open')).toBeTruthy();
    fireEvent.mouseOut(container.querySelector('.ant-table-column-sorter')!);
  });

  it('should show correct tooltip when showSorterTooltip is an object', () => {
    // basically copied from 'hover header show sorter tooltip'
    jest.useFakeTimers();
    const { container, rerender } = render(
      createTable({ showSorterTooltip: { placement: 'bottom', title: 'static title' } }),
    );

    fireEvent.mouseEnter(container.querySelector('.ant-table-column-sorters')!);
    act(() => {
      jest.runAllTimers();
    });
    expect(container.querySelector('.ant-tooltip-open')).toBeTruthy();
    fireEvent.mouseOut(container.querySelector('.ant-table-column-sorters')!);

    // should merge original title into showSorterTooltip object
    rerender(
      createTable({
        showSorterTooltip: {
          classNames: { root: 'custom-tooltip' },
        },
      }),
    );
    fireEvent.mouseEnter(container.querySelector('.ant-table-column-sorters')!);
    act(() => {
      jest.runAllTimers();
    });
    expect(container.querySelector('.ant-tooltip-open')).toBeTruthy();
    fireEvent.mouseOut(container.querySelector('.ant-table-column-sorters')!);

    // Root to false
    rerender(createTable({ showSorterTooltip: false }));
    act(() => {
      jest.runAllTimers();
    });
    expect(container.querySelector('.ant-tooltip-open')).toBeFalsy();

    // Column to true
    rerender(
      createTable({
        showSorterTooltip: false,
        columns: [{ ...column, showSorterTooltip: true }],
      }),
    );
    fireEvent.mouseEnter(container.querySelector('.ant-table-column-sorters')!);
    act(() => {
      jest.runAllTimers();
    });
    expect(container.querySelector('.ant-tooltip-open')).toBeTruthy();
    fireEvent.mouseOut(container.querySelector('.ant-table-column-sorters')!);

    // Column to false
    rerender(
      createTable({
        showSorterTooltip: true,
        columns: [{ ...column, showSorterTooltip: false }],
      }),
    );
    act(() => {
      jest.runAllTimers();
    });
    expect(container.querySelector('.ant-tooltip-open')).toBeFalsy();
  });

  it('renders custom sort icon correctly', () => {
    const sortIcon = ({ sortOrder }: { sortOrder?: SortOrder }): React.ReactNode => {
      let text: string;
      if (sortOrder === undefined) {
        text = 'unsorted';
      } else if (sortOrder === 'descend') {
        text = 'sortDescend';
      } else {
        text = 'sortAscend';
      }

      return <span className="customize-icon">{text}</span>;
    };

    const { container } = render(
      createTable({
        columns: [
          {
            ...column,
            sortIcon,
          },
        ],
      }),
    );

    fireEvent.click(container.querySelector('.customize-icon')!);
    expect(container.querySelector('.customize-icon')).toMatchSnapshot();
    fireEvent.click(container.querySelector('.customize-icon')!);
    expect(container.querySelector('.customize-icon')).toMatchSnapshot();
    fireEvent.click(container.querySelector('.customize-icon')!);
    expect(container.querySelector('.customize-icon')).toMatchSnapshot();
  });

  it('works with grouping columns in controlled mode', () => {
    const columns = [
      {
        title: 'group',
        key: 'group',
        children: [
          {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            sorter: sorterFn,
            sortOrder: 'descend',
          },
          {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
          },
        ],
      },
    ];
    const testData = [
      { key: 0, name: 'Jack', age: 11 },
      { key: 1, name: 'Lucy', age: 20 },
      { key: 2, name: 'Tom', age: 21 },
      { key: 3, name: 'Jerry', age: 22 },
    ];
    const { container } = render(<Table columns={columns} dataSource={testData} />);

    expect(renderedNames(container)).toEqual(['Tom', 'Lucy', 'Jack', 'Jerry']);
  });

  // https://github.com/ant-design/ant-design/issues/11246#issuecomment-405009167
  it('Allow column title as render props with sortOrder argument', () => {
    const title: NonNullable<TableProps['columns']>[number]['title'] = ({ sortColumns }) => (
      <div className="custom-title">{sortColumns?.[0]?.order}</div>
    );
    const columns: TableProps['columns'] = [{ title, key: 'group', sorter: true }];
    const testData = [
      { key: 0, name: 'Jack', age: 11 },
      { key: 1, name: 'Lucy', age: 20 },
      { key: 2, name: 'Tom', age: 21 },
      { key: 3, name: 'Jerry', age: 22 },
    ];
    const { container } = render(<Table columns={columns} dataSource={testData} />);
    expect(container.querySelector('.custom-title')?.textContent).toEqual('');
    fireEvent.click(container.querySelector('.ant-table-column-sorters')!);
    expect(container.querySelector('.custom-title')?.textContent).toEqual('ascend');
    fireEvent.click(container.querySelector('.ant-table-column-sorters')!);
    expect(container.querySelector('.custom-title')?.textContent).toEqual('descend');
  });

  // https://github.com/ant-design/ant-design/pull/12264#discussion_r218053034
  it('should sort from beginning state when toggle from different columns', () => {
    const columns: TableProps['columns'] = [
      { title: 'name', dataIndex: 'name', sorter: true },
      { title: 'age', dataIndex: 'age', sorter: true },
    ];
    const testData = [
      { key: 0, name: 'Jack', age: 11 },
      { key: 1, name: 'Lucy', age: 20 },
      { key: 2, name: 'Tom', age: 21 },
      { key: 3, name: 'Jerry', age: 22 },
    ];
    const { container } = render(<Table columns={columns} dataSource={testData} />);

    const getNameColumn = () =>
      container.querySelectorAll<HTMLElement>('.ant-table-column-has-sorters')[0];
    const getAgeColumn = () =>
      container.querySelectorAll<HTMLElement>('.ant-table-column-has-sorters')[1];
    const getNameIcon = (name: string) =>
      getNameColumn()?.querySelector(`.ant-table-column-sorter-${name}`);
    const getAgeIcon = (name: string) =>
      getAgeColumn().querySelector(`.ant-table-column-sorter-${name}`);

    // sort name
    fireEvent.click(getNameColumn()!);
    expect(getNameIcon('up')?.className.includes('active')).toBeTruthy();
    expect(getNameColumn()?.getAttribute('aria-sort')).toEqual('ascending');
    expect(getAgeIcon('up')?.className.includes('active')).toBeFalsy();
    expect(getAgeColumn().getAttribute('aria-sort')).toEqual(null);

    // sort age
    fireEvent.click(getAgeColumn());
    expect(getNameIcon('up')?.className.includes('active')).toBeFalsy();
    expect(getNameColumn()?.getAttribute('aria-sort')).toEqual(null);
    expect(getAgeIcon('up')?.className.includes('active')).toBeTruthy();
    expect(getAgeColumn().getAttribute('aria-sort')).toEqual('ascending');
  });

  // https://github.com/ant-design/ant-design/issues/12571
  it('should toggle sort state when columns are put in render', () => {
    const testData = [
      { key: 0, name: 'Jack', age: 11 },
      { key: 1, name: 'Lucy', age: 20 },
      { key: 2, name: 'Tom', age: 21 },
      { key: 3, name: 'Jerry', age: 22 },
    ];
    const columns: TableProps['columns'] = [{ title: 'name', dataIndex: 'name', sorter: true }];
    const TableTest: React.FC = () => {
      const [pagination, setPagination] = React.useState<TablePaginationConfig>({});
      const onChange: TableProps<any>['onChange'] = (pag) => {
        setPagination(pag);
      };
      return (
        <Table
          columns={columns}
          pagination={pagination}
          dataSource={testData}
          onChange={onChange}
        />
      );
    };

    const { container } = render(<TableTest />);

    const getNameColumn = () => container.querySelector('th');
    const getIcon = (name: string) =>
      getNameColumn()?.querySelector(`.ant-table-column-sorter-${name}`);

    expect(getIcon('up')?.className.includes('active')).toBeFalsy();
    expect(getIcon('down')?.className.includes('active')).toBeFalsy();

    // sort name
    fireEvent.click(getNameColumn()!);
    expect(getIcon('up')?.className.includes('active')).toBeTruthy();
    expect(getIcon('down')?.className.includes('active')).toBeFalsy();
    expect(getNameColumn()?.getAttribute('aria-sort')).toEqual('ascending');

    // sort name
    fireEvent.click(getNameColumn()!);
    expect(getIcon('up')?.className.includes('active')).toBeFalsy();
    expect(getIcon('down')?.className.includes('active')).toBeTruthy();
    expect(getNameColumn()?.getAttribute('aria-sort')).toEqual('descending');

    // sort name
    fireEvent.click(getNameColumn()!);
    expect(getIcon('up')?.className.includes('active')).toBeFalsy();
    expect(getIcon('down')?.className.includes('active')).toBeFalsy();
    expect(getNameColumn()?.getAttribute('aria-sort')).toEqual(null);
  });

  // https://github.com/ant-design/ant-design/issues/12737
  // https://github.com/ant-design/ant-design/issues/19398
  it('should toggle sort state when columns with non primitive properties are put in render', () => {
    const testData = [
      { key: 0, name: 'Jack', age: 11 },
      { key: 1, name: 'Lucy', age: 20 },
      { key: 2, name: 'Tom', age: 21 },
      { key: 3, name: 'Jerry', age: 22 },
    ];
    const columns: TableProps['columns'] = [
      {
        title: 'name',
        dataIndex: 'name',
        sorter: true,
        // @ts-ignore
        array: ['1', '2', 3],
        render: (text: string) => text,
      },
    ];
    const TableTest: React.FC = () => {
      const [pagination, setPagination] = React.useState<TablePaginationConfig>({});
      const onChange: TableProps<any>['onChange'] = (pag) => {
        setPagination(pag);
      };
      return (
        <Table
          columns={columns}
          pagination={pagination}
          dataSource={testData}
          onChange={onChange}
        />
      );
    };

    const { container } = render(<TableTest />);

    const getNameColumn = () => container.querySelector('th');
    const getIcon = (name: string) =>
      getNameColumn()?.querySelector(`.ant-table-column-sorter-${name}`);

    expect(getIcon('up')?.className.includes('active')).toBeFalsy();
    expect(getIcon('down')?.className.includes('active')).toBeFalsy();

    // sort name
    fireEvent.click(getNameColumn()!);
    expect(getIcon('up')?.className.includes('active')).toBeTruthy();
    expect(getIcon('down')?.className.includes('active')).toBeFalsy();
    expect(getNameColumn()?.getAttribute('aria-sort')).toEqual('ascending');

    // sort name
    fireEvent.click(getNameColumn()!);
    expect(getIcon('up')?.className.includes('active')).toBeFalsy();
    expect(getIcon('down')?.className.includes('active')).toBeTruthy();
    expect(getNameColumn()?.getAttribute('aria-sort')).toEqual('descending');

    // sort name
    fireEvent.click(getNameColumn()!);
    expect(getIcon('up')?.className.includes('active')).toBeFalsy();
    expect(getIcon('down')?.className.includes('active')).toBeFalsy();
    expect(getNameColumn()?.getAttribute('aria-sort')).toEqual(null);
  });

  // https://github.com/ant-design/ant-design/issues/12870
  it('should toggle sort state when columns with key are put in render', () => {
    const testData = [
      { key: 0, name: 'Jack', age: 11 },
      { key: 1, name: 'Lucy', age: 20 },
      { key: 2, name: 'Tom', age: 21 },
      { key: 3, name: 'Jerry', age: 22 },
    ];
    const columns: TableProps['columns'] = [
      {
        title: 'name',
        dataIndex: 'name',
        sorter: true,
        key: 'a',
        // @ts-ignore
        style: { fontSize: 18 },
      },
    ];
    const TableTest: React.FC = () => {
      const [pagination, setPagination] = React.useState<TablePaginationConfig>({});
      const onChange: TableProps<any>['onChange'] = (pag) => {
        setPagination(pag);
      };
      return (
        <Table
          columns={columns}
          pagination={pagination}
          dataSource={testData}
          onChange={onChange}
        />
      );
    };

    const { container } = render(<TableTest />);
    const getNameColumn = () => container.querySelector('th');
    expect(
      getNameColumn()?.querySelector('.ant-table-column-sorter-up')?.className.includes('active'),
    ).toBeFalsy();
    expect(
      getNameColumn()?.querySelector('.ant-table-column-sorter-down')?.className.includes('active'),
    ).toBeFalsy();
    expect(getNameColumn()?.getAttribute('aria-sort')).toEqual(null);

    // sort name
    fireEvent.click(getNameColumn()!);
    expect(
      getNameColumn()?.querySelector('.ant-table-column-sorter-up')?.className.includes('active'),
    ).toBeTruthy();
    expect(
      getNameColumn()?.querySelector('.ant-table-column-sorter-down')?.className.includes('active'),
    ).toBeFalsy();
    expect(getNameColumn()?.getAttribute('aria-sort')).toEqual('ascending');

    // sort name
    fireEvent.click(getNameColumn()!);
    expect(
      getNameColumn()?.querySelector('.ant-table-column-sorter-up')?.className.includes('active'),
    ).toBeFalsy();
    expect(
      getNameColumn()?.querySelector('.ant-table-column-sorter-down')?.className.includes('active'),
    ).toBeTruthy();
    expect(getNameColumn()?.getAttribute('aria-sort')).toEqual('descending');

    // sort name
    fireEvent.click(getNameColumn()!);
    expect(
      getNameColumn()?.querySelector('.ant-table-column-sorter-up')?.className.includes('active'),
    ).toBeFalsy();
    expect(
      getNameColumn()?.querySelector('.ant-table-column-sorter-down')?.className.includes('active'),
    ).toBeFalsy();
    expect(getNameColumn()?.getAttribute('aria-sort')).toEqual(null);
  });

  it('should first sort by descend, then ascend, then cancel sort', () => {
    const { container } = render(createTable({ sortDirections: ['descend', 'ascend'] }));
    const getNameColumn = () => container.querySelector('th');

    // descend
    fireEvent.click(getNameColumn()!);
    expect(renderedNames(container)).toEqual(['Tom', 'Lucy', 'Jack', 'Jerry']);
    expect(getNameColumn()?.getAttribute('aria-sort')).toEqual('descending');

    // ascend
    fireEvent.click(getNameColumn()!);
    expect(renderedNames(container)).toEqual(['Jack', 'Jerry', 'Lucy', 'Tom']);
    expect(getNameColumn()?.getAttribute('aria-sort')).toEqual('ascending');

    // cancel sort
    fireEvent.click(getNameColumn()!);
    expect(renderedNames(container)).toEqual(['Jack', 'Lucy', 'Tom', 'Jerry']);
    expect(getNameColumn()?.getAttribute('aria-sort')).toEqual(null);
  });

  it('should first sort by descend, then cancel sort', () => {
    const { container } = render(
      createTable({
        sortDirections: ['descend'],
      }),
    );

    const getNameColumn = () => container.querySelector('th');

    // default
    expect(getNameColumn()?.getAttribute('aria-sort')).toEqual(null);

    // descend
    fireEvent.click(getNameColumn()!);
    expect(renderedNames(container)).toEqual(['Tom', 'Lucy', 'Jack', 'Jerry']);
    expect(getNameColumn()?.getAttribute('aria-sort')).toEqual('descending');

    // cancel sort
    fireEvent.click(getNameColumn()!);
    expect(renderedNames(container)).toEqual(['Jack', 'Lucy', 'Tom', 'Jerry']);
    expect(getNameColumn()?.getAttribute('aria-sort')).toEqual(null);
  });

  it('should first sort by descend, then cancel sort. (column prop)', () => {
    const { container } = render(
      createTable(
        {},
        {
          sortDirections: ['descend'],
        },
      ),
    );

    const getNameColumn = () => container.querySelector('th');

    // default
    expect(getNameColumn()?.getAttribute('aria-sort')).toEqual(null);

    // descend
    fireEvent.click(getNameColumn()!);
    expect(renderedNames(container)).toEqual(['Tom', 'Lucy', 'Jack', 'Jerry']);
    expect(getNameColumn()?.getAttribute('aria-sort')).toEqual('descending');

    // cancel sort
    fireEvent.click(getNameColumn()!);
    expect(renderedNames(container)).toEqual(['Jack', 'Lucy', 'Tom', 'Jerry']);
    expect(getNameColumn()?.getAttribute('aria-sort')).toEqual(null);
  });

  it('pagination back', () => {
    const onPageChange = jest.fn();
    const onChange = jest.fn();

    const { container } = render(
      createTable({
        pagination: {
          pageSize: 2,
          defaultCurrent: 2,
          onChange: onPageChange,
        },
        onChange,
      }),
    );

    const getNameColumn = () => container.querySelector('th');

    expect(getNameColumn()?.getAttribute('aria-sort')).toEqual(null);

    fireEvent.click(getNameColumn()!);
    expect(onChange.mock.calls[0][0].current).toBe(2);
    expect(onPageChange).not.toHaveBeenCalled();
    expect(getNameColumn()?.getAttribute('aria-sort')).toEqual('ascending');
  });

  it('should support onHeaderCell in sort column', () => {
    const onClick = jest.fn();
    const { container } = render(
      <Table columns={[{ title: 'title', onHeaderCell: () => ({ onClick }), sorter: true }]} />,
    );
    fireEvent.click(container.querySelector('th')!);
    expect(onClick).toHaveBeenCalled();
  });

  it('could sort data with children', () => {
    const { container } = render(
      createTable(
        {
          defaultExpandAllRows: true,
          dataSource: [
            {
              key: '1',
              name: 'Brown',
              children: [
                {
                  key: '2',
                  name: 'Zoe',
                },
                {
                  key: '3',
                  name: 'Mike',
                  children: [
                    {
                      key: '3-1',
                      name: 'Petter',
                    },
                    {
                      key: '3-2',
                      name: 'Alex',
                    },
                  ],
                },
                {
                  key: '4',
                  name: 'Green',
                },
              ],
            },
          ],
        },
        { defaultSortOrder: 'ascend' },
      ),
    );

    expect(renderedNames(container)).toEqual(['Brown', 'Green', 'Mike', 'Alex', 'Petter', 'Zoe']);
  });

  // https://github.com/ant-design/ant-design/issues/19443
  it('should not being infinite loop when using Table.Column with sortOrder', () => {
    const Demo: React.FC = () => (
      <Table dataSource={[]}>
        <Table.Column title="Age" dataIndex="age" sorter sortOrder="ascend" key="age" />
      </Table>
    );
    expect(() => {
      render(<Demo />);
    }).not.toThrow();
  });

  it('should support defaultOrder in Column', () => {
    const { asFragment } = render(
      <Table dataSource={[{ key: '1', age: 1 }]}>
        <Table.Column title="Age" dataIndex="age" sorter defaultSortOrder="ascend" key="age" />
      </Table>,
    );
    expect(asFragment().firstChild).toMatchSnapshot();
  });

  // https://github.com/ant-design/ant-design/issues/20096
  it('invalidate sorter should not display sorter button', () => {
    const { container } = render(
      <Table
        columns={[
          {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            sorter: false,
          },
          {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
            sorter: null as unknown as ColumnType<any>['sorter'],
          },
          {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
            sorter: undefined,
          },
        ]}
      />,
    );

    expect(container.querySelectorAll('.ant-table-column-sorter-inner')).toHaveLength(0);
  });

  // https://github.com/ant-design/ant-design/issues/21193
  it('table with sugar column', () => {
    const { container } = render(
      <Table>
        <Table.Column
          title="Chinese Score"
          dataIndex="chinese"
          sorter={{
            compare: (a: any, b: any) => a.chinese - b.chinese,
            multiple: 3,
          }}
        />
        <Table.Column
          title="Math Score"
          dataIndex="math"
          sorter={{
            compare: (a: any, b: any) => a.math - b.math,
            multiple: 2,
          }}
        />
      </Table>,
    );

    fireEvent.click(container.querySelector('th')!);

    expect(container.querySelectorAll('th.ant-table-column-sort')).toHaveLength(1);
  });

  it('surger should support sortOrder', () => {
    const { container } = render(
      <Table>
        <Table.Column key="name" title="Name" dataIndex="name" sortOrder="ascend" sorter />
      </Table>,
    );

    expect(
      container.querySelector('.ant-table-column-sorter-up')?.className.includes('active'),
    ).toBeTruthy();
    expect(
      container.querySelector('.ant-table-column-sorter-down')?.className.includes('active'),
    ).toBeFalsy();
  });

  it('controlled multiple group', () => {
    const groupColumns: TableProps['columns'] = [
      {
        title: 'Math Score',
        dataIndex: 'math1',
        sortOrder: 'ascend',
        sorter: { multiple: 1 },
        children: [
          {
            title: 'math',
            dataIndex: 'math',
          },
        ],
      },
      {
        title: 'English Score',
        dataIndex: 'english',
        sortOrder: 'descend',
        sorter: { multiple: 2 },
      },
    ];

    const groupData = [
      {
        key: '1',
        name: 'John Brown',
        chinese: 98,
        math: 60,
        english: 70,
      },
    ];
    const dataProp = { data: groupData };
    const { container } = render(<Table columns={groupColumns} {...dataProp} />);

    expect(
      container
        ?.querySelectorAll('.ant-table-column-sorter-full')?.[0]
        ?.querySelector('.ant-table-column-sorter-up')
        ?.className.includes('active'),
    ).toBeTruthy();
    expect(
      container
        ?.querySelectorAll('.ant-table-column-sorter-full')?.[1]
        ?.querySelector('.ant-table-column-sorter-down')
        ?.className.includes('active'),
    ).toBeTruthy();
  });

  it('onChange with correct sorter for multiple', () => {
    const groupColumns = [
      {
        title: 'Math Score',
        dataIndex: 'math',
        sorter: { multiple: 1 },
      },
      {
        title: 'English Score',
        dataIndex: 'english',
        sorter: { multiple: 2 },
      },
    ];

    const groupData = [
      {
        key: '1',
        name: 'John Brown',
        chinese: 98,
        math: 60,
        english: 70,
      },
    ];

    const onChange = jest.fn();
    const dataProp = { data: groupData };
    const { container } = render(
      <Table columns={groupColumns} {...dataProp} onChange={onChange} />,
    );

    function clickToMatchExpect(
      index: number,
      sorter: { field: string | undefined; order: SortOrder },
    ) {
      fireEvent.click(container.querySelectorAll('.ant-table-column-sorters')[index]);

      expect(onChange).toHaveBeenCalledWith(
        expect.anything(),
        expect.anything(),
        expect.objectContaining(sorter),
        expect.anything(),
      );

      onChange.mockReset();
    }

    // First
    clickToMatchExpect(0, { field: 'math', order: 'ascend' });
    clickToMatchExpect(0, { field: 'math', order: 'descend' });
    clickToMatchExpect(0, { field: undefined, order: undefined as unknown as SortOrder });

    // Last
    clickToMatchExpect(1, { field: 'english', order: 'ascend' });
    clickToMatchExpect(1, { field: 'english', order: 'descend' });
    clickToMatchExpect(1, { field: undefined, order: undefined as unknown as SortOrder });
  });

  // https://github.com/ant-design/ant-design/issues/37024
  it('multiple sort should pass array sorter as onChange param', () => {
    const columns: TableProps<any>['columns'] = [
      {
        title: 'Name',
        dataIndex: 'name',
      },
      {
        title: 'Chinese Score',
        dataIndex: 'chinese',
        sorter: {
          compare: (a, b) => a.chinese - b.chinese,
          multiple: 3,
        },
      },
      {
        title: 'Math Score',
        dataIndex: 'math',
        sorter: {
          compare: (a, b) => a.math - b.math,
          multiple: 2,
        },
      },
      {
        title: 'English Score',
        dataIndex: 'english',
        sorter: {
          compare: (a, b) => a.english - b.english,
          multiple: 1,
        },
      },
    ];
    const tableData = [
      {
        key: '1',
        name: 'John Brown',
        chinese: 98,
        math: 60,
        english: 70,
      },
      {
        key: '2',
        name: 'Jim Green',
        chinese: 98,
        math: 66,
        english: 89,
      },
      {
        key: '3',
        name: 'Joe Black',
        chinese: 98,
        math: 90,
        english: 70,
      },
      {
        key: '4',
        name: 'Jim Red',
        chinese: 88,
        math: 99,
        english: 89,
      },
    ];

    const onChange = jest.fn();

    const { container } = render(
      <Table columns={columns} dataSource={tableData} onChange={onChange} />,
    );
    const sorterColumns = Array.from(container.querySelectorAll('.ant-table-column-has-sorters'));
    expect(sorterColumns.length).toBe(3);
    fireEvent.click(sorterColumns[0]);
    expect(onChange).toHaveBeenLastCalledWith(
      expect.anything(),
      expect.anything(),
      expect.objectContaining({ field: 'chinese' }),
      expect.anything(),
    );
    fireEvent.click(sorterColumns[1]);
    expect(onChange).toHaveBeenLastCalledWith(
      expect.anything(),
      expect.anything(),
      expect.arrayContaining([
        expect.objectContaining({ field: 'chinese' }),
        expect.objectContaining({ field: 'math' }),
      ]),
      expect.anything(),
    );
    fireEvent.click(sorterColumns[2]);
    expect(onChange).toHaveBeenLastCalledWith(
      expect.anything(),
      expect.anything(),
      expect.arrayContaining([
        expect.objectContaining({ field: 'chinese' }),
        expect.objectContaining({ field: 'math' }),
        expect.objectContaining({ field: 'english' }),
      ]),
      expect.anything(),
    );
  });

  it('only sortable columns should have aria-description attribute', () => {
    const columns: TableProps['columns'] = [
      { title: 'name', dataIndex: 'name', sorter: true },
      { title: 'age', dataIndex: 'age' },
    ];
    const testData = [
      { key: 0, name: 'Jack', age: 11 },
      { key: 1, name: 'Lucy', age: 20 },
      { key: 2, name: 'Tom', age: 21 },
      { key: 3, name: 'Jerry', age: 22 },
    ];
    const { container } = render(<Table columns={columns} dataSource={testData} />);

    const getNameColumn = () => container.querySelectorAll<HTMLElement>('th')[0];
    const getAgeColumn = () => container.querySelectorAll<HTMLElement>('th')[1];

    expect(getNameColumn()).toHaveAttribute('aria-description', 'sortable column');
    expect(getAgeColumn()).not.toHaveAttribute('aria-description');
  });
});
