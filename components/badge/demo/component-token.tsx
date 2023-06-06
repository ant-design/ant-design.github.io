import { NotificationOutlined } from '@ant-design/icons';
import { Avatar, Badge, ConfigProvider, Space } from 'antd';
import React from 'react';

/** Test usage. Do not use in your production. */
export default () => (
  <ConfigProvider
    theme={{
      components: {
        Badge: {
          containerHeight: 24,
          containerHeightSM: 18,
          dotSize: 4,
          textFontWeight: 'bold',
          statusSize: 8,
        },
      },
    }}
  >
    <Space direction="vertical">
      <Badge count={5}>
        <Avatar shape="square" size="large" />
      </Badge>
      <Badge count={26} />
      <Badge dot>
        <NotificationOutlined />
      </Badge>
      <Badge status="success" text="Success" />
      <Badge size="small" count={0} showZero />
    </Space>
  </ConfigProvider>
);
