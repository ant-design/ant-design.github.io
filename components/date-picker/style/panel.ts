import { unit } from '@ant-design/cssinjs';
import type { CSSObject } from '@ant-design/cssinjs';
import { FastColor } from '@ant-design/fast-color';

import type { GenerateStyle } from '../../theme/internal';
import type { PickerToken, SharedPickerToken } from './token';

const genPickerCellInnerStyle = (token: SharedPickerToken): CSSObject => {
  const {
    pickerCellCls,
    pickerCellInnerCls,
    cellHeight,
    borderRadiusSM,
    motionDurationMid,
    cellHoverBg,
    lineWidth,
    lineType,
    colorPrimary,
    cellActiveWithRangeBg,
    colorTextLightSolid,
    colorTextDisabled,
    cellBgDisabled,
    colorFillSecondary,
  } = token;

  return {
    '&::before': {
      position: 'absolute',
      top: '50%',
      insetInlineStart: 0,
      insetInlineEnd: 0,
      zIndex: 1,
      height: cellHeight,
      transform: 'translateY(-50%)',
      content: '""',
      pointerEvents: 'none',
    },

    // >>> Default
    [pickerCellInnerCls]: {
      position: 'relative',
      zIndex: 2,
      display: 'inline-block',
      minWidth: cellHeight,
      height: cellHeight,
      lineHeight: unit(cellHeight),
      borderRadius: borderRadiusSM,
      transition: `background ${motionDurationMid}`,
    },

    // >>> Hover
    [`&:hover:not(${pickerCellCls}-in-view):not(${pickerCellCls}-disabled),
    &:hover:not(${pickerCellCls}-selected):not(${pickerCellCls}-range-start):not(${pickerCellCls}-range-end):not(${pickerCellCls}-disabled)`]:
      {
        [pickerCellInnerCls]: {
          background: cellHoverBg,
        },
      },

    // >>> Today
    [`&-in-view${pickerCellCls}-today ${pickerCellInnerCls}`]: {
      '&::before': {
        position: 'absolute',
        top: 0,
        insetInlineEnd: 0,
        bottom: 0,
        insetInlineStart: 0,
        zIndex: 1,
        border: `${unit(lineWidth)} ${lineType} ${colorPrimary}`,
        borderRadius: borderRadiusSM,
        content: '""',
      },
    },

    // >>> In Range
    [`&-in-view${pickerCellCls}-in-range,
      &-in-view${pickerCellCls}-range-start,
      &-in-view${pickerCellCls}-range-end`]: {
      position: 'relative',

      [`&:not(${pickerCellCls}-disabled):before`]: {
        background: cellActiveWithRangeBg,
      },
    },

    // >>> Selected
    [`&-in-view${pickerCellCls}-selected,
      &-in-view${pickerCellCls}-range-start,
      &-in-view${pickerCellCls}-range-end`]: {
      [`&:not(${pickerCellCls}-disabled) ${pickerCellInnerCls}`]: {
        color: colorTextLightSolid,
        background: colorPrimary,
      },
      [`&${pickerCellCls}-disabled ${pickerCellInnerCls}`]: {
        background: colorFillSecondary,
      },
    },

    [`&-in-view${pickerCellCls}-range-start:not(${pickerCellCls}-disabled):before`]: {
      insetInlineStart: '50%',
    },

    [`&-in-view${pickerCellCls}-range-end:not(${pickerCellCls}-disabled):before`]: {
      insetInlineEnd: '50%',
    },

    // range start border-radius
    [`&-in-view${pickerCellCls}-range-start:not(${pickerCellCls}-range-end) ${pickerCellInnerCls}`]:
      {
        borderStartStartRadius: borderRadiusSM,
        borderEndStartRadius: borderRadiusSM,
        borderStartEndRadius: 0,
        borderEndEndRadius: 0,
      },

    // range end border-radius
    [`&-in-view${pickerCellCls}-range-end:not(${pickerCellCls}-range-start) ${pickerCellInnerCls}`]:
      {
        borderStartStartRadius: 0,
        borderEndStartRadius: 0,
        borderStartEndRadius: borderRadiusSM,
        borderEndEndRadius: borderRadiusSM,
      },

    // >>> Disabled
    '&-disabled': {
      color: colorTextDisabled,
      cursor: 'not-allowed',

      [pickerCellInnerCls]: {
        background: 'transparent',
      },

      '&::before': {
        background: cellBgDisabled,
      },
    },
    [`&-disabled${pickerCellCls}-today ${pickerCellInnerCls}::before`]: {
      borderColor: colorTextDisabled,
    },
  };
};

export const genPanelStyle = (token: SharedPickerToken): CSSObject => {
  const {
    componentCls,
    pickerCellCls,
    pickerCellInnerCls,
    pickerYearMonthCellWidth,
    pickerControlIconSize,
    cellWidth,
    paddingSM,
    paddingXS,
    paddingXXS,
    colorBgContainer,
    lineWidth,
    lineType,
    borderRadiusLG,
    colorPrimary,
    colorTextHeading,
    colorSplit,
    pickerControlIconBorderWidth,
    colorIcon,
    textHeight,
    motionDurationMid,
    colorIconHover,
    fontWeightStrong,
    cellHeight,
    pickerCellPaddingVertical,
    colorTextDisabled,
    colorText,
    fontSize,
    motionDurationSlow,
    withoutTimeCellHeight,
    pickerQuarterPanelContentHeight,
    borderRadiusSM,
    colorTextLightSolid,
    cellHoverBg,
    timeColumnHeight,
    timeColumnWidth,
    timeCellHeight,
    controlItemBgActive,
    marginXXS,
    pickerDatePanelPaddingHorizontal,
    pickerControlIconMargin,
  } = token;

  const pickerPanelWidth = token
    .calc(cellWidth)
    .mul(7)
    .add(token.calc(pickerDatePanelPaddingHorizontal).mul(2))
    .equal();

  return {
    [componentCls]: {
      '&-panel': {
        display: 'inline-flex',
        flexDirection: 'column',
        textAlign: 'center',
        background: colorBgContainer,
        borderRadius: borderRadiusLG,
        outline: 'none',

        '&-focused': {
          borderColor: colorPrimary,
        },

        '&-rtl': {
          [`${componentCls}-prev-icon,
              ${componentCls}-super-prev-icon`]: {
            transform: 'rotate(45deg)',
          },

          [`${componentCls}-next-icon,
              ${componentCls}-super-next-icon`]: {
            transform: 'rotate(-135deg)',
          },

          [`${componentCls}-time-panel`]: {
            [`${componentCls}-content`]: {
              direction: 'ltr',
              '> *': {
                direction: 'rtl',
              },
            },
          },
        },
      },

      // ========================================================
      // =                     Shared Panel                     =
      // ========================================================
      [`&-decade-panel,
        &-year-panel,
        &-quarter-panel,
        &-month-panel,
        &-week-panel,
        &-date-panel,
        &-time-panel`]: {
        display: 'flex',
        flexDirection: 'column',
        width: pickerPanelWidth,
      },

      // ======================= Header =======================
      '&-header': {
        display: 'flex',
        padding: `0 ${unit(paddingXS)}`,
        color: colorTextHeading,
        borderBottom: `${unit(lineWidth)} ${lineType} ${colorSplit}`,

        '> *': {
          flex: 'none',
        },

        button: {
          padding: 0,
          color: colorIcon,
          lineHeight: unit(textHeight),
          background: 'transparent',
          border: 0,
          cursor: 'pointer',
          transition: `color ${motionDurationMid}`,
          fontSize: 'inherit',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',

          '&:empty': {
            display: 'none',
          },
        },

        '> button': {
          minWidth: '1.6em',
          fontSize,

          '&:hover': {
            color: colorIconHover,
          },

          '&:disabled': {
            opacity: 0.25,
            pointerEvents: 'none',
          },
        },

        '&-view': {
          flex: 'auto',
          fontWeight: fontWeightStrong,
          lineHeight: unit(textHeight),

          '> button': {
            color: 'inherit',
            fontWeight: 'inherit',
            verticalAlign: 'top',

            '&:not(:first-child)': {
              marginInlineStart: paddingXS,
            },

            '&:hover': {
              color: colorPrimary,
            },
          },
        },
      },
      // Arrow button
      [`&-prev-icon,
        &-next-icon,
        &-super-prev-icon,
        &-super-next-icon`]: {
        position: 'relative',
        width: pickerControlIconSize,
        height: pickerControlIconSize,

        '&::before': {
          position: 'absolute',
          top: 0,
          insetInlineStart: 0,
          width: pickerControlIconSize,
          height: pickerControlIconSize,
          border: `0 solid currentcolor`,
          borderBlockWidth: `${unit(pickerControlIconBorderWidth)} 0`,
          borderInlineWidth: `${unit(pickerControlIconBorderWidth)} 0`,
          content: '""',
        },
      },

      [`&-super-prev-icon,
        &-super-next-icon`]: {
        '&::after': {
          position: 'absolute',
          top: pickerControlIconMargin,
          insetInlineStart: pickerControlIconMargin,
          display: 'inline-block',
          width: pickerControlIconSize,
          height: pickerControlIconSize,
          border: '0 solid currentcolor',
          borderBlockWidth: `${unit(pickerControlIconBorderWidth)} 0`,
          borderInlineWidth: `${unit(pickerControlIconBorderWidth)} 0`,
          content: '""',
        },
      },

      '&-prev-icon, &-super-prev-icon': {
        transform: 'rotate(-45deg)',
      },

      '&-next-icon, &-super-next-icon': {
        transform: 'rotate(135deg)',
      },

      // ======================== Body ========================
      '&-content': {
        width: '100%',
        tableLayout: 'fixed',
        borderCollapse: 'collapse',

        'th, td': {
          position: 'relative',
          minWidth: cellHeight,
          fontWeight: 'normal',
        },

        th: {
          height: token.calc(cellHeight).add(token.calc(pickerCellPaddingVertical).mul(2)).equal(),
          color: colorText,
          verticalAlign: 'middle',
        },
      },

      '&-cell': {
        padding: `${unit(pickerCellPaddingVertical)} 0`,
        color: colorTextDisabled,
        cursor: 'pointer',

        // In view
        '&-in-view': {
          color: colorText,
        },

        ...genPickerCellInnerStyle(token),
      },

      [`&-decade-panel,
        &-year-panel,
        &-quarter-panel,
        &-month-panel`]: {
        [`${componentCls}-content`]: {
          height: token.calc(withoutTimeCellHeight).mul(4).equal(),
        },

        [pickerCellInnerCls]: {
          padding: `0 ${unit(paddingXS)}`,
        },
      },

      '&-quarter-panel': {
        [`${componentCls}-content`]: {
          height: pickerQuarterPanelContentHeight,
        },
      },

      // ========================================================
      // =                       Special                        =
      // ========================================================

      // ===================== Decade Panel =====================
      '&-decade-panel': {
        [pickerCellInnerCls]: {
          padding: `0 ${unit(token.calc(paddingXS).div(2).equal())}`,
        },

        [`${componentCls}-cell::before`]: {
          display: 'none',
        },
      },

      // ============= Year & Quarter & Month Panel =============
      [`&-year-panel,
        &-quarter-panel,
        &-month-panel`]: {
        [`${componentCls}-body`]: {
          padding: `0 ${unit(paddingXS)}`,
        },

        [pickerCellInnerCls]: {
          width: pickerYearMonthCellWidth,
        },
      },

      // ====================== Date Panel ======================
      '&-date-panel': {
        [`${componentCls}-body`]: {
          padding: `${unit(paddingXS)} ${unit(pickerDatePanelPaddingHorizontal)}`,
        },

        [`${componentCls}-content th`]: {
          boxSizing: 'border-box',
          padding: 0,
        },
      },

      // ====================== Week Panel ======================
      '&-week-panel': {
        // Clear cell style
        [`${componentCls}-cell`]: {
          [`&:hover ${pickerCellInnerCls},
            &-selected ${pickerCellInnerCls},
            ${pickerCellInnerCls}`]: {
            background: 'transparent !important',
          },
        },

        '&-row': {
          td: {
            '&:before': {
              transition: `background ${motionDurationMid}`,
            },

            '&:first-child:before': {
              borderStartStartRadius: borderRadiusSM,
              borderEndStartRadius: borderRadiusSM,
            },

            '&:last-child:before': {
              borderStartEndRadius: borderRadiusSM,
              borderEndEndRadius: borderRadiusSM,
            },
          },

          '&:hover td:before': {
            background: cellHoverBg,
          },

          '&-range-start td, &-range-end td, &-selected td, &-hover td': {
            // Rise priority to override hover style
            [`&${pickerCellCls}`]: {
              '&:before': {
                background: colorPrimary,
              },

              [`&${componentCls}-cell-week`]: {
                color: new FastColor(colorTextLightSolid).setA(0.5).toHexString(),
              },

              [pickerCellInnerCls]: {
                color: colorTextLightSolid,
              },
            },
          },

          '&-range-hover td:before': {
            background: controlItemBgActive,
          },
        },
      },

      // >>> ShowWeek
      '&-week-panel, &-date-panel-show-week': {
        [`${componentCls}-body`]: {
          padding: `${unit(paddingXS)} ${unit(paddingSM)}`,
        },

        [`${componentCls}-content th`]: {
          width: 'auto',
        },
      },

      // ==================== Datetime Panel ====================
      '&-datetime-panel': {
        display: 'flex',

        [`${componentCls}-time-panel`]: {
          borderInlineStart: `${unit(lineWidth)} ${lineType} ${colorSplit}`,
        },

        [`${componentCls}-date-panel,
          ${componentCls}-time-panel`]: {
          transition: `opacity ${motionDurationSlow}`,
        },

        // Keyboard
        '&-active': {
          [`${componentCls}-date-panel,
            ${componentCls}-time-panel`]: {
            opacity: 0.3,

            '&-active': {
              opacity: 1,
            },
          },
        },
      },

      // ====================== Time Panel ======================
      '&-time-panel': {
        width: 'auto',
        minWidth: 'auto',

        [`${componentCls}-content`]: {
          display: 'flex',
          flex: 'auto',
          height: timeColumnHeight,
        },

        '&-column': {
          flex: '1 0 auto',
          width: timeColumnWidth,
          margin: `${unit(paddingXXS)} 0`,
          padding: 0,
          overflowY: 'hidden',
          textAlign: 'start',
          listStyle: 'none',
          transition: `background ${motionDurationMid}`,
          overflowX: 'hidden',

          '&::-webkit-scrollbar': {
            width: 8,
            backgroundColor: 'transparent',
          },

          '&::-webkit-scrollbar-thumb': {
            backgroundColor: token.colorTextTertiary,
            borderRadius: token.borderRadiusSM,
          },

          // For Firefox
          '&': {
            scrollbarWidth: 'thin',
            scrollbarColor: `${token.colorTextTertiary} transparent`,
          },

          '&::after': {
            display: 'block',
            height: `calc(100% - ${unit(timeCellHeight)})`,
            content: '""',
          },

          '&:not(:first-child)': {
            borderInlineStart: `${unit(lineWidth)} ${lineType} ${colorSplit}`,
          },

          '&-active': {
            background: new FastColor(controlItemBgActive).setA(0.2).toHexString(),
          },

          '&:hover': {
            overflowY: 'auto',
          },

          '> li': {
            margin: 0,
            padding: 0,

            [`&${componentCls}-time-panel-cell`]: {
              marginInline: marginXXS,
              [`${componentCls}-time-panel-cell-inner`]: {
                display: 'block',
                width: token.calc(timeColumnWidth).sub(token.calc(marginXXS).mul(2)).equal(),
                height: timeCellHeight,
                margin: 0,
                paddingBlock: 0,
                paddingInlineEnd: 0,
                paddingInlineStart: token.calc(timeColumnWidth).sub(timeCellHeight).div(2).equal(),
                color: colorText,
                lineHeight: unit(timeCellHeight),
                borderRadius: borderRadiusSM,
                cursor: 'pointer',
                transition: `background ${motionDurationMid}`,

                '&:hover': {
                  background: cellHoverBg,
                },
              },

              '&-selected': {
                [`${componentCls}-time-panel-cell-inner`]: {
                  background: controlItemBgActive,
                },
              },

              '&-disabled': {
                [`${componentCls}-time-panel-cell-inner`]: {
                  color: colorTextDisabled,
                  background: 'transparent',
                  cursor: 'not-allowed',
                },
              },
            },
          },
        },
      },
    },
  };
};

const genPickerPanelStyle: GenerateStyle<PickerToken> = (token) => {
  const {
    componentCls,
    textHeight,
    lineWidth,
    paddingSM,
    antCls,
    colorPrimary,
    cellActiveWithRangeBg,
    colorPrimaryBorder,
    lineType,
    colorSplit,
  } = token;

  return {
    [`${componentCls}-dropdown`]: {
      // ======================== Footer ========================
      [`${componentCls}-footer`]: {
        borderTop: `${unit(lineWidth)} ${lineType} ${colorSplit}`,

        '&-extra': {
          padding: `0 ${unit(paddingSM)}`,
          lineHeight: unit(token.calc(textHeight).sub(token.calc(lineWidth).mul(2)).equal()),
          textAlign: 'start',

          '&:not(:last-child)': {
            borderBottom: `${unit(lineWidth)} ${lineType} ${colorSplit}`,
          },
        },
      },

      // ==================== Footer > Ranges ===================
      [`${componentCls}-panels + ${componentCls}-footer ${componentCls}-ranges`]: {
        justifyContent: 'space-between',
      },

      [`${componentCls}-ranges`]: {
        marginBlock: 0,
        paddingInline: unit(paddingSM),
        overflow: 'hidden',
        textAlign: 'start',
        listStyle: 'none',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

        '> li': {
          lineHeight: unit(token.calc(textHeight).sub(token.calc(lineWidth).mul(2)).equal()),
          display: 'inline-block',
        },

        [`${componentCls}-now-btn-disabled`]: {
          pointerEvents: 'none',
          color: token.colorTextDisabled,
        },

        // https://github.com/ant-design/ant-design/issues/23687
        [`${componentCls}-preset > ${antCls}-tag-blue`]: {
          color: colorPrimary,
          background: cellActiveWithRangeBg,
          borderColor: colorPrimaryBorder,
          cursor: 'pointer',
        },

        [`${componentCls}-ok`]: {
          paddingBlock: token.calc(lineWidth).mul(2).equal(),
          marginInlineStart: 'auto',
        },
      },
    },
  };
};

export default genPickerPanelStyle;
