import React,{useState} from "react";
import "./Contact.css";
import { userService } from "../Services/userService";

const Contact = () => {
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [phone, setPhone] = useState()
  const [message, setMessage] = useState()


  const handleSubmit = async e => {
    e.preventDefault();
   await userService.createContact({
      name,
      email,
      phone,
      message
    });
  }
  return (
    <>
      <div className="container-fluid">
        <div className="contact-title">
          <p>Get In Touch</p>
        </div>
      </div>
      <div className="container">
        <div className="form-container">
          <div className="left-container">
            <div className="left-inner-container">
              <h2>Let's Chat</h2><br />
              <p>You are welcome to send a message so we can establish a connection with you.</p>
            </div>
          </div>
          <div className="right-container">
            <div className="right-inner-container">
            <div className="social-container">
                  <a href="#" className="social-ind">
                    <i className="fa-brands fa-facebook"></i>
                  </a>
                  <a href="#" className="social-ind">
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                  <a href="#" className="social-ind">
                    <i className="fa-brands fa-linkedin"></i>
                  </a>
                </div>
              <form onSubmit={(e)=>handleSubmit(e)}>
                
                <input className="form-control" type="text" name="name" placeholder="Name.." onChange={e => setName(e.target.value)}/>
                <input className="form-control" type="email" name="email" placeholder="Email.." onChange={e => setEmail(e.target.value)}/>
                <input className="form-control" type="phone" name="phone" placeholder="Phone.." onChange={e => setPhone(e.target.value)}/>
                <textarea className="form-control" rows="4" name="message" placeholder="Message..."onChange={e => setMessage(e.target.value)}></textarea>
                <button type="submit">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
