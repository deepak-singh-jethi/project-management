import React, { useState } from "react";
import Button from "./Button";

function NewTask({ onAdd }) {
  const [enteredTask, setEnteredTask] = useState("");

  function handleChange(event) {
    setEnteredTask(event.target.value);
  }

  function handleAddTask() {
    if (enteredTask.trim() === "") {
      return;
    }

    onAdd(enteredTask);
    setEnteredTask("");
  }

  return (
    <div className="flex items-center gap-4 mb-7">
      <input
        type="text"
        className="px-2 py-1 rounded-sm bg-stone-300 w-96"
        onChange={handleChange}
        value={enteredTask}
      />

      <button
        className="text-stone-700 bg-stone-300 hover:text-stone-300 hover:bg-stone-700 px-2 py-1 rounded-sm"
        onClick={handleAddTask}>
        {" "}
        + Add Task{" "}
      </button>
    </div>
  );
}

export default NewTask;
