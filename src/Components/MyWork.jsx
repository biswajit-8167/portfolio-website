import React from 'react'
import { motion } from "motion/react"
import { useInView } from "react-intersection-observer";
 function MyWork() {
    const project =[
        {
            id:1,
            title:'Cosmetic',
            discription:'A cosmetic website showcasing beauty products, skincare, makeup tips, and personalized beauty recommendations.',
            image:'./cosmetic.png',
         
        },
        {
            id:2,
            title:'E-Commerces',
            discription:'An e-commerce website offering seamless shopping, secure payments, diverse products, and fast delivery for customers worldwide.',
            image:'./E-Commerces.png',
       
        },
        {
            id:3,
            title:'Seo',
            discription:'An SEO website providing expert strategies, keyword optimization, analytics, and tools to boost online visibility.',
            image:'./seo.png',
            
        }
    ]

    const { ref, inView } = useInView(
            {
                triggerOnce: true,
                threshold: 0.1
            }
        )
  return (
    <div className='text-white py-16'>
        <div className='container mx-auto px-4'>
            <motion.h2 
             ref={ref}
             initial={{ opacity: 0, y: 100 }}
             animate={inView ? { opacity: 1, y: 0 } : {}}
             transition={{ delay: 0.2, duration: 0.5 }}
            className='text-[25px] md:text-[32px] font-bold mb-6 underline text-center'>My Work</motion.h2>
            <motion.p
             ref={ref}
             initial={{ opacity: 0, y: 50 }}
             animate={inView ? { opacity: 1, y: 0 } : {}}
             transition={{ delay: 0.5, duration: 0.5 }}
            className='mb-8 text-[15px] text-gray-400 text-center'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem, ducimus.</motion.p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
              {project.map((project,index) =>(
                <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay:index*0.2, duration: 0.5 }}
                key={index}
                 className='bg-[#1f1d2c] rounded-md overflow-hidden'
                >
                   <img src={project.image} alt="" className='w-full mb-4'  />
                   <div className='p-4'>
                     <h3 className='text-xl md:text-xl font-medium mb-2'>{project.title}</h3>
                     <p className='text-gray-400 text-[16px] font-normal'>{project.discription}</p>
                     <button className='border border-purple-500 text-purple-600 px-3 py-1 rounded-full mt-4'>Details</button>
                   </div>
                </motion.div>
              ))}
            </div>
        </div>
    </div>
  )
}

export default MyWork