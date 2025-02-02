import React from 'react'
import Hero from '../Components/Hero'
import About from '../Components/About'
import Services from '../Components/Services'
import MyWork from '../Components/MyWork'
import Companies from '../Components/Companies'
import Contact from '../Components/Contact'
import Footer from '../Components/Footer'
 
function Home() {
  return (
    <div className='h-auto bg-[#1a1730]'>
      <Hero/>
      <About/>
      <Services/>
      <MyWork/>
      <Companies/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default Home