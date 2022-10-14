import classNames from 'classnames';
import toArray from 'rc-util/lib/Children/toArray';
import * as React from 'react';
import { ConfigContext } from '../config-provider';
import Menu from '../menu';
import { cloneElement } from '../_util/reactNode';
import warning from '../_util/warning';
import BreadcrumbItem from './BreadcrumbItem';
import BreadcrumbSeparator from './BreadcrumbSeparator';

export interface Route {
  path: string;
  breadcrumbName: string;
  children?: Omit<Route, 'children'>[];
}

export interface BreadcrumbProps {
  prefixCls?: string;
  routes?: Route[];
  params?: any;
  separator?: React.ReactNode;
  itemRender?: (
    route: Route,
    params: any,
    routes: Array<Route>,
    paths: Array<string>,
  ) => React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
  children?: React.ReactNode;
}

function getBreadcrumbName(route: Route, params: any) {
  if (!route.breadcrumbName) {
    return null;
  }
  const paramsKeys = Object.keys(params).join('|');
  const name = route.breadcrumbName.replace(
    new RegExp(`:(${paramsKeys})`, 'g'),
    (replacement, key) => params[key] || replacement,
  );
  return name;
}

function defaultItemRender(route: Route, params: any, routes: Route[], paths: string[]) {
  const isLastItem = routes.indexOf(route) === routes.length - 1;
  const name = getBreadcrumbName(route, params);
  return isLastItem ? <span>{name}</span> : <a href={`#/${paths.join('/')}`}>{name}</a>;
}

const getPath = (path: string, params: any) => {
  path = (path || '').replace(/^\//, '');
  Object.keys(params).forEach(key => {
    path = path.replace(`:${key}`, params[key]);
  });
  return path;
};

const addChildPath = (paths: string[], childPath: string, params: any) => {
  const originalPaths = [...paths];
  const path = getPath(childPath || '', params);
  if (path) {
    originalPaths.push(path);
  }
  return originalPaths;
};

const Breadcrumb = ({
  prefixCls: customizePrefixCls,
  separator = '/',
  style,
  className,
  routes,
  children,
  itemRender = defaultItemRender,
  params = {},
  ...restProps
}: BreadcrumbProps) => {
  const { getPrefixCls, direction } = React.useContext(ConfigContext);

  let crumbs: React.ReactNode;
  const prefixCls = getPrefixCls('breadcrumb', customizePrefixCls);
  if (routes && routes.length > 0) {
    // generated by route
    const paths: string[] = [];
    crumbs = routes.map(route => {
      const path = getPath(route.path, params);

      if (path) {
        paths.push(path);
      }
      // generated overlay by route.children
      let overlay;
      if (route.children && route.children.length) {
        overlay = (
          <Menu
            items={route.children.map(child => ({
              key: child.path || child.breadcrumbName,
              label: itemRender(child, params, routes, addChildPath(paths, child.path, params)),
            }))}
          />
        );
      }

      return (
        <BreadcrumbItem overlay={overlay} separator={separator} key={path || route.breadcrumbName}>
          {itemRender(route, params, routes, paths)}
        </BreadcrumbItem>
      );
    });
  } else if (children) {
    crumbs = toArray(children).map((element: any, index) => {
      if (!element) {
        return element;
      }

      warning(
        element.type &&
          (element.type.__ANT_BREADCRUMB_ITEM === true ||
            element.type.__ANT_BREADCRUMB_SEPARATOR === true),
        'Breadcrumb',
        "Only accepts Breadcrumb.Item and Breadcrumb.Separator as it's children",
      );

      return cloneElement(element, {
        separator,
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
  );

  return (
    <nav className={breadcrumbClassName} style={style} {...restProps}>
      <ol>{crumbs}</ol>
    </nav>
  );
};

Breadcrumb.Item = BreadcrumbItem;

Breadcrumb.Separator = BreadcrumbSeparator;

export default Breadcrumb;
