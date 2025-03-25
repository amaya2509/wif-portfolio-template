import React, { useState } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills.tsx";
import Contact from "./components/Contact.tsx";
import Footer from "./components/Footer";

const App: React.FC = () =>{
  
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  //Function to toggle the dark mode
  const toggleDarkMode = () =>{
    setIsDarkMode(!isDarkMode);
  };
// p-6 space-y-8
  return(
    <div className={`${isDarkMode ? 'dark' : ''} min-h-screen bg-gray-50`}>
      <Header toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} /> 

      <main className=""> 
        <About />
        <Projects />
        <Skills />
        <Contact /> 
      </main>
      <Footer />
    </div>
  );
};

export default App;