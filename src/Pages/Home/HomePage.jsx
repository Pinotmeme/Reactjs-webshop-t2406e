import React from 'react';
import Header from '../../Component/Header/Header'; // Corrected path
import MainContent from '../../Component/Main/MainContent'; // Fixed path
import Footer from '../../Component/Footer/Footer'; // Corrected path
import './styles/indexHome.css';
import '../../Component/Main/Main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Home = () => {
  return (
    <div>
      <Header />      {/* Phần header */}
 
      <MainContent />        {/* Nội dung chính của trang chủ */}

      <Footer />       {/* Phần footer */}

    </div>
  );
};

export default Home;
