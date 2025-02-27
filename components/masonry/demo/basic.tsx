import React from 'react';
import { Card, Masonry } from 'antd';

const heights = [150, 50, 90, 70, 110, 150, 130, 80, 50, 90, 100, 150, 60, 50, 80].map(
  (height, index) => {
    const item: {
      key: string;
      data: number;
      children?: React.ReactNode;
    } = {
      key: `item-${index}`,
      data: height,
    };

    if (index === 4) {
      item.children = (
        <Card
          size="small"
          cover={
            <img
              alt="food"
              src="https://images.unsplash.com/photo-1491961865842-98f7befd1a60?w=523&auto=format"
            />
          }
        >
          <Card.Meta title="I'm Special" description="Let's have a meal" />
        </Card>
      );
    }

    return item;
  },
);

const App: React.FC = () => (
  <Masonry
    columns={4}
    gutter={16}
    items={heights}
    itemRender={({ data, index }) => (
      <Card size="small" style={{ height: data }}>
        {index + 1}
      </Card>
    )}
  />
);

export default App;
