import "./styles/indexHome.css";
import "./styles/slick.css";
import "./styles/bootstrap.min.css";
import "./styles/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";

import "./fonts/bootstrap-icons.woff";
import "./fonts/bootstrap-icons.woff2";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminLayout from "./admin/AdminLayout";
import Admin from "./admin/Manufacturer"; // Adjust the path if needed
import Home from "./pages/Home";
import Header from "./component/Header";
import Footer from "./component/Footer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin" element={<AdminLayout />} />
        {/* <Route path="/admin/manufacturer" element={<Manufactuer />}/> */}
        <Route path="/" element={<Home />} />
        <Route path="/component/Header" element={<Header />} />``
        <Route path="/component/Footer" element={<Footer />} />

      </Routes>
    </BrowserRouter>
  );
  
}

export default App;
