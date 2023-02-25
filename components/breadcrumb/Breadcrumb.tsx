import classNames from 'classnames';
import toArray from 'rc-util/lib/Children/toArray';
import * as React from 'react';
import type { Params } from 'react-router-dom';
import { ConfigContext } from '../config-provider';
import type { DropdownProps } from '../dropdown';
import Menu from '../menu';
import { cloneElement } from '../_util/reactNode';
import warning from '../_util/warning';
import type { BreadcrumbItemProps } from './BreadcrumbItem';
import BreadcrumbItem from './BreadcrumbItem';
import BreadcrumbSeparator from './BreadcrumbSeparator';

import useStyle from './style';

export interface Route extends Omit<BreadcrumbItemProps, 'children'> {
  key?: React.Key;
  path?: string;
  breadcrumbName?: React.ReactNode;
  children?: Omit<Route, 'children'>[];
}

export type Routes = Route[];

export interface BreadcrumbProps {
  prefixCls?: string;
  routes?: Routes;
  params?: any;
  separator?: React.ReactNode;
  itemRender?: (route: Route, params: Params, routes: Routes, paths: string[]) => React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
  rootClassName?: string;
  children?: React.ReactNode;
}

function getBreadcrumbName(route: Route, params: any) {
  if (!route.breadcrumbName) {
    return null;
  }
  const paramsKeys = Object.keys(params).join('|');
  return `${route.breadcrumbName}`.replace(
    new RegExp(`:(${paramsKeys})`, 'g'),
    (replacement, key) => params[key] || replacement,
  );
}

function defaultItemRender(route: Route, params: Params, routes: Route[], paths: string[]) {
  const isLastItem = routes.indexOf(route) === routes.length - 1;
  const name =
    typeof route.breadcrumbName === 'string'
      ? getBreadcrumbName(route, params)
      : route.breadcrumbName;
  return isLastItem ? <span>{name}</span> : <a href={`#/${paths.join('/')}`}>{name}</a>;
}

const getPath = (path: string, params: any) => {
  path = (path || '').replace(/^\//, '');
  Object.keys(params).forEach((key) => {
    path = path.replace(`:${key}`, params[key]);
  });
  return path;
};

const addChildPath = (paths: string[], childPath: string, params: Params) => {
  const originalPaths = [...paths];
  const path = getPath(childPath || '', params);
  if (path) {
    originalPaths.push(path);
  }
  return originalPaths;
};

type CompoundedComponent = React.FC<BreadcrumbProps> & {
  Item: typeof BreadcrumbItem;
  Separator: typeof BreadcrumbSeparator;
};

const Breadcrumb: CompoundedComponent = ({
  prefixCls: customizePrefixCls,
  separator = '/',
  style,
  className,
  rootClassName,
  routes,
  children,
  itemRender = defaultItemRender,
  params = {},
  ...restProps
}) => {
  const { getPrefixCls, direction } = React.useContext(ConfigContext);

  let crumbs: React.ReactNode;
  const prefixCls = getPrefixCls('breadcrumb', customizePrefixCls);
  const [wrapSSR, hashId] = useStyle(prefixCls);

  if (routes && routes.length > 0) {
    // generated by route
    const paths: string[] = [];

    const hasHref = routes.some((route) => route?.href !== undefined);
    const hasPath = routes.some((route) => route?.path !== undefined);

    crumbs = routes.map((route, index) => {
      const path = getPath(route?.path || '', params);

      if (path) {
        paths.push(path);
      }
      // generated overlay by route.children
      let overlay: DropdownProps['overlay'];
      if (route?.children && route?.children?.length) {
        overlay = (
          <Menu
            items={route.children.map((child, childIndex) => ({
              key: child.path || childIndex,
              label: itemRender(
                child,
                params,
                routes,
                addChildPath(paths, child.path || '', params),
              ),
            }))}
          />
        );
      }

      const itemProps: BreadcrumbItemProps = { separator };

      if (overlay) {
        itemProps.overlay = overlay;
      }

      const isLastItem = index === routes.length - 1;

      if (hasPath && !hasHref) {
        return (
          <BreadcrumbItem {...itemProps} key={path || index}>
            {itemRender(route, params, routes, paths)}
          </BreadcrumbItem>
        );
      }
      const { breadcrumbName, ...otherRoute } = route;
      return (
        <React.Fragment key={route?.key ?? index}>
          {(breadcrumbName !== undefined || !route.menu || !overlay) && (
            <BreadcrumbItem {...otherRoute} separator={isLastItem ? '' : separator}>
              {breadcrumbName}
            </BreadcrumbItem>
          )}
          {route.separator && <BreadcrumbSeparator>{route.separator}</BreadcrumbSeparator>}
        </React.Fragment>
      );
    });
  } else if (children) {
    const childrenLength = toArray(children).length;
    crumbs = toArray(children).map((element: any, index) => {
      if (!element) {
        return element;
      }
      // =================== Warning =====================
      if (process.env.NODE_ENV !== 'production') {
        warning(
          !element,
          'Breadcrumb',
          '`Breadcrumb.Item and Breadcrumb.Separator` is deprecated. Please use `routes` instead.',
        );
      }
      warning(
        element.type &&
          (element.type.__ANT_BREADCRUMB_ITEM === true ||
            element.type.__ANT_BREADCRUMB_SEPARATOR === true),
        'Breadcrumb',
        "Only accepts Breadcrumb.Item and Breadcrumb.Separator as it's children",
      );
      const isLastItem = index === childrenLength - 1;
      return cloneElement(element, {
        separator: isLastItem ? '' : separator,
        key: index,
      });
    });
  }

  const breadcrumbClassName = classNames(
    prefixCls,
    {
      [`${prefixCls}-rtl`]: direction === 'rtl',
    },
    className,
    rootClassName,
    hashId,
  );

  return wrapSSR(
    <nav className={breadcrumbClassName} style={style} {...restProps}>
      <ol>{crumbs}</ol>
    </nav>,
  );
};

Breadcrumb.Item = BreadcrumbItem;
Breadcrumb.Separator = BreadcrumbSeparator;

if (process.env.NODE_ENV !== 'production') {
  Breadcrumb.displayName = 'Breadcrumb';
}

export default Breadcrumb;
