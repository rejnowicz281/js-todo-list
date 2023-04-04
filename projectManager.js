import project from "./project";

function projectManager() {
  let projects = [];

  const addProject = (project) => {
    const id = projects.length;

    projects.push(Object.assign({ getId: () => id }, project));
  };

  addProject(project("Default Project"));
  let currentProject = projects[0];

  const makeCurrentProject = (id) => {
    for (let i = 0; i < projects.length; i++) {
      if (projects[i].getId() == id) currentProject = projects[i];
    }
  };

  return {
    addProject,
    makeCurrentProject,
    getProjects: () => projects,
    getCurrentProject: () => currentProject,
  };
}

export default projectManager();
