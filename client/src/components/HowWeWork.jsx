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
    <div className="flex justify-center flex-col items-center rounded-3xl bg-lightpurple py-10 w-4/6 ">
      <header className="w-1/2 flex flex-col items-center justify-center mb-10 ">
        <h3 className="text-3xl font-dm"> How We Work</h3>
        <p className="text-xl font-jost text-center mb-5">
          We take a collaborative approach to our work. Our team works closely
          with each client to understand their unique vision, needs, and budget.
          From there, we develop a customized design plan that brings their
          vision to life.
        </p>
      </header>

      <section className="flex flex-col gap-10">
        <div className="flex flex-row gap-5 px-10">
          <div className="w-1/2 h-full">
            <img
              src={concept}
              alt="concept"
              className="rounded-bl-[200px] rounded-tr-[100px] "
            />
          </div>
          <div className="flex flex-col w-1/2 justify-between">
            <div className="flex flex-row justify-between">
              <img
                src={iconConcept}
                alt="iconConcept"
                className="w-[92px] h-[92px] mt-5"
              />
              <p className="font-dm text-white text-8xl ">01</p>
            </div>
            <div>
              <h3 className="text-2xl font-dm">Concept & Details</h3>
              <p className="text-xl font-jost text-start mb-5">
                Concept and details are the backbone of our interior design
                process.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-5 px-10">
          <div className="flex flex-col w-1/2 justify-between">
            <div className="flex flex-row justify-between">
              <img
                src={iconIdea}
                alt="iconConcept"
                className="w-[92px] h-[92px] mt-5"
              />
              <p className="font-dm text-white text-8xl ">02</p>
            </div>
            <div>
              <h3 className="text-2xl font-dm">Idea for Work</h3>
              <p className="text-xl font-jost text-start mb-5">
                Our idea is to create spaces that enhance quality of life while
                staying true to the client's vision.
              </p>
            </div>
          </div>
          <div className="w-1/2 h-full">
            <img
              src={idea}
              alt="concept"
              className="rounded-bl-[200px] rounded-tr-[100px] "
            />
          </div>
        </div>
        <div className="flex flex-row gap-5 px-10">
          <div className="w-1/2 h-full">
            <img
              src={design}
              alt="concept"
              className="rounded-bl-[200px] rounded-tr-[100px] "
            />
          </div>
          <div className="flex flex-col w-1/2 justify-between">
            <div className="flex flex-row justify-between">
              <img
                src={iconDesign}
                alt="iconConcept"
                className="w-[92px] h-[92px] mt-5"
              />
              <p className="font-dm text-white text-8xl ">03</p>
            </div>
            <div>
              <h3 className="text-2xl font-dm">Design</h3>
              <p className="text-xl font-jost text-start mb-5">
                Design is about creating aesthetically pleasing and functional
                spaces that enhance the quality of life for those who use them.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-5 px-10">
          <div className="flex flex-col w-1/2 justify-between">
            <div className="flex flex-row justify-between">
              <img
                src={iconPerfect}
                alt="iconConcept"
                className="w-[92px] h-[92px] mt-5"
              />
              <p className="font-dm text-white text-8xl ">04</p>
            </div>
            <div>
              <h3 className="text-2xl font-dm">Perfection</h3>
              <p className="text-xl font-jost text-start mb-5">
                Our idea is to create spaces that enhance quality of life while
                staying true to the client's vision.
              </p>
            </div>
          </div>
          <div className="w-1/2 h-full">
            <img
              src={perfect}
              alt="concept"
              className="rounded-bl-[200px] rounded-tr-[100px] "
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowWeWork;
