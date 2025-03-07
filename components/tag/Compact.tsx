import React, { forwardRef } from 'react';
import Space, { SpaceProps } from '../space';
import useToken from '../theme/useToken';

interface CompactProps extends React.HTMLAttributes<HTMLDivElement> {
  direction?: SpaceProps['direction'];
}

const Compact: React.ForwardRefRenderFunction<HTMLDivElement, CompactProps> = (
  { direction, children, className, style, ...restProps },
  ref,
) => {
  const token = useToken()[1];
  const csClas: React.CSSProperties = {
    overflow: 'hidden',
    backdropFilter: 'saturate(180%) blur(16px)',
    borderRadius: token.borderRadius,
    ...style,
  };

  return (
    <Space
      ref={ref}
      direction={direction}
      size={0}
      className={className}
      {...restProps}
      style={csClas}
    >
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          // 明确类型为包含 style 属性的 React 元素
          const typedChild = child as React.ReactElement<{
            style?: React.CSSProperties;
          }>;

          // 合并 props 强制修改标签样式
          return React.cloneElement(typedChild, {
            ...(typedChild.props as Record<string, unknown>), // 明确 props 是对象类型
            style: {
              margin: 0,
              borderRadius: 0,
              width: '100%',
              textAlign: 'center',
              ...typedChild.props.style,
            },
          });
        }
        return child;
      })}
    </Space>
  );
};

export default forwardRef(Compact);

Compact.displayName = 'Compact';
