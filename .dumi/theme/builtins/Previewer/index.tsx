import React from 'react';
import type { IPreviewerProps } from 'dumi';
import { useTabMeta } from 'dumi';
import CodePreviewer from './CodePreviewer';
import DesignPreviewer from './DesignPreviewer';

export interface AntdPreviewerProps extends IPreviewerProps {
  originDebug?: IPreviewerProps['debug'];
}

const Previewer = ({ ...props }: AntdPreviewerProps) => {
  const tab = useTabMeta();

  if (tab?.frontmatter.title === 'Design') {
    return <DesignPreviewer {...props} />;
  }

  return <CodePreviewer {...props} />;
};

export default Previewer;
