import React, { useEffect, useRef } from 'react';
import { JSONEditor, Mode } from 'vanilla-jsoneditor';
import type { JSONEditorPropsOptional } from 'vanilla-jsoneditor';

const Editor = (props: JSONEditorPropsOptional) => {
  const editorRef = useRef<JSONEditor>(null);
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    editorRef.current = new JSONEditor({
      target: container.current,
      props: { mode: Mode.text },
    });
    return () => {
      editorRef.current?.destroy();
    };
  }, []);

  useEffect(() => {
    editorRef.current?.updateProps(props);
  }, [props]);

  return <div ref={container} className="vanilla-jsoneditor-react" />;
};

export default Editor;
