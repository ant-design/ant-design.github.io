import * as React from 'react';
import classNames from 'classnames';
import RcTable, { Column, ColumnGroup } from 'rc-table';
import { TableProps as RcTableProps } from 'rc-table/lib/Table';
import Spin, { SpinProps } from '../spin';
import Pagination, { PaginationConfig } from '../pagination';
import { ConfigContext } from '../config-provider/context';
import usePagination, { DEFAULT_PAGE_SIZE } from './hooks/usePagination';
import useLazyKVMap from './hooks/useLazyKVMap';
import {
  TableRowSelection,
  GetRowKey,
  ColumnsType,
  TableCurrentDataSource,
  SorterResult,
  Key,
  GetPopupContainer,
  TableSize,
  ExpandableConfig,
  ExpandType,
  TablePaginationConfig,
} from './interface';
import useSelection, { SELECTION_ALL, SELECTION_INVERT } from './hooks/useSelection';
import useSorter, { getSortData, SortState } from './hooks/useSorter';
import useFilter, { getFilterData, FilterState } from './hooks/useFilter';
import useTitleColumns from './hooks/useTitleColumns';
import renderExpandIcon from './ExpandIcon';
import defaultLocale from '../locale/en_US';

const EMPTY_LIST: any[] = [];

interface ChangeEventInfo<RecordType> {
  pagination: {
    current?: number;
    pageSize?: number;
    total?: number;
  };
  filters: Record<string, Key[] | null>;
  sorter: SorterResult<RecordType> | SorterResult<RecordType>[];

  filterStates: FilterState<RecordType>[];
  sorterStates: SortState<RecordType>[];

  resetPagination: Function;
}

export interface TableProps<RecordType>
  extends Omit<RcTableProps<RecordType>, 'transformColumns' | 'data' | 'expandIconColumnIndex'> {
  dropdownPrefixCls?: string;
  dataSource?: RcTableProps<RecordType>['data'];
  pagination?: false | TablePaginationConfig;
  loading?: boolean | SpinProps;
  size?: TableSize;
  bordered?: boolean;

  onChange?: (
    pagination: PaginationConfig,
    filters: Record<string, Key[] | null>,
    sorter: SorterResult<RecordType> | SorterResult<RecordType>[],
    extra: TableCurrentDataSource<RecordType>,
  ) => void;
  rowSelection?: TableRowSelection<RecordType>;

  getPopupContainer?: GetPopupContainer;
}

function Table<RecordType extends object = any>(props: TableProps<RecordType>) {
  const {
    prefixCls: customizePrefixCls,
    className,
    size,
    bordered,
    dropdownPrefixCls,
    dataSource,
    pagination,
    rowSelection,
    rowKey,
    rowClassName,
    columns,
    onChange,
    getPopupContainer,
    loading,
    expandIcon,
    expandable,
    expandedRowRender,
    indentSize,
    childrenColumnName,
  } = props;
  const { locale = defaultLocale, renderEmpty } = React.useContext(ConfigContext);
  const tableLocale = locale.Table;
  const rawData: RecordType[] = dataSource || EMPTY_LIST;

  const { getPrefixCls } = React.useContext(ConfigContext);
  const prefixCls = getPrefixCls('table', customizePrefixCls);

  const expandType: ExpandType = React.useMemo<ExpandType>(() => {
    if (rawData.some(item => (item as any)[childrenColumnName || 'children'])) {
      return 'nest';
    }

    if (expandedRowRender || (expandable && expandable.expandedRowRender)) {
      return 'row';
    }

    return null;
  }, [rawData]);

  // ============================ RowKey ============================
  const getRowKey = React.useMemo<GetRowKey<RecordType>>(() => {
    if (typeof rowKey === 'function') {
      return rowKey;
    }

    return (record: RecordType) => (record as any)[rowKey as string];
  }, [rowKey]);

  const [getRecordByKey] = useLazyKVMap(rawData, getRowKey);

  // ============================ Events =============================
  const changeEventInfo: Partial<ChangeEventInfo<RecordType>> = {};

  const triggerOnChange = (info: Partial<ChangeEventInfo<RecordType>>, reset: boolean = false) => {
    const changeInfo = {
      ...changeEventInfo,
      ...info,
    };

    if (reset) {
      changeEventInfo.resetPagination!();

      // Reset event param
      if (changeInfo.pagination!.current) {
        changeInfo.pagination!.current = 1;
      }
    }

    if (onChange) {
      onChange(changeInfo.pagination!, changeInfo.filters!, changeInfo.sorter!, {
        currentDataSource: getFilterData(
          getSortData(rawData, changeInfo.sorterStates!),
          changeInfo.filterStates!,
        ),
      });
    }
  };

  /**
   * Controlled state in `columns` is not a good idea that makes too many code (1000+ line?)
   * to read state out and then put it back to title render.
   * Move these code into `hooks` but still too complex.
   * We should provides Table props like `sorter` & `filter` to handle control in next big version.
   */

  // ============================ Sorter =============================
  const onSorterChange = (
    sorter: SorterResult<RecordType> | SorterResult<RecordType>[],
    sorterStates: SortState<RecordType>[],
  ) => {
    triggerOnChange(
      {
        sorter,
        sorterStates,
      },
      true,
    );
  };

  const [transformSorterColumns, sortStates, sorterTitleProps, getSorters] = useSorter<RecordType>({
    prefixCls,
    columns: columns || [],
    onSorterChange,
  });
  const sortedData = React.useMemo(() => getSortData(rawData, sortStates), [rawData, sortStates]);

  changeEventInfo.sorter = getSorters();
  changeEventInfo.sorterStates = sortStates;

  // ============================ Filter ============================
  const onFilterChange = (
    filters: Record<string, Key[]>,
    filterStates: FilterState<RecordType>[],
  ) => {
    triggerOnChange(
      {
        filters,
        filterStates,
      },
      true,
    );
  };

  const [transformFilterColumns, filterStates, getFilters] = useFilter<RecordType>({
    prefixCls,
    dropdownPrefixCls,
    columns: columns || [],
    onFilterChange,
    getPopupContainer,
  });
  const mergedData = getFilterData(sortedData, filterStates);

  changeEventInfo.filters = getFilters();
  changeEventInfo.filterStates = filterStates;

  // ============================ Column ============================
  const columnTitleProps = React.useMemo(
    () => ({
      ...sorterTitleProps,
    }),
    [sorterTitleProps],
  );
  const [transformTitleColumns] = useTitleColumns(columnTitleProps);

  // ========================== Pagination ==========================
  const onPaginationChange = (current: number, pageSize: number) => {
    triggerOnChange({
      pagination: { current, pageSize },
    });
  };

  const [mergedPagination, resetPagination] = usePagination(
    mergedData.length,
    pagination,
    onPaginationChange,
  );
  changeEventInfo.pagination =
    pagination !== false
      ? {
          current: mergedPagination.current!,
          pageSize: mergedPagination.pageSize!,
        }
      : {};
  changeEventInfo.resetPagination = resetPagination;

  // ============================= Data =============================
  const pageData = React.useMemo<RecordType[]>(() => {
    if (
      pagination === false ||
      !mergedPagination.pageSize ||
      mergedData.length < mergedPagination.total!
    ) {
      return mergedData;
    }

    const { current = 1, pageSize = DEFAULT_PAGE_SIZE } = mergedPagination;
    const currentPageData = mergedData.slice((current - 1) * pageSize, current * pageSize);
    return currentPageData;
  }, [
    !!pagination,
    mergedData,
    mergedPagination && mergedPagination.current,
    mergedPagination && mergedPagination.pageSize,
    mergedPagination && mergedPagination.total,
  ]);

  // ========================== Selections ==========================
  const [transformSelectionColumns, selectedKeySet] = useSelection<RecordType>(rowSelection, {
    prefixCls,
    data: mergedData,
    pageData,
    getRowKey,
    getRecordByKey,
    expandType,
  });

  const internalRowClassName = (record: RecordType, index: number, indent: number) => {
    let mergedRowClassName;
    if (typeof rowClassName === 'function') {
      mergedRowClassName = classNames(rowClassName(record, index, indent));
    } else {
      mergedRowClassName = classNames(rowClassName);
    }

    return classNames(
      {
        [`${prefixCls}-row-selected`]: selectedKeySet.has(getRowKey(record, index)),
      },
      mergedRowClassName,
    );
  };

  // ========================== Expandable ==========================
  const mergedExpandable: ExpandableConfig<RecordType> = {
    ...expandable,
  };

  // Customize expandable icon
  mergedExpandable.expandIcon =
    mergedExpandable.expandIcon || expandIcon || renderExpandIcon(tableLocale!);

  // Adjust expand icon index
  if (expandType === 'nest') {
    mergedExpandable.expandIconColumnIndex = rowSelection ? 1 : 0;
  }

  // Indent size
  mergedExpandable.indentSize = mergedExpandable.indentSize || indentSize || 15;

  // ============================ Render ============================
  const transformColumns = React.useCallback(
    (innerColumns: ColumnsType<RecordType>): ColumnsType<RecordType> => {
      return transformTitleColumns(
        transformSelectionColumns(transformFilterColumns(transformSorterColumns(innerColumns))),
      );
    },
    [transformSorterColumns, transformFilterColumns, transformSelectionColumns],
  );

  let topPaginationNode: React.ReactNode;
  let bottomPaginationNode: React.ReactNode;
  if (pagination !== false) {
    const renderPagination = () => (
      <Pagination
        className={`${prefixCls}-pagination`}
        {...mergedPagination}
        size={size === 'small' || size === 'middle' ? 'small' : undefined}
      />
    );

    switch (mergedPagination.position) {
      case 'top':
        topPaginationNode = renderPagination();
        break;

      case 'both':
        topPaginationNode = renderPagination();
        bottomPaginationNode = renderPagination();
        break;

      default:
        bottomPaginationNode = renderPagination();
    }
  }

  // >>>>>>>>> Spinning
  let spinProps: SpinProps | undefined;
  if (typeof loading === 'boolean') {
    spinProps = {
      spinning: loading,
    };
  } else {
    spinProps = loading;
  }

  return (
    <div
      className={`${prefixCls}-wrapper`}
      onTouchMove={e => {
        e.preventDefault();
      }}
    >
      <Spin spinning={false} {...spinProps}>
        {topPaginationNode}
        <RcTable<RecordType>
          {...props}
          expandable={mergedExpandable}
          prefixCls={prefixCls}
          className={classNames(className, {
            [`${prefixCls}-middle`]: size === 'middle',
            [`${prefixCls}-small`]: size === 'small',
            [`${prefixCls}-bordered`]: bordered,
          })}
          data={pageData}
          transformColumns={transformColumns}
          rowKey={getRowKey}
          rowClassName={internalRowClassName}
          emptyText={renderEmpty('Table')}
        />
        {bottomPaginationNode}
      </Spin>
    </div>
  );
}

Table.defaultProps = {
  rowKey: 'key',
};

Table.SELECTION_ALL = SELECTION_ALL;
Table.SELECTION_INVERT = SELECTION_INVERT;
Table.Column = Column;
Table.ColumnGroup = ColumnGroup;

export default Table;
