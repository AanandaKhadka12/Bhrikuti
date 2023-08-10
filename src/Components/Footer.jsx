import React from 'react'
import "./Footer.css";
import img1 from '../static/images/flag1.png'

const Footer = () => {
  return (
    <>
    
        <div className='container-fluid '>


            <div className='row footer'> 
            
                <div className='col-lg-4 col-sm-12 footer-img'>

                    <img src={img1} />  

                </div>
                <div className='col-lg-4 col-sm-12 footer-info'>

                    <h1> Get In Touch</h1>
                    <div className='address'>

                        <p>64 Lombardy Crescent, Scarborough, <br />ON M1K 4N9</p>

                    </div>
                    <div className='email'>
                        bhirkuticontact@gmail.com
                    </div>
                    <div className='contact'>
                        +16479393389
                    </div>
                    <div className='social'>
                        <a className="btn btn-social" href="#"><i className="fa-brands fa-facebook"></i></a>
                        <a className="btn btn-social" href="#"><i className="fa-brands fa-instagram"></i></a>
                        <a className="btn btn-social" href="#"><i className="fa-brands fa-linkedin"></i></a>
                    </div>

                </div>
                <div className='col-lg-4 col-sm-12 footer-links'>

                    <h1>Quick Links</h1>
                    <div className='links'>

                        <a className="ql" href="#"><i className="fa-solid fa-arrow-right-long"></i>Home</a>
                        <a className="ql" href="#"><i className="fa-solid fa-arrow-right-long"></i>About</a>
                        <a className="ql" href="#"><i className="fa-solid fa-arrow-right-long"></i>Contact</a>
                        <a className="ql" href="#"><i className="fa-solid fa-arrow-right-long"></i>Services</a>
                        <a className="ql" href="#"><i className="fa-solid fa-arrow-right-long"></i>Log In</a>
                        

                    </div>

                </div>
            
            </div>
            <div className='row mt-5'>

                <div className='col-md-12 col-sm-12 text-center copyright'>

                    <p>&copy; Bhirkuti 2023 all right reserved!</p>


                </div>


            </div>

        </div>

    </>
    
  );
}

export default Footer;