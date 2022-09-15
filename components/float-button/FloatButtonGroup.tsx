import FileTextOutlined from '@ant-design/icons/FileTextOutlined';
import classNames from 'classnames';
import React, { memo, useContext } from 'react';
import { floatButtonPrefixCls } from '.';
import type { ConfigConsumerProps } from '../config-provider';
import { ConfigContext } from '../config-provider';
import { FloatButtonGroupProvider } from './context';
import type { FloatButtonGroupProps } from './interface';
import useStyle from './style';

const FloatButtonGroup: React.FC<FloatButtonGroupProps> = props => {
  const {
    prefixCls: customizePrefixCls,
    className,
    shape = 'circle',
    type = 'default',
    trigger,
    open,
    icon,
    children,
    onOpenChange,
  } = props;
  const { direction, getPrefixCls } = useContext<ConfigConsumerProps>(ConfigContext);
  const prefixCls = getPrefixCls(floatButtonPrefixCls, customizePrefixCls);
  const [wrapSSR, hashId] = useStyle(prefixCls);
  const groupPrefixCls = `${prefixCls}-group`;

  const classStringMenu = classNames(
    hashId,
    prefixCls,
    className,
    `${prefixCls}-${type}`,
    `${prefixCls}-${shape}`,
    {
      [`${prefixCls}-rtl`]: direction === 'rtl',
    },
  );

  const classString = classNames(
    groupPrefixCls,
    hashId,
    {
      [`${groupPrefixCls}-rtl`]: direction === 'rtl',
      [`${groupPrefixCls}-${shape}`]: shape,
    },
    className,
  );

  return wrapSSR(
    <FloatButtonGroupProvider value={{ shape, open, trigger, onOpenChange }}>
      {trigger && ['click', 'hover'].includes(trigger) ? (
        <div className={classStringMenu}>
          <div className={`${prefixCls}-content`}>
            <div className={`${prefixCls}-icon ${prefixCls}-${type}-icon`}>
              {icon || <FileTextOutlined />}
            </div>
          </div>
        </div>
      ) : (
        <div className={classString}>{children}</div>
      )}
    </FloatButtonGroupProvider>,
  );
};

export default memo(FloatButtonGroup);
