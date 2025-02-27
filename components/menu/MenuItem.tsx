import * as React from 'react';
import classNames from 'classnames';
import type { MenuItemProps as RcMenuItemProps } from 'rc-menu';
import { Item } from 'rc-menu';
import toArray from 'rc-util/lib/Children/toArray';
import omit from 'rc-util/lib/omit';
import { cloneElement } from '../_util/reactNode';
import type { SiderContextProps } from '../layout/Sider';
import { SiderContext } from '../layout/Sider';
import type { TooltipProps } from '../tooltip';
import Tooltip from '../tooltip';
import type { MenuContextProps } from './MenuContext';
import MenuContext from './MenuContext';

export interface MenuItemProps extends Omit<RcMenuItemProps, 'title'> {
  icon?: React.ReactNode;
  danger?: boolean;
  title?: React.ReactNode;
}

type MenuItemComponent = React.FC<MenuItemProps>;

type RestArgs<T> = T extends (arg: any, ...args: infer P) => any ? P : never;

type GenericProps<T = unknown> = T extends infer U extends MenuItemProps
  ? unknown extends U
    ? MenuItemProps
    : U
  : MenuItemProps;

type GenericComponent = Omit<MenuItemComponent, ''> &
  (<T extends MenuItemProps>(
    props: GenericProps<T>,
    ...args: RestArgs<MenuItemComponent>
  ) => ReturnType<MenuItemComponent>);

const MenuItem: GenericComponent = (props) => {
  const { className, children, icon, title, danger, extra } = props;
  const {
    prefixCls,
    firstLevel,
    direction,
    disableMenuItemTitleTooltip,
    inlineCollapsed: isInlineCollapsed,
  } = React.useContext<MenuContextProps>(MenuContext);
  const renderItemChildren = (inlineCollapsed: boolean) => {
    const label = (children as React.ReactNode[])?.[0];

    const wrapNode = (
      <>
        <span className={classNames(`${prefixCls}-title-content`)}>{children}</span>
        {extra && (
          <span
            className={classNames(
              `${prefixCls}-title-content`,
              `${prefixCls}-title-content-with-extra`,
            )}
          >
            {extra}
          </span>
        )}
      </>
    );
    // inline-collapsed.md demo 依赖 span 来隐藏文字,有 icon 属性，则内部包裹一个 span
    // ref: https://github.com/ant-design/ant-design/pull/23456
    if (!icon || (React.isValidElement(children) && children.type === 'span')) {
      if (children && inlineCollapsed && firstLevel && typeof label === 'string') {
        return <div className={`${prefixCls}-inline-collapsed-noicon`}>{label.charAt(0)}</div>;
      }
    }
    return wrapNode;
  };

  const { siderCollapsed } = React.useContext<SiderContextProps>(SiderContext);

  let tooltipTitle = title;

  if (typeof title === 'undefined') {
    tooltipTitle = firstLevel ? children : '';
  } else if (title === false) {
    tooltipTitle = '';
  }

  const tooltipProps: TooltipProps = { title: tooltipTitle };

  if (!siderCollapsed && !isInlineCollapsed) {
    tooltipProps.title = null;
    // Reset `open` to fix control mode tooltip display not correct
    // ref: https://github.com/ant-design/ant-design/issues/16742
    tooltipProps.open = false;
  }

  const childrenLength = toArray(children).length;

  let returnNode = (
    <Item
      {...omit(props, ['title', 'icon', 'danger'])}
      className={classNames(
        {
          [`${prefixCls}-item-danger`]: danger,
          [`${prefixCls}-item-only-child`]: (icon ? childrenLength + 1 : childrenLength) === 1,
        },
        className,
      )}
      title={typeof title === 'string' ? title : undefined}
    >
      {cloneElement(icon, {
        className: classNames(
          React.isValidElement(icon)
            ? (icon as React.ReactElement<{ className?: string }>).props?.className
            : '',
          `${prefixCls}-item-icon`,
        ),
      })}
      {renderItemChildren(isInlineCollapsed)}
    </Item>
  );

  if (!disableMenuItemTitleTooltip) {
    returnNode = (
      <Tooltip
        {...tooltipProps}
        placement={direction === 'rtl' ? 'left' : 'right'}
        classNames={{ root: `${prefixCls}-inline-collapsed-tooltip` }}
      >
        {returnNode}
      </Tooltip>
    );
  }
  return returnNode;
};

export default MenuItem;
