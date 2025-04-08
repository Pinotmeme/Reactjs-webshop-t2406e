import React from "react";
// import logo from "../assets/img/logo.png"; // Adjust the path as needed

const Header = () => {
  return (
    <header
      id="header"
      className="header d-flex align-items-center position-relative"
    >
      <div className="container-fluid container-xl position-relative d-flex align-items-center justify-content-between">
        <a href="/" className="logo d-flex align-items-center">
          {/* <img src={logo} alt="AgriCulture" /> */}
        </a>

        <nav id="navmenu" className="navmenu">
          <ul>
            <li>
              <a href="/" className="active">
                Home
              </a>
            </li>
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/services">Our Services</a>
            </li>
            <li>
              <a href="/testimonials">Testimonials</a>
            </li>
            <li>
              <a href="/blog">Blog</a>
            </li>
            <li className="dropdown">
              <a href="#">
                <span>Dropdown</span>{" "}
                <i className="bi bi-chevron-down toggle-dropdown"></i>
              </a>
              <ul>
                <li>
                  <a href="#">Dropdown 1</a>
                </li>
                <li className="dropdown">
                  <a href="#">
                    <span>Deep Dropdown</span>{" "}
                    <i className="bi bi-chevron-down toggle-dropdown"></i>
                  </a>
                  <ul>
                    <li>
                      <a href="#">Deep Dropdown 1</a>
                    </li>
                    <li>
                      <a href="#">Deep Dropdown 2</a>
                    </li>
                    <li>
                      <a href="#">Deep Dropdown 3</a>
                    </li>
                    <li>
                      <a href="#">Deep Dropdown 4</a>
                    </li>
                    <li>
                      <a href="#">Deep Dropdown 5</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">Dropdown 2</a>
                </li>
                <li>
                  <a href="#">Dropdown 3</a>
                </li>
                <li>
                  <a href="#">Dropdown 4</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
          <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
        </nav>
      </div>
    </header>
  );
};

export default Header;
