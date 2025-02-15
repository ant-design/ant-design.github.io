import * as React from 'react';
import { useEffect } from 'react';
import { SmileOutlined } from '@ant-design/icons';
import RcCSSMotion from '@rc-component/motion';
import { genCSSMotion as genRcCSSMotion } from '@rc-component/motion/lib/CSSMotion';
import KeyCode from '@rc-component/util/lib/KeyCode';
import { resetWarned } from '@rc-component/util/lib/warning';
import { render, screen } from '@testing-library/react';

import type { ModalFuncProps } from '..';
import Modal from '..';
import { act, fireEvent, waitFakeTimer } from '../../../tests/utils';
import App from '../../app';
import ConfigProvider, { defaultPrefixCls } from '../../config-provider';
import type { ModalFunc } from '../confirm';
import destroyFns from '../destroyFns';

(globalThis as any).IS_REACT_ACT_ENVIRONMENT = true;

const { confirm } = Modal;

jest.mock('@rc-component/motion');

// TODO: Remove this. Mock for React 19
jest.mock('react-dom', () => {
  const realReactDOM = jest.requireActual('react-dom');

  if (realReactDOM.version.startsWith('19')) {
    const realReactDOMClient = jest.requireActual('react-dom/client');
    realReactDOM.createRoot = realReactDOMClient.createRoot;
  }

  return realReactDOM;
});

(global as any).injectPromise = false;
(global as any).rejectPromise = null;

jest.mock('../../_util/ActionButton', () => {
  const ActionButton = jest.requireActual('../../_util/ActionButton').default;
  return (props: any) => {
    const { actionFn } = props;
    let mockActionFn: any = actionFn;
    if (actionFn && (global as any).injectPromise) {
      mockActionFn = (...args: any) => {
        let ret = actionFn(...args);

        if (ret.then) {
          let resolveFn: any;
          let rejectFn: any;

          ret = ret.then(
            (v: any) => {
              resolveFn?.(v);
            },
            (e: any) => {
              rejectFn?.(e)?.catch((err: Error) => {
                (global as any).rejectPromise = err;
              });
            },
          );
          ret.then = (resolve: any, reject: any) => {
            resolveFn = resolve;
            rejectFn = reject;
          };
        }

        return ret;
      };
    }
    return <ActionButton {...props} actionFn={mockActionFn} />;
  };
});

describe('Modal.confirm triggers callbacks correctly', () => {
  // Inject `@rc-component/motion` to replace with No transition support
  const MockRcCSSMotion = genRcCSSMotion(false);
  Object.keys(MockRcCSSMotion).forEach((key) => {
    // @ts-ignore
    RcCSSMotion[key] = MockRcCSSMotion[key];
  });

  // // Mock for @rc-component/util raf
  // window.requestAnimationFrame = callback => {
  //   const ret = window.setTimeout(callback, 16);
  //   return ret;
  // };
  // window.cancelAnimationFrame = id => {
  //   window.clearTimeout(id);
  // };

  // jest.spyOn(window, 'requestAnimationFrame').mockImplementation(callback => {
  //   const id = window.setTimeout(callback);
  //   console.log('Mock Raf:', id);
  //   return id;
  // });
  // jest.spyOn(window, 'cancelAnimationFrame').mockImplementation(id => window.clearTimeout(id));

  const errorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});

  // Hack error to remove act warning
  const originError = console.error;
  console.error = (...args) => {
    const errorStr = String(args[0]);
    if (errorStr.includes('was not wrapped in act(...)')) {
      return;
    }

    originError(...args);
  };

  beforeEach(() => {
    jest.useFakeTimers();
    (global as any).injectPromise = false;
    (global as any).rejectPromise = null;
  });

  afterEach(async () => {
    errorSpy.mockReset();
    Modal.destroyAll();

    await waitFakeTimer();
    document.body.innerHTML = '';
    jest.clearAllTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
    errorSpy.mockRestore();
  });

  function $$(className: string) {
    return document.body.querySelectorAll<HTMLElement>(className);
  }

  async function open(args?: ModalFuncProps) {
    confirm({
      title: 'Want to delete these items?',
      content: 'some descriptions',
      ...args,
    });

    await waitFakeTimer();
  }

  it('should not render title when title not defined', async () => {
    confirm({
      content: 'some descriptions',
    });
    await waitFakeTimer();
    expect(document.querySelector('.ant-modal-confirm-title')).toBe(null);
  });

  it('trigger onCancel once when click on cancel button', async () => {
    const onCancel = jest.fn();
    const onOk = jest.fn();
    await open({
      onCancel,
      onOk,
    });

    $$('.ant-btn')[0].click();
    expect(onCancel.mock.calls.length).toBe(1);
    expect(onOk.mock.calls.length).toBe(0);
  });

  it('trigger onOk once when click on ok button', async () => {
    const onCancel = jest.fn();
    const onOk = jest.fn();
    await open({
      onCancel,
      onOk,
    });

    $$('.ant-btn-primary')[0].click();
    expect(onCancel.mock.calls.length).toBe(0);
    expect(onOk.mock.calls.length).toBe(1);
  });

  it('should allow Modal.confirm without onCancel been set', async () => {
    await open();

    // Third Modal
    $$('.ant-btn')[0].click();
    expect(errorSpy).not.toHaveBeenCalled();
  });

  it('should allow Modal.confirm without onOk been set', async () => {
    await open();

    // Fourth Modal
    $$('.ant-btn-primary')[0].click();
    expect(errorSpy).not.toHaveBeenCalled();
  });

  it('should close confirm modal when press ESC', async () => {
    const onCancel = jest.fn();
    Modal.confirm({
      title: 'title',
      content: 'content',
      onCancel,
    });

    await waitFakeTimer();

    expect($$(`.ant-modal-confirm-confirm`)).toHaveLength(1);
    fireEvent.keyDown($$('.ant-modal')[0], { keyCode: KeyCode.ESC });

    await waitFakeTimer(0);

    expect($$(`.ant-modal-confirm-confirm`)).toHaveLength(0);
    expect(onCancel).toHaveBeenCalledTimes(1);
  });

  it('should not fire twice onOk when button is pressed twice', async () => {
    let resolveFn: VoidFunction;
    const onOk = jest.fn(
      () =>
        new Promise<void>((resolve) => {
          resolveFn = resolve;
        }),
    );
    await open({
      onOk,
    });

    // Load will not clickable
    await waitFakeTimer();
    for (let i = 0; i < 10; i += 1) {
      act(() => {
        $$('.ant-btn-primary')[0].click();
      });
    }
    expect(onOk).toHaveBeenCalledTimes(1);

    // Resolve this promise
    resolveFn!();
    await Promise.resolve();

    // Resolve still can not clickable
    act(() => {
      $$('.ant-btn-primary')[0].click();
    });

    expect(onOk).toHaveBeenCalledTimes(1);
  });

  it('should not hide confirm when onOk return Promise.resolve', async () => {
    await open({
      onOk: () => Promise.resolve(''),
    });

    $$('.ant-btn-primary')[0].click();
    expect($$('.ant-modal-confirm')).toHaveLength(1);
  });

  it('should emit error when onOk return Promise.reject', async () => {
    (global as any).injectPromise = true;

    const error = new Error('something wrong');
    await open({
      onOk: () => Promise.reject(error),
    });

    $$('.ant-btn-primary')[0].click();

    // wait promise
    await waitFakeTimer();

    expect((global as any).rejectPromise instanceof Error).toBeTruthy();
  });

  it('shows animation when close', async () => {
    await open();

    expect($$('.ant-modal-confirm')).toHaveLength(1);

    await waitFakeTimer();

    $$('.ant-btn')[0].click();

    await waitFakeTimer();

    expect($$('.ant-modal-confirm')).toHaveLength(0);
  });

  it('ok only', async () => {
    await open({ okCancel: false });
    expect($$('.ant-btn')).toHaveLength(1);
    expect($$('.ant-btn')[0].innerHTML).toContain('OK');
  });

  it('allows extra props on buttons', async () => {
    await open({
      okButtonProps: { disabled: true },
      cancelButtonProps: { 'data-test': 'baz' } as ModalFuncProps['cancelButtonProps'],
    });

    expect($$('.ant-btn')).toHaveLength(2);
    expect(($$('.ant-btn')[0].attributes as any)['data-test'].value).toBe('baz');
    expect(($$('.ant-btn')[1] as HTMLButtonElement).disabled).toBe(true);
  });

  describe('should close modals when click confirm button', () => {
    (['info', 'success', 'warning', 'error'] as const).forEach((type) => {
      it(type, async () => {
        Modal[type]?.({ title: 'title', content: 'content' });
        await waitFakeTimer();
        expect($$(`.ant-modal-confirm-${type}`)).toHaveLength(1);

        $$('.ant-btn')[0].click();
        await waitFakeTimer();
        expect($$(`.ant-modal-confirm-${type}`)).toHaveLength(0);
      });
    });
  });

  it('should close confirm modal when click cancel button', async () => {
    const onCancel = jest.fn();
    Modal.confirm({
      open: true,
      title: 'title',
      content: 'content',
      onCancel,
    });
    await waitFakeTimer();
    expect($$(`.ant-modal-confirm-confirm`)).toHaveLength(1);
    $$('.ant-btn')[0].click();
    await waitFakeTimer();
    expect($$(`.ant-modal-confirm-confirm`)).toHaveLength(0);
    expect(onCancel).toHaveBeenCalledTimes(1);
  });

  it('should close confirm modal when click close button', async () => {
    const onCancel = jest.fn();
    Modal.confirm({
      title: 'title',
      content: 'content',
      closable: true,
      closeIcon: 'X',
      onCancel,
    });
    await waitFakeTimer();
    expect($$(`.ant-modal-close`)).toHaveLength(1);
    $$('.ant-btn')[0].click();
    await waitFakeTimer();
    expect($$(`.ant-modal-close`)).toHaveLength(0);
    expect(onCancel).toHaveBeenCalledTimes(1);
  });

  describe('should not close modals when click confirm button when onOk has argument', () => {
    (['confirm', 'info', 'success', 'warning', 'error'] as const).forEach((type) => {
      it(type, async () => {
        Modal[type]?.({
          title: 'title',
          content: 'content',
          onOk: (_) => null,
        });
        await waitFakeTimer();
        expect($$(`.ant-modal-confirm-${type}`)).toHaveLength(1);
        $$('.ant-btn-primary')[0].click();

        await waitFakeTimer();
        expect($$(`.ant-modal-confirm-${type}`)).toHaveLength(1);
      });
    });
  });

  describe('could be update by new config', () => {
    (['info', 'success', 'warning', 'error'] as const).forEach((type) => {
      it(type, async () => {
        const instance = Modal[type]?.({
          title: 'title',
          content: 'content',
        });
        await waitFakeTimer();
        expect($$(`.ant-modal-confirm-${type}`)).toHaveLength(1);
        expect($$('.ant-modal-confirm-title')[0].innerHTML).toBe('title');
        expect($$('.ant-modal-confirm-content')[0].innerHTML).toBe('content');
        instance.update({
          title: 'new title',
          content: 'new content',
        });

        await waitFakeTimer();
        expect($$(`.ant-modal-confirm-${type}`)).toHaveLength(1);
        expect($$('.ant-modal-confirm-title')[0].innerHTML).toBe('new title');
        expect($$('.ant-modal-confirm-content')[0].innerHTML).toBe('new content');
        instance.destroy();
        await waitFakeTimer();
        expect($$(`.ant-modal-confirm-${type}`)).toHaveLength(0);
      });
    });
  });

  describe('could be update by call function', () => {
    (['info', 'success', 'warning', 'error'] as const).forEach((type) => {
      it(type, async () => {
        const instance = Modal[type]?.({
          title: 'title',
          okButtonProps: { loading: true, style: { color: 'red' } },
        });
        await waitFakeTimer();
        expect($$(`.ant-modal-confirm-${type}`)).toHaveLength(1);
        expect($$('.ant-modal-confirm-title')[0].innerHTML).toBe('title');
        expect($$('.ant-modal-confirm-btns .ant-btn-primary')[0].classList).toContain(
          'ant-btn-loading',
        );
        expect($$('.ant-modal-confirm-btns .ant-btn-primary')[0].style.color).toBe('red');
        instance.update((prevConfig) => ({
          ...prevConfig,
          okButtonProps: {
            ...prevConfig.okButtonProps,
            loading: false,
          },
        }));
        await waitFakeTimer();
        expect($$(`.ant-modal-confirm-${type}`)).toHaveLength(1);
        expect($$('.ant-modal-confirm-title')[0].innerHTML).toBe('title');
        expect($$('.ant-modal-confirm-btns .ant-btn-primary')[0].classList).not.toContain(
          'ant-btn-loading',
        );
        expect($$('.ant-modal-confirm-btns .ant-btn-primary')[0].style.color).toBe('red');
        instance.destroy();

        await waitFakeTimer();
        expect($$(`.ant-modal-confirm-${type}`)).toHaveLength(0);
      });
    });
  });

  describe('could be destroy', () => {
    (['info', 'success', 'warning', 'error'] as const).forEach((type) => {
      it(type, async () => {
        const instance = Modal[type]?.({
          title: 'title',
          content: 'content',
        });
        await waitFakeTimer();
        expect($$(`.ant-modal-confirm-${type}`)).toHaveLength(1);

        instance.destroy();
        await waitFakeTimer();
        expect($$(`.ant-modal-confirm-${type}`)).toHaveLength(0);
      });
    });
  });

  it('could be Modal.destroyAll', async () => {
    // Show
    (['info', 'success', 'warning', 'error'] as const).forEach((type) => {
      Modal[type]?.({
        title: 'title',
        content: 'content',
      });
    });

    await waitFakeTimer();

    ['info', 'success', 'warning', 'error'].forEach((type) => {
      expect($$(`.ant-modal-confirm-${type}`)).toHaveLength(1);
    });

    // Destroy
    Modal.destroyAll();

    await waitFakeTimer();

    ['info', 'success', 'warning', 'error'].forEach((type) => {
      expect($$(`.ant-modal-confirm-${type}`)).toHaveLength(0);
    });
  });

  it('prefixCls', async () => {
    await open({ prefixCls: 'custom-modal' });

    expect($$('.custom-modal-mask')).toHaveLength(1);
    expect($$('.custom-modal-wrap')).toHaveLength(1);
    expect($$('.custom-modal-confirm')).toHaveLength(1);
    expect($$('.custom-modal-confirm-body-wrapper')).toHaveLength(1);
    expect($$('.ant-btn')).toHaveLength(2);
  });

  it('should be Modal.confirm without mask', async () => {
    await open({ mask: false });
    expect($$('.ant-modal-mask')).toHaveLength(0);
  });

  it('destroyFns should reduce when instance.destroy', async () => {
    Modal.destroyAll(); // clear destroyFns

    await waitFakeTimer();

    const instances: ReturnType<ModalFunc>[] = [];
    (['info', 'success', 'warning', 'error'] as const).forEach((type) => {
      const instance = Modal[type]?.({
        title: 'title',
        content: 'content',
      });

      // Render modal
      act(() => {
        jest.runAllTimers();
      });

      instances.push(instance);
    });
    const { length } = instances;
    instances.forEach((instance, index) => {
      expect(destroyFns.length).toBe(length - index);

      act(() => {
        instance.destroy();
        jest.runAllTimers();
      });
      expect(destroyFns.length).toBe(length - index - 1);
    });
  });

  it('should warning when pass a string as icon props', async () => {
    const warnSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
    confirm({
      content: 'some descriptions',
      icon: 'ab',
    });

    await waitFakeTimer();

    expect(warnSpy).not.toHaveBeenCalled();
    confirm({
      content: 'some descriptions',
      icon: 'question',
    });

    await waitFakeTimer();

    expect(warnSpy).toHaveBeenCalledWith(
      `Warning: [antd: Modal] \`icon\` is using ReactNode instead of string naming in v4. Please check \`question\` at https://ant.design/components/icon`,
    );
    warnSpy.mockRestore();
  });

  it('icon can be null to hide icon', async () => {
    jest.useFakeTimers();
    confirm({
      title: 'some title',
      content: 'some descriptions',
      icon: null,
    });

    await waitFakeTimer();

    // We check icon is not exist in the body
    expect(document.querySelector('.ant-modal-confirm-body')!.children).toHaveLength(1);
    expect(
      document.querySelector('.ant-modal-confirm-body')!.querySelector('.anticon'),
    ).toBeFalsy();

    jest.useRealTimers();
  });

  it('ok button should trigger onOk once when click it many times quickly', async () => {
    const onOk = jest.fn();
    await open({ onOk });

    $$('.ant-btn-primary')[0].click();
    $$('.ant-btn-primary')[0].click();
    expect(onOk).toHaveBeenCalledTimes(1);
  });

  // https://github.com/ant-design/ant-design/issues/23358
  it('ok button should trigger onOk multiple times when onOk has close argument', async () => {
    const onOk = jest.fn();
    await open({
      onOk(close?: any) {
        onOk();
        // @ts-ignore
        (() => {})(close); // do nothing
      },
    });

    $$('.ant-btn-primary')[0].click();
    $$('.ant-btn-primary')[0].click();
    $$('.ant-btn-primary')[0].click();
    expect(onOk).toHaveBeenCalledTimes(3);
  });

  it('should be able to global config rootPrefixCls', async () => {
    ConfigProvider.config({ prefixCls: 'my', iconPrefixCls: 'bamboo' });
    confirm({ title: 'title', icon: <SmileOutlined /> });

    await waitFakeTimer();

    expect(document.querySelectorAll('.ant-btn').length).toBe(0);
    expect(document.querySelectorAll('.my-btn').length).toBe(2);
    expect(document.querySelectorAll('.bamboo-smile').length).toBe(1);
    expect(document.querySelectorAll('.my-modal-confirm').length).toBe(1);
    ConfigProvider.config({ prefixCls: defaultPrefixCls, iconPrefixCls: undefined });
  });

  it('should be able to config rootPrefixCls', async () => {
    resetWarned();

    Modal.config({
      rootPrefixCls: 'my',
    });
    expect(errorSpy).toHaveBeenCalledWith(
      'Warning: [antd: Modal] Modal.config is deprecated. Please use ConfigProvider.config instead.',
    );

    confirm({
      title: 'title',
    });

    await waitFakeTimer();

    expect(document.querySelectorAll('.ant-btn').length).toBe(0);
    expect(document.querySelectorAll('.my-btn').length).toBe(2);
    expect(document.querySelectorAll('.my-modal-confirm').length).toBe(1);
    Modal.config({
      rootPrefixCls: 'your',
    });
    confirm({
      title: 'title',
    });

    await waitFakeTimer();

    expect(document.querySelectorAll('.ant-btn').length).toBe(0);
    expect(document.querySelectorAll('.my-btn').length).toBe(2);
    expect(document.querySelectorAll('.my-modal-confirm').length).toBe(1);
    expect(document.querySelectorAll('.your-btn').length).toBe(2);
    expect(document.querySelectorAll('.your-modal-confirm').length).toBe(1);
    Modal.config({
      rootPrefixCls: '',
    });
  });

  it('trigger afterClose once when click on cancel button', async () => {
    const afterClose = jest.fn();
    await open({
      afterClose,
    });
    // first Modal
    $$('.ant-btn')[0].click();
    expect(afterClose).not.toHaveBeenCalled();
    await waitFakeTimer(500);
    expect(afterClose).toHaveBeenCalled();
  });

  it('trigger afterClose once when click on ok button', async () => {
    const afterClose = jest.fn();
    await open({
      afterClose,
    });

    // second Modal
    $$('.ant-btn-primary')[0].click();
    expect(afterClose).not.toHaveBeenCalled();
    await waitFakeTimer(500);
    expect(afterClose).toHaveBeenCalled();
  });

  it('bodyStyle', async () => {
    resetWarned();
    const spy = jest.spyOn(console, 'error').mockImplementation(() => {});
    await open({ bodyStyle: { width: 500 } });

    const { width } = $$('.ant-modal-body')[0].style;
    expect(width).toBe('500px');
    expect(spy).toHaveBeenCalledWith(
      'Warning: [antd: Modal] `bodyStyle` is deprecated. Please use `styles.body` instead.',
    );
    spy.mockRestore();
  });

  it('styles', async () => {
    resetWarned();
    await open({ styles: { body: { width: 500 } } });

    const { width } = $$('.ant-modal-body')[0].style;
    expect(width).toBe('500px');
  });

  describe('the callback close should be a method when onCancel has a close parameter', () => {
    (['confirm', 'info', 'success', 'warning', 'error'] as const).forEach((type) => {
      it(`click the close icon to trigger ${type} onCancel`, async () => {
        const mock = jest.fn();

        Modal[type]?.({
          closable: true,
          onCancel: (close) => mock(close),
        });

        await waitFakeTimer();

        expect($$(`.ant-modal-confirm-${type}`)).toHaveLength(1);
        $$('.ant-modal-close')[0].click();

        await waitFakeTimer();

        expect($$(`.ant-modal-confirm-${type}`)).toHaveLength(0);
        expect(mock).toHaveBeenCalledWith(expect.any(Function));
      });
    });

    (['confirm', 'info', 'success', 'warning', 'error'] as const).forEach((type) => {
      it(`press ESC to trigger ${type} onCancel`, async () => {
        const mock = jest.fn();

        Modal[type]?.({
          keyboard: true,
          onCancel: (close) => mock(close),
        });

        await waitFakeTimer();

        expect($$(`.ant-modal-confirm-${type}`)).toHaveLength(1);
        fireEvent.keyDown($$('.ant-modal')[0], { keyCode: KeyCode.ESC });

        await waitFakeTimer(0);

        expect($$(`.ant-modal-confirm-${type}`)).toHaveLength(0);
        expect(mock).toHaveBeenCalledWith(expect.any(Function));
      });
    });

    (['confirm', 'info', 'success', 'warning', 'error'] as const).forEach((type) => {
      it(`click the mask to trigger ${type} onCancel`, async () => {
        const mock = jest.fn();

        Modal[type]?.({
          maskClosable: true,
          onCancel: (close) => mock(close),
        });

        await waitFakeTimer();

        expect($$('.ant-modal-mask')).toHaveLength(1);
        expect($$(`.ant-modal-confirm-${type}`)).toHaveLength(1);

        $$('.ant-modal-wrap')[0].click();

        await waitFakeTimer();

        expect($$(`.ant-modal-confirm-${type}`)).toHaveLength(0);
        expect(mock).toHaveBeenCalledWith(expect.any(Function));
      });
    });
  });

  it('confirm modal click Cancel button close callback is a function', async () => {
    const mock = jest.fn();

    Modal.confirm({
      onCancel: (close) => mock(close),
    });

    await waitFakeTimer();

    $$('.ant-modal-confirm-btns > .ant-btn')[0].click();
    await waitFakeTimer();

    expect(mock).toHaveBeenCalledWith(expect.any(Function));
  });

  it('close can close modal when onCancel has a close parameter', async () => {
    Modal.confirm({
      onCancel: (close) => close(),
    });

    await waitFakeTimer();

    expect($$('.ant-modal-confirm-confirm')).toHaveLength(1);

    $$('.ant-modal-confirm-btns > .ant-btn')[0].click();
    await waitFakeTimer();

    expect($$('.ant-modal-confirm-confirm')).toHaveLength(0);
  });

  // https://github.com/ant-design/ant-design/issues/37461
  it('Update should closable', async () => {
    resetWarned();
    jest.useFakeTimers();
    const errSpy = jest.spyOn(console, 'error').mockImplementation(() => {});

    const modal = Modal.confirm({});

    modal.update({
      open: true,
    });

    await waitFakeTimer();

    expect($$('.ant-modal-confirm-confirm')).toHaveLength(1);

    $$('.ant-modal-confirm-btns > .ant-btn')[0].click();
    await waitFakeTimer();

    expect($$('.ant-modal-confirm-confirm')).toHaveLength(0);

    jest.useRealTimers();
    errSpy.mockRestore();
  });

  it('null of Footer', async () => {
    Modal.confirm({
      footer: null,
    });

    await waitFakeTimer();

    expect($$('.ant-modal-confirm-btns')).toHaveLength(0);
  });

  it('Update Footer', async () => {
    Modal.confirm({
      footer: (
        <div>
          <button className="custom-modal-footer" type="button">
            Custom Modal Footer
          </button>
        </div>
      ),
    });
    await waitFakeTimer();
    expect($$('.custom-modal-footer')).toHaveLength(1);
  });

  // https://github.com/ant-design/ant-design/issues/41170
  describe('footer', () => {
    (['confirm', 'info', 'success', 'warning', 'error'] as const).forEach((type) => {
      it(`${type} should not render the footer in the default`, async () => {
        Modal[type]({
          content: 'hai',
        });

        await waitFakeTimer();

        expect(document.querySelector(`.ant-modal-footer`)).toBeFalsy();
      });
    });

    it('confirm should render the footer when footer is set', async () => {
      Modal.confirm({
        content: 'hai',
        footer: 'hai',
      });

      await waitFakeTimer();

      expect(document.querySelector(`.ant-modal-section`)).toMatchSnapshot();
    });
  });

  it('warning getContainer be false', async () => {
    resetWarned();
    const warnSpy = jest.spyOn(console, 'error').mockImplementation(() => {});

    Modal.confirm({
      getContainer: false,
    });

    await waitFakeTimer();
    expect(warnSpy).toHaveBeenCalledWith(
      'Warning: [antd: Modal] Static method not support `getContainer` to be `false` since it do not have context env.',
    );

    warnSpy.mockRestore();
  });

  it('Should custom footer function work width confirm', async () => {
    Modal.confirm({
      content: 'hai',
      footer: (_, { OkBtn, CancelBtn }) => (
        <>
          <OkBtn />
          <CancelBtn />
          <div className="custom-footer-ele">footer-ele</div>
        </>
      ),
    });

    await waitFakeTimer();

    expect(document.querySelector('.custom-footer-ele')).toBeTruthy();
  });
  it('should be able to config holderRender', async () => {
    ConfigProvider.config({
      holderRender: (children) => (
        <ConfigProvider prefixCls="test" iconPrefixCls="icon">
          {children}
        </ConfigProvider>
      ),
    });
    Modal.confirm({ content: 'hai' });
    await waitFakeTimer();
    expect(document.querySelectorAll('.ant-modal-root')).toHaveLength(0);
    expect(document.querySelectorAll('.anticon-exclamation-circle')).toHaveLength(0);
    expect(document.querySelectorAll('.test-modal-root')).toHaveLength(1);
    expect(document.querySelectorAll('.icon-exclamation-circle')).toHaveLength(1);
    ConfigProvider.config({ holderRender: undefined });
  });
  it('should be able to config holderRender config rtl', async () => {
    document.body.innerHTML = '';
    ConfigProvider.config({
      holderRender: (children) => <ConfigProvider direction="rtl">{children}</ConfigProvider>,
    });
    Modal.confirm({ content: 'hai' });
    await waitFakeTimer();
    expect(document.querySelector('.ant-modal-confirm-rtl')).toBeTruthy();

    document.body.innerHTML = '';
    Modal.confirm({ content: 'hai', direction: 'rtl' });
    await waitFakeTimer();
    expect(document.querySelector('.ant-modal-confirm-rtl')).toBeTruthy();

    document.body.innerHTML = '';
    Modal.confirm({ content: 'hai', direction: 'ltr' });
    await waitFakeTimer();
    expect(document.querySelector('.ant-modal-confirm-rtl')).toBeFalsy();
    ConfigProvider.config({ holderRender: undefined });
  });
  it('should be able to config holderRender and static config', async () => {
    // level 1
    ConfigProvider.config({ prefixCls: 'prefix-1' });
    Modal.confirm({ content: 'hai' });
    await waitFakeTimer();
    expect(document.querySelectorAll('.prefix-1-modal-root')).toHaveLength(1);
    expect($$('.prefix-1-btn')).toHaveLength(2);
    // level 2
    document.body.innerHTML = '';
    ConfigProvider.config({
      prefixCls: 'prefix-1',
      holderRender: (children) => <ConfigProvider prefixCls="prefix-2">{children}</ConfigProvider>,
    });
    Modal.confirm({ content: 'hai' });
    await waitFakeTimer();
    expect(document.querySelectorAll('.prefix-2-modal-root')).toHaveLength(1);
    expect($$('.prefix-2-btn')).toHaveLength(2);
    // level 3
    document.body.innerHTML = '';
    Modal.config({ rootPrefixCls: 'prefix-3' });
    Modal.confirm({ content: 'hai' });
    await waitFakeTimer();
    expect(document.querySelectorAll('.prefix-3-modal-root')).toHaveLength(1);
    expect(document.querySelectorAll('.prefix-3-btn')).toHaveLength(2);
    // clear
    Modal.config({ rootPrefixCls: '' });
    ConfigProvider.config({ prefixCls: '', holderRender: undefined });
  });
  it('should be able to config holderRender antd locale', async () => {
    document.body.innerHTML = '';
    ConfigProvider.config({
      holderRender: (children) => (
        <ConfigProvider locale={{ Modal: { okText: 'test' } } as any}>{children}</ConfigProvider>
      ),
    });
    Modal.confirm({ content: 'hai' });
    await waitFakeTimer();
    expect(document.querySelector('.ant-btn-primary')?.textContent).toBe('test');
    ConfigProvider.config({ holderRender: undefined });
  });

  it('onCancel and onOk return any results and should be closed', async () => {
    Modal.confirm({ onOk: () => true });
    await waitFakeTimer();
    $$('.ant-btn-primary')[0].click();
    await waitFakeTimer();
    expect(document.querySelector('.ant-modal-root')).toBeFalsy();

    Modal.confirm({ onOk: () => false });
    await waitFakeTimer();
    $$('.ant-btn-primary')[0].click();
    await waitFakeTimer();
    expect(document.querySelector('.ant-modal-root')).toBeFalsy();

    Modal.confirm({ onCancel: () => undefined });
    await waitFakeTimer();
    $$('.ant-btn')[0].click();
    await waitFakeTimer();
    expect(document.querySelector('.ant-modal-root')).toBeFalsy();
  });

  it('should support custom icons via global config', () => {
    const MyApp = () => {
      const { modal } = App.useApp();
      useEffect(() => {
        modal.success({ title: 'success', content: 'success' });
      });
      return null;
    };
    render(
      <ConfigProvider modal={{ icons: { success: <span>foobar</span> } }}>
        <App>
          <MyApp />
        </App>
      </ConfigProvider>,
    );
    expect(screen.getByText('foobar')).toBeTruthy();
  });

  it('should perfer custom icons via props over global config', () => {
    const MyApp = () => {
      const { modal } = App.useApp();
      useEffect(() => {
        modal.success({
          title: 'success',
          content: 'success',
          icons: { success: <span>bamboo</span> },
        });
      });
      return null;
    };
    render(
      <ConfigProvider modal={{ icons: { success: <span>foobar</span> } }}>
        <App>
          <MyApp />
        </App>
      </ConfigProvider>,
    );
    expect(screen.getByText('bamboo')).toBeTruthy();
  });
});
