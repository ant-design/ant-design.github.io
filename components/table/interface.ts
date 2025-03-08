import type * as React from 'react';
import type { Reference } from '@rc-component/table';
import type {
  ExpandableConfig,
  FixedType,
  GetComponentProps,
  GetRowKey,
  ColumnType as RcColumnType,
  RenderedCell as RcRenderedCell,
} from '@rc-component/table/lib/interface';

import type { Breakpoint } from '../_util/responsiveObserver';
import type { AnyObject } from '../_util/type';
import type { CheckboxProps } from '../checkbox';
import type { DropdownProps } from '../dropdown';
import type { PaginationProps } from '../pagination';
import type { TooltipProps } from '../tooltip';
import type { INTERNAL_SELECTION_ITEM } from './hooks/useSelection';
import type { InternalTableProps, TableProps } from './InternalTable';

export type RefTable = <RecordType = AnyObject>(
  props: React.PropsWithChildren<TableProps<RecordType>> & React.RefAttributes<Reference>,
) => React.ReactElement;

export type RefInternalTable = <RecordType = AnyObject>(
  props: React.PropsWithChildren<InternalTableProps<RecordType>> & React.RefAttributes<Reference>,
) => React.ReactElement;

export type { ExpandableConfig, GetRowKey };

export type Key = React.Key;

export type SafeKey = Exclude<Key, bigint>;

export type RowSelectionType = 'checkbox' | 'radio';

export type SelectionItemSelectFn = (currentRowKeys: Key[]) => void;

export type ExpandType = null | 'row' | 'nest';

export interface TableLocale {
  filterTitle?: string;
  filterConfirm?: React.ReactNode;
  filterReset?: React.ReactNode;
  filterEmptyText?: React.ReactNode;
  /**
   * @deprecated Please use `filterCheckAll` instead.
   */
  filterCheckall?: React.ReactNode;
  filterCheckAll?: React.ReactNode;
  filterSearchPlaceholder?: string;
  emptyText?: React.ReactNode | (() => React.ReactNode);
  selectAll?: React.ReactNode;
  selectNone?: React.ReactNode;
  selectInvert?: React.ReactNode;
  selectionAll?: React.ReactNode;
  sortTitle?: string;
  expand?: string;
  collapse?: string;
  triggerDesc?: string;
  triggerAsc?: string;
  cancelSort?: string;
  sortableColumnHeaderAriaDescription?: string;
}

export type SortOrder = 'descend' | 'ascend' | null;

export type SorterTooltipTarget = 'full-header' | 'sorter-icon';

export type SorterTooltipProps = TooltipProps & {
  target?: SorterTooltipTarget;
};

const _TableActions = ['paginate', 'sort', 'filter'] as const;
export type TableAction = (typeof _TableActions)[number];

export type CompareFn<T = AnyObject> = (a: T, b: T, sortOrder?: SortOrder) => number;

export interface ColumnFilterItem {
  text: React.ReactNode;
  value: React.Key | boolean;
  children?: ColumnFilterItem[];
}

export interface ColumnTitleProps<RecordType = AnyObject> {
  /** @deprecated Will be remove in v7, Please use `sorterColumns` instead. */
  sortOrder?: SortOrder;
  /** @deprecated Will be remove in v7, Please use `sorterColumns` instead. */
  sortColumn?: ColumnType<RecordType>;
  sortColumns?: { column: ColumnType<RecordType>; order: SortOrder }[];
  filters?: Record<string, FilterValue>;
}

export type ColumnTitle<RecordType = AnyObject> =
  | React.ReactNode
  | ((props: ColumnTitleProps<RecordType>) => React.ReactNode);

export type FilterValue = (Key | boolean)[];
export type FilterKey = (string | number)[] | null;
export type FilterSearchType<RecordType = AnyObject> =
  | boolean
  | ((input: string, record: RecordType) => boolean);
export interface FilterConfirmProps {
  closeDropdown: boolean;
}

export interface FilterRestProps {
  confirm?: boolean;
  closeDropdown?: boolean;
}

export interface FilterDropdownProps {
  prefixCls: string;
  setSelectedKeys: (selectedKeys: React.Key[]) => void;
  selectedKeys: React.Key[];
  /**
   * Confirm filter value, if you want to close dropdown before commit, you can call with
   * {closeDropdown: true}
   */
  confirm: (param?: FilterConfirmProps) => void;
  clearFilters?: (param?: FilterRestProps) => void;
  filters?: ColumnFilterItem[];
  /** Only close filterDropdown */
  close: () => void;
  visible: boolean;
}

// 非必要请勿导出
interface CoverableDropdownProps
  extends Omit<
    DropdownProps,
    | 'onOpenChange'
    // === deprecated ===
    | 'overlay'
    | 'visible'
    | 'onVisibleChange'
  > {
  onOpenChange?: (open: boolean) => void;
}

export interface ColumnType<RecordType = AnyObject>
  extends Omit<RcColumnType<RecordType>, 'title'> {
  title?: ColumnTitle<RecordType>;
  // Sorter
  sorter?:
    | boolean
    | CompareFn<RecordType>
    | {
        compare?: CompareFn<RecordType>;
        /** Config multiple sorter order priority */
        multiple?: number;
      };
  sortOrder?: SortOrder;
  defaultSortOrder?: SortOrder;
  sortDirections?: SortOrder[];
  sortIcon?: (props: { sortOrder: SortOrder }) => React.ReactNode;
  showSorterTooltip?: boolean | SorterTooltipProps;

  // Filter
  filtered?: boolean;
  filters?: ColumnFilterItem[];
  filterDropdown?: React.ReactNode | ((props: FilterDropdownProps) => React.ReactNode);
  filterOnClose?: boolean;
  filterMultiple?: boolean;
  filteredValue?: FilterValue | null;
  defaultFilteredValue?: FilterValue | null;
  filterIcon?: React.ReactNode | ((filtered: boolean) => React.ReactNode);
  filterMode?: 'menu' | 'tree';
  filterSearch?: FilterSearchType<ColumnFilterItem>;
  onFilter?: (value: React.Key | boolean, record: RecordType) => boolean;
  /**
   * Can cover `<Dropdown>` props
   * @since 5.22.0
   */
  filterDropdownProps?: CoverableDropdownProps;
  filterResetToDefaultFilteredValue?: boolean;

  // Responsive
  responsive?: Breakpoint[];

  // Deprecated
  /**
   * @deprecated Please use `filterDropdownProps.open` instead.
   * @since 4.23.0
   */
  filterDropdownOpen?: boolean;
  /**
   * @deprecated Please use `filterDropdownProps.onOpenChange` instead.
   * @since 4.23.0
   */
  onFilterDropdownOpenChange?: (visible: boolean) => void;
}

export interface ColumnGroupType<RecordType = AnyObject>
  extends Omit<ColumnType<RecordType>, 'dataIndex'> {
  children: ColumnsType<RecordType>;
}

export type ColumnsType<RecordType = AnyObject> = (
  | ColumnGroupType<RecordType>
  | ColumnType<RecordType>
)[];

export interface SelectionItem {
  key: string;
  text: React.ReactNode;
  onSelect?: SelectionItemSelectFn;
}

export type SelectionSelectFn<T = AnyObject> = (
  record: T,
  selected: boolean,
  selectedRows: T[],
  nativeEvent: Event,
) => void;

export type RowSelectMethod = 'all' | 'none' | 'invert' | 'single' | 'multiple';

export interface TableRowSelection<T = AnyObject> {
  /** Keep the selection keys in list even the key not exist in `dataSource` anymore */
  preserveSelectedRowKeys?: boolean;
  type?: RowSelectionType;
  selectedRowKeys?: Key[];
  defaultSelectedRowKeys?: Key[];
  onChange?: (selectedRowKeys: Key[], selectedRows: T[], info: { type: RowSelectMethod }) => void;
  getCheckboxProps?: (record: T) => Partial<Omit<CheckboxProps, 'checked' | 'defaultChecked'>>;
  onSelect?: SelectionSelectFn<T>;
  /** @deprecated This function will be remove in v7 and should use `onChange` instead */
  onSelectMultiple?: (selected: boolean, selectedRows: T[], changeRows: T[]) => void;
  /** @deprecated This function will be remove in v7 and should use `onChange` instead */
  onSelectAll?: (selected: boolean, selectedRows: T[], changeRows: T[]) => void;
  /** @deprecated This function will be remove in v7 and should use `onChange` instead */
  onSelectInvert?: (selectedRowKeys: Key[]) => void;
  /** @deprecated This function will be remove in v7 and should use `onChange` instead */
  onSelectNone?: () => void;
  selections?: INTERNAL_SELECTION_ITEM[] | boolean;
  hideSelectAll?: boolean;
  fixed?: FixedType;
  columnWidth?: string | number;
  columnTitle?: React.ReactNode | ((checkboxNode: React.ReactNode) => React.ReactNode);
  checkStrictly?: boolean;
  renderCell?: (
    value: boolean,
    record: T,
    index: number,
    originNode: React.ReactNode,
  ) => React.ReactNode | RcRenderedCell<T>;
  onCell?: GetComponentProps<T>;
}

export type TransformColumns<RecordType = AnyObject> = (
  columns: ColumnsType<RecordType>,
) => ColumnsType<RecordType>;

export interface TableCurrentDataSource<RecordType = AnyObject> {
  currentDataSource: RecordType[];
  action: TableAction;
}

export interface SorterResult<RecordType = AnyObject> {
  column?: ColumnType<RecordType>;
  order?: SortOrder;
  field?: Key | readonly Key[];
  columnKey?: Key;
}

export type GetPopupContainer = (triggerNode: HTMLElement) => HTMLElement;

type TablePaginationPosition =
  | 'topLeft'
  | 'topCenter'
  | 'topRight'
  | 'bottomLeft'
  | 'bottomCenter'
  | 'bottomRight'
  | 'none';

export interface TablePaginationConfig extends PaginationProps {
  position?: TablePaginationPosition[];
}
