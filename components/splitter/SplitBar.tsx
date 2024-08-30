import React, { useEffect, useRef, useState } from 'react';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import classNames from 'classnames';

import SplitterContext from './context';
import type { SplitBarProps } from './interface';

const SplitBar: React.FC<SplitBarProps> = (props) => {
  const { prefixCls, index, resizable = true, collapsible = false } = props;

  const { reverse, resizing, basicsState, setSize, onStart } = React.useContext(SplitterContext);

  const [active, setActive] = useState(false);
  const splitBarPrefixCls = `${prefixCls}-bar`;
  const splitBarClassName = classNames(splitBarPrefixCls, {
    [`${prefixCls}-bar-disabled`]: !resizable,
    [`${prefixCls}-bar-active`]: active,
  });

  // 折叠恢复值
  const oldBasicsRef = useRef({ previous: basicsState[index], next: basicsState[index + 1] });

  // 记录面边大小

  // 面边编号
  const previousIdx = reverse ? index + 1 : index;
  const nextIdx = reverse ? index : index + 1;
  // 面边大小
  const previousSize = basicsState?.[previousIdx] || 0;
  const nextSize = basicsState?.[nextIdx] || 0;
  // 折叠按钮
  let previousIcon = false;
  let nextIcon = false;
  if (typeof collapsible === 'object') {
    const { start = false, end = false } = collapsible;
    previousIcon = start;
    nextIcon = end;

    // 折叠后恢复
    if (previousIcon && previousSize === 0) {
      previousIcon = false;
      nextIcon = true;
    }
    if (nextIcon && nextSize === 0) {
      previousIcon = true;
      nextIcon = false;
    }
  } else if (collapsible) {
    previousIcon = true;
    nextIcon = true;
  }

  useEffect(() => {
    if (!resizing && active) {
      setActive(false);
    }
  }, [active, resizing]);

  return (
    <div
      className={splitBarClassName}
      onMouseDown={(e) => {
        if (resizable && e.currentTarget) {
          onStart?.(e.clientX, e.clientY, index);
          setActive(true);
        }
      }}
    >
      <div className={`${splitBarPrefixCls}-bg`} />

      <div className={`${splitBarPrefixCls}-area`} />

      {resizable ? <div className={`${splitBarPrefixCls}-resizable`} /> : null}

      {collapsible ? (
        <>
          {previousIcon && previousSize ? (
            <LeftOutlined
              className={classNames(
                `${splitBarPrefixCls}-collapse-icon`,
                `${splitBarPrefixCls}-collapse-previous`,
              )}
              onMouseDown={(e) => e.stopPropagation()}
              onClick={() => {
                oldBasicsRef.current.previous = previousSize;

                if (nextSize) {
                  setSize?.(0, previousIdx);
                  setSize?.(100, nextIdx);
                } else {
                  setSize?.(100 - oldBasicsRef.current.next, previousIdx);
                  setSize?.(oldBasicsRef.current.next, nextIdx);
                }
              }}
            />
          ) : null}

          {nextIcon && nextSize ? (
            <RightOutlined
              className={classNames(
                `${splitBarPrefixCls}-collapse-icon`,
                `${splitBarPrefixCls}-collapse-next`,
              )}
              onMouseDown={(e) => e.stopPropagation()}
              onClick={() => {
                oldBasicsRef.current.next = nextSize;

                if (previousSize) {
                  setSize?.(100, previousIdx);
                  setSize?.(0, nextIdx);
                } else {
                  setSize?.(oldBasicsRef.current.previous, previousIdx);
                  setSize?.(100 - oldBasicsRef.current.previous, nextIdx);
                }
              }}
            />
          ) : null}
        </>
      ) : null}
    </div>
  );
};

export default SplitBar;
