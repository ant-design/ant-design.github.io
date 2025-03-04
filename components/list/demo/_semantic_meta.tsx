import React from 'react';
import { Avatar, List } from 'antd';

import SemanticPreview from '../../../.dumi/components/SemanticPreview';
import useLocale from '../../../.dumi/hooks/useLocale';

const locales = {
  cn: {
    root: '根元素',
    section: '容器元素',
    title: '标题',
    description: '描述',
    avatar: '图标元素',
  },
  en: {
    root: 'Root Element',
    section: 'Container Element',
    title: 'Title Element',
    description: 'Description Element',
    avatar: 'Avatar Element',
  },
};

const data = [
  {
    title: 'Ant Design Title 1',
  },
];

const BlockList: React.FC<React.PropsWithChildren> = (props) => {
  return (
    <div style={{ position: 'absolute', inset: 0, height: 300, margin: 20 }}>
      <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={(item, index) => (
          <List.Item>
            <List.Item.Meta
              {...props}
              avatar={<Avatar src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`} />}
              title={<a href="https://ant.design">{item.title}</a>}
              description="Ant Design, a design language for background applications, is refined by Ant UED Team"
            />
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
      height={300}
      semantics={[
        { name: 'root', desc: locale.root, version: '6.0.0' },
        { name: 'avatar', desc: locale.avatar, version: '6.0.0' },
        { name: 'section', desc: locale.section, version: '6.0.0' },
        { name: 'title', desc: locale.title, version: '6.0.0' },
        { name: 'description', desc: locale.description, version: '6.0.0' },
      ]}
    >
      <BlockList />
    </SemanticPreview>
  );
};

export default App;
