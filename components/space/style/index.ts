import type { FullToken, GenerateStyle, GetDefaultToken } from '../../theme/internal';
import { genStyleHooks, mergeToken } from '../../theme/internal';
import genSpaceCompactStyle from './compact';

/** Component only token. Which will handle additional calculation of alias token */
// biome-ignore lint/suspicious/noEmptyInterface: ComponentToken need to be empty by default
export interface ComponentToken {}

interface SpaceToken extends FullToken<'Space'> {
  spaceGapSmallSize: number;
  spaceGapMiddleSize: number;
  spaceGapLargeSize: number;
}

const genSpaceStyle: GenerateStyle<SpaceToken> = (token) => {
  const { componentCls, antCls } = token;

  return {
    [componentCls]: {
      display: 'inline-flex',
      '&-rtl': {
        direction: 'rtl',
      },
      '&-vertical': {
        flexDirection: 'column',
      },
      '&-align': {
        flexDirection: 'column',
        '&-center': {
          alignItems: 'center',
        },
        '&-start': {
          alignItems: 'flex-start',
        },
        '&-end': {
          alignItems: 'flex-end',
        },
        '&-baseline': {
          alignItems: 'baseline',
        },
      },
      '&-block': {
        display: 'flex',
      },
      [`${componentCls}-item:empty`]: {
        display: 'none',
      },
      // https://github.com/ant-design/ant-design/issues/47875
      [`${componentCls}-item > ${antCls}-badge-not-a-wrapper:only-child`]: {
        display: 'block',
      },
    },
  };
};

const genSpaceGapStyle: GenerateStyle<SpaceToken> = (token) => {
  const { componentCls } = token;
  return {
    [componentCls]: {
      '&-gap-row-small': {
        rowGap: token.spaceGapSmallSize,
      },
      '&-gap-row-middle': {
        rowGap: token.spaceGapMiddleSize,
      },
      '&-gap-row-large': {
        rowGap: token.spaceGapLargeSize,
      },
      '&-gap-col-small': {
        columnGap: token.spaceGapSmallSize,
      },
      '&-gap-col-middle': {
        columnGap: token.spaceGapMiddleSize,
      },
      '&-gap-col-large': {
        columnGap: token.spaceGapLargeSize,
      },
    },
  };
};

// ============================== Export ==============================
export const prepareComponentToken: GetDefaultToken<'Space'> = () => ({});

export default genStyleHooks(
  'Space',
  (token) => {
    const spaceToken = mergeToken<SpaceToken>(token, {
      spaceGapSmallSize: token.paddingXS,
      spaceGapMiddleSize: token.padding,
      spaceGapLargeSize: token.paddingLG,
    });
    return [
      genSpaceStyle(spaceToken),
      genSpaceGapStyle(spaceToken),
      genSpaceCompactStyle(spaceToken),
    ];
  },
  () => ({}),
  {
    // Space component don't apply extra font style
    // https://github.com/ant-design/ant-design/issues/40315
    resetStyle: false,
  },
);
