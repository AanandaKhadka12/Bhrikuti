import React,{useState} from "react";
import "./Login.css";
import { loginServices } from "../Services/loginService";

const Login = () => {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginServices.loginUser({
      username,
      password
    });
    sessionStorage.setItem('token', JSON.stringify(token));
  }

  return (
    <section>
      <div className="signin">
        <div className="content">
          <h2>Log In</h2>

          <form className="form" onSubmit={(e)=>handleSubmit(e)}>
            <div className="inputBox">
              <input type="text" required onChange={e => setUserName(e.target.value)} ></input>
              <i>Username</i>
            </div>

            <div className="inputBox">
              <input type="password" required onChange={e => setPassword(e.target.value)} ></input> <i>Password</i>
            </div>
            <div className="links">
              <a href="#">Forgot Password</a> <a href="signup">Signup</a>
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
