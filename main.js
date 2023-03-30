import "./style.css";
import project from "./project";
import screenController from "./screenController";
import task from "./task";

let currentProject = project("default");

document
  .getElementById("add-task-button")
  .addEventListener("click", function () {
    const title = document.getElementById("title-input").value;

    currentProject.addTask(task(title));
    screenController(currentProject).updateTasks();
  });
