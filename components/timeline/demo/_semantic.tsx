import React from 'react';
import { Timeline } from 'antd';

import SemanticPreview from '../../../.dumi/components/SemanticPreview';
import useLocale from '../../../.dumi/hooks/useLocale';

const locales = {
  cn: {
    root: '根元素',
    item: 'Item 元素',
    label: '标签元素',
    indicator: '指示器元素',
    content: '内容元素',
    tail: '轨迹元素',
  },
  en: {
    root: 'Root Element',
    label: 'Label Element',
    item: 'Item Element',
    indicator: 'Indicator Element',
    content: 'Content Element',
    tail: 'Tail Element',
  },
};

const App: React.FC = () => {
  const [locale] = useLocale(locales);
  return (
    <SemanticPreview
      semantics={[
        { name: 'root', desc: locale.root, version: '6.0.0' },
        { name: 'item', desc: locale.item, version: '6.0.0' },
        { name: 'label', desc: locale.label, version: '6.0.0' },
        { name: 'indicator', desc: locale.indicator, version: '6.0.0' },
        { name: 'content', desc: locale.content, version: '6.0.0' },
        { name: 'tail', desc: locale.tail, version: '6.0.0' },
      ]}
    >
      <Timeline
        mode="left"
        items={[
          {
            label: '2015-09-01',
            children: 'Create a services',
          },
          {
            label: '2015-09-01 09:12:11',
            children: 'Solve initial network problems',
          },
          {
            children: 'Technical testing',
          },
          {
            label: '2015-09-01 09:12:11',
            children: 'Network problems being solved',
          },
        ]}
      />
    </SemanticPreview>
  );
};

export default App;
