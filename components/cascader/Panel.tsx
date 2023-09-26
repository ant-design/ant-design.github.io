import * as React from 'react';
import classNames from 'classnames';
import { Panel } from 'rc-cascader';
import type { PickType } from 'rc-cascader/lib/Panel';

import type { CascaderProps } from '.';
import { ConfigContext } from '../config-provider';
import DefaultRenderEmpty from '../config-provider/defaultRenderEmpty';
import useCheckable from './hooks/useCheckable';
import useStyle from './style';
import usePanelStyle from './style/panel';

export type PanelPickType = Exclude<PickType, 'checkable'> | 'multiple' | 'rootClassName';

export type CascaderPanelProps = Pick<CascaderProps, PanelPickType>;

export default function CascaderPanel(props: CascaderPanelProps) {
  const {
    prefixCls: customizePrefixCls,
    className,
    multiple,
    rootClassName,
    notFoundContent,
    direction,
  } = props;

  const { getPrefixCls, renderEmpty, direction: rootDirection } = React.useContext(ConfigContext);

  const mergedDirection = direction || rootDirection;
  const cascaderPrefixCls = getPrefixCls('cascader', customizePrefixCls);

  const [, hashId] = useStyle(cascaderPrefixCls);
  usePanelStyle(cascaderPrefixCls);

  // ===================== Empty =====================
  const mergedNotFoundContent = notFoundContent || renderEmpty?.('Cascader') || (
    <DefaultRenderEmpty componentName="Cascader" />
  );

  // =================== Multiple ====================
  const checkable = useCheckable(cascaderPrefixCls, multiple);

  // ==================== Render =====================

  return (
    <Panel
      {...props}
      checkable={checkable}
      prefixCls={cascaderPrefixCls}
      className={classNames(className, hashId, rootClassName)}
      notFoundContent={mergedNotFoundContent}
      direction={mergedDirection}
    />
  );
}
