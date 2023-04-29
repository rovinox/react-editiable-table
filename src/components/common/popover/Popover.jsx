import { useCallback, useRef, useState } from "react";
import { PropTypes } from "prop-types";

import useClickOutside from "./useClickOutside";
import AddMore from "../../AddMore";
import { Modal } from "../modal/Index";
import { rowsActions, columnActions } from "../../util";
const Popover = ({
  columnIndex,
  mode,
  rowIndex,
  setRows,
  rows,
  onChange,
  totalColumn,
}) => {
  const popoverRef = useRef();
  const [isOpen, toggle] = useState(false);
  const [isModal, setIsModal] = useState(false);
  const close = useCallback(() => toggle(false), []);
  useClickOutside(popoverRef, close);

  const rowsActionsItems = [
    { name: "Add Row On Top", id: 1 },
    { name: "Add Row On Bottom", id: 2 },
    { name: "Remove Row", id: 3 },
  ];
  const columnActionsItems = [
    { name: "Add Column On Left", id: 4 },
    { name: "Add Column On Right", id: 5 },
    { name: "Remove Column", id: 6 },
  ];

  const currentActionsItems = mode === "row" ? rowsActionsItems : columnActionsItems;
  const handleDelete = (id) => {
    setIsModal(false);
    rowsActions({id, rows, totalColumn, onChange, setRows, rowIndex });
  };

  const handleAction = (id) => {
    toggle(false);
    switch (id) {
       case 1:
       case 2:
        rowsActions({id, rows, totalColumn, onChange, setRows, rowIndex });
        break;
      case 3:
        setIsModal(true);
        break;
       case 4:
       case 5:
       columnActions({id, rows, totalColumn, onChange, setRows, rowIndex });
         break;
      case 6:
        setIsModal(true);
        break;
    }
  };
  return (
    <div className="st-add-more">
      <div
        onClick={() => {
          toggle(true);
        }}
      >
        <AddMore />
      </div>
      {isOpen && (
        <div className="st-popover" ref={popoverRef}>
          {currentActionsItems.map((item) => (
            <button
            //disable add row on top and delete for 0 index becomes it's the header
              disabled={(item.id === 1 || item.id === 3) && rowIndex === 0} 
              className="st-action-button"
              onClick={() => {
                handleAction(item.id);
              }}
              key={item.id}
            >
              {item.name}
            </button>
          ))}
        </div>
      )}
      <Modal
        mode={mode}
        onClose={() => setIsModal(false)}
        handleDelete={handleDelete}
        show={isModal}
      />
    </div>
  );
};
Popover.propTypes = {
  mode: PropTypes.string,
  setRows: PropTypes.func,
  onChange: PropTypes.func,
  columnIndex: PropTypes.number,
  rowIndex: PropTypes.number,
  totalColumn: PropTypes.number,
  rows: PropTypes.array,
};
export default Popover;
