import React from 'react'
import { motion } from "motion/react"
import { useInView } from "react-intersection-observer";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt
} from "react-icons/fa";

function Contact() {

   const { ref, inView } = useInView(
                  {
                      triggerOnce: true,
                      threshold: 0.1
                  })
  return (
    <div className='py-16'>
      <div className='container mx-auto text-center px-4'>
        <motion.h2
         ref={ref}
         initial={{ opacity: 0, y: 50 }}
         animate={inView ? { opacity: 1, y: 0 } : {}}
         transition={{ delay: 0.2, duration: 0.5 }}
        className='text-white text-[32px] md:text-4xl font-bold'>Let's Discuss Your <span className='text-purple-600'>Project</span></motion.h2>
        <motion.p
         ref={ref}
         initial={{ opacity: 0, y: 50 }}
         animate={inView ? { opacity: 1, y: 0 } : {}}
         transition={{ delay: 0.4, duration: 0.5 }}
        className='text-gray-400 mt-4 text-md'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit, pariatur explicabo. Voluptate exercitationem in vero odit? Rerum ducimus laborum aut?</motion.p>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-8'>
          <div className='flex flex-col gap-5'>
            <motion.div
             ref={ref}
             initial={{ opacity: 0, x: -50 }}
             animate={inView ? { opacity: 1, x: 0 } : {}}
             transition={{ delay: 0.2, duration: 0.5 }}
            className='flex items-center gap-6'>
              <div className='text-white bg-purple-500 w-10 h-10 rounded-full flex items-center justify-center p-1'>
                <FaPhone className='text-[20px]' />
              </div>
              <div className='text-left'>
                <p className='font-medium text-purple-500 text-[18px] mb-1'>Call Me</p>
                <p className='text-gray-400'>+91 123456789</p>
              </div>
            </motion.div>
            <motion.div 
             ref={ref}
             initial={{ opacity: 0, x: -50 }}
             animate={inView ? { opacity: 1, x: 0 } : {}}
             transition={{ delay: 0.4, duration: 0.5 }}
            className='flex items-center gap-6'>
              <div className='text-white bg-purple-500 w-10 h-10 rounded-full flex items-center justify-center p-1'>
                <FaEnvelope className='text-[20px]' />
              </div>
              <div className='text-left'>
                <p className='font-medium text-purple-500 text-[18px] mb-1'>Email</p>
                <p className='text-gray-400'>biswajit7980@gmail.com</p>
              </div>
            </motion.div>
            <motion.div
             ref={ref}
             initial={{ opacity: 0, x: -50 }}
             animate={inView ? { opacity: 1, x: 0 } : {}}
             transition={{ delay: 0.6, duration: 0.5 }}
            className='flex items-center gap-6'>
              <div className='text-white bg-purple-500 w-10 h-10 rounded-full flex items-center justify-center p-1'>
                <FaMapMarkerAlt className='text-[20px]' />
              </div>
              <div className='text-left'>
                <p className='font-medium text-purple-500 text-[18px] mb-1'>Address</p>
                <p className='text-gray-400'>Siliguri, Jalpaiguri, West Bengal</p>
              </div>
            </motion.div>
          </div>
          <div>
            <motion.form
             ref={ref}
             initial={{ opacity: 0, x: 50 }}
             animate={inView ? { opacity: 1, x: 0 } : {}}
             transition={{ delay: 0.8, duration: 0.5 }}
            >
              <div className='flex flex-col gap-4 text-left'>
                <div className='flex flex-col md:flex-row gap-4'>
                  <input type="text" placeholder='Your Name' className='bg-gray-800 border-purple-500 border rounded-md px-4 py-2 w-full' />
                  <input type="text" placeholder='Your Email' className='bg-gray-800 border-purple-500 border rounded-md px-4 py-2 w-full' />
                </div>
                <div className='flex flex-col md:flex-row gap-4'>
                  <input type="text" placeholder='Phone Number' className='bg-gray-800 border-purple-500 border rounded-md px-4 py-2 w-full' />
                  <input type="text" placeholder='Budget' className='bg-gray-800 border-purple-500 border rounded-md px-4 py-2 w-full' />
                </div>
                <div>
                  <textarea placeholder='Your Message'  className='bg-gray-800 border-purple-500 border rounded-md px-4 py-2 w-full h-[120px]' />
                </div>
                <div>
                <button className='bg-purple-500 text-white py-2 px-4 rounded-md hover:bg-purple-600 transition duration-0.5'>Submit</button>
                </div>
              </div>
            </motion.form>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Contact