export default function project(title) {
  if (title == "") throw new Error("Project title is required");

  const tasks = [];

  const addTask = (task) => {
    const id = tasks.length;

    tasks.push(Object.assign({ getId: () => id }, task));
  };

  const toggleTask = (id) => {
    for (let i = 0; i < tasks.length; i++) {
      if (tasks[i].getId() == id) {
        tasks[i].toggleCompletion();
        break;
      }
    }
  };

  const sortTasks = () => {
    tasks.sort((a, b) => {
      const order = { high: 2, mid: 1, low: 0 };

      if (a.getCompletion() && !b.getCompletion()) {
        return -1;
      } else if (!a.getCompletion() && b.getCompletion()) {
        return 1;
      } else {
        return order[a.getPriority()] - order[b.getPriority()];
      }
    });
  };

  const removeTask = (id) => {
    for (let i = 0; i < tasks.length; i++) {
      if (tasks[i].getId() == id) tasks.splice(i, 1);
    }
  };

  return {
    getTitle: () => title,
    getTasks: () => tasks,
    toggleTask,
    addTask,
    sortTasks,
    removeTask,
  };
}
