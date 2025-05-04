// slide danh muc san pham
import React from "react";
import { Card, Carousel, Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./CategoriesSlider.css";

const CategoriesSlider = () => {
  const navigate = useNavigate();

  const categories = [
    { id: 1, name: "Cây giống", slug: "cay-giong", image: "/images/hero_1.jpg" },
    { id: 2, name: "Chậu trồng cây", slug: "chau-trong-cay", image: "/images/hero_2.jpg" },
    { id: 3, name: "Dụng cụ làm vườn", slug: "dung-cu-lam-vuon", image: "/images/hero_3.jpg" },
    { id: 4, name: "Đất trồng cây", slug: "dat-trong-cay", image: "/images/hero_1.jpg" },
    { id: 5, name: "Hạt giống", slug: "hat-giong", image: "/images/hero_2.jpg" },
    { id: 6, name: "Phân bón dưỡng chất", slug: "phan-bon-duong-chat", image: "/images/hero_3.jpg" },
    { id: 7, name: "Thiết bị tưới", slug: "thiet-bi-tuoi", image: "/images/hero_1.jpg" },
    { id: 8, name: "Thủy sinh", slug: "thuy-sinh", image: "/images/hero_3.jpg" },
    { id: 9, name: "Trang trí sân vườn", slug: "trang-tri-san-vuon", image: "/images/hero_2.jpg" }
  ];

  const handleCategoryClick = (slug) => {
    navigate(`/${slug}`);
  };

  // Group categories into arrays of 4 categories each
  const chunkedCategories = [];
  for (let i = 0; i < categories.length; i += 4) {
    chunkedCategories.push(categories.slice(i, i + 4));
  }

  const carouselRef = React.useRef();

  return (
    <section className="category-slider py-5 bg-light">
      <Container className="position-relative">
        <div className="d-flex justify-content-between align-items-center mb-4 section-title">
          <h2 className="h4 mb-0 text-muted">
            <i className="bi bi-tags me-2"></i>
            DANH MỤC SẢN PHẨM
          </h2>
        </div>

        <div className="position-relative">
          <Button
            variant="primary"
            className="rounded-circle nav-position nav-left"
            onClick={() => carouselRef.current.prev()}
          >
            <i className="bi bi-chevron-left"></i>
          </Button>

          <Button
            variant="primary"
            className="rounded-circle nav-position nav-right"
            onClick={() => carouselRef.current.next()}
          >
            <i className="bi bi-chevron-right"></i>
          </Button>

          <Carousel
            indicators={false}
            controls={false}
            interval={null}
            pause="hover"
            className="custom-carousel"
            ref={carouselRef}
          >
            {chunkedCategories.map((group, index) => (
              <Carousel.Item key={index}>
                <div className="row mt-3">
                  {group.map((category) => (
                    <div
                      key={category.id}
                      className="col-12 col-sm-6 col-md-3 mb-4"
                    >
                      <Card
                        className="border-0 bg-transparent h-100 category-card"
                        onClick={() => handleCategoryClick(category.slug)}
                      >
                        <div className="ratio ratio-1x1 overflow-hidden rounded-4">
                          <Card.Img
                            variant="top"
                            src={category.image}
                            alt={category.name}
                            className="object-fit-cover category-card-img"
                          />
                        </div>
                        <Card.Body className="text-center p-2">
                          <Card.Title className="h6 mb-0 text-dark">
                            {category.name}
                          </Card.Title>
                        </Card.Body>
                      </Card>
                    </div>
                  ))}
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </Container>
    </section>
  );
};

export default CategoriesSlider;
