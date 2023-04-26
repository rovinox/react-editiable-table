import { PropTypes } from "prop-types";
import "./modal.css";

export const Modal = ({ onClose, show, handleDelete,mode }) => {
  if (!show) {
    return null;
  }
  return (
    <div className="st-modal">
      <div className="st-modal-content">
        <h4>Delete Confirmation</h4>
        <div>Are you sure you want to delete selected {mode} </div>
        <div className="st-modal-action">
          <button onClick={onClose}>Cancel</button>
          <button onClick={handleDelete}>Delete</button>
        </div>
      </div>
    </div>
  );
};
Modal.propTypes = {
  // rows: PropTypes.array,
  mode: PropTypes.string,
  onClose: PropTypes.func,
  handleDelete: PropTypes.func,
  show: PropTypes.bool,
}
export default Modal