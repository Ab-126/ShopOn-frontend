import React from "react";
import { FaFacebookF,FaInstagram,FaTwitter,FaPinterest,FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
import app from '../../../images/app.jpg'
import play from '../../../images/play.jpg'
import pay from '../../../images/pay.png'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="section-p1">
      <div className="col">
        <h1 className="logo">ShopOn</h1>
        <h4>Contact</h4>
        <p>
          <strong>Address: </strong> 62 Wellington Road, Street 32, San
          Francisco
        </p>
        <p>
          <strong>Phone: </strong> +01 2222 365 / (+91) 01 2345 9789
        </p>
        <p>
          <strong>Hours: </strong>24 X 7, Mon - Sat
        </p>
        <div className="follow">
          <h4>Follow Us</h4>
          <div className="icon">
            <FaFacebookF />
            <FaTwitter />
            <FaInstagram />
            <FaPinterest />
            <FaYoutube />
          </div>
        </div>
      </div>

      <div className="col">
        <h4>About</h4>
        <Link to='#'>About Us</Link>
        <Link to='#'>Delivery Information</Link>
        <Link to='#'>Privacy Policy</Link>
        <Link to='#'>Terms and Condition</Link>
        <Link to='#'>Contact Us</Link>
      </div>

      <div className="col">
        <h4>My Account</h4>
        <Link to='#'>Sign In</Link>
        <Link to='#'>View Cart</Link>
        <Link to='#'>My Wishlist</Link>
        <Link to='#'>Track My Order</Link>
        <Link to='#'>Help</Link>
      </div>

      <div className="col install">
        <h4>Install App</h4>
        <div className="row">
            <img src={app} alt="" />
            <img src={play} alt="" />
        </div>
        <p>Secured Payment Gateways</p>
        <img src={pay} alt="" />
      </div>

      <div className="copyright">
        <p>© 2023, ShopOn etc - MERN Stack Project</p>
      </div>
    </footer>
  );
};

export default Footer;
