import React from 'react';
import { Card, Masonry } from 'antd';

function RandomHeightCard(props: { index: number; defaultHeight: number }) {
  const [height, setHeight] = React.useState(props.defaultHeight);

  return (
    <Card
      size="small"
      style={{ height, transition: 'height 0.3s' }}
      onClick={() => {
        setHeight(Math.floor(Math.random() * 100) + 50);
      }}
    >
      {props.index + 1} - Click
    </Card>
  );
}

const heights = [150, 50, 90, 70, 110, 150, 130, 80, 50, 90, 100, 150, 60, 50, 80].map(
  (height, index) => {
    const item: {
      key: string;
      data: number;
      column?: number;
    } = {
      key: `item-${index}`,
      data: height,
    };

    if (index === 4) {
      item.column = 0;
    }

    return item;
  },
);

const App: React.FC = () => {
  return (
    <Masonry
      fresh
      columns={4}
      gutter={16}
      items={heights}
      itemRender={({ data, index }) => <RandomHeightCard index={index} defaultHeight={data} />}
    />
  );
};

export default App;
