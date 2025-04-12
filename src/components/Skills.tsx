import { skills } from "../data/skills";
import { motion } from "framer-motion";
import SkillsBackground from "./SkillsBackground";

const Skills = () => {
  return (
    <section id="skills" className="relative py-16 bg-white dark:bg-gray-900 overflow-hidden">
      {/* 3D animated background */}
      <div className="absolute inset-0 z-0">
        <SkillsBackground />
      </div>

      {/* Content on top of background */}
      <div className="relative z-10 container mx-auto px-6 lg:px-16 text-center">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white">Skills</h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mt-2">
          Technologies I work with:
        </p>

        {/* Skills Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5 }} 
          className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
        >
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center justify-center p-4 rounded-lg shadow-md bg-gray-100 dark:bg-gray-800 hover:scale-105 transition-transform duration-300"
            >
              <img src={skill.icon} alt={skill.name} className="w-16 h-16" />
              <p className="mt-2 text-lg font-medium text-gray-800 dark:text-white">{skill.name}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
