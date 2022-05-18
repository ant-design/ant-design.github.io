import type { CSSObject } from '@ant-design/cssinjs';
import type { GenerateStyle } from '../../_util/theme';
import type { TableToken } from './index';

const genStyle: GenerateStyle<TableToken, CSSObject> = token => {
  const { componentCls } = token;
  return {
    [`${componentCls}-wrapper`]: {
      [`${componentCls}-cell-ellipsis`]: {
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        wordBreak: 'keep-all',

        // Fixed first or last should special process
        [`
          &${componentCls}-cell-fix-left-last,
          &${componentCls}-cell-fix-right-first
        `]: {
          overflow: 'visible',
          [`${componentCls}-cell-content`]: {
            display: 'block',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          },
        },

        [`${componentCls}-column-title`]: {
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          wordBreak: 'keep-all',
        },
      },
    },
  };
};

export default genStyle;
