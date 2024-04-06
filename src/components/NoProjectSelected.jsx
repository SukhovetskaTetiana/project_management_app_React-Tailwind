import NoProjectImage from "../assets/no-projects.png";
import Button from "./Button";

export default function NoSelectProjects({ onStartAddProject }) {
  return (
    <div className="mt-24 w-2/3 text-center">
      <img
        src={NoProjectImage}
        alt="Picture of No Projects Selected"
        className="w-16 h-16 object-contain mx-auto"
      />

      <h2 className="text-xl font-bold text-brown-500 mb-4">
        No Projects Selected
      </h2>
      <p className="text-brown-500 mb-4">
        Select a project or get started with a new one
      </p>
      <p className="py-6">
        <Button onClick={onStartAddProject}>Create new project</Button>
      </p>
    </div>
  );
}
