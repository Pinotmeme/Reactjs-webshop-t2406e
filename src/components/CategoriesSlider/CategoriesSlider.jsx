// components/CategoriesSlider/index.jsx
import React from "react";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "bootstrap-icons/font/bootstrap-icons.css"; 
import "./CategoriesSlider.css";

const CategoriesSlider = () => {
  const navigate = useNavigate(); // Khởi tạo hook điều hướng

  // Danh sách các danh mục sản phẩm
  const categories = [
    { id: 1, name: "Cây để bàn", image: "/images/hero_1.jpg" },
    { id: 2, name: "Cây nội thất", image: "/images/hero_2.jpg" },
    { id: 3, name: "Cây phong thủy", image: "/images/hero_3.jpg" },
    { id: 4, name: "Chậu cảnh", image: "/images/hero_1.jpg" },
    { id: 5, name: "Chậu cảnh mini", image: "/images/hero_1.jpg" },
    { id: 6, name: "Cây treo tường", image: "/images/hero_2.jpg" },
    { id: 7, name: "Cây ngoài trời", image: "/images/hero_3.jpg" },
    { id: 8, name: "Cây thủy sinh", image: "/images/hero_1.jpg" },
  ];

  const handleCategoryClick = (categoryId) => {
    // Điều hướng sang trang danh mục với ID tương ứng
    navigate(`/categories/${categoryId}`);
  };

  return (
    <section className="categories-slider py-5">
      <div className="container">
        <h2 className="mb-4">
          <i className="bi bi-arrow-right-circle"></i> Danh mục loại sản phẩm 
        </h2>
        <div className="categories-scroll-container">
          {categories.map((category) => (
            <div
              key={category.id}
              className="category-item mt-4"
              onClick={() => handleCategoryClick(category.id)} // Gọi hàm điều hướng khi bấm
              style={{ cursor: "pointer" }} // Thêm con trỏ chuột để hiển thị có thể bấm
            >
              <Card className="category-card">
                <Card.Img variant="top" src={category.image} />
                <Card.Body>
                  <Card.Title>{category.name}</Card.Title>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSlider;
