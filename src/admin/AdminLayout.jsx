import { Outlet, Link } from "react-router-dom";

const AdminLayout = () => {
  return (
    <>
      <div class="ui inverted left vertical sidebar menu huge">
        <a class="item">
          <i class="home icon"></i>
          Dashboard
        </a>
        <a class="item">
          <i class="icon cog"></i>
          Cài Đặt
        </a>
        <a class="item">
          <i class="icon user"></i>
          Nhân Viên
        </a>
        <a class="item">
          <i class="home icon"></i>
          Quảng Cáo
        </a>
        <a class="item">
          <i class="icon comment alternate"></i>
          Phản Hồi
        </a>
        <a class="item">
          <i class="icon smile"></i>
          Khách Hàng
        </a>
        <a class="item">
          <i class="icon smile"></i>
          Đơn Hàng
        </a>
        <a class="item">
          <i class="calendar icon"></i>
          Nhà Sản Xuất
        </a>
        <a class="item">
          <i class="calendar icon"></i>
          Thể Loại
        </a>
        <a class="item">
          <i class="calendar icon"></i>
          Sản Phẩm
        </a>
      </div>
      <div class="pusher">
        <div class="ui stackable menu pointing huge">
          <a class="item header toggle button">☰ Admin Panel</a>

          <div class="ui dropdown item">
            <input type="hidden" name="gender" />
            <i class="dropdown icon"></i>
            <div class="default text">Hệ Thống</div>
            <div class="menu">
              <div class="item"><a href="/admin/caidat">Cài Đặt</a></div>
              <div class="item">Nhân Viên</div>
              <div class="item">Quảng Cáo</div>
              
            </div>
          </div>

          <div class="ui dropdown item inline">
            <div class="text">Khách Hàng</div>
            <i class="dropdown icon"></i>
            <div class="menu">
              <div class="header">Adjust Time Span</div>
              <div class="active item">Phản Hồi</div>
              <div class="item">Khách Hàng</div>
              <div class="item">Đơn Hàng</div>
            </div>
          </div>

          <div class="ui dropdown item inline link pointing">
            <span class="text">Kho Hàng</span>
            <i class="dropdown icon"></i>
            <div class="menu">
              <div class="header">Header_1</div>
              <div class="item">
                <i class="dropdown icon"></i>
                <span class="text">Clothing</span>
                <div class="menu">
                  <div class="header">Mens</div>
                  <div class="item">Shirts</div>
                  <div class="item">Pants</div>
                  <div class="item">Jeans</div>
                  <div class="item">Shoes</div>
                  <div class="divider"></div>
                  <div class="header">Womens</div>
                  <div class="item">Dresses</div>
                  <div class="item">Shoes</div>
                  <div class="item">Bags</div>
                </div>
              </div>
              <div class="divider"></div>
              <div class="item">Nhà Sản Xuất</div>
              <div class="item">Loại</div>
              <div class="header">Header_2</div>
              <div class="item">Sản Phẩm</div>
              <div class="item">Ảnh Sản Phẩm</div>
            </div>
          </div>
          <div class="right menu">
            <div class="item">
              <div class="ui transparent icon input">
                <input type="text" placeholder="Tìm..." />
                <i class="search link icon"></i>
              </div>
            </div>
            <div class="ui dropdown item inline">
              <div class="text">
                <i class="icon user"></i>Admin
              </div>
              <i class="dropdown icon"></i>
              <div class="menu">
                <div class="item">
                  <i class="icon sign out"></i>Đăng Thoát
                </div>
                <div class="item">
                  <i class="icon pencil"></i>Sửa Tài Khoản
                </div>
              </div>
            </div>
          </div>
          <div class="hamburger ">
            <span class="hamburger-bun"></span>
            <span class="hamburger-patty"></span>
            <span class="hamburger-bun"></span>
          </div>
        </div>

        <main style={{paddingLeft: '5%', paddingRight: '5%'}}>
          <Outlet />
          {/* kết xuất các thành phần khác ở đây trong layout, outlet ý là vậy */}
        </main>

        <footer>Chân tài liệu Copyright Semantic UI</footer>
      </div>
    </>
  );
};

export default AdminLayout;
