import * as React from 'react';
import classNames from 'classnames';
import omit from 'rc-util/lib/omit';

import type { PresetColorType, PresetStatusColorType } from '../_util/colors';
import { isPresetColor, isPresetStatusColor } from '../_util/colors';
import type { ClosableType } from '../_util/hooks/useClosable';
import useClosable, { pickClosable } from '../_util/hooks/useClosable';
import { replaceElement } from '../_util/reactNode';
import type { LiteralUnion } from '../_util/type';
import { devUseWarning } from '../_util/warning';
import Wave from '../_util/wave';
import { ConfigContext } from '../config-provider';
import CheckableTag from './CheckableTag';
import useStyle from './style';
import PresetCmp from './style/presetCmp';
import StatusCmp from './style/statusCmp';
import FunVariant, { TagVariant } from './style/variant';
import Compact from './Compact';
export type { CheckableTagProps } from './CheckableTag';

export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  prefixCls?: string;
  className?: string;
  rootClassName?: string;
  color?: LiteralUnion<PresetColorType | PresetStatusColorType>;
  /** Advised to use closeIcon instead. */
  closable?: ClosableType;
  closeIcon?: React.ReactNode;
  /** @deprecated `visible` will be removed in next major version. */
  visible?: boolean;
  onClose?: (e: React.MouseEvent<HTMLElement>) => void;
  style?: React.CSSProperties;
  icon?: React.ReactNode;
  bordered?: boolean;
  variant?: TagVariant;
}

const InternalTag = React.forwardRef<HTMLSpanElement, TagProps>((tagProps, ref) => {
  const {
    prefixCls: customizePrefixCls,
    className,
    rootClassName,
    style,
    children,
    icon,
    color,
    onClose,
    bordered = true,
    visible: deprecatedVisible,
    variant,
    ...props
  } = tagProps;
  const { getPrefixCls, direction, tag: tagContext } = React.useContext(ConfigContext);
  const [visible, setVisible] = React.useState(true);

  const domProps = omit(props, ['closeIcon', 'closable']);

  // Warning for deprecated usage
  if (process.env.NODE_ENV !== 'production') {
    const warning = devUseWarning('Tag');

    warning.deprecated(!('visible' in tagProps), 'visible', 'visible && <Tag />');
  }

  React.useEffect(() => {
    if (deprecatedVisible !== undefined) {
      setVisible(deprecatedVisible!);
    }
  }, [deprecatedVisible]);

  const isPreset = isPresetColor(color);
  const isStatus = isPresetStatusColor(color);
  const isInternalColor = isPreset || isStatus;
  const isVariant = FunVariant(variant as TagVariant);
  const tagStyle: React.CSSProperties = {
    color: isVariant ? (!isInternalColor ? '#fff' : undefined) : undefined,
    backgroundColor: isVariant || (color && !isInternalColor ? color : undefined),
    ...tagContext?.style,
    ...style,
  };

  const prefixCls = getPrefixCls('tag', customizePrefixCls);
  const [wrapCSSVar, hashId, cssVarCls] = useStyle(prefixCls);
  // Style

  const tagClassName = classNames(
    prefixCls,
    tagContext?.className,
    {
      [`${prefixCls}-${color}`]: isInternalColor,
      [`${prefixCls}-has-color`]: color && !isInternalColor,
      [`${prefixCls}-hidden`]: !visible,
      [`${prefixCls}-rtl`]: direction === 'rtl',
      [`${prefixCls}-borderless`]: !bordered,
    },
    className,
    rootClassName,
    hashId,
    cssVarCls,
  );

  const handleCloseClick = (e: React.MouseEvent<HTMLElement>) => {
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

  const iconNode: React.ReactNode = icon || null;

  const kids: React.ReactNode = iconNode ? (
    <>
      {iconNode}
      {children && <span>{children}</span>}
    </>
  ) : (
    children
  );

  const tagNode: React.ReactNode = (
    <span {...domProps} ref={ref} className={tagClassName} style={tagStyle}>
      {kids}
      {mergedCloseIcon}
      {isPreset && <PresetCmp key="preset" prefixCls={prefixCls} />}
      {isStatus && <StatusCmp key="status" prefixCls={prefixCls} />}
    </span>
  );

  return wrapCSSVar(isNeedWave ? <Wave component="Tag">{tagNode}</Wave> : tagNode);
});

export type TagType = typeof InternalTag & {
  CheckableTag: typeof CheckableTag;
  Compact: typeof Compact;
};

const Tag = InternalTag as TagType;

if (process.env.NODE_ENV !== 'production') {
  Tag.displayName = 'Tag';
}
Tag.Compact = Compact;
Tag.CheckableTag = CheckableTag;

export default Tag;
