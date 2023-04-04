import "./style.css";
import screenController from "./screenController";
import task from "./task";
import projectManager from "./projectManager";

(function () {
  const addTaskButton = document.getElementById("add-task-button");
  const submitTaskButton = document.getElementById("submit-task-button");
  const openProjectsButton = document.getElementById("open-projects-button");
  const closeProjectsButton = document.getElementById("close-projects-button");

  const modal = document.querySelector(".modal");
  const overlay = document.querySelector(".overlay");
  const closeModalButton = document.getElementById("close-modal-button");

  function openModal() {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
  }

  function closeModal() {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
  }

  function openProjects() {
    document.querySelector("aside").style.width = "250px";
  }

  function closeProjects() {
    document.querySelector("aside").style.width = "0";
  }

  openProjectsButton.addEventListener("click", openProjects);
  closeProjectsButton.addEventListener("click", closeProjects);

  addTaskButton.addEventListener("click", openModal);

  closeModalButton.addEventListener("click", closeModal);
  overlay.addEventListener("click", closeModal);

  submitTaskButton.addEventListener("click", function () {
    const title = document.getElementById("title-input").value;
    const description = document.getElementById("description-input").value;
    const priority = document.getElementById("priority-input").value;
    const dueDate = document.getElementById("due-date-input").value;

    let newTask = task(title, priority, new Date(dueDate), description);

    closeModal();
    projectManager.getCurrentProject().addTask(newTask);

    screenController.updateTasks();
  });
})();
