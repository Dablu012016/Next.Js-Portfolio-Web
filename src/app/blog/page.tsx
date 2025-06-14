"use client"

import { blogs } from '@/contents/blogs';
import Link from 'next/link';
import React from 'react';
import { FaCalendar, FaClock } from 'react-icons/fa';
import {motion} from "framer-motion";
import { cardHover, fadeInDown, fadeInUp } from '@/utils/animations';

const Blog = () => {
  return (
    <div className='max-w-7xl mx-auto px-4 py-8'>
      <motion.h1 {...fadeInDown} transition={{delay: 0.2}} className='text-4xl font-bold text-center mb-14'>Blog Posts</motion.h1>

      <motion.div {...fadeInUp} transition={{delay : 0.4}} className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                {
                    blogs.map((blog, index) => {
                        return (
                            <motion.article {...cardHover} transition={{delay: 0.1}} key={index} className='bg-white dark:bg-dark/80 p-6 shadow-md rounded-lg'>
                                <Link href={`/blogs/${blog.slug}`}>
                                    <h3 className='text-xl font-semibold mb-4'>{blog.title}</h3>
                                </Link>
                                <p className='text-gray-600 dark:text-gray-300 mb-4'>{blog.excerpt}</p>

                                <div className='flex items-center text-sm text-gray-500 dark:text-gray-400 space-x-4'>
                                    <span className='flex items-center'>
                                        <FaCalendar className='mr-2' />
                                        {new Date(blog.date).toLocaleDateString()}
                                    </span>
                                    <span className='flex items-center'>
                                        <FaClock className=' mr-2' />
                                        {blog.readTime}
                                    </span>
                                </div>
                            </motion.article>
                        )
                    })
                }
            </motion.div>
    </div>
  );
}

export default Blog;
