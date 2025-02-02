import React from 'react'
import { motion } from "motion/react"
import { useInView } from "react-intersection-observer";
import { 
    FaLinkedinIn,
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaYoutube

} from "react-icons/fa";
function Footer() {
    const { ref, inView } = useInView(
                      {
                          triggerOnce: true,
                          threshold: 0.1
                      })
  return (
    <motion.div 
    ref={ref}
    initial={{ opacity: 0, }}
    animate={inView ? { opacity: 1} : {}}
    transition={{ delay:0.8, duration: 0.5 }}
    className='container mx-auto flex flex-col md:flex-row items-center justify-between border-t-purple-500 border-t py-4 text-white px-4'>
        <div className='mb-4 md:mb-0'>
            <p className='text-sm'>@2025 All Rights Reserved</p>
        </div>
        <div className='mb-4 md:mb-0'>
            <p className='text-sm'>IN <span className='text-purple-500'>CODER</span></p>
        </div>
        <div className='flex gap-4 cursor-pointer'>
           <FaLinkedinIn size={18}/>
           <FaFacebookF size={18}/>
           <FaInstagram size={18}/>
           <FaTwitter size={18}/>
           <FaYoutube size={18}/>
        </div>
         
    </motion.div>
  )
}

export default Footer