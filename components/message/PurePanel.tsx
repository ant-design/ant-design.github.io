import * as React from 'react';
import CheckCircleFilled from '@ant-design/icons/CheckCircleFilled';
import CloseCircleFilled from '@ant-design/icons/CloseCircleFilled';
import ExclamationCircleFilled from '@ant-design/icons/ExclamationCircleFilled';
import InfoCircleFilled from '@ant-design/icons/InfoCircleFilled';
import LoadingOutlined from '@ant-design/icons/LoadingOutlined';
import classNames from 'classnames';
import { Notice } from 'rc-notification';
import type { NoticeProps } from 'rc-notification/lib/Notice';

import { cloneElement } from '../_util/reactNode';
import { useComponentConfig } from '../config-provider/context';
import useCSSVarCls from '../config-provider/hooks/useCSSVarCls';
import type { ArgsProps, NoticeType, SemanticName } from './interface';
import useStyle from './style';

export const defaultIcons = {
  info: <InfoCircleFilled />,
  success: <CheckCircleFilled />,
  error: <CloseCircleFilled />,
  warning: <ExclamationCircleFilled />,
  loading: <LoadingOutlined />,
};

export interface PureContentProps {
  prefixCls: string;
  type?: NoticeType;
  icon?: React.ReactNode;
  icons?: ArgsProps['icons'];
  children: React.ReactNode;
  classNames?: Partial<Record<SemanticName, string>>;
  styles?: Partial<Record<SemanticName, React.CSSProperties>>;
}

export const PureContent: React.FC<PureContentProps> = ({
  prefixCls,
  type,
  icon,
  icons,
  children,
  classNames: pureContentClassNames,
  styles,
}) => {
  const iconElement = icon || (type && icons?.[type]);
  const iconNode: React.ReactNode = cloneElement(iconElement, (currentProps) => ({
    className: classNames(currentProps.className, pureContentClassNames?.icon),
    style: { ...currentProps.style, ...styles?.icon },
  }));
  return (
    <div className={classNames(`${prefixCls}-custom-content`, `${prefixCls}-${type}`)}>
      {iconNode}
      <span className={pureContentClassNames?.content} style={styles?.content}>
        {children}
      </span>
    </div>
  );
};

export interface PurePanelProps
  extends Omit<NoticeProps, 'prefixCls' | 'eventKey' | 'classNames' | 'styles'>,
    Omit<PureContentProps, 'prefixCls' | 'children'> {
  prefixCls?: string;
  classNames?: Partial<Record<SemanticName, string>>;
  styles?: Partial<Record<SemanticName, React.CSSProperties>>;
}

/** @private Internal Component. Do not use in your production. */
const PurePanel: React.FC<PurePanelProps> = (props) => {
  const {
    prefixCls: staticPrefixCls,
    className,
    style,
    type,
    icon,
    content,
    classNames: messageClassNames,
    icons,
    styles,
    ...restProps
  } = props;
  const {
    getPrefixCls,
    className: contextClassName,
    style: contextStyle,
    classNames: contextClassNames,
    icons: contextIcons,
    styles: contextStyles,
  } = useComponentConfig('message');

  const prefixCls = staticPrefixCls || getPrefixCls('message');

  const rootCls = useCSSVarCls(prefixCls);
  const [hashId, cssVarCls] = useStyle(prefixCls, rootCls);

  return (
    <Notice
      {...restProps}
      prefixCls={prefixCls}
      className={classNames(
        contextClassName,
        contextClassNames.root,
        messageClassNames?.root,
        className,
        hashId,
        `${prefixCls}-notice-pure-panel`,
        cssVarCls,
        rootCls,
      )}
      style={{ ...contextStyles.root, ...styles?.root, ...contextStyle, ...style }}
      eventKey="pure"
      duration={null}
      content={
        <PureContent
          prefixCls={prefixCls}
          type={type}
          icon={icon}
          classNames={{
            icon: classNames(messageClassNames?.icon, contextClassNames.icon),
            content: classNames(messageClassNames?.content, contextClassNames.content),
          }}
          icons={{
            ...defaultIcons,
            ...contextIcons,
            ...icons,
          }}
          styles={{
            icon: { ...contextStyles.icon, ...styles?.icon },
            content: { ...contextStyles.content, ...styles?.content },
          }}
        >
          {content}
        </PureContent>
      }
    />
  );
};

export default PurePanel;
