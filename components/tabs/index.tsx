'use client';

import { CloseOutlined, EllipsisOutlined, PlusOutlined } from '@ant-design/icons';
import classNames from 'classnames';
import type { TabsProps as RcTabsProps } from 'rc-tabs';
import RcTabs from 'rc-tabs';
import type { EditableConfig } from 'rc-tabs/lib/interface';
import * as React from 'react';
import warning from '../_util/warning';
import { ConfigContext } from '../config-provider';
import type { SizeType } from '../config-provider/SizeContext';
import useSize from '../config-provider/hooks/useSize';
import TabPane, { type TabPaneProps } from './TabPane';
import useAnimateConfig from './hooks/useAnimateConfig';
import useLegacyItems from './hooks/useLegacyItems';
import useStyle from './style';

export type TabsType = 'line' | 'card' | 'editable-card';
export type TabsPosition = 'top' | 'right' | 'bottom' | 'left';

export type { TabPaneProps };

export interface TabsProps extends Omit<RcTabsProps, 'editable'> {
  rootClassName?: string;
  type?: TabsType;
  size?: SizeType;
  hideAdd?: boolean;
  centered?: boolean;
  addIcon?: React.ReactNode;
  onEdit?: (e: React.MouseEvent | React.KeyboardEvent | string, action: 'add' | 'remove') => void;
  children?: React.ReactNode;
}

const Tabs: React.FC<TabsProps> & { TabPane: typeof TabPane } = (props) => {
  const {
    type,
    className,
    rootClassName,
    size: customSize,
    onEdit,
    hideAdd,
    centered,
    addIcon,
    popupClassName,
    children,
    items,
    animated,
    style,
    ...otherProps
  } = props;
  const { prefixCls: customizePrefixCls, moreIcon = <EllipsisOutlined /> } = otherProps;
  const { direction, tabs, getPrefixCls, getPopupContainer } = React.useContext(ConfigContext);
  const prefixCls = getPrefixCls('tabs', customizePrefixCls);
  const [wrapSSR, hashId] = useStyle(prefixCls);

  let editable: EditableConfig | undefined;
  if (type === 'editable-card') {
    editable = {
      onEdit: (editType, { key, event }) => {
        onEdit?.(editType === 'add' ? event : key!, editType);
      },
      removeIcon: <CloseOutlined />,
      addIcon: addIcon || <PlusOutlined />,
      showAdd: hideAdd !== true,
    };
  }
  const rootPrefixCls = getPrefixCls();

  warning(
    !('onPrevClick' in props) && !('onNextClick' in props),
    'Tabs',
    '`onPrevClick` and `onNextClick` has been removed. Please use `onTabScroll` instead.',
  );

  const mergedItems = useLegacyItems(items, children);

  const mergedAnimated = useAnimateConfig(prefixCls, animated);

  const size = useSize(customSize);

  const mergedStyle: React.CSSProperties = { ...tabs?.style, ...style };

  return wrapSSR(
    <RcTabs
      direction={direction}
      getPopupContainer={getPopupContainer}
      moreTransitionName={`${rootPrefixCls}-slide-up`}
      {...otherProps}
      items={mergedItems}
      className={classNames(
        {
          [`${prefixCls}-${size}`]: size,
          [`${prefixCls}-card`]: ['card', 'editable-card'].includes(type!),
          [`${prefixCls}-editable-card`]: type === 'editable-card',
          [`${prefixCls}-centered`]: centered,
        },
        tabs?.className,
        className,
        rootClassName,
        hashId,
      )}
      popupClassName={classNames(popupClassName, hashId)}
      style={mergedStyle}
      editable={editable}
      moreIcon={moreIcon}
      prefixCls={prefixCls}
      animated={mergedAnimated}
    />,
  );
};

Tabs.TabPane = TabPane;

if (process.env.NODE_ENV !== 'production') {
  Tabs.displayName = 'Tabs';
}

export default Tabs;
