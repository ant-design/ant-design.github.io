import * as React from 'react';

import Base, { type BlockProps } from './Base';

export interface ParagraphProps
  extends BlockProps<'div'>,
    Omit<React.HTMLAttributes<HTMLDivElement>, 'type' | keyof BlockProps<'div'>> {}

const Paragraph = React.forwardRef<HTMLElement, ParagraphProps>((props, ref) => (
  <Base ref={ref} {...props} component="div" />
));

export default Paragraph;
