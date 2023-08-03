
import React from 'react';
import Navbar from './Components/Navbar';
import Carousel from './Components/Carousel';
import About from './Components/About';
import Footer from './Components/Footer';
import Services from './Components/Services'
import Contact from './Components/Contact'
import Login from './Components/Login';




const App = () => {
  return (

    <>
      <Navbar />
      <Carousel />
      <About />
      <Services />
      <Contact/>  
      <Footer/>
    </>
    
    
  )
}

export default App
