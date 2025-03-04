import type { CSSProperties, FC, HTMLAttributes, ReactElement, ReactNode } from 'react';
import React, { Children, useContext } from 'react';
import classNames from 'classnames';

import { cloneElement } from '../_util/reactNode';
import { ConfigContext } from '../config-provider';
import { Col } from '../grid';
import { ListContext } from './context';

export type ListItemSemanticName = 'actions' | 'extra' | 'item';

export interface ListItemProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children?: ReactNode;
  prefixCls?: string;
  style?: CSSProperties;
  classNames?: Partial<Record<ListItemSemanticName, string>>;
  styles?: Partial<Record<ListItemSemanticName, React.CSSProperties>>;
  extra?: ReactNode;
  actions?: ReactNode[];
  colStyle?: CSSProperties;
}

export type ListItemMetaSemanticName = 'root' | 'section' | 'description' | 'title' | 'avatar';
export interface ListItemMetaProps {
  avatar?: ReactNode;
  className?: string;
  children?: ReactNode;
  description?: ReactNode;
  prefixCls?: string;
  style?: CSSProperties;
  title?: ReactNode;
  classNames?: Partial<Record<ListItemMetaSemanticName, string>>;
  styles?: Partial<Record<ListItemMetaSemanticName, React.CSSProperties>>;
}

type ListItemClassNamesModule = keyof Exclude<ListItemProps['classNames'], undefined>;
type ListItemStylesModule = keyof Exclude<ListItemProps['styles'], undefined>;

export const Meta: FC<ListItemMetaProps> = ({
  prefixCls: customizePrefixCls,
  className,
  avatar,
  title,
  description,
  style,
  styles,
  classNames: metaClassNames,
  ...restProps
}) => {
  const { getPrefixCls, list } = useContext(ConfigContext);
  const itemMeta = list?.itemMeta || {};

  const prefixCls = getPrefixCls('list', customizePrefixCls);
  const rootClassNames = classNames(
    `${prefixCls}-item-meta`,
    className,
    itemMeta?.className,
    metaClassNames?.root,
    itemMeta.classNames?.root,
  );

  const content = (
    <div
      className={classNames(
        `${prefixCls}-item-meta-section`,
        metaClassNames?.section,
        itemMeta.classNames?.section,
      )}
      style={{
        ...itemMeta.styles?.section,
        ...styles?.section,
      }}
    >
      {title && (
        <h4
          className={classNames(
            `${prefixCls}-item-meta-title`,
            metaClassNames?.title,
            itemMeta.classNames?.title,
          )}
          style={{
            ...itemMeta.styles?.title,
            ...styles?.title,
          }}
        >
          {title}
        </h4>
      )}
      {description && (
        <div
          className={classNames(
            `${prefixCls}-item-meta-description`,
            metaClassNames?.description,
            itemMeta.classNames?.description,
          )}
          style={{
            ...itemMeta.styles?.description,
            ...styles?.description,
          }}
        >
          {description}
        </div>
      )}
    </div>
  );

  return (
    <div
      {...restProps}
      className={rootClassNames}
      style={{
        ...styles?.root,
        ...itemMeta.style,
        ...styles?.root,
        ...style,
      }}
    >
      {avatar && (
        <div
          className={classNames(
            `${prefixCls}-item-meta-avatar`,
            itemMeta.classNames?.avatar,
            metaClassNames?.avatar,
          )}
          style={{
            ...itemMeta.styles?.avatar,
            ...styles?.avatar,
          }}
        >
          {avatar}
        </div>
      )}
      {(title || description) && content}
    </div>
  );
};

const InternalItem = React.forwardRef<HTMLDivElement, ListItemProps>((props, ref) => {
  const {
    prefixCls: customizePrefixCls,
    children,
    actions,
    extra,
    styles,
    className,
    style,
    classNames: customizeClassNames,
    colStyle,
    ...restProps
  } = props;
  const { grid, itemLayout } = useContext(ListContext);
  const { getPrefixCls, list } = useContext(ConfigContext);

  const moduleClass = (moduleName: ListItemClassNamesModule) =>
    classNames(list?.item?.classNames?.[moduleName], customizeClassNames?.[moduleName]);

  const moduleStyle = (moduleName: ListItemStylesModule): React.CSSProperties => ({
    ...list?.item?.styles?.[moduleName],
    ...styles?.[moduleName],
  });

  const isItemContainsTextNodeAndNotSingular = () => {
    let result = false;
    Children.forEach(children as ReactElement, (element) => {
      if (typeof element === 'string') {
        result = true;
      }
    });
    return result && Children.count(children) > 1;
  };

  const isFlexMode = () => {
    if (itemLayout === 'vertical') {
      return !!extra;
    }
    return !isItemContainsTextNodeAndNotSingular();
  };

  const prefixCls = getPrefixCls('list', customizePrefixCls);
  const actionsContent = actions && actions.length > 0 && (
    <ul
      className={classNames(`${prefixCls}-item-action`, moduleClass('actions'))}
      key="actions"
      style={moduleStyle('actions')}
    >
      {actions.map((action: ReactNode, i: number) => (
        // eslint-disable-next-line react/no-array-index-key
        <li key={`${prefixCls}-item-action-${i}`}>
          {action}
          {i !== actions.length - 1 && <em className={`${prefixCls}-item-action-split`} />}
        </li>
      ))}
    </ul>
  );
  const Element = grid ? 'div' : 'li';
  const itemChildren = (
    <Element
      {...(restProps as any)} // `li` element `onCopy` prop args is not same as `div`
      {...(!grid ? { ref } : {})}
      className={classNames(
        `${prefixCls}-item`,
        {
          [`${prefixCls}-item-no-flex`]: !isFlexMode(),
        },
        className,
        moduleClass('item'),
        list?.item?.className,
      )}
      style={{ ...list?.item?.style, ...moduleStyle('item'), ...style }}
    >
      {itemLayout === 'vertical' && extra
        ? [
            <div className={`${prefixCls}-item-main`} key="content">
              {children}
              {actionsContent}
            </div>,
            <div
              className={classNames(`${prefixCls}-item-extra`, moduleClass('extra'))}
              key="extra"
              style={moduleStyle('extra')}
            >
              {extra}
            </div>,
          ]
        : [children, actionsContent, cloneElement(extra, { key: 'extra' })]}
    </Element>
  );
  return grid ? (
    <Col ref={ref} flex={1} style={colStyle}>
      {itemChildren}
    </Col>
  ) : (
    itemChildren
  );
});

export type ListItemTypeProps = typeof InternalItem & {
  Meta: typeof Meta;
};

const Item = InternalItem as ListItemTypeProps;

Item.Meta = Meta;

export default Item;
