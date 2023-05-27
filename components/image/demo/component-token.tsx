import { ConfigProvider, Image } from 'antd';
import React from 'react';

const App: React.FC = () => (
  <ConfigProvider
    theme={{
      components: {
        Image: {
          colorFillTertiary: '#b20000',
          colorTextLightSolid: '#222',
          imagePreviewOperationSize: 20,
          imagePreviewOperationColor: '#222',
          imagePreviewOperationDisabledColor: '#b20000',
        },
      },
    }}
  >
    <Image.PreviewGroup
      preview={{ countRender: (current, total) => `当前 ${current} / 总计 ${total}` }}
    >
      <Image
        width={150}
        src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg"
      />
      <Image
        width={150}
        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
      />
    </Image.PreviewGroup>
  </ConfigProvider>
);

export default App;
