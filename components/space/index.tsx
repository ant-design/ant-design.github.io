import * as React from 'react';
import classNames from 'classnames';
import toArray from 'rc-util/lib/Children/toArray';

import { isPresetSize, isValidGapNumber } from '../_util/gapSize';
import { useComponentConfig } from '../config-provider/context';
import type { SizeType } from '../config-provider/SizeContext';
import Compact from './Compact';
import { SpaceContextProvider } from './context';
import type { SpaceContextType } from './context';
import Item from './Item';
import useStyle from './style';

export { SpaceContext } from './context';

export type SpaceSize = SizeType | number;

export interface SpaceProps extends React.HTMLAttributes<HTMLDivElement> {
  prefixCls?: string;
  className?: string;
  rootClassName?: string;
  style?: React.CSSProperties;
  size?: SpaceSize | [SpaceSize, SpaceSize];
  direction?: 'horizontal' | 'vertical';
  // No `stretch` since many components do not support that.
  align?: 'start' | 'end' | 'center' | 'baseline';
  block?: boolean;
  split?: React.ReactNode;
  wrap?: boolean;
  classNames?: { item: string };
  styles?: { item: React.CSSProperties };
}

const InternalSpace = React.forwardRef<HTMLDivElement, SpaceProps>((props, ref) => {
  const {
    getPrefixCls,
    direction: directionConfig,
    size: contextSize,
    className: contextClassName,
    style: contextStyle,
    classNames: contextClassNames,
    styles: contextStyles,
  } = useComponentConfig('space');

  const {
    size = contextSize ?? 'small',
    align,
    block,
    className,
    rootClassName,
    children,
    direction = 'horizontal',
    prefixCls: customizePrefixCls,
    split,
    style,
    wrap = false,
    classNames: customClassNames,
    styles,
    ...otherProps
  } = props;

  const [horizontalSize, verticalSize] = Array.isArray(size) ? size : ([size, size] as const);

  const isPresetVerticalSize = isPresetSize(verticalSize);

  const isPresetHorizontalSize = isPresetSize(horizontalSize);

  const isValidVerticalSize = isValidGapNumber(verticalSize);

  const isValidHorizontalSize = isValidGapNumber(horizontalSize);

  const childNodes = toArray(children, { keepEmpty: true });

  const mergedAlign = align === undefined && direction === 'horizontal' ? 'center' : align;
  const prefixCls = getPrefixCls('space', customizePrefixCls);
  const [wrapCSSVar, hashId, cssVarCls] = useStyle(prefixCls);

  const cls = classNames(
    prefixCls,
    contextClassName,
    hashId,
    `${prefixCls}-${direction}`,
    {
      [`${prefixCls}-rtl`]: directionConfig === 'rtl',
      [`${prefixCls}-align-${mergedAlign}`]: mergedAlign,
      [`${prefixCls}-block`]: block,
      [`${prefixCls}-gap-row-${verticalSize}`]: isPresetVerticalSize,
      [`${prefixCls}-gap-col-${horizontalSize}`]: isPresetHorizontalSize,
    },
    className,
    rootClassName,
    cssVarCls,
  );

  const itemClassName = classNames(
    `${prefixCls}-item`,
    customClassNames?.item ?? contextClassNames.item,
  );

  // Calculate latest one
  let latestIndex = 0;
  const nodes = childNodes.map<React.ReactNode>((child, i) => {
    if (child !== null && child !== undefined) {
      latestIndex = i;
    }

    const key = child?.key || `${itemClassName}-${i}`;

    return (
      <Item
        className={itemClassName}
        key={key}
        index={i}
        split={split}
        style={styles?.item ?? contextStyles.item}
      >
        {child}
      </Item>
    );
  });

  const spaceContext = React.useMemo<SpaceContextType>(() => ({ latestIndex }), [latestIndex]);

  // =========================== Render ===========================
  if (childNodes.length === 0) {
    return null;
  }

  const gapStyle: React.CSSProperties = {};

  if (wrap) {
    gapStyle.flexWrap = 'wrap';
  }

  if (!isPresetHorizontalSize && isValidHorizontalSize) {
    gapStyle.columnGap = horizontalSize;
  }

  if (!isPresetVerticalSize && isValidVerticalSize) {
    gapStyle.rowGap = verticalSize;
  }

  return wrapCSSVar(
    <div
      ref={ref}
      className={cls}
      style={{ ...gapStyle, ...contextStyle, ...style }}
      {...otherProps}
    >
      <SpaceContextProvider value={spaceContext}>{nodes}</SpaceContextProvider>
    </div>,
  );
});

type CompoundedComponent = typeof InternalSpace & {
  Compact: typeof Compact;
};

const Space = InternalSpace as CompoundedComponent;

Space.Compact = Compact;

if (process.env.NODE_ENV !== 'production') {
  Space.displayName = 'Space';
}

export default Space;
