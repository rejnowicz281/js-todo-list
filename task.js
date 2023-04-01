export default function task(
  title,
  description,
  priority,
  dueDate,
  completed = false
) {
  if (title == "" || priority == "" || !(dueDate instanceof Date))
    throw new Error("Invalid task paramaters");

  const toggleCompletion = () =>
    completed == true ? (completed = false) : (completed = true);

  const setPriority = (value) => {
    if (value == "low" || value == "mid" || value == "high") priority = "value";
  };

  return {
    getTitle: () => title,
    getDescription: () => description,
    getPriority: () => priority,
    getDueDate: () => dueDate,
    getCompletion: () => completed,
    setPriority,
    toggleCompletion,
  };
}
