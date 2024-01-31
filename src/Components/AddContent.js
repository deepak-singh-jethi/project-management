import React, { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal.js";
const buttonStyle = "px-4 py-2 rounded-md text-stone-200 w-36";

function AddContent({ onCancel, onAddNew }) {
  const modal = useRef();
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  const handleSave = () => {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;

    //validation

    if (
      enteredTitle.trim() === "" ||
      enteredDescription.trim() === "" ||
      enteredDueDate.trim() === ""
    ) {
      modal.current.open();
      return;
    }
    onAddNew({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });
  };

  return (
    <>
      <Modal ref={modal} buttonCaption="Close">
        <h2 className="w-full mx-auto text-xl p-1 uppercase font-bold text-slate-700">
          Invalid Inputs
        </h2>
        <p className="w-full mx-auto text-lg p-1 uppercase font-serif text-slate-500">
          Oops.. looks like you forgot to enter a value
        </p>
        <p className="w-full mx-auto text-lg p-1 uppercase font-serif text-red-500">
          Please make sure that you provide valid value for every input field.
        </p>
      </Modal>

      <div className=" m-24 w-2/5">
        <menu className="flex items-center justify-end gap-12 my-4">
          <li>
            <button
              className={` bg-zinc-600 hover:bg-red-400  ${buttonStyle}`}
              onClick={onCancel}>
              Cancel
            </button>
          </li>
          <li>
            <button
              className={` bg-stone-500 hover:bg-green-700  ${buttonStyle}`}
              onClick={handleSave}>
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input ref={title} label="Title" type="text"></Input>
          <Input ref={description} label="Description" isTextArea={true} />
          <Input ref={dueDate} label="Due Date" type="date" />
        </div>
      </div>
    </>
  );
}

export default AddContent;
