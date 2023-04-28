import React from "react";
import concept from "../assets/concept.png";
import iconConcept from "../assets/Icon-concept.png";
import idea from "../assets/idea.png"
import iconIdea from '../assets/Icon-idea.png'
import design from '../assets/design.png'
import iconDesign from '../assets/Icon-design.png'
import perfect from '../assets/perfect.png'
import iconPerfect from '../assets/Icon-perfection.png'


const HowWeWork = () => {
  return (
    <div className="flex justify-center flex-col items-center md:rounded-3xl sm:rounded-lg bg-lightpurple py-10 md:w-4/6 sm:w-full sm:mx-4 md:mx-0 ">
      <div className="md:w-1/2 sm:w-full sm:px-5 md:px-0 flex flex-col items-center justify-center mb-10 ">
        <h3 className="md:text-3xl sm:text-xl font-dm"> How We Work</h3>
        <p className="md:text-xl sm:text-base font-jost text-center mb-5">
          We take a collaborative approach to our work. Our team works closely
          with each client to understand their unique vision, needs, and budget.
          From there, we develop a customized design plan that brings their
          vision to life.
        </p>
      </div>

      <section className="flex flex-col gap-10">
        <div className="flex md:flex-row sm:flex-col-reverse gap-5 px-10">
          <div className="md:w-1/2 sm:w-full h-full">
            <img
              src={concept}
              alt="concept"
              className="md:rounded-bl-[200px] md:rounded-tr-[100px] sm:rounded-xl "
            />
          </div>
          <div className="flex flex-col md:w-1/2 sm:w-full justify-between">
            <div className="flex flex-row justify-between">
              <img
                src={iconConcept}
                alt="iconConcept"
                className="md:w-[92px] md:h-[92px] sm:w-[40px] sm:h-[40px] md:mt-5 sm:mt-0"
              />
              <p className="font-dm text-white md:text-8xl sm:text-5xl ">01</p>
            </div>
            <div>
              <h3 className="md:text-2xl sm:text-xl font-dm">
                Concept & Details
              </h3>
              <p className="md:text-xl sm:text-base font-jost text-start mb-5">
                Concept and details are the backbone of our interior design
                process.
              </p>
            </div>
          </div>
        </div>
        <div className="flex md:flex-row sm:flex-col gap-5 px-10">
          <div className="flex flex-col md:w-1/2 sm:w-full justify-between">
            <div className="flex flex-row justify-between">
              <img
                src={iconIdea}
                alt="iconConcept"
                className="md:w-[92px] md:h-[92px] sm:w-[40px] sm:h-[40px] md:mt-5 sm:mt-0"
              />
              <p className="font-dm text-white md:text-8xl sm:text-5xl ">02</p>
            </div>
            <div>
              <h3 className="md:text-2xl sm:text-xl text-start font-dm">
                Idea for Work
              </h3>
              <p className="md:text-xl sm:text-base sm:text-start font-jost md:text-center mb-5">
                Our idea is to create spaces that enhance quality of life while
                staying true to the client's vision.
              </p>
            </div>
          </div>
          <div className="md:w-1/2 sm:w-full h-full">
            <img
              src={idea}
              alt="concept"
              className="md:rounded-bl-[200px] md:rounded-tr-[100px] sm:rounded-xl"
            />
          </div>
        </div>
        <div className="flex md:flex-row sm:flex-col-reverse gap-5 px-10">
          <div className="md:w-1/2 sm:w-full h-full">
            <img
              src={design}
              alt="concept"
              className="md:rounded-bl-[200px] md:rounded-tr-[100px] sm:rounded-xl "
            />
          </div>
          <div className="flex flex-col md:w-1/2 sm:w-full justify-between">
            <div className="flex flex-row justify-between">
              <img
                src={iconDesign}
                alt="iconConcept"
                className="md:w-[92px] md:h-[92px] sm:w-[40px] sm:h-[40px] md:mt-5 sm:mt-0"
              />
              <p className="font-dm text-white md:text-8xl sm:text-5xl ">03</p>
            </div>
            <div>
              <h3 className="md:text-2xl sm:text-xl font-dm">Design</h3>
              <p className="md:text-xl sm:text-base font-jost sm:text-start md:text-center  mb-5">
                Design is about creating aesthetically pleasing and functional
                spaces that enhance the quality of life for those who use them.
              </p>
            </div>
          </div>
        </div>
        <div className="flex md:flex-row sm:flex-col gap-5 px-10">
          <div className="flex flex-col md:w-1/2 sm:w-full justify-between">
            <div className="flex flex-row justify-between">
              <img
                src={iconPerfect}
                alt="iconConcept"
                className="md:w-[92px] md:h-[92px] sm:w-[40px] sm:h-[40px] md:mt-5 sm:mt-0"
              />
              <p className="font-dm text-white md:text-8xl sm:text-5xl ">04</p>
            </div>
            <div>
              <h3 className="md:text-2xl sm:text-xl font-dm">Perfection</h3>
              <p className="md:text-xl sm:text-base font-jost sm:text-start md:text-center mb-5">
                Our idea is to create spaces that enhance quality of life while
                staying true to the client's vision.
              </p>
            </div>
          </div>
          <div className="md:w-1/2 sm:w-full h-full">
            <img
              src={perfect}
              alt="concept"
              className="md:rounded-bl-[200px] md:rounded-tr-[100px] sm:rounded-xl"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowWeWork;
