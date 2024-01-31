import React from "react";
import Tasks from "./Tasks";

function SelectedProject({
  project,
  onDelete,
  onAddTask,
  onDeleteTask,
  tasks,
  selectedId,
}) {
  const { title, description, dueDate } = project;

  const formattedDate = new Date(dueDate).toLocaleDateString("en-us", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="m-24 w-2/5">
      <header className="pb-4 mb-4">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-stone-600 mb-2 uppercase">
            {title}
          </h1>
          <button
            className="text-stone-100 bg-slate-600 hover:text-white hover:bg-red-500 px-5 py-2 rounded"
            onClick={() => onDelete(project.id)}>
            Delete
          </button>
        </div>

        <p className="my-4 text-red-400 rounded-xl font-bold">
          Due Date: - {formattedDate}
        </p>
        <p className="text-stone-600 whitespace-pre-wrap font-serif capitalize my-5">
          {description}
        </p>
      </header>
      <Tasks
        onAdd={onAddTask}
        onDelete={onDeleteTask}
        tasks={tasks}
        projectId={project.id}
        selectedId={selectedId}></Tasks>
    </div>
  );
}

export default SelectedProject;
