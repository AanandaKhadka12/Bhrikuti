import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <section>
      <div className="signin">
        <div className="content">
          <h2>Sign In</h2>

          <div className="form">
            <div className="inputBox">
              <input type="text" required></input>
              <i>Username</i>
            </div>

            <div className="inputBox">
              <input type="password" required></input> <i>Password</i>
            </div>

            <div className="links">
              {" "}
              <a href="#">Forgot Password</a> <a href="#">Signup</a>
            </div>

            <div className="inputBox">
              <input type="submit" value="Login"></input>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
