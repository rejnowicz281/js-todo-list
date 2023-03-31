import "./style.css";
import project from "./project";
import screenController from "./screenController";
import task from "./task";

let currentProject = project("default");

document
  .getElementById("add-task-button")
  .addEventListener("click", function () {
    const title = document.getElementById("title-input").value;
    const description = document.getElementById("description-input").value;
    const priority = document.getElementById("priority-input").value;

    let newTask = task(title, description, priority);

    currentProject.addTask(newTask);
    let projectTask =
      currentProject.getTasks()[currentProject.getTasks().length - 1]; // get the task that was added to current project last

    screenController(currentProject).appendTask(projectTask);
  });
