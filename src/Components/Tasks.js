import React from "react";
import NewTask from "./NewTask";

function Tasks({ onAdd, onDelete, tasks, selectedId }) {
  return (
    <section className="border-t-2 border-stone-500 pt-5">
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
      <NewTask onAdd={onAdd}></NewTask>
      {tasks.length === 0 && (
        <p className="text-stone-800 my-4 ">
          This Project does not have any tasks yet.
        </p>
      )}
      {tasks.length > 0 && (
        <ul className="py-4  mt-10 rounded-md ">
          {tasks.map((task) => {
            if (task.projectId === selectedId) {
              return (
                <li
                  key={task.id}
                  className="flex justify-between bg-stone-200 my-5 px-4 py-2 rounded-md">
                  <span>{task.text}</span>
                  <button
                    className="text-stone-700 hover:text-red-600"
                    onClick={() => {
                      onDelete(task.id);
                    }}>
                    Delete
                  </button>
                </li>
              );
            } else {
              return null;
            }
          })}
        </ul>
      )}
    </section>
  );
}

export default Tasks;
