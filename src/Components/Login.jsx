import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <section>
      <div class="signin">
        <div class="content">
          <h2>Sign In</h2>

          <div class="form">
            <div class="inputBox">
              <input type="text" required></input>
              <i>Username</i>
            </div>

            <div class="inputBox">
              <input type="password" required></input> <i>Password</i>
            </div>

            <div class="links">
              {" "}
              <a href="#">Forgot Password</a> <a href="#">Signup</a>
            </div>

            <div class="inputBox">
              <input type="submit" value="Login"></input>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
