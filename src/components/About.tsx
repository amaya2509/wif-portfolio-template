import React from 'react'
import mascot from '../assets/portfolio-img.svg'

const About = () => {
  return (
    <section id='about' className='py-16 bg-gray-100 dark:bg-gray-900'>
      <div className='container mx-auto px-6 lg:px-16'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 items-center'>
          {/* Left side */}
          <div>
            <img src={mascot}
            alt='mascot'
            className='w-64 h-auto animate-fadeIn' />
          </div>

          {/* Right side */}
          {/* <div>
            <img src={mascot}/>
          </div> */}
        </div>
      </div>
    </section>
  )
}

export default About