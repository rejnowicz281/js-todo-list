import "./style.css";
import screenController from "./screenController";
import task from "./task";
import project from "./project";
import projectManager from "./projectManager";

(function () {
  const addTaskButton = document.getElementById("add-task-button");
  const submitTaskButton = document.getElementById("submit-task-button");
  const addTaskModal = document.getElementById("add-task-modal");
  const closeAddTaskModalButton = document.getElementById(
    "close-add-task-modal-button"
  );

  const openProjectsButton = document.getElementById("open-projects-button");
  const closeProjectsButton = document.getElementById("close-projects-button");

  const addProjectButton = document.getElementById("add-project-button");
  const createProjectButton = document.getElementById("create-project-button");
  const addProjectModal = document.getElementById("add-project-modal");
  const closeAddProjectModalButton = document.getElementById(
    "close-add-project-modal-button"
  );

  const overlay = document.querySelector(".overlay");

  function openAddTaskModal() {
    addTaskModal.classList.remove("hidden");
    overlay.classList.remove("hidden");
  }

  function closeAddTaskModal() {
    addTaskModal.classList.add("hidden");
    overlay.classList.add("hidden");
  }

  function openProjects() {
    document.querySelector("aside").style.width = "250px";
  }

  function closeProjects() {
    document.querySelector("aside").style.width = "0";
  }

  function openAddProjectModal() {
    addProjectModal.classList.remove("hidden");
    overlay.classList.remove("hidden");
  }

  function closeAddProjectModal() {
    addProjectModal.classList.add("hidden");
    overlay.classList.add("hidden");
  }

  openProjectsButton.addEventListener("click", openProjects);
  closeProjectsButton.addEventListener("click", closeProjects);

  addProjectButton.addEventListener("click", openAddProjectModal);

  closeAddProjectModalButton.addEventListener("click", closeAddProjectModal);

  addTaskButton.addEventListener("click", openAddTaskModal);

  overlay.addEventListener("click", function () {
    closeAddTaskModal();
    closeAddProjectModal();
  });

  closeAddTaskModalButton.addEventListener("click", closeAddTaskModal);

  submitTaskButton.addEventListener("click", function () {
    const title = document.getElementById("task-title-input").value;
    const description = document.getElementById("task-description-input").value;
    const priority = document.getElementById("task-priority-input").value;
    const dueDate = document.getElementById("task-due-date-input").value;

    let newTask = task(title, priority, new Date(dueDate), description);

    closeAddTaskModal();
    projectManager.getCurrentProject().addTask(newTask);

    screenController.updateTasks();
  });

  createProjectButton.addEventListener("click", function () {
    const title = document.getElementById("project-title-input").value;

    let newProject = project(title);

    closeAddProjectModal();

    projectManager.addProject(newProject);
    projectManager.makeCurrentProject(
      projectManager
        .getProjects()
        [projectManager.getProjects().length - 1].getId()
    ); // Make last added project the current one

    screenController.updateProjects();
  });
})();
