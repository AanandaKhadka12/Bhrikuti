import React,{useState} from "react";
import "./Login.css";
import {userService} from '../Services/userService'

const Signup = () => {

  const [username, setUsername] = useState()
  const [password, setPassword] = useState()


  const handleSubmit = async e => {
    e.preventDefault();
    await userService.signupUser({
      username,
      password
    });
  }
  return (
    <section>
      <div className="signin">
        <div className="content">
          <h2>Sign Up</h2>

          <form className="form" onSubmit={(e)=>handleSubmit(e)}>
            <div className="inputBox">
              <input type="text" required onChange={e => setUsername(e.target.value)}></input>
              <i>Username</i>
            </div>

            <div className="inputBox">
              <input type="password" required></input> <i>Password</i>
            </div>
            <div className="inputBox">
              <input type="password" required onChange={e => setPassword(e.target.value)}></input> <i>Confirm Password</i>
            </div>

            <div className="inputBox">
              <input type="submit" value="SIGN UP"></input>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Signup;
