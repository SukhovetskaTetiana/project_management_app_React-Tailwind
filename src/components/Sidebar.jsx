import Button from "./Button.jsx";

export default function Sidebar({
  onStartAddProject,
  projects,
  onSelectedProject,
  selectedProjectId,
}) {
  const asideClasses =
    "bg-brown-950 text-white rounded-r-3xl px-12 py-20 md:px-14  lg:px-19 space-y-10 text-left md:shrink-0 min-w-[300px]";

  const h2Classes = "text-brown-200 text-xl font-bold uppercase";

  const ulClasses = "text-brown-200 space-y-2 text-md";

  return (
    <aside className={asideClasses}>
      <h2 className={h2Classes}>your projects</h2>
      <Button onClick={onStartAddProject}>+ Add Project</Button>
      <ul className={ulClasses}>
        {projects.map((project) => {
          let cssClasses =
            "w-full text-left px-2 py-1 rounded-sm my-1 hover:text-brown-200 hover:bg-brown-800";

          if (project.id === selectedProjectId) {
            cssClasses += " text-brown-200 bg-brown-800";
          } else {
            cssClasses += "  text-brown-400 ";
          }

          return (
            <li key={project.id}>
              <button
                className={cssClasses}
                onClick={() => onSelectedProject(project.id)}
              >
                {project.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
