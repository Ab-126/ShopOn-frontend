import React, { Fragment, useEffect } from "react";
import "./Home.css";
import f1 from "../../images/f1.png";
import f2 from "../../images/f2.png";
import f3 from "../../images/f3.png";
import f4 from "../../images/f4.png";
import f5 from "../../images/f5.png";
import f6 from "../../images/f6.png";
import MetaData from "../layout/MetaData";
import { clearErrors, getProduct } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../layout/Loader/Loader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProductCard from "./ProductCard.jsx";
import { Rating } from "@mui/material";
import img1 from "../../images/n1.jpg";
import img2 from "../../images/n2.jpg";
import img3 from "../../images/n3.jpg";
import img4 from "../../images/n4.jpg";
import img5 from "../../images/n5.jpg";
import img6 from "../../images/n6.jpg";
import img7 from "../../images/n7.jpg";
import img8 from "../../images/n8.jpg";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const Home = () => {
  const dispatch = useDispatch();
  const { loading, error, products } = useSelector((state) => state.products);

  const options = {
    size: "medium",
    value: 3.5,
    readOnly: true,
    precision: 0.5,
  };

  useEffect(() => {
    if (error) {
      toast.error(error, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
      dispatch(clearErrors());
    }
    dispatch(getProduct());
  }, [dispatch, error]);
  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title="ShopOn" />
          <div className="banner" id="hero">
            <h4>Trade-in-offer</h4>
            <h2>Super value deals</h2>
            <h1>On all products</h1>
            <p>Save more with coupons & up to 70% off! </p>
            <a href="#container">
              <button>Shop Now</button>
            </a>
          </div>
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
          <section id="product1" className="section-p1">
            <h2>Featured Products</h2>
            <div className="pro-container">
              {products &&
                products.map((product) => (
                  <div className="pro">
                    {" "}
                    <ProductCard product={product} />{" "}
                  </div>
                ))}
            </div>
          </section>
          <section id="banner" className="section-m1">
            <h4>Repair Service</h4>
            <h2>
              Up to <span>70% off</span> - All t-shirts & Accessories
            </h2>
            <button className="normal">Explore More</button>
          </section>
          <section id="product1" className="section-p1">
            <h2>New Arrivals</h2>
            <p>Summer Collection New Mordern Design</p>
            <div className="pro-container">
              <div className="pro">
                <img src={img1} alt="" />
                <div className="des">
                  <h5>Cartoon Astronaut T-Shirt</h5>
                  <div className="star">
                    <Rating {...options} />{" "}
                  </div>
                  <h4>₹599</h4>
                </div>
                <a href="/#" className="cart">
                  <ShoppingCartOutlinedIcon />
                </a>
              </div>
              <div className="pro">
                <img src={img2} alt="" />
                <div className="des">
                  <h5>Cartoon Astronaut T-Shirt</h5>
                  <div className="star">
                    <Rating {...options} />{" "}
                  </div>
                  <h4>₹599</h4>
                </div>
                <a href="/#" className="cart">
                  <ShoppingCartOutlinedIcon />
                </a>
              </div>
              <div className="pro">
                <img src={img3} alt="" />
                <div className="des">
                  <h5>Cartoon Astronaut T-Shirt</h5>
                  <div className="star">
                    <Rating {...options} />{" "}
                  </div>
                  <h4>₹599</h4>
                </div>
                <a href="/#" className="cart">
                  <ShoppingCartOutlinedIcon />
                </a>
              </div>
              <div className="pro">
                <img src={img4} alt="" />
                <div className="des">
                  <h5>Cartoon Astronaut T-Shirt</h5>
                  <div className="star">
                    <Rating {...options} />{" "}
                  </div>
                  <h4>₹599</h4>
                </div>
                <a href="/#" className="cart">
                  <ShoppingCartOutlinedIcon />
                </a>
              </div>
              <div className="pro">
                <img src={img5} alt="" />
                <div className="des">
                  <h5>Cartoon Astronaut T-Shirt</h5>
                  <div className="star">
                    <Rating {...options} />{" "}
                  </div>
                  <h4>₹599</h4>
                </div>
                <a href="/#" className="cart">
                  <ShoppingCartOutlinedIcon />
                </a>
              </div>
              <div className="pro">
                <img src={img6} alt="" />
                <div className="des">
                  <h5>Cartoon Astronaut T-Shirt</h5>
                  <div className="star">
                    <Rating {...options} />{" "}
                  </div>
                  <h4>₹599</h4>
                </div>
                <a href="/#" className="cart">
                  <ShoppingCartOutlinedIcon />
                </a>
              </div>
              <div className="pro">
                <img src={img7} alt="" />
                <div className="des">
                  <h5>Cartoon Astronaut T-Shirt</h5>
                  <div className="star">
                    <Rating {...options} />{" "}
                  </div>
                  <h4>₹599</h4>
                </div>
                <a href="/#" className="cart">
                  <ShoppingCartOutlinedIcon />
                </a>
              </div>
              <div className="pro">
                <img src={img8} alt="" />
                <div className="des">
                  <h5>Cartoon Astronaut T-Shirt</h5>
                  <div className="star">
                    <Rating {...options} />{" "}
                  </div>
                  <h4>₹599</h4>
                </div>
                <a href="/#" className="cart">
                  <ShoppingCartOutlinedIcon />
                </a>
              </div>
            </div>
          </section>
          <section id="sm-banner" className="section-p1">
            <div className="banner-box">
              <h4>crazy deals</h4>
              <h2>buy 1 get 1 free</h2>
              <span>The best classic dress is on sale at ShopOn</span>
              <button className="white">Learn More</button>
            </div>
            <div className="banner-box banner-box2">
              <h4>spring summer</h4>
              <h2>upcoming season</h2>
              <span>The best classic dress is on sale at ShopOn</span>
              <button className="white">Collections</button>
            </div>
          </section>
          <section id="banner3">
            <div className="banner-box">
              <h2>SEASON SALE</h2>
              <h3>Winter Collection - 50% OFF</h3>
            </div>
            <div className="banner-box banner-box2">
              <h2>NEW FOOTWEAR COLLECTION</h2>
              <h3>Spring / Summer 2022</h3>
            </div>
            <div className="banner-box banner-box3">
              <h2>T-SHIRTS</h2>
              <h3>New Trendy Prints</h3>
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

          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
        </Fragment>
      )}
    </Fragment>
  );
};

export default Home;
