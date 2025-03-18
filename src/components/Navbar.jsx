import React, { useState } from 'react';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("Hero");

  const handleScroll = (section) => {
    setActiveSection(section);
    document.getElementById(section).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-semibold text-blue-600">
          My Portfolio
        </div>
        <ul className="flex space-x-8">
          <li>
            <button
              className={`text-lg font-medium ${activeSection === "Hero" ? 'text-blue-600' : 'text-gray-600'} hover:text-blue-600 transition duration-300`}
              onClick={() => handleScroll("Hero")}
            >
              Hero
            </button>
          </li>
          <li>
            <button
              className={`text-lg font-medium ${activeSection === "AboutMe" ? 'text-blue-600' : 'text-gray-600'} hover:text-blue-600 transition duration-300`}
              onClick={() => handleScroll("AboutMe")}
            >
              About Me
            </button>
          </li>
          <li>
            <button
              className={`text-lg font-medium ${activeSection === "TechStacks" ? 'text-blue-600' : 'text-gray-600'} hover:text-blue-600 transition duration-300`}
              onClick={() => handleScroll("TechStacks")}
            >
              Tech Stacks
            </button>
          </li>
          <li>
            <button
              className={`text-lg font-medium ${activeSection === "Projects" ? 'text-blue-600' : 'text-gray-600'} hover:text-blue-600 transition duration-300`}
              onClick={() => handleScroll("Projects")}
            >
              Projects
            </button>
          </li>
          <li>
            <button
              className={`text-lg font-medium ${activeSection === "Resume" ? 'text-blue-600' : 'text-gray-600'} hover:text-blue-600 transition duration-300`}
              onClick={() => handleScroll("Resume")}
            >
              Resume
            </button>
          </li>
          <li>
            <button
              className={`text-lg font-medium ${activeSection === "ContactMe" ? 'text-blue-600' : 'text-gray-600'} hover:text-blue-600 transition duration-300`}
              onClick={() => handleScroll("ContactMe")}
            >
              Contact Me
            </button>
          </li>
          <li>
            <button
              className={`text-lg font-medium ${activeSection === "Blog" ? 'text-blue-600' : 'text-gray-600'} hover:text-blue-600 transition duration-300`}
              onClick={() => handleScroll("Blog")}
            >
              Blog
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
