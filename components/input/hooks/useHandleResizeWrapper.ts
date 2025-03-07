import { TextAreaRef } from 'rc-textarea';
import React from 'react';

type ResizeWrapperHandler = (rcTextArea: TextAreaRef | null) => void;

const ELEMENT_GAP = 2;

const adjustElementWidth = (width: number, wrapper: HTMLElement): void => {
  if (wrapper.offsetWidth - width < ELEMENT_GAP) {
    // The textarea's width is increased
    wrapper.style.width = `${width + ELEMENT_GAP}px`;
  } else if (wrapper.offsetWidth - width > ELEMENT_GAP) {
    // The textarea's width is decreased
    wrapper.style.width = `${width + ELEMENT_GAP}px`;
  }
};

export default function useHandleResizeWrapper(): { handleResizeWrapper: ResizeWrapperHandler } {
  const handleResizeWrapper: ResizeWrapperHandler = React.useCallback((rcTextArea) => {
    if (!rcTextArea) return;
    if (rcTextArea.resizableTextArea.textArea.style.width.includes('px')) {
      const width = parseInt(rcTextArea.resizableTextArea.textArea.style.width.replace('px', ''));
      adjustElementWidth(width, rcTextArea.nativeElement);
    }
  }, []);

  return { handleResizeWrapper };
}
