import * as React from 'react';
import classNames from 'classnames';

import { devUseWarning } from '../_util/warning';
import { ConfigContext } from '../config-provider';
import type { AntAnchor } from './Anchor';
import AnchorContext from './context';

export interface AnchorLinkBaseProps {
  prefixCls?: string;
  href: string;
  target?: string;
  title: React.ReactNode;
  className?: string;
  replace?: boolean;
}

export interface AnchorLinkProps extends AnchorLinkBaseProps {
  children?: React.ReactNode;
}

const AnchorLink: React.FC<AnchorLinkProps> = (props) => {
  const {
    href,
    title,
    prefixCls: customizePrefixCls,
    children,
    className,
    target,
    replace,
  } = props;

  const context = React.useContext<AntAnchor | undefined>(AnchorContext);

  const {
    registerLink,
    unregisterLink,
    scrollTo,
    onClick,
    activeLink,
    direction,
    classNames: mergedClassNames,
    styles: mergedStyles,
  } = context || {};

  React.useEffect(() => {
    registerLink?.(href);
    return () => {
      unregisterLink?.(href);
    };
  }, [href]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    onClick?.(e, { title, href });
    scrollTo?.(href);
    if (replace) {
      e.preventDefault();
      window.location.replace(href);
    }
  };

  // =================== Warning =====================
  if (process.env.NODE_ENV !== 'production') {
    const warning = devUseWarning('Anchor.Link');

    warning(
      !children || direction !== 'horizontal',
      'usage',
      '`Anchor.Link children` is not supported when `Anchor` direction is horizontal',
    );
  }

  const { getPrefixCls } = React.useContext(ConfigContext);

  const prefixCls = getPrefixCls('anchor', customizePrefixCls);

  const active = activeLink === href;

  const wrapperClassName = classNames(`${prefixCls}-link`, className, mergedClassNames?.item, {
    [`${prefixCls}-link-active`]: active,
  });

  const titleClassName = classNames(`${prefixCls}-link-title`, mergedClassNames?.title, {
    [`${prefixCls}-link-title-active`]: active,
  });

  return (
    <div className={wrapperClassName} style={mergedStyles?.item}>
      <a
        className={titleClassName}
        style={mergedStyles?.title}
        href={href}
        title={typeof title === 'string' ? title : ''}
        target={target}
        onClick={handleClick}
      >
        {title}
      </a>
      {direction !== 'horizontal' ? children : null}
    </div>
  );
};

export default AnchorLink;
