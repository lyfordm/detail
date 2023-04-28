import React from 'react'
import JoinUsSection from '../components/JoinUs';
import ProjectForm from '../components/ProjectForm';
import kitchen2 from "../assets/kitchen2.png";


const Contact = () => {
  return (
    <div className="mt-20">
      <header className="relative">
        <img src={kitchen2} alt="kitchen2" className="w-full" />

        <div class="flex items-center flex-col justify-center rounded-t-lg absolute w-1/6 h-[80px] inset-x-1/2 -ml-20 bottom-0 px-4 py-8 bg-white text-darkgrey">
          <h1 class="text-xl font-bold mb-4 font-dm text-center ">
            Contact Us
          </h1>
        </div>
      </header>
      <section className="w-3/5 mx-auto my-10">
        <h3 className="text-4xl font-dm text-center my-9 ">
          We love meeting new people <br/> and helping them.
        </h3>
        <ProjectForm />
      </section>
      <section className="py-20">
        <JoinUsSection />
      </section>
   
    </div>
  );
}

export default Contact