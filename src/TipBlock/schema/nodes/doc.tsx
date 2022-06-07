import { Extension, Node } from '@tiptap/react';

export const doc = Node.create({
  name: 'doc',
  topNode: true,
  content: 'block*',
});

export default doc;
