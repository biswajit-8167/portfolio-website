import React from 'react'
import aboutImage from '../assets/about.png'
import { motion } from "motion/react"
import { useInView } from "react-intersection-observer";
function About() {
    const { ref, inView } = useInView(
        {
            triggerOnce: true,
            threshold: 0.1
        }
    )
    return (
        <div className='text-white py-16'>
            <div className='container mx-auto text-center px-4'>
                <motion.h2
                    ref={ref}
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.2, duration: 0.3 }}
                    className='text-[25px] md:text-[32px] font-bold mb-6 underline'>About Me</motion.h2>
                <motion.p
                    ref={ref}
                    initial={{ opacity: 0, y: 100 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className='mb-6 text-[15px] text-gray-400 text-center'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic minus officia at odit cumque,</motion.p>
                <div className='flex flex-col md:flex-row justify-center items-center'>
                    <motion.div
                        ref={ref}
                        initial={{ opacity: 0, x: -100 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.6, duration: 0.5 }}
                        className='w-[40%] mb-8 md:mb-0 md:mr-8 flex justify-center'>
                        <img src={aboutImage}
                            className='w-[250px]'
                        />
                    </motion.div>
                   <div className='w-full md:w-[55%]'>
                   <motion.p
                        ref={ref}
                        initial={{ opacity: 0, x: 100 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.6, duration: 0.5 }}
                        className=' text-gray-400 px-4 md:px-0 text-base sm:text-lg md:text-xl text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima odio ea officia veniam. Non repellat quia laudantium similique delectus sequi aliquam atque fuga. Praesentium iusto earum, doloremque recusandae, ut excepturi, ullam aut repudiandae quam nemo commodi perspiciatis unde dolorem beatae.</motion.p>
                   </div>
                </div>
                
            </div>
            <div className='container mx-auto flex flex-col md:flex-row justify-center items-center gap-4 md:gap-[100px] mt-8'>
                    <motion.div
                        ref={ref}
                        initial={{ opacity: 0 }}
                        animate={inView ? { opacity: 1 } : {}}
                        transition={{ delay: 1.2, duration: 0.3 }}
                        className='text-center'
                    >
                        <h3 className='text-3xl md:text-6xl font-bold text-purple-800 md:my-4'>5+</h3>
                        <motion.p
                            ref={ref}
                            initial={{ opacity: 0, y: 100 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 1.7, duration: 0.5 }}
                            className='text-sm sm:text-base text-gray-400'>Years of design experience</motion.p>
                    </motion.div>
                    <motion.div
                        ref={ref}
                        initial={{ opacity: 0 }}
                        animate={inView ? { opacity: 1 } : {}}
                        transition={{ delay: 1.4, duration: 0.3 }}
                        className='text-center'
                    >
                        <h3 className='text-3xl md:text-6xl font-bold text-purple-800 md:my-4'>50+</h3>
                        <motion.p
                            ref={ref}
                            initial={{ opacity: 0, y: 100 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 1.8, duration: 0.5 }}
                            className='text-sm sm:text-base text-gray-400'>Overall Global Customers</motion.p>
                    </motion.div>
                    <motion.div
                        ref={ref}
                        initial={{ opacity: 0 }}
                        animate={inView ? { opacity: 1 } : {}}
                        transition={{ delay: 1.6, duration: 0.3 }}
                        className='text-center'
                    >
                        <h3 className='text-3xl md:text-6xl font-bold text-purple-800 md:my-4'>90+</h3>
                        <motion.p
                            ref={ref}
                            initial={{ opacity: 0, y: 100 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 1.9, duration: 0.5 }}
                            className='text-sm sm:text-base text-gray-400'>Project I have completed</motion.p>
                    </motion.div>
                </div>
        </div>


    )
}

export default About