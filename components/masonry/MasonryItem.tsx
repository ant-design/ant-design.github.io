import React, { useMemo } from 'react';
import ResizeObserver from '@rc-component/resize-observer';
import classNames from 'classnames';

import type { MasonryProps } from './Masonry';

export interface MasonryItemType<T = any> {
  key: React.Key;
  column?: number;
  height?: number;
  children?: React.ReactNode;
  data: T;
}
interface MasonryItemProps<T = any> extends Pick<MasonryProps, 'itemRender'> {
  prefixCls: string;
  item: MasonryItemType<T>;
  style: React.CSSProperties;
  className?: string;
  index: number;
  column: number;
  onResize: VoidFunction | null;
}

const MasonryItem = React.forwardRef<HTMLDivElement, MasonryItemProps>((props, ref) => {
  const { item, style, prefixCls, itemRender, className, index, column, onResize } = props;

  const itemPrefix = `${prefixCls}-item`;

  // ====================== Render ======================
  const renderNode = useMemo(() => {
    return (
      item.children ??
      itemRender?.({
        ...item,
        index,
        column,
      })
    );
  }, [item, itemRender, column, index]);

  let returnNode = (
    <div ref={ref} style={style} className={classNames(itemPrefix, className)}>
      {renderNode}
    </div>
  );

  // Listen for resize
  if (onResize) {
    returnNode = <ResizeObserver onResize={onResize}>{returnNode}</ResizeObserver>;
  }

  return returnNode;
});

if (process.env.NODE_ENV !== 'production') {
  MasonryItem.displayName = 'MasonryItem';
}

export default MasonryItem;
