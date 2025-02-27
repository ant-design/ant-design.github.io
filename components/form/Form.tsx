import * as React from 'react';
import classNames from 'classnames';
import FieldForm, { List, useWatch } from 'rc-field-form';
import type { FormProps as RcFormProps } from 'rc-field-form/lib/Form';
import type { FormRef, InternalNamePath, ValidateErrorEntity } from 'rc-field-form/lib/interface';

import type { Variant } from '../config-provider';
import { useComponentConfig } from '../config-provider/context';
import DisabledContext, { DisabledContextProvider } from '../config-provider/DisabledContext';
import useCSSVarCls from '../config-provider/hooks/useCSSVarCls';
import useSize from '../config-provider/hooks/useSize';
import type { SizeType } from '../config-provider/SizeContext';
import SizeContext from '../config-provider/SizeContext';
import type { ColProps } from '../grid/col';
import type { FormContextProps } from './context';
import { FormContext, FormProvider, VariantContext } from './context';
import type { FeedbackIcons } from './FormItem';
import useForm from './hooks/useForm';
import type { FormInstance } from './hooks/useForm';
import useFormWarning from './hooks/useFormWarning';
import type { FormLabelAlign, ScrollFocusOptions } from './interface';
import useStyle from './style';
import ValidateMessagesContext from './validateMessagesContext';

export type RequiredMark =
  | boolean
  | 'optional'
  | ((labelNode: React.ReactNode, info: { required: boolean }) => React.ReactNode);
export type FormLayout = 'horizontal' | 'inline' | 'vertical';
export type FormItemLayout = 'horizontal' | 'vertical';

export type { ScrollFocusOptions };

export interface FormProps<Values = any> extends Omit<RcFormProps<Values>, 'form'> {
  prefixCls?: string;
  colon?: boolean;
  name?: string;
  layout?: FormLayout;
  labelAlign?: FormLabelAlign;
  labelWrap?: boolean;
  labelCol?: ColProps;
  wrapperCol?: ColProps;
  form?: FormInstance<Values>;
  feedbackIcons?: FeedbackIcons;
  size?: SizeType;
  disabled?: boolean;
  scrollToFirstError?: ScrollFocusOptions | boolean;
  requiredMark?: RequiredMark;
  /** @deprecated Will warning in future branch. Pls use `requiredMark` instead. */
  hideRequiredMark?: boolean;
  rootClassName?: string;
  variant?: Variant;
}

const InternalForm: React.ForwardRefRenderFunction<FormRef, FormProps> = (props, ref) => {
  const contextDisabled = React.useContext(DisabledContext);
  const {
    getPrefixCls,
    direction,
    requiredMark: contextRequiredMark,
    colon: contextColon,
    scrollToFirstError: contextScrollToFirstError,
    className: contextClassName,
    style: contextStyle,
  } = useComponentConfig('form');

  const {
    prefixCls: customizePrefixCls,
    className,
    rootClassName,
    size,
    disabled = contextDisabled,
    form,
    colon,
    labelAlign,
    labelWrap,
    labelCol,
    wrapperCol,
    hideRequiredMark,
    layout = 'horizontal',
    scrollToFirstError,
    requiredMark,
    onFinishFailed,
    name,
    style,
    feedbackIcons,
    variant,
    ...restFormProps
  } = props;

  const mergedSize = useSize(size);

  const contextValidateMessages = React.useContext(ValidateMessagesContext);

  if (process.env.NODE_ENV !== 'production') {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useFormWarning(props);
  }

  const mergedRequiredMark = React.useMemo(() => {
    if (requiredMark !== undefined) {
      return requiredMark;
    }

    if (hideRequiredMark) {
      return false;
    }

    if (contextRequiredMark !== undefined) {
      return contextRequiredMark;
    }

    return true;
  }, [hideRequiredMark, requiredMark, contextRequiredMark]);

  const mergedColon = colon ?? contextColon;

  const prefixCls = getPrefixCls('form', customizePrefixCls);

  // Style
  const rootCls = useCSSVarCls(prefixCls);
  const [wrapCSSVar, hashId, cssVarCls] = useStyle(prefixCls, rootCls);

  const formClassName = classNames(
    prefixCls,
    `${prefixCls}-${layout}`,
    {
      [`${prefixCls}-hide-required-mark`]: mergedRequiredMark === false, // todo: remove in next major version
      [`${prefixCls}-rtl`]: direction === 'rtl',
      [`${prefixCls}-${mergedSize}`]: mergedSize,
    },
    cssVarCls,
    rootCls,
    hashId,
    contextClassName,
    className,
    rootClassName,
  );

  const [wrapForm] = useForm(form);
  const { __INTERNAL__ } = wrapForm;
  __INTERNAL__.name = name;

  const formContextValue = React.useMemo<FormContextProps>(
    () => ({
      name,
      labelAlign,
      labelCol,
      labelWrap,
      wrapperCol,
      vertical: layout === 'vertical',
      colon: mergedColon,
      requiredMark: mergedRequiredMark,
      itemRef: __INTERNAL__.itemRef,
      form: wrapForm,
      feedbackIcons,
    }),
    [
      name,
      labelAlign,
      labelCol,
      wrapperCol,
      layout,
      mergedColon,
      mergedRequiredMark,
      wrapForm,
      feedbackIcons,
    ],
  );

  const nativeElementRef = React.useRef<FormRef>(null);
  React.useImperativeHandle(ref, () => ({
    ...wrapForm,
    nativeElement: nativeElementRef.current?.nativeElement,
  }));

  const scrollToField = (options: ScrollFocusOptions | boolean, fieldName: InternalNamePath) => {
    if (options) {
      let defaultScrollToFirstError: ScrollFocusOptions = { block: 'nearest' };
      if (typeof options === 'object') {
        defaultScrollToFirstError = { ...defaultScrollToFirstError, ...options };
      }
      wrapForm.scrollToField(fieldName, defaultScrollToFirstError);
    }
  };

  const onInternalFinishFailed = (errorInfo: ValidateErrorEntity) => {
    onFinishFailed?.(errorInfo);
    if (errorInfo.errorFields.length) {
      const fieldName = errorInfo.errorFields[0].name;
      if (scrollToFirstError !== undefined) {
        scrollToField(scrollToFirstError, fieldName);
        return;
      }

      if (contextScrollToFirstError !== undefined) {
        scrollToField(contextScrollToFirstError, fieldName);
      }
    }
  };

  return wrapCSSVar(
    <VariantContext.Provider value={variant}>
      <DisabledContextProvider disabled={disabled}>
        <SizeContext.Provider value={mergedSize}>
          <FormProvider
            {...{
              // This is not list in API, we pass with spread
              validateMessages: contextValidateMessages,
            }}
          >
            <FormContext.Provider value={formContextValue}>
              <FieldForm
                id={name}
                {...restFormProps}
                name={name}
                onFinishFailed={onInternalFinishFailed}
                form={wrapForm}
                ref={nativeElementRef}
                style={{ ...contextStyle, ...style }}
                className={formClassName}
              />
            </FormContext.Provider>
          </FormProvider>
        </SizeContext.Provider>
      </DisabledContextProvider>
    </VariantContext.Provider>,
  );
};

const Form = React.forwardRef<FormRef, FormProps>(InternalForm) as (<Values = any>(
  props: React.PropsWithChildren<FormProps<Values>> & React.RefAttributes<FormRef<Values>>,
) => React.ReactElement) &
  Pick<React.FC, 'displayName'>;

if (process.env.NODE_ENV !== 'production') {
  Form.displayName = 'Form';
}

export { List, useForm, useWatch, type FormInstance };

export default Form;
