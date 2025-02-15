import * as React from 'react';
import { CloseOutlined } from '@ant-design/icons';
import { Panel } from '@rc-component/dialog';
import type { PanelProps } from '@rc-component/dialog/lib/Dialog/Content/Panel';
import classNames from 'classnames';

import { withPureRenderTheme } from '../_util/PurePanel';
import { ConfigContext } from '../config-provider';
import { useComponentConfig } from '../config-provider/context';
import useCSSVarCls from '../config-provider/hooks/useCSSVarCls';
import { ConfirmContent } from './ConfirmDialog';
import type { ModalFuncProps } from './interface';
import { Footer, renderCloseIcon } from './shared';
import useStyle from './style';

export interface PurePanelProps
  extends Omit<PanelProps, 'prefixCls' | 'footer'>,
    Pick<ModalFuncProps, 'type' | 'footer'> {
  prefixCls?: string;
  style?: React.CSSProperties;
}

const PurePanel: React.FC<PurePanelProps> = (props) => {
  const {
    prefixCls: customizePrefixCls,
    className,
    closeIcon,
    closable,
    type,
    title,
    children,
    footer,
    ...restProps
  } = props;
  const { getPrefixCls } = React.useContext(ConfigContext);
  const { icons } = useComponentConfig('modal');

  const rootPrefixCls = getPrefixCls();
  const prefixCls = customizePrefixCls || getPrefixCls('modal');
  const rootCls = useCSSVarCls(rootPrefixCls);
  const [wrapCSSVar, hashId, cssVarCls] = useStyle(prefixCls, rootCls);

  const confirmPrefixCls = `${prefixCls}-confirm`;

  // Choose target props by confirm mark
  let additionalProps: Partial<PanelProps> = {};
  if (type) {
    additionalProps = {
      closable: closable ?? false,
      title: '',
      footer: '',
      children: (
        <ConfirmContent
          {...props}
          prefixCls={prefixCls}
          confirmPrefixCls={confirmPrefixCls}
          rootPrefixCls={rootPrefixCls}
          content={children}
        />
      ),
    };
  } else {
    additionalProps = {
      closable: closable ?? true,
      title,
      footer: footer !== null && <Footer {...props} />,
      children,
    };
  }

  return wrapCSSVar(
    <Panel
      prefixCls={prefixCls}
      className={classNames(
        hashId,
        `${prefixCls}-pure-panel`,
        type && confirmPrefixCls,
        type && `${confirmPrefixCls}-${type}`,
        className,
        cssVarCls,
        rootCls,
      )}
      {...restProps}
      closeIcon={renderCloseIcon(prefixCls, closeIcon || icons?.close || <CloseOutlined />)}
      closable={closable}
      {...additionalProps}
    />,
  );
};

export default withPureRenderTheme(PurePanel);
