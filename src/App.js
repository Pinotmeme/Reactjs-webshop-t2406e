// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomePage from './pages/HomePage';
import CategoryPage from './pages/CategoryPage';
import ProductDetail from './pages/ProductDetail';
// import CartPage from './pages/CartPage';
// import ContactPage from './pages/ContactPage';
// import LoginPage from './pages/LoginPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/categories/:id" element={<CategoryPage />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        {/* <Route path="/cart" element={<CartPage />} /> */}
        {/* <Route path="/contact" element={<ContactPage />} /> */}
        {/* <Route path="/login" element={<LoginPage />} /> */}
      </Routes>
      <Footer />
    </Router>
  );
}
// xin chao
export default App;