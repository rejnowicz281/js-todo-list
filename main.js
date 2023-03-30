import "./style.css";
import project from "./project";
import screenController from "./screenController";
import task from "./task";

let currentProject = project("default");

currentProject.addTask(task("lorem0"));
currentProject.addTask(task("lorem1"));

console.log(currentProject.getTasks());

screenController(currentProject);
