import React from "react";
import { ReactNode } from "react";
import { Outlet } from "react-router-dom";


const WebsiteLayout = () => {
  return (
    <div>
      <div className="wrapper">
        <div className="sidebar">
          {/* Sidebar  */}
          <nav id="sidebar">
            <div id="dismiss">
              <i className="fa fa-arrow-left" />
            </div>
            <ul className="list-unstyled components">
              <li className="active">
                <a href="/">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="/products">Sản Phẩm</a>
              </li>
              <li>
                <a href="/signin">Đăng nhập</a>
              </li>
              <li>
                <a href="/signup">Đăng ký</a>
              </li>
            </ul>
          </nav>
        </div>
        <div id="content">
          {/* section */}
          <section id="home" className="top_section">
            <div className="row">
              <div className="col-lg-12">
                {/* header */}
                <header>
                  {/* header inner */}
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-3 logo_section">
                        <div className="full">
                          <div className="center-desk">
                            <div className="logo">
                              {" "}
                              <a href="/">
                                <img src="../images/logo.png" alt="#" />
                              </a>{" "}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-9">
                        <div className="right_header_info">
                          <ul>
                            <li>
                              <img
                                style={{ marginRight: "15px" }}
                                src="../images/phone_icon.png"
                                alt="#"
                              />
                              <a href="#">987-654-3210</a>
                            </li>
                            <li>
                              <img
                                style={{ marginRight: "15px" }}
                                src="../images/mail_icon.png"
                                alt="#"
                              />
                              <a href="#">avalon@gmail.com</a>
                            </li>
                            <li>
                             
                              <img src="../images/search_icon.png" alt="#" />
                            </li>
                            <li>
                              <button type="button" id="sidebarCollapse">
                                <img src="../images/menu_icon.png" alt="#" />
                              </button>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* end header inner */}
                </header>

                <section>
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-md-5">
                        <div className="full slider_cont_section">
                          <h4>Welcome</h4>
                          <h3>AVALON</h3>
                          <p>
                            It is a long established fact that a reader will be
                            distracted by the readable content of a page when
                            looking at its layout.
                          </p>
                          <div className="button_section">
                            <a href="#">Book Now</a>
                            <a href="about.html">About Us</a>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-7">
                        <div
                          id="slider_main"
                          className="carousel slide"
                          data-ride="carousel"
                        >
                          {/* The slideshow */}
                          <div className="carousel-inner">
                            <div className="carousel-item active">
                              <img src="../images/slider_1.png" alt="#" />
                            </div>
                            <div className="carousel-item">
                              <img src="../images/slider_2.png" alt="#" />
                            </div>
                          </div>
                          <div className="full center">
                            <a
                              className="carousel-control-prev"
                              href="#slider_main"
                              data-slide="prev"
                            >
                              <i
                                className="fa fa-angle-left"
                                aria-hidden="true"
                              />
                            </a>
                            <a
                              className="carousel-control-next"
                              href="#slider_main"
                              data-slide="next"
                            >
                              <i
                                className="fa fa-angle-right"
                                aria-hidden="true"
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                {/* end header */}
              </div>
            </div>
          </section>
          {/* end section */}
          {/* section */}
          
          <main>
             
              <Outlet/>
          </main>
          {/* footer */}
          <footer>
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <div className="full">
                    <h3>AVALON MOTORS</h3>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="full">
                    <ul className="social_links">
                      <li>
                        <a href="#">
                          <i className="fa fa-facebook-f" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-instagram" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="full">
                    <h4 className="widget_heading">SUBSCRIBE</h4>
                  </div>
                  <div className="full subribe_form">
                    <form>
                      <fieldset>
                        <div className="field">
                          <input
                            type="email"
                            name="mail"
                            placeholder="Enter your email"
                          />
                        </div>
                        <div className="field">
                          <button className="submit_bt">Sumbit</button>
                        </div>
                      </fieldset>
                    </form>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="full">
                    <h4 className="widget_heading">Usefull Links</h4>
                  </div>
                  <div className="full f_menu">
                    <ul>
                      <li>
                        <a href="#">Home</a>
                      </li>
                      <li>
                        <a href="#">About</a>
                      </li>
                      <li>
                        <a href="#">Our Cars</a>
                      </li>
                      <li>
                        <a href="#">Services</a>
                      </li>
                      <li>
                        <a href="#">Testimonial</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="full">
                    <h4 className="widget_heading">Contact Details</h4>
                    <div className="full cont_footer">
                      <p>
                        <strong>AVALON Car : Adderess</strong>
                        <br />
                        <br />
                        Newyork 10012, USA
                        <br />
                        Phone: +987 654 3210
                        <br />
                        demo@gmail.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </footer>
          {/* end footer */}
          {/* copyright */}
          <div className="cpy_right">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="full">
                    <p>
                      © 2019 All Rights Reserved. Design by{" "}
                      <a href="https://html.design">Free Html Templates</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* right copyright */}
        </div>
      </div>
      <div className="overlay"></div>
    </div>
  );
};

export default WebsiteLayout;
