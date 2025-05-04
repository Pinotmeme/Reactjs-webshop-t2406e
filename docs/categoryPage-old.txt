import React, { useEffect, useMemo, useState } from 'react'
import { Container, Row, Col, ListGroup } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import "./CategoryPage.css";
import content from '../../data/content.json';
import { getAllProducts } from '../../api/fetchProduct';
import { useDispatch, useSelector } from 'react-redux';
const categories = content?.categories;

 
const CategoryPage = ({categoryType}) => {
  const navigate = useNavigate();
  const { slug } = useParams();

  // ✅ Thêm state lưu option sắp xếp
  const [sortOption, setSortOption] = React.useState("default");

  const categoryData = useSelector((state)=> state?.categoryState?.categories);
  const [products,setProducts] = useState([]);

  const categoryContent = useMemo(()=>{
    return categories?.find((category)=> category.code === categoryType);
  },[categoryType]);
  
  const productListItems = useMemo(()=>{
    return content?.products?.filter((product)=> product?.category_id === categoryContent?.id );
  },[categoryContent]);

  const category = useMemo(()=>{
    return categoryData?.find(element => element?.code === categoryType);
  },[categoryData, categoryType]);

  useEffect(()=>{
    getAllProducts(category?.id).then(res=>{
      setProducts(res);
    }).catch(err=>{
      
    }).finally(()=>{
    })
    
  },[category?.id]);



  // ✅ Hàm sắp xếp theo lựa chọn người dùng
  const sortedProducts = React.useMemo(() => {
    const products = []; // sao chép để không làm thay đổi dữ liệu gốc
    switch (sortOption) {
      case "price_asc":
        return products.sort((a, b) => a.price - b.price);
      case "price_desc":
        return products.sort((a, b) => b.price - a.price);
      case "newest":
        return products; // cần thêm field "createdAt"
      case "bestseller":
        return products; // cần thêm field "sold"
      default:
        return products;
    }
  }, [sortOption]);

  return (
    <Container className="py-4">
      <Row>
        {/* Sidebar menu */}
        <Col md={3}>
          <h5 className="mb-3 fw-semibold">Danh mục sản phẩm</h5>
          <ListGroup>
            {categories.map((cat) => (
              <ListGroup.Item
                key={cat.slug}
                action
                active={slug === cat.slug}
                onClick={() => navigate(`/home/${cat.slug}`)}
              >
                {cat.name}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>

        {/* Product area */}
        <Col md={9}>
          <div className="d-flex align-items-center justify-content-between mb-3">
            <h4 className="mb-0 text-dark text-capitalize">
              {categories.find((c) => c.slug === slug)?.name || "Danh mục"}
            </h4>

            <select
              className="form-select w-auto"
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
            >
              <option value="default">Sắp xếp theo</option>
              <option value="price_asc">Giá: Thấp → Cao</option>
              <option value="price_desc">Giá: Cao → Thấp</option>
              <option value="newest">Mới nhất</option>
              <option value="bestseller">Bán chạy</option>
            </select>
          </div>
          <Row>
            {sortedProducts.map((product, index) => (
              <Col xs={6} md={3} key={index} className="mb-4">
                <div className="text-center border rounded p-2 h-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="img-fluid rounded mb-2"
                  />
                  <div className="fw-semibold">{product.name}</div>
                  <div className="text-success">
                    {typeof product.price === "string"
                      ? product.price
                      : product.price.toLocaleString("vi-VN") + " đ"}
                  </div>
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


