import React from 'react';
import { spyElementPrototypes } from 'rc-util/lib/test/domHook';

import Masonry from '..';
import type { MasonryProps } from '..';
import { render, triggerResize, waitFakeTimer } from '../../../tests/utils';

const resizeMasonry = async () => {
  triggerResize(document.body.querySelector('.ant-masonry')!);
  await waitFakeTimer();
};

// Mock for `responsiveObserve` to test `unsubscribe` call
jest.mock('../../_util/responsiveObserver', () => {
  const modules = jest.requireActual('../../_util/responsiveObserver');
  const originHook = modules.default;

  const useMockResponsiveObserver = (...args: any[]) => {
    const entity = originHook(...args);
    if (!entity.unsubscribe.mocked) {
      const originUnsubscribe = entity.unsubscribe;
      entity.unsubscribe = (...uArgs: any[]) => {
        const inst = global as any;
        inst.unsubscribeCnt = (inst.unsubscribeCnt || 0) + 1;

        originUnsubscribe.call(entity, ...uArgs);
      };
      entity.unsubscribe.mocked = true;
    }

    return entity;
  };

  return {
    ...modules,
    __esModule: true,
    default: useMockResponsiveObserver,
  };
});

describe('Masonry', () => {
  let minWidth = '';

  beforeAll(() => {
    jest.spyOn(window, 'matchMedia').mockImplementation(
      (query) =>
        ({
          addListener: (cb: (e: { matches: boolean }) => void) => {
            cb({ matches: query === `(min-width: ${minWidth})` });
          },
          removeListener: jest.fn(),
          matches: query === `(min-width: ${minWidth})`,
        }) as any,
    );

    spyElementPrototypes(HTMLElement, {
      getBoundingClientRect() {
        const recordElement = (this as unknown as HTMLElement).querySelector(
          '.bamboo',
        ) as HTMLElement;
        return {
          height: recordElement.hasAttribute('data-height')
            ? Number(recordElement.getAttribute('data-height'))
            : 100,
          width: 100,
        };
      },
    });
  });

  beforeEach(() => {
    jest.useFakeTimers();
    minWidth = '1200px';
    (global as any).unsubscribeCnt = 0;
  });

  afterEach(async () => {
    await waitFakeTimer();

    jest.clearAllTimers();
    jest.useRealTimers();
    jest.restoreAllMocks();
    document.body.innerHTML = '';
  });

  const heights = [150, 30, 90, 70, 110, 150, 130, 80, 50, 90, 100, 150, 30, 50, 80];

  const DemoMasonry = (props: Partial<MasonryProps>) => {
    const items = heights.map((height, index) => ({
      key: `item-${index}`,
      data: height,
    }));

    return (
      <div
        style={{
          width: '820px',
        }}
      >
        <Masonry
          columns={3}
          itemRender={({ data, index, column }) => (
            <div
              style={{ height: data }}
              data-height={data}
              className="bamboo"
              data-column={column}
            >
              {index + 1}
            </div>
          )}
          items={items}
          {...props}
        />
      </div>
    );
  };

  it('should render correctly', async () => {
    const onSortChange = jest.fn();
    const { container } = render(<DemoMasonry columns={3} onSortChange={onSortChange} />);
    await resizeMasonry();

    expect(container.querySelector('.ant-masonry')).toHaveStyle({
      height: '480px',
    });

    const columns = Array.from(container.querySelectorAll('.bamboo')).map((ele) =>
      Number(ele.getAttribute('data-column')),
    );

    expect(onSortChange).toHaveBeenCalledWith(
      heights.map((height, index) =>
        expect.objectContaining({
          column: columns[index],
          data: height,
          key: `item-${index}`,
        }),
      ),
    );
  });

  it('should handle responsive columns', async () => {
    minWidth = '576px';

    const { container } = render(<DemoMasonry columns={{ xs: 1, sm: 2, md: 3 }} />);

    await resizeMasonry();

    const elements = container.querySelectorAll('.bamboo');
    const columnOrders = Array.from(elements).map((element) => element.getAttribute('data-column'));

    expect(columnOrders[0]).toBe('0');
    expect(columnOrders[1]).toBe('1');
    expect(columnOrders[2]).toBe('1');
  });

  it('should rearrange after item update', async () => {
    const items = [20, 10, 30, 40, 10].map((height, index) => ({
      key: index,
      data: { height, id: index },
    }));

    const renderDemo = (nextItems: typeof items) => (
      <DemoMasonry
        items={nextItems}
        itemRender={({ data: { height, id }, column }: any) => (
          <div className="bamboo" style={{ height }} data-height={height} data-column={column}>
            {id}
          </div>
        )}
      />
    );

    const { container, rerender } = render(renderDemo(items));
    await resizeMasonry();

    const getColumns = () =>
      Array.from(container.querySelectorAll('.bamboo')).map((ele) =>
        [ele.textContent, ele.getAttribute('data-column')].join('-'),
      );

    // Origin
    expect(getColumns()).toEqual(['0-0', '1-1', '2-2', '3-1', '4-0']);

    // remove one
    items[1].data.height = 50;
    rerender(renderDemo([...items]));
    await resizeMasonry();
    expect(getColumns()).toEqual(['0-0', '1-1', '2-2', '3-0', '4-2']);
  });

  it('not crash for empty items', async () => {
    render(<Masonry />);
    await resizeMasonry();
  });

  describe('gutter', () => {
    const getGutter = () => {
      const itemElements = document.body.querySelectorAll<HTMLElement>('.ant-masonry-item');

      const horizontalGutter = itemElements[0].style
        .getPropertyValue('--item-width')
        .match(/\d+px/)![0];
      const verticalGutter = itemElements[2].style.top.match(/\d+px/)![0];

      return [parseInt(horizontalGutter, 10), parseInt(verticalGutter, 10)];
    };

    const renderGutter = (gutter: MasonryProps['gutter']) => (
      <DemoMasonry
        columns={2}
        items={[
          {
            key: 0,
            data: 0,
          },
          {
            key: 1,
            data: 23,
          },
          {
            key: 2,
            data: 33,
          },
        ]}
        gutter={gutter}
      />
    );

    it('should handle array gutter', async () => {
      render(renderGutter([8, 16]));
      await resizeMasonry();

      expect(getGutter()).toEqual([8, 16]);
    });

    it('should handle responsive gutter', async () => {
      minWidth = '576px';

      render(renderGutter({ sm: 8, md: 16 }));
      await resizeMasonry();

      expect(getGutter()).toEqual([8, 8]);
    });

    it('should handle responsive gutter with array', async () => {
      const mockMatchMedia = jest.spyOn(window, 'matchMedia').mockImplementation(
        (query) =>
          ({
            addListener: (cb: (e: { matches: boolean }) => void) => {
              cb({ matches: query === '(min-width: 576px)' });
            },
            removeListener: jest.fn(),
            matches: query === '(min-width: 576px)',
          }) as any,
      );

      render(renderGutter([{ sm: 8, md: 32 }, 23]));
      await resizeMasonry();

      expect(getGutter()).toEqual([8, 23]);

      mockMatchMedia.mockRestore();
    });
  });
});
