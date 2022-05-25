// deps-lint-skip-all
import type { CSSObject } from '@ant-design/cssinjs';
import { Keyframes } from '@ant-design/cssinjs';
import type { FullToken, GenerateStyle } from '../../_util/theme';
import { genComponentStyleHook, mergeToken, resetComponent } from '../../_util/theme';

/** Component only token. Which will handle additional calculation of alias token */
export interface ComponentToken {
  // Component token here
  height: number;
  zIndexPopup: number;
}

interface MessageToken extends FullToken<'Message'> {
  // Custom token here
  messageNoticeContentPadding: string;
}

const genMessageStyle: GenerateStyle<MessageToken, CSSObject> = token => {
  const {
    componentCls,
    iconCls,
    boxShadow,
    colorBgComponent,
    colorSuccess,
    colorError,
    colorWarning,
    colorInfo,
    fontSizeLG,
    motionEaseInOutCirc,
    motionDurationSlow,
    marginXS,
    paddingXS,
    radiusBase,
    zIndexPopup,
    // Custom token
    messageNoticeContentPadding,
  } = token;

  const messageMoveIn = new Keyframes('MessageMoveIn', {
    '0%': {
      padding: 0,
      transform: 'translateY(-100%)',
      opacity: 0,
    },

    '100%': {
      padding: paddingXS,
      transform: 'translateY(0)',
      opacity: 1,
    },
  });

  const messageMoveOut = new Keyframes('MessageMoveOut', {
    '0%': {
      maxHeight: token.height,
      padding: paddingXS,
      opacity: 1,
    },
    '100%': {
      maxHeight: 0,
      padding: 0,
      opacity: 0,
    },
  });

  return {
    [componentCls]: {
      ...resetComponent(token),
      position: 'fixed',
      top: marginXS,
      insetInlineStart: 0, // affected by ltr or rtl
      width: '100%',
      pointerEvents: 'none',
      zIndex: zIndexPopup,
      [iconCls]: {
        verticalAlign: 'text-bottom',
        marginInlineEnd: marginXS, // affected by ltr or rtl
        fontSize: fontSizeLG,
      },
      [`${componentCls}-notice`]: {
        padding: paddingXS,
        textAlign: 'center',
      },
      [`${componentCls}-notice-content`]: {
        display: 'inline-block',
        padding: messageNoticeContentPadding,
        background: colorBgComponent,
        borderRadius: radiusBase,
        boxShadow,
        pointerEvents: 'all',
      },
      [`${componentCls}-success ${iconCls}`]: {
        color: colorSuccess,
      },
      [`${componentCls}-error ${iconCls}`]: {
        color: colorError,
      },
      [`${componentCls}-warning ${iconCls}`]: {
        color: colorWarning,
      },
      [`
        ${componentCls}-info ${iconCls},
        ${componentCls}-loading ${iconCls}`]: {
        color: colorInfo,
      },
      [`${componentCls}-move-up`]: {
        animationFillMode: 'forwards',
      },
      [`
        ${componentCls}-move-up-appear,
        ${componentCls}-move-up-enter
      `]: {
        animationName: messageMoveIn,
        animationDuration: motionDurationSlow,
        animationPlayState: 'paused',
        animationTimingFunction: motionEaseInOutCirc,
      },
      [`
        ${componentCls}-move-up-appear${componentCls}-move-up-appear-active,
        ${componentCls}-move-up-enter${componentCls}-move-up-enter-active
      `]: {
        animationPlayState: 'running',
      },
      [`${componentCls}-move-up-leave`]: {
        animationName: messageMoveOut,
        animationDuration: motionDurationSlow,
        animationPlayState: 'paused',
        animationTimingFunction: motionEaseInOutCirc,
      },
      [`${componentCls}-move-up-leave${componentCls}-move-up-leave-active`]: {
        animationPlayState: 'running',
      },
      '&-rtl': {
        direction: 'rtl',
        span: {
          direction: 'rtl',
        },
      },
    },
  };
};

// ============================== Export ==============================
export default genComponentStyleHook(
  'Message',
  token => {
    // Gen-style functions here
    const combinedToken = mergeToken<MessageToken>(token, {
      messageNoticeContentPadding: `${token.paddingSM}px ${token.padding}px`,
    });
    return [genMessageStyle(combinedToken)];
  },
  token => ({
    height: 150,
    zIndexPopup: token.zIndexPopupBase + 10,
  }),
);
