export default function screenController(project) {
  const updateTasks = () => {
    const tasksContainer = document.querySelector(".tasks-container");
    tasksContainer.innerHTML = "";

    project.getTasks().forEach((task) => appendTask(task, tasksContainer));
  };

  updateTasks();

  return {
    updateTasks,
  };
}

function appendTask(task, destination) {
  let taskDiv = document.createElement("div");
  taskDiv.classList.add("task");
  taskDiv.append(task.getId());

  let checkboxDiv = document.createElement("div");
  checkboxDiv.classList.add("task-checkbox-box");

  let checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  checkbox.classList.add("task-checkbox");
  checkbox.checked = task.getCompletion();
  checkbox.addEventListener("click", task.toggleCompletion);

  checkboxDiv.append(checkbox);

  let titleDiv = document.createElement("div");
  titleDiv.classList.add("task-title-box");

  let title = document.createElement("h1");
  title.classList.add("task-title");
  title.textContent = task.getTitle();

  titleDiv.append(title);

  taskDiv.append(checkboxDiv);
  taskDiv.append(titleDiv);
  destination.append(taskDiv);
}
