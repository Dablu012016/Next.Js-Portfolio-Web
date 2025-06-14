"use client"

import { projects } from '@/contents/project';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import {motion} from 'framer-motion';
import { cardHoverSmall, fadeInUp } from '@/utils/animations';


const Projects = () => {
    return (
        <section className='pb-24 container max-w-7xl mx-auto px-4'>
            <motion.h2 {...fadeInUp} transition={{delay: 1.0}} className='text-2xl font-bold text-center dark:text-gray-300 mb-14'>Feature Of Project</motion.h2>

            <div  className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                {
                    projects.map((project, index) => {
                        return (
                            <motion.article {...cardHoverSmall} transition={{delay: 0.1}} key={index} className='bg-white dark:bg-dark/80 p-6 shadow-md rounded-lg'>
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
            </div>
        </section>
    );
}

export default Projects;
