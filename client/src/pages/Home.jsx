import React from "react";
import header from "../assets/header1.png";
import image1 from "../assets/image1.png";
import { FaAngleRight, FaPhoneAlt } from "react-icons/fa";
import Testimonials from "../components/Testimonials";
import ProjectsTab from "../components/ProjectsTab";
import ProjectsStatistics from "../components/Statistics";
import JoinUsSection from "../components/JoinUs";

const Home = () => {
  return (
    <div className="mt-20">
      <section className="relative">
        <img
          src={header}
          alt="header1"
          className="w-3/5 h-2/5 mx-auto py-10  rounded-tl-none rounded-br-none rounded-tr-[120px] rounded-bl-[120px]"
        />
        <div class="absolute inset-0 flex w-4/5 top-[200px] left-[50px] h-3/5 justify-center ">
          <div class="text-start ">
            <h1 class="text-4xl font-bold font-dm mb-2 text-darkgrey">
              Let Your Home <br /> Be Detail
            </h1>
            <p class="text-xl font-jost text-lightblue mb-4">
              There are many aspects that make a home great <br /> but detail is
              the key
            </p>
            <button className="flex items-center font-jost bg-darkgrey text-white font-medium rounded-full px-6 py-3 shadow-lg hover:shadow-xl">
              Get Started <FaAngleRight className="ml-2" />
            </button>
          </div>
        </div>
      </section>
      <section className="py-10 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
            <div className="bg-white rounded-lg shadow-lg p-6 justify-center">
              <h3 className="text-lg font-medium mb-2 font-dm">Project Plan</h3>
              <p className="text-gray-600 mb-4 font-jost">
                A well-crafted project plan helps to ensure that the project is
                completed on time, within budget, and to the satisfaction of all
                stakeholders
              </p>
              <button className="flex items-center font-jost bg-darkgrey text-white font-medium rounded-full px-6 py-3 shadow-lg  hover:text-darkgrey hover:bg-white">
                Read More <FaAngleRight className="ml-2" />
              </button>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 justify-center">
              <h3 className="text-lg font-medium mb-2">Interior Work</h3>
              <p className="text-gray-600 mb-4">
                We work with clients to understand their unique needs and
                preferences, and we use our expertise to create beautiful and
                functional living spaces that reflect their personal style.
              </p>
              <button className="flex items-center font-jost bg-darkgrey text-white font-medium rounded-full px-6 py-3 shadow-lg  hover:text-darkgrey hover:bg-white">
                Read More <FaAngleRight className="ml-2" />
              </button>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 justify-center">
              <h3 className="text-lg font-medium mb-2">Realization</h3>
              <p className="text-gray-600 mb-4">
                Our team of experienced professionals has a keen eye for detail
                and works tirelessly to ensure that every element of the design
                plan is implemented perfectly.
              </p>
              <button className="flex items-center font-jost bg-darkgrey text-white font-medium rounded-full px-6 py-3 shadow-lg hover:text-darkgrey hover:bg-white">
                Read More <FaAngleRight className="ml-2" />
              </button>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="flex flex-wrap justify-center items-center py-20">
          <div className="max-w-md mx-4 mb-8">
            <h2 className="text-3xl font-bold font-dm mb-2 text-darkgrey">
              We Believe The Art <br /> Of Stylish Livings <br />
              In The Detail
            </h2>
            <p className="mb-4 font-jost text-lightblue">
              We'd love to hear from you. Call us anytime to discuss your
              project or schedule a consultation.
            </p>
            <div className="flex items-center mb-4">
              <div class="flex items-center">
                <div class="bg-gray-200 rounded-full h-12 w-12 flex items-center justify-center">
                  <a href="tel:+260967803424">
                    <FaPhoneAlt />
                  </a>
                </div>
                <div class="ml-4">
                  <h2 class="text-lg font-medium font-dm text-gray-900">
                    Contact Us
                  </h2>
                  <p class="mt-1 text-gray-600 font-jost">
                    Call us at{" "}
                    <a href="tel:+260967803424" class="text-darkgrey">
                      +260 967 803424
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <button className="flex items-center font-jost bg-darkgrey text-whfontite -medium rounded-full px-6 py-3 shadow-lg hover:text-darkgrey hover:bg-white">
              Get Free Quote <FaAngleRight className="ml-2" />
            </button>
          </div>
          <div className="max-w-md mx-4 mb-8">
            <img
              src={image1}
              alt="image1"
              className=" shadow-md rounded-tr-[200px] rounded-bl-[100px]"
            />
          </div>
        </div>
      </section>
      <section className="bg-white py-20">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center font-dm text-darkgrey">
            What the People Thinks <br /> About Us
          </h2>
          <Testimonials />
        </div>
      </section>
      <section className="flex justify-center flex-col px-36">
        <div>
          <h2 className="text-4xl font-bold mb-2 text-center font-dm text-darkgrey">
            Follow Our Projects
          </h2>
          <p className="font font-jost text-center text-xl mb-4 text-darkgrey">
            Our project section features a variety of stunning interior design
            projects that are sure to inspire you. <br />
            From modern kitchens to cozy bedrooms, <br /> our team of talented
            designers has created spaces that are both functional and stylish.
          </p>
        </div>
        <ProjectsTab />
      </section>
      <section>
        <ProjectsStatistics />
      </section>
      <section className="my-20 ">
        <JoinUsSection />
      </section>
    </div>
  );
};

export default Home;
