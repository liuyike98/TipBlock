import { Editor, EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { HTMLProps, useState } from 'react';
import './index.less';
import { schemas } from './schema';
type TipBlockProps = HTMLProps<HTMLDivElement> & {
  onCreate?: (editor: Editor | null) => void;
};

// 重新封装编辑器
function TipBlock(props: TipBlockProps) {
  const editor = useEditor({
    extensions: [StarterKit],
    content: '<p>Hello World!</p>',
  });
  // 回调editor钩子，可以从外部拿到并做一些hook
  props.onCreate?.(editor);
  return <EditorContent style={props.style} className={['TipBlock', props.className].join(' ')} editor={editor} />;
}

export default TipBlock;
