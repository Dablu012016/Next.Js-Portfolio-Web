 "use client"

import Link from 'next/link';
import React, { useState } from 'react';
import { MdEmail, MdLocationOn, MdPhone } from 'react-icons/md';
import {motion} from "framer-motion";
import { fadeInDown, slideInLeft, slideInRight } from '@/utils/animations';

interface FormData {
  name: string;
  email: string;
  message: string;
}

type FormStatus = "idle" | "loading" | "success" | "error";

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: ""
  });

  const [status, setStatus] = useState<FormStatus>("idle");

  const handdleSubmit = async(e: React.FormEvent) => {
     e.preventDefault();
     setStatus("loading");
     try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type" : "application/json"
        },
        body: JSON.stringify(formData)
      })

      if(!response.ok){
        throw new Error("Failed to send message");
      }

      setStatus("success");
      setFormData({
        name: "",
        email: "",
        message: ""
      })
     } catch (error) {
       setStatus("error")
       console.log("message error" , error);
       
     }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData( prev => ({
         ...prev,
         [e.target.name]: e.target.value
    }))
  }

  return (
    <div className='max-w-7xl mx-auto py-20 px-4'>
      <motion.h1 {...fadeInDown} transition={{delay: 0.2}} className='text-3xl font-bold text-center mb-8'>Contact Me</motion.h1>

      <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>

        {/* contact info  */}
        <motion.div {...slideInLeft} transition={{delay: 0.3}} className='space-y-6'>
          <h2 className='text-xl font-semibold'>Get in Touch</h2>
          <p className='text-secondary md:w-3/3'>i&apos;m  always open to discusing new projects. creative ideas, or opportunities to be part of your visions.</p>

          <div className='flex gap-2 items-center'>
            <MdEmail className='w-8 h-8 text-primary' />
            <div>
              <h3 className='text-xl text-bold'>Email</h3>
              <Link href="mailto:dablukumar3590@gmail.com" className='text-sm text-semibold text-secondary hover:text-primary'>dablukumar3590@gmail.com</Link>
            </div>
          </div>

          <div className='flex items-center gap-2'>
            <MdPhone className='w-8 h-8 text-primary' />
            <div>
              <h3 className='text-xl text-bold'>Phone</h3>
              <Link href="tel:+917604012016" className='text-sm text-semibold text-secondary hover:text-primary'>+91 7604012016</Link>
            </div>
          </div>

          <div className='flex items-center gap-2'>
            <MdLocationOn className='w-8 h-8 text-primary' />
            <div>
              <h3 className='text-xl text-bold'>Location</h3>
              <p className='text-sm text-semibold text-secondary'>Marathalli, Bangolore, KA</p>
            </div>
          </div>

        </motion.div>

        {/* contact form  */}
        <motion.div {...slideInRight} transition={{delay: 0.3}} className=' bg-white dark:bg-dark/50  shadow-md rounded-lg p-6 '>

          <form onSubmit={handdleSubmit} className='space-y-6'>
            <div>
              <label htmlFor="name" className='block text-sm font-medium'>Name</label>
              <input 
              type="text" 
              name='name' 
              id='name' 
              placeholder='Enter your name' 
              required 
              value={formData.name}
              onChange={handleChange}
              className='w-full bg-white placeholder:text-white/50 dark:bg-dark rounded-md mb-2 border border-gray-300 dark:border-gray-900 focus:outline-none focus:ring-2 focus:ring-primary/50 dark:text-white text-gray-600 px-3 py-2 flex-1' />
            </div>

            <div>
              <label htmlFor="name" className='block text-sm font-medium'>Email</label>
              <input 
              type="email" 
              name='email' 
              id='email' 
              placeholder='Enter your email' 
              required 
              value={formData.email}
              onChange={handleChange}
              className='w-full placeholder:text-white/50 bg-white dark:bg-dark rounded-md mb-2 border border-gray-300 dark:border-gray-900 focus:outline-none focus:ring-2 focus:ring-primary/50 dark:text-white text-gray-600 px-3 py-2 flex-1' />
            </div>

            <div>
              <label htmlFor="message" className='block text-sm font-medium'>Message</label>
              <textarea 
              name="message" 
              id="message" 
              rows={5} 
              placeholder='Enter your message' 
              required 
              value={formData.message}
              onChange={handleChange}
              className='w-full bg-white placeholder:text-white/50 dark:bg-dark rounded-md  border border-gray-300 dark:border-gray-900 focus:outline-none focus:ring-2 focus:ring-primary/50 dark:text-white text-gray-600 px-3 py-1' />
            </div>

            <button type='submit' className=' w-full bg-primary text-white px-8 py-2 rounded-lg hover:bg-primary/80 transition-colors'>{status === "loading" ? "sending..." : "send message"}</button>

            {
              status === "success" && (
                <p className='text-green-500 text-center'>Message sent successfully!</p>
              )
            }

            {
              status === "error" && (
                <p className='text-red-500 text-center'>Failed to send message. please try again.</p>
              )
            }
          </form>

        </motion.div>

      </div>

    </div>
  );
}

export default Contact;

