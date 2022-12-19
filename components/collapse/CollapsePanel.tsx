import classNames from 'classnames';
import RcCollapse from 'rc-collapse';
import type RcCollapsePanel from 'rc-collapse/lib/Panel';
import * as React from 'react';
import { ConfigContext } from '../config-provider';
import warning from '../_util/warning';

export type CollapsibleType = 'header' | 'icon' | 'disabled';

export interface CollapsePanelProps {
  key: string | number;
  header: React.ReactNode;
  /** @deprecated Use `collapsible="disabled"` instead */
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
  showArrow?: boolean;
  prefixCls?: string;
  forceRender?: boolean;
  id?: string;
  extra?: React.ReactNode;
  collapsible?: CollapsibleType;
  children?: React.ReactNode;
}
const CollapsePanel = React.forwardRef<RcCollapsePanel, CollapsePanelProps>((props, ref) => {
  warning(
    !('disabled' in props),
    'Collapse.Panel',
    '`disabled` is deprecated. Please use `collapsible="disabled"` instead.',
  );

  const { getPrefixCls } = React.useContext(ConfigContext);
  const { prefixCls: customizePrefixCls, className = '', showArrow = true } = props;
  const prefixCls = getPrefixCls('collapse', customizePrefixCls);
  const collapsePanelClassName = classNames(
    {
      [`${prefixCls}-no-arrow`]: !showArrow,
    },
    className,
  );
  return (
    <RcCollapse.Panel
      ref={ref}
      {...props}
      prefixCls={prefixCls}
      className={collapsePanelClassName}
    />
  );
});

export default CollapsePanel;
