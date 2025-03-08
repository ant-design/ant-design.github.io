import * as React from 'react';
import CaretDownOutlined from '@ant-design/icons/CaretDownOutlined';
import CaretUpOutlined from '@ant-design/icons/CaretUpOutlined';
import KeyCode from '@rc-component/util/lib/KeyCode';
import classNames from 'classnames';

import type { AnyObject } from '../../_util/type';
import type { TooltipProps } from '../../tooltip';
import Tooltip from '../../tooltip';
import type {
  ColumnGroupType,
  ColumnsType,
  ColumnTitleProps,
  ColumnType,
  CompareFn,
  Key,
  SorterResult,
  SorterTooltipProps,
  SortOrder,
  TableLocale,
  TransformColumns,
} from '../interface';
import { getColumnKey, getColumnPos, renderColumnTitle, safeColumnTitle } from '../util';

const ASCEND = 'ascend';
const DESCEND = 'descend';

const getMultiplePriority = <RecordType extends AnyObject = AnyObject>(
  column: ColumnType<RecordType>,
): number | false => {
  if (typeof column.sorter === 'object' && typeof column.sorter.multiple === 'number') {
    return column.sorter.multiple;
  }
  return false;
};

const getSortFunction = <RecordType extends AnyObject = AnyObject>(
  sorter: ColumnType<RecordType>['sorter'],
): CompareFn<RecordType> | false => {
  if (typeof sorter === 'function') {
    return sorter;
  }
  if (sorter && typeof sorter === 'object' && sorter.compare) {
    return sorter.compare;
  }
  return false;
};

const nextSortDirection = (sortDirections: SortOrder[], current: SortOrder | null) => {
  if (!current) {
    return sortDirections[0];
  }
  return sortDirections[sortDirections.indexOf(current) + 1];
};

export interface SortState<RecordType = AnyObject> {
  column: ColumnType<RecordType>;
  key: Key;
  sortOrder: SortOrder | null;
  multiplePriority: number | false;
}

const collectSortStates = <RecordType extends AnyObject = AnyObject>(
  columns: ColumnsType<RecordType>,
  init: boolean,
  pos?: string,
): SortState<RecordType>[] => {
  let sortStates: SortState<RecordType>[] = [];

  const pushState = (column: ColumnsType<RecordType>[number], columnPos: string) => {
    sortStates.push({
      column,
      key: getColumnKey<RecordType>(column, columnPos),
      multiplePriority: getMultiplePriority<RecordType>(column),
      sortOrder: column.sortOrder!,
    });
  };

  (columns || []).forEach((column, index) => {
    const columnPos = getColumnPos(index, pos);
    if ((column as ColumnGroupType<RecordType>).children) {
      if ('sortOrder' in column) {
        // Controlled
        pushState(column, columnPos);
      }
      sortStates = [
        ...sortStates,
        ...collectSortStates<RecordType>(
          (column as ColumnGroupType<RecordType>).children,
          init,
          columnPos,
        ),
      ];
    } else if (column.sorter) {
      if ('sortOrder' in column) {
        // Controlled
        pushState(column, columnPos);
      } else if (init && column.defaultSortOrder) {
        // Default sorter
        sortStates.push({
          column,
          key: getColumnKey(column, columnPos),
          multiplePriority: getMultiplePriority<RecordType>(column),
          sortOrder: column.defaultSortOrder!,
        });
      }
    }
  });

  return sortStates;
};

const injectSorter = <RecordType extends AnyObject = AnyObject>(
  prefixCls: string,
  columns: ColumnsType<RecordType>,
  sorterStates: SortState<RecordType>[],
  triggerSorter: (sorterSates: SortState<RecordType>) => void,
  defaultSortDirections: SortOrder[],
  tableLocale?: TableLocale,
  tableShowSorterTooltip?: boolean | SorterTooltipProps,
  pos?: string,
): ColumnsType<RecordType> => {
  const finalColumns = (columns || []).map((column, index) => {
    const columnPos = getColumnPos(index, pos);
    let newColumn: ColumnsType<RecordType>[number] = column;
    if (newColumn.sorter) {
      const sortDirections: SortOrder[] = newColumn.sortDirections || defaultSortDirections;
      const showSorterTooltip =
        newColumn.showSorterTooltip === undefined
          ? tableShowSorterTooltip
          : newColumn.showSorterTooltip;

      const columnKey = getColumnKey(newColumn, columnPos);
      const sorterState = sorterStates.find(({ key }) => key === columnKey);
      const sortOrder = sorterState ? sorterState.sortOrder : null;
      const nextSortOrder = nextSortDirection(sortDirections, sortOrder);

      let sorter: React.ReactNode;
      if (column.sortIcon) {
        sorter = column.sortIcon({ sortOrder });
      } else {
        const upNode: React.ReactNode = sortDirections.includes(ASCEND) && (
          <CaretUpOutlined
            className={classNames(`${prefixCls}-column-sorter-up`, {
              active: sortOrder === ASCEND,
            })}
          />
        );
        const downNode: React.ReactNode = sortDirections.includes(DESCEND) && (
          <CaretDownOutlined
            className={classNames(`${prefixCls}-column-sorter-down`, {
              active: sortOrder === DESCEND,
            })}
          />
        );
        sorter = (
          <span
            className={classNames(`${prefixCls}-column-sorter`, {
              [`${prefixCls}-column-sorter-full`]: !!(upNode && downNode),
            })}
          >
            <span className={`${prefixCls}-column-sorter-inner`} aria-hidden="true">
              {upNode}
              {downNode}
            </span>
          </span>
        );
      }

      const { cancelSort, triggerAsc, triggerDesc, sortableColumnHeaderAriaDescription } =
        tableLocale || {};
      let sortTip: string | undefined = cancelSort;
      if (nextSortOrder === DESCEND) {
        sortTip = triggerDesc;
      } else if (nextSortOrder === ASCEND) {
        sortTip = triggerAsc;
      }
      const tooltipProps: TooltipProps =
        typeof showSorterTooltip === 'object'
          ? {
              title: sortTip,
              ...showSorterTooltip,
            }
          : { title: sortTip };
      newColumn = {
        ...newColumn,
        className: classNames(newColumn.className, { [`${prefixCls}-column-sort`]: sortOrder }),
        title: (renderProps: ColumnTitleProps<RecordType>) => {
          const columnSortersClass = `${prefixCls}-column-sorters`;
          const renderColumnTitleWrapper = (
            <span className={`${prefixCls}-column-title`}>
              {renderColumnTitle(column.title, renderProps)}
            </span>
          );
          const renderSortTitle = (
            <div className={columnSortersClass}>
              {renderColumnTitleWrapper}
              {sorter}
            </div>
          );
          if (showSorterTooltip) {
            if (
              typeof showSorterTooltip !== 'boolean' &&
              showSorterTooltip?.target === 'sorter-icon'
            ) {
              return (
                <div
                  className={`${columnSortersClass} ${prefixCls}-column-sorters-tooltip-target-sorter`}
                >
                  {renderColumnTitleWrapper}
                  <Tooltip {...tooltipProps}>{sorter}</Tooltip>
                </div>
              );
            }
            return <Tooltip {...tooltipProps}>{renderSortTitle}</Tooltip>;
          }
          return renderSortTitle;
        },
        onHeaderCell: (col) => {
          const cell: React.HTMLAttributes<HTMLElement> = column.onHeaderCell?.(col) || {};
          const originOnClick = cell.onClick;
          const originOKeyDown = cell.onKeyDown;
          cell.onClick = (event: React.MouseEvent<HTMLElement>) => {
            triggerSorter({
              column,
              key: columnKey,
              sortOrder: nextSortOrder,
              multiplePriority: getMultiplePriority<RecordType>(column),
            });
            originOnClick?.(event);
          };
          cell.onKeyDown = (event: React.KeyboardEvent<HTMLElement>) => {
            if (event.keyCode === KeyCode.ENTER) {
              triggerSorter({
                column,
                key: columnKey,
                sortOrder: nextSortOrder,
                multiplePriority: getMultiplePriority<RecordType>(column),
              });
              originOKeyDown?.(event);
            }
          };

          const renderTitle = safeColumnTitle(column.title, {});
          const displayTitle = renderTitle?.toString();

          // Inform the screen-reader so it can tell the visually impaired user which column is sorted
          if (sortOrder) {
            cell['aria-sort'] = sortOrder === 'ascend' ? 'ascending' : 'descending';
          }
          // Inform the screen-reader so it can tell the visually impaired user that this column can be sorted
          cell['aria-description'] = sortableColumnHeaderAriaDescription;
          cell['aria-label'] = displayTitle || '';
          cell.className = classNames(cell.className, `${prefixCls}-column-has-sorters`);
          cell.tabIndex = 0;
          if (column.ellipsis) {
            cell.title = (renderTitle ?? '').toString();
          }
          return cell;
        },
      };
    }

    if ('children' in newColumn) {
      newColumn = {
        ...newColumn,
        children: injectSorter(
          prefixCls,
          newColumn.children,
          sorterStates,
          triggerSorter,
          defaultSortDirections,
          tableLocale,
          tableShowSorterTooltip,
          columnPos,
        ),
      };
    }

    return newColumn;
  });
  return finalColumns;
};

const stateToInfo = <RecordType extends AnyObject = AnyObject>(
  sorterState: SortState<RecordType>,
): SorterResult<RecordType> => {
  const { column, sortOrder } = sorterState;
  return {
    column,
    order: sortOrder,
    field: column.dataIndex as SorterResult<RecordType>['field'],
    columnKey: column.key,
  };
};

const generateSorterInfo = <RecordType extends AnyObject = AnyObject>(
  sorterStates: SortState<RecordType>[],
): SorterResult<RecordType> | SorterResult<RecordType>[] => {
  const activeSorters = sorterStates
    .filter(({ sortOrder }) => sortOrder)
    .map<SorterResult<RecordType>>(stateToInfo);

  // =========== Legacy compatible support ===========
  // https://github.com/ant-design/ant-design/pull/19226
  if (activeSorters.length === 0 && sorterStates.length) {
    const lastIndex = sorterStates.length - 1;
    return {
      ...stateToInfo(sorterStates[lastIndex]),
      column: undefined,
      order: undefined,
      field: undefined,
      columnKey: undefined,
    };
  }

  if (activeSorters.length <= 1) {
    return activeSorters[0] || {};
  }

  return activeSorters;
};

export const getSortData = <RecordType extends AnyObject = AnyObject>(
  data: readonly RecordType[],
  sortStates: SortState<RecordType>[],
  childrenColumnName: string,
): RecordType[] => {
  const innerSorterStates = sortStates
    .slice()
    .sort((a, b) => (b.multiplePriority as number) - (a.multiplePriority as number));

  const cloneData = data.slice();

  const runningSorters = innerSorterStates.filter(
    ({ column: { sorter }, sortOrder }) => getSortFunction<RecordType>(sorter) && sortOrder,
  );

  // Skip if no sorter needed
  if (!runningSorters.length) {
    return cloneData;
  }

  return cloneData
    .sort((record1, record2) => {
      for (let i = 0; i < runningSorters.length; i += 1) {
        const sorterState = runningSorters[i];
        const {
          column: { sorter },
          sortOrder,
        } = sorterState;

        const compareFn = getSortFunction<RecordType>(sorter);

        if (compareFn && sortOrder) {
          const compareResult = compareFn(record1, record2, sortOrder);

          if (compareResult !== 0) {
            return sortOrder === ASCEND ? compareResult : -compareResult;
          }
        }
      }

      return 0;
    })
    .map<RecordType>((record) => {
      const subRecords = record[childrenColumnName];
      if (subRecords) {
        return {
          ...record,
          [childrenColumnName]: getSortData<RecordType>(subRecords, sortStates, childrenColumnName),
        };
      }
      return record;
    });
};

interface SorterConfig<RecordType = AnyObject> {
  prefixCls: string;
  mergedColumns: ColumnsType<RecordType>;
  onSorterChange: (
    sorterResult: SorterResult<RecordType> | SorterResult<RecordType>[],
    sortStates: SortState<RecordType>[],
  ) => void;
  sortDirections: SortOrder[];
  tableLocale?: TableLocale;
  showSorterTooltip?: boolean | SorterTooltipProps;
}

const useFilterSorter = <RecordType extends AnyObject = AnyObject>(
  props: SorterConfig<RecordType>,
): [
  TransformColumns<RecordType>,
  SortState<RecordType>[],
  ColumnTitleProps<RecordType>,
  () => SorterResult<RecordType> | SorterResult<RecordType>[],
] => {
  const {
    prefixCls,
    mergedColumns,
    sortDirections,
    tableLocale,
    showSorterTooltip,
    onSorterChange,
  } = props;

  const [sortStates, setSortStates] = React.useState<SortState<RecordType>[]>(
    collectSortStates<RecordType>(mergedColumns, true),
  );

  const getColumnKeys = (columns: ColumnsType<RecordType>, pos?: string): Key[] => {
    const newKeys: Key[] = [];
    columns.forEach((item, index) => {
      const columnPos = getColumnPos(index, pos);
      newKeys.push(getColumnKey<RecordType>(item, columnPos));
      if (Array.isArray((item as ColumnGroupType<RecordType>).children)) {
        const childKeys = getColumnKeys((item as ColumnGroupType<RecordType>).children, columnPos);
        newKeys.push(...childKeys);
      }
    });
    return newKeys;
  };
  const mergedSorterStates = React.useMemo<SortState<RecordType>[]>(() => {
    let validate = true;
    const collectedStates = collectSortStates<RecordType>(mergedColumns, false);

    // Return if not controlled
    if (!collectedStates.length) {
      const mergedColumnsKeys = getColumnKeys(mergedColumns);
      return sortStates.filter(({ key }) => mergedColumnsKeys.includes(key));
    }

    const validateStates: SortState<RecordType>[] = [];

    function patchStates(state: SortState<RecordType>) {
      if (validate) {
        validateStates.push(state);
      } else {
        validateStates.push({
          ...state,
          sortOrder: null,
        });
      }
    }

    let multipleMode: boolean | null = null;
    collectedStates.forEach((state) => {
      if (multipleMode === null) {
        patchStates(state);

        if (state.sortOrder) {
          if (state.multiplePriority === false) {
            validate = false;
          } else {
            multipleMode = true;
          }
        }
      } else if (multipleMode && state.multiplePriority !== false) {
        patchStates(state);
      } else {
        validate = false;
        patchStates(state);
      }
    });

    return validateStates;
  }, [mergedColumns, sortStates]);

  // Get render columns title required props
  const columnTitleSorterProps = React.useMemo<ColumnTitleProps<RecordType>>(() => {
    const sortColumns = mergedSorterStates.map(({ column, sortOrder }) => ({
      column,
      order: sortOrder,
    }));

    return {
      sortColumns,
      // Legacy
      sortColumn: sortColumns[0]?.column,
      sortOrder: sortColumns[0]?.order,
    };
  }, [mergedSorterStates]);

  const triggerSorter = (sortState: SortState<RecordType>) => {
    let newSorterStates: SortState<RecordType>[];
    if (
      sortState.multiplePriority === false ||
      !mergedSorterStates.length ||
      mergedSorterStates[0].multiplePriority === false
    ) {
      newSorterStates = [sortState];
    } else {
      newSorterStates = [
        ...mergedSorterStates.filter(({ key }) => key !== sortState.key),
        sortState,
      ];
    }
    setSortStates(newSorterStates);
    onSorterChange(generateSorterInfo(newSorterStates), newSorterStates);
  };

  const transformColumns = (innerColumns: ColumnsType<RecordType>) =>
    injectSorter(
      prefixCls,
      innerColumns,
      mergedSorterStates,
      triggerSorter,
      sortDirections,
      tableLocale,
      showSorterTooltip,
    );

  const getSorters = () => generateSorterInfo(mergedSorterStates);

  return [transformColumns, mergedSorterStates, columnTitleSorterProps, getSorters] as const;
};

export default useFilterSorter;
