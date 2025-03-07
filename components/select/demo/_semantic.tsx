import React from 'react';
import { SmileOutlined } from '@ant-design/icons';
import { Select } from 'antd';

import SemanticPreview from '../../../.dumi/components/SemanticPreview';
import useLocale from '../../../.dumi/hooks/useLocale';

const locales = {
  cn: {
    root: '根元素',
    prefix: '前缀元素',
    suffix: '后缀元素',
    popup: '弹出菜单元素',
  },
  en: {
    root: 'Root element',
    prefix: 'Prefix element',
    suffix: 'Suffix element',
    popup: 'Popup element',
  },
};
const Block = (prop: any) => {
  const divRef = React.useRef<HTMLDivElement>(null);
  return (
    <div ref={divRef} style={{ position: 'absolute', marginBottom: 80 }}>
      <Select
        {...prop}
        prefix="User"
        open
        suffixIcon={<SmileOutlined />}
        defaultValue={['lucy']}
        mode="multiple"
        style={{ width: 200 }}
        getPopupContainer={() => divRef.current}
        options={[
          { value: 'jack', label: 'Jack' },
          { value: 'lucy', label: 'Lucy' },
        ]}
      />
    </div>
  );
};
const App: React.FC = () => {
  const [locale] = useLocale(locales);

  return (
    <SemanticPreview
      semantics={[
        { name: 'root', desc: locale.root, version: '6.0.0' },
        { name: 'prefix', desc: locale.prefix, version: '6.0.0' },
        { name: 'suffix', desc: locale.suffix, version: '6.0.0' },
        { name: 'popup', desc: locale.popup, version: '6.0.0' },
      ]}
    >
      <Block />
    </SemanticPreview>
  );
};

export default App;
