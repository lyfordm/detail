import { useParams } from "react-router-dom";
import projects from "../data/projects";

function FullProject() {
  const { id: projectId } = useParams();

  // Find the project based on the ID parameter
  const project = projects.find(
    (project) => project.id === parseInt(projectId)
  );


  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center my-20 mt-20 w-4/5 mx-auto">
      <div className="p-1 font-dm pt-3 flex flex-row gap-6 my-20">
        <div className=" bg-lightpurple w-full p-10 flex flex-col gap-4 rounded-lg">
          <p className="flex flex-row gap-10">
            <p>Client:</p>
            <p>{project.name}</p>
          </p>
          
          <p className="flex flex-row gap-4">
            <p>Category:</p>
            <p>{project.category}</p>
          </p>
          <p className="flex flex-row gap-12">
            <p>Date:</p>
            <p>{project.date}</p>
          </p>
        </div>
        <div>
          <p className="text-base font-jost mb-2 text-darkgrey">
            {project.paragraph1}
          </p>
          <p className="text-base font-jost mb-2 text-darkgrey">
            {project.paragraph2}
          </p>
        </div>
      </div>

      <img
        src={project.image}
        alt={project.name}
        className="w-full rounded-[20px] h-2/5"
      />
    </div>
  );
}

export default FullProject;
