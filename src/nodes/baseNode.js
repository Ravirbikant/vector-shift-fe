import { useState } from 'react';
import { Handle, Position } from 'reactflow';
import AutoResizeInput from '../components/autoResizeInput';
import './baseNode.css';

export const BaseNode = ({ id, data, title, handles = [], fields = [] }) => {
  const [values, setValues] = useState(() => {
    const initial = {};
    fields.forEach((f) => {
      initial[f.key] = data?.[f.key] ?? f.default ?? '';
    });
    return initial;
  });

  const handleChange = (key) => (e) => {
    setValues((prev) => ({ ...prev, [key]: e.target.value }));
  };

  return (
    <div className="node-card">
      {handles.map((h) => (
        <Handle
          key={h.id}
          type={h.type}
          position={h.position}
          id={`${id}-${h.id}`}
          className="node-handle"
          style={h.style}
        />
      ))}

      <div className="node-header">
        <div className="node-header-title">
          <span className="node-header-icon">▶</span>
          <span>{title}</span>
        </div>
        <div className="node-header-actions">
          <span>⟳</span><span>⚙</span><span>✕</span>
        </div>
      </div>

      <div className="node-body">
        {fields.map((f) => {
          const value = f.value !== undefined ? f.value : values[f.key];
          const onChange = f.onChange || handleChange(f.key);

          return (
            <div key={f.key} className="node-field">
              {f.type === 'static' ? (
                <span className="node-static-text">{f.text}</span>
              ) : (
                <label className="node-field-label-row">
                  {f.label}
                  {f.type === 'select' ? (
                    <select className="node-select" value={value} onChange={onChange}>
                      {f.options.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  ) : f.autosize ? (
                    <AutoResizeInput className="node-input" value={value} onChange={onChange} />
                  ) : (
                    <input className="node-input" type="text" value={value} onChange={onChange} />
                  )}
                </label>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};