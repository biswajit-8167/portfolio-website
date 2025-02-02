import React from 'react'
import { FaAppStore } from "react-icons/fa";
import { motion } from "motion/react"
import { useInView } from "react-intersection-observer";
function Services() {
    const servicesData = [
        {
            title: "App Design",
            discription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, amet!"
        },
        {
            title: "App Design",
            discription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, amet!"
        },
        {
            title: "App Design",
            discription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, amet!"
        },
        {
            title: "App Design",
            discription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, amet!"
        },
        {
            title: "App Design",
            discription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, amet!"
        },
        {
            title: "App Design",
            discription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, amet!"
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
            <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.3 }}
                className='flex flex-col justify-center items-center px-4'>
                <motion.h2
                    ref={ref}
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className='text-[25px] md:text-[32px] font-bold mb-6 underline'>Services</motion.h2>
                <p className='mb-8 text-[15px] text-gray-400 text-center'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, amet!</p>
                <div className='container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10'>
                    {servicesData.map((services, index) => (
                        <motion.div
                            ref={ref}
                            initial={{ opacity: 0, scale:0.8 }}
                            animate={inView ? { opacity: 1, scale:1 } : { opacity: 0, scale:0.8}}
                            transition={{duration: 0.5, delay: index * 0.5 }}
                            key={index}
                            className='bg-[#1f1d2c] p-8 rounded-md flex flex-col items-center text-center hover:shadow-lg hover:shadow-purple-500
                        transition-shadow duration-300 ease-in-out cursor-pointer'
                        >
                            <FaAppStore className='text-purple-600 text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4' />
                            <h3 className='text-[17px] md:text-[20px] font-medium mb-2'>{services.title}</h3>
                            <p className='text-[15px] text-gray-400 text-center'>{services.discription}</p>
                        </motion.div>
                    ))}

                </div>
            </motion.div>
        </div>
    )
}

export default Services