import './submitResultModal.css';
import { CheckCircle2, XCircle } from 'lucide-react';

export const SubmitResultModal = ({ result, onClose }) => {
  if (!result) return null;

  const { num_nodes, num_edges, is_dag } = result;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <span>Pipeline Summary</span>
          <span className="modal-close" onClick={onClose}>✕</span>
        </div>

        <div className="modal-body">
          <div className="modal-row">
            <span className="modal-label">Nodes</span>
            <span className="modal-value">{num_nodes}</span>
          </div>
          <div className="modal-row">
            <span className="modal-label">Edges</span>
            <span className="modal-value">{num_edges}</span>
          </div>
          <div className="modal-row">
            <span className="modal-label">Valid DAG</span>
            <span className={`modal-value ${is_dag ? 'success' : 'error'}`}>
              {is_dag ? <CheckCircle2 size={16} /> : <XCircle size={16} />}
              {is_dag ? 'Yes' : 'No'}
            </span>
          </div>
        </div>

        <button className="modal-ok-btn" onClick={onClose}>OK</button>
      </div>
    </div>
  );
};