import React from "react";
import "./Contact.css";

const Contact = () => {
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
              <form action="#">
                
                <input className="form-control" type="text" name="name" placeholder="Name.." />
                <input className="form-control" type="email" name="email" placeholder="Email.." />
                <input className="form-control" type="phone" name="phone" placeholder="Phone.." />
                <textarea className="form-control" rows="4" name="message" placeholder="Message..."></textarea>
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
