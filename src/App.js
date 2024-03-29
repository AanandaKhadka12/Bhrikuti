import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Carousel from "./Components/Carousel";
import About from "./Components/About";
import Footer from "./Components/Footer";
import Services from "./Components/Services";
import Contact from "./Components/Contact";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Product from "./Components/Product";
import Productind from "./Components/Productind";
import PrivateRoute from "./Components/PrivateRoute";
import Profile from "./Components/Profile";

const App = () => {
  const isAuthenticated = sessionStorage.getItem("token");
  return (
    <>
      <Navbar isAuthenticated={isAuthenticated}/>
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <>
              <Carousel />
              <About />
              <Services />
              <Contact />
            </>
          )}
        />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/about" component={About} />
        <Route exact path="/services" component={Services} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/product" component={Product}/>
        <Route
          exact
          path="/productind/:id"
          component={Productind}
        />
        <PrivateRoute exact path="/profile" component={Profile} isAuthenticated={isAuthenticated} />
        <Redirect to="/" />
      </Switch>
      <Footer />
    </>
  );
};

export default App;
