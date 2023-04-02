import "./style.css";
import project from "./project";
import screenController from "./screenController";
import task from "./task";

let currentProject = project("default");

(function () {
  const addTaskButton = document.getElementById("add-task-button");
  const submitTaskButton = document.getElementById("submit-task-button");
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

  addTaskButton.addEventListener("click", openModal);

  submitTaskButton.addEventListener("click", closeModal);
  closeModalButton.addEventListener("click", closeModal);
  overlay.addEventListener("click", closeModal);

  submitTaskButton.addEventListener("click", function () {
    const title = document.getElementById("title-input").value;
    const description = document.getElementById("description-input").value;
    const priority = document.getElementById("priority-input").value;
    const dueDate = document.getElementById("due-date-input").value;

    let newTask = task(title, priority, new Date(dueDate), description);

    currentProject.addTask(newTask);

    screenController(currentProject).updateTasks();
  });
})();
