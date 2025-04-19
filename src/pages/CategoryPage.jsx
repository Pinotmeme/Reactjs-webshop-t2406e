import React from "react";
import { useParams } from "react-router-dom";

const CategoryPage = () => {
  const { id } = useParams(); // Lấy ID danh mục từ URL

  return (
    <div className="category-page">
      <h1>Danh mục sản phẩm {id}</h1>
      {/* Hiển thị sản phẩm theo danh mục */}
    </div>
  );
};

export default CategoryPage;