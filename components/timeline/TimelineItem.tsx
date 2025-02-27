import * as React from 'react';
import classNames from 'classnames';

import type { LiteralUnion } from '../_util/type';
import { ConfigContext } from '../config-provider';
import { SemanticName } from './Timeline';

type Color = 'blue' | 'red' | 'green' | 'gray';

export interface TimelineItemProps {
  key?: React.Key;
  prefixCls?: string;
  className?: string;
  color?: LiteralUnion<Color>;
  dot?: React.ReactNode;
  pending?: boolean;
  position?: string;
  style?: React.CSSProperties;
  label?: React.ReactNode;
  children?: React.ReactNode;
  classNames?: Partial<Record<SemanticName, string>>;
  styles?: Partial<Record<SemanticName, React.CSSProperties>>;
}

// for compatibility
// https://github.com/ant-design/ant-design/pull/26832
export interface TimeLineItemProps extends TimelineItemProps {
  __deprecated_do_not_use_it__?: any;
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  prefixCls: customizePrefixCls,
  className,
  color = 'blue',
  dot,
  pending = false,
  position /** Dead, but do not pass in <li {...omit()} */,
  label,
  children,
  classNames: timelineClassNames,
  styles,
  ...restProps
}) => {
  const { getPrefixCls } = React.useContext(ConfigContext);

  const prefixCls = getPrefixCls('timeline', customizePrefixCls);
  const itemClassName = classNames(
    `${prefixCls}-item`,
    {
      [`${prefixCls}-item-pending`]: pending,
    },
    className,
  );

  const customColor = /blue|red|green|gray/.test(color || '') ? undefined : color;

  const dotClassName = classNames(`${prefixCls}-item-head`, {
    [`${prefixCls}-item-head-custom`]: !!dot,
    [`${prefixCls}-item-head-${color}`]: !customColor,
  });

  return (
    <li {...restProps} className={itemClassName}>
      {label && (
        <div
          className={classNames(`${prefixCls}-item-label`, timelineClassNames?.label)}
          style={styles?.label}
        >
          {label}
        </div>
      )}
      <div
        className={classNames(`${prefixCls}-item-tail`, timelineClassNames?.tail)}
        style={styles?.tail}
      />
      <div
        className={classNames(dotClassName, timelineClassNames?.indicator)}
        style={{ ...{ borderColor: customColor, color: customColor }, ...styles?.indicator }}
      >
        {dot}
      </div>
      <div
        className={classNames(`${prefixCls}-item-content`, timelineClassNames?.content)}
        style={styles?.content}
      >
        {children}
      </div>
    </li>
  );
};

export default TimelineItem;
