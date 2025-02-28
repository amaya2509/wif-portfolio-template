// src/components/Header.tsx
import React from 'react';
import {siteConfig} from '../config.ts';
import {motion} from 'framer-motion';
//import { TextGenerateEffect } from "./components/text-generate-effect";

interface HeaderProps {
  toggleDarkMode: () => void;  // Function to toggle dark mode
  isDarkMode: boolean;         // Dark mode state
}

const Header: React.FC<HeaderProps> = ({ toggleDarkMode, isDarkMode }) => {
  return (
    <header className={`py-8 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-900'}`}>
      <div className="max-w-4xl mx-auto text-center">
        
        <motion.h1 
            className='text-5xl font-bold'
            initial={{opacity:0, y:20}}
            animate={{opacity: 1, y:0}}
            transition={{duration: 1}}
            >
                {siteConfig.title}
        </motion.h1>

         <motion.p
            className='text-xl mt-2'
            initial={{opacity: 0, y:20}}
            animate={{opacity: 1, y:0}}
            transition={{duration: 1, delay: 0.3}} //delay for smooth effect
            >
                {siteConfig.description}
        </motion.p>
      </div>


      {/* Navbar for section links */}
      <nav className="bg-gray-700 text-white p-4 mt-6 flex justify-between items-center">
        {/* Navbar Links (Responsive) */}
        <ul className="flex space-x-6 sm:space-x-4 md:space-x-8">
          <li>
            <a href="#about" className="hover:text-blue-400">About</a>
          </li>
          <li>
            <a href="#projects" className="hover:text-blue-400">Projects</a>
          </li>
          <li>
            <a href="#skills" className="hover:text-blue-400">Skills</a>
          </li>
          <li>
            <a href="#contact" className="hover:text-blue-400">Contact</a>
          </li>
        </ul>

        {/* Dark Mode Toggle using a switch */}
        <div className="flex items-center space-x-2">
          <label htmlFor="darkModeToggle" className="text-sm hidden sm:block">
            {isDarkMode ? 'Dark Mode' : 'Light Mode'}
          </label>
          <input
            type="checkbox"
            id="darkModeToggle"
            checked={isDarkMode}
            onChange={toggleDarkMode}
            className="toggle-checkbox"
          />
        </div>
      </nav>
    </header>
  );
};

export default Header;
