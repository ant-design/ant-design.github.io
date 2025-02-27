import React, { useState } from 'react';
import { Divider, Flex, Segmented, SpaceProps, Tag } from 'antd';
import { AppstoreOutlined, BarsOutlined } from '@ant-design/icons';

const App: React.FC = () => {
  const [TagLayout, setTagLayout] = useState<SpaceProps['direction']>('horizontal');
  return (
    <>
      <Divider orientation="left">TagLayout</Divider>
      <Segmented
        shape="round"
        value={TagLayout}
        onChange={setTagLayout}
        options={[
          { value: 'vertical', icon: <AppstoreOutlined /> },
          { value: 'horizontal', icon: <BarsOutlined /> },
        ]}
      />
      <Divider orientation="left">Demo</Divider>
      <Tag.Compact direction={TagLayout}>
        <Tag color="success" bordered={false}>
          success
        </Tag>
        <Tag bordered={false} color="error">
          error
        </Tag>
        <Tag bordered={false} color="yellow">
          yellow
        </Tag>
      </Tag.Compact>
      <Divider orientation="left">Cover Demo</Divider>
      <Flex gap="4px 0" wrap>
        <div
          style={{
            width: 262,
            display: 'inline-block',
            position: 'relative',
          }}
        >
          <img
            style={{
              width: '100%',
              height: '100%',
            }}
            alt="game"
            src="https://www.minecraft.net/content/dam/minecraftnet/games/minecraft/key-art/Homepage_Discover-our-games_MC-Vanilla-KeyArt_864x864.jpg"
          />
          <Tag.Compact
            direction={TagLayout}
            style={{
              position: 'absolute',
              bottom: 10,
              right: 10,
            }}
          >
            <Tag color="success" bordered={false}>
              预购
            </Tag>
            <Tag bordered={false} variant="clear">
              ¥298
            </Tag>
          </Tag.Compact>
        </div>
        <div
          style={{
            width: 262,
            display: 'inline-block',
            position: 'relative',
          }}
        >
          <img
            style={{
              width: '100%',
              height: '100%',
            }}
            alt="game"
            src="https://www.minecraft.net/content/dam/minecraftnet/games/dungeons/key-art/Homepage_Discover-our-games_MC-Dungeons-KeyArt_864x864.jpg"
          />
          <Tag.Compact
            direction={TagLayout}
            style={{
              position: 'absolute',
              bottom: 10,
              right: 10,
            }}
          >
            <Tag color="warning" bordered={false}>
              策略
            </Tag>
            <Tag bordered={false} variant="clear">
              冒险
            </Tag>
          </Tag.Compact>
        </div>
      </Flex>
    </>
  );
};

export default App;
