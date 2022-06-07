import { Node } from '@tiptap/react';

export const block_text = Node.create({
  name: 'block_text',
  group: 'block',
  content: 'inline*',
  renderHTML({ node, HTMLAttributes }) {
    return ['div', { type: this.name }, ['div', { class: 'block-content' }, 0]];
  },
});
