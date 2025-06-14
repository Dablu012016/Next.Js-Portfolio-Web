"use client"

import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import {motion} from 'framer-motion'
import { fadeInUp, scaleIn, slideInLeft } from '@/utils/animations';


const Hero = () => {
    return (
        <section className='container max-w-7xl mx-auto py-24 px-4'>
            <div className='max-w-3xl mx-auto text-center'>
                <motion.div {...scaleIn} transition={{delay: 0.2}} className='flex flex-col items-center mb-4'>
                    <Image src="/mypic.jpg" alt="profile picture" width={100} height={100} className='rounded-full w-32 h-32 ring-2 ring-primary object-cover' />
                </motion.div>

                <motion.h1 {...fadeInUp} transition={{delay: 0.3}} className='text-3xl md:text-5xl font-bold mb-4'>Hi, I&apos;m <span className='text-primary'>Dablu Kumar</span></motion.h1>

                <motion.p {...fadeInUp} transition={{delay: 0.5}} className='text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-bold mb-4'>Frontend Developer | UI/UX Enthusiast | Open Source Contributor</motion.p>

                <motion.div {...slideInLeft} transition={{delay: 0.7}} className='flex justify-center space-x-4 mb-4'>
                    <Link href="https://github.com/Dablu012016" className='text-2xl text-gray-600 dark:text-gray-300 hover:text-primary transition-colors duration-300'>
                       <FaGithub/> 
                    </Link>
                    <Link  href="https://www.linkedin.com/in/dablu-kumar-843757229?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className='text-2xl text-gray-600 dark:text-gray-300 hover:text-primary transition-colors duration-300'>
                       <FaLinkedin/> 
                    </Link>
                    <Link  href="/" className='text-2xl text-gray-600 dark:text-gray-300 hover:text-primary transition-colors duration-300'>
                       <FaTwitter/> 
                    </Link>
                </motion.div>

                <motion.div {...fadeInUp} transition={{delay: 0.8}} className='flex flex-col md:flex-row justify-center gap-4'>
                    <Link href="/project" className='bg-primary text-white inline-block w-full md:w-auto px-8 py-3 rounded-lg hover:bg-primary/80 transition-colors'>View Project</Link>
                    <Link href="/project" className='bg-gray-500 text-white hover:text-gray-800  inline-block w-full md:w-auto px-8 py-3 rounded-lg hover:bg-gray-400 transition-colors'>Contact Me</Link>
                </motion.div>
            </div>
        </section>
    );
}

export default Hero;
