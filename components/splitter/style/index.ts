import type { CSSObject } from '@ant-design/cssinjs';

import { resetComponent } from '../../style';
import type { FullToken, GenerateStyle, GetDefaultToken } from '../../theme/internal';
import { genStyleHooks } from '../../theme/internal';

export interface ComponentToken {
  /**
   * @desc 可改变大小标识 元素大小
   * @descEN Height of content area
   */
  resizeSpinnerSize: number;
  /**
   * @desc 拖拽标识元素大小
   * @descEN Drag the element size
   */
  splitBarSize: number;
  /**
   * @desc 拖拽触发区域大小
   * @descEN Drag and drop trigger area size
   */
  splitTriggerSize: number;
}

interface SplitterToken extends FullToken<'Splitter'> {}

const genRtlStyle = (token: SplitterToken): CSSObject => {
  const { componentCls } = token;
  return {
    [`&-rtl${componentCls}-horizontal`]: {
      [`> ${componentCls}-bar`]: {
        [`${componentCls}-bar-collapse-previous`]: {
          insetInlineEnd: 0,
          insetInlineStart: 'unset',
        },

        [`${componentCls}-bar-collapse-next`]: {
          insetInlineEnd: 'unset',
          insetInlineStart: 0,
        },
      },
    },

    [`&-rtl${componentCls}-vertical`]: {
      [`> ${componentCls}-bar`]: {
        [`${componentCls}-bar-collapse-previous`]: {
          insetInlineEnd: '50%',
          insetInlineStart: 'unset',
        },

        [`${componentCls}-bar-collapse-next`]: {
          insetInlineEnd: '50%',
          insetInlineStart: 'unset',
        },
      },
    },
  };
};

const centerStyle: CSSObject = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
};

const genSplitterStyle: GenerateStyle<SplitterToken> = (token: SplitterToken): CSSObject => {
  const {
    componentCls,
    colorPrimary,
    colorFill,
    colorTextTertiary,
    colorFillTertiary,
    resizeSpinnerSize,
    borderRadius,
    zIndexPopupBase,
    motionDurationFast,
    paddingXXS,
    splitBarSize,
    splitTriggerSize,
    controlItemBgHover,
    controlItemBgActive,
    controlItemBgActiveHover,
  } = token;

  const splitBarCls = `${componentCls}-bar`;

  const halfTriggerSize = token.calc(splitTriggerSize).div(2).equal();

  return {
    [componentCls]: {
      ...resetComponent(token),
      display: 'flex',
      width: '100%',
      height: '100%',
      alignItems: 'stretch',

      // ======================== SplitBar ========================
      // Use `>` to avoid conflict with mix layout
      [`> ${splitBarCls}`]: {
        flex: 'none',
        position: 'relative',
        userSelect: 'none',

        // ======================= Dragger =======================
        [`${splitBarCls}-dragger`]: {
          ...centerStyle,

          // Hover background
          '&:before': {
            content: '""',
            background: controlItemBgHover,
            transition: `all ${token.motionDurationSlow}`,
            ...centerStyle,
          },

          // Spinner
          '&:after': {
            content: '""',
            background: colorFill,
            ...centerStyle,
          },

          // Hover
          '&:hover': {
            '&:before': {
              background: controlItemBgActive,
            },
          },

          // Active
          '&:active': {
            '&:before': {
              background: controlItemBgActiveHover,
            },
          },

          // Disabled
          '&-disabled': {
            pointerEvents: 'none',

            '&:after': {
              display: 'none',
            },
          },
        },

        // ======================= Collapse =======================
        [`${splitBarCls}-collapse-bar`]: {
          ...centerStyle,
          background: controlItemBgHover,
          fontSize: token.fontSizeSM,
          borderRadius: token.borderRadiusSM,
          color: token.colorText,
          cursor: 'pointer',
          opacity: 0,
          transition: `all ${token.motionDurationSlow}`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',

          // Hover
          '&:hover': {
            background: controlItemBgActive,
          },

          // Active
          '&:active': {
            background: controlItemBgActiveHover,
          },
        },

        // ======================== Status ========================
        // Hover
        '&:hover, &:active': {
          [`${splitBarCls}-collapse-bar`]: {
            opacity: 1,
          },
        },
      },

      // ==========================================================
      // ==                        Layout                        ==
      // ==========================================================
      '&-horizontal': {
        flexDirection: 'row',

        [`> ${splitBarCls}`]: {
          width: 0,

          // ======================= Dragger =======================
          [`${splitBarCls}-dragger`]: {
            cursor: 'col-resize',
            height: '100%',
            width: splitTriggerSize,

            '&:before': {
              height: '100%',
              width: splitBarSize,
            },

            '&:after': {
              height: resizeSpinnerSize,
              width: splitBarSize,
            },
          },

          // ======================= Collapse =======================
          [`${splitBarCls}-collapse-bar`]: {
            width: token.fontSize,
            height: token.controlHeightSM,

            '&-start': {
              left: {
                _skip_check_: true,
                value: 'auto',
              },
              right: {
                _skip_check_: true,
                value: halfTriggerSize,
              },
              transform: 'translateY(-50%)',
            },

            '&-end': {
              left: {
                _skip_check_: true,
                value: halfTriggerSize,
              },
              right: {
                _skip_check_: true,
                value: 'auto',
              },
              transform: 'translateY(-50%)',
            },
          },
        },
      },

      '&-vertical': {
        flexDirection: 'column',

        [`> ${splitBarCls}`]: {
          height: 0,

          // ======================= Dragger =======================
          [`${splitBarCls}-dragger`]: {
            cursor: 'row-resize',
            width: '100%',
            height: splitTriggerSize,

            '&:before': {
              width: '100%',
              height: splitBarSize,
            },

            '&:after': {
              width: resizeSpinnerSize,
              height: splitBarSize,
            },
          },

          // ======================= Collapse =======================
          [`${splitBarCls}-collapse-bar`]: {
            height: token.fontSize,
            width: token.controlHeightSM,

            '&-start': {
              top: 'auto',
              bottom: halfTriggerSize,
              transform: 'translateX(-50%)',
            },

            '&-end': {
              top: halfTriggerSize,
              bottom: 'auto',
              transform: 'translateX(-50%)',
            },
          },
        },
      },

      // transition
      '&-transition': {
        [`${componentCls}-panel`]: {
          transition: `flex-basis ${motionDurationFast}`,
        },
      },

      // moving
      '&-resizing': {
        userSelect: 'none',
        [`>${componentCls}-panel`]: {
          transition: 'none',
        },
      },
      [`&-resizing${componentCls}-horizontal`]: {
        cursor: 'col-resize',
      },
      [`&-resizing${componentCls}-vertical`]: {
        cursor: 'row-resize',
      },

      // ========================= Panels =========================
      '&-panel': {
        overflow: 'auto',
        padding: '0 1px',
        scrollbarWidth: 'thin',
        boxSizing: 'border-box',
      },
      '&-panel-hidden': {
        padding: 0,
      },

      ...genRtlStyle(token),
    },
  };
};

export const prepareComponentToken: GetDefaultToken<'Splitter'> = (token) => {
  const splitBarSize = token.splitBarSize || 2;
  const splitTriggerSize = token.splitTriggerSize || 6;

  const resizeSpinnerSize = token.resizeSpinnerSize || 20;

  return {
    splitBarSize,
    splitTriggerSize,
    resizeSpinnerSize,
  };
};

// ============================== Export ==============================
export default genStyleHooks(
  'Splitter',
  (token) => [genSplitterStyle(token)],
  prepareComponentToken,
);
