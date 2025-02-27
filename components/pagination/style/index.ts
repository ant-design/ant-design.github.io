import { unit } from '@ant-design/cssinjs';
import type { CSSObject } from '@ant-design/cssinjs';

import {
  genBasicInputStyle,
  genInputSmallStyle,
  initComponentToken,
  initInputToken,
} from '../../input/style';
import type { SharedComponentToken, SharedInputToken } from '../../input/style/token';
import { genBaseOutlinedStyle, genDisabledStyle } from '../../input/style/variants';
import { genFocusOutline, genFocusStyle, resetComponent } from '../../style';
import type { FullToken, GenerateStyle, GenStyleFn, GetDefaultToken } from '../../theme/internal';
import { genStyleHooks, mergeToken } from '../../theme/internal';

export interface ComponentToken {
  /**
   * @desc 页码选项背景色
   * @descEN Background color of Pagination item
   */
  itemBg: string;
  /**
   * @desc 页码尺寸
   * @descEN Size of Pagination item
   */
  itemSize: number;
  /**
   * @desc 页码激活态背景色
   * @descEN Background color of active Pagination item
   */
  itemActiveBg: string;
  /**
   * @desc 小号页码尺寸
   * @descEN Size of small Pagination item
   */
  itemSizeSM: number;
  /**
   * @desc 页码链接背景色
   * @descEN Background color of Pagination item link
   */
  itemLinkBg: string;
  /**
   * @desc 页码激活态禁用状态背景色
   * @descEN Background color of disabled active Pagination item
   */
  itemActiveBgDisabled: string;
  /**
   * @desc 页码激活态禁用状态文字颜色
   * @descEN Text color of disabled active Pagination item
   */
  itemActiveColorDisabled: string;
  /**
   * @desc 输入框背景色
   * @descEN Background color of input
   */
  itemInputBg: string;
  /**
   * @desc 每页展示数量选择器 top
   * @descEN Top of Pagination size changer
   */
  miniOptionsSizeChangerTop: number;
}

/**
 * @desc Pagination 组件的 Token
 * @descEN Token for Pagination component
 */
export interface PaginationToken
  extends FullToken<'Pagination'>,
    SharedComponentToken,
    SharedInputToken {
  /**
   * @desc 输入框轮廓偏移量
   * @descEN Outline offset of input
   */
  inputOutlineOffset: number;
  /**
   * @desc 迷你选项横向外边距
   * @descEN Horizontal margin of mini options
   */
  paginationMiniOptionsMarginInlineStart: number | string;
  /**
   * @desc 迷你快速跳转输入框宽度
   * @descEN Width of mini quick jumper input
   */
  paginationMiniQuickJumperInputWidth: number | string;
  /**
   * @desc 页码横向内边距
   * @descEN Horizontal padding of Pagination item
   */
  paginationItemPaddingInline: number | string;
  /**
   * @desc 省略号字母间距
   * @descEN Letter spacing of ellipsis
   */
  paginationEllipsisLetterSpacing: number | string;
  /**
   * @desc 省略号文本缩进
   * @descEN Text indent of ellipsis
   */
  paginationEllipsisTextIndent: string;
  /**
   * @desc 斜杠横向外边距
   * @descEN Horizontal margin of slash
   */
  paginationSlashMarginInlineStart: number;
  /**
   * @desc 斜杠横向外边距
   * @descEN Horizontal margin of slash
   */
  paginationSlashMarginInlineEnd: number;
}

const genPaginationDisabledStyle: GenerateStyle<PaginationToken, CSSObject> = (token) => {
  const { componentCls } = token;

  return {
    [`${componentCls}-disabled`]: {
      '&, &:hover': {
        cursor: 'not-allowed',

        [`${componentCls}-item-link`]: {
          color: token.colorTextDisabled,
          cursor: 'not-allowed',
        },
      },

      '&:focus-visible': {
        cursor: 'not-allowed',

        [`${componentCls}-item-link`]: {
          color: token.colorTextDisabled,
          cursor: 'not-allowed',
        },
      },
    },

    [`&${componentCls}-disabled`]: {
      cursor: 'not-allowed',
      [`${componentCls}-item`]: {
        cursor: 'not-allowed',

        backgroundColor: 'transparent',

        '&:hover, &:active': {
          backgroundColor: 'transparent',
        },

        a: {
          color: token.colorTextDisabled,
          backgroundColor: 'transparent',
          border: 'none',
          cursor: 'not-allowed',
        },

        '&-active': {
          borderColor: token.colorBorder,
          backgroundColor: token.itemActiveBgDisabled,

          '&:hover, &:active': {
            backgroundColor: token.itemActiveBgDisabled,
          },

          a: {
            color: token.itemActiveColorDisabled,
          },
        },
      },

      [`${componentCls}-item-link`]: {
        color: token.colorTextDisabled,
        cursor: 'not-allowed',
        '&:hover, &:active': {
          backgroundColor: 'transparent',
        },
        [`${componentCls}-simple&`]: {
          backgroundColor: 'transparent',
          '&:hover, &:active': {
            backgroundColor: 'transparent',
          },
        },
      },

      [`${componentCls}-simple-pager`]: {
        color: token.colorTextDisabled,
      },

      [`${componentCls}-jump-prev, ${componentCls}-jump-next`]: {
        [`${componentCls}-item-link-icon`]: {
          opacity: 0,
        },

        [`${componentCls}-item-ellipsis`]: {
          opacity: 1,
        },
      },
    },
    [`&${componentCls}-simple`]: {
      [`${componentCls}-prev, ${componentCls}-next`]: {
        [`&${componentCls}-disabled ${componentCls}-item-link`]: {
          '&:hover, &:active': {
            backgroundColor: 'transparent',
          },
        },
      },
    },
  };
};

const genPaginationMiniStyle: GenerateStyle<PaginationToken, CSSObject> = (token) => {
  const { componentCls } = token;

  return {
    [`&${componentCls}-mini ${componentCls}-total-text, &${componentCls}-mini ${componentCls}-simple-pager`]:
      {
        height: token.itemSizeSM,
        lineHeight: unit(token.itemSizeSM),
      },

    [`&${componentCls}-mini ${componentCls}-item`]: {
      minWidth: token.itemSizeSM,
      height: token.itemSizeSM,
      margin: 0,
      lineHeight: unit(token.calc(token.itemSizeSM).sub(2).equal()),
    },

    [`&${componentCls}-mini ${componentCls}-prev, &${componentCls}-mini ${componentCls}-next`]: {
      minWidth: token.itemSizeSM,
      height: token.itemSizeSM,
      margin: 0,
      lineHeight: unit(token.itemSizeSM),
    },

    [`&${componentCls}-mini:not(${componentCls}-disabled)`]: {
      [`${componentCls}-prev, ${componentCls}-next`]: {
        [`&:hover ${componentCls}-item-link`]: {
          backgroundColor: token.colorBgTextHover,
        },
        [`&:active ${componentCls}-item-link`]: {
          backgroundColor: token.colorBgTextActive,
        },
        [`&${componentCls}-disabled:hover ${componentCls}-item-link`]: {
          backgroundColor: 'transparent',
        },
      },
    },

    [`
    &${componentCls}-mini ${componentCls}-prev ${componentCls}-item-link,
    &${componentCls}-mini ${componentCls}-next ${componentCls}-item-link
    `]: {
      backgroundColor: 'transparent',
      borderColor: 'transparent',

      '&::after': {
        height: token.itemSizeSM,
        lineHeight: unit(token.itemSizeSM),
      },
    },

    [`&${componentCls}-mini ${componentCls}-jump-prev, &${componentCls}-mini ${componentCls}-jump-next`]:
      {
        height: token.itemSizeSM,
        marginInlineEnd: 0,
        lineHeight: unit(token.itemSizeSM),
      },

    [`&${componentCls}-mini ${componentCls}-options`]: {
      marginInlineStart: token.paginationMiniOptionsMarginInlineStart,

      '&-size-changer': {
        top: token.miniOptionsSizeChangerTop,
      },

      '&-quick-jumper': {
        height: token.itemSizeSM,
        lineHeight: unit(token.itemSizeSM),

        input: {
          ...genInputSmallStyle(token),

          width: token.paginationMiniQuickJumperInputWidth,
          height: token.controlHeightSM,
        },
      },
    },
  };
};

const genPaginationSimpleStyle: GenerateStyle<PaginationToken, CSSObject> = (token) => {
  const { componentCls } = token;

  return {
    [`
    &${componentCls}-simple ${componentCls}-prev,
    &${componentCls}-simple ${componentCls}-next
    `]: {
      height: token.itemSizeSM,
      lineHeight: unit(token.itemSizeSM),
      verticalAlign: 'top',
      [`${componentCls}-item-link`]: {
        height: token.itemSizeSM,
        backgroundColor: 'transparent',
        border: 0,
        '&:hover': {
          backgroundColor: token.colorBgTextHover,
        },
        '&:active': {
          backgroundColor: token.colorBgTextActive,
        },
        '&::after': {
          height: token.itemSizeSM,
          lineHeight: unit(token.itemSizeSM),
        },
      },
    },

    [`&${componentCls}-simple ${componentCls}-simple-pager`]: {
      display: 'inline-block',
      height: token.itemSizeSM,
      marginInlineEnd: token.marginXS,

      input: {
        boxSizing: 'border-box',
        height: '100%',
        padding: `0 ${unit(token.paginationItemPaddingInline)}`,
        textAlign: 'center',
        backgroundColor: token.itemInputBg,
        border: `${unit(token.lineWidth)} ${token.lineType} ${token.colorBorder}`,
        borderRadius: token.borderRadius,
        outline: 'none',
        transition: `border-color ${token.motionDurationMid}`,
        color: 'inherit',

        '&:hover': {
          borderColor: token.colorPrimary,
        },

        '&:focus': {
          borderColor: token.colorPrimaryHover,
          boxShadow: `${unit(token.inputOutlineOffset)} 0 ${unit(token.controlOutlineWidth)} ${
            token.controlOutline
          }`,
        },

        '&[disabled]': {
          color: token.colorTextDisabled,
          backgroundColor: token.colorBgContainerDisabled,
          borderColor: token.colorBorder,
          cursor: 'not-allowed',
        },
      },
    },
  };
};

const genPaginationJumpStyle: GenerateStyle<PaginationToken, CSSObject> = (token) => {
  const { componentCls } = token;

  return {
    [`${componentCls}-jump-prev, ${componentCls}-jump-next`]: {
      outline: 0,

      [`${componentCls}-item-container`]: {
        position: 'relative',

        [`${componentCls}-item-link-icon`]: {
          color: token.colorPrimary,
          fontSize: token.fontSizeSM,
          opacity: 0,
          transition: `all ${token.motionDurationMid}`,

          '&-svg': {
            top: 0,
            insetInlineEnd: 0,
            bottom: 0,
            insetInlineStart: 0,
            margin: 'auto',
          },
        },

        [`${componentCls}-item-ellipsis`]: {
          position: 'absolute',
          top: 0,
          insetInlineEnd: 0,
          bottom: 0,
          insetInlineStart: 0,
          display: 'block',
          margin: 'auto',
          color: token.colorTextDisabled,
          letterSpacing: token.paginationEllipsisLetterSpacing,
          textAlign: 'center',
          textIndent: token.paginationEllipsisTextIndent,
          opacity: 1,
          transition: `all ${token.motionDurationMid}`,
        },
      },

      '&:hover': {
        [`${componentCls}-item-link-icon`]: {
          opacity: 1,
        },
        [`${componentCls}-item-ellipsis`]: {
          opacity: 0,
        },
      },
    },

    [`
    ${componentCls}-prev,
    ${componentCls}-jump-prev,
    ${componentCls}-jump-next
    `]: {
      marginInlineEnd: token.marginXS,
    },

    [`
    ${componentCls}-prev,
    ${componentCls}-next,
    ${componentCls}-jump-prev,
    ${componentCls}-jump-next
    `]: {
      display: 'inline-block',
      minWidth: token.itemSize,
      height: token.itemSize,
      color: token.colorText,
      fontFamily: token.fontFamily,
      lineHeight: unit(token.itemSize),
      textAlign: 'center',
      verticalAlign: 'middle',
      listStyle: 'none',
      borderRadius: token.borderRadius,
      cursor: 'pointer',
      transition: `all ${token.motionDurationMid}`,
    },

    [`${componentCls}-prev, ${componentCls}-next`]: {
      outline: 0,

      button: {
        color: token.colorText,
        cursor: 'pointer',
        userSelect: 'none',
      },

      [`${componentCls}-item-link`]: {
        display: 'block',
        width: '100%',
        height: '100%',
        padding: 0,
        fontSize: token.fontSizeSM,
        textAlign: 'center',
        backgroundColor: 'transparent',
        border: `${unit(token.lineWidth)} ${token.lineType} transparent`,
        borderRadius: token.borderRadius,
        outline: 'none',
        transition: `all ${token.motionDurationMid}`,
      },

      [`&:hover ${componentCls}-item-link`]: {
        backgroundColor: token.colorBgTextHover,
      },

      [`&:active ${componentCls}-item-link`]: {
        backgroundColor: token.colorBgTextActive,
      },

      [`&${componentCls}-disabled:hover`]: {
        [`${componentCls}-item-link`]: {
          backgroundColor: 'transparent',
        },
      },
    },

    [`${componentCls}-slash`]: {
      marginInlineEnd: token.paginationSlashMarginInlineEnd,
      marginInlineStart: token.paginationSlashMarginInlineStart,
    },

    [`${componentCls}-options`]: {
      display: 'inline-block',
      marginInlineStart: token.margin,
      verticalAlign: 'middle',

      '&-size-changer': {
        display: 'inline-block',
        width: 'auto',
      },

      '&-quick-jumper': {
        display: 'inline-block',
        height: token.controlHeight,
        marginInlineStart: token.marginXS,
        lineHeight: unit(token.controlHeight),
        verticalAlign: 'top',

        input: {
          ...genBasicInputStyle(token),
          ...genBaseOutlinedStyle(token, {
            borderColor: token.colorBorder,
            hoverBorderColor: token.colorPrimaryHover,
            activeBorderColor: token.colorPrimary,
            activeShadow: token.activeShadow,
          }),
          '&[disabled]': {
            ...genDisabledStyle(token),
          },

          width: token.calc(token.controlHeightLG).mul(1.25).equal(),
          height: token.controlHeight,
          boxSizing: 'border-box',
          margin: 0,
          marginInlineStart: token.marginXS,
          marginInlineEnd: token.marginXS,
        },
      },
    },
  };
};

const genPaginationItemStyle: GenerateStyle<PaginationToken, CSSObject> = (token) => {
  const { componentCls } = token;

  return {
    [`${componentCls}-item`]: {
      display: 'inline-block',
      minWidth: token.itemSize,
      height: token.itemSize,
      marginInlineEnd: token.marginXS,
      fontFamily: token.fontFamily,
      lineHeight: unit(token.calc(token.itemSize).sub(2).equal()),
      textAlign: 'center',
      verticalAlign: 'middle',
      listStyle: 'none',
      backgroundColor: token.itemBg,
      border: `${unit(token.lineWidth)} ${token.lineType} transparent`,
      borderRadius: token.borderRadius,
      outline: 0,
      cursor: 'pointer',
      userSelect: 'none',

      a: {
        display: 'block',
        padding: `0 ${unit(token.paginationItemPaddingInline)}`,
        color: token.colorText,

        '&:hover': {
          textDecoration: 'none',
        },
      },

      [`&:not(${componentCls}-item-active)`]: {
        '&:hover': {
          transition: `all ${token.motionDurationMid}`,
          backgroundColor: token.colorBgTextHover,
        },

        '&:active': {
          backgroundColor: token.colorBgTextActive,
        },
      },

      '&-active': {
        fontWeight: token.fontWeightStrong,
        backgroundColor: token.itemActiveBg,
        borderColor: token.colorPrimary,

        a: {
          color: token.colorPrimary,
        },

        '&:hover': {
          borderColor: token.colorPrimaryHover,
        },

        '&:hover a': {
          color: token.colorPrimaryHover,
        },
      },
    },
  };
};

const genPaginationStyle: GenerateStyle<PaginationToken, CSSObject> = (token) => {
  const { componentCls } = token;

  return {
    [componentCls]: {
      ...resetComponent(token),
      display: 'flex',

      '&-start': {
        justifyContent: 'start',
      },

      '&-center': {
        justifyContent: 'center',
      },

      '&-end': {
        justifyContent: 'end',
      },

      'ul, ol': {
        margin: 0,
        padding: 0,
        listStyle: 'none',
      },

      '&::after': {
        display: 'block',
        clear: 'both',
        height: 0,
        overflow: 'hidden',
        visibility: 'hidden',
        content: '""',
      },

      [`${componentCls}-total-text`]: {
        display: 'inline-block',
        height: token.itemSize,
        marginInlineEnd: token.marginXS,
        lineHeight: unit(token.calc(token.itemSize).sub(2).equal()),
        verticalAlign: 'middle',
      },

      // item style
      ...genPaginationItemStyle(token),

      // jump btn style
      ...genPaginationJumpStyle(token),

      // simple style
      ...genPaginationSimpleStyle(token),

      // mini style
      ...genPaginationMiniStyle(token),

      // disabled style
      ...genPaginationDisabledStyle(token),

      // media query style
      [`@media only screen and (max-width: ${token.screenLG}px)`]: {
        [`${componentCls}-item`]: {
          '&-after-jump-prev, &-before-jump-next': {
            display: 'none',
          },
        },
      },

      [`@media only screen and (max-width: ${token.screenSM}px)`]: {
        [`${componentCls}-options`]: {
          display: 'none',
        },
      },
    },

    // rtl style
    [`&${token.componentCls}-rtl`]: {
      direction: 'rtl',
    },
  };
};

const genPaginationFocusStyle: GenerateStyle<PaginationToken> = (token) => {
  const { componentCls } = token;

  return {
    [`${componentCls}:not(${componentCls}-disabled)`]: {
      [`${componentCls}-item`]: {
        ...genFocusStyle(token),
      },

      [`${componentCls}-jump-prev, ${componentCls}-jump-next`]: {
        '&:focus-visible': {
          [`${componentCls}-item-link-icon`]: {
            opacity: 1,
          },
          [`${componentCls}-item-ellipsis`]: {
            opacity: 0,
          },
          ...genFocusOutline(token),
        },
      },

      [`${componentCls}-prev, ${componentCls}-next`]: {
        [`&:focus-visible ${componentCls}-item-link`]: {
          ...genFocusOutline(token),
        },
      },
    },
  };
};

export const prepareComponentToken: GetDefaultToken<'Pagination'> = (token) => ({
  itemBg: token.colorBgContainer,
  itemSize: token.controlHeight,
  itemSizeSM: token.controlHeightSM,
  itemActiveBg: token.colorBgContainer,
  itemLinkBg: token.colorBgContainer,
  itemActiveColorDisabled: token.colorTextDisabled,
  itemActiveBgDisabled: token.controlItemBgActiveDisabled,
  itemInputBg: token.colorBgContainer,
  miniOptionsSizeChangerTop: 0,
  ...initComponentToken(token),
});

export const prepareToken = (token: Parameters<GenStyleFn<'Pagination'>>[0]) =>
  mergeToken<PaginationToken>(
    token,
    {
      inputOutlineOffset: 0,
      paginationMiniOptionsMarginInlineStart: token.calc(token.marginXXS).div(2).equal(),
      paginationMiniQuickJumperInputWidth: token.calc(token.controlHeightLG).mul(1.1).equal(),
      paginationItemPaddingInline: token.calc(token.marginXXS).mul(1.5).equal(),
      paginationEllipsisLetterSpacing: token.calc(token.marginXXS).div(2).equal(),
      paginationSlashMarginInlineStart: token.marginSM,
      paginationSlashMarginInlineEnd: token.marginSM,
      paginationEllipsisTextIndent: '0.13em', // magic for ui experience
    },
    initInputToken(token),
  );

// ============================== Export ==============================
export default genStyleHooks(
  'Pagination',
  (token) => {
    const paginationToken = prepareToken(token);
    return [genPaginationStyle(paginationToken), genPaginationFocusStyle(paginationToken)];
  },
  prepareComponentToken,
);
