
import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Carousel from './Components/Carousel';
import About from './Components/About';
import Footer from './Components/Footer';
import Services from './Components/Services'
import Contact from './Components/Contact'
import Login from './Components/Login';
import Signup from './Components/Signup';
import Product from './Components/Product';




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
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/product" component={Product} />
        <Redirect to="/" />
      </Switch>
      <Footer/>

    </>
    
    
  )
}

export default App
