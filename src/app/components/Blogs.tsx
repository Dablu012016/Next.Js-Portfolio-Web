"use client"

import { blogs } from '@/contents/blogs';
import Link from 'next/link';
import React from 'react';
import { FaCalendar, FaClock } from 'react-icons/fa';
import {motion} from "framer-motion"
import { cardHover} from '@/utils/animations';

const Blogs = () => {
    return (
        <section className='py-16 container max-w-7xl mx-auto px-4'>
            <h2 className='text-2xl font-bold text-center mb-12'>Latest Blog Posts</h2>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                {
                    blogs.map((blog) => {
                        return (
                            <motion.article {...cardHover}  key={blog.slug} className='bg-white dark:bg-dark/80 p-6 shadow-md rounded-lg'>
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
            </div>

            <div className='text-center mt-12'>
                <Link href='/blog' className='inline-block bg-primary text-white py-2 px-4 rounded-lg hover:bg-primary/80 transition-colors'>
                    View All Posts
                </Link>
            </div> 
        </section>
    );
}

export default Blogs;
