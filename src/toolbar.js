// toolbar.js

import { DraggableNode } from './draggableNode';
import {
  LogIn, Cpu, LogOut, Type, Sigma, Filter,
  Globe, StickyNote, GitMerge
} from 'lucide-react';

export const nodeConfig = [
  { type: 'customInput', label: 'Input', icon: LogIn },
  { type: 'llm', label: 'LLM', icon: Cpu },
  { type: 'customOutput', label: 'Output', icon: LogOut },
  { type: 'text', label: 'Text', icon: Type },
  { type: 'math', label: 'Math', icon: Sigma },
  { type: 'filter', label: 'Filter', icon: Filter },
  { type: 'api', label: 'API', icon: Globe },
  { type: 'note', label: 'Note', icon: StickyNote },
  { type: 'merge', label: 'Merge', icon: GitMerge },
];

export const PipelineToolbar = () => {
  return (
    <div style={{ padding: '10px' }}>
      <div style={{ marginTop: '20px', display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
        {nodeConfig.map((n) => (
          <DraggableNode key={n.type} type={n.type} label={n.label} icon={n.icon} />
        ))}
      </div>
    </div>
  );
};