import React from 'react';
import accessibilityTest from '../../../tests/shared/accessibilityTest';
import mountTest from '../../../tests/shared/mountTest';
import rtlTest from '../../../tests/shared/rtlTest';
import { render } from '../../../tests/utils';
import type { RouteItemType } from '../Breadcrumb';
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

  it('warns on breadcrumbName', () => {
    render(
      <Breadcrumb
        routes={[
          {
            breadcrumbName: 'yyy',
          },
        ]}
      />,
    );
    expect(errorSpy).toHaveBeenCalledWith(
      'Warning: [antd: Breadcrumb] `breadcrumbName` is deprecated. Please use `title` instead.',
    );
  });

  it('should render correct', () => {
    const { asFragment } = render(
      <Breadcrumb
        routes={[
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

  it('overlay deprecation warning', () => {
    render(
      <Breadcrumb
        routes={[
          {
            overlay: <div>menu</div>,
            title: <a href="">General</a>,
          },
        ]}
      />,
    );
    expect(errorSpy).toHaveBeenCalledWith(
      'Warning: [antd: Breadcrumb.Item] `overlay` is deprecated. Please use `menu` instead.',
    );
  });

  it('Breadcrumb.Item deprecation warning', () => {
    render(
      <Breadcrumb>
        <Breadcrumb.Item>Location</Breadcrumb.Item>
      </Breadcrumb>,
    );
    expect(errorSpy).toHaveBeenCalledWith(
      'Warning: [antd: Breadcrumb] `Breadcrumb.Item and Breadcrumb.Separator` is deprecated. Please use `routes` instead.',
    );
  });

  it('Breadcrumb.separator deprecation warning', () => {
    render(
      <Breadcrumb>
        <Breadcrumb.Separator>:</Breadcrumb.Separator>
      </Breadcrumb>,
    );
    expect(errorSpy).toHaveBeenCalledWith(
      'Warning: [antd: Breadcrumb] `Breadcrumb.Item and Breadcrumb.Separator` is deprecated. Please use `routes` instead.',
    );
  });

  // https://github.com/ant-design/ant-design/issues/40204
  it('wrong overlay deprecation warning in Dropdown', () => {
    const menuItems = [
      {
        key: '1',
        label: (
          <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
            General
          </a>
        ),
      },
    ];
    render(
      <Breadcrumb
        routes={[
          {
            menu: { items: menuItems },
            title: <a href="">General</a>,
          },
        ]}
      />,
    );
    expect(errorSpy).not.toHaveBeenCalledWith(
      'Warning: [antd: Dropdown] `overlay` is deprecated. Please use `menu` instead.',
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
        routes={[
          {},
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
    const routes: RouteItemType[] = [
      {
        path: 'index',
        title: 'home',
      },
      {
        path: 'first',
        title: 'first',
        children: [
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
      {
        path: 'second',
        title: 'second',
      },
      {
        path: 'third',
        title: '',
      },
    ];
    const { asFragment } = render(<Breadcrumb routes={routes} />);
    expect(asFragment().firstChild).toMatchSnapshot();
  });

  it('should accept undefined routes', () => {
    const { asFragment } = render(<Breadcrumb routes={undefined} />);
    expect(asFragment().firstChild).toMatchSnapshot();
  });

  it('should support custom attribute', () => {
    const { asFragment } = render(
      (
        <Breadcrumb
          routes={[
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

  it('should support string `0` and number `0`', () => {
    const { container } = render(
      <Breadcrumb
        routes={[
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

  it('should console Error when `overlay` in props', () => {
    const errSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
    render(
      <Breadcrumb
        routes={[
          {
            overlay: <div>test</div>,
          },
        ]}
      />,
    );
    expect(errSpy).toHaveBeenCalledWith(
      'Warning: [antd: Breadcrumb.Item] `overlay` is deprecated. Please use `menu` instead.',
    );
    errSpy.mockRestore();
  });

  it('should not console Error when `overlay` not in props', () => {
    const errSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
    render(<Breadcrumb routes={[{ path: '/', title: 'Test' }]} />);
    expect(errSpy).not.toHaveBeenCalled();
    errSpy.mockRestore();
  });
});
