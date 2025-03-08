import * as React from 'react';
import { FastColor } from '@ant-design/fast-color';
import omit from '@rc-component/util/lib/omit';
import classNames from 'classnames';

import type { PresetColorType, PresetStatusColorType } from '../_util/colors';
import { isPresetColor, isPresetStatusColor } from '../_util/colors';
import type { ClosableType } from '../_util/hooks/useClosable';
import useClosable, { pickClosable } from '../_util/hooks/useClosable';
import { cloneElement, replaceElement } from '../_util/reactNode';
import type { LiteralUnion } from '../_util/type';
import { devUseWarning } from '../_util/warning';
import Wave from '../_util/wave';
import { ConfigContext } from '../config-provider';
import { useComponentConfig } from '../config-provider/context';
import DisabledContext from '../config-provider/DisabledContext';
import CheckableTag from './CheckableTag';
import useStyle from './style';
import PresetCmp from './style/presetCmp';
import StatusCmp from './style/statusCmp';

export type { CheckableTagProps } from './CheckableTag';

type SemanticName = 'root' | 'icon' | 'content';
export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  prefixCls?: string;
  className?: string;
  rootClassName?: string;
  color?: LiteralUnion<PresetColorType | PresetStatusColorType>;
  variant?: 'outlined' | 'filled' | 'borderless';
  /** Advised to use closeIcon instead. */
  closable?: ClosableType;
  closeIcon?: React.ReactNode;
  onClose?: (e: React.MouseEvent<HTMLElement>) => void;
  style?: React.CSSProperties;
  icon?: React.ReactNode;
  /** @deprecated Please use `variant="borderless"` instead */
  bordered?: boolean;
  href?: string;
  target?: string;
  disabled?: boolean;
  classNames?: Partial<Record<SemanticName, string>>;
  styles?: Partial<Record<SemanticName, React.CSSProperties>>;
}

const InternalTag = React.forwardRef<HTMLSpanElement | HTMLAnchorElement, TagProps>(
  (tagProps, ref) => {
    const {
      prefixCls: customizePrefixCls,
      className,
      rootClassName,
      style,
      children,
      icon,
      color,
      variant,
      onClose,
      bordered = true,
      disabled: customDisabled,
      href,
      target,
      styles,
      classNames: tagClassNames,
      ...props
    } = tagProps;

    const {
      getPrefixCls,
      direction,
      className: contextClassName,
      variant: contextVariant,
      style: contextStyle,
      classNames: contextClassNames,
      styles: contextStyles,
    } = useComponentConfig('tag');

    const isInverseColor = color?.endsWith('-inverse');

    const mergedVariant =
      variant ||
      contextVariant ||
      (bordered === false && 'borderless') ||
      (isInverseColor ? 'filled' : 'outlined');

    const mergedColor = isInverseColor ? color?.replace('-inverse', '') : color;

    if (process.env.NODE_ENV !== 'production') {
      const warning = devUseWarning('Tag');
      warning.deprecated(bordered !== false, 'bordered={false}', 'variant="borderless"');
      warning.deprecated(!isInverseColor, 'color="xxx-inverse"', 'variant="filled"');
    }

    // ===================== Disabled =====================
    const disabled = React.useContext(DisabledContext);
    const mergedDisabled = customDisabled ?? disabled;

    const { tag: tagContext } = React.useContext(ConfigContext);
    const [visible, setVisible] = React.useState(true);

    const domProps = omit(props, ['closeIcon', 'closable']);

    const isPreset = isPresetColor(color);
    const isStatus = isPresetStatusColor(color);
    const isInternalColor = isPreset || isStatus;

    const tagStyle: React.CSSProperties = {
      backgroundColor: color && !isInternalColor ? color : undefined,
      ...contextStyles.root,
      ...styles?.root,
      ...contextStyle,
      ...style,
    };

    if (color && !isInternalColor && !mergedDisabled) {
      if (mergedVariant === 'filled') {
        tagStyle.background = color;
      } else {
        const hsl = new FastColor(color).toHsl();
        hsl.l = 0.95;
        tagStyle.background = new FastColor(hsl).toHexString();
        tagStyle.color = color;
        if (mergedVariant === 'outlined') {
          tagStyle.borderColor = color;
        }
      }
    }

    const prefixCls = getPrefixCls('tag', customizePrefixCls);
    const [hashId, cssVarCls] = useStyle(prefixCls);
    // Style
    const tagClassName = classNames(
      prefixCls,
      contextClassName,
      contextClassNames.root,
      tagClassNames?.root,
      `${prefixCls}-${mergedVariant}`,
      {
        [`${prefixCls}-${mergedColor}`]: isInternalColor,
        [`${prefixCls}-has-color`]: color && !isInternalColor,
        [`${prefixCls}-hidden`]: !visible,
        [`${prefixCls}-rtl`]: direction === 'rtl',
        [`${prefixCls}-disabled`]: mergedDisabled,
      },
      className,
      rootClassName,
      hashId,
      cssVarCls,
    );

    const handleCloseClick = (e: React.MouseEvent<HTMLElement>) => {
      if (mergedDisabled) {
        return;
      }
      e.stopPropagation();
      onClose?.(e);

      if (e.defaultPrevented) {
        return;
      }
      setVisible(false);
    };

    const [, mergedCloseIcon] = useClosable(pickClosable(tagProps), pickClosable(tagContext), {
      closable: false,
      closeIconRender: (iconNode: React.ReactNode) => {
        const replacement = (
          <span className={`${prefixCls}-close-icon`} onClick={handleCloseClick}>
            {iconNode}
          </span>
        );
        return replaceElement(iconNode, replacement, (originProps) => ({
          onClick: (e: React.MouseEvent<HTMLElement>) => {
            originProps?.onClick?.(e);
            handleCloseClick(e);
          },
          className: classNames(originProps?.className, `${prefixCls}-close-icon`),
        }));
      },
    });

    const isNeedWave =
      typeof props.onClick === 'function' ||
      (children && (children as React.ReactElement<any>).type === 'a');

    const iconNode: React.ReactNode = cloneElement(icon, {
      className: classNames(
        React.isValidElement(icon)
          ? (icon as React.ReactElement<{ className?: string }>).props?.className
          : '',
        contextClassNames.icon,
        tagClassNames?.icon,
      ),
      style: { ...contextStyles.icon, ...styles?.icon },
    });

    const child: React.ReactNode = iconNode ? (
      <>
        {iconNode}
        {children && (
          <span
            className={classNames(contextClassNames.content, tagClassNames?.content)}
            style={{ ...contextStyles.content, ...styles?.content }}
          >
            {children}
          </span>
        )}
      </>
    ) : (
      children
    );

    const TagWrapper = href ? 'a' : 'span';

    const tagNode: React.ReactNode = (
      <TagWrapper
        {...domProps}
        // @ts-expect-error
        ref={ref}
        className={tagClassName}
        style={tagStyle}
        href={mergedDisabled ? undefined : href}
        target={target}
        onClick={mergedDisabled ? undefined : domProps.onClick}
        {...(href && mergedDisabled ? { 'aria-disabled': true } : {})}
      >
        {child}
        {mergedCloseIcon}
        {isPreset && <PresetCmp key="preset" prefixCls={prefixCls} />}
        {isStatus && <StatusCmp key="status" prefixCls={prefixCls} />}
      </TagWrapper>
    );

    return isNeedWave ? <Wave component="Tag">{tagNode}</Wave> : tagNode;
  },
);

export type TagType = typeof InternalTag & {
  CheckableTag: typeof CheckableTag;
};

const Tag = InternalTag as TagType;

if (process.env.NODE_ENV !== 'production') {
  Tag.displayName = 'Tag';
}

Tag.CheckableTag = CheckableTag;

export default Tag;
