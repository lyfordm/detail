import React,{useEffect} from "react";
import kitchen2 from "../assets/kitchen2.png";
import ServiceTabs from "../components/ServiceTabs";
import HowWeWork from "../components/HowWeWork";
import JoinUs from "../components/JoinUs";

const Services = () => {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  return (
    <div className="mt-20">
      <div className="relative">
        <img src={kitchen2} alt="kitchen2" className="w-full" />

        <div class="flex items-center flex-col justify-center rounded-t-lg absolute  md:w-1/6 sm:w-3/6 md:h-[80px] sm:h-[20px] inset-x-1/2 -ml-20 bottom-0 md:px-4 sm:px-2 md:py-8 sm:py-4 bg-white text-darkgrey">
          <h1 class="md:text-2xl sm:text-base font-bold md:mb-4 sm:mb-0 font-dm text-center ">
            Our Services
          </h1>
        </div>
      </div>
      <section className="py-20 bg-white ">
        <div className="container mx-auto">
          <ServiceTabs />
        </div>
      </section>
      <section className="md:py-20 sm:py-5 bg-white">
        <div className="mx-auto flex justify-center">
          <HowWeWork />
        </div>
      </section>
      <section className="mb-20">
        <JoinUs />
      </section>
    </div>
  );
};

export default Services;
