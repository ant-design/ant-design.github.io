import type { CSSObject } from '@ant-design/cssinjs';

import { resetComponent, resetIcon, textEllipsis } from '../../style';
import { genCompactItemStyle } from '../../style/compact-item';
import type { GenerateStyle } from '../../theme/internal';
import { genStyleHooks, mergeToken } from '../../theme/internal';
import genDropdownStyle from './dropdown';
import genMultipleStyle from './multiple';
import genSingleStyle from './single';
import type { ComponentToken, SelectToken } from './token';
import { prepareComponentToken } from './token';
import genVariantsStyle from './variants';

export type { ComponentToken };

// ============================= Selector =============================
const genSelectorStyle: GenerateStyle<SelectToken, CSSObject> = (token) => {
  const { componentCls } = token;

  return {
    position: 'relative',
    transition: `all ${token.motionDurationMid} ${token.motionEaseInOut}`,

    input: {
      cursor: 'pointer',
    },

    [`${componentCls}-show-search&`]: {
      cursor: 'text',

      input: {
        cursor: 'auto',
        color: 'inherit',
        height: '100%',
      },
    },

    [`${componentCls}-disabled&`]: {
      cursor: 'not-allowed',

      input: {
        cursor: 'not-allowed',
      },
    },
  };
};

// ============================== Styles ==============================
// /* Reset search input style */
const getSearchInputWithoutBorderStyle: GenerateStyle<SelectToken, CSSObject> = (token) => {
  const { componentCls } = token;

  return {
    [`${componentCls}-selection-search-input`]: {
      margin: 0,
      padding: 0,
      background: 'transparent',
      border: 'none',
      outline: 'none',
      appearance: 'none',
      fontFamily: 'inherit',

      '&::-webkit-search-cancel-button': {
        display: 'none',
        '-webkit-appearance': 'none',
      },
    },
  };
};

// =============================== Base ===============================
const genBaseStyle: GenerateStyle<SelectToken> = (token) => {
  const { antCls, componentCls, inputPaddingHorizontalBase, iconCls } = token;

  return {
    [componentCls]: {
      ...resetComponent(token),
      position: 'relative',
      display: 'inline-flex',
      cursor: 'pointer',

      [`&:not(${componentCls}-customize-input) ${componentCls}-selector`]: {
        ...genSelectorStyle(token),
        ...getSearchInputWithoutBorderStyle(token),
      },

      // ======================== Selection ========================
      [`${componentCls}-selection-item`]: {
        flex: 1,
        fontWeight: 'normal',
        position: 'relative',
        userSelect: 'none',
        ...textEllipsis,

        // https://github.com/ant-design/ant-design/issues/40421
        [`> ${antCls}-typography`]: {
          display: 'inline',
        },
      },

      // ======================= Placeholder =======================
      [`${componentCls}-selection-placeholder`]: {
        ...textEllipsis,
        flex: 1,
        color: token.colorTextPlaceholder,
        pointerEvents: 'none',
      },

      // ========================== Arrow ==========================
      [`${componentCls}-arrow`]: {
        ...resetIcon(),
        position: 'absolute',
        top: '50%',
        insetInlineStart: 'auto',
        insetInlineEnd: inputPaddingHorizontalBase,
        height: token.fontSizeIcon,
        marginTop: token.calc(token.fontSizeIcon).mul(-1).div(2).equal(),
        color: token.colorTextQuaternary,
        fontSize: token.fontSizeIcon,
        lineHeight: 1,
        textAlign: 'center',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        transition: `opacity ${token.motionDurationSlow} ease`,

        [iconCls]: {
          verticalAlign: 'top',
          transition: `transform ${token.motionDurationSlow}`,

          '> svg': {
            verticalAlign: 'top',
          },

          [`&:not(${componentCls}-suffix)`]: {
            pointerEvents: 'auto',
          },
        },

        [`${componentCls}-disabled &`]: {
          cursor: 'not-allowed',
        },

        '> *:not(:last-child)': {
          marginInlineEnd: 8, // FIXME: magic
        },
      },

      // ========================== Wrap ===========================
      [`${componentCls}-selection-wrap`]: {
        display: 'flex',
        width: '100%',
        position: 'relative',
        minWidth: 0,

        // https://github.com/ant-design/ant-design/issues/51669
        '&:after': {
          content: '"\\a0"',
          width: 0,
          overflow: 'hidden',
        },
      },

      // ========================= Prefix ==========================
      [`${componentCls}-prefix`]: {
        flex: 'none',
        marginInlineEnd: token.selectAffixPadding,
      },

      // ========================== Clear ==========================
      [`${componentCls}-clear`]: {
        position: 'absolute',
        top: '50%',
        insetInlineStart: 'auto',
        insetInlineEnd: inputPaddingHorizontalBase,
        zIndex: 1,
        display: 'inline-block',
        width: token.fontSizeIcon,
        height: token.fontSizeIcon,
        marginTop: token.calc(token.fontSizeIcon).mul(-1).div(2).equal(),
        color: token.colorTextQuaternary,
        fontSize: token.fontSizeIcon,
        fontStyle: 'normal',
        lineHeight: 1,
        textAlign: 'center',
        textTransform: 'none',
        cursor: 'pointer',
        opacity: 0,
        transition: `color ${token.motionDurationMid} ease, opacity ${token.motionDurationSlow} ease`,
        textRendering: 'auto',

        '&:before': {
          display: 'block',
        },

        '&:hover': {
          color: token.colorTextTertiary,
        },
      },

      '@media(hover:none)': {
        [`${componentCls}-clear`]: {
          opacity: 1,
        },
        [`&:has(${componentCls}-clear) ${componentCls}-arrow`]: {
          opacity: 0,
        },
      },

      [`&:hover ${componentCls}-clear`]: {
        opacity: 1,
        background: token.colorBgBase,
        borderRadius: '50%',
      },
    },

    // ========================= Feedback ==========================
    [`${componentCls}-status`]: {
      '&-error, &-warning, &-success, &-validating': {
        [`&${componentCls}-has-feedback`]: {
          [`${componentCls}-clear`]: {
            insetInlineEnd: token
              .calc(inputPaddingHorizontalBase)
              .add(token.fontSize)
              .add(token.paddingXS)
              .equal(),
          },
        },
      },
    },
  };
};

// ============================== Styles ==============================
const genSelectStyle: GenerateStyle<SelectToken> = (token) => {
  const { componentCls } = token;

  return [
    {
      [componentCls]: {
        // ==================== In Form ====================
        [`&${componentCls}-in-form-item`]: {
          width: '100%',
        },
      },
    },

    // =====================================================
    // ==                       LTR                       ==
    // =====================================================
    // Base
    genBaseStyle(token),

    // Single
    genSingleStyle(token),

    // Multiple
    genMultipleStyle(token),

    // Dropdown
    genDropdownStyle(token),

    // =====================================================
    // ==                       RTL                       ==
    // =====================================================
    {
      [`${componentCls}-rtl`]: {
        direction: 'rtl',
      },
    },

    // =====================================================
    // ==             Space Compact                       ==
    // =====================================================
    genCompactItemStyle(token, {
      borderElCls: `${componentCls}-selector`,
      focusElCls: `${componentCls}-focused`,
    }),
  ];
};

// ============================== Export ==============================
export default genStyleHooks(
  'Select',
  (token, { rootPrefixCls }) => {
    const selectToken: SelectToken = mergeToken<SelectToken>(token, {
      rootPrefixCls,
      inputPaddingHorizontalBase: token.calc(token.paddingSM).sub(1).equal(),
      multipleSelectItemHeight: token.multipleItemHeight,
      selectHeight: token.controlHeight,
    });

    return [genSelectStyle(selectToken), genVariantsStyle(selectToken)];
  },
  prepareComponentToken,
  {
    unitless: {
      optionLineHeight: true,
      optionSelectedFontWeight: true,
    },
  },
);
