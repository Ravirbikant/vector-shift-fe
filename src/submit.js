import { useStore } from './store';
import { shallow } from 'zustand/shallow';

const selector = (state) => ({
  nodes: state.nodes,
  edges: state.edges,
});

export const SubmitButton = () => {
  const { nodes, edges } = useStore(selector, shallow);

  const handleSubmit = async () => {
    try {
      const response = await fetch('http://localhost:8000/pipelines/parse', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nodes, edges }),
      });

      const data = await response.json();

      alert(
        `Number of Nodes: ${data.num_nodes}\n` +
        `Number of Edges: ${data.num_edges}\n` +
        `Is DAG: ${data.is_dag}`
      );
    } catch (error) {
      alert('Error submitting pipeline: ' + error.message);
    }
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <button type="button" onClick={handleSubmit}>Submit</button>
    </div>
  );
};