import React, { useEffect, useRef } from 'react'
import mascot from '../assets/portfolio-img.svg'
import {motion} from 'framer-motion'
import Typed from 'typed.js'

const About: React.FC = () => {

  const typedElement = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const options = {
      strings: [
        "Software Engineer",
        "Open Source Contributor",
        "Tech Enthusiast",
        "Creative Thinker"
      ],
      typeSpeed: 60,
      backSpeed: 40,
      loop: true
    };

    if (typedElement.current) {
      const typed = new Typed(typedElement.current, options);

      return () => {
        typed.destroy();
      };
    }
  }, []);

  const waveAnimation = {
    initial: {y: 0},
    animate: {
      y:[0,-5,0,5,0],
      transition:{duration:1.5, repeat: Infinity, ease: "easeInOut"}
    }
  }

  return (
    <section id='about' className='py-16 bg-gray-100 dark:bg-gray-900'>
      <div className='container mx-auto px-6 lg:px-16'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 items-center'>
          {/* Left side */}
          <div className='flex justify-center'>
          <motion.img 
              src={mascot}
              alt="Mascot" 
              className="w-64 h-auto"
              variants={waveAnimation}
              initial="initial"
              animate="animate"
            />
          </div>

          {/* Right side */}
          <div className='text-center md:text-left'>
            <h2 className='text-3xl font-bold text-gray-800 dark:text-white'>Hey <motion.span 
                className='text-blue-500 font-semibold'
                animate={{scale: [1,1.1,1]}}
                transition={{repeat: Infinity, duration: 1.2}}>
                  it's AMAYA......
                  </motion.span>I'm a FullStack Developer</h2>
            <p className='mt-4 text-lg text-gray-600 dark:text-gray-300'>a passionate software engineer specializing in <motion.span
                className="text-purple-600 font-bold"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ repeat: Infinity, duration: 1.2 }}
              >front-end and full-stack development.</motion.span> I love creating interactive, user-friendly experiences and working on innovative projects.</p><br></br>

              <p className='text-lg font-semibold text-gray-900 dark:text-gray-400'>WHO AM I?</p><br></br>
              <span className="text-lg text-yellow-500 font-semibold" ref={typedElement}></span>


          </div>
        </div>
      </div>
    </section>
  )
}

export default About