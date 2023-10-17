import React, { Fragment } from "react";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import "./Contact.css";
import img1 from "../../../images/1.png";
import img2 from "../../../images/2.png";
import img3 from "../../../images/3.png";

const Contact = () => {
  return (
    <Fragment>
      <section id="page-header" className="about-header">
        <h2>#let's_talk</h2>
        <p>LEAVE A MESSAGE, We love to hear from you!</p>
      </section>
      <section id="contact-details" className="section-p1">
        <div className="details">
          <span>GET IN TOUCH</span>
          <h2>Visit one of our agency locations or contact us today</h2>
          <h3>Head Office</h3>
          <div>
            <li>
              <MapOutlinedIcon />
              <p> 70 Milestone, Grand Trunk Rd, Samalkha, Haryana 132102</p>
            </li>
            <li>
              <EmailOutlinedIcon />
              <p>geekisaprogrammer@gmail.com</p>
            </li>
            <li>
              <LocalPhoneOutlinedIcon />
              <p>+91 70044 96244</p>
            </li>
            <li>
              <AccessTimeOutlinedIcon />
              <p>Monday to Saturday: 9.00am to 16.pm</p>
            </li>
          </div>
        </div>
        <div className="map">
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3482.4244539708784!2d77.01388317617916!3d29.211067157572963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390dc89b535e9757%3A0x9154ba66a1839189!2sP.I.E.T%20-%20Panipat%20Institute%20of%20Engineering%20%26%20Technology!5e0!3m2!1sen!2sin!4v1685019117390!5m2!1sen!2sin"
            width="600"
            height="450"
            style={{
              border: 0,
            }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
      <div id="form-details">
        <form action="">
          <span>LEAVE A MESSAGE</span>
          <h2>WE love to hear from you</h2>
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="E-mail" />
          <input type="text" placeholder="Subject" />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Your Message"
          ></textarea>
          <button className="normal">Submit</button>
        </form>
        <div className="people">
          <div>
            <img src={img1} alt="" />
            <p>
              <span>John Doe </span>Senior Marketing Manager <br /> Phone: + 000
              123 000 77 88 <br />
              Email: contact@example.com
            </p>
          </div>
          <div>
            <img src={img2} alt="" />
            <p>
              <span>William Smith </span>Senior Marketing Manager <br /> Phone: +
              000 123 000 77 88 <br />
              Email: contact@example.com
            </p>
          </div>
          <div>
            <img src={img3} alt="" />
            <p>
              <span>Emma Stone </span>Senior Marketing Manager <br /> Phone: +
              000 123 000 77 88 <br />
              Email: contact@example.com
            </p>
          </div>
        </div>
      </div>
      section
    </Fragment>
  );
};

export default Contact;
