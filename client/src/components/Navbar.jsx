import React from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-darkgrey z-40 w-full fixed top-0 py-2 px-3">
      <div className="max-w-7xl  xs:px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute right-0 flex items-center md:hidden">
            {/* Mobile menu button */}
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={toggleMenu}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
          <div className="flex items-center justify-between md:justify-between flex-1">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <img
                className="block  h-8 w-auto"
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                alt="Workflow"
              />
            </div>

            {/* Nav links */}
            <div className="hidden md:block md:ml-10">
              <div className="flex space-x-4 justify-center items-center">
                <Link
                  to="/"
                  className={`text-white px-3 py-2 rounded-md text-sm font-medium ${
                    location.pathname === "/"
                      ? "bg-gray-900"
                      : "hover:bg-gray-700"
                  }`}
                >
                  Home
                </Link>
                <Link
                  to="/services"
                  className={`text-white px-3 py-2 rounded-md text-sm font-medium ${
                    location.pathname === "/services"
                      ? "bg-gray-900"
                      : "hover:bg-gray-700"
                  }`}
                >
                  Services
                </Link>
                <Link
                  to="/projects"
                  className={`text-white px-3 py-2 rounded-md text-sm font-medium ${
                    location.pathname === "/projects"
                      ? "bg-gray-900"
                      : "hover:bg-gray-700"
                  }`}
                >
                  Projects
                </Link>
                <Link
                  to="/about"
                  className={`text-white px-3 py-2 rounded-md text-sm font-medium ${
                    location.pathname === "/about"
                      ? "bg-gray-900"
                      : "hover:bg-gray-700"
                  }`}
                >
                  About
                </Link>
                <Link
                  to="/contact"
                  className={`text-white px-3 py-2 rounded-md text-sm font-medium ${
                    location.pathname === "/contact"
                      ? "bg-gray-900"
                      : "hover:bg-gray-700"
                  }`}
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile menu, show/hide based on menu state */}
      <div className="fixed right-0  w-[240px]" onClick={toggleMenu}>
        <motion.div
          whileInView={{ x: [-240, 0] }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {/* Mobile menu, show/hide based on menu state */}
          <div
            className={`md:hidden h-screen bg-darkgrey  ${
              isOpen ? "block" : "hidden"
            }`}
            id="mobile-menu"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link
                to="/"
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  location.pathname === "/"
                    ? "text-white bg-gray-900"
                    : "text-gray-300 hover:text-white hover:bg-gray-700"
                }`}
                aria-current={location.pathname === "/" ? "page" : undefined}
              >
                Home
              </Link>
              <Link
                to="/services"
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  location.pathname === "/services"
                    ? "text-white bg-gray-900"
                    : "text-gray-300 hover:text-white hover:bg-gray-700"
                }`}
                aria-current={
                  location.pathname === "/services" ? "page" : undefined
                }
              >
                Services
              </Link>
              <Link
                to="/projects"
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  location.pathname === "/projects"
                    ? "text-white bg-gray-900"
                    : "text-gray-300 hover:text-white hover:bg-gray-700"
                }`}
                aria-current={
                  location.pathname === "/projects" ? "page" : undefined
                }
              >
                Projects
              </Link>

              <Link
                to="/about"
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  location.pathname === "/about"
                    ? "text-white bg-gray-900"
                    : "text-gray-300 hover:text-white hover:bg-gray-700"
                }`}
                aria-current={
                  location.pathname === "/about" ? "page" : undefined
                }
              >
                About
              </Link>
              <Link
                to="/contact"
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  location.pathname === "/contact"
                    ? "text-white bg-gray-900"
                    : "text-gray-300 hover:text-white hover:bg-gray-700"
                }`}
                aria-current={
                  location.pathname === "/contact" ? "page" : undefined
                }
              >
                Contact
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;
