import React, { useState, useEffect } from "react";

const Header = () => {
  // Trạng thái để theo dõi trạng thái mở/đóng của menu trên thiết bị di động
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  // useEffect hook để thêm/xóa class 'mobile-nav-active' vào body khi trạng thái menu thay đổi
  useEffect(() => {
    if (isMobileNavOpen) {
      document.body.classList.add("mobile-nav-active");
    } else {
      document.body.classList.remove("mobile-nav-active");
    }

    // Cleanup function để đảm bảo class 'mobile-nav-active' được xóa khi component unmount
    return () => {
      document.body.classList.remove("mobile-nav-active");
    };
  }, [isMobileNavOpen]);

  // Hàm để thay đổi trạng thái của menu trên thiết bị di động
  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  return (
    <header
      id="header"
      className="header d-flex align-items-center position-relative"
    >
      <div className="container-fluid container-xl position-relative d-flex align-items-center justify-content-between">
        <a href="/" className="logo d-flex align-items-center">
          <img src="/images/logo.png" alt="logo" />
        </a>

        <nav id="navmenu" className="navmenu">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">Product</a>
            </li>
            <li>
              <a href="#">Cart</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
            <li>
              <a href="/login">Login</a>
            </li>
          </ul>
          {/* Icon để mở/đóng menu trên thiết bị di động, chỉ hiển thị khi màn hình nhỏ hơn xl */}
          <i
            className="mobile-nav-toggle d-xl-none bi bi-list"
            onClick={toggleMobileNav}
          ></i>
        </nav>
      </div>
    </header>
  );
};

export default Header;