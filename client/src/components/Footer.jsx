import React from "react";
import { FaFacebookSquare, FaTwitterSquare, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer class="bg-darkgrey text-white py-6">
      <div class="container mx-auto flex flex-wrap justify-center">
        <div class="w-full md:w-1/4 px-4 mb-8">
          <h3 class=" text-lg font-mont mb-2">Detail</h3>
          <p className="text-base font-jost mb-2 ">
            {" "}
            There are many aspects that make a home great but detail is the key
          </p>
          <div className="flex flex-row gap-5">
            <FaFacebookSquare className="w-[30px] h-[30px]" />
            <FaTwitterSquare className="w-[30px] h-[30px]" />
            <FaInstagram className="w-[30px] h-[30px]" />
          </div>
        </div>
        <div class="w-full md:w-1/4 px-4 mb-8">
          <h3 class="font-dm text-lg mb-4">Pages</h3>
          <div className="flex flex-col font-jost gap-5">
            <Link to="/about">About Us</Link>
            <Link to="/projects">Our Projects</Link>
            <Link to="/about">Our Team</Link>
            <Link to="/contact">Contact Us</Link>
            <Link to="/services">Services</Link>
          </div>
        </div>
        <div class="w-full md:w-1/4 px-4 mb-8">
          <h3 class="font-dm text-lg mb-4">Services</h3>
          <div className="flex flex-col font-jost gap-5">
            <Link to="/services/bedroom">Bedroom</Link>
            <Link to="/services/kitchen">Kitchen</Link>
            <Link to="/services/living">Living Area</Link>
            <Link to="/services/bathroom">Bathroom</Link>
            <Link to="/services/dining">Dining Hall</Link>
          </div>
        </div>
        <div class="w-full md:w-1/4 px-4 mb-4">
          <h3 class="font-dm text-lg mb-4">Contact</h3>
          <div className="flex flex-col font-jost gap-5">
            <p>
              Plot No 0000 Thabo Mbeki rd <br /> Lusaka
            </p>

            <a href="mailto:info@moonlighgkreatives.com">
              info@moonlighgkreatives.com
            </a>
            <a href="tel:+260967803424">+260967803424</a>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center font-jost">
        2023 Copyrights © Detail | designed and developed by Lyford Mwanza
      </div>
    </footer>
  );
};

export default Footer;
