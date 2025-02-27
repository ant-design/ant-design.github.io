import React from 'react';
import { CheckCircleOutlined } from '@ant-design/icons';

import Tag from '..';
import { resetWarned } from '../../_util/warning';
import mountTest from '../../../tests/shared/mountTest';
import rtlTest from '../../../tests/shared/rtlTest';
import { act, fireEvent, render } from '../../../tests/utils';

(global as any).isVisible = true;

jest.mock('rc-util/lib/Dom/isVisible', () => {
  const mockFn = () => (global as any).isVisible;
  return mockFn;
});

function waitRaf() {
  act(() => {
    jest.advanceTimersByTime(100);
  });
}

describe('Tag', () => {
  mountTest(Tag);
  mountTest(() => <Tag.CheckableTag checked={false} />);
  rtlTest(Tag);
  rtlTest(() => <Tag.CheckableTag checked={false} />);

  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  it('should be closable', () => {
    const onClose = jest.fn();
    const { container } = render(<Tag closable onClose={onClose} />);
    expect(container.querySelectorAll('.anticon-close').length).toBe(1);
    expect(container.querySelectorAll('.ant-tag:not(.ant-tag-hidden)').length).toBe(1);
    fireEvent.click(container.querySelectorAll('.anticon-close')[0]);
    expect(onClose).toHaveBeenCalled();
    act(() => {
      jest.runAllTimers();
    });
    expect(container.querySelectorAll('.ant-tag:not(.ant-tag-hidden)').length).toBe(0);
  });

  it('should not be closed when prevent default', () => {
    const onClose = (e: React.MouseEvent<HTMLElement>) => {
      e.preventDefault();
    };
    const { container } = render(<Tag closable onClose={onClose} />);
    expect(container.querySelectorAll('.anticon-close').length).toBe(1);
    expect(container.querySelectorAll('.ant-tag:not(.ant-tag-hidden)').length).toBe(1);
    fireEvent.click(container.querySelectorAll('.anticon-close')[0]);
    act(() => {
      jest.runAllTimers();
    });
    expect(container.querySelectorAll('.ant-tag:not(.ant-tag-hidden)').length).toBe(1);
  });

  it('show close button by closeIcon', () => {
    const { container } = render(
      <>
        <Tag className="tag1" closable closeIcon="close" />
        <Tag className="tag2" closable closeIcon />
        <Tag className="tag3" closable closeIcon={false} />
        <Tag className="tag4" closable closeIcon={null} />
        <Tag className="tag5" closable={false} closeIcon="close" />
        <Tag className="tag6" closable={false} closeIcon />
        <Tag className="tag7" closable={false} closeIcon={false} />
        <Tag className="tag8" closable={false} closeIcon={null} />
        <Tag className="tag9" closeIcon="close" />
        <Tag className="tag10" closeIcon />
        <Tag className="tag11" closeIcon={false} />
        <Tag className="tag12" closeIcon={null} />
      </>,
    );

    expect(container.querySelectorAll('.ant-tag-close-icon').length).toBe(6);
    ['tag1', 'tag2', 'tag3', 'tag4', 'tag9', 'tag10'].forEach((tag) => {
      expect(container.querySelector(`.${tag} .ant-tag-close-icon`)).toBeTruthy();
    });
    ['tag5', 'tag6', 'tag7', 'tag8', 'tag11', 'tag12'].forEach((tag) => {
      expect(container.querySelector(`.${tag} .ant-tag-close-icon`)).toBeFalsy();
    });
  });

  it('should trigger onClick on Tag', () => {
    const onClick = jest.fn();
    const { container } = render(<Tag onClick={onClick} />);
    const tagElement = container.querySelector<HTMLSpanElement>('.ant-tag')!;
    fireEvent.click(tagElement);
    expect(onClick).toHaveBeenCalled();
  });

  it('should trigger onClick on Tag.CheckableTag', () => {
    const onClick = jest.fn();
    const { container } = render(<Tag.CheckableTag checked={false} onClick={onClick} />);
    const tagElement = container.querySelector<HTMLSpanElement>('.ant-tag')!;
    fireEvent.click(tagElement);
    expect(onClick).toHaveBeenCalled();
  });

  // https://github.com/ant-design/ant-design/issues/20344
  it('should not trigger onClick when click close icon', () => {
    const onClose = jest.fn();
    const onClick = jest.fn();
    const { container } = render(<Tag closable onClose={onClose} onClick={onClick} />);
    fireEvent.click(container.querySelectorAll('.anticon-close')[0]);
    expect(onClose).toHaveBeenCalled();
    expect(onClick).not.toHaveBeenCalled();
  });

  it('should only render icon when no children', () => {
    const { container } = render(<Tag icon={<CheckCircleOutlined />} />);
    expect(container.querySelector('.ant-tag ')?.childElementCount).toBe(1);
  });

  it('deprecated warning', () => {
    resetWarned();
    const errSpy = jest.spyOn(console, 'error').mockImplementation(() => {});

    const { container } = render(<Tag visible={false} />);
    expect(errSpy).toHaveBeenCalledWith(
      'Warning: [antd: Tag] `visible` is deprecated. Please use `visible && <Tag />` instead.',
    );
    expect(container.querySelector('.ant-tag-hidden')).toBeTruthy();

    errSpy.mockRestore();
  });

  describe('visibility', () => {
    it('can be controlled by visible with visible as initial value', () => {
      const { container, rerender } = render(<Tag visible />);
      expect(container.querySelector('.ant-tag-hidden')).toBeFalsy();

      rerender(<Tag visible={false} />);
      act(() => {
        jest.runAllTimers();
      });
      expect(container.querySelector('.ant-tag-hidden')).toBeTruthy();

      rerender(<Tag visible />);
      act(() => {
        jest.runAllTimers();
      });
      expect(container.querySelector('.ant-tag-hidden')).toBeFalsy();
    });

    it('can be controlled by visible with hidden as initial value', () => {
      const { container, rerender } = render(<Tag visible={false} />);
      expect(container.querySelector('.ant-tag-hidden')).toBeTruthy();

      rerender(<Tag visible />);
      act(() => {
        jest.runAllTimers();
      });
      expect(container.querySelector('.ant-tag-hidden')).toBeFalsy();

      rerender(<Tag visible={false} />);
      act(() => {
        jest.runAllTimers();
      });
      expect(container.querySelector('.ant-tag-hidden')).toBeTruthy();
    });
  });

  describe('CheckableTag', () => {
    it('support onChange', () => {
      const onChange = jest.fn();
      const { container } = render(<Tag.CheckableTag checked={false} onChange={onChange} />);
      fireEvent.click(container.querySelectorAll('.ant-tag')[0]);
      expect(onChange).toHaveBeenCalledWith(true);
    });

    it('should support ref', () => {
      const ref = React.createRef<HTMLButtonElement>();
      const { container } = render(
        <Tag.CheckableTag checked={false} ref={ref}>
          Tag Text
        </Tag.CheckableTag>,
      );
      const refElement = ref.current;
      const queryTarget = container.querySelector('.ant-tag');
      expect(refElement instanceof HTMLButtonElement).toBe(true);
      expect(refElement?.textContent).toBe('Tag Text');
      expect(queryTarget?.textContent).toBe('Tag Text');
      expect(refElement).toBe(queryTarget);
    });
  });
  it('should onClick is undefined', async () => {
    const { container } = render(<Tag onClick={undefined} />);
    fireEvent.click(container.querySelectorAll('.ant-tag')[0]);
    waitRaf();
    expect(document.querySelector('.ant-wave')).toBeFalsy();
  });
  it('should support aria-* in closable', () => {
    const { container } = render(<Tag closable={{ closeIcon: 'X', 'aria-label': 'CloseBtn' }} />);
    expect(container.querySelector('.ant-tag-close-icon')?.getAttribute('aria-label')).toEqual(
      'CloseBtn',
    );
    expect(container.querySelector('.ant-tag-close-icon')?.textContent).toEqual('X');
  });
  it('should display textContent and aria-label correctly ', () => {
    const { container } = render(<Tag closeIcon="X" />);
    expect(container.querySelector('.ant-tag-close-icon')?.getAttribute('aria-label')).toEqual(
      'Close',
    );
    expect(container.querySelector('.ant-tag-close-icon')?.textContent).toEqual('X');
  });
});
