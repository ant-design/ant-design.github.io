import type React from 'react';

import InternalAlert, { type AlertProps } from './Alert';
import ErrorBoundary from './ErrorBoundary';

export type { AlertProps } from './Alert';

type CompoundedComponent = React.FC<AlertProps> & {
  ErrorBoundary: typeof ErrorBoundary;
};

const Alert = InternalAlert as CompoundedComponent;

Alert.ErrorBoundary = ErrorBoundary;

export default Alert;
