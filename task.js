export default function task(title, completed = false) {
  const toggleCompletion = () =>
    completed == true ? (completed = false) : (completed = true);

  return {
    getTitle: () => title,
    getCompletion: () => completed,
    toggleCompletion,
  };
}
