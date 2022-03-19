// deps-lint-skip-all
import { CSSObject } from '@ant-design/cssinjs';
import { TinyColor } from '@ctrl/tinycolor';
import {
  DerivativeToken,
  GenerateStyle,
  resetComponent,
  UseComponentStyleResult,
  useStyleRegister,
  useToken,
} from '../../_util/theme';

export interface ImageToken extends DerivativeToken {
  prefixCls: string;
  previewPrefixCls: string;
  iconPrefixCls: string;
  imageSizeBase: number;
  marginXXS: number;
  imageBg: string;
  imageColor: string;
  imagePreviewOperationColor: string;
  imagePreviewOperationDisabledColor: string;
  imageMaskFontSize: number;
  iconPrefixClsFontSize: number;
  imagePreviewOperationSize: number;
  imageFontSizeBase: number;
  animationDurationSlow: string;
  switchLeft: number;
  switchRight: number;
  switchWidth: number;
  switchHeight: number;
  switchMarginTop: number;
  width1px: number;
}

export type PositionType = 'static' | 'relative' | 'fixed' | 'absolute' | 'sticky' | undefined;

export const genBoxStyle = (position?: PositionType): CSSObject => ({
  position: position || 'absolute',
  inset: 0,
});

export const genImageMaskStyle = (token: ImageToken): CSSObject => {
  const { iconPrefixCls, white, black, animationDurationSlow, paddingXXS, marginXXS, prefixCls } =
    token;
  return {
    position: 'absolute',
    inset: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: white,
    background: new TinyColor(black).setAlpha(0.5).toRgbString(),
    cursor: 'pointer',
    opacity: 0,
    transition: `opacity ${animationDurationSlow}`,

    [`.${prefixCls}-mask-info`]: {
      padding: `0 ${paddingXXS}`,
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
      [`.${iconPrefixCls}`]: {
        marginInlineEnd: marginXXS,
      },
    },
  };
};

export const genPreviewOperationsStyle = (token: ImageToken): CSSObject => {
  const {
    imagePreviewOperationColor,
    modalMaskBg,
    paddingSM,
    imagePreviewOperationDisabledColor,
    imagePreviewOperationSize,
    previewPrefixCls,
  } = token;
  return {
    ...resetComponent(token),
    position: 'absolute',
    insetBlockStart: 0,
    insetInlineEnd: 0,
    zIndex: 1,
    display: 'flex',
    flexDirection: 'row-reverse',
    alignItems: 'center',
    width: '100%',
    color: imagePreviewOperationColor,
    listStyle: 'none',
    background: new TinyColor(modalMaskBg).setAlpha(0.1).toRgbString(),
    pointerEvents: 'auto',

    [`.${previewPrefixCls}-operations-operation`]: {
      marginInlineStart: paddingSM,
      padding: paddingSM,
      cursor: 'pointer',

      '&-disabled': {
        color: imagePreviewOperationDisabledColor,
        pointerEvents: 'none',
      },

      '&:last-of-type': {
        marginInlineStart: 0,
      },
    },

    [`.${previewPrefixCls}-icon`]: {
      fontSize: imagePreviewOperationSize,
    },
  };
};
export const genPreviewSwitchStyle = (token: ImageToken): CSSObject => {
  const {
    imagePreviewOperationColor,
    modalMaskBg,
    iconPrefixCls,
    imagePreviewOperationDisabledColor,
    previewPrefixCls,
    switchWidth,
    switchRight,
    switchHeight,
    switchMarginTop,
    iconPrefixClsFontSize,
  } = token;
  return {
    position: 'absolute',
    insetBlockStart: '50%',
    insetInlineEnd: switchRight,
    zIndex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: switchWidth,
    height: switchHeight,
    marginTop: switchMarginTop,
    color: imagePreviewOperationColor,
    background: new TinyColor(modalMaskBg).setAlpha(0.1).toRgbString(),
    borderRadius: '50%',
    cursor: 'pointer',
    pointerEvents: 'auto',

    [`.${previewPrefixCls}-disabled`]: {
      color: imagePreviewOperationDisabledColor,
      cursor: 'not-allowed',
      [`> .${iconPrefixCls}`]: {
        cursor: 'not-allowed',
      },
    },
    [`> .${iconPrefixCls}`]: {
      fontSize: iconPrefixClsFontSize,
    },
  };
};

export const genImagePreviewStyle = (token: ImageToken): CSSObject => {
  const { easeOut, previewPrefixCls, switchRight, switchLeft, width1px } = token;
  return {
    height: '100%',
    textAlign: 'center',
    [`.${previewPrefixCls}-body`]: {
      ...genBoxStyle(),
      overflow: 'hidden',
    },

    [`.${previewPrefixCls}-img`]: {
      maxWidth: '100%',
      maxHeight: '100%',
      verticalAlign: 'middle',
      transform: 'scale3d(1, 1, 1)',
      cursor: 'grab',
      transition: `transform 0.3s ${easeOut} 0s`,
      userSelect: 'none',
      pointerEvents: 'auto',

      '&-wrapper': {
        ...genBoxStyle(),
        transition: `transform 0.3s ${easeOut} 0s`,

        '&::before': {
          display: 'inline-block',
          width: width1px,
          height: '50%',
          marginInlineEnd: -width1px,
          content: '""',
        },
      },
    },

    [`.${previewPrefixCls}-moving`]: {
      [`.${previewPrefixCls}-preview-img`]: {
        cursor: 'grabbing',

        '&-wrapper': {
          transitionDuration: '0s',
        },
      },
    },

    [`.${previewPrefixCls}-operations`]: {
      ...genPreviewOperationsStyle(token),
    },

    [`.${previewPrefixCls}-switch-left, .${previewPrefixCls}-switch-right`]: {
      ...genPreviewSwitchStyle(token),
    },

    [`.${previewPrefixCls}-switch-left`]: {
      insetInlineStart: switchLeft,
    },

    [`.${previewPrefixCls}-switch-right`]: {
      insetInlineEnd: switchRight,
    },
  };
};

const genImageStyle: GenerateStyle<ImageToken> = (token: ImageToken) => {
  const {
    prefixCls,
    zIndexModalMask,
    modalMaskBg,
    previewPrefixCls,
    imageBg,
    zIndexImage,
    animationDurationSlow,
  } = token;
  return {
    // ============================== image ==============================
    [`.${prefixCls}`]: {
      position: 'relative',
      display: 'inline-block',
      [`.${prefixCls}-img`]: {
        width: '100%',
        height: 'auto',
        verticalAlign: 'middle',
      },
      [`.${prefixCls}-img-placeholder`]: {
        backgroundColor: imageBg,
        backgroundImage:
          "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTQuNSAyLjVoLTEzQS41LjUgMCAwIDAgMSAzdjEwYS41LjUgMCAwIDAgLjUuNWgxM2EuNS41IDAgMCAwIC41LS41VjNhLjUuNSAwIDAgMC0uNS0uNXpNNS4yODEgNC43NWExIDEgMCAwIDEgMCAyIDEgMSAwIDAgMSAwLTJ6bTguMDMgNi44M2EuMTI3LjEyNyAwIDAgMS0uMDgxLjAzSDIuNzY5YS4xMjUuMTI1IDAgMCAxLS4wOTYtLjIwN2wyLjY2MS0zLjE1NmEuMTI2LjEyNiAwIDAgMSAuMTc3LS4wMTZsLjAxNi4wMTZMNy4wOCAxMC4wOWwyLjQ3LTIuOTNhLjEyNi4xMjYgMCAwIDEgLjE3Ny0uMDE2bC4wMTUuMDE2IDMuNTg4IDQuMjQ0YS4xMjcuMTI3IDAgMCAxLS4wMi4xNzV6IiBmaWxsPSIjOEM4QzhDIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48L3N2Zz4=')",
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        backgroundSize: '30%',
      },

      [`.${prefixCls}-mask`]: {
        ...genImageMaskStyle(token),
      },
      [`.${prefixCls}-mask:hover`]: {
        opacity: 1,
      },
      [`.${prefixCls}-placeholder`]: {
        ...genBoxStyle(),
      },
    },
    // ============================== preview ==============================
    pointerEvents: 'none',
    [`.${previewPrefixCls}.${prefixCls}-zoom-enter, .${previewPrefixCls}.${prefixCls}zoom-appear`]:
      {
        transform: 'none',
        opacity: 0,
        animationDuration: animationDurationSlow,
        userSelect: 'none', // https://github.com/ant-design/ant-design/issues/11777
      },
    [`.${previewPrefixCls}-root`]: {
      [`.${previewPrefixCls}-mask`]: {
        ...genBoxStyle('fixed'),
        zIndex: zIndexModalMask,
        height: '100%',
        backgroundColor: modalMaskBg,

        '&-hidden': {
          display: 'none',
        },
      },
      [`.${previewPrefixCls}-wrap`]: {
        ...genBoxStyle('fixed'),
        overflow: 'auto',
        outline: 0,
        WebkitOverflowScrolling: 'touch',
        zIndex: zIndexImage,
        [`.${previewPrefixCls}`]: {
          ...genImagePreviewStyle(token),
        },
      },
    },
  };
};

// ============================== Export ==============================
export default function useStyle(
  prefixCls: string,
  iconPrefixCls: string,
): UseComponentStyleResult {
  const [theme, token, hashId] = useToken();

  const inputToken: ImageToken = {
    ...token,
    prefixCls,
    iconPrefixCls,
    previewPrefixCls: `${prefixCls}-preview`,

    animationDurationSlow: '0.3s', // FIXME: hard code in v4
    imageSizeBase: 48,
    imageFontSizeBase: 24,
    imageBg: '#f5f5f5',
    imageColor: '#fff',
    imageMaskFontSize: 16,
    imagePreviewOperationSize: 18,
    iconPrefixClsFontSize: 18,
    switchWidth: 44,
    switchHeight: 44,
    switchRight: 10,
    switchLeft: 10,
    switchMarginTop: -22,
    width1px: 1,
  };

  return [
    useStyleRegister({ theme, token, hashId, path: [prefixCls] }, () => [
      genImageStyle(inputToken, hashId),
    ]),
    hashId,
  ];
}
