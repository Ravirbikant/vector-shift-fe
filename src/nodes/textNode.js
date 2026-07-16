import { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './baseNode';

export const TextNode = ({ id, data }) => {
  const [text, setText] = useState(data?.text || '{{input}}');

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const matches = [...text.matchAll(/\{\{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\}\}/g)];
  const uniqueVars = [...new Set(matches.map((m) => m[1]))];

  const variableHandles = uniqueVars.map((varName, i) => ({
    id: varName,
    type: 'target',
    position: Position.Left,
    style: { top: `${((i + 1) / (uniqueVars.length + 1)) * 100}%` },
  }));

  return (
    <BaseNode
      id={id}
      data={data}
      title="Text"
      handles={[
        ...variableHandles,
        { id: 'output', type: 'source', position: Position.Right },
      ]}
      fields={[
        {
          key: 'text',
          label: 'Text',
          type: 'text',
          autosize: true,
          value: text,
          onChange: handleTextChange,
        },
      ]}
    />
  );
};