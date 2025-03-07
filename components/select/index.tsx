// TODO: 4.0 - codemod should help to change `filterOption` to support node props.
import * as React from 'react';
import type { BaseSelectRef, SelectProps as RcSelectProps } from '@rc-component/select';
import RcSelect, { OptGroup, Option } from '@rc-component/select';
import type { OptionProps } from '@rc-component/select/lib/Option';
import type { BaseOptionType, DefaultOptionType } from '@rc-component/select/lib/Select';
import omit from '@rc-component/util/lib/omit';
import classNames from 'classnames';

import { useZIndex } from '../_util/hooks/useZIndex';
import type { SelectCommonPlacement } from '../_util/motion';
import { getTransitionName } from '../_util/motion';
import genPurePanel from '../_util/PurePanel';
import type { InputStatus } from '../_util/statusUtils';
import { getMergedStatus, getStatusClassNames } from '../_util/statusUtils';
import { devUseWarning } from '../_util/warning';
import { ConfigContext } from '../config-provider';
import type { Variant } from '../config-provider';
import { useComponentConfig } from '../config-provider/context';
import DefaultRenderEmpty from '../config-provider/defaultRenderEmpty';
import DisabledContext from '../config-provider/DisabledContext';
import useCSSVarCls from '../config-provider/hooks/useCSSVarCls';
import useSize from '../config-provider/hooks/useSize';
import type { SizeType } from '../config-provider/SizeContext';
import { FormItemInputContext } from '../form/context';
import useVariants from '../form/hooks/useVariants';
import { useCompactItemContext } from '../space/Compact';
import { useToken } from '../theme/internal';
import mergedBuiltinPlacements from './mergedBuiltinPlacements';
import useStyle from './style';
import useIcons from './useIcons';
import useShowArrow from './useShowArrow';

type RawValue = string | number;

export type { BaseOptionType, DefaultOptionType, OptionProps, BaseSelectRef as RefSelectProps };

export interface LabeledValue {
  key?: string;
  value: RawValue;
  label: React.ReactNode;
}

export type SelectValue = RawValue | RawValue[] | LabeledValue | LabeledValue[] | undefined;

export interface InternalSelectProps<
  ValueType = any,
  OptionType extends BaseOptionType | DefaultOptionType = DefaultOptionType,
> extends Omit<RcSelectProps<ValueType, OptionType>, 'mode'> {
  rootClassName?: string;
  prefix?: React.ReactNode;
  suffixIcon?: React.ReactNode;
  size?: SizeType;
  disabled?: boolean;
  mode?: 'multiple' | 'tags' | 'SECRET_COMBOBOX_MODE_DO_NOT_USE' | 'combobox';
  /** @deprecated Use `variant` instead. */
  bordered?: boolean;
  /**
   * @deprecated `showArrow` is deprecated which will be removed in next major version. It will be a
   *   default behavior, you can hide it by setting `suffixIcon` to null.
   */
  showArrow?: boolean;
  /**
   * @since 5.13.0
   * @default "outlined"
   */
  variant?: Variant;
}

type SemanticName = 'root' | 'prefix' | 'suffix' | 'popup';

export interface SelectProps<
  ValueType = any,
  OptionType extends BaseOptionType | DefaultOptionType = DefaultOptionType,
> extends Omit<
    InternalSelectProps<ValueType, OptionType>,
    | 'mode'
    | 'getInputElement'
    | 'getRawInputElement'
    | 'backfill'
    | 'placement'
    | 'dropdownClassName'
    | 'dropdownStyle'
  > {
  placement?: SelectCommonPlacement;
  mode?: 'multiple' | 'tags';
  status?: InputStatus;
  /** @deprecated Please use `classNames: {{ popup: ''}}` instead */
  popupClassName?: string;
  /** @deprecated Please use `classNames: {{ popup: ''}}` instead */
  dropdownClassName?: string;
  /** @deprecated Please use `styles: {{ popup: {}}}` instead */
  dropdownStyle?: React.CSSProperties;
  /** @deprecated Please use `popupMatchSelectWidth` instead */
  dropdownMatchSelectWidth?: boolean | number;
  popupMatchSelectWidth?: boolean | number;
  classNames?: Partial<Record<SemanticName, string>>;
  styles?: Partial<Record<SemanticName, React.CSSProperties>>;
}

const SECRET_COMBOBOX_MODE_DO_NOT_USE = 'SECRET_COMBOBOX_MODE_DO_NOT_USE';

const InternalSelect = <
  ValueType = any,
  OptionType extends BaseOptionType | DefaultOptionType = DefaultOptionType,
>(
  props: SelectProps<ValueType, OptionType>,
  ref: React.Ref<BaseSelectRef>,
) => {
  const {
    prefixCls: customizePrefixCls,
    bordered,
    className,
    rootClassName,
    getPopupContainer,
    popupClassName,
    listHeight = 256,
    placement,
    listItemHeight: customListItemHeight,
    size: customizeSize,
    disabled: customDisabled,
    notFoundContent,
    status: customStatus,
    builtinPlacements,
    dropdownMatchSelectWidth,
    popupMatchSelectWidth,
    direction: propDirection,
    style,
    allowClear,
    variant: customizeVariant,
    dropdownStyle,
    transitionName,
    tagRender,
    maxCount,
    prefix,
    classNames: selectClassNames,
    styles,
    ...rest
  } = props;

  const {
    getPopupContainer: getContextPopupContainer,
    getPrefixCls,
    renderEmpty,
    direction: contextDirection,
    virtual,
    popupMatchSelectWidth: contextPopupMatchSelectWidth,
    popupOverflow,
  } = React.useContext(ConfigContext);

  const {
    showSearch: contextShowSearch,
    style: contextStyle,
    styles: contextStyles,
    className: contextClassName,
    classNames: contextClassNames,
  } = useComponentConfig('select');

  const [, token] = useToken();

  const listItemHeight = customListItemHeight ?? token?.controlHeight;

  const prefixCls = getPrefixCls('select', customizePrefixCls);
  const rootPrefixCls = getPrefixCls();
  const direction = propDirection ?? contextDirection;

  const { compactSize, compactItemClassnames } = useCompactItemContext(prefixCls, direction);

  const [variant, enableVariantCls] = useVariants('select', customizeVariant, bordered);

  const rootCls = useCSSVarCls(prefixCls);
  const [hashId, cssVarCls] = useStyle(prefixCls, rootCls);

  const mode = React.useMemo(() => {
    const { mode: m } = props as InternalSelectProps<OptionType>;

    if (m === 'combobox') {
      return undefined;
    }

    if (m === SECRET_COMBOBOX_MODE_DO_NOT_USE) {
      return 'combobox';
    }

    return m;
  }, [props.mode]);

  const isMultiple = mode === 'multiple' || mode === 'tags';

  const showSuffixIcon = useShowArrow(props.suffixIcon, props.showArrow);

  const mergedPopupMatchSelectWidth =
    popupMatchSelectWidth ?? dropdownMatchSelectWidth ?? contextPopupMatchSelectWidth;

  // ===================== Form Status =====================
  const {
    status: contextStatus,
    hasFeedback,
    isFormItemInput,
    feedbackIcon,
  } = React.useContext(FormItemInputContext);
  const mergedStatus = getMergedStatus(contextStatus, customStatus);

  // ===================== Empty =====================
  let mergedNotFound: React.ReactNode;
  if (notFoundContent !== undefined) {
    mergedNotFound = notFoundContent;
  } else if (mode === 'combobox') {
    mergedNotFound = null;
  } else {
    mergedNotFound = renderEmpty?.('Select') || <DefaultRenderEmpty componentName="Select" />;
  }

  // ===================== Icons =====================
  const { suffixIcon, itemIcon, removeIcon, clearIcon } = useIcons({
    ...rest,
    multiple: isMultiple,
    hasFeedback,
    feedbackIcon,
    showSuffixIcon,
    prefixCls,
    componentName: 'Select',
  });

  const mergedAllowClear = allowClear === true ? { clearIcon } : allowClear;

  const selectProps = omit(rest, ['suffixIcon', 'itemIcon' as any]);

  const mergedStyles = React.useMemo(
    () => ({
      popup: { ...contextStyles.popup, ...styles?.popup },
      prefix: { ...contextStyles.prefix, ...styles?.prefix },
      suffix: { ...contextStyles.suffix, ...styles?.suffix },
    }),
    [styles, contextStyles],
  );

  const mergedClassNames = React.useMemo(
    () => ({
      popup: classNames(contextClassNames.popup, selectClassNames?.popup),
      prefix: classNames(contextClassNames.prefix, selectClassNames?.prefix),
      suffix: classNames(contextClassNames.suffix, selectClassNames?.suffix),
    }),
    [selectClassNames, contextClassNames],
  );

  const mergedPopupClassName = classNames(
    popupClassName,
    {
      [`${prefixCls}-dropdown-${direction}`]: direction === 'rtl',
    },
    rootClassName,
    cssVarCls,
    rootCls,
    hashId,
    mergedClassNames?.popup,
  );

  const mergedSize = useSize((ctx) => customizeSize ?? compactSize ?? ctx);

  // ===================== Disabled =====================
  const disabled = React.useContext(DisabledContext);
  const mergedDisabled = customDisabled ?? disabled;

  const mergedClassName = classNames(
    {
      [`${prefixCls}-lg`]: mergedSize === 'large',
      [`${prefixCls}-sm`]: mergedSize === 'small',
      [`${prefixCls}-rtl`]: direction === 'rtl',
      [`${prefixCls}-${variant}`]: enableVariantCls,
      [`${prefixCls}-in-form-item`]: isFormItemInput,
    },
    getStatusClassNames(prefixCls, mergedStatus, hasFeedback),
    compactItemClassnames,
    contextClassName,
    className,
    rootClassName,
    selectClassNames?.root,
    contextClassNames.root,
    cssVarCls,
    rootCls,
    hashId,
  );

  // ===================== Placement =====================
  const memoPlacement = React.useMemo<SelectCommonPlacement>(() => {
    if (placement !== undefined) {
      return placement;
    }
    return direction === 'rtl' ? 'bottomRight' : 'bottomLeft';
  }, [placement, direction]);

  // ====================== Warning ======================
  if (process.env.NODE_ENV !== 'production') {
    const warning = devUseWarning('Select');

    [
      ['dropdownMatchSelectWidth', 'popupMatchSelectWidth'],
      ['popupClassName', 'classNames: {{ popup: ""}}'],
      ['dropdownStyle', '{{ popup: {}}}'],
    ].forEach(([deprecatedName, newName]) => {
      warning.deprecated(!(deprecatedName in props), deprecatedName, newName);
    });

    warning(
      !('showArrow' in props),
      'deprecated',
      '`showArrow` is deprecated which will be removed in next major version. It will be a default behavior, you can hide it by setting `suffixIcon` to null.',
    );

    warning.deprecated(!('bordered' in props), 'bordered', 'variant');

    warning(
      !(typeof maxCount !== 'undefined' && !isMultiple),
      'usage',
      '`maxCount` only works with mode `multiple` or `tags`',
    );
  }

  // ====================== zIndex =========================
  const [zIndex] = useZIndex(
    'SelectLike',
    (mergedStyles?.popup?.zIndex as number) ?? (dropdownStyle?.zIndex as number),
  );

  // ====================== Render =======================
  return (
    <RcSelect<ValueType, OptionType>
      ref={ref}
      virtual={virtual}
      classNames={{
        prefix: mergedClassNames?.prefix,
        suffix: mergedClassNames?.suffix,
      }}
      styles={{
        prefix: mergedStyles?.prefix,
        suffix: mergedStyles?.suffix,
      }}
      showSearch={contextShowSearch}
      {...selectProps}
      style={{ ...contextStyles.root, ...styles?.root, ...contextStyle, ...style }}
      popupMatchSelectWidth={mergedPopupMatchSelectWidth}
      transitionName={getTransitionName(rootPrefixCls, 'slide-up', transitionName)}
      builtinPlacements={mergedBuiltinPlacements(builtinPlacements, popupOverflow)}
      listHeight={listHeight}
      listItemHeight={listItemHeight}
      mode={mode}
      prefixCls={prefixCls}
      placement={memoPlacement}
      direction={direction}
      prefix={prefix}
      suffixIcon={suffixIcon}
      menuItemSelectedIcon={itemIcon}
      removeIcon={removeIcon}
      allowClear={mergedAllowClear}
      notFoundContent={mergedNotFound}
      className={mergedClassName}
      getPopupContainer={getPopupContainer || getContextPopupContainer}
      popupClassName={mergedPopupClassName}
      disabled={mergedDisabled}
      popupStyle={{ ...mergedStyles?.popup, ...dropdownStyle, zIndex }}
      maxCount={isMultiple ? maxCount : undefined}
      tagRender={isMultiple ? tagRender : undefined}
    />
  );
};

if (process.env.NODE_ENV !== 'production') {
  InternalSelect.displayName = 'Select';
}

const Select = React.forwardRef(InternalSelect) as unknown as (<
  ValueType = any,
  OptionType extends BaseOptionType | DefaultOptionType = DefaultOptionType,
>(
  props: React.PropsWithChildren<SelectProps<ValueType, OptionType>> &
    React.RefAttributes<BaseSelectRef>,
) => React.ReactElement) & {
  displayName?: string;
  SECRET_COMBOBOX_MODE_DO_NOT_USE: string;
  Option: typeof Option;
  OptGroup: typeof OptGroup;
  _InternalPanelDoNotUseOrYouWillBeFired: typeof PurePanel;
};

// We don't care debug panel
/* istanbul ignore next */
const PurePanel = genPurePanel(Select, 'popupAlign');

Select.SECRET_COMBOBOX_MODE_DO_NOT_USE = SECRET_COMBOBOX_MODE_DO_NOT_USE;
Select.Option = Option;
Select.OptGroup = OptGroup;
Select._InternalPanelDoNotUseOrYouWillBeFired = PurePanel;

if (process.env.NODE_ENV !== 'production') {
  Select.displayName = 'Select';
}

export default Select;
