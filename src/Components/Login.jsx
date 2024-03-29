import React, { useState } from "react";
import "./Login.css";
import { userService } from "../Services/userService";

const Login = () => {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await userService.loginUser({
      username,
      password,
    });
    if (result.token) {
      sessionStorage.setItem("token", result.token);
      window.location.replace("/product")
    } else {
      setError(result.message);
    }
  };

  return (
    <section>
      <div className="signin">
        <div className="content">
          <h2>Log In</h2>

          <form className="form" onSubmit={(e) => handleSubmit(e)}>
            <div className="inputBox">
              <input
                type="text"
                required
                onChange={(e) => setUserName(e.target.value)}
              ></input>
              <i>Username</i>
            </div>

            <div className="inputBox">
              <input
                type="password"
                required
                onChange={(e) => setPassword(e.target.value)}
              ></input>{" "}
              <i>Password</i>
            </div>
            <div className="links">
              <p style={{ color: "red" }}>{error}</p>
               <a href="signup">Signup</a>
            </div>

            <div className="inputBox">
              <input type="submit" value="Login"></input>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
