import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { motion } from "motion/react"
function Navber() {
   const variants = {
       open:{clipPath:"circle(1200px at 60px 60px)"},
       transition:{
        type:"spring",
       },
       closed:{
        clipPath:"circle(20px at 43px 37px)",
        transition: {
            type:"spring",  
            damping: 4,
        }
       }
   }
    const [menu, setMenu] = useState(false)
    const items = [
        { id: 1, text: "Home" },
        { id: 2, text: "Services" },
        { id: 3, text: "Work" },
        { id: 4, text: "Contact" },
    ]
    return (
        <div className=' bg-[#0e0c1e] py-1 md:py-5'>
            <motion.div
             initial={{ opacity: 0, y:-100 }}
             animate={{ opacity: 1, y:0 }}
             transition={{ duration: 1 }}
            className='container mx-auto hidden md:flex justify-between'>
                <div className='text-xl lg:text-2xl font-bold flex items-center'>
                    <span className='text-white'>IN</span>
                    <span className='text-purple-600'>CODER</span>
                </div>
                <div>
                    <ul className='hidden md:flex items-center space-x-6 list-none lg:text-lg md:text-base text-white'>
                        {items.map(({ id, text }) => (
                            <li key={id} className='cursor-pointer hover:text-purple-600 duration-0.5'>
                                <Link to={'/'}>{text}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <Link to={'/'} className='md:text-base lg:text-lg bg-purple-600 hover:bg-purple-400 px-4 py-2 rounded-full text-white'>Download CV</Link>
                </div>
            </motion.div>
            <div className='flex md:hidden justify-between'>
                <motion.div
                  animate={menu ? "open" : "closed"}
                >
                    <motion.div
                        variants={variants}
                        onClick={() => setMenu((prev) => !prev)}
                        className='bg-white w-3/4 h-screen text-black fixed z-10'>
                        <div className='px-7 py-6 cursor-pointer'>
                            {menu ? <MdClose size={30} /> : <FiMenu size={30} />}
                        </div>
                        {
                            menu && (
                                <div className='flex flex-col justify-center items-center'>
                                    <ul className='space-y-4 text-lg text-black'>
                                        {items.map(({ id, text }) => (
                                            <li key={id} className="hover:text-purple-500 duration-200 cursor-pointer">

                                                <Link to={'/'}>{text}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                    <div className='mt-5'>
                                        <Link to={'/'} className='md:text-base lg:text-lg bg-purple-600 hover:bg-purple-400 px-4 py-2 rounded-full text-white ]'>Download CV {""}</Link>
                                    </div>
                                </div>
                            )}
                    </motion.div>
                </ motion.div>
                <motion.div
                initial={{ opacity: 0,x:100,y:-100 }}
                animate={{ opacity: 1,x:0,y:0 }}
                transition={{ duration: 0.5 }}
                 className='text-xl font-bold flex items-center gap-2 py-6 px-4 '>
                    <span className='text-white'>IRON</span>
                    <span className='text-purple-600'>CODER</span>
                </motion.div>
            </div>
        </div>
    )
}

export default Navber