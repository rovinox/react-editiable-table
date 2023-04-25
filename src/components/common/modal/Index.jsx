
import "./modal.css";

export const Modal = ({ onClose, show }) => {
  if (!show) {
    return null;
  }
  return (
    <div className="st-modal">
      <div className="st-modal-content">
        <h4>Modal title</h4>
        <div>Modal content here...</div>
        <div className="st-modal-action">
          <button onClick={onClose}>Close</button>
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
};
