import  { useCallback, useRef, useState } from "react";

import useClickOutside from "./useClickOutside";
import AddMore from "../../AddMore";
import { Modal } from "../modal/Index";

export const Popover = () => {
  const popoverRef = useRef();
  const [isOpen, toggle] = useState(false);
  const [isModal, setIsModal] = useState(false);
 

  const close = useCallback(() => toggle(false), []);
  useClickOutside(popoverRef, close);

const actions = ['Add On Bottom', 'Remove', 'Add On Top'] 
const handleAction = (action) => {
    toggle(false)
    if(action==='Remove'){
        setIsModal(true);
    }
}
  return (
    <div className="st-add-more">
      
     <div 
     onClick={() => toggle(true)}
     >

      <AddMore  /> 
     </div>
        

    

      {isOpen && (
        <div className="st-popover" ref={popoverRef}>
          {actions.map(item=> <button className="st-action-button" onClick={()=>{handleAction(item)}}  key={item} >{item}</button> )}
        </div>
      )}
            

          <Modal onClose={() => setIsModal(false)} show={isModal} />
    </div>
  );
};
