import React from 'react';
import { CloseCircleOutlined, SyncOutlined } from '@ant-design/icons';
import { ConfigProvider, Flex, Tag } from 'antd';

const App: React.FC = () => (
  <ConfigProvider
    theme={{
      components: {
        Tag: { defaultBg: '#f9f0ff', defaultColor: '#4b34d3', colorBorderDisabled: '#FF0000' },
      },
    }}
  >
    <Flex gap="small" align="center" wrap>
      <Tag>
        <a
          href="https://github.com/ant-design/ant-design/issues/1862"
          target="_blank"
          rel="noreferrer"
        >
          Link
        </a>
      </Tag>
      <Tag variant="borderless">
        <a
          href="https://github.com/ant-design/ant-design/issues/1862"
          target="_blank"
          rel="noreferrer"
        >
          Link
        </a>
      </Tag>
      <Tag closable color="magenta">
        Tag 2
      </Tag>
      <Tag icon={<CloseCircleOutlined />} color="error">
        error
      </Tag>
      <Tag color="red" variant="filled">
        red
      </Tag>
      <Tag variant="borderless" color="magenta">
        magenta
      </Tag>
      <Tag icon={<SyncOutlined spin />} color="processing">
        processing
      </Tag>
      <Tag color="success" disabled>
        disabled
      </Tag>
    </Flex>
  </ConfigProvider>
);

export default App;
