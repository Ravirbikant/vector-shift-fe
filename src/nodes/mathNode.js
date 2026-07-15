import { Position } from 'reactflow';
import { BaseNode } from './baseNode';

export const MathNode = ({ id, data }) => (
  <BaseNode
    id={id}
    data={data}
    title="Math"
    handles={[
      { id: 'a', type: 'target', position: Position.Left, style: { top: `${100 / 3}%` } },
      { id: 'b', type: 'target', position: Position.Left, style: { top: `${200 / 3}%` } },
      { id: 'result', type: 'source', position: Position.Right },
    ]}
    fields={[
      { key: 'operation', label: 'Operation', type: 'select', options: ['Add', 'Subtract', 'Multiply', 'Divide'], default: 'Add' },
    ]}
  />
);