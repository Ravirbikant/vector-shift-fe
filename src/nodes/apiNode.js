import { Position } from 'reactflow';
import { BaseNode } from './baseNode';

export const APINode = ({ id, data }) => (
  <BaseNode
    id={id}
    data={data}
    title="API"
    handles={[
      { id: 'trigger', type: 'target', position: Position.Left },
      { id: 'response', type: 'source', position: Position.Right },
    ]}
    fields={[
      { key: 'url', label: 'URL', type: 'text', default: 'https://api.example.com' },
      { key: 'method', label: 'Method', type: 'select', options: ['GET', 'POST', 'PUT', 'DELETE'], default: 'GET' },
    ]}
  />
);