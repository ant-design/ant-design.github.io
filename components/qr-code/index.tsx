import React, { useMemo, useContext } from 'react';
import { QRCodeCanvas, QRCodeSVG } from 'qrcode.react';
import { ReloadOutlined } from '@ant-design/icons';
import classNames from 'classnames';
import { QRCODE, CLICK_REFRESH } from './constants';
import { ConfigContext } from '../config-provider';
import type { ConfigConsumerProps } from '../config-provider';
import type { QrCodeProps, QRPropsCanvas, QRPropsSVG } from './interface';
import warning from '../_util/warning';
import useStyle from './style/index';
import Popover from '../popover';

const noop = () => {};

const QrCode: React.FC<QrCodeProps> = (props) => {
  const {
    mode = 'canvas',
    value,
    logo = '',
    size = 128,
    bgColor = '#fff',
    fgColor = '#000',
    logoSize = 32,
    popover = false,
    errorLevel = 'L',
    onRefresh = noop,
    style,
    className,
    prefixCls: customizePrefixCls,
    expired = false,
  } = props;
  const { getPrefixCls } = useContext<ConfigConsumerProps>(ConfigContext);
  const prefixCls = getPrefixCls('qrcode', customizePrefixCls);
  const [wrapSSR, hashId] = useStyle(prefixCls);

  const qrCodeProps = useMemo<QRPropsSVG | QRPropsCanvas>(() => {
    const imageSettings: QrCodeProps['imageSettings'] = {
      src: logo,
      x: undefined,
      y: undefined,
      height: logoSize,
      width: logoSize,
      excavate: true,
    };
    return {
      value,
      size,
      level: errorLevel,
      bgColor,
      fgColor,
      imageSettings: logo ? imageSettings : undefined,
    };
  }, [bgColor, errorLevel, fgColor, logo, logoSize, size, value]);

  const qrcode =
    mode === 'svg' ? (
      <QRCodeSVG {...(qrCodeProps as QRPropsSVG)} />
    ) : (
      <QRCodeCanvas {...(qrCodeProps as QRPropsCanvas)} />
    );

  if (!value) {
    return null;
  }

  if (popover) {
    if (!logo) {
      if (process.env.NODE_ENV !== 'production') {
        warning(false, 'QrCode', '`logo` is not in props');
      }
      return null;
    }
    return (
      <Popover trigger="hover" content={qrcode}>
        <img src={logo} width={logoSize} alt="qrcode" />
      </Popover>
    );
  }

  return wrapSSR(
    <div
      style={{ ...style, width: size, height: size }}
      className={classNames(prefixCls, className, hashId)}
    >
      {expired && (
        <div className={`${prefixCls}-mask ${hashId}`} style={{ width: size, height: size }}>
          <span className={`${prefixCls}-icon ${hashId}`}>
            <ReloadOutlined
              className={`${prefixCls}-icon ${hashId}`}
              style={{ marginBlockStart: size / 4 }}
              onClick={onRefresh}
            />
          </span>
          <div>{QRCODE}</div>
          <div>{CLICK_REFRESH}</div>
        </div>
      )}
      {qrcode}
    </div>,
  );
};

export default QrCode;
