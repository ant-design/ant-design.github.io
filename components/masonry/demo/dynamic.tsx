import React, { useState } from 'react';
import { CloseOutlined } from '@ant-design/icons';
import { Button, Card, Flex, theme } from 'antd';

import Masonry from '../Masonry';

const heights = [150, 50, 90, 70, 110, 150, 130, 80, 50, 90, 100, 150, 70, 50, 80];

type ItemType = {
  key: number;
  column?: number;
  data: number;
};

const Update: React.FC = () => {
  const { token } = theme.useToken();

  const [items, setItems] = useState<ItemType[]>(() =>
    heights.map((height, index) => ({
      key: index,
      column: index % 4,
      data: height,
    })),
  );

  const removeItem = (removeKey: React.Key) => {
    setItems((prevItems) => prevItems.filter(({ key }) => key !== removeKey));
  };

  const addItem = () => {
    setItems((prevItems) => [
      ...prevItems,
      {
        key: (prevItems[prevItems.length - 1]?.key || 0) + 1,
        data: Math.floor(Math.random() * 100) + 50,
      },
    ]);
  };

  return (
    <Flex vertical gap={16}>
      <Masonry
        columns={4}
        gutter={16}
        items={items}
        itemRender={({ data, key }) => (
          <Card size="small" style={{ height: data }}>
            {Number(key) + 1}
            <Button
              style={{
                position: 'absolute',
                insetBlockStart: token.paddingSM,
                insetInlineEnd: token.paddingSM,
              }}
              size="small"
              icon={<CloseOutlined />}
              onClick={() => removeItem(key)}
            />
          </Card>
        )}
        onSortChange={(sortedItems) => {
          setItems((prevItems) =>
            prevItems.map((item) => {
              const matchItem = sortedItems.find((sortedItem) => sortedItem.key === item.key);
              return matchItem
                ? {
                    ...item,
                    column: matchItem.column,
                  }
                : item;
            }),
          );
        }}
      />
      <Button block onClick={addItem}>
        Add Item
      </Button>
    </Flex>
  );
};

export default Update;
