import React from 'react';
import '../Css/Footer.css';
import { Link } from 'react-router-dom';
// import { FaWhatsapp, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";
import { Github, Linkedin, Mail,User } from 'lucide-react';

import imglogo1 from '../assets/home_img/imglogo1.avif'


const Footer = () => {
  return (
    <footer className='footercontent'>
      <div className='container-fluid pt-2'>
        <div className='container pt-3'>
          <div className='row row-cols-1 row-cols-md-2 row-cols-lg-4'>

            {/* Logo and Social Media */}
            <div className='col mt-2 mb-3'>
              <Link to='/' className='text-decoration-none'>
                <img
                  id='footimage1'
                  src={imglogo1}
                  className='border border-primary border-3'
                  alt='ADmart Logo'
                />
              </Link>
              <h5>Follow us on social media</h5>
              <div className='social-icons'>
                <div className="d-flex justify-content-center gap-3 mb-4 mt-3">
                  <a href='https://github.com/Arutselvan14/project_Ecommerce' target="_blank" className="social-icon">
                    <Github size={30} />
                  </a>
                  <a href="https://www.linkedin.com/in/arutselvan-p-034324338" target="_blank" className="social-icon">
                    <Linkedin size={30} />
                  </a>
                  <a href="mailto:parutselvan2710@gmail.com" target="_blank" className="social-icon">
                    <Mail size={30} />
                  </a>
                  <a href="https://portfolio-arutselvan.netlify.app/" target="_blank"><User size={30} /></a>
                </div>

                {/* <FaWhatsapp  size={28}  className='me-3 icon1' />
                <FaEnvelope  size={28} className='me-3 icon2' />
                <FaPhone  size={23}  className='me-3 icon3' />
                <FaLinkedin href='google.com'  size={28} className='me-3 icon4' /> */}

              </div>
            </div>

            {/* About Section */}
            <div className='col mt-2 mb-3'>
              <h5>About</h5>
              <ul className='list-unstyled text-light'>
                <li><Link to='/about' className='text-decoration-none text-light'>About Us</Link></li>
                <li><Link to='/grocery' className='text-decoration-none text-light'>Foods</Link></li>
                <li><Link to='/electronics' className='text-decoration-none text-light'>Electronics</Link></li>
                <li><Link to='/fashion' className='text-decoration-none text-light'>Fashion</Link></li>
              </ul>
            </div>

            {/* Group Companies */}
            <div className='col mt-2 mb-3'>
              <h5>Group Companies</h5>
              <ul className='list-unstyled text-light'>
                <li>DA'S CARES</li>
                <li>NexTBites</li>
                <li>ShinyCart</li>
                <li>FryTime</li>
              </ul>
            </div>

            {/* Subscription Section */}
            <div className='col mt-2 mb-3'>
              <h5>Subscribe to Us</h5>
              <p>Stay updated with our latest news and offers</p>
              <form>
                <input type='email' placeholder='Enter Email Address' className='form-control mb-2' />
                <button className='btn btn-success text-white'>Subscribe</button>
              </form>
            </div>
          </div>

          <hr />
          <div className='text-center'>
            <p>Copyright &copy; 2025 ADmart eCommerce Website</p>
            <p>Designed by <strong>Arutselvan</strong></p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

