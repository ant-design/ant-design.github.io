import * as React from 'react';
import DownOutlined from '@ant-design/icons/DownOutlined';
import { ConfigContext } from '../config-provider';
import type { DropdownProps } from '../dropdown/dropdown';
import Dropdown from '../dropdown/dropdown';
import type { BreadcrumbProps, ItemType } from './Breadcrumb';
import BreadcrumbSeparator from './BreadcrumbSeparator';
import { renderItem } from './useItemRender';

export interface SeparatorType {
  separator?: React.ReactNode;
  key?: React.Key;
}

type MenuType = NonNullable<DropdownProps['menu']>;
interface MenuItem {
  key?: React.Key;
  title?: React.ReactNode;
  label?: React.ReactNode;
  path?: string;
  href?: string;
}

export interface BreadcrumbItemProps extends SeparatorType {
  prefixCls?: string;
  href?: string;
  menu?: Omit<MenuType, 'items'> & {
    items?: MenuItem[];
  };
  dropdownProps?: DropdownProps;
  onClick?: React.MouseEventHandler<HTMLAnchorElement | HTMLSpanElement>;
  className?: string;
  children?: React.ReactNode;
  icons?: BreadcrumbProps['icons'];
}

export const InternalBreadcrumbItem: React.FC<BreadcrumbItemProps> = (props) => {
  const { prefixCls, separator = '/', children, menu, dropdownProps, href, icons } = props;

  /** If overlay is have Wrap a Dropdown */
  const renderBreadcrumbNode = (breadcrumbItem: React.ReactNode) => {
    if (menu) {
      const mergeDropDownProps: DropdownProps = {
        ...dropdownProps,
      };

      if (menu) {
        const { items, ...menuProps } = menu || {};
        mergeDropDownProps.menu = {
          ...menuProps,
          items: items?.map(({ key, title, label, path, ...itemProps }, index) => {
            let mergedLabel: React.ReactNode = label ?? title;

            if (path) {
              mergedLabel = <a href={`${href}${path}`}>{mergedLabel}</a>;
            }

            return {
              ...itemProps,
              key: key ?? index,
              label: mergedLabel,
            };
          }),
        };
      }

      return (
        <Dropdown placement="bottom" {...mergeDropDownProps}>
          <span className={`${prefixCls}-overlay-link`}>
            {breadcrumbItem}
            {icons?.dropdown ?? <DownOutlined />}
          </span>
        </Dropdown>
      );
    }
    return breadcrumbItem;
  };

  // wrap to dropDown
  const link = renderBreadcrumbNode(children);
  if (link !== undefined && link !== null) {
    return (
      <>
        <li>{link}</li>
        {separator && <BreadcrumbSeparator>{separator}</BreadcrumbSeparator>}
      </>
    );
  }
  return null;
};

type CompoundedComponent = React.FC<BreadcrumbItemProps> & {
  /** @internal */
  __ANT_BREADCRUMB_ITEM: boolean;
};

const BreadcrumbItem: CompoundedComponent = (props) => {
  const { prefixCls: customizePrefixCls, children, href, ...restProps } = props;
  const { getPrefixCls } = React.useContext(ConfigContext);
  const prefixCls = getPrefixCls('breadcrumb', customizePrefixCls);
  return (
    <InternalBreadcrumbItem {...restProps} prefixCls={prefixCls}>
      {renderItem(prefixCls, restProps as ItemType, children, href)}
    </InternalBreadcrumbItem>
  );
};

BreadcrumbItem.__ANT_BREADCRUMB_ITEM = true;

export default BreadcrumbItem;
