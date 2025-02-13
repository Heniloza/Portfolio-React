import React, { useState } from "react";
import { FaLinkedin, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";
import { Link } from "react-scroll";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      id="Home"
      className="mb-20 md:h-[100px] flex items-center md:justify-between justify-evenly  w-full"
    >
      <div className="flex md:flex-shrink-0 items-center">
         <img
          src="/logo.png"
          alt="logo"
          className="h-[100px] md:h-[150px]  object-cover" 
        />
        {/* <h1 className="font-bold text-4xl bg-gradient-to-r from-yellow-500 to-pink-500 bg-clip-text text-transparent">Developer</h1> */}
      </div>
      <div>
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-white text-2xl transition-all duration-300 ease-in-out hover:text-pink-500"
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        <div
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex flex-col md:flex-row md:items-center md:gap-24 gap-4 font-semibold md:static absolute top-[100px] left-0 w-full md:w-auto bg-neutral-900 md:bg-transparent text-center md:text-left z-10 transition-all duration-300 ease-in-out`}
        >
          <div className="hover:text-pink-500 text-sm transition-colors duration-300 ease-in-out cursor-pointer">
            <Link
              to="Home"
              smooth={true}
              duration={500}
              offset={-100}
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
          </div>
          <div className="hover:text-yellow-500 text-sm transition-colors duration-300 ease-in-out cursor-pointer">
            <Link
              to="about"
              smooth={true}
              duration={500}
              offset={-100}
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
          </div>
          <div className="hover:text-pink-500 text-sm transition-colors duration-300 ease-in-out cursor-pointer">
            <Link
              to="skills"
              smooth={true}
              duration={500}
              offset={-100}
              onClick={() => setIsOpen(false)}
            >
              Skills
            </Link>
          </div>
          <div className="hover:text-yellow-500 text-sm transition-colors duration-300 ease-in-out cursor-pointer">
            <Link
              to="projects"
              smooth={true}
              duration={500}
              offset={-100}
              onClick={() => setIsOpen(false)}
            >
              Projects
            </Link>
          </div>
          <div className="hover:text-pink-500 text-sm transition-colors duration-300 ease-in-out cursor-pointer">
            <Link
              to="contact"
              smooth={true}
              duration={500}
              offset={-100}
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
      <div className="m-8 flex items-center justify-center md:gap-6 gap-2 text-sm sm:text-md md:text-2xl text-white">
        <a
          href="https://www.linkedin.com/in/henil-shrimali-a770a92b9/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="hover:text-blue-400 transition duration-200" />
        </a>
        <a
          href="https://www.github.com/Heniloza"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="hover:text-orange-400 transition duration-200" />
        </a>
        <a
          href="https://x.com/Henil_oza"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter className="hover:text-blue-600 transition duration-200" />
        </a>
        <a
          href="https://www.instagram.com/shrimali_henil_11"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className="hover:bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-full transition duration-200" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
