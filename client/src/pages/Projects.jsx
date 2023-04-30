import React,{useEffect} from 'react'
import kitchen2 from "../assets/kitchen2.png";
import ProjectPage from '../components/ProjectSelection';


const Projects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (
    <div className="mt-20">
      <div className="relative">
        <img src={kitchen2} alt="kitchen2" className="w-full" />

        <div class="flex items-center flex-col justify-center rounded-t-lg absolute  md:w-1/6 sm:w-3/6 md:h-[80px] sm:h-[20px] inset-x-1/2 -ml-20 bottom-0 md:px-4 sm:px-2 md:py-8 sm:py-4 bg-white text-darkgrey">
          <h1 class="md:text-2xl sm:text-base font-bold md:mb-4 sm:mb-0 font-dm text-center ">
            Our Projects
          </h1>
        </div>
      </div>
      <section>
        <ProjectPage />
      </section>
    </div>
  );
}

export default Projects;