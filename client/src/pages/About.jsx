import React from 'react'
import living2 from "../assets/living2.png";
import fire from "../assets/fire.jpg";
import bed from "../assets/bed.jpg";
import {FaAngleRight } from "react-icons/fa"
import { Link } from 'react-router-dom';
import ProjectForm from '../components/ProjectForm';

const About = () => {
  return (
    <div className="mt-20">
      <header className="relative">
        <img src={living2} alt="living2" className="w-full" />

        <div class="flex items-center flex-col justify-center rounded-t-lg absolute w-1/6 h-[80px] inset-x-1/2 -ml-20 bottom-0 px-4 py-8 bg-white text-darkgrey">
          <h1 class="text-xl font-bold mb-4 font-dm text-center ">About Us</h1>
        </div>
      </header>
      <section className=" flex flex-col gap-16 w-5/6 mx-auto my-32 text-darkgrey">
        <div className="flex flex-row">
          <div className="w-1/2 flex flex-col items-center justify-center">
            <h3 className="text-3xl font-dm">What We Do</h3>
            <p className="text-xl font-jost text-center mb-5">
              As an interior design company, we specialize in <br />
              creating functional, aesthetically pleasing spaces
              <br /> that are tailored to meet the unique <br />
              needs of our clients. From residential to commercial projects.
            </p>
            <Link
              to="/services"
              className="flex items-center font-jost text-white bg-darkgrey text-whfontite -medium rounded-full px-6 py-3 shadow-lg hover:text-darkgrey hover:bg-white"
            >
              Our Concept <FaAngleRight className="ml-2" />
            </Link>
          </div>
          <img src={fire} alt="fire" className="h-2/6 w-3/6 rounded-3xl" />
        </div>
        <div className="flex flex-row">
          <img src={bed} alt="bed" className="h-2/6 w-4/6 rounded-3xl" />
          <div className="w-1/2 flex flex-col items-center justify-center">
            <h3 className="text-3xl font-dm ">The End Result</h3>
            <p className="text-xl font-jost text-center mb-5">
              We work closely with our clients to understand their needs,
              preferences, and lifestyle, and use this information to design
              customized spaces that are both functional and aesthetically
              pleasing. We strive to create interiors that inspire, uplift, and
              delight.
            </p>
            <Link
              to="/projects"
              className="flex items-center font-jost text-white bg-darkgrey text-whfontite -medium rounded-full px-6 py-3 shadow-lg hover:text-darkgrey hover:bg-white"
            >
              Our Portfolio <FaAngleRight className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
      <section className="w-3/5 mx-auto my-10">
        <h3 className="text-4xl font-dm text-center my-9 ">
          Creative project? Let's have <br />a productive talk.
        </h3>
        <ProjectForm />
      </section>
    </div>
  );
}

export default About