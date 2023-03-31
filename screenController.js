export default function screenController(project) {
  const updateTasks = () => {
    const tasksContainer = document.querySelector(".tasks-container");
    tasksContainer.innerHTML = "";

    project
      .getTasks()
      .forEach((task) => tasksContainer.append(createTaskDiv(task)));
  };

  const appendTask = (task) => {
    const tasksContainer = document.querySelector(".tasks-container");

    tasksContainer.append(createTaskDiv(task));
  };

  return {
    updateTasks,
    appendTask,
  };
}

function createTaskDiv(task) {
  // TOP SECTION
  let taskDiv = document.createElement("div");
  taskDiv.classList.add("task");

  let topSection = document.createElement("div");
  topSection.classList.add("task-top-section");

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

  topSection.append(task.getId());
  topSection.append(checkboxDiv);
  topSection.append(titleDiv);

  taskDiv.append(topSection);

  // TOP SECTION END

  // DETAILS SECTION

  let detailsSection = document.createElement("div");
  detailsSection.classList.add("task-details-section");

  if (task.getDescription() != "") {
    let descriptionDiv = document.createElement("div");
    descriptionDiv.classList.add("task-description-box");
    let descriptionHeading = document.createElement("h1");
    descriptionHeading.textContent = "Description";
    let description = document.createElement("p");
    description.textContent = task.getDescription();

    descriptionDiv.append(descriptionHeading, description);
    detailsSection.append(descriptionDiv);
  }

  let priorityDiv = document.createElement("div");
  priorityDiv.classList.add("task-priority-box");
  let priorityHeading = document.createElement("h1");
  priorityHeading.textContent = "Priority";
  let priority = document.createElement("p");
  priority.textContent = task.getPriority();

  priorityDiv.append(priorityHeading, priority);
  detailsSection.append(priorityDiv);
  detailsSection.classList.add("hidden");

  taskDiv.append(detailsSection);
  // DETAILS SECTION END

  taskDiv.addEventListener("click", function () {
    detailsSection.classList.toggle("hidden");
    taskDiv.classList.toggle("task-expanded");
  });

  return taskDiv;
}
