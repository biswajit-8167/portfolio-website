import React from 'react'
import { motion } from "motion/react"
import Profile from '../assets/hero.png'
function Hero() {
    return (
        <div className='text-white py-5'>
            <motion.img 
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
                duration: 0.5,
                delay: 0.5
            }}
            src={Profile} alt="Biswajit" className='mx-auto w-2/3 md:w-1/3 lg:w-1/5 rounded-full pb-[20px]' />
            <motion.div 
            initial={{ opacity: 0}}
            animate={{ opacity: 1}}
            transition={{
                duration: 0.5,
            }}
            className='container mx-auto text-center px-4'>
                <motion.h1
                initial={{ opacity: 0, y:100 }}
                animate={{ opacity: 1, y:0 }}
                transition={{ 
                    duration: 0.5,
                    delay: 1
                }}
                className='text-3xl md:text-4xl lg:text-5xl font-bold mb-4'>Your Story, Your Way  
                </motion.h1>
                    <motion.h1 
                    initial={{ opacity: 0, y:100 }}
                    animate={{ opacity: 1, y:0 }}
                    transition={{ 
                        duration: 0.5,
                        delay: 1.2
                    }}
                    className='text-purple-600 text-3xl md:text-4xl lg:text-5xl font-bold mb-4'>Build Your Personal Portfolio</motion.h1>
                <motion.p 
                 initial={{ opacity: 0, y:100 }}
                 animate={{ opacity: 1, y:0 }}
                 transition={{ 
                     duration: 0.5,
                     delay: 1.5
                 }}
                className='w-full md:w-4/6 lg:w-3/6 mx-auto text-[15px] md:text-[17px] text-gray-400 mb-3'>I'm a Front-End Web Developer with a strong passion for creating visually stunning and user-friendly websites.</motion.p>
                <div className='flex flex-col md:flex-row justify-center items-center py-4 space-y-4 md:space-y-0 md:space-x-4'>
                    <motion.button 
                    initial={{ opacity: 0, x:-100 }}
                    animate={{ opacity: 1, x:0 }}
                    transition={{ 
                        duration: 0.5,
                        delay: 2.1
                    }}
                    className='bg-purple-600 text-[16px] md:text-[18px] font-normal px-4 py-2 rounded-full'>Hire Me</motion.button>
                    <motion.button
                     initial={{ opacity: 0, x:100 }}
                     animate={{ opacity: 1, x:0 }}
                     transition={{ 
                         duration: 0.5,
                         delay: 2.1
                     }}
                    className='text-white border text-[16px] md:text-[18px] font-normal border-white px-4 py-2 rounded-full md:ml-4'>My Story</motion.button>
                </div>
            </motion.div>
        </div>
    )
}

export default Hero