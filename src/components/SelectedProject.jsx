import Tasks from "./Tasks.jsx";

export default function SelectedProject({
  project,
  onDeleteProject,
  onAddTask,
  onDeleteTask,
  tasks,
}) {
  const formattedDate = new Date(project.dueDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <div className="w-[35rem] mt-16">
      <header className="pb-4 mb-4 border-b-2 border-brown-300">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-brown-600 mb-2">
            {project.title}
          </h1>
          <button
            className="text-brown-600 hover:text-brown-950"
            onClick={onDeleteProject}
          >
            Delete
          </button>
        </div>
        <p className="mb-4 text-brown-400">{formattedDate}</p>
        <p className="text-brown-600 whitespace-pre-wrap">
          {project.description}
        </p>
      </header>
      <Tasks onAdd={onAddTask} onDelete={onDeleteTask} tasks={tasks} />
    </div>
  );
}
