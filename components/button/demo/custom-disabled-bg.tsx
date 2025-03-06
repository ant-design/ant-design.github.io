import React from 'react';
import { Button, Flex, ConfigProvider } from 'antd';

const App: React.FC = () => (
  <Flex gap="small" wrap>
    <ConfigProvider
      theme={{
        components: {
          Button: {
            defaultBgDisabled: 'rgba(0,0,0,0.1)',
            dashedBgDisabled: 'rgba(0,0,0,0.4)',
          },
        },
      }}
    >
      <Button type="primary" disabled>
        Primary Button
      </Button>
      <Button disabled>Default Button</Button>
      <Button type="dashed" disabled>
        Dashed Button
      </Button>
    </ConfigProvider>
  </Flex>
);

export default App;
