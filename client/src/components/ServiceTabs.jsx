import React from "react";
import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";

const ServiceTabs = () => {
  const serviceList = [
    {
      id: 1,
      name: "Project Plan",
      desription:
        "A well-crafted project plan helps to ensure that the project is completed on time, within budget and to the satisfaction of all stakeholders",
      route: "projects/kitchen",
    },
    {
      id: 2,
      name: "Interior Work",
      desription:
        "We work with clients to understand their unique needs and preferences, and we use our expertise to create beautiful and functional living spaces that reflect their personal style.",
      route: "projects/bedroom",
    },
    {
      id: 3,
      name: "Retail Design",
      desription:
        "The ultimate goal is to design a space that is visually appealing and functional, while effectively showcasing the products and services being offered with the careful selection of colors, lighting, materials, and layout ",
      route: "projects/living",
    },
    {
      id: 4,
      name: "2d/3d Art Work",
      desription:
        "At our company, we understand the importance of visualizing design concepts before execution. We offer 2D and 3D art work services to help our clients bring their ideas to life and make informed decisions about their projects",
      route: "projects/study",
    },
    {
      id: 5,
      name: "Realization",
      desription:
        "Our team of experienced professionals has a keen eye for detail and works tirelessly to ensure that every element of the design plan is implemented perfectly.",
      route: "projects/study",
    },
    {
      id: 5,
      name: "Good Delivery",
      desription:
        "By prioritizing good delivery, interior designers can ensure that their clients are satisfied with the end result and that the space meets all of their functional and aesthetic needs.",
      route: "project",
    },
  ];

  return (
    <div className="grid grid-cols-3 gap-8 ">
      {serviceList.map((service, index) => (
        <div
          key={index}
          className="bg-lightpurple rounded-lg shadow-lg p-8 flex flex-col justify-between"
        >
          <div>
            <h3 className="font-bold mb-2 font-dm text-darkgrey flex items-center justify-center self-center">
              {service.name}
            </h3>
            <p className="mb-4 text-gray-800 font-jost flex items-center justify-center self-center">
              "{service.desription}"
            </p>
          </div>
          <Link
            to={service.route}
            className="flex items-center justify-center w-3/5 font-jost bg-darkgrey text-white font-medium rounded-full px-6 py-3 shadow-lg  hover:text-darkgrey hover:bg-white self-center"
          >
            Read More <FaAngleRight className="ml-2" />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ServiceTabs;
