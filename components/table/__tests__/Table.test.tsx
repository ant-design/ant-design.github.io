import React, { useRef } from 'react';
import { ConfigProvider } from 'antd';

import type { TableProps, TableRef } from '..';
import Table from '..';
import mountTest from '../../../tests/shared/mountTest';
import rtlTest from '../../../tests/shared/rtlTest';
import { fireEvent, render, waitFakeTimer } from '../../../tests/utils';

const { Column, ColumnGroup } = Table;

describe('Table', () => {
  mountTest(Table);
  rtlTest(Table);

  const warnSpy = jest.spyOn(console, 'error').mockImplementation(() => {});

  afterAll(() => {
    warnSpy.mockRestore();
  });

  it('renders JSX correctly', () => {
    const data = [
      {
        key: '1',
        firstName: 'John',
        lastName: 'Brown',
        age: 32,
      },
      {
        key: '2',
        firstName: 'Jim',
        lastName: 'Green',
        age: 42,
      },
    ];

    const { asFragment } = render(
      <Table dataSource={data} pagination={false}>
        <ColumnGroup title="Name">
          <Column title="First Name" dataIndex="firstName" key="firstName" />
          <Column title="Last Name" dataIndex="lastName" key="lastName" />
        </ColumnGroup>
        <Column title="Age" dataIndex="age" key="age" />
        {'invalid child'}
      </Table>,
    );

    expect(asFragment().firstChild).toMatchSnapshot();
  });

  it('updates columns when receiving props', () => {
    const columns = [
      {
        title: 'Name',
        key: 'name',
        dataIndex: 'name',
      },
    ];
    const { container, rerender } = render(<Table columns={columns} />);

    const newColumns = [
      {
        title: 'Title',
        key: 'title',
        dataIndex: 'title',
      },
    ];
    rerender(<Table columns={newColumns} />);
    expect(container.querySelector('th')?.textContent).toEqual('Title');
  });

  it('loading with Spin', async () => {
    jest.useFakeTimers();
    const loading = {
      spinning: false,
      delay: 500,
    };
    const { container, rerender } = render(<Table loading={loading} />);
    expect(container.querySelectorAll('.ant-spin')).toHaveLength(0);
    expect(container.querySelector('.ant-table-placeholder')?.textContent).not.toEqual('');

    loading.spinning = true;
    rerender(<Table loading={loading} />);
    expect(container.querySelectorAll('.ant-spin')).toHaveLength(0);
    await waitFakeTimer();
    rerender(<Table loading />);
    expect(container.querySelectorAll('.ant-spin')).toHaveLength(1);
    jest.clearAllTimers();
    jest.useRealTimers();
  });

  // https://github.com/ant-design/ant-design/issues/22733
  it('support loading tip', async () => {
    jest.useFakeTimers();
    const { container, rerender } = render(<Table loading={{ tip: 'loading...' }} />);
    await waitFakeTimer();
    rerender(
      <Table loading={{ tip: 'loading...', loading: true } as TableProps<any>['loading']} />,
    );
    expect(container.querySelectorAll('.ant-spin')).toHaveLength(1);
    jest.clearAllTimers();
    jest.useRealTimers();
  });

  it('props#columnsPageRange and props#columnsPageSize do not warn anymore', () => {
    const data = [
      { key: '1', age: 32 },
      { key: '2', age: 42 },
    ];

    const columnsPageRange = jest.fn();
    const columnsPageSize = jest.fn();
    const props = { columnsPageRange, columnsPageSize };
    render(
      <Table dataSource={data} rowKey="key" {...props}>
        <Column title="Age" dataIndex="age" key="age" />
      </Table>,
    );

    expect(warnSpy).not.toHaveBeenCalledWith(
      '`columnsPageRange` and `columnsPageSize` are removed, please use fixed columns instead, see: https://u.ant.design/fixed-columns.',
    );

    expect(columnsPageRange).not.toHaveBeenCalled();
    expect(columnsPageSize).not.toHaveBeenCalled();
  });

  it('support onHeaderCell', () => {
    const onClick = jest.fn();
    const { container } = render(
      <Table columns={[{ title: 'title', onHeaderCell: () => ({ onClick }) }]} />,
    );
    fireEvent.click(container.querySelector('th')!);
    expect(onClick).toHaveBeenCalled();
  });

  it('should not crash when column children is empty', () => {
    render(
      <Table<{ name?: string }>
        columns={[
          {
            dataIndex: 'name',
            children: undefined,
          },
        ]}
        dataSource={[]}
      />,
    );
  });

  it('should not crash when dataSource is array with none-object items', () => {
    render(
      <Table
        columns={[{ title: 'name' }]}
        dataSource={['1', 2, undefined, {}, null, true, false, 0] as TableProps<any>['dataSource']}
      />,
    );
  });

  it('prevent touch event', () => {
    // prevent touch event, 原来的用例感觉是少了 touchmove 调用判断
    const touchmove = jest.fn();
    const { container } = render(
      <Table<{ name?: string }>
        columns={[
          {
            dataIndex: 'name',
            children: undefined,
          },
        ]}
        dataSource={[]}
      />,
    );
    fireEvent.touchMove(container.querySelector('.ant-table')!);
    expect(touchmove).not.toHaveBeenCalled();
  });

  it('renders ellipsis by showTitle option', () => {
    const data = [
      {
        id: '1',
        age: 32,
      },
      {
        id: '2',
        age: 42,
      },
    ];
    const columns = [
      { title: 'id', dataKey: 'id', ellipsis: { showTitle: false } },
      { title: 'age', dataKey: 'age', ellipsis: { showTitle: false } },
    ];
    const { container } = render(<Table columns={columns} dataSource={data} />);
    container.querySelectorAll('td').forEach((td) => {
      expect(td.className.includes('ant-table-cell-ellipsis')).toBe(true);
    });
  });

  it('not renders ellipsis origin html title', () => {
    const data = [
      {
        id: '1',
        age: 32,
      },
      {
        id: '2',
        age: 42,
      },
    ];
    const columns = [
      { title: 'id', dataKey: 'id', ellipsis: { showTitle: true } },
      { title: 'age', dataKey: 'age', ellipsis: { showTitle: true } },
    ];

    const { container } = render(<Table columns={columns} dataSource={data} />);
    container.querySelectorAll<HTMLTableCellElement>('.ant-table-thead th').forEach((td) => {
      expect((td.attributes as any).title).toBeTruthy();
    });
    container.querySelectorAll('.ant-table-tbody td').forEach((td) => {
      expect((td.attributes as any).title).toBeFalsy();
    });
  });

  // https://github.com/ant-design/ant-design/issues/37977
  it('should render title when enable ellipsis, sorter and filters', () => {
    const data = [] as any;
    const columns = [
      { title: 'id', dataKey: 'id', ellipsis: true, sorter: true, filters: [] },
      { title: 'age', dataKey: 'age', ellipsis: true, sorter: true },
      { title: 'age', dataKey: 'age', ellipsis: true, filters: [] },
    ];
    const { container } = render(<Table columns={columns} dataSource={data} />);
    container
      .querySelectorAll<HTMLTableCellElement>('.ant-table-thead th.ant-table-cell')
      .forEach((td) => {
        expect((td.attributes as any).title).toBeTruthy();
      });
  });

  it('warn about rowKey when using index parameter', () => {
    warnSpy.mockReset();
    const columns: TableProps<any>['columns'] = [
      {
        title: 'Name',
        key: 'name',
        dataIndex: 'name',
      },
    ];
    render(<Table columns={columns} rowKey={(record, index) => `${record.key}${index}`} />);
    expect(warnSpy).toHaveBeenCalledWith(
      'Warning: [antd: Table] `index` parameter of `rowKey` function is deprecated. There is no guarantee that it will work as expected.',
    );
  });
  it('not warn about rowKey', () => {
    warnSpy.mockReset();
    const columns: TableProps<any>['columns'] = [
      {
        title: 'Name',
        key: 'name',
        dataIndex: 'name',
      },
    ];
    render(<Table columns={columns} rowKey={(record) => record.key as string} />);
    expect(warnSpy).not.toHaveBeenCalled();
  });

  it('should support ref', () => {
    warnSpy.mockReset();
    const columns = [
      {
        title: 'Name',
        key: 'name',
        dataIndex: 'name',
      },
    ];
    const Wrapper: React.FC = () => {
      const ref = React.useRef<any>(null);
      return <Table ref={ref} columns={columns} />;
    };
    render(<Wrapper />);
    expect(warnSpy).not.toHaveBeenCalled();
  });

  // https://github.com/ant-design/ant-design/issues/38371
  it('should render title', () => {
    const columns = [
      {
        title: (
          <div>
            <span>name</span>
            <span>Jason</span>
          </div>
        ),
        key: 'name',
        sorter: true,
      },
      {
        title: (
          <div>
            <i />
          </div>
        ),
        key: 'name',
        sorter: true,
      },
      {
        title: () => (
          <div>
            <span>age</span>
            <span>20</span>
          </div>
        ),
        key: 'name',
        sorter: true,
      },
      {
        title: () => 'color',
        key: 'name',
        sorter: true,
      },
      {
        title: 'sex',
        key: 'name',
        sorter: true,
      },
    ];
    const { container } = render(<Table columns={columns} />);
    expect(container).toMatchSnapshot();
  });

  it('title should support ReactNode', () => {
    const { container } = render(
      <Table<{ name?: string }>
        columns={[
          {
            title: (
              <div>
                <strong>Current</strong> <span>User</span>
              </div>
            ),
            dataIndex: 'name',
          },
        ]}
        dataSource={[]}
      />,
    );

    expect(container.querySelector('thead th')).toMatchSnapshot();
  });

  // https://github.com/react-component/table/pull/855
  it('support aria-* and data-*', async () => {
    const { container } = render(<Table aria-label="label" data-number="123" />);
    expect(container.querySelector('table')?.getAttribute('aria-label')).toBe('label');
    expect(container.querySelector('.ant-table')?.getAttribute('data-number')).toBe('123');
  });

  it('support wireframe', () => {
    const columns = [{ title: 'Name', key: 'name', dataIndex: 'name' }];
    const { container } = render(
      <ConfigProvider theme={{ token: { wireframe: true } }}>
        <Table columns={columns} />
      </ConfigProvider>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('support getPopupContainer inject by ConfigProvider', async () => {
    const columns = [
      {
        title: 'title',
        key: 'title',
        dataIndex: 'title',
        filters: [
          {
            text: 'filter',
            value: 'filter',
          },
        ],
      },
    ];
    const Demo = () => {
      const wrapRef = useRef(null);
      return (
        <ConfigProvider getPopupContainer={wrapRef.current!}>
          <div ref={wrapRef}>
            <Table columns={columns} />
          </div>
        </ConfigProvider>
      );
    };

    const { container } = render(<Demo />);

    fireEvent.click(container.querySelector('.ant-table-filter-trigger')!);
    await waitFakeTimer();
    expect(container.querySelector('.ant-dropdown')).toBeTruthy();
  });

  it('support reference', () => {
    const tblRef = React.createRef<TableRef>();
    const { container } = render(<Table ref={tblRef} />);

    const wrapDom = container.querySelector('.ant-table-wrapper')!;

    expect(tblRef.current).toHaveClass('ant-table-wrapper');
    expect(tblRef.current?.nativeElement).toBe(wrapDom);
    expect(typeof tblRef.current?.scrollTo === 'function').toBeTruthy();
  });

  it('support hidden columns', () => {
    const columns = [
      {
        key: 1,
        title: 'title1',
      },
      {
        key: 2,
        title: 'title2',
        hidden: true,
      },
      {
        key: 3,
        title: 'title3',
      },
    ];
    const { container } = render(<Table columns={columns} />);

    expect(container.querySelectorAll('.ant-table-thead th')[1].innerHTML).toEqual('title3');
    expect(container.querySelectorAll('.ant-table-thead th')).toHaveLength(2);
  });

  it('support hidden columns in Group table head', () => {
    const columns = [
      {
        key: '1',
        title: 'title1',
      },
      {
        key: '2',
        title: 'title2',
        hidden: true,
        children: [
          { key: '2-1', title: 'title2-1' },
          { key: '2-2', title: 'title2-2' },
          { key: '2-3', title: 'title2-3' },
        ],
      },
      {
        key: '3',
        title: 'title3',
        children: [
          { key: '3-1', title: 'title3-1', hidden: true },
          { key: '3-2', title: 'title3-2' },
          { key: '3-3', title: 'title3-3', hidden: true },
        ],
      },
    ];
    const { container } = render(<Table columns={columns} />);

    expect(
      container.querySelectorAll('.ant-table-thead tr')[0].querySelectorAll('th')[1].innerHTML,
    ).toEqual('title3');
    expect(
      container.querySelectorAll('.ant-table-thead tr')[0].querySelectorAll('th'),
    ).toHaveLength(2);
    expect(
      container.querySelectorAll('.ant-table-thead tr')[1].querySelectorAll('th')[0].innerHTML,
    ).toEqual('title3-2');
    expect(
      container.querySelectorAll('.ant-table-thead tr')[1].querySelectorAll('th'),
    ).toHaveLength(1);
  });

  it('support disable row hover', () => {
    const { container } = render(
      <Table
        columns={[
          {
            title: 'Name',
            key: 'name',
            dataIndex: 'name',
          },
        ]}
        dataSource={[
          {
            name: 'name1',
          },
        ]}
        rowHoverable={false}
      />,
    );
    const cell = container.querySelector('.ant-table-row .ant-table-cell')!;

    fireEvent.mouseEnter(cell);
    expect(container.querySelectorAll('.ant-table-cell-row-hover')).toHaveLength(0);
  });
});
