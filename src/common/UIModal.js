import React, { useEffect } from "react";
import OutsideListener from "./OutsideListener";

function UIModal({ children, isOpen, onClose, className }) {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-y-hidden");
    } else {
      document.body.classList.remove("overflow-y-hidden");
    }
  }, [isOpen]);
  if (isOpen) {
    return (
      <div className="fixed top-0 left-0 bg-black bg-opacity-70 modal flex items-center justify-center h-screen w-screen z-[999]">
        <OutsideListener func={onClose}>
          <div className={`bg-white rounded-md max-h-[80vh] overflow-y-auto overflow-x-hidden mx-12 ${className}`}>{children}</div>
        </OutsideListener>
      </div>
    );
  } else return null;
}

export default UIModal;
