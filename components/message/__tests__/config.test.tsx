import React, { useEffect } from 'react';
import { render, screen } from '@testing-library/react';

import message, { actDestroy, actWrapper } from '..';
import { act } from '../../../tests/utils';
import App from '../../app';
import ConfigProvider, { defaultPrefixCls } from '../../config-provider';
import { awaitPromise, triggerMotionEnd } from './util';

// TODO: Remove this. Mock for React 19
jest.mock('react-dom', () => {
  const realReactDOM = jest.requireActual('react-dom');

  if (realReactDOM.version.startsWith('19')) {
    const realReactDOMClient = jest.requireActual('react-dom/client');
    realReactDOM.createRoot = realReactDOMClient.createRoot;
  }

  return realReactDOM;
});

describe('message.config', () => {
  beforeAll(() => {
    actWrapper(act);
  });

  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(async () => {
    // Clean up
    message.destroy();
    await triggerMotionEnd();

    jest.useRealTimers();

    await awaitPromise();
  });

  it('should be able to config top', async () => {
    message.config({
      top: 100,
    });
    message.info('whatever');
    await awaitPromise();
    expect(document.querySelector('.ant-message')).toHaveStyle({
      top: '100px',
    });
  });

  it('should be able to config top with string value', async () => {
    message.config({
      top: '10vh',
    });

    message.info('test message');
    await awaitPromise();

    expect(document.querySelector('.ant-message')).toHaveStyle({
      top: '10vh',
    });
  });

  it('should be able to config rtl', async () => {
    message.config({
      rtl: true,
    });

    message.info('whatever');
    await awaitPromise();

    expect(document.querySelector('.ant-message-rtl')).toBeTruthy();
  });

  it('should be able to config getContainer', async () => {
    const div = document.createElement('div');
    div.className = 'custom-container';
    document.body.appendChild(div);

    message.config({
      getContainer: () => div,
    });

    message.info('whatever');
    await awaitPromise();

    expect(div.querySelector('.ant-message')).toBeTruthy();

    message.config({
      getContainer: undefined,
    });

    document.body.removeChild(div);
  });

  it('should be able to config maxCount', async () => {
    message.config({
      maxCount: 5,
    });
    for (let i = 0; i < 10; i += 1) {
      message.info('test');
    }

    message.info('last');
    await awaitPromise();

    const noticeWithoutLeaving = Array.from(
      document.querySelectorAll('.ant-message-notice-wrapper'),
    ).filter((ele) => !ele.classList.contains('ant-message-move-up-leave'));

    expect(noticeWithoutLeaving).toHaveLength(5);
    expect(noticeWithoutLeaving[4].textContent).toEqual('last');

    await triggerMotionEnd();
    expect(document.querySelectorAll('.ant-message-notice')).toHaveLength(0);

    message.config({
      maxCount: undefined,
    });
  });

  it('should be able to config duration', async () => {
    message.config({
      duration: 5,
    });

    message.info('last');
    await awaitPromise();

    expect(document.querySelectorAll('.ant-message-notice')).toHaveLength(1);

    act(() => {
      jest.advanceTimersByTime(4000);
    });

    expect(document.querySelectorAll('.ant-message-notice')).toHaveLength(1);

    act(() => {
      jest.advanceTimersByTime(2000);
    });

    await triggerMotionEnd('.ant-message-notice-wrapper');

    expect(document.querySelectorAll('.ant-message-notice')).toHaveLength(0);

    message.config({
      duration: undefined,
    });
  });

  it('customize prefix should auto get transition prefixCls', async () => {
    message.config({
      prefixCls: 'light-message',
    });

    message.info('bamboo');
    await awaitPromise();

    expect(document.querySelector('.light-message-move-up')).toBeTruthy();

    message.config({
      prefixCls: undefined,
    });
  });

  it('should be able to global config rootPrefixCls', async () => {
    ConfigProvider.config({ prefixCls: 'prefix-test', iconPrefixCls: 'bamboo' });

    message.info('last');
    await awaitPromise();

    expect(document.querySelectorAll('.ant-message-notice')).toHaveLength(0);
    expect(document.querySelectorAll('.prefix-test-message-notice')).toHaveLength(1);
    expect(document.querySelectorAll('.bamboo-info-circle')).toHaveLength(1);
    ConfigProvider.config({ prefixCls: defaultPrefixCls, iconPrefixCls: null! });
  });

  it('should be able to config prefixCls', async () => {
    message.config({
      prefixCls: 'prefix-test',
    });

    message.info('last');
    await awaitPromise();

    expect(document.querySelectorAll('.ant-message-notice')).toHaveLength(0);
    expect(document.querySelectorAll('.prefix-test-notice')).toHaveLength(1);
    message.config({
      prefixCls: '', // can be set to empty, ant default value is set in ConfigProvider
    });
  });

  it('should be able to config transitionName', async () => {
    message.config({
      transitionName: '',
    });

    message.info('last');
    await awaitPromise();

    expect(document.querySelector('.ant-message-notice')).toBeTruthy();
    expect(document.querySelectorAll('.ant-move-up-enter')).toHaveLength(0);
    message.config({
      transitionName: undefined,
    });
  });

  it('should be able to config getContainer, although messageInstance already exists', async () => {
    function createContainer(): [HTMLElement, VoidFunction] {
      const container = document.createElement('div');
      document.body.appendChild(container);
      return [
        container,
        () => {
          document.body.removeChild(container);
        },
      ];
    }
    const [container1, removeContainer1] = createContainer();
    const [container2, removeContainer2] = createContainer();
    expect(container1.querySelector('.ant-message-notice')).toBeFalsy();
    expect(container2.querySelector('.ant-message-notice')).toBeFalsy();

    message.config({
      getContainer: () => container1,
    });
    const messageText1 = 'mounted in container1';

    message.info(messageText1);
    await awaitPromise();
    expect(container1.querySelector('.ant-message-notice')!.textContent).toEqual(messageText1);

    // Config will directly change container
    message.config({
      getContainer: () => container2,
    });
    const messageText2 = 'mounted in container2';

    message.info(messageText2);
    expect(container2.querySelectorAll('.ant-message-notice')[1]!.textContent).toEqual(
      messageText2,
    );

    removeContainer1();
    removeContainer2();
    message.config({ getContainer: undefined });
  });
  it('should be able to config holderRender', async () => {
    actDestroy();
    ConfigProvider.config({
      holderRender: (children) => (
        <ConfigProvider prefixCls="test" iconPrefixCls="icon">
          {children}
        </ConfigProvider>
      ),
    });

    message.info('last');
    await awaitPromise();

    expect(document.querySelectorAll('.ant-message')).toHaveLength(0);
    expect(document.querySelectorAll('.anticon-info-circle')).toHaveLength(0);
    expect(document.querySelectorAll('.test-message')).toHaveLength(1);
    expect(document.querySelectorAll('.icon-info-circle')).toHaveLength(1);
    ConfigProvider.config({ holderRender: undefined });
  });
  it('should be able to config holderRender config rtl', async () => {
    document.body.innerHTML = '';
    actDestroy();
    ConfigProvider.config({
      holderRender: (children) => <ConfigProvider direction="rtl">{children}</ConfigProvider>,
    });
    message.info('last');
    await awaitPromise();
    expect(document.querySelector('.ant-message-rtl')).toBeTruthy();

    document.body.innerHTML = '';
    actDestroy();
    message.config({ rtl: true });
    message.info('last');
    await awaitPromise();
    expect(document.querySelector('.ant-message-rtl')).toBeTruthy();

    document.body.innerHTML = '';
    actDestroy();
    message.config({ rtl: false });
    message.info('last');
    await awaitPromise();
    expect(document.querySelector('.ant-message-rtl')).toBeFalsy();

    message.config({ rtl: undefined });
    ConfigProvider.config({ holderRender: undefined });
  });

  it('should be able to config holderRender and static config', async () => {
    // level 1
    document.body.innerHTML = '';
    actDestroy();
    ConfigProvider.config({ prefixCls: 'prefix-1' });
    message.info('last');
    await awaitPromise();
    expect(document.querySelectorAll('.prefix-1-message')).toHaveLength(1);

    // level 2
    document.body.innerHTML = '';
    actDestroy();
    ConfigProvider.config({
      prefixCls: 'prefix-1',
      holderRender: (children) => <ConfigProvider prefixCls="prefix-2">{children}</ConfigProvider>,
    });
    message.info('last');
    await awaitPromise();
    expect(document.querySelectorAll('.prefix-2-message')).toHaveLength(1);

    // level 3
    document.body.innerHTML = '';
    actDestroy();
    message.config({ prefixCls: 'prefix-3-message' });
    message.info('last');
    await awaitPromise();
    expect(document.querySelectorAll('.prefix-3-message')).toHaveLength(1);

    // clear config
    message.config({ prefixCls: '' });
    ConfigProvider.config({ prefixCls: '', iconPrefixCls: '', holderRender: undefined });
  });
  it('should be able to config holderRender use App', async () => {
    document.body.innerHTML = '';
    actDestroy();
    ConfigProvider.config({
      holderRender: (children) => <App message={{ maxCount: 1 }}>{children}</App>,
    });

    message.info('last');
    message.info('last');
    await awaitPromise();
    const noticeWithoutLeaving = Array.from(
      document.querySelectorAll('.ant-message-notice-wrapper'),
    ).filter((ele) => !ele.classList.contains('ant-message-move-up-leave'));

    expect(noticeWithoutLeaving).toHaveLength(1);
    ConfigProvider.config({ holderRender: undefined });
  });

  it('should support custom icons via global config', () => {
    const MyApp = () => {
      const { message } = App.useApp();
      useEffect(() => {
        message.success('success');
      });
      return null;
    };
    render(
      <ConfigProvider message={{ icons: { success: <span>foobar</span> } }}>
        <App>
          <MyApp />
        </App>
      </ConfigProvider>,
    );
    expect(screen.getByText('foobar')).toBeVisible();
  });

  it('should perfer custom icons via props over global config', () => {
    const MyApp = () => {
      const { message } = App.useApp();
      useEffect(() => {
        message.open({
          type: 'success',
          content: 'success',
          icons: { success: <span>bamboo</span> },
        });
      });
      return null;
    };
    render(
      <ConfigProvider message={{ icons: { success: <span>foobar</span> } }}>
        <App>
          <MyApp />
        </App>
      </ConfigProvider>,
    );
    expect(screen.getByText('bamboo')).toBeVisible();
  });
});
