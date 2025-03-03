import * as React from 'react';
import LeftOutlined from '@ant-design/icons/LeftOutlined';
import LoadingOutlined from '@ant-design/icons/LoadingOutlined';
import RightOutlined from '@ant-design/icons/RightOutlined';
import type { CascaderProps } from '..';

const useColumnIcons = (
  prefixCls: string,
  rtl: boolean,
  expandIcon?: React.ReactNode,
  icons?: CascaderProps['icons'],
) => {
  const mergedExpandIcon =
    expandIcon ?? icons?.expand ?? (rtl ? <LeftOutlined /> : <RightOutlined />);

  const loadingIcon = (
    <span className={`${prefixCls}-menu-item-loading-icon`}>
      {icons?.loading ?? <LoadingOutlined spin />}
    </span>
  );

  return [mergedExpandIcon, loadingIcon] as const;
};

export default useColumnIcons;
