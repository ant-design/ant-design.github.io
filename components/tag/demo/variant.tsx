import React from 'react';
import { Flex, Tag } from 'antd';
const PresetColors = [
  'magenta',
  'red',
  'volcano',
  'orange',
  'gold',
  'lime',
  'green',
  'cyan',
  'blue',
  'geekblue',
  'purple',
];
const App: React.FC = () => (
  <>
    <Flex gap="4px 0" wrap>
      {PresetColors.map((color) => (
        <Tag key={color} color={color} variant="clear">
          {color}
        </Tag>
      ))}
    </Flex>
  </>
);

export default App;
