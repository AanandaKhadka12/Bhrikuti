import React from "react";
import "./Login.css";

const Signup = () => {
  return (
    <section>
      <div className="signin">
        <div className="content">
          <h2>Sign Up</h2>

          <div className="form">
            <div className="inputBox">
              <input type="text" required></input>
              <i>Username</i>
            </div>

            <div className="inputBox">
              <input type="password" required></input> <i>Password</i>
            </div>
            <div className="inputBox">
              <input type="password" required></input> <i>Confirm Password</i>
            </div>

            <div className="inputBox">
              <input type="submit" value="SIGN UP"></input>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
