import React from "react";
import { Link } from "react-router-dom";
import {FaAngleRight} from "react-icons/fa"

import study from "../assets/study.png";
import living from "../assets/living.png";
import bedroom from "../assets/bedroom.png";
import kitchen from "../assets/kitchen.png";


const ProjectsTab = () => {
  const projectList = [
    {
      id: 1,
      name: "Kitchen",
      image: kitchen,
      route: "projects/kitchen",
    },
    {
      id: 2,
      name: "bedroom",
      image: bedroom,
      route: "projects/bedroom",
    },
    {
      id: 3,
      name: "living",
      image: living,
      route: "projects/living",
    },
    {
      id: 4,
      name: "study",
      image: study,
      route: "projects/study",
    },
  ];

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-3 mx-auto justify-items-center align-items-center w-2/3">
      {projectList.map((project) => (
        <div key={project.id} className="">
          <img
            src={project.image}
            alt={project.name}
            className="w-full rounded-[20px]"
          />
          <div className="p-1 font-dm flex pt-3 flex-row justify-between">
            <h3 className="text-xl mb-2 text-darkgrey">{project.name}</h3>
 
            <Link
              to={project.route}
              className="bg-lightpurple rounded-full h-12 w-12 flex items-center justify-center"
            >
              <FaAngleRight />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectsTab;
