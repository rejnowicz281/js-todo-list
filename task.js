export default function task(title, priority, dueDate, description = "") {
  if (
    title == "" ||
    priority == "" ||
    !(dueDate instanceof Date) ||
    isNaN(dueDate)
  )
    throw new Error("Invalid task paramaters");

  let completed = false;

  const toggleCompletion = () =>
    completed == true ? (completed = false) : (completed = true);

  return {
    getTitle: () => title,
    getDescription: () => description,
    getPriority: () => priority,
    getDueDate: () => dueDate,
    getCompletion: () => completed,
    toggleCompletion,
  };
}
