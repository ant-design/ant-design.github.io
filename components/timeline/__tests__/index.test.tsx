import React from 'react';

import type { TimelineProps } from '..';
import TimeLine from '..';
import mountTest from '../../../tests/shared/mountTest';
import rtlTest from '../../../tests/shared/rtlTest';
import { render } from '../../../tests/utils';

const renderFactory = (timeLineProps: TimelineProps) =>
  render(
    <TimeLine
      {...timeLineProps}
      items={[
        {
          children: 'foo',
        },
        {
          children: 'bar',
        },
        {
          children: 'baz',
        },
      ]}
    />,
  );

describe('TimeLine', () => {
  mountTest(TimeLine);
  mountTest(TimeLine.Item);
  rtlTest(TimeLine);
  rtlTest(TimeLine.Item);

  describe('render TimeLine.Item', () => {
    it('TimeLine.Item  should correctly', () => {
      const errSpy = jest.spyOn(console, 'error').mockImplementation(() => {});

      const { container } = render(
        <TimeLine reverse>
          <TimeLine.Item>foo</TimeLine.Item>
          <TimeLine.Item>bar</TimeLine.Item>
          <TimeLine.Item>baz</TimeLine.Item>
        </TimeLine>,
      );

      // has 3 timeline item
      expect(container.querySelectorAll('li.ant-timeline-item')).toHaveLength(3);

      // has only 1 timeline item is marked as the last item
      expect(container.querySelectorAll('li.ant-timeline-item-last')).toHaveLength(1);

      // its last item is marked as the last item
      expect(container.querySelectorAll('li.ant-timeline-item')[2]).toHaveClass(
        'ant-timeline-item-last',
      );

      expect(errSpy).toHaveBeenCalledWith(
        'Warning: [antd: Timeline] `Timeline.Item` is deprecated. Please use `items` instead.',
      );
      errSpy.mockRestore();
    });

    it('has extra pending timeline item', () => {
      const { container } = render(
        <TimeLine pending={<div>pending...</div>} reverse mode="alternate">
          <TimeLine.Item>foo</TimeLine.Item>
          <TimeLine.Item position="right">bar</TimeLine.Item>
          <TimeLine.Item position="left">baz</TimeLine.Item>
        </TimeLine>,
      );
      expect(container.querySelectorAll('li.ant-timeline-item-pending')).toHaveLength(1);
    });

    it("has no pending dot if without passing a truthy 'pending' prop", () => {
      const { queryByText } = render(
        <TimeLine pendingDot={<i>dot</i>} reverse>
          <TimeLine.Item>foo</TimeLine.Item>
          <TimeLine.Item>bar</TimeLine.Item>
          <TimeLine.Item position="right">baz</TimeLine.Item>
        </TimeLine>,
      );
      expect(queryByText('dot')).toBeFalsy();
    });
  });

  it('renders items without passing any props correctly', () => {
    const { container } = renderFactory({});

    // has 3 timeline item
    expect(container.querySelectorAll('li.ant-timeline-item')).toHaveLength(3);

    // has only 1 timeline item is marked as the last item
    expect(container.querySelectorAll('li.ant-timeline-item-last')).toHaveLength(1);

    // its last item is marked as the last item
    expect(container.querySelectorAll('li.ant-timeline-item')[2]).toHaveClass(
      'ant-timeline-item-last',
    );
  });

  describe('renders pending item', () => {
    const pending = <div>pending...</div>;
    const pendingDot = <i>dot</i>;

    it('has one extra timeline item', () => {
      const { container } = renderFactory({ pending });
      expect(container.querySelectorAll('li.ant-timeline-item')).toHaveLength(4);
    });

    it('has extra pending timeline item', () => {
      const { container } = renderFactory({ pending });
      expect(container.querySelectorAll('li.ant-timeline-item-pending')).toHaveLength(1);
    });

    it("renders the pending timeline item as long as it receive a truthy prop value to 'pending'", () => {
      const { container } = renderFactory({ pending: true });
      expect(container.querySelector('li.ant-timeline-item-pending')).toBeTruthy();
    });

    it('its last item is marked as the pending item', () => {
      const { container } = renderFactory({ pending });
      const items = container.querySelectorAll('li.ant-timeline-item');
      expect(items[items.length - 1]).toHaveClass('ant-timeline-item-pending');
    });

    it('its second to last item is marked as the last item', () => {
      const { container } = renderFactory({ pending });
      const items = container.querySelectorAll('li.ant-timeline-item');
      expect(items[items.length - 2]).toHaveClass('ant-timeline-item-last');
    });

    it('has the correct pending node', () => {
      const { container, getByText } = renderFactory({ pending });
      expect(container.querySelector('li.ant-timeline-item-pending')).toContainElement(
        getByText('pending...'),
      );
    });

    it('has the correct pending dot node', () => {
      const { container, getByText } = renderFactory({ pending, pendingDot });
      expect(container.querySelector('li.ant-timeline-item-pending')).toContainElement(
        getByText('dot'),
      );
    });

    it("has no pending dot if without passing a truthy 'pending' prop", () => {
      const { queryByText } = renderFactory({ pendingDot });
      expect(queryByText('dot')).toBeFalsy();
    });
  });

  describe('the item rendering sequence is controlled by reverse', () => {
    const getTextContents = (nodeList: NodeListOf<HTMLDivElement>) =>
      Array.from(nodeList).map((node) => node?.textContent);

    it('items is in order when prop reverse is false', () => {
      const { container } = renderFactory({ reverse: false });
      const textContents = getTextContents(
        container.querySelectorAll('.ant-timeline-item-content'),
      );
      expect(textContents).toEqual(['foo', 'bar', 'baz']);
    });

    it('items is reversed when prop reverse is true', () => {
      const { container } = renderFactory({ reverse: true });
      const textContents = getTextContents(
        container.querySelectorAll('.ant-timeline-item-content'),
      );
      expect(textContents).toEqual(['baz', 'bar', 'foo']);
    });
  });

  describe('renders items reversely and with pending item', () => {
    const pending = <div>pending...</div>;

    it('its last item is marked as the last item', () => {
      const { container } = renderFactory({ pending, reverse: true });
      const items = container.querySelectorAll('li.ant-timeline-item');
      expect(items[items.length - 1]).toHaveClass('ant-timeline-item-last');
    });

    it('its first item is marked as the pending item', () => {
      const { container } = renderFactory({ pending, reverse: true });
      expect(container.querySelector('li.ant-timeline-item')).toHaveClass(
        'ant-timeline-item-pending',
      );
    });
  });

  it('renders Timeline item with label correctly', () => {
    const label = '2020-01-01';
    const { container } = render(
      <TimeLine
        items={[
          {
            label,
            children: 'foo',
          },
          {
            children: 'bar',
          },
          {
            children: 'baz',
          },
        ]}
      />,
    );
    expect(container.querySelectorAll('.ant-timeline-label')).toHaveLength(1);
    expect(container.querySelector('.ant-timeline-item-label')).toHaveTextContent(label);
  });

  it('TimeLine className should correctly', () => {
    const { container } = renderFactory({ className: 'timelineBox' });

    expect(container.querySelector('.ant-timeline')).toHaveClass('timelineBox');

    expect(container.querySelectorAll('li.ant-timeline-item')[0]).not.toHaveClass('timelineBox');
  });

  it('TimeLineItem className should correctly', () => {
    const { container } = render(
      <TimeLine
        items={[
          {
            className: 'test',
            children: 'foo',
          },
        ]}
      />,
    );

    expect(container.querySelector('.test')).not.toBeNull();
  });

  describe('prop: color', () => {
    const presetColors = ['blue', 'red', 'green', 'gray'];

    presetColors.forEach((color) => {
      it(`className should have a preset color ${color}`, () => {
        const { container } = render(
          <TimeLine
            items={[
              {
                color,
                children: 'foo',
              },
            ]}
          />,
        );
        expect(container.querySelector('.ant-timeline-item-head')).toHaveClass(
          `ant-timeline-item-head-${color}`,
        );
      });
    });

    // other non-preset colors
    const nonPresetColors = ['rgb(255, 0, 0)', 'rgba(255, 0, 0, 0.5)', '#ff0000', '#f00'].filter(
      (color) => !presetColors.includes(color),
    );

    // https://github.com/ant-design/ant-design/issues/39386
    nonPresetColors.forEach((color) => {
      it(`className should not have a non-preset color ${color}`, () => {
        const { container } = render(
          <TimeLine
            items={[
              {
                color,
                children: 'foo',
              },
            ]}
          />,
        );
        expect(container.querySelector('.ant-timeline-item-head')).not.toHaveClass(
          `ant-timeline-item-head-${color}`,
        );
      });
    });
  });
  it('support classNames and styles', () => {
    const customClassNames = {
      root: 'test-root',
      item: 'test-item',
      label: 'test-label',
      indicator: 'test-indicator',
      content: 'test-content',
      tail: 'test-tail',
    };
    const customStyles = {
      root: { color: 'red' },
      item: { color: 'green' },
      label: { color: 'blue' },
      indicator: { color: 'yellow' },
      content: { color: 'purple' },
      tail: { color: 'orange' },
    };
    const { container } = render(
      <TimeLine
        classNames={customClassNames}
        styles={customStyles}
        mode="left"
        items={[
          {
            label: '2015-09-01',
            children: 'Create a services',
          },
          {
            label: '2015-09-01 09:12:11',
            children: 'Solve initial network problems',
          },
          {
            children: 'Technical testing',
          },
          {
            label: '2015-09-01 09:12:11',
            children: 'Network problems being solved',
          },
        ]}
      />,
    );
    const root = container.querySelector('.ant-timeline');
    const item = container.querySelector('.ant-timeline-item');
    const label = container.querySelector('.ant-timeline-item-label');
    const indicator = container.querySelector('.ant-timeline-item-head');
    const content = container.querySelector('.ant-timeline-item-content');
    const tail = container.querySelector('.ant-timeline-item-tail');
    expect(root).toHaveClass(customClassNames.root);
    expect(item).toHaveClass(customClassNames.item);
    expect(label).toHaveClass(customClassNames.label);
    expect(indicator).toHaveClass(customClassNames.indicator);
    expect(content).toHaveClass(customClassNames.content);
    expect(tail).toHaveClass(customClassNames.tail);
    expect(root).toHaveStyle(customStyles.root);
    expect(item).toHaveStyle(customStyles.item);
    expect(label).toHaveStyle(customStyles.label);
    expect(indicator).toHaveStyle(customStyles.indicator);
    expect(content).toHaveStyle(customStyles.content);
    expect(tail).toHaveStyle(customStyles.tail);
  });
});
