// outputNode.js
import { Position } from 'reactflow';
import { BaseNode } from './baseNode';

export const OutputNode = ({ id, data }) => (
  <BaseNode
    id={id}
    data={data}
    title="Output"
    handles={[{ id: 'value', type: 'target', position: Position.Left }]}
    fields={[
      { key: 'outputName', label: 'Name', type: 'text', default: id.replace('customOutput-', 'output_') },
      { key: 'outputType', label: 'Type', type: 'select', options: ['Text', 'Image'], default: 'Text' },
    ]}
  />
);