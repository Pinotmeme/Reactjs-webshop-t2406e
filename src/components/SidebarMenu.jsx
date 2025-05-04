import React from "react";
import { ListGroup } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import categories from "../data/categories";

const SidebarMenu = () => {
  const navigate = useNavigate();
  const { slug } = useParams();

  return (
    <>
      <h5 className="mb-3 fw-semibold">Danh mục sản phẩm</h5>
      <ListGroup>
        {categories.map((cat) => (
          <ListGroup.Item
            key={cat.slug}
            action
            active={slug === cat.slug}
            onClick={() => navigate(`/${cat.slug}`)}
          >
            {cat.name}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </>
  );
};

export default SidebarMenu;
