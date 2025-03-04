import React from 'react';
import { resetWarned } from '@rc-component/util/lib/warning';
import userEvent from '@testing-library/user-event';

import Alert from '..';
import { accessibilityTest } from '../../../tests/shared/accessibilityTest';
import rtlTest from '../../../tests/shared/rtlTest';
import { act, fireEvent, render, screen, waitFakeTimer } from '../../../tests/utils';
import Button from '../../button';
import ConfigProvider from '../../config-provider';
import Popconfirm from '../../popconfirm';
import Tooltip from '../../tooltip';
import type { AlertRef } from '../Alert';

const { ErrorBoundary } = Alert;

describe('Alert', () => {
  rtlTest(Alert);
  accessibilityTest(Alert);

  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  it('should show close button and could be closed', async () => {
    const errSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
    const onClose = jest.fn();
    const { container } = render(
      <Alert
        title="Warning Text Warning Text Warning TextW arning Text Warning Text Warning TextWarning Text"
        type="warning"
        closable
        onClose={onClose}
      />,
    );

    fireEvent.click(container.querySelector('.ant-alert-close-icon')!);

    expect(onClose).toHaveBeenCalledTimes(1);
    expect(errSpy).not.toHaveBeenCalled();
    errSpy.mockRestore();
  });

  it('custom action', () => {
    const { container } = render(
      <Alert
        message="Success Tips"
        type="success"
        showIcon
        action={
          <Button size="small" type="text">
            UNDO
          </Button>
        }
        closable
      />,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should sets data attributes on alert when pass attributes to props', () => {
    render(
      <Alert data-test="test-id" data-id="12345" aria-describedby="some-label" message={null} />,
    );
    const alert = screen.getByRole('alert');
    expect(alert).toHaveAttribute('data-test', 'test-id');
    expect(alert).toHaveAttribute('data-id', '12345');
    expect(alert).toHaveAttribute('aria-describedby', 'some-label');
  });

  it('sets role attribute on input', () => {
    render(<Alert role="status" message={null} />);

    expect(screen.getByRole('status')).toBeInTheDocument();
  });

  it('should show error as ErrorBoundary when children have error', () => {
    const warnSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
    expect(warnSpy).toHaveBeenCalledTimes(0);
    // @ts-expect-error
    const ThrowError = () => <NotExisted />;
    render(
      <ErrorBoundary>
        <ThrowError />
      </ErrorBoundary>,
    );

    expect(screen.getByRole('alert')).toHaveTextContent(
      'ReferenceError: NotExisted is not defined',
    );
    warnSpy.mockRestore();
  });

  it('could be used with Tooltip', async () => {
    render(
      <Tooltip title="xxx" mouseEnterDelay={0}>
        <Alert
          message="Warning Text Warning Text Warning TextW arning Text Warning Text Warning TextWarning Text"
          type="warning"
        />
      </Tooltip>,
    );

    await userEvent.hover(screen.getByRole('alert'));

    await waitFakeTimer();

    expect(document.querySelector<HTMLDivElement>('.ant-tooltip')).toBeInTheDocument();
  });

  it('could be used with Popconfirm', async () => {
    render(
      <Popconfirm title="xxx">
        <Alert
          message="Warning Text Warning Text Warning TextW arning Text Warning Text Warning TextWarning Text"
          type="warning"
        />
      </Popconfirm>,
    );
    await userEvent.click(screen.getByRole('alert'));

    act(() => {
      jest.runAllTimers();
    });

    expect(screen.getByRole('tooltip')).toBeInTheDocument();
  });

  it('could accept none react element icon', () => {
    render(<Alert title="Success Tips" type="success" showIcon icon="icon" />);

    expect(screen.getByRole('alert')).toHaveTextContent(/success tips/i);
    expect(screen.getByRole('alert')).toHaveTextContent(/icon/i);
  });

  it('should not render title div when no title', () => {
    const { container } = render(<Alert description="description" />);
    expect(!!container.querySelector('.ant-alert-title')).toBe(false);
  });

  it('close button should be hidden when closeIcon setting to null or false', () => {
    const { container, rerender } = render(<Alert closeIcon={null} />);
    expect(container.querySelector('.ant-alert-close-icon')).toBeFalsy();
    rerender(<Alert closeIcon={false} />);
    expect(container.querySelector('.ant-alert-close-icon')).toBeFalsy();
    rerender(<Alert closeIcon />);
    expect(container.querySelector('.ant-alert-close-icon')).toBeTruthy();
    rerender(<Alert />);
    expect(container.querySelector('.ant-alert-close-icon')).toBeFalsy();
  });

  it('close button should be support aria-* by closable', () => {
    const { container, rerender } = render(<Alert />);
    expect(container.querySelector('*[aria-label]')).toBeFalsy();
    rerender(<Alert closable={{ 'aria-label': 'Close' }} closeIcon="CloseIcon" />);
    expect(container.querySelector('[aria-label="Close"]')).toBeTruthy();
    rerender(<Alert closable={{ 'aria-label': 'Close' }} closeText="CloseText" />);
    expect(container.querySelector('[aria-label="Close"]')).toBeTruthy();
    rerender(<Alert closable={{ 'aria-label': 'Close', closeIcon: 'CloseIconProp' }} />);
    expect(container.querySelector('[aria-label="Close"]')).toBeTruthy();
  });
  it('close button should be support custom icon by closable', () => {
    const { container, rerender } = render(<Alert />);
    expect(container.querySelector('.ant-alert-close-icon')).toBeFalsy();
    rerender(<Alert closable={{ closeIcon: 'CloseBtn' }} />);
    expect(container.querySelector('.ant-alert-close-icon')?.textContent).toBe('CloseBtn');
    rerender(<Alert closable={{ closeIcon: 'CloseBtn' }} closeIcon="CloseBtn2" />);
    expect(container.querySelector('.ant-alert-close-icon')?.textContent).toBe('CloseBtn');
    rerender(<Alert closable={{ closeIcon: 'CloseBtn' }} closeText="CloseBtn3" />);
    expect(container.querySelector('.ant-alert-close-icon')?.textContent).toBe('CloseBtn');
    rerender(<Alert closeText="CloseBtn2" />);
    expect(container.querySelector('.ant-alert-close-icon')?.textContent).toBe('CloseBtn2');
    rerender(<Alert closeIcon="CloseBtn3" />);
    expect(container.querySelector('.ant-alert-close-icon')?.textContent).toBe('CloseBtn3');
  });

  it('should warning when using closeText', () => {
    resetWarned();
    const warnSpy = jest.spyOn(console, 'error').mockImplementation(() => {});

    const { container } = render(<Alert closeText="close" />);

    expect(warnSpy).toHaveBeenCalledWith(
      `Warning: [antd: Alert] \`closeText\` is deprecated. Please use \`closable.closeIcon\` instead.`,
    );

    expect(container.querySelector('.ant-alert-close-icon')?.textContent).toBe('close');

    warnSpy.mockRestore();
  });

  it('should support id and ref', () => {
    const alertRef = React.createRef<AlertRef>();
    const { container } = render(<Alert id="test-id" ref={alertRef} />);
    const element = container.querySelector<HTMLDivElement>('#test-id');
    expect(element).toBeTruthy();
    expect(alertRef.current?.nativeElement).toBeTruthy();
    expect(alertRef.current?.nativeElement).toBe(element);
  });
  it('should apply custom styles to Alert', () => {
    const customClassNames = {
      root: 'custom-root',
      icon: 'custom-icon',
      section: 'custom-section',
      title: 'custom-title',
      description: 'custom-description',
      actions: 'custom-actions',
    };
    const customStyles = {
      root: { color: 'red' },
      icon: { backgroundColor: 'rgba(0, 0, 0, 0.5)' },
      section: { padding: '20px' },
      title: { backgroundColor: 'blue' },
      description: { fontSize: '20px' },
      actions: { color: 'green' },
    };

    render(
      <Alert
        styles={customStyles}
        classNames={customClassNames}
        title="Info Text"
        showIcon
        description="Info Description Info Description Info Description Info Description"
        type="info"
        action={
          <div>
            <button type="button">Accept</button>
            <button type="button">Decline</button>
          </div>
        }
      />,
    );

    const rootElement = document.querySelector('.ant-alert') as HTMLElement;
    const iconElement = document.querySelector('.ant-alert-icon') as HTMLElement;
    const sectionElement = document.querySelector('.ant-alert-section') as HTMLElement;
    const titleElement = document.querySelector('.ant-alert-title') as HTMLElement;
    const descriptionElement = document.querySelector('.ant-alert-description') as HTMLElement;
    const actionElement = document.querySelector('.ant-alert-actions') as HTMLElement;

    // check classNames
    expect(rootElement.classList).toContain('custom-root');
    expect(iconElement.classList).toContain('custom-icon');
    expect(sectionElement.classList).toContain('custom-section');
    expect(titleElement.classList).toContain('custom-title');
    expect(descriptionElement.classList).toContain('custom-description');
    expect(actionElement.classList).toContain('custom-actions');

    // check styles
    expect(rootElement.style.color).toBe('red');
    expect(iconElement.style.backgroundColor).toBe('rgba(0, 0, 0, 0.5)');
    expect(sectionElement.style.padding).toBe('20px');
    expect(titleElement.style.backgroundColor).toBe('blue');
    expect(descriptionElement.style.fontSize).toBe('20px');
    expect(actionElement.style.color).toBe('green');
  });

  it('should support custom icons via global config', () => {
    render(
      <ConfigProvider alert={{ icons: { success: <span>foobar</span>, close: 'bamboo' } }}>
        <Alert type="success" showIcon closable />
      </ConfigProvider>,
    );
    expect(screen.getByText('foobar')).toBeVisible();
    expect(screen.getByText('bamboo')).toBeVisible();
  });

  it('should perfer custom icons via props over global config', () => {
    render(
      <ConfigProvider alert={{ icons: { success: <span>foobar</span>, close: 'bamboo' } }}>
        <Alert type="success" showIcon closable icons={{ success: 'hahaha' }} />
      </ConfigProvider>,
    );
    expect(screen.getByText('hahaha')).toBeVisible();
    expect(screen.getByText('bamboo')).toBeVisible();
  });
});
