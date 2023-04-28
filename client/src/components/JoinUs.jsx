import React from "react";
import { FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const JoinUsSection = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[300px] bg-darkgrey md:w-4/6 sm:w-5/6 rounded-3xl mx-auto">
      <h2 className="md:text-3xl sm:text-xl mb-6 font-dm text-white">Wanna join Detail?</h2>
      <div className="flex flex-col gap-4 mb-6">
        <p className="md:text-lg sm:text-base text-white mb-2 font-jost">Contact for an interview</p>
        <Link
          to="/contact"
          className="flex items-center md:text-base sm:text-sm justify-center font-jost bg-lightbrown text-white font-medium rounded-full px-6 py-3 shadow-lg hover:shadow-xl"
        >
          Contact Us <FaAngleRight className="ml-2" />
        </Link>
      </div>
    </div>
  );
};

export default JoinUsSection;
