import React,{useState} from "react";
import "./Login.css";
import {userService} from '../Services/userService'
import { createBrowserHistory } from "history";

export const history = createBrowserHistory();
const Signup = () => {
  const [input, setInput] = useState({
    username: '',
    password: '',
    confirmPassword: ''
  });
 
  
  const [fullname, setFullName] = useState()
  const [username, setUsername] = useState()
  const [confirmPassword, setConfirmPassword] = useState()
  const [password, setPassword] = useState()
  const [error, setError] = useState()


  const handleSubmit = async e => {
    e.preventDefault();
    const result =await userService.signupUser({
      fullname,
      username,
      password
    });
    if (result.token) {
      sessionStorage.setItem("token", result.token);
      window.location.replace("/product")
    } else {
      setError(result.message);
    }
  }
  

 const validatePassword=(value)=>{
    if (!value) {
      setError("Please enter Confirm Password.");
    } else if (password && value !== password) {
      setError("Password and Confirm Password does not match.")
    }else if(password&& value=== password){
      setError()
      setConfirmPassword()
    }
 

 }
   

  return (
    <section>
      <div className="signin">
        <div className="content">
          <h2>Sign Up</h2>

          <form className="form" onSubmit={(e)=>handleSubmit(e)}>
          <div className="inputBox">
              <input type="text" required onChange={e => setFullName(e.target.value)} ></input>
              <i>Full Name</i>
            </div>
            <div className="inputBox">
              <input type="text" required onChange={e => setUsername(e.target.value)}></input>
              <i>Username</i>
            </div>

            <div className="inputBox">
              <input type="password" required onChange={e => setPassword(e.target.value)}></input> <i>Password</i>
            </div>
            <div className="inputBox">
              <input type="password" required onChange={e => validatePassword(e.target.value)}></input> <i>Confirm Password</i>
            </div>
            <div className="links">
              <p style={{ color: "red" }}>{error}</p>
              <a href="#">Already have an Account?</a> <a href="login">Log In</a>
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
