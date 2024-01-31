import React from "react";
import noProjects from "../assets/no-projects.png";
import Button from "./Button";

function NoContent({ onAddProject }) {
  return (
    <div className="m-24 text-center w-2/5 ">
      <img
        src={noProjects}
        alt="No Projects"
        className="  w-60 h-60 object-contain mx-auto"
      />
      <h2 className="text-xl font-bold text-stone-500 my-4">
        No Project Selected
      </h2>
      <p className="text-stone-400 mb-4">
        Select a Project or Get started with a new one!!
      </p>
      <p className="mt-8">
        <Button onClick={onAddProject}>Add a new project</Button>
      </p>
    </div>
  );
}

export default NoContent;
