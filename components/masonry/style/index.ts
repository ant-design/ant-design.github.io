import type { CSSObject } from '@ant-design/cssinjs';

import type { FullToken, GenerateStyle } from '../../theme/internal';
import { genStyleHooks } from '../../theme/internal';

// biome-ignore lint/suspicious/noEmptyInterface: ComponentToken need to be empty by default
export interface ComponentToken {}

export interface MasonryToken extends FullToken<'Masonry'> {}

export const genMasonryStyle: GenerateStyle<MasonryToken> = (token: MasonryToken): CSSObject => {
  const { componentCls } = token;

  const itemCls = `${componentCls}-item`;

  return {
    [componentCls]: {
      position: 'relative',
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column',
      flexWrap: 'wrap',

      '&-rtl': {
        direction: 'rtl',
      },

      [`& > ${itemCls}`]: {
        boxSizing: 'border-box',

        // Motion
        '&-fade': {
          '&-appear': {
            transition: `opacity ${token.motionDurationSlow} ${token.motionEaseOut}`,
            opacity: 0,

            '&-active': {
              opacity: 1,
            },
          },

          '&-leave': {
            transition: `opacity ${token.motionDurationFast} ${token.motionEaseOut}`,
            opacity: 1,

            '&-active': {
              opacity: 0,
            },
          },
        },

        [`&:not(${itemCls}-fade)`]: {
          transition: ['left', 'right', 'top']
            .map((prop) => `${prop} ${token.motionDurationSlow} ${token.motionEaseOut}`)
            .join(','),
        },
      },
    },
  };
};

export default genStyleHooks('Masonry', (token) => [genMasonryStyle(token)]);
