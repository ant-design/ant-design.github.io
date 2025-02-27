import * as React from 'react';
import LoadingOutlined from '@ant-design/icons/LoadingOutlined';
import classNames from 'classnames';

import type { TimelineProps } from './Timeline';
import TimelineItem from './TimelineItem';
import type { TimelineItemProps } from './TimelineItem';

const TimelineItemList: React.FC<TimelineProps & { hashId: string; direction?: string }> = ({
  prefixCls,
  className,
  pending = false,
  children,
  items,
  rootClassName,
  reverse = false,
  direction,
  hashId,
  pendingDot,
  mode = '' as TimelineProps['mode'],
  classNames: timelineClassNames,
  styles,
  ...restProps
}) => {
  const getPositionCls = (position: string, idx: number) => {
    if (mode === 'alternate') {
      if (position === 'right') return `${prefixCls}-item-right`;
      if (position === 'left') return `${prefixCls}-item-left`;
      return idx % 2 === 0 ? `${prefixCls}-item-left` : `${prefixCls}-item-right`;
    }
    if (mode === 'left') return `${prefixCls}-item-left`;
    if (mode === 'right') return `${prefixCls}-item-right`;
    if (position === 'right') return `${prefixCls}-item-right`;
    return '';
  };
  const mergedItems = [...(items || [])];
  const pendingNode = typeof pending === 'boolean' ? null : pending;

  if (pending) {
    mergedItems.push({
      pending: !!pending,
      dot: pendingDot || <LoadingOutlined />,
      children: pendingNode,
    });
  }

  if (reverse) {
    mergedItems.reverse();
  }
  const itemsCount = mergedItems.length;
  const lastCls = `${prefixCls}-item-last`;

  const itemsList = mergedItems
    .filter((item: TimelineItemProps) => !!item)
    .map((item: TimelineItemProps, idx: number) => {
      const pendingClass = idx === itemsCount - 2 ? lastCls : '';
      const readyClass = idx === itemsCount - 1 ? lastCls : '';
      const { className: itemClassName, ...itemProps } = item;

      return (
        <TimelineItem
          {...itemProps}
          classNames={timelineClassNames}
          styles={styles}
          className={classNames(
            timelineClassNames?.item,
            itemClassName,
            !reverse && !!pending ? pendingClass : readyClass,
            getPositionCls(item?.position ?? '', idx),
          )}
          key={item?.key || idx}
          style={styles?.item}
        />
      );
    });

  const hasLabelItem = mergedItems.some((item: TimelineItemProps) => !!item?.label);

  const classString = classNames(
    prefixCls,
    {
      [`${prefixCls}-pending`]: !!pending,
      [`${prefixCls}-reverse`]: !!reverse,
      [`${prefixCls}-${mode}`]: !!mode && !hasLabelItem,
      [`${prefixCls}-label`]: hasLabelItem,
      [`${prefixCls}-rtl`]: direction === 'rtl',
    },
    className,
    rootClassName,
    timelineClassNames?.root,
    hashId,
  );

  return (
    <ul {...restProps} className={classString} style={styles?.root}>
      {itemsList}
    </ul>
  );
};

export default TimelineItemList;
