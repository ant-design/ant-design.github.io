// deps-lint-skip-all
import type { CSSObject } from '@ant-design/cssinjs';
import { Keyframes } from '@ant-design/cssinjs';

import { TinyColor } from '@ctrl/tinycolor';
import type { FullToken, GenerateStyle } from '../../_util/theme';
import { genComponentStyleHook, mergeToken } from '../../_util/theme';

export type ComponentToken = {
  color: string;
  colorGradientEnd: string;
};

const skeletonClsLoading = new Keyframes(`ant-skeleton-loading`, {
  '0%': {
    transform: 'translateX(-37.5%)',
  },
  '100%': {
    transform: 'translateX(37.5%)',
  },
});

interface SkeletonToken extends FullToken<'Skeleton'> {
  skeletonAvatarCls: string;
  skeletonTitleCls: string;
  skeletonParagraphCls: string;
  skeletonButtonCls: string;
  skeletonInputCls: string;
  skeletonImageCls: string;
  imageSizeBase: number;
  skeletonTitleHeight: number;
  skeletonBlockRadius: number;
  skeletonParagraphLineHeight: number;
  skeletonParagraphMarginTop: number;
  skeletonLoadingBackground: string;
  skeletonLoadingMotionDuration: string;
  borderRadius: number;
}

const genSkeletonElementCommonSize = (size: number): CSSObject => ({
  height: size,
  lineHeight: `${size}px`,
});

const genSkeletonElementAvatarSize = (size: number): CSSObject => ({
  width: size,
  ...genSkeletonElementCommonSize(size),
});

const genSkeletonColor = (token: SkeletonToken): CSSObject => ({
  position: 'relative',
  overflow: 'hidden',
  background: 'transparent',
  '&::after': {
    position: 'absolute',
    top: 0,
    insetInlineEnd: '-150%',
    bottom: 0,
    insetInlineStart: '-150%',
    background: token.skeletonLoadingBackground,
    animationName: skeletonClsLoading,
    animationDuration: token.skeletonLoadingMotionDuration,
    animationTimingFunction: 'ease',
    animationIterationCount: 'infinite',
    content: '""',
  },
});

const genSkeletonElementInputSize = (size: number): CSSObject => ({
  width: size * 5,
  minWidth: size * 5,
  ...genSkeletonElementCommonSize(size),
});

const genSkeletonElementAvatar = (token: SkeletonToken): CSSObject => {
  const { skeletonAvatarCls, color, controlHeight, controlHeightLG, controlHeightSM } = token;
  return {
    [`${skeletonAvatarCls}`]: {
      display: 'inline-block',
      verticalAlign: 'top',
      background: color,
      ...genSkeletonElementAvatarSize(controlHeight),
    },
    [`${skeletonAvatarCls}${skeletonAvatarCls}-circle`]: {
      borderRadius: '50%',
    },
    [`${skeletonAvatarCls}${skeletonAvatarCls}-lg`]: {
      ...genSkeletonElementAvatarSize(controlHeightLG),
    },
    [`${skeletonAvatarCls}${skeletonAvatarCls}-sm`]: {
      ...genSkeletonElementAvatarSize(controlHeightSM),
    },
  };
};

const genSkeletonElementInput = (token: SkeletonToken): CSSObject => {
  const { controlHeight, skeletonInputCls, controlHeightLG, controlHeightSM, color } = token;
  return {
    [`${skeletonInputCls}`]: {
      display: 'inline-block',
      verticalAlign: 'top',
      background: color,
      ...genSkeletonElementInputSize(controlHeight),
    },

    [`${skeletonInputCls}-lg`]: {
      ...genSkeletonElementInputSize(controlHeightLG),
    },

    [`${skeletonInputCls}-sm`]: {
      ...genSkeletonElementInputSize(controlHeightSM),
    },
  };
};

const genSkeletonElementImageSize = (size: number): CSSObject => ({
  width: size,
  ...genSkeletonElementCommonSize(size),
});

const genSkeletonElementImage = (token: SkeletonToken): CSSObject => {
  const { skeletonImageCls, imageSizeBase, color } = token;
  return {
    [`${skeletonImageCls}`]: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      verticalAlign: 'top',
      background: color,
      ...genSkeletonElementImageSize(imageSizeBase * 2),
      [`${skeletonImageCls}-path`]: {
        fill: '#bfbfbf',
      },
      [`${skeletonImageCls}-svg`]: {
        ...genSkeletonElementImageSize(imageSizeBase),
        maxWidth: imageSizeBase * 4,
        maxHeight: imageSizeBase * 4,
      },
      [`${skeletonImageCls}-svg${skeletonImageCls}-svg-circle`]: {
        borderRadius: '50%',
      },
    },
    [`${skeletonImageCls}${skeletonImageCls}-circle`]: {
      borderRadius: '50%',
    },
  };
};
const genSkeletonElementButtonShape = (
  token: SkeletonToken,
  size: number,
  buttonCls: string,
): CSSObject => {
  const { skeletonButtonCls } = token;
  return {
    [`${buttonCls}${skeletonButtonCls}-circle`]: {
      width: size,
      minWidth: size,
      borderRadius: '50%',
    },
    [`${buttonCls}${skeletonButtonCls}-round`]: {
      borderRadius: size,
    },
  };
};

const genSkeletonElementButtonSize = (size: number): CSSObject => ({
  width: size * 2,
  minWidth: size * 2,
  ...genSkeletonElementCommonSize(size),
});

const genSkeletonElementButton = (token: SkeletonToken): CSSObject => {
  const { radiusBase, skeletonButtonCls, controlHeight, controlHeightLG, controlHeightSM, color } =
    token;
  return {
    [`${skeletonButtonCls}`]: {
      display: 'inline-block',
      verticalAlign: 'top',
      background: color,
      borderRadius: radiusBase,
      width: controlHeight * 2,
      minWidth: controlHeight * 2,
      ...genSkeletonElementButtonSize(controlHeight),
    },
    ...genSkeletonElementButtonShape(token, controlHeight, skeletonButtonCls),

    [`${skeletonButtonCls}-lg`]: {
      ...genSkeletonElementButtonSize(controlHeightLG),
    },
    ...genSkeletonElementButtonShape(token, controlHeightLG, `${skeletonButtonCls}-lg`),

    [`${skeletonButtonCls}-sm`]: {
      ...genSkeletonElementButtonSize(controlHeightSM),
    },
    ...genSkeletonElementButtonShape(token, controlHeightSM, `${skeletonButtonCls}-sm`),
  };
};

// =============================== Base ===============================
const genBaseStyle: GenerateStyle<SkeletonToken> = (token: SkeletonToken) => {
  const {
    componentCls,
    skeletonAvatarCls,
    skeletonTitleCls,
    skeletonParagraphCls,
    skeletonButtonCls,
    skeletonInputCls,
    skeletonImageCls,
    controlHeight,
    controlHeightLG,
    controlHeightSM,
    color,
    padding,
    marginSM,
    borderRadius,
    skeletonTitleHeight,
    skeletonBlockRadius,
    skeletonParagraphLineHeight,
    controlHeightXS,
    skeletonParagraphMarginTop,
  } = token;

  return {
    [`${componentCls}`]: {
      display: 'table',
      width: '100%',

      [`${componentCls}-header`]: {
        display: 'table-cell',
        paddingInlineEnd: padding,
        verticalAlign: 'top',

        // Avatar
        [`${skeletonAvatarCls}`]: {
          display: 'inline-block',
          verticalAlign: 'top',
          background: color,
          ...genSkeletonElementAvatarSize(controlHeight),
        },
        [`${skeletonAvatarCls}-circle`]: {
          borderRadius: '50%',
        },
        [`${skeletonAvatarCls}-lg`]: {
          ...genSkeletonElementAvatarSize(controlHeightLG),
        },
        [`${skeletonAvatarCls}-sm`]: {
          ...genSkeletonElementAvatarSize(controlHeightSM),
        },
      },
      [`${componentCls}-content`]: {
        display: 'table-cell',
        width: '100%',
        verticalAlign: 'top',

        // Title
        [`${skeletonTitleCls}`]: {
          width: '100%',
          height: skeletonTitleHeight,
          background: color,
          borderRadius: skeletonBlockRadius,
          [`+ ${skeletonParagraphCls}`]: {
            marginBlockStart: controlHeightSM,
          },
        },

        // paragraph
        [`${skeletonParagraphCls}`]: {
          padding: 0,
          '> li': {
            width: '100%',
            height: skeletonParagraphLineHeight,
            listStyle: 'none',
            background: color,
            borderRadius: skeletonBlockRadius,
            '+ li': {
              marginBlockStart: controlHeightXS,
            },
          },
        },

        [`${skeletonParagraphCls}> li:last-child:not(:first-child):not(:nth-child(2))`]: {
          width: '61%',
        },
      },

      [`&-round ${componentCls}-content`]: {
        [`${skeletonTitleCls}, ${skeletonParagraphCls} > li`]: {
          borderRadius,
        },
      },
    },
    [`${componentCls}-with-avatar ${componentCls}-content`]: {
      // Title
      [`${skeletonTitleCls}`]: {
        marginBlockStart: marginSM,

        [`+ ${skeletonParagraphCls}`]: {
          marginBlockStart: skeletonParagraphMarginTop,
        },
      },
    },
    // Skeleton element
    [`${componentCls}${componentCls}-element`]: {
      display: 'inline-block',
      width: 'auto',

      ...genSkeletonElementButton(token),
      ...genSkeletonElementAvatar(token),
      ...genSkeletonElementInput(token),
      ...genSkeletonElementImage(token),
    },
    // Skeleton Block Button, Input
    [`${componentCls}${componentCls}-block`]: {
      width: '100%',

      [`${skeletonButtonCls}`]: {
        width: '100%',
      },

      [`${skeletonInputCls}`]: {
        width: '100%',
      },
    },
    // With active animation
    [`${componentCls}${componentCls}-active`]: {
      [`${componentCls}-content`]: {
        [`${skeletonTitleCls}, ${skeletonParagraphCls} > li`]: {
          ...genSkeletonColor(token),
        },
      },
      [`${skeletonAvatarCls}`]: {
        ...genSkeletonColor(token),
      },

      [`${skeletonButtonCls}`]: {
        ...genSkeletonColor(token),
      },

      [`${skeletonInputCls}`]: {
        ...genSkeletonColor(token),
      },
      [`${skeletonImageCls}`]: {
        ...genSkeletonColor(token),
      },
    },
  };
};

// ============================== Export ==============================
export default genComponentStyleHook(
  'Skeleton',
  token => {
    const { componentCls } = token;

    const skeletonToken = mergeToken<SkeletonToken>(token, {
      skeletonAvatarCls: `${componentCls}-avatar`,
      skeletonTitleCls: `${componentCls}-title`,
      skeletonParagraphCls: `${componentCls}-paragraph`,
      skeletonButtonCls: `${componentCls}-button`,
      skeletonInputCls: `${componentCls}-input`,
      skeletonImageCls: `${componentCls}-image`,
      imageSizeBase: token.controlHeight * 1.5,
      skeletonTitleHeight: token.controlHeight / 2,
      skeletonBlockRadius: token.radiusLG,
      skeletonParagraphLineHeight: token.controlHeight / 2,
      skeletonParagraphMarginTop: token.marginLG + token.marginXXS,
      borderRadius: 100, // Large number to make capsule shape
      skeletonLoadingBackground: `linear-gradient(90deg, ${token.color} 25%, ${token.colorGradientEnd} 37%, ${token.color} 63%)`,
      skeletonLoadingMotionDuration: '1.4s',
    });
    return [genBaseStyle(skeletonToken)];
  },
  {
    color: new TinyColor({ r: 190, g: 190, b: 190, a: 0.2 }).toRgbString(),
    colorGradientEnd: new TinyColor({ r: 129, g: 129, b: 129, a: 0.24 }).toRgbString(),
  },
);
