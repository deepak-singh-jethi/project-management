import React, { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
// import { createPortal } from "react-dom";

const Modal = forwardRef(function Modal({ children, buttonCaption }, ref) {
  const dialog = useRef();
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog
      ref={dialog}
      className="backdrop:bg-stone-900/90 bg-slate-200 p-10 rounded-xl text-center">
      {children}
      <form method="dialog" className="text-center pt-5">
        <button className="px-7 py-3 text-stone-100  bg-slate-500 rounded-lg hover:bg-slate-600">
          {buttonCaption}
        </button>
      </form>
    </dialog>,
    document.getElementById("modal-root")
  );
});

export default Modal;
