import projectManager from "./projectManager.js";

function screenController() {
  const createTaskDiv = (task) => {
    // TOP SECTION
    let taskDiv = document.createElement("div");
    taskDiv.classList.add("task");

    let deleteTaskButton = document.createElement("button");
    deleteTaskButton.setAttribute("id", "delete-task-button");
    deleteTaskButton.classList.add("close-button");
    deleteTaskButton.textContent = "⨉";

    deleteTaskButton.addEventListener("click", function () {
      projectManager.getCurrentProject().removeTask(task.getId());
      updateTasks();
    });

    taskDiv.append(deleteTaskButton);

    let topSection = document.createElement("div");
    topSection.classList.add("task-top-section");

    let checkboxDiv = document.createElement("div");
    checkboxDiv.classList.add("task-checkbox-box");

    let checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.classList.add("task-checkbox");
    checkbox.checked = task.getCompletion();

    let titleDiv = document.createElement("div");
    titleDiv.classList.add("task-title-box");

    let title = document.createElement("h1");
    title.classList.add("task-title");
    title.textContent = task.getTitle();

    if (task.getCompletion()) {
      taskDiv.classList.add("greyed-out");
      taskDiv.classList.add("task-completed");
      title.classList.add("scratched");
    }

    checkbox.addEventListener("click", function () {
      projectManager.getCurrentProject().toggleTask(task.getId());
      taskDiv.classList.toggle("greyed-out");
      taskDiv.classList.toggle("task-completed");
      title.classList.toggle("scratched");
      updateTasks();
    });

    checkboxDiv.append(checkbox);
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
      let description = document.createElement("p");
      description.textContent = task.getDescription();

      descriptionDiv.append(description);
      detailsSection.append(descriptionDiv);
    }

    let priorityDiv = document.createElement("div");
    priorityDiv.classList.add("task-priority-box", "greyed-out");
    let priority = document.createElement("p");
    priority.textContent = `This is a -${task.getPriority()}- priority task`;

    priorityDiv.append(priority);
    detailsSection.append(priorityDiv);

    let dueDateDiv = document.createElement("div");
    dueDateDiv.classList.add("task-due-date-box", "greyed-out");
    let dueDate = document.createElement("p");
    dueDate.textContent = `This task is to be finished by ${
      task.getDueDate().getMonth() + 1
    }/${task.getDueDate().getDate()}/${task.getDueDate().getFullYear()}`;

    dueDateDiv.append(dueDate);
    detailsSection.append(dueDateDiv);

    detailsSection.classList.add("hidden");

    taskDiv.append(detailsSection);
    // DETAILS SECTION END

    taskDiv.addEventListener("click", function (e) {
      if (e.target !== checkbox) {
        detailsSection.classList.toggle("hidden");
        taskDiv.classList.toggle("task-expanded");
      }
    });

    switch (task.getPriority()) {
      case "low":
        taskDiv.classList.add("low-priority");
        break;
      case "mid":
        taskDiv.classList.add("mid-priority");
        break;
      case "high":
        taskDiv.classList.add("high-priority");
        break;
    }

    return taskDiv;
  };

  const createProjectButton = (project) => {
    let projectButton = document.createElement("button");
    projectButton.classList.add("project", "aside-button");
    projectButton.textContent = project.getTitle();

    projectButton.addEventListener("click", function () {
      projectManager.makeCurrentProject(project.getId());

      document.querySelector(".current-project-title").textContent =
        project.getTitle();

      updateTasks();
    });

    return projectButton;
  };

  const updateTasks = () => {
    const tasksContainer = document.querySelector(".tasks-container");
    tasksContainer.innerHTML = "";

    projectManager.getCurrentProject().sortTasks();

    projectManager
      .getCurrentProject()
      .getTasks()
      .forEach((task) => tasksContainer.prepend(createTaskDiv(task)));
  };

  const updateProjects = () => {
    const projectsContainer = document.querySelector(".projects-container");
    projectsContainer.innerHTML = "";

    projectManager
      .getProjects()
      .forEach((project) =>
        projectsContainer.prepend(createProjectButton(project))
      );
  };

  return {
    updateTasks,
    updateProjects,
  };
}

export default screenController();
