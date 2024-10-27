import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";

import { FaAlignRight, FaTimes, FaUserGraduate, FaProjectDiagram, FaClipboardList, FaMobileAlt, FaGithub, FaLinkedinIn } from "react-icons/fa";

import logo from '/logo.svg';

const NavbarLayout = ({ aboutRef, projectsRef, skillsRef, contactsRef }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState(null);

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    useEffect(() => {
        const options = { threshold: 0.6 };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(`#${entry.target.id}`);
                }
            });
        }, options);

        if (aboutRef.current) observer.observe(aboutRef.current);
        if (projectsRef.current) observer.observe(projectsRef.current);
        if (skillsRef.current) observer.observe(skillsRef.current);
        if (contactsRef.current) observer.observe(contactsRef.current);

        return () => observer.disconnect();
    }, [aboutRef, projectsRef, skillsRef, contactsRef]);

    const linkClass = (hash) => activeSection === hash ? "text-blue-400 cursor-pointer" : "text-black hover:text-blue-400 cursor-pointer";

    return (
        <>
            <nav className="fixed top-0 w-full bg-white text-black px-4 shadow-md z-50">
                <div className="flex justify-between h-16 items-center">
                    <div className="text-2xl font-bold">
                        <ScrollLink to="about" smooth offset={-70}>
                            <img src={logo} alt="logo" className="w-28 cursor-pointer" />
                        </ScrollLink>
                    </div>

                    <div className="sm:hidden">
                        <button onClick={toggleMenu} className="text-black focus:outline-none">
                            {isOpen ? <FaTimes className="h-6 mt-1" /> : <FaAlignRight className="h-6 mt-1" />}
                        </button>
                    </div>

                    <ul className="hidden sm:flex justify-center items-center space-x-8">
                        <li>
                            <ScrollLink to="about" smooth offset={-70} className={linkClass("#about")} onClick={closeMenu}>
                                About Me
                            </ScrollLink>
                        </li>
                        <li>
                            <ScrollLink to="projects" smooth offset={-70} className={linkClass("#projects")} onClick={closeMenu}>
                                Projects
                            </ScrollLink>
                        </li>
                        <li>
                            <ScrollLink to="skills" smooth offset={-70} className={linkClass("#skills")} onClick={closeMenu}>
                                Skills
                            </ScrollLink>
                        </li>
                        <li>
                            <ScrollLink to="contacts" smooth offset={-70} className={linkClass("#contacts")} onClick={closeMenu}>
                                Contacts
                            </ScrollLink>
                        </li>
                    </ul>

                    <ul className="hidden sm:flex justify-center items-center space-x-4">
                        <li>
                            <a href="https://github.com/devdp11" target="_blank" rel="noopener noreferrer" className="text-lg hover:text-blue-400 flex items-center">
                                <FaGithub className="h-5 w-5" />
                            </a>
                        </li>
                        <li>
                            <a href="https://linkedin.com/in/" target="_blank" rel="noopener noreferrer" className="text-lg hover:text-blue-400 flex items-center">
                                <FaLinkedinIn className="h-5 w-5" />
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>

            <div className={`sm:hidden fixed top-16 right-0 h-full bg-white text-black w-64 transform ${isOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 ease-in-out z-50`}>
                <ul className="sm:hidden flex flex-col space-y-2 text-lg">
                    <li>
                        <ScrollLink to="about" smooth offset={-70} className="block p-4 hover:text-blue-400 cursor-pointer" onClick={closeMenu}>
                            <FaUserGraduate className="inline mr-2 mb-1" /> About Me
                        </ScrollLink>
                    </li>
                    <li>
                        <ScrollLink to="projects" smooth offset={-70} className="block p-4 hover:text-blue-400 cursor-pointer" onClick={closeMenu}>
                            <FaProjectDiagram className="inline mr-2 mb-1" /> Projects
                        </ScrollLink>
                    </li>
                    <li>
                        <ScrollLink to="skills" smooth offset={-70} className="block p-4 hover:text-blue-400 cursor-pointer" onClick={closeMenu}>
                            <FaClipboardList className="inline mr-2 mb-1" /> Skills
                        </ScrollLink>
                    </li>
                    <li>
                        <ScrollLink to="contacts" smooth offset={-70} className="block p-4 hover:text-blue-400 cursor-pointer" onClick={closeMenu}>
                            <FaMobileAlt className="inline mr-2 mb-1" /> Contacts
                        </ScrollLink>
                    </li>
                </ul>
            </div>

            {isOpen && <div className="sm:hidden fixed inset-0 bg-black opacity-50 z-40" onClick={closeMenu} />}
        </>
    );
};

export default NavbarLayout;