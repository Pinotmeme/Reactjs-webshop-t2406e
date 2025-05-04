//Nút cuộn đầu trang
//gọi vào import ScrollToTopButton from "../components/ScrollTopBtn/ScrollTopBtn";
// và thêm <ScrollToTopButton /> vào trong return của HomePage.jsx
import React, { useState, useEffect } from "react";

const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setShowButton(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    showButton && (
      <button
        onClick={scrollToTop}
        className="btn btn-primary rounded-circle position-fixed"
        style={{
          bottom: "20px",
          right: "20px",
          width: "45px",
          height: "45px",
          zIndex: 999,
        }}
        aria-label="Scroll to top"
      >
        <i className="bi-chevron-up"></i>
      </button>
    )
  );
};

export default ScrollToTopButton;
