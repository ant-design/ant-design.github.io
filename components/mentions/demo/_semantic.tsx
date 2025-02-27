import React from 'react';
import { Mentions } from 'antd';

import SemanticPreview from '../../../.dumi/components/SemanticPreview';
import useLocale from '../../../.dumi/hooks/useLocale';

const locales = {
  cn: {
    root: '图标元素',
    textarea: '输入框元素',
    popup: '弹出框元素',
  },
  en: {
    root: 'Root element',
    textarea: 'Input element',
    popup: 'Popup element',
  },
};

const Block = (props: any) => {
  const divRef = React.useRef<HTMLDivElement>(null);
  return (
    <div ref={divRef} style={{ position: 'absolute' }}>
      <Mentions
        {...props}
        style={{ width: '100%' }}
        defaultValue="@thinkasany"
        getPopupContainer={() => divRef.current}
        options={[
          {
            value: 'afc163',
            label: 'afc163',
          },
          {
            value: 'zombieJ',
            label: 'zombieJ',
          },
          {
            value: 'thinkasany',
            label: 'thinkasany',
          },
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
        { name: 'textarea', desc: locale.textarea, version: '6.0.0' },
        { name: 'popup', desc: locale.popup, version: '6.0.0' },
      ]}
    >
      <Block />
    </SemanticPreview>
  );
};

export default App;
