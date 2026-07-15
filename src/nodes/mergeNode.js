import { Position } from 'reactflow';
import { BaseNode } from './baseNode';

export const MergeNode = ({ id, data }) => (
  <BaseNode
    id={id}
    data={data}
    title="Merge"
    handles={[
      { id: 'in1', type: 'target', position: Position.Left, style: { top: '25%' } },
      { id: 'in2', type: 'target', position: Position.Left, style: { top: '50%' } },
      { id: 'in3', type: 'target', position: Position.Left, style: { top: '75%' } },
      { id: 'output', type: 'source', position: Position.Right },
    ]}
    fields={[]}
  />
);