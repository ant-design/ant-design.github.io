import React from 'react';
import { Divider, Flex, Tag } from 'antd';

const App: React.FC = () => (
  <>
    <Divider orientation="left">Presets (Outlined)</Divider>
    <Flex gap="small" align="center" wrap>
      <Tag color="magenta">magenta</Tag>
      <Tag color="red">red</Tag>
      <Tag color="volcano">volcano</Tag>
      <Tag color="orange">orange</Tag>
      <Tag color="gold">gold</Tag>
      <Tag color="lime">lime</Tag>
      <Tag color="green">green</Tag>
      <Tag color="cyan">cyan</Tag>
      <Tag color="blue">blue</Tag>
      <Tag color="geekblue">geekblue</Tag>
      <Tag color="purple">purple</Tag>
    </Flex>
    <Divider orientation="left">Presets (Filled)</Divider>
    <Flex gap="small" align="center" wrap>
      <Tag color="magenta" variant="filled">
        magenta
      </Tag>
      <Tag color="red" variant="filled">
        red
      </Tag>
      <Tag color="volcano" variant="filled">
        volcano
      </Tag>
      <Tag color="orange" variant="filled">
        orange
      </Tag>
      <Tag color="gold" variant="filled">
        gold
      </Tag>
      <Tag color="lime" variant="filled">
        lime
      </Tag>
      <Tag color="green" variant="filled">
        green
      </Tag>
      <Tag color="cyan" variant="filled">
        cyan
      </Tag>
      <Tag color="blue" variant="filled">
        blue
      </Tag>
      <Tag color="geekblue" variant="filled">
        geekblue
      </Tag>
      <Tag color="purple" variant="filled">
        purple
      </Tag>
    </Flex>
    <Divider orientation="left">Presets (Borderless)</Divider>
    <Flex gap="small" align="center" wrap>
      <Tag color="magenta" variant="borderless">
        magenta
      </Tag>
      <Tag color="red" variant="borderless">
        red
      </Tag>
      <Tag color="volcano" variant="borderless">
        volcano
      </Tag>
      <Tag color="orange" variant="borderless">
        orange
      </Tag>
      <Tag color="gold" variant="borderless">
        gold
      </Tag>
      <Tag color="lime" variant="borderless">
        lime
      </Tag>
      <Tag color="green" variant="borderless">
        green
      </Tag>
      <Tag color="cyan" variant="borderless">
        cyan
      </Tag>
      <Tag color="blue" variant="borderless">
        blue
      </Tag>
      <Tag color="geekblue" variant="borderless">
        geekblue
      </Tag>
      <Tag color="purple" variant="borderless">
        purple
      </Tag>
    </Flex>
    <Divider orientation="left">Custom (Outlined)</Divider>
    <Flex gap="small" align="center" wrap>
      <Tag color="#f50">#f50</Tag>
      <Tag color="#2db7f5">#2db7f5</Tag>
      <Tag color="#87d068">#87d068</Tag>
      <Tag color="#108ee9">#108ee9</Tag>
    </Flex>
    <Divider orientation="left">Custom (Filled)</Divider>
    <Flex gap="small" align="center" wrap>
      <Tag color="#f50" variant="filled">
        #f50
      </Tag>
      <Tag color="#2db7f5" variant="filled">
        #2db7f5
      </Tag>
      <Tag color="#87d068" variant="filled">
        #87d068
      </Tag>
      <Tag color="#108ee9" variant="filled">
        #108ee9
      </Tag>
    </Flex>
    <Divider orientation="left">Custom (Borderless)</Divider>
    <Flex gap="small" align="center" wrap>
      <Tag color="#f50" variant="borderless">
        #f50
      </Tag>
      <Tag color="#2db7f5" variant="borderless">
        #2db7f5
      </Tag>
      <Tag color="#87d068" variant="borderless">
        #87d068
      </Tag>
      <Tag color="#108ee9" variant="borderless">
        #108ee9
      </Tag>
    </Flex>
  </>
);

export default App;
