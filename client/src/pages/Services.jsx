import React from "react";
import kitchen2 from "../assets/kitchen2.png";
import ServiceTabs from "../components/ServiceTabs";
import HowWeWork from "../components/HowWeWork";
import JoinUs from "../components/JoinUs";

const Services = () => {
  return (
    <div className="mt-20">
      <header className="relative">
        <img src={kitchen2} alt="kitchen2" className="w-full" />

        <div class="flex items-center flex-col justify-center rounded-t-lg absolute w-1/6 h-[80px] inset-x-1/2 -ml-20 bottom-0 px-4 py-8 bg-white text-darkgrey">
          <h1 class="text-xl font-bold mb-4 font-dm text-center ">
            Our Services
          </h1>
        </div>
      </header>
      <section className="py-20 bg-white ">
        <div className="container mx-auto">
          <ServiceTabs />
        </div>
      </section>
      <section className="py-20 bg-white">
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
