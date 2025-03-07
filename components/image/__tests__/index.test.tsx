import React from 'react';
import { Modal } from 'antd';

import Image from '..';
import mountTest from '../../../tests/shared/mountTest';
import rtlTest from '../../../tests/shared/rtlTest';
import { fireEvent, render } from '../../../tests/utils';
import ConfigProvider from '../../config-provider';

const src = 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png';

describe('Image', () => {
  mountTest(Image);
  rtlTest(Image);
  it('Image preview props set false', () => {
    const { container } = render(<Image src={src} preview={false} />);

    fireEvent.click(container.querySelector('.ant-image')!);
    expect(container.querySelector('.ant-image-preview-root')).toBe(null);
  });
  it('Group preview props set false', () => {
    const { container } = render(
      <Image.PreviewGroup preview={false}>
        <Image src={src} />
      </Image.PreviewGroup>,
    );

    fireEvent.click(container.querySelector('.ant-image')!);

    expect(container.querySelector('.ant-image-preview-root')).toBe(null);
  });

  it('Default preview props', () => {
    const { container, baseElement } = render(<Image src={src} preview={{ visible: true }} />);

    fireEvent.click(container.querySelector('.ant-image')!);

    expect(baseElement.querySelector('.ant-image-preview-mask')).toHaveClass('ant-fade');
    expect(baseElement.querySelector('.ant-image-preview')).toHaveClass('ant-zoom');
  });
  it('Default Group preview props', () => {
    const { container, baseElement } = render(
      <Image.PreviewGroup preview={{ visible: true }}>
        <Image src={src} />
      </Image.PreviewGroup>,
    );

    fireEvent.click(container.querySelector('.ant-image')!);

    expect(baseElement.querySelector('.ant-image-preview-mask')).toHaveClass('ant-fade');
    expect(baseElement.querySelector('.ant-image-preview')).toHaveClass('ant-zoom');
    expect(baseElement).toMatchSnapshot();
  });
  it('Customize preview props', () => {
    const { container, baseElement } = render(
      <Image
        src={src}
        preview={{
          visible: true,
          transitionName: 'abc',
          maskTransitionName: 'def',
          getContainer: false,
        }}
      />,
    );

    fireEvent.click(container.querySelector('.ant-image')!);

    expect(container.querySelector('.ant-image-preview-root')).not.toBe(null);

    expect(baseElement.querySelector('.ant-image-preview')).toHaveClass('abc');
    expect(baseElement.querySelector('.ant-image-preview-mask')).toHaveClass('def');
  });
  it('Customize Group preview props', () => {
    const { container, baseElement } = render(
      <Image.PreviewGroup
        preview={{ visible: true, transitionName: 'abc', maskTransitionName: 'def' }}
      >
        <Image src={src} />
      </Image.PreviewGroup>,
    );

    fireEvent.click(container.querySelector('.ant-image')!);

    expect(baseElement.querySelector('.ant-image-preview')).toHaveClass('abc');
    expect(baseElement.querySelector('.ant-image-preview-mask')).toHaveClass('def');
  });
  it('ConfigProvider getPopupContainer', () => {
    const { container, baseElement } = render(
      <>
        <div className="container" />
        <ConfigProvider getPopupContainer={() => document.querySelector('.container')!}>
          <Image src={src} />
        </ConfigProvider>
      </>,
    );
    fireEvent.click(container.querySelector('.ant-image')!);
    expect(baseElement.querySelector('.container')?.children.length).not.toBe(0);
  });
  it('Preview forceRender props', async () => {
    const onLoadCb = jest.fn();
    const PreviewImage: React.FC = () => (
      <Image
        preview={{
          visible: false,
          src,
          forceRender: true,
        }}
      />
    );
    const { baseElement } = render(<PreviewImage />);
    expect(baseElement.querySelector('.ant-image-preview-root')).not.toBe(null);
    baseElement.querySelector('.ant-image-preview-img')?.addEventListener('load', onLoadCb);
    fireEvent.load(baseElement.querySelector('.ant-image-preview-img')!);
    expect(onLoadCb).toHaveBeenCalled();
  });
  it('Preview should support rootClassName', () => {
    const { container, baseElement } = render(
      <Image.PreviewGroup preview={{ visible: true, rootClassName: 'test-root-class' }}>
        <Image src={src} />
      </Image.PreviewGroup>,
    );

    fireEvent.click(container.querySelector('.ant-image')!);

    expect(baseElement.querySelector('.test-root-class')).toBeTruthy();
  });
  it('Image.PreviewGroup preview in a nested modal where z-index Settings should be correct', () => {
    const App = () => (
      <Modal open>
        <Modal open>
          <Modal open>
            <Image
              width={200}
              src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
              preview={{
                rootClassName: 'test-image-preview-class',
              }}
            />
            <Image.PreviewGroup
              preview={{
                rootClassName: 'test-image-preview-group-class',
              }}
            >
              <Image
                width={200}
                src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
              />
              <Image
                width={200}
                src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg"
              />
            </Image.PreviewGroup>
          </Modal>
        </Modal>
      </Modal>
    );
    const { baseElement } = render(<App />);

    fireEvent.click(baseElement.querySelector('.ant-image')!);

    expect(
      (
        baseElement.querySelector(
          '.test-image-preview-class .ant-image-preview-wrap',
        ) as HTMLElement
      ).style.zIndex,
    ).toBe('1301');
    expect(
      (
        baseElement.querySelector(
          '.test-image-preview-class.ant-image-preview-operations-wrapper',
        ) as HTMLElement
      ).style.zIndex,
    ).toBe('1302');

    fireEvent.click(baseElement.querySelectorAll('.ant-image')[1]!);

    expect(
      (
        baseElement.querySelector(
          '.test-image-preview-group-class .ant-image-preview-wrap',
        ) as HTMLElement
      ).style.zIndex,
    ).toBe('1301');
    expect(
      (
        baseElement.querySelector(
          '.test-image-preview-group-class.ant-image-preview-operations-wrapper',
        ) as HTMLElement
      ).style.zIndex,
    ).toBe('1302');
  });
  it('support classnames and styles', () => {
    const customClassnames = {
      mask: 'custom-mask',
      actions: 'custom-actions',
      root: 'custom-root',
    };
    const customStyles = {
      mask: { color: 'red' },
      actions: { backgroundColor: 'blue' },
      root: { border: '1px solid green' },
    };
    const { baseElement } = render(
      <Image
        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
        preview={{
          styles: customStyles,
          classNames: customClassnames,
          mask: 'Bamboo Is Light',
          zIndex: 9999,
          visible: true,
        }}
      />,
    );
    const mask = document.querySelector('.ant-image-mask');
    const actions = baseElement.querySelector('.ant-image-preview-operations');
    expect(mask).toHaveClass(customClassnames.mask);
    expect(mask).toHaveStyle(customStyles.mask);
    expect(actions).toHaveClass(customClassnames.actions);
    expect(actions).toHaveStyle(customStyles.actions);
    expect(baseElement.querySelector('.ant-image-preview-root')).toHaveClass(customClassnames.root);
    expect(baseElement.querySelector('.ant-image-preview')).toHaveStyle(customStyles.root);
  });
});
