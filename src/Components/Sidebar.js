import React from "react";
import Button from "./Button";

function Sidebar({ onAddProject, projects, onSelectProject, selectedPageId }) {
  return (
    <div className="w-1/4 bg-black text-white rounded-xl text-center">
      <div>
        <h2 className="w-full mx-auto text-xl mt-14 uppercase font-bold">
          Your Projects
        </h2>
        <p className="text-center m-10 mt-14">
          <Button onClick={onAddProject}> + Add Project</Button>
        </p>

        <ul className=" m-10 text-center">
          {/* render all list title here */}

          {projects.map((project) => {
            let projectListStyle =
              "px-4 py-3 rounded-lg hover:bg-yellow-500 hover:text-white w-full mt-4 uppercase";

            if (selectedPageId === project.id) {
              projectListStyle +=
                " text-stone-800 bg-slate-100 ring-red-800 shadow-xl";
            } else {
              projectListStyle += " bg-slate-500 text-white ";
            }

            return (
              <li key={project.id}>
                <button
                  className={projectListStyle}
                  onClick={() => onSelectProject(project.id)}>
                  {project.title}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
