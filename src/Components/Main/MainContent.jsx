import React from "react";

const MainContent = () => {
  return (
    <main className="main">
      {/* Hero Section */}
      <section id="hero" className="hero section dark-background">
        <div
          id="hero-carousel"
          className="carousel slide carousel-fade"
          data-bs-ride="carousel"
          data-bs-interval="5000"
        >
          {/* Carousel Item */}
          <div className="carousel-item active">
            <img src="images/header/hero_1.jpg" alt="" />
            <div className="carousel-container">
              <h2>Farming is the best solution of worlds starvation</h2>
            </div>
          </div>

          <div className="carousel-item">
            <img src="images/header/hero_2.jpg" alt="" />
            <div className="carousel-container">
              <h2>Organic vegetables is good for health</h2>
            </div>
          </div>

          <div className="carousel-item">
            <img src="images/header/hero_3.jpg" alt="" />
            <div className="carousel-container">
              <h2>Providing Fresh Produce Every Single Day</h2>
            </div>
          </div>

          <div className="carousel-item">
            <img src="images/header/hero_4.jpg" alt="" />
            <div className="carousel-container">
              <h2>Farming as a Passione</h2>
            </div>
          </div>

          <div className="carousel-item">
            <img src="images/header/hero_5.jpg" alt="" />
            <div className="carousel-container">
              <h2>Good Food For All</h2>
            </div>
          </div>

          <a
            className="carousel-control-prev"
            href="#hero-carousel"
            role="button"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon bi bi-chevron-left"
              aria-hidden="true"
            ></span>
          </a>

          <a
            className="carousel-control-next"
            href="#hero-carousel"
            role="button"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon bi bi-chevron-right"
              aria-hidden="true"
            ></span>
          </a>

          <ol className="carousel-indicators">
            <li
              data-bs-target="#hero-carousel"
              data-bs-slide-to="0"
              className="active"
            ></li>
            <li data-bs-target="#hero-carousel" data-bs-slide-to="1"></li>
            <li data-bs-target="#hero-carousel" data-bs-slide-to="2"></li>
            <li data-bs-target="#hero-carousel" data-bs-slide-to="3"></li>
            <li data-bs-target="#hero-carousel" data-bs-slide-to="4"></li>
          </ol>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about section">
        <div className="content">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 mb-4 mb-md-0">
                <img
                  src="images/header/img_sq_5.jpg"
                  alt="Image "
                  className="img-fluid img-overlap"
                  data-aos="zoom-out"
                />
              </div>
              <div
                className="col-lg-5 ml-auto"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <h3 className="content-subtitle text-white opacity-50">
                  Why Choose Us
                </h3>
                <h2 className="content-title mb-4">
                  More than <strong>50 year experience</strong> in agriculture
                  industry
                </h2>
                <p className="opacity-50">
                  Reprehenderit, odio laboriosam? Blanditiis quae ullam quasi
                  illum minima nostrum perspiciatis error consequatur sit nulla.
                </p>

                <div className="row my-5">
                  <div className="col-lg-12 d-flex align-items-start mb-4">
                    <i className="bi bi-cloud-rain me-4 display-6"></i>
                    <div>
                      <h4 className="m-0 h5 text-white">Plants needs rain</h4>
                      <p className="text-white opacity-50">
                        Lorem ipsum dolor sit amet.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-12 d-flex align-items-start mb-4">
                    <i className="bi bi-heart me-4 display-6"></i>
                    <div>
                      <h4 className="m-0 h5 text-white">Love organic foods</h4>
                      <p className="text-white opacity-50">
                        Lorem ipsum dolor sit amet.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-12 d-flex align-items-start">
                    <i className="bi bi-shop me-4 display-6"></i>
                    <div>
                      <h4 className="m-0 h5 text-white">Sell vegies</h4>
                      <p className="text-white opacity-50">
                        Lorem ipsum dolor sit amet.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about-3" className="about-3 section">
        <div className="container">
          <div className="row gy-4 justify-content-between align-items-center">
            <div
              className="col-lg-6 order-lg-2 position-relative"
              data-aos="zoom-out"
            >
              <img
                src="images/header/img_sq_1.jpg"
                alt="Image"
                className="img-fluid"
              />
              <a
                href="https://www.youtube.com/watch?v=Y7f98aduVJ8"
                className="glightbox pulsating-play-btn"
              >
                <span className="play">
                  <i className="bi bi-play-fill"></i>
                </span>
              </a>
            </div>
            <div
              className="col-lg-5 order-lg-1"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <h2 className="content-title mb-4">Plants Make Life Better</h2>
              <p className="mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
                necessitatibus placeat, atque qui voluptatem velit explicabo
                vitae repellendus architecto provident nisi ullam minus
                asperiores commodi! Tenetur, repellat aliquam nihil illo.
              </p>
              <ul className="list-unstyled list-check">
                <li>Lorem ipsum dolor sit amet</li>
                <li>Velit explicabo vitae repellendu</li>
                <li>Repellat aliquam nihil illo</li>
              </ul>

              <p>
                <a href="#" className="btn-cta">
                  Get in touch
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="services-2" className="services-2 section dark-background">
        <div className="container section-title" data-aos="fade-up">
          <h2>Services</h2>
          <p>Necessitatibus eius consequatur</p>
        </div>

        <div className="services-carousel-wrap">
          <div className="container">
            <div className="swiper init-swiper">
              <script type="application/json" className="swiper-config">
                {JSON.stringify({
                  loop: true,
                  speed: 600,
                  autoplay: {
                    delay: 5000,
                  },
                  slidesPerView: "auto",
                  pagination: {
                    el: ".swiper-pagination",
                    type: "bullets",
                    clickable: true,
                  },
                  navigation: {
                    nextEl: ".js-custom-next",
                    prevEl: ".js-custom-prev",
                  },
                  breakpoints: {
                    320: {
                      slidesPerView: 1,
                      spaceBetween: 40,
                    },
                    1200: {
                      slidesPerView: 3,
                      spaceBetween: 40,
                    },
                  },
                })}
              </script>
              <button className="navigation-prev js-custom-prev">
                <i className="bi bi-arrow-left-short"></i>
              </button>
              <button className="navigation-next js-custom-next">
                <i className="bi bi-arrow-right-short"></i>
              </button>
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="service-item">
                    <div className="service-item-contents">
                      <a href="#">
                        <span className="service-item-category">We do</span>
                        <h2 className="service-item-title">Planting</h2>
                      </a>
                    </div>
                    <img
                      src="images/header/img_sq_1.jpg"
                      alt="Image"
                      className="img-fluid"
                    />
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="service-item">
                    <div className="service-item-contents">
                      <a href="#">
                        <span className="service-item-category">We do</span>
                        <h2 className="service-item-title">Mulching</h2>
                      </a>
                    </div>
                    <img
                      src="images/header/img_sq_3.jpg"
                      alt="Image"
                      className="img-fluid"
                    />
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="service-item">
                    <div className="service-item-contents">
                      <a href="#">
                        <span className="service-item-category">We do</span>
                        <h2 className="service-item-title">Watering</h2>
                      </a>
                    </div>
                    <img
                      src="images/header/img_sq_8.jpg"
                      alt="Image"
                      className="img-fluid"
                    />
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="service-item">
                    <div className="service-item-contents">
                      <a href="#">
                        <span className="service-item-category">We do</span>
                        <h2 className="service-item-title">Fertilizing</h2>
                      </a>
                    </div>
                    <img
                      src="images/header/img_sq_4.jpg"
                      alt="Image"
                      className="img-fluid"
                    />
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="service-item">
                    <div className="service-item-contents">
                      <a href="#">
                        <span className="service-item-category">We do</span>
                        <h2 className="service-item-title">Harvesting</h2>
                      </a>
                    </div>
                    <img
                      src="images/header/img_sq_5.jpg"
                      alt="Image"
                      className="img-fluid"
                    />
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="service-item">
                    <div className="service-item-contents">
                      <a href="#">
                        <span className="service-item-category">We do</span>
                        <h2 className="service-item-title">Mowing</h2>
                      </a>
                    </div>
                    <img
                      src="images/header/img_sq_6.jpg"
                      alt="Image"
                      className="img-fluid"
                    />
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="service-item">
                    <div className="service-item-contents">
                      <a href="#">
                        <span className="service-item-category">We do</span>
                        <h2 className="service-item-title">Seeding Plants</h2>
                      </a>
                    </div>
                    <img
                      src="images/header/img_sq_8.jpg"
                      alt="Image"
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
              <div className="swiper-pagination"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        className="testimonials-12 testimonials section"
        id="testimonials"
      >
        <div className="container section-title" data-aos="fade-up">
          <h2>TESTIMONIALS</h2>
          <p>Necessitatibus eius consequatur</p>
        </div>

        <div className="testimonial-wrap">
          <div className="container">
            <div className="row">
              <div className="col-md-6 mb-4 mb-md-4">
                <div className="testimonial">
                  <img
                    src="images/header/testimonials/testimonials-1.jpg"
                    alt="Testimonial author"
                  />
                  <blockquote>
                    <p>
                      “Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Provident deleniti iusto molestias, dolore vel fugiat ab
                      placeat ea?”
                    </p>
                  </blockquote>
                  <p className="client-name">James Smith</p>
                </div>
              </div>
              <div className="col-md-6 mb-4 mb-md-4">
                <div className="testimonial">
                  <img
                    src="images/header/testimonials/testimonials-2.jpg"
                    alt="Testimonial author"
                  />
                  <blockquote>
                    <p>
                      “Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Provident deleniti iusto molestias, dolore vel fugiat ab
                      placeat ea?”
                    </p>
                  </blockquote>
                  <p className="client-name">Kate Smith</p>
                </div>
              </div>
              <div className="col-md-6 mb-4 mb-md-4">
                <div className="testimonial">
                  <img
                    src="images/header/testimonials/testimonials-3.jpg"
                    alt="Testimonial author"
                  />
                  <blockquote>
                    <p>
                      “Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Provident deleniti iusto molestias, dolore vel fugiat ab
                      placeat ea?”
                    </p>
                  </blockquote>
                  <p className="client-name">Claire Anderson</p>
                </div>
              </div>
              <div className="col-md-6 mb-4 mb-md-4">
                <div className="testimonial">
                  <img
                    src="images/header/testimonials/testimonials-4.jpg"
                    alt="Testimonial author"
                  />
                  <blockquote>
                    <p>
                      “Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Provident deleniti iusto molestias, dolore vel fugiat ab
                      placeat ea?”
                    </p>
                  </blockquote>
                  <p className="client-name">Dan Smith</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Recent Posts Section --> */}
      <section id="recent-posts" className="recent-posts section">
        {/* <!-- Section Title --> */}
        <div className="container section-title" data-aos="fade-up">
          <h2>Recent Posts</h2>
          <p>Necessitatibus eius consequatur</p>
        </div>

        <div className="container">
          <div className="row gy-5">
            <div className="col-xl-4 col-md-6">
              <div
                className="post-item position-relative h-100"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="post-img position-relative overflow-hidden">
                  <img
                    src="images/header/blog/blog-1.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <span className="post-date">December 12</span>
                </div>

                <div className="post-content d-flex flex-column">
                  <h3 className="post-title">
                    Eum ad dolor et. Autem aut fugiat debitis
                  </h3>
                  <div className="meta d-flex align-items-center">
                    <div className="d-flex align-items-center">
                      <i className="bi bi-person"></i>{" "}
                      <span className="ps-2">Julia Parker</span>
                    </div>
                    <span className="px-3 text-black-50">/</span>
                    <div className="d-flex align-items-center">
                      <i className="bi bi-folder2"></i>{" "}
                      <span className="ps-2">Politics</span>
                    </div>
                  </div>

                  {/* <hr> */}

                  <a
                    href="blog-details.html"
                    className="readmore stretched-link"
                  >
                    <span>Read More</span>
                    <i className="bi bi-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-md-6">
              <div
                className="post-item position-relative h-100"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="post-img position-relative overflow-hidden">
                  <img
                    src="images/header/blog/blog-2.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <span className="post-date">July 17</span>
                </div>

                <div className="post-content d-flex flex-column">
                  <h3 className="post-title">
                    Et repellendus molestiae qui est sed omnis
                  </h3>
                  <div className="meta d-flex align-items-center">
                    <div className="d-flex align-items-center">
                      <i className="bi bi-person"></i>{" "}
                      <span className="ps-2">Mario Douglas</span>
                    </div>
                    <span className="px-3 text-black-50">/</span>
                    <div className="d-flex align-items-center">
                      <i className="bi bi-folder2"></i>{" "}
                      <span className="ps-2">Sports</span>
                    </div>
                  </div>

                  {/* <hr> */}

                  <a
                    href="blog-details.html"
                    className="readmore stretched-link"
                  >
                    <span>Read More</span>
                    <i className="bi bi-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>

            <div
              className="col-xl-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="post-item position-relative h-100">
                <div className="post-img position-relative overflow-hidden">
                  <img
                    src="images/header/blog/blog-3.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <span className="post-date">September 05</span>
                </div>

                <div className="post-content d-flex flex-column">
                  <h3 className="post-title">
                    Quia assumenda est et veritati tirana ploder
                  </h3>
                  <div className="meta d-flex align-items-center">
                    <div className="d-flex align-items-center">
                      <i className="bi bi-person"></i>{" "}
                      <span className="ps-2">Lisa Hunter</span>
                    </div>
                    <span className="px-3 text-black-50">/</span>
                    <div className="d-flex align-items-center">
                      <i className="bi bi-folder2"></i>{" "}
                      <span className="ps-2">Economics</span>
                    </div>
                  </div>

                  {/* <hr> */}

                  <a
                    href="blog-details.html"
                    className="readmore stretched-link"
                  >
                    <span>Read More</span>
                    <i className="bi bi-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Call To Action Section --> */}
      <section
        id="call-to-action"
        className="call-to-action section light-background"
      >
        <div className="content">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <h3>Subscribe To Our Newsletter</h3>
                <p className="opacity-50">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nesciunt, reprehenderit!
                </p>
              </div>
              <div className="col-lg-6">
                <form
                  action="forms/newsletter.php"
                  className="form-subscribe php-email-form"
                >
                  <div className="form-group d-flex align-items-stretch">
                    <input
                      type="email"
                      name="email"
                      className="form-control h-100"
                      placeholder="Enter your e-mail"
                    />
                    <input
                      type="submit"
                      className="btn btn-secondary px-4"
                      value="Subcribe"
                    />
                  </div>
                  <div className="loading">Loading</div>
                  <div className="error-message"></div>
                  <div className="sent-message">
                    Your subscription request has been sent. Thank you!
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
export default MainContent;
