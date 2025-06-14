"use client"

import React from 'react';
import { FaCode, FaLaptopCode } from 'react-icons/fa';

import {motion} from "framer-motion"
import { fadeIn, fadeInDown, slideInLeft, slideInRight } from '@/utils/animations';

const About = () => {
  return (
    <div className='max-w-7xl mx-auto pt-20 px-4'>
      <motion.h1 {...fadeIn} transition={{delay: 0.2}} className='text-2xl font-bold text-center'>About Me</motion.h1>

      {/* bio */}
      <motion.p {...fadeInDown} transition={{delay: 0.4}} className='text-lg text-secondary max-w-3xl mx-auto text-center mt-6'>
        I&apos;m an aspiring Frontend Developer with a solid foundation in web technologies including HTML, CSS, JavaScript, Tailwind CSS, React / Next.js. I enjoy crafting responsive and engaging user interfaces and am constantly exploring new tools, technologies and best practices. My goal is to contribute to real-world projects, grow as a developer, and build user-friendly digital experiences
      </motion.p>

      {/* Skill Section  */}
      <section className='my-16'>
        <motion.h2 {...fadeInDown} transition={{delay: 0.6}} className='section-title'>Skills</motion.h2>

        <div  className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          <motion.div {...slideInLeft} transition={{delay: 0.8}}  className='bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md'>
            <FaCode className='w-8 h-8 text-primary mb-4' />
            <h2 className='text-xl font-semibold mb-2'>Frontend</h2>

            <ul className='text-secondary space-y-2 list-disc list-inside'>
              <li>React / Next.js</li>
              <li>TypeScript</li>
              <li>JavaScript</li>
              <li>Tailwind CSS</li>
              <li>BootStrap</li>
              <li>HTML5 / CSS3</li>
            </ul>
          </motion.div>

          <motion.div {...fadeIn} transition={{delay: 0.7}}  className='bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md'>
            <FaLaptopCode className='w-8 h-8 text-primary mb-4' />
            <h2 className='text-xl font-semibold mb-2'>Backend : <span className='text-sm text-gray-400 font-semibold'>Learning..</span></h2>

            <ul className='text-secondary space-y-2 list-disc list-inside'>
              <li>Node.js</li>
              <li>Express</li>
              <li>MongoDB</li>
            </ul>
          </motion.div>

          <motion.div {...slideInRight} transition={{delay: 0.9}}  className='bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md'>
            <FaLaptopCode className='w-8 h-8 text-primary mb-4' />
            <h2 className='text-xl font-semibold mb-2'>Tools & Other</h2>

            <ul className='text-secondary space-y-2 list-disc list-inside'>
              <li>Git / GitHub</li>
            </ul>
          </motion.div>
        </div>

        {/* education section  */}

        <section className='mt-16'>
            <h2 className='section-title'>Education</h2>

            <div className='max-w-3xl mx-auto space-y-8'>
                <div className='bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md'>
                   <h3 className='text-xl font-semibold mb-2'> Bachlor&apos;s of technology and science</h3>
                   <p className='text-primary mb-2'>RGPV Bhopal • 2021 - 2025</p>
                   <p className='text-secondary mb-2'>CGPA • 7.23</p>
                   <p className='text-secondary'>Grauduated with CSE. Focused on software engineering and web developement.</p>
                </div>

                <div className='bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md'>
                   <h3 className='text-xl font-semibold mb-2'>Higher secondary • PCM</h3>
                   <p className='text-primary mb-2'>Marwari collage darbhanga</p>
                </div>
                <div className='bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md'>
                   <h3 className='text-xl font-semibold mb-2'>Higher school</h3>
                   <p className='text-primary mb-2'>Shri baldev high school muzaffarpur</p>
                </div>
            </div>
        </section>

      </section>
    </div>
  );
}

export default About;
