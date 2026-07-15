// llmNode.js
import { Position } from 'reactflow';
import { BaseNode } from './baseNode';

export const LLMNode = ({ id, data }) => (
  <BaseNode
    id={id}
    data={data}
    title="LLM"
    handles={[
      { id: 'system', type: 'target', position: Position.Left, style: { top: `${100 / 3}%` } },
      { id: 'prompt', type: 'target', position: Position.Left, style: { top: `${200 / 3}%` } },
      { id: 'response', type: 'source', position: Position.Right },
    ]}
    fields={[{ key: 'info', label: '', type: 'static', text: 'This is a LLM.' }]}
  />
);