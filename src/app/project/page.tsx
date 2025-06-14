"use client"

import React from 'react';
import { projects } from '@/contents/project';
import Image from 'next/image';
import Link from 'next/link';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import {motion} from "framer-motion"
import { cardHoverSmall, fadeInDown, fadeInUp, pageTransition } from '@/utils/animations';

const Project = () => {
  return (
    <div className='max-w-7xl mx-auto px-4 py-8'>
      <motion.h1 {...fadeInDown} transition={{delay: 0.2}} className='text-2xl font-bold text-center mb-4'>My Projects</motion.h1>
       <motion.p {...fadeInUp} transition={{delay: 0.3}} className='text-lg text-secondary mb-20 text-center'>Here are some of my projects. Click on the links to view the code.</motion.p>

       <motion.div {...pageTransition} transition={{delay: 0.6}} className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                       {
                           projects.map((project, index) => {
                               return (
                                   <motion.article {...cardHoverSmall}
                                   transition={{delay: 0.1}}  key={index} className='bg-white dark:bg-dark/80 p-6 shadow-md rounded-lg'>
                                       <div className='relative  aspect-video rounded-lg overflow-hidden mb-4'>
                                           <Image
                                               src={project.image}
                                               alt={project.title}
                                               fill
                                               className="object-cover"
                                               sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                           />
                                           
                                       </div>
       
                                       <h3 className='text-xl font-semibold dark:text-gray-200 mb-2' >{project.title}</h3>
       
                                       <p className='text-gray-600 dark:text-gray-300 mb-4'>{project.description}</p>
       
                                       <div className='flex flex-wrap gap-2 mb-4'>
                                           {
                                              project.technologies.map((tech, index) =>{
                                                   return(
                                                       <span key={index} className='bg-primary/10 text-primary px-3 py-1 rounded-full text-sm'>{tech}</span>
                                                   )
                                               })
                                           }
                                       </div>
       
                                       <div className='flex gap-4 mt-2'>
                                           <Link href={project.githubLink} target='_blank' className='flex items-center gap-1 text-secondary hover:text-primary transition-colors duration-300 ' >
                                           <FaGithub className='w-5 h-5'/><span>Code</span>
                                           </Link>
                                           <Link href={project.demoLink} target='_blank' className='flex items-center gap-1 text-secondary hover:text-primary transition-colors duration-300 ' >
                                           <FaExternalLinkAlt className='w-5 h-5'/><span>Demo Link</span>
                                           </Link>
                                       </div>
                                   </motion.article>
                               )
                           })
                       }
                   </motion.div>
    </div>
  );
}

export default Project;
