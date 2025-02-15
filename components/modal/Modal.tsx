import * as React from 'react';
import CloseOutlined from '@ant-design/icons/CloseOutlined';
import Dialog from '@rc-component/dialog';
import classNames from 'classnames';

import ContextIsolator from '../_util/ContextIsolator';
import useClosable, { pickClosable } from '../_util/hooks/useClosable';
import { useZIndex } from '../_util/hooks/useZIndex';
import { getTransitionName } from '../_util/motion';
import { Breakpoint } from '../_util/responsiveObserver';
import { canUseDocElement } from '../_util/styleChecker';
import { devUseWarning } from '../_util/warning';
import zIndexContext from '../_util/zindexContext';
import { ConfigContext } from '../config-provider';
import { useComponentConfig } from '../config-provider/context';
import useCSSVarCls from '../config-provider/hooks/useCSSVarCls';
import Skeleton from '../skeleton';
import { usePanelRef } from '../watermark/context';
import type { ModalProps, MousePosition } from './interface';
import { Footer, renderCloseIcon } from './shared';
import useStyle from './style';

let mousePosition: MousePosition;

// ref: https://github.com/ant-design/ant-design/issues/15795
const getClickPosition = (e: MouseEvent) => {
  mousePosition = {
    x: e.pageX,
    y: e.pageY,
  };
  // 100ms 内发生过点击事件，则从点击位置动画展示
  // 否则直接 zoom 展示
  // 这样可以兼容非点击方式展开
  setTimeout(() => {
    mousePosition = null;
  }, 100);
};

// 只有点击事件支持从鼠标位置动画展开
if (canUseDocElement()) {
  document.documentElement.addEventListener('click', getClickPosition, true);
}

const Modal: React.FC<ModalProps> = (props) => {
  const {
    getPopupContainer: getContextPopupContainer,
    getPrefixCls,
    direction,
    className: contextClassName,
    style: contextStyle,
    classNames: contextClassNames,
    icons: contextIcons,
    styles: contextStyles,
    centered: contextCentered,
  } = useComponentConfig('modal');
  const { modal: modalContext } = React.useContext(ConfigContext);

  const handleCancel = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { onCancel } = props;
    onCancel?.(e);
  };

  const handleOk = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { onOk } = props;
    onOk?.(e);
  };

  if (process.env.NODE_ENV !== 'production') {
    const warning = devUseWarning('Modal');

    [
      ['bodyStyle', 'styles.body'],
      ['maskStyle', 'styles.mask'],
    ].forEach(([deprecatedName, newName]) => {
      warning.deprecated(!(deprecatedName in props), deprecatedName, newName);
    });
  }

  const {
    prefixCls: customizePrefixCls,
    className,
    rootClassName,
    rootStyle,
    open,
    wrapClassName,
    centered,
    getContainer,
    focusTriggerAfterClose = true,
    style,

    width = 520,
    footer,
    classNames: modalClassNames,
    icons: modalIcons,
    styles: modalStyles,
    children,
    loading,
    ...restProps
  } = props;

  const prefixCls = getPrefixCls('modal', customizePrefixCls);
  const rootPrefixCls = getPrefixCls();
  // Style
  const rootCls = useCSSVarCls(prefixCls);
  const [wrapCSSVar, hashId, cssVarCls] = useStyle(prefixCls, rootCls);

  const wrapClassNameExtended = classNames(wrapClassName, {
    [`${prefixCls}-centered`]: centered ?? contextCentered,
    [`${prefixCls}-wrap-rtl`]: direction === 'rtl',
  });

  const dialogFooter =
    footer !== null && !loading ? (
      <Footer {...props} onOk={handleOk} onCancel={handleCancel} />
    ) : null;

  const [mergedClosable, mergedCloseIcon, closeBtnIsDisabled] = useClosable(
    pickClosable(props),
    pickClosable(modalContext),
    {
      closable: true,
      closeIcon: modalIcons?.close || contextIcons?.close || <CloseOutlined />,
      closeIconRender: (icon) => renderCloseIcon(prefixCls, icon),
    },
  );

  // ============================ Refs ============================
  // Select `ant-modal-section` by `panelRef`
  const panelRef = usePanelRef(`.${prefixCls}-section`);

  // ============================ zIndex ============================
  const [zIndex, contextZIndex] = useZIndex('Modal', restProps.zIndex);

  // =========================== Width ============================
  const [numWidth, responsiveWidth] = React.useMemo<
    [string | number | undefined, Partial<Record<Breakpoint, string | number>> | undefined]
  >(() => {
    if (width && typeof width === 'object') {
      return [undefined, width];
    }
    return [width, undefined];
  }, [width]);

  const responsiveWidthVars = React.useMemo(() => {
    const vars: Record<string, string> = {};
    if (responsiveWidth) {
      Object.keys(responsiveWidth).forEach((breakpoint) => {
        const breakpointWidth = responsiveWidth[breakpoint as Breakpoint];
        if (breakpointWidth !== undefined) {
          vars[`--${prefixCls}-${breakpoint}-width`] =
            typeof breakpointWidth === 'number' ? `${breakpointWidth}px` : breakpointWidth;
        }
      });
    }
    return vars;
  }, [responsiveWidth]);

  // =========================== Render ===========================
  return wrapCSSVar(
    <ContextIsolator form space>
      <zIndexContext.Provider value={contextZIndex}>
        <Dialog
          width={numWidth}
          {...restProps}
          zIndex={zIndex}
          getContainer={getContainer === undefined ? getContextPopupContainer : getContainer}
          prefixCls={prefixCls}
          rootClassName={classNames(
            hashId,
            rootClassName,
            cssVarCls,
            rootCls,
            contextClassNames.root,
            modalClassNames?.root,
          )}
          rootStyle={{
            ...contextStyles.root,
            ...modalStyles?.root,
          }}
          footer={dialogFooter}
          visible={open}
          mousePosition={restProps.mousePosition ?? mousePosition}
          onClose={handleCancel as any}
          closable={
            mergedClosable
              ? { disabled: closeBtnIsDisabled, closeIcon: mergedCloseIcon }
              : mergedClosable
          }
          closeIcon={mergedCloseIcon}
          focusTriggerAfterClose={focusTriggerAfterClose}
          transitionName={getTransitionName(rootPrefixCls, 'zoom', props.transitionName)}
          maskTransitionName={getTransitionName(rootPrefixCls, 'fade', props.maskTransitionName)}
          className={classNames(hashId, className, contextClassName)}
          style={{
            ...contextStyle,
            ...style,
            ...responsiveWidthVars,
          }}
          classNames={{
            mask: classNames(contextClassNames.mask, modalClassNames?.mask),
            section: classNames(contextClassNames.section, modalClassNames?.section),
            wrapper: classNames(
              wrapClassNameExtended,
              contextClassNames.wrapper,
              modalClassNames?.wrapper,
            ),
            header: classNames(contextClassNames.header, modalClassNames?.header),
            title: classNames(contextClassNames.title, modalClassNames?.title),
            body: classNames(contextClassNames.body, modalClassNames?.body),
            footer: classNames(contextClassNames.footer, modalClassNames?.footer),
          }}
          styles={{
            mask: { ...contextStyles.mask, ...modalStyles?.mask },
            section: { ...contextStyles.section, ...modalStyles?.section },
            wrapper: { ...contextStyles.wrapper, ...modalStyles?.wrapper },
            header: { ...contextStyles.header, ...modalStyles?.header },
            title: { ...contextStyles.title, ...modalStyles?.title },
            body: { ...contextStyles.body, ...modalStyles?.body },
            footer: { ...contextStyles.footer, ...modalStyles?.footer },
          }}
          panelRef={panelRef}
        >
          {loading ? (
            <Skeleton
              active
              title={false}
              paragraph={{ rows: 4 }}
              className={`${prefixCls}-body-skeleton`}
            />
          ) : (
            children
          )}
        </Dialog>
      </zIndexContext.Provider>
    </ContextIsolator>,
  );
};

export default Modal;
