// trang contact cho khách hàng
import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import {
  BsPersonFill,
  BsTelephoneFill,
  BsBriefcaseFill,
  BsHeadset,
} from "react-icons/bs";

const supportStaff = [
  { name: "Nguyễn Văn A", phone: "0123 456 789" },
  { name: "Trần Thị B", phone: "0987 654 321" },
  { name: "Lê Văn C", phone: "0912 345 678" },
  { name: "Phạm Thị D", phone: "0909 888 777" },
];

const ContactPage = () => {
  // Khai báo state cho form
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });
  // Khai báo state cho lỗi
  const [errors, setErrors] = useState({});
  // Hàm kiểm tra lỗi
  const validateForm = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Vui lòng nhập họ tên.";
    if (!form.phone.trim()) {
      newErrors.phone = "Vui lòng nhập số điện thoại.";
    } else if (!/^\d+$/.test(form.phone)) {
      newErrors.phone = "Số điện thoại chỉ được chứa chữ số.";
    }
    return newErrors;
  };
  // Hàm xử lý submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      alert("Thông tin đã được gửi thành công!");
      // Gửi dữ liệu ở đây (nếu cần)
    }
  };
  // Hàm xử lý thay đổi input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  //Form nhập thông tin liên hệ
  return (
    <Container className="my-5">
      <h2 className="mb-4 text-center">Liên hệ với chúng tôi</h2>

      {/* Form + Map */}
      <Row>
        <Col md={6}>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Họ tên</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nhập họ tên"
                className="rounded"
                name="name"
                value={form.name}
                onChange={handleChange}
                isInvalid={!!errors.name}
              />
              <Form.Control.Feedback type="invalid">
                {errors.name}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Nhập email"
                className="rounded"
                name="email"
                value={form.email}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Số điện thoại</Form.Label>
              <Form.Control
                type="tel"
                placeholder="Nhập số điện thoại"
                className="rounded"
                value={form.phone}
                name="phone"
                onChange={handleChange}
                isInvalid={!!errors.phone}
              />
              <Form.Control.Feedback type="invalid">
                {errors.phone}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Tiêu đề</Form.Label>
              <Form.Control
                type="text"
                placeholder="Tiêu đề nội dung"
                className="rounded"
                name="subject"
                value={form.subject}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Chi tiết</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                placeholder="Nhập nội dung chi tiết"
                className="rounded"
                name="message"
                value={form.message}
                onChange={handleChange}
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="rounded">
              Gửi liên hệ
            </Button>
          </Form>
        </Col>

        <Col md={6}>
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.5114659405985!2d105.7323471149299!3d21.05251438598826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab0f3726bbbd%3A0xfcb65ac7fdbdf3d5!2zSOG7kyBUaOG7pyBUaG_DoCBOZ2hp4buHcCBWxINuIENodXnhu4FuZw!5e0!3m2!1svi!2s!4v1663161466846!5m2!1svi!2s"
            width="100%"
            height="100%"
            style={{ border: 0, borderRadius: "8px" }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </Col>
      </Row>

      {/* Nhân viên hỗ trợ */}
      <Row className="text-center my-5">
        {/* lặp qua mảng SupportStaff, mỗi phần tử là 1 nhân viên (stall) */}
        {supportStaff.map((staff, idx) => (
          <Col xs={6} md={3} key={idx}>
            <BsPersonFill size={50} className="text-primary mb-2" />
            {/* gọi tên nhân viên từ mảng */}
            <div className="fw-semibold">{staff.name}</div>
            <div>
              <BsTelephoneFill className="me-1" />
              {/* gọi số điện thoại từ mảng */}
              {staff.phone}
            </div>
          </Col>
        ))}
      </Row>

      {/* Bộ phận liên hệ */}
      <Row className="text-center">
        <Col md={6} className="mb-4">
          <div className="border p-4 h-100 rounded">
            <BsBriefcaseFill size={30} className="text-success mb-2" />
            <h5 className="text-primary">Bộ phận kinh doanh</h5>
            <h5>Email: kinhdoanh@congty.com</h5>
            <h5>Hotline: 0909 000 111</h5>
          </div>
        </Col>
        <Col md={6} className="mb-4">
          <div className="border p-4 h-100 rounded">
            <BsHeadset size={30} className="text-info mb-2" />
            <h5 className="text-primary">Bộ phận hỗ trợ khách hàng</h5>
            <h5>Email: hotro@congty.com</h5>
            <h5>Hotline: 0933 111 222</h5>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactPage;
