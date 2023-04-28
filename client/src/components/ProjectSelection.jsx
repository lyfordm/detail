import { useState } from "react";
import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";
import projects from "../data/projects";

const categories = [
  "Bedrooms",
  "Bathrooms",
  "Dining Rooms",
  "Kitchens",
  "Living Areas",
  "Study Rooms",
];

function ProjectPage(props) {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [showCategories, setShowCategories] = useState(false);

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const filteredProjects = projects.filter(
    (project) => project.category === selectedCategory
  );

  return (
    <div className="flex flex-col items-center justify-center my-20">
      <div className="hidden md:flex items-center justify-center space-x-2 border-2 py-3 px-3 rounded-full border-[#CDA274]">
        {categories.map((category) => (
          <div
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`w-32 h-12 rounded-full flex items-center justify-center cursor-pointer text-white ${
              category === selectedCategory ? "bg-lightbrown" : "bg-gray-300"
            }`}
          >
            {category}
          </div>
        ))}
      </div>
      <div className="md:hidden flex items-center justify-center space-x-2 border-2 py-3 px-3 rounded-full border-[#CDA274]">
        <div
          onClick={() => setShowCategories(!showCategories)}
          className={`w-32 h-12 rounded-full flex items-center justify-center cursor-pointer text-white ${
            showCategories ? "bg-lightbrown" : "bg-gray-300"
          }`}
        >
          {selectedCategory}
        </div>
        {showCategories && (
          <div className="absolute z-10 bg-gray-300 w-32">
            {categories.map((category) => (
              <div
                key={category}
                onClick={() => {
                  setSelectedCategory(category);
                  setShowCategories(false);
                }}
                className={`w-full h-12 rounded-full flex items-center justify-center cursor-pointer text-white ${
                  category === selectedCategory
                    ? "bg-lightbrown"
                    : "bg-gray-300"
                }`}
              >
                {category}
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-3 mx-auto justify-items-center align-items-center w-2/3 mt-10">
        {filteredProjects.map((project) => (
          <div key={project.id}>
            <img
              src={project.image}
              alt={project.name}
              className="w-full rounded-[20px]"
            />
            <div className="p-1 font-dm flex pt-3 flex-row justify-between">
              <h3 className="md:text-xl sm:text-base mb-2 md:mt-3 sm:mt-0 text-darkgrey">
                {project.name}
              </h3>
              <Link
                to={`/projects/${project.id}`}
                className="bg-lightpurple rounded-full md:h-12 md:w-12 sm:h-6 sm:w-6 flex items-center justify-center"
              >
                <FaAngleRight />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectPage;
