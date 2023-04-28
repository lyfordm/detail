import React, {useEffect} from "react";
import JoinUsSection from "../components/JoinUs";
import ProjectForm from "../components/ProjectForm";
import kitchen2 from "../assets/kitchen2.png";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="mt-20">
      <header className="relative">
        <img src={kitchen2} alt="kitchen2" className="w-full" />

        <div class="flex items-center flex-col justify-center rounded-t-lg absolute md:w-1/6 sm:w-3/6 md:h-[80px] sm:h-[20px] inset-x-1/2 -ml-20 bottom-0 md:px-4 sm:px-2 md:py-8 sm:py-4 bg-white text-darkgrey">
          <h1 class="md:text-xl sm:text-base font-bold md:mb-4 sm:mb-0 font-dm text-center ">
            Contact Us
          </h1>
        </div>
      </header>
      <section
        className="w-3/5 mx-auto md:my-10 sm:my-2"
      >
        <h3 className="md:text-4xl sm:text-xl font-dm text-center md:my-9 sm:my-5 ">
          We love meeting new people <br /> and helping them.
        </h3>
        <ProjectForm />
      </section>
      <section className="md:py-20 sm:py-0 sm:mb-4">
        <JoinUsSection />
      </section>
    </div>
  );
};

export default Contact;
