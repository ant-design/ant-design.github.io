import type React from 'react';
import { unit } from '@ant-design/cssinjs';
import type { CSSInterpolation } from '@ant-design/cssinjs';
import { FastColor } from '@ant-design/fast-color';

import { resetComponent, genFocusStyle } from '../../style';
import type { FullToken, GetDefaultToken, GenStyleFn } from '../../theme/internal';
import { genStyleHooks, mergeToken } from '../../theme/internal';

export interface ComponentToken {
  /**
   * @desc 默认背景色
   * @descEN Default background color
   */
  defaultBg: string;
  /**
   * @desc 默认文字颜色
   * @descEN Default text color
   */
  defaultColor: string;
}

export interface TagToken extends FullToken<'Tag'> {
  tagFontSize: number;
  tagLineHeight: React.CSSProperties['lineHeight'];
  tagIconSize: number | string;
  tagPaddingHorizontal: number;
  tagBorderlessBg: string;
}

// ============================== Styles ==============================

const genBaseStyle = (token: TagToken): CSSInterpolation => {
  const { paddingXXS, lineWidth, tagPaddingHorizontal, componentCls, calc } = token;
  const paddingInline = calc(tagPaddingHorizontal).sub(lineWidth).equal();
  const iconMarginInline = calc(paddingXXS).sub(lineWidth).equal();
  return {
    // Result
    [componentCls]: {
      ...resetComponent(token),
      display: 'inline-flex',
      alignItems: 'center',
      height: 'auto',
      // https://github.com/ant-design/ant-design/pull/47504
      marginInlineEnd: token.marginXS,
      paddingInline,
      fontSize: token.tagFontSize,
      lineHeight: token.tagLineHeight,
      whiteSpace: 'nowrap',
      background: token.defaultBg,
      border: `${unit(token.lineWidth)} ${token.lineType} ${token.colorBorder}`,
      borderRadius: token.borderRadiusSM,
      opacity: 1,
      transition: `all ${token.motionDurationMid}`,
      textAlign: 'start',
      position: 'relative',

      // RTL
      [`&${componentCls}-rtl`]: {
        direction: 'rtl',
      },

      '&, a, a:hover': {
        color: token.defaultColor,
      },

      [`${componentCls}-close-icon`]: {
        marginInlineStart: iconMarginInline,
        fontSize: token.tagIconSize,
        color: token.colorTextDescription,
        cursor: 'pointer',
        transition: `all ${token.motionDurationMid}`,
        padding: 0,
        overflow: 'hidden',
        backgroundColor: 'transparent',
        border: 'none',
        outline: 'none',
        display: 'inline-flex',
        alignItems: 'center',
        ...genFocusStyle(token),

        '&:hover': {
          color: token.colorTextHeading,
        },
      },

      [`&${componentCls}-has-color`]: {
        borderColor: 'transparent',

        [`&, a, a:hover, ${token.iconCls}-close, ${token.iconCls}-close:hover`]: {
          color: token.colorTextLightSolid,
        },
      },

      '&-checkable': {
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        cursor: 'pointer',

        [`&:not(${componentCls}-checkable-checked):hover`]: {
          color: token.colorPrimary,
          backgroundColor: token.colorFillSecondary,
        },

        '&:active, &-checked': {
          color: token.colorTextLightSolid,
        },

        '&-checked': {
          backgroundColor: token.colorPrimary,
          '&:hover': {
            backgroundColor: token.colorPrimaryHover,
          },
        },

        '&:active': {
          backgroundColor: token.colorPrimaryActive,
        },

        ...genFocusStyle(token),
      },

      '&-hidden': {
        display: 'none',
      },

      // To ensure that a space will be placed between character and `Icon`.
      [`> ${token.iconCls} + span, > span + ${token.iconCls}`]: {
        marginInlineStart: paddingInline,
      },
    },
    [`${componentCls}-borderless`]: {
      borderColor: 'transparent',
      background: token.tagBorderlessBg,
    },
  };
};

// ============================== Export ==============================
export const prepareToken: (token: Parameters<GenStyleFn<'Tag'>>[0]) => TagToken = (token) => {
  const { lineWidth, fontSizeIcon, calc } = token;
  const tagFontSize = token.fontSizeSM;
  const tagToken = mergeToken<TagToken>(token, {
    tagFontSize,
    tagLineHeight: unit(calc(token.lineHeightSM).mul(tagFontSize).equal()),
    tagIconSize: calc(fontSizeIcon).sub(calc(lineWidth).mul(2)).equal(), // Tag icon is much smaller
    tagPaddingHorizontal: 8, // Fixed padding.
    tagBorderlessBg: token.defaultBg,
  });
  return tagToken;
};

export const prepareComponentToken: GetDefaultToken<'Tag'> = (token) => ({
  defaultBg: new FastColor(token.colorFillQuaternary)
    .onBackground(token.colorBgContainer)
    .toHexString(),
  defaultColor: token.colorText,
});

export default genStyleHooks<'Tag'>(
  'Tag',
  (token) => {
    const tagToken = prepareToken(token);
    return genBaseStyle(tagToken);
  },
  prepareComponentToken,
);
