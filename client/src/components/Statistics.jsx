import React from "react";

const ProjectsStatistics = () => {
  const years = 10;
  const projects = 100;
  const activeProjects = 20;
  const happyClients = 95

  return (
    <div className="flex justify-center items-center gap-4 h-[250px] bg-lightpurple text-darkgrey">
      <div className="flex flex-col items-center border-r-2 pr-4">
        <h2 className="text-4xl font-bold font-dm">{years}</h2>
        <p className="text-gray-600 font-jost">Years</p>
      </div>
      <div className="flex flex-col items-center border-r-2 pr-4">
        <h2 className="text-4xl font-bold font-dm">{projects}</h2>
        <p className="text-gray-600 font-jost">Projects Completed</p>
      </div>
      <div className="flex flex-col items-center border-r-2 pr-4">
        <h2 className="text-4xl font-bold font-dm">{activeProjects}</h2>
        <p className="text-gray-600 font-jost">Active Projects</p>
      </div>
      <div className="flex flex-col items-center">
        <h2 className="text-4xl font-bold font-dm">{happyClients}</h2>
        <p className="text-gray-600 font-jost">Happy Clients</p>
      </div>
    </div>
  );
};

export default ProjectsStatistics;
