import React from "react";
import { Link } from "react-router-dom";
import {FaAngleRight} from "react-icons/fa"


import bed1 from "../assets/bed-1.jpg";
import kitchen4 from "../assets/kitchen-4.jpg";
import living3 from "../assets/living3.jpg";
import study4 from "../assets/study-4.jpg";


const ProjectsTab = () => {
  const projectList = [
    {
      id: 1,
      name: "Kitchen",
      image: kitchen4,
      route: "projects/4",
    },
    {
      id: 2,
      name: "bedroom",
      image: bed1,
      route: "projects/13",
    },
    {
      id: 3,
      name: "living",
      image: living3,
      route: "projects/19",
    },
    {
      id: 4,
      name: "study",
      image: study4,
      route: "projects/8",
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
