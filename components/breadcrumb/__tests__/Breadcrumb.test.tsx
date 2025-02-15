import React from 'react';

import { accessibilityTest } from '../../../tests/shared/accessibilityTest';
import mountTest from '../../../tests/shared/mountTest';
import rtlTest from '../../../tests/shared/rtlTest';
import { render, screen } from '../../../tests/utils';
import ConfigProvider from '../../config-provider';
import type { ItemType } from '../Breadcrumb';
import Breadcrumb from '../index';

describe('Breadcrumb', () => {
  mountTest(Breadcrumb);
  rtlTest(Breadcrumb);
  accessibilityTest(Breadcrumb);

  const errorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});

  afterEach(() => {
    errorSpy.mockReset();
  });

  afterAll(() => {
    errorSpy.mockRestore();
  });

  it('warns on non-Breadcrumb.Item and non-Breadcrumb.Separator children', () => {
    const MyCom: React.FC = () => <div>foo</div>;
    render(
      <Breadcrumb>
        <MyCom />
      </Breadcrumb>,
    );
    expect(errorSpy).toHaveBeenCalledWith(
      "Warning: [antd: Breadcrumb] Only accepts Breadcrumb.Item and Breadcrumb.Separator as it's children",
    );
  });

  it('warns on routes', () => {
    render(
      <Breadcrumb
        routes={[
          {
            breadcrumbName: 'yyy',
          } as any,
        ]}
      />,
    );
    expect(errorSpy).toHaveBeenCalledWith(
      'Warning: [antd: Breadcrumb] `routes` is deprecated. Please use `items` instead.',
    );
  });

  it('should render correct', () => {
    const { asFragment } = render(
      <Breadcrumb
        items={[
          {
            path: '',
            title: <span>xxx</span>,
          },
          {
            title: 'yyy',
          },
        ]}
      />,
    );
    expect(asFragment().firstChild).toMatchSnapshot();
  });

  it('Breadcrumb.Item deprecation warning', () => {
    render(
      <Breadcrumb>
        <Breadcrumb.Item>Location</Breadcrumb.Item>
      </Breadcrumb>,
    );
    expect(errorSpy).toHaveBeenCalledWith(
      'Warning: [antd: Breadcrumb] `Breadcrumb.Item and Breadcrumb.Separator` is deprecated. Please use `items` instead.',
    );
  });

  it('Breadcrumb.separator deprecation warning', () => {
    render(
      <Breadcrumb>
        <Breadcrumb.Separator>:</Breadcrumb.Separator>
      </Breadcrumb>,
    );
    expect(errorSpy).toHaveBeenCalledWith(
      'Warning: [antd: Breadcrumb] `Breadcrumb.Item and Breadcrumb.Separator` is deprecated. Please use `items` instead.',
    );
  });

  // https://github.com/ant-design/ant-design/issues/5015
  it('should allow Breadcrumb.Item is null or undefined', () => {
    const { asFragment } = render(
      <Breadcrumb>
        {null}
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        {undefined}
      </Breadcrumb>,
    );
    expect(asFragment().firstChild).toMatchSnapshot();
  });

  // https://github.com/ant-design/ant-design/issues/5542
  it('should not display Breadcrumb Item when its children is falsy', () => {
    const { asFragment } = render(
      <Breadcrumb
        items={[
          {} as any,
          {
            title: 'xxx',
          },
          {
            title: 'yyy',
          },
        ]}
      />,
    );
    expect(asFragment().firstChild).toMatchSnapshot();
  });

  // https://github.com/ant-design/ant-design/issues/18260
  it('filter React.Fragment', () => {
    const { asFragment } = render(
      <Breadcrumb separator="">
        <Breadcrumb.Item>Location</Breadcrumb.Item>
        <Breadcrumb.Separator>:</Breadcrumb.Separator>
        <>
          <Breadcrumb.Item href="">Application Center</Breadcrumb.Item>
          <Breadcrumb.Separator />
        </>
      </Breadcrumb>,
    );
    expect(asFragment().firstChild).toMatchSnapshot();
  });

  it('should render a menu', () => {
    const items: ItemType[] = [
      {
        path: 'index',
        title: 'home',
      },
      {
        path: 'first',
        title: 'first',
        menu: {
          items: [
            {
              path: '/general',
              title: 'General',
            },
            {
              path: '/layout',
              title: 'Layout',
            },
            {
              path: '/navigation',
              title: 'Navigation',
            },
          ],
        },
      },
      {
        path: 'second',
        title: 'second',
      },
      {
        path: 'third',
        title: '',
      },
    ];
    const { asFragment } = render(<Breadcrumb items={items} />);
    expect(asFragment().firstChild).toMatchSnapshot();
  });

  it('should accept undefined items', () => {
    const { asFragment } = render(<Breadcrumb items={undefined!} />);
    expect(asFragment().firstChild).toMatchSnapshot();
  });

  it('should support custom attribute', () => {
    const { asFragment } = render(
      (
        <Breadcrumb
          items={[
            {
              title: 'xxx',
              // @ts-ignore
              'data-custom': 'custom-item',
            },
            {
              title: 'yyy',
            },
          ]}
          data-custom="custom"
        />
      ) as React.ReactElement<any, string | React.JSXElementConstructor<any>>,
    );
    expect(asFragment().firstChild).toMatchSnapshot();
  });

  it('should support React.Fragment and falsy children', () => {
    const { asFragment } = render(
      <Breadcrumb>
        <>
          <Breadcrumb.Item>yyy</Breadcrumb.Item>
          <Breadcrumb.Item>yyy</Breadcrumb.Item>
        </>
        <Breadcrumb.Item>yyy</Breadcrumb.Item>
        {0}
        {null}
        {undefined}
      </Breadcrumb>,
    );
    expect(asFragment().firstChild).toMatchSnapshot();
  });

  // https://github.com/ant-design/ant-design/issues/25975
  it('should support Breadcrumb.Item default separator', () => {
    const MockComponent: React.FC = () => (
      <span>
        <Breadcrumb.Item>Mock Node</Breadcrumb.Item>
      </span>
    );
    const { asFragment } = render(
      <Breadcrumb>
        <Breadcrumb.Item>Location</Breadcrumb.Item>
        <MockComponent />
        <Breadcrumb.Item>Application Center</Breadcrumb.Item>
      </Breadcrumb>,
    );
    expect(asFragment().firstChild).toMatchSnapshot();
  });

  it('should support Breadcrumb.Item customized menu items key', () => {
    const key = 'test-key';
    const { container } = render(
      <Breadcrumb>
        <Breadcrumb.Item dropdownProps={{ open: true }} menu={{ items: [{ key }] }}>
          test-item
        </Breadcrumb.Item>
      </Breadcrumb>,
    );

    const item = container.querySelector<HTMLElement>('.ant-dropdown-menu-item');

    expect(item?.getAttribute('data-menu-id')?.endsWith(key)).toBeTruthy();
  });

  it('should support string `0` and number `0`', () => {
    const { container } = render(
      <Breadcrumb
        items={[
          {
            title: 0,
          },
          {
            title: '0',
          },
        ]}
      />,
    );
    expect(container.querySelectorAll('.ant-breadcrumb-link')[0].textContent).toBe('0');
    expect(container.querySelectorAll('.ant-breadcrumb-link')[1].textContent).toBe('0');
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should not console Error when `overlay` not in props', () => {
    const errSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
    render(<Breadcrumb items={[{ path: '/', title: 'Test' }]} />);
    expect(errSpy).not.toHaveBeenCalled();
    errSpy.mockRestore();
  });

  it('should use `onClick`', async () => {
    const onClick = jest.fn();
    const wrapper = render(<Breadcrumb items={[{ title: 'test', onClick }]} />);
    const item = await wrapper.findByText('test');
    item.click();
    expect(onClick).toHaveBeenCalledTimes(1);
  });
  it('should use `className`', async () => {
    const testClassName = 'testClassName';
    const wrapper = render(<Breadcrumb items={[{ title: 'test', className: testClassName }]} />);
    const item = await wrapper.findByText('test');
    expect(item).toHaveClass(testClassName);
  });

  it('Breadcrumb.Item menu type', () => {
    expect(<Breadcrumb.Item menu={{ selectable: true }} />).toBeTruthy();
  });

  it('dropdownProps in items should be worked', () => {
    render(
      <Breadcrumb
        items={[
          {
            title: 'test',
            menu: {
              items: [
                {
                  key: '1',
                  label: 'label',
                },
              ],
            },
            dropdownProps: { open: true },
          },
        ]}
      />,
    );
    expect(document.querySelector('.ant-dropdown')).toBeTruthy();
  });

  it('Breadcrumb params type test', () => {
    interface Params {
      key1?: number;
      key2?: string;
    }
    expect(
      <Breadcrumb<Params>
        params={{
          key1: 1,
          key2: 'test',
        }}
      />,
    ).toBeTruthy();
  });

  it('should support custom icons via global config', () => {
    render(
      <ConfigProvider breadcrumb={{ icons: { dropdown: <span>foobar</span> } }}>
        <Breadcrumb
          items={[{ title: 'menu', menu: { items: [{ label: 'xxxx' }, { label: 'xxxx' }] } }]}
        />
      </ConfigProvider>,
    );
    expect(screen.getByText('foobar')).toBeTruthy();
  });

  it('should perfer custom icons via props over global config', () => {
    render(
      <ConfigProvider breadcrumb={{ icons: { dropdown: <span>foobar</span> } }}>
        <Breadcrumb
          icons={{ dropdown: 'bamboo' }}
          items={[{ title: 'menu', menu: { items: [{ label: 'xxxx' }, { label: 'xxxx' }] } }]}
        />
      </ConfigProvider>,
    );
    expect(screen.getByText('bamboo')).toBeTruthy();
  });
});
