import type { CSSObject } from '@ant-design/cssinjs';
import { Keyframes, unit } from '@ant-design/cssinjs';

import { CONTAINER_MAX_OFFSET } from '../../_util/hooks/useZIndex';
import { genFocusStyle, resetComponent } from '../../style';
import type { AliasToken, FullToken, GenerateStyle, GenStyleFn } from '../../theme/internal';
import { genStyleHooks, mergeToken } from '../../theme/internal';
import genNotificationPlacementStyle from './placement';
import genStackStyle from './stack';

/** Component only token. Which will handle additional calculation of alias token */
export interface ComponentToken {
  /**
   * @desc 提醒框 z-index
   * @descEN z-index of Notification
   */
  zIndexPopup: number;
  /**
   * @desc 提醒框宽度
   * @descEN Width of Notification
   */
  width: number | string;
  /**
   * @desc 提醒框进度条背景色
   * @descEN Background color of Notification progress bar
   */
  progressBg: string;
}

/**
 * @desc Notification 组件的 Token
 * @descEN Token for Notification component
 */
export interface NotificationToken extends FullToken<'Notification'> {
  /**
   * @desc 动画最大高度
   * @descEN Maximum height of animation
   */
  animationMaxHeight: number | string;
  /**
   * @desc 提醒框背景色
   * @descEN Background color of Notification
   */
  notificationBg: string;
  /**
   * @desc 提醒框内边距
   * @descEN Padding of Notification
   */
  notificationPadding: string;
  /**
   * @desc 提醒框垂直内边距
   * @descEN Vertical padding of Notification
   */
  notificationPaddingVertical: number;
  /**
   * @desc 提醒框水平内边距
   * @descEN Horizontal padding of Notification
   */
  notificationPaddingHorizontal: number;
  /**
   * @desc 提醒框图标尺寸
   * @descEN Icon size of Notification
   */
  notificationIconSize: number | string;
  /**
   * @desc 提醒框关闭按钮尺寸
   * @descEN Close button size of Notification
   */
  notificationCloseButtonSize: number | string;
  /**
   * @desc 提醒框底部外边距
   * @descEN Bottom margin of Notification
   */
  notificationMarginBottom: number;
  /**
   * @desc 提醒框边缘外边距
   * @descEN Edge margin of Notification
   */
  notificationMarginEdge: number;
  /**
   * @desc 提醒框堆叠层数
   * @descEN Stack layer of Notification
   */
  notificationStackLayer: number;
  /**
   * @desc 提醒框进度条高度
   * @descEN Height of Notification progress bar
   */
  notificationProgressHeight: number;
}

export const genNoticeStyle = (token: NotificationToken): CSSObject => {
  const {
    iconCls,
    componentCls, // .ant-notification
    boxShadow,
    fontSizeLG,
    notificationMarginBottom,
    borderRadiusLG,
    colorSuccess,
    colorInfo,
    colorWarning,
    colorError,
    colorTextHeading,
    notificationBg,
    notificationPadding,
    notificationMarginEdge,
    progressBg,
    notificationProgressHeight,
    fontSize,
    lineHeight,
    width,
    notificationIconSize,
    colorText,
  } = token;

  const noticeCls = `${componentCls}-notice`;

  return {
    position: 'relative',
    marginBottom: notificationMarginBottom,
    marginInlineStart: 'auto',
    background: notificationBg,
    borderRadius: borderRadiusLG,
    boxShadow,

    [noticeCls]: {
      padding: notificationPadding,
      width,
      maxWidth: `calc(100vw - ${unit(token.calc(notificationMarginEdge).mul(2).equal())})`,
      overflow: 'hidden',
      lineHeight,
      wordWrap: 'break-word',
    },

    [`${noticeCls}-message`]: {
      marginBottom: token.marginXS,
      color: colorTextHeading,
      fontSize: fontSizeLG,
      lineHeight: token.lineHeightLG,
    },

    [`${noticeCls}-description`]: {
      fontSize,
      color: colorText,
    },

    [`${noticeCls}-closable ${noticeCls}-message`]: {
      paddingInlineEnd: token.paddingLG,
    },

    [`${noticeCls}-with-icon ${noticeCls}-message`]: {
      marginBottom: token.marginXS,
      marginInlineStart: token.calc(token.marginSM).add(notificationIconSize).equal(),
      fontSize: fontSizeLG,
    },

    [`${noticeCls}-with-icon ${noticeCls}-description`]: {
      marginInlineStart: token.calc(token.marginSM).add(notificationIconSize).equal(),
      fontSize,
    },

    // Icon & color style in different selector level
    // https://github.com/ant-design/ant-design/issues/16503
    // https://github.com/ant-design/ant-design/issues/15512
    [`${noticeCls}-icon`]: {
      position: 'absolute',
      fontSize: notificationIconSize,
      lineHeight: 1,

      // icon-font
      [`&-success${iconCls}`]: {
        color: colorSuccess,
      },
      [`&-info${iconCls}`]: {
        color: colorInfo,
      },
      [`&-warning${iconCls}`]: {
        color: colorWarning,
      },
      [`&-error${iconCls}`]: {
        color: colorError,
      },
    },

    [`${noticeCls}-close`]: {
      position: 'absolute',
      top: token.notificationPaddingVertical,
      insetInlineEnd: token.notificationPaddingHorizontal,
      color: token.colorIcon,
      outline: 'none',
      width: token.notificationCloseButtonSize,
      height: token.notificationCloseButtonSize,
      borderRadius: token.borderRadiusSM,
      transition: `background-color ${token.motionDurationMid}, color ${token.motionDurationMid}`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',

      '&:hover': {
        color: token.colorIconHover,
        backgroundColor: token.colorBgTextHover,
      },

      '&:active': {
        backgroundColor: token.colorBgTextActive,
      },

      ...genFocusStyle(token),
    },

    [`${noticeCls}-progress`]: {
      position: 'absolute',
      display: 'block',
      appearance: 'none',
      WebkitAppearance: 'none',
      inlineSize: `calc(100% - ${unit(borderRadiusLG)} * 2)`,
      left: {
        _skip_check_: true,
        value: borderRadiusLG,
      },
      right: {
        _skip_check_: true,
        value: borderRadiusLG,
      },
      bottom: 0,
      blockSize: notificationProgressHeight,
      border: 0,

      '&, &::-webkit-progress-bar': {
        borderRadius: borderRadiusLG,
        backgroundColor: `rgba(0, 0, 0, 0.04)`,
      },

      '&::-moz-progress-bar': {
        background: progressBg,
      },

      '&::-webkit-progress-value': {
        borderRadius: borderRadiusLG,
        background: progressBg,
      },
    },

    [`${noticeCls}-actions`]: {
      float: 'right',
      marginTop: token.marginSM,
    },
  };
};

const genNotificationStyle: GenerateStyle<NotificationToken> = (token) => {
  const {
    componentCls, // .ant-notification
    notificationMarginBottom,
    notificationMarginEdge,
    motionDurationMid,
    motionEaseInOut,
  } = token;

  const noticeCls = `${componentCls}-notice`;

  const fadeOut = new Keyframes('antNotificationFadeOut', {
    '0%': {
      maxHeight: token.animationMaxHeight,
      marginBottom: notificationMarginBottom,
    },

    '100%': {
      maxHeight: 0,
      marginBottom: 0,
      paddingTop: 0,
      paddingBottom: 0,
      opacity: 0,
    },
  });

  return [
    // ============================ Holder ============================
    {
      [componentCls]: {
        ...resetComponent(token),

        position: 'fixed',
        zIndex: token.zIndexPopup,
        marginRight: {
          value: notificationMarginEdge,
          _skip_check_: true,
        },

        [`${componentCls}-hook-holder`]: {
          position: 'relative',
        },

        //  animation
        [`${componentCls}-fade-appear-prepare`]: {
          opacity: '0 !important',
        },

        [`${componentCls}-fade-enter, ${componentCls}-fade-appear`]: {
          animationDuration: token.motionDurationMid,
          animationTimingFunction: motionEaseInOut,
          animationFillMode: 'both',
          opacity: 0,
          animationPlayState: 'paused',
        },

        [`${componentCls}-fade-leave`]: {
          animationTimingFunction: motionEaseInOut,
          animationFillMode: 'both',

          animationDuration: motionDurationMid,
          animationPlayState: 'paused',
        },

        [`${componentCls}-fade-enter${componentCls}-fade-enter-active, ${componentCls}-fade-appear${componentCls}-fade-appear-active`]:
          {
            animationPlayState: 'running',
          },

        [`${componentCls}-fade-leave${componentCls}-fade-leave-active`]: {
          animationName: fadeOut,
          animationPlayState: 'running',
        },

        // RTL
        '&-rtl': {
          direction: 'rtl',

          [`${noticeCls}-actions`]: {
            float: 'left',
          },
        },
      },
    },

    // ============================ Notice ============================
    {
      [componentCls]: {
        [`${noticeCls}-wrapper`]: {
          ...genNoticeStyle(token),
        },
      },
    },
  ];
};

// ============================== Export ==============================
export const prepareComponentToken = (token: AliasToken) => ({
  zIndexPopup: token.zIndexPopupBase + CONTAINER_MAX_OFFSET + 50,
  width: 384,
  progressBg: `linear-gradient(90deg, ${token.colorPrimaryBorderHover}, ${token.colorPrimary})`,
});

export const prepareNotificationToken: (
  token: Parameters<GenStyleFn<'Notification'>>[0],
) => NotificationToken = (token) => {
  const notificationPaddingVertical = token.paddingMD;
  const notificationPaddingHorizontal = token.paddingLG;
  const notificationToken = mergeToken<NotificationToken>(token, {
    notificationBg: token.colorBgElevated,
    notificationPaddingVertical,
    notificationPaddingHorizontal,
    notificationIconSize: token.calc(token.fontSizeLG).mul(token.lineHeightLG).equal(),
    notificationCloseButtonSize: token.calc(token.controlHeightLG).mul(0.55).equal(),
    notificationMarginBottom: token.margin,
    notificationPadding: `${unit(token.paddingMD)} ${unit(token.paddingContentHorizontalLG)}`,
    notificationMarginEdge: token.marginLG,
    animationMaxHeight: 150,
    notificationStackLayer: 3,
    notificationProgressHeight: 2,
  });

  return notificationToken;
};

export default genStyleHooks(
  'Notification',
  (token) => {
    const notificationToken = prepareNotificationToken(token);

    return [
      genNotificationStyle(notificationToken),
      genNotificationPlacementStyle(notificationToken),
      genStackStyle(notificationToken),
    ];
  },
  prepareComponentToken,
);
