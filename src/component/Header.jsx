import React from "react";
import { Link } from "react-router-dom";
import Home from "../pages/Home";

const Header = () => {
  return (
    <>
      {/* <section className="preloader">
        <div className="spinner">
          <span className="sk-inner-circle"></span>
        </div>
      </section> */}

      <nav className="navbar navbar-expand-lg sticky-top navbar-light bg-light">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="navbar-toggler-icon"></i>
          </button>

          <Link className="navbar-brand" to="/">
            <strong>
              <span>Little</span> Fashion
            </strong>
          </Link>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/pages/Home">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  Story
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="/products"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Products
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/product-detail">
                      Product Detail
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/cart">
                      Cart
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/checkout">
                      Checkout
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/faq">
                  FAQs
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>

            <div className="d-none d-lg-block">
              <Link to="/sign-in" className="bi-person custom-icon me-3"></Link>
              <Link to="/product-detail" className="bi-bag custom-icon"></Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
