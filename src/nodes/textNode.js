// textNode.js
import { Position } from 'reactflow';
import { BaseNode } from './baseNode';

export const TextNode = ({ id, data }) => (
  <BaseNode
    id={id}
    data={data}
    title="Text"
    handles={[{ id: 'output', type: 'source', position: Position.Right }]}
    fields={[{ key: 'text', label: 'Text', type: 'text', default: '{{input}}', autosize: true }]}
  />
);