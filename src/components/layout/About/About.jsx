import React, { Fragment } from "react";
import "./About.css";
import img1 from "../../../images/a6.jpg";
import video from "../../../videos/1.mp4";
import f1 from "../../../images/f1.png";
import f2 from "../../../images/f2.png";
import f3 from "../../../images/f3.png";
import f4 from "../../../images/f4.png";
import f5 from "../../../images/f5.png";
import f6 from "../../../images/f6.png";

const About = () => {
  return (
    <Fragment>
      <section id="page-header" className="about-header">
        <h2>#KnowUs</h2>
        <p>Lorem ipsum dolor, sit amet consectetur</p>
      </section>
      <section id="about-head" className="section-p1">
        <img src={img1} alt="" />
        <div>
          <h2>Who We Are?</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius itaque
            delectus doloremque! Aliquid eligendi est adipisci expedita eaque
            harum quas. Excepturi eligendi unde soluta ex obcaecati! Inventore
            quasi soluta sed explicabo natus error, nobis, quod reiciendis
            exercitationem sint mollitia quam rerum architecto ut. Voluptatibus
            enim magnam quasi, ratione cupiditate exercitationem.
          </p>
          <abbr title="">
            Creating stunning images with as much or as little control as you
            like thanks to a choice of Basic and Creative modes.
          </abbr>
          <br />
          <br />
          <marquee bgcolor="#ccc" loop="-1" scrollamount="5" width="100%">
            Creating stunning images with as much or as little control as you
            like thanks to a choice of Basic and Creative modes.
          </marquee>
        </div>
      </section>
      <section id="about-app" className="section-p1">
        <h1>
          Download Our <a href="/#">App</a>
        </h1>
        <div className="video">
          <video autoPlay muted loop src={video}></video>
        </div>
      </section>
      <section id="feature" className="section-p1">
        <div className="fe-box">
          <img src={f1} alt="" />
          <h6>Free Shipping</h6>
        </div>
        <div className="fe-box">
          <img src={f2} alt="" />
          <h6>Online Order</h6>
        </div>
        <div className="fe-box">
          <img src={f3} alt="" />
          <h6>Save Money</h6>
        </div>
        <div className="fe-box">
          <img src={f4} alt="" />
          <h6>Promotions</h6>
        </div>
        <div className="fe-box">
          <img src={f5} alt="" />
          <h6>Happy Sell</h6>
        </div>
        <div className="fe-box">
          <img src={f6} alt="" />
          <h6>24/7 Support</h6>
        </div>
      </section>
      <section id="newsletter" className="section-p1 section-m1">
        <div className="newstext">
          <h4>Sign Up For NewsLetter</h4>
          <p>
            Get E-mail updates about our latest shop and{" "}
            <span>special offers.</span>
          </p>
        </div>
        <div className="form">
          <input type="text" placeholder="Your email address" />
          <button className="normal">Sign Up</button>
        </div>
      </section>
    </Fragment>
  );
};

export default About;
