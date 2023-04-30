import React,{useEffect} from 'react'
import living2 from "../assets/living2.png";
import fire from "../assets/fire.jpg";
import bed from "../assets/bed.jpg";
import {FaAngleRight } from "react-icons/fa"
import { Link } from 'react-router-dom';
import ProjectForm from '../components/ProjectForm';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="mt-20">
      <div className="relative">
        <img src={living2} alt="living2" className="w-full" />

        <div class="flex items-center flex-col justify-center rounded-t-lg absolute  md:w-1/6 sm:w-3/6 md:h-[80px] sm:h-[20px] inset-x-1/2 -ml-20 bottom-0 md:px-4 sm:px-2 md:py-8 sm:py-4 bg-white text-darkgrey">
          <h1 class="md:text-2xl sm:text-base font-bold md:mb-4 sm:mb-0 font-dm text-center ">
            About Us
          </h1>
        </div>
      </div>
      <section className=" flex flex-col gap-16 w-5/6 mx-auto md:my-32 sm:my-5 text-darkgrey">
        <div className="flex md:flex-row sm:flex-col ">
          <div className="md:w-1/2 sm:w-full flex flex-col items-center justify-center">
            <h3 className="md:text-3xl sm:text-xl font-dm">What We Do</h3>
            <p className="md:text-xl sm:text-base font-jost text-center mb-5">
              As an interior design company, we specialize in <br />
              creating functional, aesthetically pleasing spaces
              <br /> that are tailored to meet the unique <br />
              needs of our clients. From residential to commercial projects.
            </p>
            <Link
              to="/services"
              className="flex items-center font-jost text-white bg-darkgrey md:rounded-full sm:rounded-lg  px-6  py-3 shadow-lg hover:text-darkgrey hover:bg-white"
            >
              Our Concept <FaAngleRight className="ml-2" />
            </Link>
          </div>
          <img
            src={fire}
            alt="fire"
            className="h-2/6 md:w-3/6 sm:w-full md:rounded-3xl sm:rounded sm:mt-3 md:mt-0"
          />
        </div>
        <div className="flex md:flex-row sm:flex-col-reverse ">
          <img
            src={bed}
            alt="bed"
            className="h-2/6 md:w-3/6 sm:w-full md:rounded-3xl sm:rounded sm:mt-3 md:mt-0"
          />
          <div className="md:w-1/2 sm:w-full flex flex-col items-center justify-center">
            <h3 className="md:text-3xl sm:text-xl font-dm ">The End Result</h3>
            <p className="md:text-xl sm:text-base font-jost text-center mb-5">
              We work closely with our clients to understand their needs,
              preferences, and lifestyle, and use this information to design
              customized spaces that are both functional and aesthetically
              pleasing. We strive to create interiors that inspire, uplift, and
              delight.
            </p>
            <Link
              to="/projects"
              className="flex items-center font-jost text-white bg-darkgrey md:rounded-full sm:rounded-lg px-6 py-3 shadow-lg hover:text-darkgrey hover:bg-white"
            >
              Our Portfolio <FaAngleRight className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
      <section className="md:w-3/5 sm:w-4/5 mx-auto md:my-10 sm:my-5">
        <h3 className="md:text-4xl sm:text-xl font-dm text-center md:my-9 sm:my-5 ">
          Creative project? Let's have <br />a productive talk.
        </h3>
        <ProjectForm />
      </section>
    </div>
  );
}

export default About