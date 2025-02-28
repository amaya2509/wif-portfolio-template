import React from 'react';

interface HeaderProps{
    toggleDarkMode: () => void; // Function that toggles dark mode
    isDarkMode: boolean;
}

const Header: React.FC<HeaderProps> = ({toggleDarkMode, isDarkMode}) => {
    return(
        <header className={`py-8 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-900'}`}>
            <div className='max-w-4xl mx-auto text-center'>
                <h1 className='text-5xl font-bold'>MY PORTFOLIO</h1>
                <p className='text-xl mt-2'>Welcome to my personal website. Explore my projects, skills, and contact info!</p>
            </div>

            {/*Navbar for section links*/}
            <nav className='bg-gray-700 text-white p-4 mt-6'>
                <ul className='flex space-x-6 justify-center'>
                    <li><a href="#about" className='hover: text-blue-400'>About</a></li>
                    <li><a href="#projects" className='hover: text-blue-400'>Projects</a></li>
                    <li><a href="#skills" className='hover: text-blue-400'>Skills</a></li>
                    <li><a href="#contact" className='hover: text-blue-400'>Contact</a></li>
                </ul>
            </nav>

            {/*Dark Mode Toggle*/}
            <div>
                <button 
                    onClick = {toggleDarkMode}
                    className='px-4 py-2 bg-gray-800 text-white rounded-full hover:bg-gray-700 focus:outline-none'>
                    {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
                </button>
            </div>
        </header>
    );
};

export default Header