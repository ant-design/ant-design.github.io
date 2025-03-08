// Style as status component
import { prepareComponentToken, prepareToken } from '.';
import type { TagToken } from '.';
import { genPresetColor, genSubStyleComponent } from '../../theme/internal';

// ============================== Preset ==============================
const genPresetStyle = (token: TagToken) =>
  genPresetColor(token, (colorKey, { textColor, lightBorderColor, lightColor, darkColor }) => ({
    [`${token.componentCls}${token.componentCls}-${colorKey}`]: {
      color: textColor,
      background: lightColor,
      borderColor: lightBorderColor,
      [`&${token.componentCls}-filled`]: {
        color: token.colorTextLightSolid,
        background: darkColor,
        borderColor: darkColor,

        [`&${token.componentCls}-disabled`]: {
          color: token.colorTextDisabled,
          backgroundColor: token.colorBgContainerDisabled,
          borderColor: token.colorBorderDisabled,
        },
      },
      [`&${token.componentCls}-borderless`]: {
        borderColor: 'transparent',
        [`&${token.componentCls}-disabled`]: {
          borderColor: 'transparent',
        },
      },
      [`&${token.componentCls}-disabled`]: {
        color: token.colorTextDisabled,
        backgroundColor: token.colorBgContainerDisabled,
        borderColor: token.colorBorderDisabled,
      },
    },
  }));

// ============================== Export ==============================
export default genSubStyleComponent<'Tag'>(
  ['Tag', 'preset'],
  (token) => {
    const tagToken = prepareToken(token);
    return genPresetStyle(tagToken);
  },
  prepareComponentToken,
);
