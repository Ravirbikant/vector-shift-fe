import { useStore } from './store';
import { shallow } from 'zustand/shallow';
import { useState } from 'react';
import { SubmitResultModal } from './submitResultModal';
import './submit.css';

const selector = (state) => ({
  nodes: state.nodes,
  edges: state.edges,
});

export const SubmitButton = () => {
  const { nodes, edges } = useStore(selector, shallow);
  const [result, setResult] = useState(null);

  const handleSubmit = async () => {
    try {
      const response = await fetch('http://localhost:8000/pipelines/parse', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nodes, edges }),
      });

      const data = await response.json();

      setResult(data);
    } catch (error) {
      alert('Error submitting pipeline: ' + error.message);
    }
  };

  return (
    <>
    <div className="submit-btn-wrapper">
      <button className="submit-btn" type="button" onClick={handleSubmit}>
        Submit
      </button>
    </div>
    <SubmitResultModal result={result} onClose={() => setResult(null)} />
    </>
  );
};