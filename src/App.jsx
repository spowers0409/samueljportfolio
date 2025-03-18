import React from 'react';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div>
      <Navbar />
      
      {/* Hero Section */}
      <section id="Hero" className="min-h-screen bg-blue-500 flex items-center justify-center text-white">
        <h1 className="text-6xl font-bold">Welcome to My Portfolio</h1>
        <p className="text-xl mt-4">Here you will find information about my projects, tech stacks, and more!</p>
      </section>
      
      {/* About Me Section */}
      <section id="AboutMe" className="min-h-screen bg-gray-200 flex flex-col items-center justify-center p-8">
        <h2 className="text-4xl font-bold">About Me</h2>
        <p className="text-xl mt-4 max-w-3xl text-center">
          Hello! I'm a passionate software developer with a strong focus on front-end development, building
          intuitive and responsive user interfaces. I enjoy learning new technologies and creating impactful
          solutions. Here's a little about my journey...
        </p>
      </section>

      {/* Tech Stacks Section */}
      <section id="TechStacks" className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-8">
        <h2 className="text-4xl font-bold">Tech Stacks</h2>
        <p className="text-xl mt-4">Here are some of the tools and technologies I work with:</p>
        <ul className="list-disc mt-4 text-xl">
          <li>JavaScript (ES6+)</li>
          <li>React, Next.js, Vite</li>
          <li>HTML5, CSS3, TailwindCSS</li>
          <li>Node.js, Express</li>
          <li>PostgreSQL, MongoDB</li>
        </ul>
      </section>

      {/* Projects Section */}
      <section id="Projects" className="min-h-screen bg-white flex flex-col items-center justify-center p-8">
        <h2 className="text-4xl font-bold">Projects</h2>
        <div className="mt-4 max-w-4xl">
          <div className="mb-4">
            <h3 className="text-2xl font-semibold">Project 1: BudgetGuardian</h3>
            <p className="text-lg">A personal finance management tool to help users manage their budgets, track expenses, and set savings goals.</p>
          </div>
          <div className="mb-4">
            <h3 className="text-2xl font-semibold">Project 2: Portfolio Website</h3>
            <p className="text-lg">A portfolio site to showcase my web development work, blogs, and projects using React, Vite, and TailwindCSS.</p>
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section id="Resume" className="min-h-screen bg-gray-200 flex flex-col items-center justify-center p-8">
        <h2 className="text-4xl font-bold">Resume</h2>
        <p className="text-xl mt-4 max-w-3xl text-center">
          I have experience in web development, building both front-end and back-end solutions for businesses. 
          Check out my full resume for more details on my experience and education.
        </p>
        <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Download Resume</button>
      </section>

      {/* Contact Me Section */}
      <section id="ContactMe" className="min-h-screen bg-gray-300 flex flex-col items-center justify-center p-8">
        <h2 className="text-4xl font-bold">Contact Me</h2>
        <p className="text-xl mt-4">Feel free to reach out to me for any opportunities, questions, or collaboration!</p>
        <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Contact Me</button>
      </section>

      {/* Blog Section */}
      <section id="Blog" className="min-h-screen bg-gray-400 flex flex-col items-center justify-center p-8">
        <h2 className="text-4xl font-bold">Blog</h2>
        <p className="text-xl mt-4">Check out my most recent blog post:</p>
        <div className="mt-4">
          <h3 className="text-2xl font-semibold">How to Get Started with React</h3>
          <p className="text-lg mt-2">This post walks you through the basics of React and how to set up your first React project.</p>
          <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Read More</button>
        </div>
      </section>
    </div>
  );
};

export default App;
