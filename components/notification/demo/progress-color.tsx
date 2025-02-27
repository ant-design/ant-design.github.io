import React from 'react';
import { Button, notification, ConfigProvider } from 'antd';
import { createStyles } from 'antd-style';

const COLOR_BG = 'linear-gradient(135deg,#6253e1, #04befe)';

const useStyle = createStyles(({ prefixCls, css }) => ({
  linearGradientButton: css`
    &.${prefixCls}-btn-primary:not([disabled]):not(.${prefixCls}-btn-dangerous) {
      > span {
        position: relative;
      }

      &::before {
        content: '';
        background: ${COLOR_BG};
        position: absolute;
        inset: -1px;
        opacity: 1;
        transition: all 0.3s;
        border-radius: inherit;
      }

      &:hover::before {
        opacity: 0;
      }
    }
  `,
}));

const App: React.FC = () => {
  const { styles } = useStyle();
  const [api, contextHolder] = notification.useNotification();

  const openNotification = () => {
    api.open({
      message: 'Customize progress bar color',
      description: 'You can use component token to customize the progress bar color',
      showProgress: true,
      duration: 20,
    });
  };

  return (
    <ConfigProvider
      button={{
        className: styles.linearGradientButton,
      }}
      theme={{
        components: {
          Notification: {
            progressBg: COLOR_BG,
          },
        },
      }}
    >
      {contextHolder}
      <Button type="primary" onClick={openNotification}>
        Show custom progress color
      </Button>
    </ConfigProvider>
  );
};

export default App;
