// inputNode.js
import { Position } from 'reactflow';
import { BaseNode } from './baseNode';

export const InputNode = ({ id, data }) => (
  <BaseNode
    id={id}
    data={data}
    title="Input"
    handles={[{ id: 'value', type: 'source', position: Position.Right }]}
    fields={[
      { key: 'inputName', label: 'Name', type: 'text', default: id.replace('customInput-', 'input_') },
      { key: 'inputType', label: 'Type', type: 'select', options: ['Text', 'File'], default: 'Text' },
    ]}
  />
);