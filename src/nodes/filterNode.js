import { Position } from 'reactflow';
import { BaseNode } from './baseNode';

export const FilterNode = ({ id, data }) => (
  <BaseNode
    id={id}
    data={data}
    title="Filter"
    handles={[
      { id: 'value', type: 'target', position: Position.Left },
      { id: 'output', type: 'source', position: Position.Right },
    ]}
    fields={[
      { key: 'comparison', label: 'Comparison', type: 'select', options: ['>', '<', '==', '!='], default: '>' },
      { key: 'condition', label: 'Value', type: 'text', default: '10' },
    ]}
  />
);