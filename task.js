export default function task(title, description, priority, completed = false) {
  if (title == "" || priority == "") throw new Error("Invalid task paramaters");

  const toggleCompletion = () =>
    completed == true ? (completed = false) : (completed = true);

  const setPriority = (value) => {
    if (value == "low" || value == "mid" || value == "high") priority = "value";
  };

  return {
    getTitle: () => title,
    getDescription: () => description,
    getPriority: () => priority,
    getCompletion: () => completed,
    setPriority,
    toggleCompletion,
  };
}
