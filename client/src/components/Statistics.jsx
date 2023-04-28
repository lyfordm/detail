import React from "react";

const ProjectsStatistics = () => {
  const years = 10;
  const projects = 100;
  const activeProjects = 20;
  const happyClients = 95

  return (
    <div className="flex justify-center items-center sm:px-8 gap-4 md:h-[250px] sm:h-[150px] bg-lightpurple text-darkgrey">
      <div className="flex flex-col items-center border-r-2 pr-4">
        <h2 className="md:text-4xl sm:text-xl font-bold font-dm">{years}</h2>
        <p className="text-gray-600 md:text-base sm:text-sm font-jost">Years</p>
      </div>
      <div className="flex flex-col items-center justify-center border-r-2 pr-4">
        <h2 className="md:text-4xl sm:text-xl font-bold font-dm">{projects}</h2>
        <p className="text-gray-600 md:text-base text-center sm:text-sm font-jost">
          Projects Completed
        </p>
      </div>
      <div className="flex flex-col items-center border-r-2 pr-4">
        <h2 className="md:text-4xl sm:text-xl font-bold font-dm">
          {activeProjects}
        </h2>
        <p className="text-gray-600 md:text-base text-center sm:text-sm font-jost">
          Active Projects
        </p>
      </div>
      <div className="flex flex-col items-center">
        <h2 className="md:text-4xl sm:text-xl font-bold font-dm">
          {happyClients}
        </h2>
        <p className="text-gray-600 md:text-base text-center sm:text-sm font-jost">
          Happy Clients
        </p>
      </div>
    </div>
  );
};

export default ProjectsStatistics;
