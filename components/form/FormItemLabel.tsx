import * as React from 'react';
import QuestionCircleOutlined from '@ant-design/icons/QuestionCircleOutlined';
import classNames from 'classnames';

import type { ColProps } from '../grid/col';
import Col from '../grid/col';
import { useLocale } from '../locale';
import defaultLocale from '../locale/en_US';
import type { TooltipProps } from '../tooltip';
import Tooltip from '../tooltip';
import type { FormContextProps } from './context';
import { FormContext } from './context';
import type { RequiredMark } from './Form';
import type { FormLabelAlign } from './interface';

export type WrapperTooltipProps = TooltipProps & {
  icon?: React.ReactElement;
};

export type LabelTooltipType = WrapperTooltipProps | React.ReactNode;

function toTooltipProps(tooltip: LabelTooltipType): WrapperTooltipProps | null {
  if (!tooltip) {
    return null;
  }

  if (typeof tooltip === 'object' && !React.isValidElement(tooltip)) {
    return tooltip as WrapperTooltipProps;
  }

  return {
    title: tooltip,
  };
}

export interface FormItemLabelProps {
  colon?: boolean;
  htmlFor?: string;
  label?: React.ReactNode;
  labelAlign?: FormLabelAlign;
  labelCol?: ColProps;
  /**
   * @internal Used for pass `requiredMark` from `<Form />`
   */
  requiredMark?: RequiredMark;
  tooltip?: LabelTooltipType;
  vertical?: boolean;
}

const FormItemLabel: React.FC<FormItemLabelProps & { required?: boolean; prefixCls: string }> = ({
  prefixCls,
  label,
  htmlFor,
  labelCol,
  labelAlign,
  colon,
  required,
  requiredMark,
  tooltip,
  vertical,
}) => {
  const [formLocale] = useLocale('Form');

  const {
    labelAlign: contextLabelAlign,
    labelCol: contextLabelCol,
    labelWrap,
    colon: contextColon,
  } = React.useContext<FormContextProps>(FormContext);

  if (!label) {
    return null;
  }

  const mergedLabelCol: ColProps = labelCol || contextLabelCol || {};

  const mergedLabelAlign: FormLabelAlign | undefined = labelAlign || contextLabelAlign;

  const labelClsBasic = `${prefixCls}-item-label`;
  const labelColClassName = classNames(
    labelClsBasic,
    mergedLabelAlign === 'left' && `${labelClsBasic}-left`,
    mergedLabelCol.className,
    {
      [`${labelClsBasic}-wrap`]: !!labelWrap,
    },
  );

  let labelChildren: React.ReactNode = label;

  // Keep label is original where there should have no colon
  const computedColon = colon === true || (contextColon !== false && colon !== false);
  const haveColon = computedColon && !vertical;

  // Remove duplicated user input colon
  if (haveColon && typeof label === 'string' && label.trim()) {
    labelChildren = label.replace(/[:|：]\s*$/, '');
  }

  // Tooltip
  const tooltipProps = toTooltipProps(tooltip);

  if (tooltipProps) {
    const { icon = <QuestionCircleOutlined />, ...restTooltipProps } = tooltipProps;
    const tooltipNode: React.ReactNode = (
      <Tooltip {...restTooltipProps}>
        {React.cloneElement(icon, {
          className: `${prefixCls}-item-tooltip`,
          title: '',
          onClick: (e: React.MouseEvent) => {
            // Prevent label behavior in tooltip icon
            // https://github.com/ant-design/ant-design/issues/46154
            e.preventDefault();
          },
          tabIndex: null,
        })}
      </Tooltip>
    );

    labelChildren = (
      <>
        {labelChildren}
        {tooltipNode}
      </>
    );
  }

  // Required Mark
  const isOptionalMark = requiredMark === 'optional';
  const isRenderMark = typeof requiredMark === 'function';
  const hideRequiredMark = requiredMark === false;

  if (isRenderMark) {
    labelChildren = requiredMark(labelChildren, { required: !!required });
  } else if (isOptionalMark && !required) {
    labelChildren = (
      <>
        {labelChildren}
        <span className={`${prefixCls}-item-optional`} title="">
          {formLocale?.optional || defaultLocale.Form?.optional}
        </span>
      </>
    );
  }

  // https://github.com/ant-design/ant-design/pull/52950#discussion_r1980880316
  let markType: string | undefined;
  if (hideRequiredMark) {
    markType = 'hidden';
  } else if (isOptionalMark || isRenderMark) {
    markType = 'optional';
  }

  const labelClassName = classNames({
    [`${prefixCls}-item-required`]: required,
    [`${prefixCls}-item-required-mark-${markType}`]: markType,
    [`${prefixCls}-item-no-colon`]: !computedColon,
  });

  return (
    <Col {...mergedLabelCol} className={labelColClassName}>
      <label
        htmlFor={htmlFor}
        className={labelClassName}
        title={typeof label === 'string' ? label : ''}
      >
        {labelChildren}
      </label>
    </Col>
  );
};

export default FormItemLabel;
