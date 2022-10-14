import classNames from 'classnames';
import * as React from 'react';
import { ConfigContext } from '../config-provider';
import type { PresetColorType } from '../_util/colors';
import type { LiteralUnion } from '../_util/type';
import { isPresetColor } from './utils';

type RibbonPlacement = 'start' | 'end';

export interface RibbonProps {
  className?: string;
  prefixCls?: string;
  style?: React.CSSProperties; // style of ribbon element, not the wrapper
  text?: React.ReactNode;
  color?: LiteralUnion<PresetColorType, string>;
  children?: React.ReactNode;
  placement?: RibbonPlacement;
}

const Ribbon = function Ribbon({
  className,
  prefixCls: customizePrefixCls,
  style,
  color,
  children,
  text,
  placement = 'end',
}: RibbonProps) {
  const { getPrefixCls, direction } = React.useContext(ConfigContext);
  const prefixCls = getPrefixCls('ribbon', customizePrefixCls);
  const colorInPreset = isPresetColor(color);
  const ribbonCls = classNames(
    prefixCls,
    `${prefixCls}-placement-${placement}`,
    {
      [`${prefixCls}-rtl`]: direction === 'rtl',
      [`${prefixCls}-color-${color}`]: colorInPreset,
    },
    className,
  );
  const colorStyle: React.CSSProperties = {};
  const cornerColorStyle: React.CSSProperties = {};
  if (color && !colorInPreset) {
    colorStyle.background = color;
    cornerColorStyle.color = color;
  }
  return (
    <div className={`${prefixCls}-wrapper`}>
      {children}
      <div className={ribbonCls} style={{ ...colorStyle, ...style }}>
        <span className={`${prefixCls}-text`}>{text}</span>
        <div className={`${prefixCls}-corner`} style={cornerColorStyle} />
      </div>
    </div>
  );
};

export default Ribbon;
