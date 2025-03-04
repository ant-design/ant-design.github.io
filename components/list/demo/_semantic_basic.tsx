import React from 'react';
import { List, Typography } from 'antd';

import SemanticPreview from '../../../.dumi/components/SemanticPreview';
import useLocale from '../../../.dumi/hooks/useLocale';

const locales = {
  cn: {
    root: '根元素',
    header: '头部元素',
    item: '列表项元素',
    footer: '底部元素',
  },
  en: {
    root: 'Root Element',
    header: 'Header Element',
    item: 'Item Element',
    footer: 'Footer Element',
  },
};

const BlockList: React.FC<React.PropsWithChildren> = (props) => {
  return (
    <div style={{ position: 'absolute', inset: 0, height: 420, margin: 20 }}>
      <List
        {...props}
        style={{ marginTop: 20 }}
        header={<div>Header</div>}
        footer={<div>Footer</div>}
        bordered
        dataSource={[
          'Racing car sprays burning fuel into crowd.',
          'Japanese princess to wed commoner.',
          'Australian walks 100km after outback crash.',
          'Man charged over missing wedding girl.',
          'Los Angeles battles huge wildfires.',
        ]}
        renderItem={(item) => (
          <List.Item {...props}>
            <Typography.Text mark>[ITEM]</Typography.Text> {item}
          </List.Item>
        )}
      />
    </div>
  );
};

const App: React.FC = () => {
  const [locale] = useLocale(locales);
  return (
    <SemanticPreview
      height={420}
      semantics={[
        { name: 'root', desc: locale.root, version: '6.0.0' },
        { name: 'header', desc: locale.header, version: '6.0.0' },
        { name: 'item', desc: locale.item, version: '6.0.0' },
        { name: 'footer', desc: locale.footer, version: '6.0.0' },
      ]}
    >
      <BlockList />
    </SemanticPreview>
  );
};

export default App;
