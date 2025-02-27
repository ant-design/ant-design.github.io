import * as React from 'react';
import classNames from 'classnames';

import { devUseWarning } from '../_util/warning';
import { useComponentConfig } from '../config-provider/context';
import useCSSVarCls from '../config-provider/hooks/useCSSVarCls';
// CSSINJS
import useStyle from './style';
import type { TimelineItemProps } from './TimelineItem';
import TimelineItem from './TimelineItem';
import TimelineItemList from './TimelineItemList';
import useItems from './useItems';

export type SemanticName = 'root' | 'indicator' | 'tail' | 'content' | 'item' | 'label';
export interface TimelineProps {
  prefixCls?: string;
  className?: string;
  style?: React.CSSProperties;
  classNames?: Partial<Record<SemanticName, string>>;
  styles?: Partial<Record<SemanticName, React.CSSProperties>>;
  rootClassName?: string;
  /** 指定最后一个幽灵节点是否存在或内容 */
  pending?: React.ReactNode;
  pendingDot?: React.ReactNode;
  reverse?: boolean;
  mode?: 'left' | 'alternate' | 'right';
  items?: TimelineItemProps[];
  children?: React.ReactNode;
}

type CompoundedComponent = React.FC<TimelineProps> & {
  Item: React.FC<TimelineItemProps>;
};

const Timeline: CompoundedComponent = (props) => {
  const {
    getPrefixCls,
    direction,
    className: contextClassName,
    style: contextStyle,
    classNames: contextClassNames,
    styles: contextStyles,
  } = useComponentConfig('timeline');
  const {
    prefixCls: customizePrefixCls,
    children,
    items,
    className,
    style,
    classNames: timelineClassNames,
    styles,
    ...restProps
  } = props;
  const prefixCls = getPrefixCls('timeline', customizePrefixCls);

  // =================== Warning =====================
  if (process.env.NODE_ENV !== 'production') {
    const warning = devUseWarning('Timeline');

    warning.deprecated(!children, 'Timeline.Item', 'items');
  }

  // Style
  const rootCls = useCSSVarCls(prefixCls);
  const [hashId, cssVarCls] = useStyle(prefixCls, rootCls);

  const mergedItems: TimelineItemProps[] = useItems(items, children);

  return (
    <TimelineItemList
      classNames={{
        root: classNames(
          contextClassName,
          className,
          cssVarCls,
          rootCls,
          contextClassNames.root,
          timelineClassNames?.root,
        ),
        tail: classNames(contextClassNames.tail, timelineClassNames?.tail),
        indicator: classNames(contextClassNames.indicator, timelineClassNames?.indicator),
        label: classNames(contextClassNames.label, timelineClassNames?.label),
        content: classNames(contextClassNames.content, timelineClassNames?.content),
        item: classNames(contextClassNames.item, timelineClassNames?.item),
      }}
      styles={{
        root: { ...contextStyles.root, ...styles?.root, ...contextStyle, ...style },
        tail: { ...contextStyles.tail, ...styles?.tail },
        indicator: { ...contextStyles.indicator, ...styles?.indicator },
        label: { ...contextStyles.label, ...styles?.label },
        content: { ...contextStyles.content, ...styles?.content },
        item: { ...contextStyles.item, ...styles?.item },
      }}
      {...restProps}
      prefixCls={prefixCls}
      direction={direction}
      items={mergedItems}
      hashId={hashId}
    />
  );
};

Timeline.Item = TimelineItem;

if (process.env.NODE_ENV !== 'production') {
  Timeline.displayName = 'Timeline';
}

export default Timeline;
