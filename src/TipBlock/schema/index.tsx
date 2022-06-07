import { block_text } from './nodes/block_text';
import doc from './nodes/doc';
import { text } from './nodes/text';
const nodes = [doc, block_text, text];
export const schemas = [...nodes];
