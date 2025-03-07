import React from 'react';
import { Image } from 'antd';
import { createStyles } from 'antd-style';

import SemanticPreview from '../../../.dumi/components/SemanticPreview';
import useLocale from '../../../.dumi/hooks/useLocale';

const locales = {
  cn: {
    root: '根元素',
    mask: '遮罩层元素',
    actions: '操作组元素',
  },
  en: {
    root: 'Root element',
    mask: 'Mask element',
    actions: 'Actions element',
  },
};

const useStyle = createStyles(({ css }) => ({
  mockPreview: css`
    position: relative;
    inset: 0;
    z-index: 1;
    .ant-image-preview-close {
      display: none;
    }
    .ant-image-preview-img {
      max-height: 50%;
    }
    .ant-image-img {
      visibility: hidden;
    }
    .ant-image-preview-operations-wrapper {
      position: relative;
      .ant-image-preview-footer {
        position: absolute;
      }
    }
  `,
}));

const Block = (props: any) => {
  const divRef = React.useRef<HTMLDivElement>(null);
  const { classNames, ...restProps } = props;
  const { styles } = useStyle();

  return (
    <div ref={divRef} className={styles.mockPreview}>
      <Image
        {...restProps}
        width="100%"
        preview={{
          movable: false,
          styles: {
            wrapper: { position: 'absolute' },
            mask: { position: 'absolute' },
          },
          classNames,
          getContainer: () => divRef.current,
          visible: true,
        }}
        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
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
        { name: 'mask', desc: locale.mask, version: '6.0.0' },
        { name: 'actions', desc: locale.actions, version: '6.0.0' },
      ]}
    >
      <Block />
    </SemanticPreview>
  );
};

export default App;
