import React, {useState, useRef} from "react";
import ConfirmationModal from './ConfirmationModal'

const MultButtons = () => {
    const [open, setOpen] = useState();
    const modalRef = useRef();

    return (
        <>
            <button onClick={() => setOpen(true)}>Open</button>
            <button onClick={() => modalRef.current.focusCloseBtn}>Focus Close</button>
            <button onClick={() => modalRef.current.focusConfirmBtn}>Focus Confirm</button>
            <button onClick={() => modalRef.current.focusDenyBtn}>Focus Deny</button>
            <ConfirmationModal 
                ref={modalRef}
                isOpen={open}
                onClose={() => setOpen(false)}
            />
        </>
    );
};

export default MultButtons;
