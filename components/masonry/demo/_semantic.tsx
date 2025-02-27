import React from 'react';
import { Card, Masonry } from 'antd';

import SemanticPreview from '../../../.dumi/components/SemanticPreview';
import useLocale from '../../../.dumi/hooks/useLocale';

const locales = {
  cn: {
    root: '根元素',
    item: '条目元素',
  },
  en: {
    root: 'Root element',
    item: 'Item element',
  },
};

const heights = [75, 50, 70, 60, 85, 75, 50].map((height, index) => ({
  key: `item-${index}`,
  data: height,
}));

const App: React.FC = () => {
  const [locale] = useLocale(locales);
  return (
    <SemanticPreview
      semantics={[
        { name: 'root', desc: locale.root },
        { name: 'item', desc: locale.item },
      ]}
    >
      <Masonry
        columns={3}
        gutter={16}
        items={heights}
        style={{ width: '100%' }}
        itemRender={({ data, index }) => (
          <Card size="small" style={{ height: data }}>
            {index + 1}
          </Card>
        )}
      />
    </SemanticPreview>
  );
};

export default App;
