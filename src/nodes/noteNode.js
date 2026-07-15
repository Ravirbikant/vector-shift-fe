import { BaseNode } from './baseNode';

export const NoteNode = ({ id, data }) => (
  <BaseNode
    id={id}
    data={data}
    title="Note"
    handles={[]}
    fields={[
      { key: 'text', label: 'Text', type: 'text', default: 'Add a note...' },
    ]}
  />
);