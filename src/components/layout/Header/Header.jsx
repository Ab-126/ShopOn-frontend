import React, { Fragment, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { RiAppsLine } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";
import "./Header.css";
import { useSelector } from "react-redux";

const Header = () => {
  const [active, setActive] = useState(false);

  const location = useLocation();
  const menuDisplay = () => {
    setActive((active) => !active);
  };

  const { isAutheticated, loading } = useSelector((state) => state.user);

  return (
    <Fragment>
      {!loading && (
        <section id="header">
          <h3 className="logo">ShopOn</h3>
          <div>
            <ul className={active ? "active" : ""} id="navbar">
              <li>
                <Link
                  className={location.pathname === "/" ? "active" : ""}
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className={location.pathname === "/products" ? "active" : ""}
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className={location.pathname === "/about" ? "active" : ""}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className={location.pathname === "/contact" ? "active" : ""}
                >
                  Contact
                </Link>
              </li>
              <li id="lg-bag">
                <Link
                  to="/cart"
                  className={location.pathname === "/cart" ? "active" : ""}
                >
                  <FiShoppingCart />
                </Link>
              </li>
              <Link href="#">
                <AiOutlineClose id="close" onClick={menuDisplay} />
              </Link>
              <Link className={location.pathname === "/search"} to="/search">
                <FaSearch id="search" />
              </Link>
              <div className="buttonGroup">
                {!isAutheticated && (
                  <button>
                    <Link to="/login">Login/SignUp</Link>
                  </button>
                )}
              </div>
            </ul>
          </div>
          <div id="mobile">
            <Link to="/cart">
              <FiShoppingCart />
            </Link>
            <Link to="/search">
              <FaSearch />
            </Link>
            <RiAppsLine onClick={menuDisplay} />
          </div>
        </section>
      )}
    </Fragment>
  );
};

export default Header;
