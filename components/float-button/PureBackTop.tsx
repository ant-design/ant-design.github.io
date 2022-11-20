/* istanbul ignore next */
import VerticalAlignTopOutlined from '@ant-design/icons/VerticalAlignTopOutlined';
import classNames from 'classnames';
import CSSMotion from 'rc-motion';
import React, { memo, useContext, useRef } from 'react';
import FloatButton, { floatButtonPrefixCls } from './FloatButton';
import type { ConfigConsumerProps } from '../config-provider';
import { ConfigContext } from '../config-provider';
import scrollTo from '../_util/scrollTo';
import FloatButtonGroupContext from './context';
import type { BackTopProps, FloatButtonProps, FloatButtonShape } from './interface';
import useStyle from './style';

const PureBackTop: React.FC<BackTopProps> = (props) => {
  const {
    prefixCls: customizePrefixCls,
    className = '',
    type = 'default',
    shape = 'circle',
    icon = <VerticalAlignTopOutlined />,
    target,
    onClick,
    duration = 450,
    ...restProps
  } = props;

  const ref = useRef<HTMLAnchorElement | HTMLButtonElement>(null);

  const getDefaultTarget = (): HTMLElement | Document | Window =>
    ref.current && ref.current.ownerDocument ? ref.current.ownerDocument : window;

  const scrollToTop: React.MouseEventHandler<HTMLDivElement> = (e) => {
    scrollTo(0, { getContainer: target || getDefaultTarget, duration });
    onClick?.(e);
  };

  const { getPrefixCls } = useContext<ConfigConsumerProps>(ConfigContext);

  const prefixCls = getPrefixCls(floatButtonPrefixCls, customizePrefixCls);
  const rootPrefixCls = getPrefixCls();
  const [wrapSSR] = useStyle(prefixCls);

  const groupShape = useContext<FloatButtonShape | undefined>(FloatButtonGroupContext);

  const mergeShape = groupShape || shape;

  const contentProps: FloatButtonProps = { prefixCls, icon, type, shape: mergeShape, ...restProps };

  return wrapSSR(
    <CSSMotion visible motionName={`${rootPrefixCls}-fade`}>
      {({ className: motionClassName }) => (
        <FloatButton
          ref={ref}
          {...contentProps}
          onClick={scrollToTop}
          className={classNames(className, motionClassName)}
        />
      )}
    </CSSMotion>,
  );
};

export default memo(PureBackTop);
