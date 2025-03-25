import { projects } from "../data/projects";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import {motion} from 'framer-motion';

const Projects = () => {
  return (
    <section id="projects" className="py-16 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-6 lg:px-16">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white text-center">
          Projects
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 text-center mt-2">
          Here are some of my recent works.
        </p>

        {/* Project Cards Grid */}
        <motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
  className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
>

          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-5 transform hover:scale-105 transition-transform duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-md"
              />
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mt-4">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap mt-3 gap-2">
                {project.techStack.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-blue-500 text-white px-2 py-1 rounded text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Buttons for Live Demo & GitHub */}
              <div className="flex justify-between items-center mt-4">
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline flex items-center"
                >
                  Live Demo <FaExternalLinkAlt className="ml-1" />
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 dark:text-gray-300 hover:underline flex items-center"
                >
                  Code <FaGithub className="ml-1" />
                </a>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
