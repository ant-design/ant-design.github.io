import * as React from 'react';
import classNames from 'classnames';
import type { CascaderProps as RcCascaderProps } from 'rc-cascader';
import { Panel } from 'rc-cascader';
import type { PickType } from 'rc-cascader/lib/Panel';

import type { CascaderProps, DefaultOptionType } from '.';
import DefaultRenderEmpty from '../config-provider/defaultRenderEmpty';
import useCSSVarCls from '../config-provider/hooks/useCSSVarCls';
import useBase from './hooks/useBase';
import useCheckable from './hooks/useCheckable';
import useColumnIcons from './hooks/useColumnIcons';
import useStyle from './style';
import usePanelStyle from './style/panel';

export type PanelPickType = Exclude<PickType, 'checkable'> | 'multiple' | 'rootClassName';

export type CascaderPanelProps<
  OptionType extends DefaultOptionType = DefaultOptionType,
  ValueField extends keyof OptionType = keyof OptionType,
  Multiple extends boolean = false,
> = Pick<CascaderProps<OptionType, ValueField, Multiple>, PanelPickType>;

function CascaderPanel<
  OptionType extends DefaultOptionType = DefaultOptionType,
  ValueField extends keyof OptionType = keyof OptionType,
  Multiple extends boolean = false,
>(props: CascaderPanelProps<OptionType, ValueField, Multiple>) {
  const {
    prefixCls: customizePrefixCls,
    className,
    multiple,
    rootClassName,
    notFoundContent,
    direction,
    expandIcon,
  } = props;

  const [prefixCls, cascaderPrefixCls, mergedDirection, renderEmpty] = useBase(
    customizePrefixCls,
    direction,
  );

  const rootCls = useCSSVarCls(cascaderPrefixCls);
  const [wrapCSSVar, hashId, cssVarCls] = useStyle(cascaderPrefixCls, rootCls);
  usePanelStyle(cascaderPrefixCls);

  const isRtl = mergedDirection === 'rtl';

  // ===================== Icon ======================
  const [mergedExpandIcon, loadingIcon] = useColumnIcons(prefixCls, isRtl, expandIcon);

  // ===================== Empty =====================
  const mergedNotFoundContent = notFoundContent || renderEmpty?.('Cascader') || (
    <DefaultRenderEmpty componentName="Cascader" />
  );

  // =================== Multiple ====================
  const checkable = useCheckable(cascaderPrefixCls, multiple);

  // ==================== Render =====================

  return wrapCSSVar(
    <Panel
      {...(props as Pick<RcCascaderProps, PickType>)}
      checkable={checkable}
      prefixCls={cascaderPrefixCls}
      className={classNames(className, hashId, rootClassName, cssVarCls, rootCls)}
      notFoundContent={mergedNotFoundContent}
      direction={mergedDirection}
      expandIcon={mergedExpandIcon}
      loadingIcon={loadingIcon}
    />,
  );
}

export default CascaderPanel;
