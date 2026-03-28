import React, { useEffect } from 'react'
import Home from "../sections/Home.jsx" 
import WhyChooseUs from '../sections/WhyChooseUs.jsx'
import MernSkills from '../sections/MernSkills.jsx'
import ContactPage from '../sections/ContactPage.jsx'

const Main = () => {
            useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <div>
        <Home/>
        <WhyChooseUs/>
        <MernSkills/>
        <ContactPage/>
    </div>
  )
}

export default Main