import React from "react";
import '../pages/Styles.css';


function Modal({ open, onClose, Customstyle }) {
  if (!open) {
    return null;
  }

  return (
    <div onClick={onClose} className="  text-[#184C88] sha overlay text-lg  transiti">
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        style={Customstyle}
        className=" px-8 py-5 absolute top-0 left-44 h-full modalContent "
      >
        <ol className=" space-y-2 text-sm mt-[30vh]  items-center">
            <li> Home</li>
            <li> Home</li>
            <li> Home</li>
            <li> Home</li>
            <li> Home</li>

    </ol>
      </div>
    </div>
  );
}

export default Modal;
