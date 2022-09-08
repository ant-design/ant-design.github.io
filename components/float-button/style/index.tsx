import type { CSSObject } from '@ant-design/cssinjs';
import type { FullToken, GenerateStyle } from '../../theme';
import { genComponentStyleHook, mergeToken } from '../../theme';
import { resetComponent } from '../../style';

/** Component only token. Which will handle additional calculation of alias token */
export interface ComponentToken {
  zIndexPopup: number;
}

type FloatButtonToken = FullToken<'FloatButton'> & {
  backTopBackground: string;
  backTopColor: string;
  backTopHoverBackground: string;
  backTopFontSize: number;
  backTopSize: number;

  // Position
  backTopBlockEnd: number;
  backTopInlineEnd: number;
  backTopInlineEndMD: number;
  backTopInlineEndXS: number;
};

// ============================== Shared ==============================
const genSharedBackTopStyle: GenerateStyle<FloatButtonToken, CSSObject> = (token): CSSObject => {
  const { componentCls, backTopFontSize, backTopSize, zIndexPopup } = token;

  return {
    [componentCls]: {
      ...resetComponent(token),

      position: 'fixed',
      insetInlineEnd: token.backTopInlineEnd,
      insetBlockEnd: token.backTopBlockEnd,
      zIndex: zIndexPopup,
      width: 40,
      height: 40,
      cursor: 'pointer',

      '&:empty': {
        display: 'none',
      },

      [`${componentCls}-content`]: {
        width: backTopSize,
        height: backTopSize,
        overflow: 'hidden',
        color: token.backTopColor,
        textAlign: 'center',
        backgroundColor: token.backTopBackground,
        borderRadius: backTopSize,
        transition: `all ${token.motionDurationSlow}`,

        '&:hover': {
          backgroundColor: token.backTopHoverBackground,
          transition: `all ${token.motionDurationSlow}`,
        },
      },

      // change to .backtop .backtop-icon
      [`${componentCls}-icon`]: {
        fontSize: backTopFontSize,
        lineHeight: `${backTopSize}px`,
      },
    },
  };
};

const genMediaBackTopStyle: GenerateStyle<FloatButtonToken> = (token): CSSObject => {
  const { componentCls } = token;
  console.log(componentCls);
  return {
    [`@media (max-width: ${token.screenMD}px)`]: {
      [componentCls]: {
        insetInlineEnd: token.backTopInlineEndMD,
      },
    },

    [`@media (max-width: ${token.screenXS}px)`]: {
      [componentCls]: {
        insetInlineEnd: token.backTopInlineEndXS,
      },
    },
  };
};

// ============================== Export ==============================
export default genComponentStyleHook<'FloatButton'>(
  'FloatButton',

  token => {
    const {
      fontSizeHeading3,
      colorTextDescription,
      colorTextLightSolid,
      colorText,
      controlHeightLG,
    } = token;

    const floatButtonToken = mergeToken<FloatButtonToken>(token, {
      backTopBackground: colorTextDescription,
      backTopColor: colorTextLightSolid,
      backTopHoverBackground: colorText,
      backTopFontSize: fontSizeHeading3,
      backTopSize: controlHeightLG,

      backTopBlockEnd: controlHeightLG * 1.25,
      backTopInlineEnd: controlHeightLG * 2.5,
      backTopInlineEndMD: controlHeightLG * 1.5,
      backTopInlineEndXS: controlHeightLG * 0.5,
    });
    return [genSharedBackTopStyle(floatButtonToken), genMediaBackTopStyle(floatButtonToken)];
  },
  token => ({ zIndexPopup: token.zIndexBase + 10 }),
);
