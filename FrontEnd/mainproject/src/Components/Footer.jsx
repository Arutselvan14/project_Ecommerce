import React from 'react';
import '../Css/Footer.css';
import { Link } from 'react-router-dom';
import { FaWhatsapp, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";


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
                  src='./src/assets/home_img/imglogo1.png'
                  className='border border-primary border-3'
                  alt='ADmart Logo'
                />
              </Link>
              <h5>Follow us on social media</h5>
              <div className='social-icons'>
                <FaWhatsapp  size={35} color="green" className='me-3' />
                <FaEnvelope color="orange" size={35} className='me-3' />
                <FaPhone  size={30} color="lightblue" className='me-3' />
                <FaLinkedin color="blue" size={35} className='me-3' />

              </div>
            </div>

            {/* About Section */}
            <div className='col mt-2 mb-3'>
              <h5>About</h5>
              <ul className='list-unstyled text-light'>
                <li><Link to='/about' className='text-decoration-none text-light'>About Us</Link></li>
                <li>Foods</li>
                <li>Electronics</li>
                <li>Products</li>
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
                <button className='btn btn-info text-white'>Subscribe</button>
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

