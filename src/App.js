
import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
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
      <Switch>

        <Route exact path="/" render={() =>
          <>
            <Carousel/>
            <About />
            <Services />
            <Contact />
          </>
        } />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/about" component={About} />
        <Route exact path="/services" component={Services} />
        <Redirect to="/" />


      </Switch>
      <Footer/>

    </>
    
    
  )
}

export default App
