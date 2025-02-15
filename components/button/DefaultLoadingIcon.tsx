import React, { forwardRef } from 'react';
import LoadingOutlined from '@ant-design/icons/LoadingOutlined';
import classNames from 'classnames';
import CSSMotion from 'rc-motion';

import IconWrapper from './IconWrapper';

type InnerLoadingIconProps = {
  prefixCls: string;
  className?: string;
  style?: React.CSSProperties;
  icon?: React.ReactNode;
};

const InnerLoadingIcon = forwardRef<HTMLSpanElement, InnerLoadingIconProps>((props, ref) => {
  const { prefixCls, className, style, icon } = props;
  const mergedIconCls = classNames(`${prefixCls}-loading-icon`, className);

  return (
    <IconWrapper prefixCls={prefixCls} className={mergedIconCls} style={style} ref={ref}>
      {icon ?? <LoadingOutlined />}
    </IconWrapper>
  );
});

export type DefaultLoadingIconProps = {
  prefixCls: string;
  existIcon: boolean;
  loading?: boolean | object;
  className?: string;
  style?: React.CSSProperties;
  mount: boolean;
  icon?: React.ReactNode;
};

const getCollapsedWidth = (): React.CSSProperties => ({
  width: 0,
  opacity: 0,
  transform: 'scale(0)',
});

const getRealWidth = (node: HTMLElement): React.CSSProperties => ({
  width: node.scrollWidth,
  opacity: 1,
  transform: 'scale(1)',
});

const DefaultLoadingIcon: React.FC<DefaultLoadingIconProps> = (props) => {
  const { prefixCls, loading, existIcon, className, style, mount, icon } = props;
  const visible = !!loading;

  if (existIcon) {
    return (
      <InnerLoadingIcon prefixCls={prefixCls} className={className} style={style} icon={icon} />
    );
  }

  return (
    <CSSMotion
      visible={visible}
      // Used for minus flex gap style only
      motionName={`${prefixCls}-loading-icon-motion`}
      motionAppear={!mount}
      motionEnter={!mount}
      motionLeave={!mount}
      removeOnLeave
      onAppearStart={getCollapsedWidth}
      onAppearActive={getRealWidth}
      onEnterStart={getCollapsedWidth}
      onEnterActive={getRealWidth}
      onLeaveStart={getRealWidth}
      onLeaveActive={getCollapsedWidth}
    >
      {({ className: motionCls, style: motionStyle }, ref: React.Ref<HTMLSpanElement>) => {
        const mergedStyle = { ...style, ...motionStyle };

        return (
          <InnerLoadingIcon
            prefixCls={prefixCls}
            className={classNames(className, motionCls)}
            style={mergedStyle}
            ref={ref}
            icon={icon}
          />
        );
      }}
    </CSSMotion>
  );
};

export default DefaultLoadingIcon;
