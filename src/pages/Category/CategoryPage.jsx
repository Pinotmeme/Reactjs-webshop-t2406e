import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import SidebarMenu from "../../components/SidebarMenu";
import categories from "../../data/categories"; // Import danh sách danh mục từ file categories.js
import "./CategoryPage.css";

const CategoryPage = () => {
  const navigate = useNavigate();

  return (
    <Container className="py-4">
      <Row>
        {/* Sidebar menu */}
        <Col md={3}>
          <SidebarMenu />
        </Col>

        {/* Grid danh mục */}
        <Col md={9}>
          <h4 className="mb-4 text-dark">Tất cả danh mục</h4>
          <Row>
            {categories.map((category, index) => (
              <Col xs={6} md={4} lg={3} key={index} className="mb-4">
                <div
                  className="text-center rounded p-2 h-100 category-card"
                  onClick={() => navigate(`/${category.slug}`)}
                  style={{ cursor: "pointer" }}
                >
                  <img
                    src={category.image}
                    alt={category.name}
                    className="img-fluid rounded mb-2"
                  />
                  <div className="fw-semibold">{category.name}</div>
                </div>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default CategoryPage;
