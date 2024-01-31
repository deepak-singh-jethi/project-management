import React, { useState } from "react";
import Sidebar from "./Components/Sidebar";
import NoContent from "./Components/NoContent";
import AddContent from "./Components/AddContent";
import SelectedProject from "./Components/SelectedProject";

function App() {
  const [projectsState, setProjectsState] = useState({
    //selected page => (undefined => no content) and (null => add content) and (id = project detail)
    selectedPage: undefined,
    projects: [],
    tasks: [],
  });

  //function handle task
  function handleAddTask(taskText) {
    //make a object of this taskText
    //for reference of project save projectId

    console.log(taskText);

    const taskId = Math.random().toString();

    setProjectsState((prev) => {
      const newTask = {
        text: taskText,
        projectId: prev.selectedPage,
        id: taskId,
      };

      return {
        ...prev,
        tasks: [...prev.tasks, newTask],
      };
    });
  }

  //function delete task
  function handleDeleteTask(taskId) {
    setProjectsState((prev) => {
      return {
        ...prev,
        tasks: prev.tasks.filter((task) => {
          return task.id !== taskId;
        }),
      };
    });
  }

  function handleAddProject() {
    setProjectsState((prev) => {
      return { ...prev, selectedPage: null };
    });
  }

  function handleCancel() {
    setProjectsState((prev) => {
      return { ...prev, selectedPage: undefined };
    });
  }

  function handleAddNewProject(projectDeatil) {
    const projectId = Math.random().toString();

    setProjectsState((prev) => {
      const newProject = {
        ...projectDeatil,
        id: projectId,
      };

      return {
        ...prev,
        selectedPage: projectId,
        projects: [...prev.projects, newProject],
      };
    });
  }
  function handleSelectProject(projectId) {
    setProjectsState((prev) => {
      return { ...prev, selectedPage: projectId };
    });
  }

  //handle delete function =>

  function handleDelete(projectId) {
    const index = projectsState.projects.findIndex((project) => {
      return projectId === project.id;
    });

    console.log(index);

    setProjectsState((prev) => {
      const arr = prev.projects;
      arr.splice(index, 1);
      return { selectedPage: undefined, projects: [...arr] };
    });
  }

  //decide which page to be shown on the left based on selectedPage => (undefined => no content) and (null => add content) and (id =  = selectedPage)

  /* 
  {
    selectedPage: undefined,
    projects: [{
      id: 1,
      title: "Project 1",
      description: "This is project 1"
      dueDate:22/feb/1996
    }]
  }
  

  */

  const selectedProject = projectsState.projects.find(
    (project) => project.id === projectsState.selectedPage
  );

  let content = (
    <SelectedProject
      project={selectedProject}
      onDelete={handleDelete}
      onAddTask={handleAddTask}
      onDeleteTask={handleDeleteTask}
      tasks={projectsState.tasks}
      selectedId={projectsState.selectedPage}></SelectedProject>
  );

  if (projectsState.selectedPage === undefined) {
    content = <NoContent onAddProject={handleAddProject} />;
  } else if (projectsState.selectedPage === null) {
    content = (
      <AddContent onCancel={handleCancel} onAddNew={handleAddNewProject} />
    );
  }

  return (
    <div className="w-screen bg-white-700 h-screen flex gap-14 my-8">
      <Sidebar
        onAddProject={handleAddProject}
        projects={projectsState.projects}
        onSelectProject={handleSelectProject}
        selectedPageId={projectsState.selectedPage}
      />
      {content}
    </div>
  );
}

export default App;
