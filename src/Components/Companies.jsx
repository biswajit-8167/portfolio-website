import React from 'react'
import { motion } from "motion/react"
import { useInView } from "react-intersection-observer";
function Companies() {

    const companies = [

        "ZOHO",
        "Zeus Learning",
        "LinkedIn",
        "Zapto",
        "Swiggy",
        "YOLO",
        "Union Living",
        "My Captain",
        "Accenture",
        "Bruracia",
        "Chefling"
    ];

    const scrollVarient1 ={
        animate:{
            x:[0,-1000],
            transition:{
                repeat: Infinity,
                duration: 15,
                ease: "linear",
                repeatType: "loop",
                 
            }
        },
    };
    
    const scrollVarient2 ={
        animate:{
            x:[-1000,0],
            transition:{
                repeat: Infinity,
                duration: 15,
                ease: "linear",
                repeatType: "loop",
               
                 
            }
        },
    };
    const companiesList = [...companies, ...companies];
    const { ref, inView } = useInView(
                {
                    triggerOnce: true,
                    threshold: 0.1
                }
            )
    return (
        <div className='text-white py-10'>
            <motion.div 
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className='container mx-auto text-center px-4'>
                <motion.h2 
                ref={ref}
                initial={{ opacity: 0, y: 100 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2, duration: 0.5 }}
                className='text-[25px] md:text-[32px] font-bold mb-8'>Companies I've worked with</motion.h2>
                <div className='overflow-hidden relative w-full'>
                    <motion.div
                    variants={scrollVarient1}
                    animate='animate'
                    className='whitespace-nowrap flex space-x-6'>
                        {companiesList.map((company, index) => (
                            <div key={index}
                            className='text-[15px] bg-gray-800 px-4 py-2 rounded-full inline-block'
                            >
                                {company}
                            </div>
                        ))}
                    </motion.div>
                </div>
                <div className='overflow-hidden relative w-full mt-5'>
                    <motion.div 
                    variants={scrollVarient2}
                    animate='animate'
                    className='whitespace-nowrap flex space-x-6'> 
                        {companiesList.map((company, index) => (
                            <div key={index}
                            className='text-[15px] bg-gray-800 px-4 py-2 rounded-full inline-block'
                            >
                                {company}
                            </div>
                        ))}
                    </motion.div>
                </div>
            </motion.div>
        </div>
    )
}

export default Companies