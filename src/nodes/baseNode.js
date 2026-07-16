import { useState } from 'react';
import { Handle, Position } from 'reactflow';
import AutoResizeInput from '../components/autoResizeInput';

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
    <div style={{ width: 200, minHeight: 80, border: '1px solid black', padding: 8 }}>
      {handles.map((h) => (
        <Handle
          key={h.id}
          type={h.type}
          position={h.position}
          id={`${id}-${h.id}`}
          style={h.style}
        />
      ))}

      <div><span>{title}</span></div>

      {fields.map((f) => {
        const value = f.value !== undefined ? f.value : values[f.key];
        const onChange = f.onChange || handleChange(f.key);

        return (
          <div key={f.key}>
            {f.type === 'static' ? (
              <span>{f.text}</span>
            ) : (
              <label>
                {f.label}:
                {f.type === 'select' ? (
                  <select value={value} onChange={onChange}>
                    {f.options.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                ) : f.autosize ? (
                  <AutoResizeInput value={value} onChange={onChange} />
                ) : (
                  <input type="text" value={value} onChange={onChange} />
                )}
              </label>
            )}
          </div>
        );
      })}
    </div>
  );
};