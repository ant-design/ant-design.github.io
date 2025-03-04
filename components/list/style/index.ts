import type { CSSProperties } from 'react';
import { unit } from '@ant-design/cssinjs';
import type { CSSObject } from '@ant-design/cssinjs';

import { resetComponent } from '../../style';
import type { FullToken, GenerateStyle, GetDefaultToken } from '../../theme/internal';
import { genStyleHooks, mergeToken } from '../../theme/internal';

export interface ComponentToken {
  /**
   * @desc 内容宽度
   * @descEN Width of content
   */
  contentWidth: number | string;
  /**
   * @desc 大号列表项内间距
   * @descEN Padding of large item
   */
  itemPaddingLG: string;
  /**
   * @desc 小号列表项内间距
   * @descEN Padding of small item
   */
  itemPaddingSM: string;
  /**
   * @desc 列表项内间距
   * @descEN Padding of item
   */
  itemPadding: string;
  /**
   * @desc 头部区域背景色
   * @descEN Background color of header
   */
  headerBg: string;
  /**
   * @desc 底部区域背景色
   * @descEN Background color of footer
   */
  footerBg: string;
  /**
   * @desc 空文本内边距
   * @descEN Padding of empty text
   */
  emptyTextPadding: CSSProperties['padding'];
  /**
   * @desc Meta 下间距
   * @descEN Margin bottom of meta
   */
  metaMarginBottom: CSSProperties['marginBottom'];
  /**
   * @desc 头像右间距
   * @descEN Right margin of avatar
   */
  avatarMarginRight: CSSProperties['marginRight'];
  /**
   * @desc 标题下间距
   * @descEN Margin bottom of title
   */
  titleMarginBottom: CSSProperties['marginBottom'];
  /**
   * @desc 描述文字大小
   * @descEN Font size of description
   */
  descriptionFontSize: number;
}

/**
 * @desc List 组件的 Token
 * @descEN Token for List component
 */
interface ListToken extends FullToken<'List'> {
  /**
   * @desc 列表项类名
   * @descEN Class name of list item
   */
  listBorderedCls: string;
  /**
   * @desc 最小高度
   * @descEN Minimum height
   */
  minHeight: number | string;
}

const genBorderedStyle = (token: ListToken): CSSObject => {
  const {
    listBorderedCls,
    componentCls,
    paddingLG,
    margin,
    itemPaddingSM,
    itemPaddingLG,
    marginLG,
    borderRadiusLG,
  } = token;
  return {
    [listBorderedCls]: {
      border: `${unit(token.lineWidth)} ${token.lineType} ${token.colorBorder}`,
      borderRadius: borderRadiusLG,
      [`${componentCls}-header,${componentCls}-footer,${componentCls}-item`]: {
        paddingInline: paddingLG,
      },

      [`${componentCls}-pagination`]: {
        margin: `${unit(margin)} ${unit(marginLG)}`,
      },
    },
    [`${listBorderedCls}${componentCls}-sm`]: {
      [`${componentCls}-item,${componentCls}-header,${componentCls}-footer`]: {
        padding: itemPaddingSM,
      },
    },

    [`${listBorderedCls}${componentCls}-lg`]: {
      [`${componentCls}-item,${componentCls}-header,${componentCls}-footer`]: {
        padding: itemPaddingLG,
      },
    },
  };
};
const genResponsiveStyle = (token: ListToken): CSSObject => {
  const { componentCls, screenSM, screenMD, marginLG, marginSM, margin } = token;
  return {
    [`@media screen and (max-width:${screenMD}px)`]: {
      [componentCls]: {
        [`${componentCls}-item`]: {
          [`${componentCls}-item-action`]: {
            marginInlineStart: marginLG,
          },
        },
      },

      [`${componentCls}-vertical`]: {
        [`${componentCls}-item`]: {
          [`${componentCls}-item-extra`]: {
            marginInlineStart: marginLG,
          },
        },
      },
    },

    [`@media screen and (max-width: ${screenSM}px)`]: {
      [componentCls]: {
        [`${componentCls}-item`]: {
          flexWrap: 'wrap',

          [`${componentCls}-action`]: {
            marginInlineStart: marginSM,
          },
        },
      },

      [`${componentCls}-vertical`]: {
        [`${componentCls}-item`]: {
          flexWrap: 'wrap-reverse',

          [`${componentCls}-item-main`]: {
            minWidth: token.contentWidth,
          },

          [`${componentCls}-item-extra`]: {
            margin: `auto auto ${unit(margin)}`,
          },
        },
      },
    },
  };
};

// =============================== Base ===============================
const genBaseStyle: GenerateStyle<ListToken> = (token) => {
  const {
    componentCls,
    antCls,
    controlHeight,
    minHeight,
    paddingSM,
    marginLG,
    padding,
    itemPadding,
    colorPrimary,
    itemPaddingSM,
    itemPaddingLG,
    paddingXS,
    margin,
    colorText,
    colorTextDescription,
    motionDurationSlow,
    lineWidth,
    headerBg,
    footerBg,
    emptyTextPadding,
    metaMarginBottom,
    avatarMarginRight,
    titleMarginBottom,
    descriptionFontSize,
  } = token;

  return {
    [componentCls]: {
      ...resetComponent(token),
      position: 'relative',
      '*': {
        outline: 'none',
      },
      [`${componentCls}-header`]: {
        background: headerBg,
      },
      [`${componentCls}-footer`]: {
        background: footerBg,
      },
      [`${componentCls}-header, ${componentCls}-footer`]: {
        paddingBlock: paddingSM,
      },

      [`${componentCls}-pagination`]: {
        marginBlockStart: marginLG,

        // https://github.com/ant-design/ant-design/issues/20037
        [`${antCls}-pagination-options`]: {
          textAlign: 'start',
        },
      },

      [`${componentCls}-spin`]: {
        minHeight,
        textAlign: 'center',
      },

      [`${componentCls}-items`]: {
        margin: 0,
        padding: 0,
        listStyle: 'none',
      },

      [`${componentCls}-item`]: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: itemPadding,
        color: colorText,

        [`${componentCls}-item-meta`]: {
          display: 'flex',
          flex: 1,
          alignItems: 'flex-start',
          maxWidth: '100%',

          [`${componentCls}-item-meta-avatar`]: {
            marginInlineEnd: avatarMarginRight,
          },

          [`${componentCls}-item-meta-section`]: {
            flex: '1 0',
            width: 0,
            color: colorText,
          },

          [`${componentCls}-item-meta-title`]: {
            margin: `0 0 ${unit(token.marginXXS)} 0`,
            color: colorText,
            fontSize: token.fontSize,
            lineHeight: token.lineHeight,

            '> a': {
              color: colorText,
              transition: `all ${motionDurationSlow}`,

              '&:hover': {
                color: colorPrimary,
              },
            },
          },

          [`${componentCls}-item-meta-description`]: {
            color: colorTextDescription,
            fontSize: descriptionFontSize,
            lineHeight: token.lineHeight,
          },
        },

        [`${componentCls}-item-action`]: {
          flex: '0 0 auto',
          marginInlineStart: token.marginXXL,
          padding: 0,
          fontSize: 0,
          listStyle: 'none',

          '& > li': {
            position: 'relative',
            display: 'inline-block',
            padding: `0 ${unit(paddingXS)}`,
            color: colorTextDescription,
            fontSize: token.fontSize,
            lineHeight: token.lineHeight,
            textAlign: 'center',

            '&:first-child': {
              paddingInlineStart: 0,
            },
          },

          [`${componentCls}-item-action-split`]: {
            position: 'absolute',
            insetBlockStart: '50%',
            insetInlineEnd: 0,
            width: lineWidth,
            height: token.calc(token.fontHeight).sub(token.calc(token.marginXXS).mul(2)).equal(),
            transform: 'translateY(-50%)',
            backgroundColor: token.colorSplit,
          },
        },
      },

      [`${componentCls}-empty`]: {
        padding: `${unit(padding)} 0`,
        color: colorTextDescription,
        fontSize: token.fontSizeSM,
        textAlign: 'center',
      },

      [`${componentCls}-empty-text`]: {
        padding: emptyTextPadding,
        color: token.colorTextDisabled,
        fontSize: token.fontSize,
        textAlign: 'center',
      },

      // ============================ without flex ============================
      [`${componentCls}-item-no-flex`]: {
        display: 'block',
      },
    },
    [`${componentCls}-grid ${antCls}-col > ${componentCls}-item`]: {
      display: 'block',
      maxWidth: '100%',
      marginBlockEnd: margin,
      paddingBlock: 0,
      borderBlockEnd: 'none',
    },
    [`${componentCls}-vertical ${componentCls}-item`]: {
      alignItems: 'initial',

      [`${componentCls}-item-main`]: {
        display: 'block',
        flex: 1,
      },

      [`${componentCls}-item-extra`]: {
        marginInlineStart: marginLG,
      },

      [`${componentCls}-item-meta`]: {
        marginBlockEnd: metaMarginBottom,

        [`${componentCls}-item-meta-title`]: {
          marginBlockStart: 0,
          marginBlockEnd: titleMarginBottom,
          color: colorText,
          fontSize: token.fontSizeLG,
          lineHeight: token.lineHeightLG,
        },
      },

      [`${componentCls}-item-action`]: {
        marginBlockStart: padding,
        marginInlineStart: 'auto',

        '> li': {
          padding: `0 ${unit(padding)}`,

          '&:first-child': {
            paddingInlineStart: 0,
          },
        },
      },
    },

    [`${componentCls}-split ${componentCls}-item`]: {
      borderBlockEnd: `${unit(token.lineWidth)} ${token.lineType} ${token.colorSplit}`,

      '&:last-child': {
        borderBlockEnd: 'none',
      },
    },

    [`${componentCls}-split ${componentCls}-header`]: {
      borderBlockEnd: `${unit(token.lineWidth)} ${token.lineType} ${token.colorSplit}`,
    },
    [`${componentCls}-split${componentCls}-empty ${componentCls}-footer`]: {
      borderTop: `${unit(token.lineWidth)} ${token.lineType} ${token.colorSplit}`,
    },
    [`${componentCls}-loading ${componentCls}-spin-nested-loading`]: {
      minHeight: controlHeight,
    },
    [`${componentCls}-split${componentCls}-something-after-last-item ${antCls}-spin-container > ${componentCls}-items > ${componentCls}-item:last-child`]:
      {
        borderBlockEnd: `${unit(token.lineWidth)} ${token.lineType} ${token.colorSplit}`,
      },
    [`${componentCls}-lg ${componentCls}-item`]: {
      padding: itemPaddingLG,
    },
    [`${componentCls}-sm ${componentCls}-item`]: {
      padding: itemPaddingSM,
    },
    // Horizontal
    [`${componentCls}:not(${componentCls}-vertical)`]: {
      [`${componentCls}-item-no-flex`]: {
        [`${componentCls}-item-action`]: {
          float: 'right',
        },
      },
    },
  };
};

export const prepareComponentToken: GetDefaultToken<'List'> = (token) => ({
  contentWidth: 220,
  itemPadding: `${unit(token.paddingContentVertical)} 0`,
  itemPaddingSM: `${unit(token.paddingContentVerticalSM)} ${unit(token.paddingContentHorizontal)}`,
  itemPaddingLG: `${unit(token.paddingContentVerticalLG)} ${unit(
    token.paddingContentHorizontalLG,
  )}`,
  headerBg: 'transparent',
  footerBg: 'transparent',
  emptyTextPadding: token.padding,
  metaMarginBottom: token.padding,
  avatarMarginRight: token.padding,
  titleMarginBottom: token.paddingSM,
  descriptionFontSize: token.fontSize,
});

// ============================== Export ==============================
export default genStyleHooks(
  'List',
  (token) => {
    const listToken = mergeToken<ListToken>(token, {
      listBorderedCls: `${token.componentCls}-bordered`,
      minHeight: token.controlHeightLG,
    });

    return [genBaseStyle(listToken), genBorderedStyle(listToken), genResponsiveStyle(listToken)];
  },
  prepareComponentToken,
);
