import { useState, useRef, useEffect } from 'react';

const MAX_WIDTH = 190;
const MIN_WIDTH = 120;

const AutoResizeInput = ({value, onChange}) => {
  const textareaRef = useRef(null);

  useEffect(() => {
    const el = textareaRef.current;
    if (el) {
      el.style.height = 'auto';          
      el.style.height = `${el.scrollHeight}px`;
    }
  }, [value]);

  const width = Math.min(MAX_WIDTH, Math.max(MIN_WIDTH, value.length * 8));

  return (
    <textarea
      ref={textareaRef}
      value={value}
      onChange={onChange}
      style={{
        width: `${width}px`,
        maxWidth: MAX_WIDTH,
        resize: 'none',
        overflow: 'hidden',
        whiteSpace: 'pre-wrap',
        wordBreak: 'break-word',
      }}
    />
  )
}

export default AutoResizeInput
