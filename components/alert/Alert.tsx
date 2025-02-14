import * as React from 'react';
import CheckCircleFilled from '@ant-design/icons/CheckCircleFilled';
import CloseCircleFilled from '@ant-design/icons/CloseCircleFilled';
import CloseOutlined from '@ant-design/icons/CloseOutlined';
import ExclamationCircleFilled from '@ant-design/icons/ExclamationCircleFilled';
import InfoCircleFilled from '@ant-design/icons/InfoCircleFilled';
import pickAttrs from '@rc-component/util/lib/pickAttrs';
import { composeRef } from '@rc-component/util/lib/ref';
import classNames from 'classnames';
import CSSMotion from 'rc-motion';

import type { ClosableType } from '../_util/hooks/useClosable';
import { devUseWarning } from '../_util/warning';
import { useComponentConfig } from '../config-provider/context';
import useStyle from './style';

export interface AlertRef {
  nativeElement: HTMLDivElement;
}

type SemanticName = 'root' | 'icon' | 'section' | 'title' | 'description' | 'actions';
export interface AlertProps {
  /** Type of Alert styles, options:`success`, `info`, `warning`, `error` */
  type?: 'success' | 'info' | 'warning' | 'error';
  /** Whether Alert can be closed */
  closable?: ClosableType;
  /**
   * @deprecated please use `closable.closeIcon` instead.
   * Close text to show
   */
  closeText?: React.ReactNode;
  /** Content of Alert */
  title?: React.ReactNode;
  /**
   * @deprecated please use `title` instead.
   */
  message?: React.ReactNode;
  /** Additional content of Alert */
  description?: React.ReactNode;
  /** Callback when close Alert */
  onClose?: React.MouseEventHandler<HTMLButtonElement>;
  /** Trigger when animation ending of Alert */
  afterClose?: () => void;
  /** Whether to show icon */
  showIcon?: boolean;
  /** https://www.w3.org/TR/2014/REC-html5-20141028/dom.html#aria-role-attribute */
  role?: string;
  style?: React.CSSProperties;
  prefixCls?: string;
  className?: string;
  classNames?: Partial<Record<SemanticName, string>>;
  icons?: {
    success?: React.ReactNode;
    info?: React.ReactNode;
    warning?: React.ReactNode;
    error?: React.ReactNode;
    close?: React.ReactNode;
  };
  styles?: Partial<Record<SemanticName, React.CSSProperties>>;
  rootClassName?: string;
  banner?: boolean;
  icon?: React.ReactNode;
  /** @deprecated Please use `icons.close` instead */
  closeIcon?: React.ReactNode;
  action?: React.ReactNode;
  onMouseEnter?: React.MouseEventHandler<HTMLDivElement>;
  onMouseLeave?: React.MouseEventHandler<HTMLDivElement>;
  onClick?: React.MouseEventHandler<HTMLDivElement>;

  id?: string;
}

const defaultIcons = {
  success: <CheckCircleFilled />,
  info: <InfoCircleFilled />,
  error: <CloseCircleFilled />,
  warning: <ExclamationCircleFilled />,
  close: <CloseOutlined />,
};

interface IconNodeProps {
  type: AlertProps['type'];
  icon: AlertProps['icon'];
  icons: AlertProps['icons'];
  prefixCls: AlertProps['prefixCls'];
  description: AlertProps['description'];
  className?: string;
  style?: React.CSSProperties;
}

const IconNode: React.FC<IconNodeProps> = (props) => {
  const { icon, prefixCls, type, className, style, icons } = props;
  const mergedIcon = icon || icons?.[type!] || defaultIcons[type!];
  if (mergedIcon) {
    return (
      <span className={classNames(`${prefixCls}-icon`, className)} style={style}>
        {mergedIcon}
      </span>
    );
  }
  return null;
};

type CloseIconProps = {
  isClosable: boolean;
  prefixCls: AlertProps['prefixCls'];
  closeIcon: AlertProps['closeIcon'];
  handleClose: AlertProps['onClose'];
  ariaProps: React.AriaAttributes;
};

const CloseIconNode: React.FC<CloseIconProps> = (props) => {
  const { isClosable, prefixCls, closeIcon, handleClose, ariaProps } = props;
  const mergedCloseIcon =
    closeIcon === true || closeIcon === undefined ? defaultIcons.close : closeIcon;
  return isClosable ? (
    <button
      type="button"
      onClick={handleClose}
      className={`${prefixCls}-close-icon`}
      tabIndex={0}
      {...ariaProps}
    >
      {mergedCloseIcon}
    </button>
  ) : null;
};

const Alert = React.forwardRef<AlertRef, AlertProps>((props, ref) => {
  const {
    description,
    prefixCls: customizePrefixCls,
    message,
    title,
    banner,
    className,
    rootClassName,
    style,
    onMouseEnter,
    onMouseLeave,
    onClick,
    afterClose,
    showIcon,
    closable,
    closeText,
    closeIcon,
    action,
    id,
    styles,
    icons,
    classNames: alertClassNames,
    ...otherProps
  } = props;

  const mergedTitle = title ?? message;

  const [closed, setClosed] = React.useState(false);

  if (process.env.NODE_ENV !== 'production') {
    const warning = devUseWarning('Alert');
    [
      ['closeText', 'closable.closeIcon'],
      ['message', 'title'],
    ].forEach(([deprecatedName, newName]) => {
      warning.deprecated(!(deprecatedName in props), deprecatedName, newName);
    });
  }

  const internalRef = React.useRef<HTMLDivElement>(null);

  React.useImperativeHandle(ref, () => ({
    nativeElement: internalRef.current!,
  }));

  const {
    getPrefixCls,
    direction,
    closable: contextClosable,
    closeIcon: contextCloseIcon,
    className: contextClassName,
    style: contextStyle,
    classNames: contextClassNames,
    icons: contextIcons,
    styles: contextStyles,
  } = useComponentConfig('alert');
  const prefixCls = getPrefixCls('alert', customizePrefixCls);

  const [wrapCSSVar, hashId, cssVarCls] = useStyle(prefixCls);

  const handleClose = (e: React.MouseEvent<HTMLButtonElement>) => {
    setClosed(true);
    props.onClose?.(e);
  };

  const type = React.useMemo<AlertProps['type']>(() => {
    if (props.type !== undefined) {
      return props.type;
    }
    // banner mode defaults to 'warning'
    return banner ? 'warning' : 'info';
  }, [props.type, banner]);

  // closeable when closeText or closeIcon is assigned
  const isClosable = React.useMemo<boolean>(() => {
    if (typeof closable === 'object' && closable.closeIcon) return true;
    if (closeText) {
      return true;
    }
    if (typeof closable === 'boolean') {
      return closable;
    }
    // should be true when closeIcon is 0 or ''
    if (closeIcon !== false && closeIcon !== null && closeIcon !== undefined) {
      return true;
    }

    return !!contextClosable;
  }, [closeText, closeIcon, closable, contextClosable]);

  // banner mode defaults to Icon
  const isShowIcon = banner && showIcon === undefined ? true : showIcon;

  const alertCls = classNames(
    prefixCls,
    `${prefixCls}-${type}`,
    {
      [`${prefixCls}-with-description`]: !!description,
      [`${prefixCls}-no-icon`]: !isShowIcon,
      [`${prefixCls}-banner`]: !!banner,
      [`${prefixCls}-rtl`]: direction === 'rtl',
    },
    contextClassName,
    className,
    rootClassName,
    contextClassNames.root,
    alertClassNames?.root,
    cssVarCls,
    hashId,
  );

  const restProps = pickAttrs(otherProps, { aria: true, data: true });

  const mergedCloseIcon = React.useMemo(() => {
    if (typeof closable === 'object' && closable.closeIcon) {
      return closable.closeIcon;
    }
    if (closeText) {
      return closeText;
    }
    if (icons?.close !== undefined) {
      return icons.close;
    }
    if (closeIcon !== undefined) {
      return closeIcon;
    }
    if (contextIcons?.close !== undefined) {
      return contextIcons.close;
    }
    if (typeof contextClosable === 'object' && contextClosable.closeIcon) {
      return contextClosable.closeIcon;
    }
    return contextCloseIcon;
  }, [closeIcon, closable, closeText, contextCloseIcon]);

  const mergedAriaProps = React.useMemo<React.AriaAttributes>(() => {
    const merged = closable ?? contextClosable;
    if (typeof merged === 'object') {
      const { closeIcon: _, ...ariaProps } = merged;
      return ariaProps;
    }
    return {};
  }, [closable, contextClosable]);

  return wrapCSSVar(
    <CSSMotion
      visible={!closed}
      motionName={`${prefixCls}-motion`}
      motionAppear={false}
      motionEnter={false}
      onLeaveStart={(node) => ({ maxHeight: node.offsetHeight })}
      onLeaveEnd={afterClose}
    >
      {({ className: motionClassName, style: motionStyle }, setRef) => (
        <div
          id={id}
          ref={composeRef(internalRef, setRef)}
          data-show={!closed}
          className={classNames(alertCls, motionClassName)}
          style={{
            ...contextStyles.root,
            ...contextStyle,
            ...styles?.root,
            ...style,
            ...motionStyle,
          }}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          onClick={onClick}
          role="alert"
          {...restProps}
        >
          {isShowIcon ? (
            <IconNode
              className={classNames(
                `${prefixCls}-icon`,
                alertClassNames?.icon,
                contextClassNames.icon,
              )}
              style={{ ...contextStyles.icon, ...styles?.icon }}
              description={description}
              icon={props.icon}
              icons={{ ...contextIcons, ...icons }}
              prefixCls={prefixCls}
              type={type}
            />
          ) : null}
          <div
            className={classNames(
              `${prefixCls}-section`,
              alertClassNames?.section,
              contextClassNames.section,
            )}
            style={{ ...contextStyles.section, ...styles?.section }}
          >
            {mergedTitle ? (
              <div
                className={classNames(
                  `${prefixCls}-title`,
                  alertClassNames?.title,
                  contextClassNames.title,
                )}
                style={{ ...contextStyles.title, ...styles?.title }}
              >
                {mergedTitle}
              </div>
            ) : null}
            {description ? (
              <div
                className={classNames(
                  `${prefixCls}-description`,
                  alertClassNames?.description,
                  contextClassNames.description,
                )}
                style={{ ...contextStyles.description, ...styles?.description }}
              >
                {description}
              </div>
            ) : null}
          </div>
          {action ? (
            <div
              className={classNames(
                `${prefixCls}-actions`,
                alertClassNames?.actions,
                contextClassNames.actions,
              )}
              style={{ ...contextStyles.actions, ...styles?.actions }}
            >
              {action}
            </div>
          ) : null}
          <CloseIconNode
            isClosable={isClosable}
            prefixCls={prefixCls}
            closeIcon={mergedCloseIcon}
            handleClose={handleClose}
            ariaProps={mergedAriaProps}
          />
        </div>
      )}
    </CSSMotion>,
  );
});

if (process.env.NODE_ENV !== 'production') {
  Alert.displayName = 'Alert';
}

export default Alert;
