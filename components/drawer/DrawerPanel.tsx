import * as React from 'react';
import classNames from 'classnames';
import type { DrawerProps as RCDrawerProps } from '@rc-component/drawer';

import useClosable, { pickClosable } from '../_util/hooks/useClosable';
import type { ClosableType } from '../_util/hooks/useClosable';
import Skeleton from '../skeleton';
import { useComponentConfig } from '../config-provider/context';

export type SemanticName =
  | 'root'
  | 'mask'
  | 'header'
  | 'title'
  | 'extra'
  | 'section'
  | 'body'
  | 'footer'
  | 'wrapper';

export type DrawerClassNames = Partial<Record<SemanticName, string>>;

export type DrawerStyles = Partial<Record<SemanticName, React.CSSProperties>>;

export interface DrawerPanelProps {
  prefixCls: string;

  title?: React.ReactNode;
  footer?: React.ReactNode;
  extra?: React.ReactNode;
  /**
   * Recommend to use closeIcon instead
   *
   * e.g.
   *
   * `<Drawer closeIcon={false} />`
   */
  closable?: ClosableType;
  closeIcon?: React.ReactNode;
  onClose?: RCDrawerProps['onClose'];

  children?: React.ReactNode;
  classNames?: DrawerClassNames;
  styles?: DrawerStyles;
  loading?: boolean;

  /** @deprecated Please use `styles.header` instead */
  headerStyle?: React.CSSProperties;
  /** @deprecated Please use `styles.body` instead */
  bodyStyle?: React.CSSProperties;
  /** @deprecated Please use `styles.footer` instead */
  footerStyle?: React.CSSProperties;
  /** @deprecated Please use `styles.wrapper` instead */
  contentWrapperStyle?: React.CSSProperties;
  /** @deprecated Please use `styles.mask` instead */
  maskStyle?: React.CSSProperties;
  /** @deprecated Please use `styles.content` instead */
  drawerStyle?: React.CSSProperties;
}

const DrawerPanel: React.FC<DrawerPanelProps> = (props) => {
  const {
    prefixCls,
    title,
    footer,
    extra,
    loading,
    onClose,
    headerStyle,
    bodyStyle,
    footerStyle,
    children,
    classNames: drawerClassNames,
    styles: drawerStyles,
  } = props;
  const drawerContext = useComponentConfig('drawer');

  const customCloseIconRender = React.useCallback(
    (icon: React.ReactNode) => (
      <button type="button" onClick={onClose} aria-label="Close" className={`${prefixCls}-close`}>
        {icon}
      </button>
    ),
    [onClose],
  );

  const [mergedClosable, mergedCloseIcon] = useClosable(
    pickClosable(props),
    pickClosable(drawerContext),
    {
      closable: true,
      closeIconRender: customCloseIconRender,
    },
  );

  const headerNode = React.useMemo<React.ReactNode>(() => {
    if (!title && !mergedClosable) {
      return null;
    }
    return (
      <div
        style={{
          ...drawerContext.styles?.header,
          ...headerStyle,
          ...drawerStyles?.header,
        }}
        className={classNames(
          `${prefixCls}-header`,
          {
            [`${prefixCls}-header-close-only`]: mergedClosable && !title && !extra,
          },
          drawerContext.classNames?.header,
          drawerClassNames?.header,
        )}
      >
        <div className={`${prefixCls}-header-title`}>
          {mergedCloseIcon}
          {title && (
            <div
              className={classNames(
                `${prefixCls}-title`,
                drawerContext?.classNames?.title,
                drawerClassNames?.title,
              )}
              style={{
                ...drawerContext?.styles?.title,
                ...drawerStyles?.title,
              }}
            >
              {title}
            </div>
          )}
        </div>
        {extra && (
          <div
            className={classNames(
              `${prefixCls}-extra`,
              drawerContext?.classNames?.extra,
              drawerClassNames?.extra,
            )}
            style={{
              ...drawerContext?.styles?.extra,
              ...drawerStyles?.extra,
            }}
          >
            {extra}
          </div>
        )}
      </div>
    );
  }, [mergedClosable, mergedCloseIcon, extra, headerStyle, prefixCls, title]);

  const footerNode = React.useMemo<React.ReactNode>(() => {
    if (!footer) {
      return null;
    }
    const footerClassName = `${prefixCls}-footer`;
    return (
      <div
        className={classNames(
          footerClassName,
          drawerContext.classNames?.footer,
          drawerClassNames?.footer,
        )}
        style={{
          ...drawerContext.styles?.footer,
          ...footerStyle,
          ...drawerStyles?.footer,
        }}
      >
        {footer}
      </div>
    );
  }, [footer, footerStyle, prefixCls]);

  return (
    <>
      {headerNode}
      <div
        className={classNames(
          `${prefixCls}-body`,
          drawerClassNames?.body,
          drawerContext.classNames?.body,
        )}
        style={{ ...drawerContext.styles?.body, ...bodyStyle, ...drawerStyles?.body }}
      >
        {loading ? (
          <Skeleton
            active
            title={false}
            paragraph={{ rows: 5 }}
            className={`${prefixCls}-body-skeleton`}
          />
        ) : (
          children
        )}
      </div>
      {footerNode}
    </>
  );
};

export default DrawerPanel;
