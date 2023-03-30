export default function project(title) {
  const tasks = [];

  const addTask = (task) => {
    const id = tasks.length;

    tasks.push(Object.assign({ getId: () => id }, task));
  };

  const getTask = (id) => {
    for (let i = 0; i < tasks.length; i++) {
      if (tasks[i].getId() == id) return tasks[i];
    }
  };

  const removeTask = (id) => {
    for (let i = 0; i < tasks.length; i++) {
      if (tasks[i].getId() == id) tasks.splice(i, 1);
    }
  };

  return {
    getTasks: () => tasks,
    getTask,
    addTask,
    removeTask,
  };
}
