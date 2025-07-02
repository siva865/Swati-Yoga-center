import React from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/Hero'
import About from './Components/About'
import Classes from './Components/Classes'
import Testimonials from './Components/Testimonials'
import ContactForm from'./Components/Contactform'
import Footer from './Components/Footer'
const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Classes/>
      <Testimonials/>
      <ContactForm/>
      <Footer/>
    
    </>
  )
}

export default App
