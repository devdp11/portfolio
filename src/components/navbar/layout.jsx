import React, { useState } from "react";

import { FaTimes, FaRegUser, FaProjectDiagram, FaUserTie, FaMobileAlt, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { CiMenuFries } from 'react-icons/ci';

import logo from '/logo.svg';

const NavbarLayout = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
        <nav className="fixed top-0 w-full bg-white text-black p-4 shadow-md z-50">
            <div className="flex justify-between items-center">
                <div className="text-2xl font-bold">
                    <a href="#about" className="hover:text-blue-400">
                        <img src={logo} alt="logo" className="w-8" />
                    </a>
                </div>

                <div className="sm:hidden">
                    <button onClick={toggleMenu} className="text-black focus:outline-none" >
                    {isOpen ? (
                        <FaTimes className="h-6" />
                    ) : (
                        <CiMenuFries className="h-6" />
                    )}
                    </button>
                </div>

                <ul className="hidden sm:flex justify-center items-center space-x-4">
                    <li>
                        <a href="#about" className="text-lg hover:text-blue-400">
                            About Me
                        </a>
                    </li>
                    <li>
                        <a href="#projects" className="text-lg hover:text-blue-400">
                            Projects
                        </a>
                    </li>
                    <li>
                        <a href="#experience" className="text-lg hover:text-blue-400">
                            Experience
                        </a>
                    </li>
                    <li>
                        <a href="#contacts" className="text-lg hover:text-blue-400">
                            Contacts
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/devdp11" target="_blank" rel="noopener noreferrer" className="text-lg hover:text-blue-400 flex items-center" >
                            <FaGithub className="h-5 w-5" /> 
                        </a>
                    </li>

                    <li>
                        <a href="https://linkedin.com/in/" target="_blank" rel="noopener noreferrer" className="text-lg hover:text-blue-400 flex items-center" >
                            <FaLinkedinIn className="h-5 w-5" />
                        </a>
                    </li>
                </ul>
            </div>
        </nav>

        <div className={`sm:hidden fixed top-16 right-0 h-full bg-white text-black w-64 transform ${isOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 ease-in-out z-50`} >
            <ul className="sm:hidden flex flex-col space-y-2 text-lg">
                <li>
                    <a href="#about" className="block p-4 hover:text-blue-400" onClick={closeMenu} >
                        <FaRegUser className="inline mr-2 mb-1" /> About Me
                    </a>
                </li>
                <li>
                    <a href="#projects" className="block p-4 hover:text-blue-400" onClick={closeMenu} >
                        <FaProjectDiagram className="inline mr-2 mb-1" /> Projects
                    </a>
                </li>
                <li>
                    <a href="#experience" className="block p-4 hover:text-blue-400" onClick={closeMenu} >
                        <FaUserTie className="inline mr-2 mb-1" /> Experience
                    </a>
                </li>
                <li>
                    <a href="#contacts" className="block p-4 hover:text-blue-400" onClick={closeMenu} >
                        <FaMobileAlt className="inline mr-2 mb-1" /> Contacts
                    </a>
                </li>
            </ul>
        </div>

        {isOpen && (
            <div className="sm:hidden fixed inset-0 bg-black opacity-50 z-40" onClick={closeMenu} />
        )}
    </>
  );
};

export default NavbarLayout;