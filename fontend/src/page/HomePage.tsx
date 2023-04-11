import React from "react";
const HomePage = ()=>{
    return (
        <div>
                      {/* 1 */}
          <div id="about" className="section layout_padding">
            <div className="container">
              <div className="row">
                <div className="col-lg-4 margin_top_30">
                  <div className="full margin_top_30">
                    <h3 className="main_heading _left_side margin_top_30">
                      About Us
                    </h3>
                    <p className="large">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod..
                    </p>
                  </div>
                  <div className="full button_section margin_top_30">
                    <a href="#">Read More</a>
                  </div>
                </div>
                <div className="col-lg-8">
                  <div className="full margin_top_50_rs">
                    <img
                      className="img-responsive"
                      src="images/about_us.png"
                      alt="#"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* 1 */}

          {/* end section */}
          {/* section */}


          {/* 2 */}
          <div className="section layout_padding padding_top_0">
            <div className="container">
              <div className="row">
                <div className="col-lg-8">
                  <div className="full text_align_right r-img">
                    <img
                      className="img-responsive"
                      src="images/about_us_2.png"
                      alt="#"
                    />
                  </div>
                </div>
                <div className="col-lg-4 margin_top_30">
                  <div className="full margin_top_30">
                    <h3 className="main_heading _left_side margin_top_30">
                      Our Cars
                    </h3>
                    <p className="large">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod..
                    </p>
                  </div>
                  <div className="full button_section margin_top_30">
                    <a href="#">See More</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* 2 */}

          
          {/* end section */}
          {/* section */}

          {/* 3 */}
          <section
            id="why_choose_us"
            className="dark_bg_blue layout_padding cross_layout padding_top_0"
          >
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="full center">
                    <h2 className="heading_main orange_heading">
                      Why Choose Us
                    </h2>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-4">
                  <div className="full">
                    <div className="choose_blog text_align_center">
                      <img src="images/c1_icon.png" />
                      <h4>FINANCING MADE EASY</h4>
                      <p>
                        The standard chunk of Lorem Ipsum used since the 1500s
                        is reproduced below for those interested.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="full">
                    <div className="choose_blog text_align_center">
                      <img src="images/c2_icon.png" />
                      <h4>WIDE RANGE OF BRANDS</h4>
                      <p>
                        The standard chunk of Lorem Ipsum used since the 1500s
                        is reproduced below for those interested.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="full">
                    <div className="choose_blog text_align_center">
                      <img src="images/c3_icon.png" />
                      <h4>TRUSTED BY THOUSANDS</h4>
                      <p>
                        The standard chunk of Lorem Ipsum used since the 1500s
                        is reproduced below for those interested.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 margin_top_30">
                  <div className="full center button_section margin_top_30">
                    <a className="margin_top_30" href="#">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* 3 */}



          {/* end section */}
          {/* section */}


          {/* 4 */}
          <section
            id="testimonial"
            className="dark_bg_orange layout_padding cross_layout_o padding_top_0"
          >
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="full center">
                    <h2 className="heading_main orange_heading">
                      Testimonials
                    </h2>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="full">
                    <div
                      id="testimonial_slider"
                      className="carousel slide"
                      data-ride="carousel"
                    >
                      {/* Indicators */}
                      <ul className="carousel-indicators">
                        <li
                          data-target="#testimonial_slider"
                          data-slide-to={0}
                          className="active"
                        />
                        <li
                          data-target="#testimonial_slider"
                          data-slide-to={1}
                        />
                        <li
                          data-target="#testimonial_slider"
                          data-slide-to={2}
                        />
                      </ul>
                      {/* The slideshow */}
                      <div className="carousel-inner">
                        <div className="carousel-item active">
                          <div className="testomonial_section">
                            <div className="full center">
                              <div className="client_img">
                                <img src="images/anh1.jpg" alt="#"  width={200}/>
                              </div>
                            </div>
                            <div className="full testimonial_cont text_align_center">
                              <p>
                                <strong>I am Manh</strong>
                                <br />
                                <strong className="ornage_color">Rental</strong>
                                <br />
                                <i>
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit, sed do eiusmod tempor
                                  incididunt ut labore et dolore magna aliqua.
                                  Ut enim ad minim veniam, quis nostrud
                                  exercitation ullamco laboris nisi ut aliquip
                                  ex ea commodo consequat. Duis aute irure dolor
                                  in reprehenderit in voluptate velit ess
                                </i>
                              </p>
                              <div className="full text_align_center margin_top_30">
                                <img src="images/testimonial_qoute.png" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="carousel-item">
                          <div className="testomonial_section">
                            <div className="full center">
                              <div className="client_img">
                                <img src="images/testimonial.png" alt="#" />
                              </div>
                            </div>
                            <div className="full testimonial_cont text_align_center">
                              <p>
                                <strong>Due markes</strong>
                                <br />
                                <strong className="ornage_color">Rental</strong>
                                <br />
                                <i>
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit, sed do eiusmod tempor
                                  incididunt ut labore et dolore magna aliqua.
                                  Ut enim ad minim veniam, quis nostrud
                                  exercitation ullamco laboris nisi ut aliquip
                                  ex ea commodo consequat. Duis aute irure dolor
                                  in reprehenderit in voluptate velit ess
                                </i>
                              </p>
                              <div className="full text_align_center margin_top_30">
                                <img src="images/testimonial_qoute.png" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="carousel-item">
                          <div className="testomonial_section">
                            <div className="full center">
                              <div className="client_img">
                                <img src="images/testimonial.png" alt="#" />
                              </div>
                            </div>
                            <div className="full testimonial_cont text_align_center">
                              <p>
                                <strong>Due markes</strong>
                                <br />
                                <strong className="ornage_color">Rental</strong>
                                <br />
                                <i>
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit, sed do eiusmod tempor
                                  incididunt ut labore et dolore magna aliqua.
                                  Ut enim ad minim veniam, quis nostrud
                                  exercitation ullamco laboris nisi ut aliquip
                                  ex ea commodo consequat. Duis aute irure dolor
                                  in reprehenderit in voluptate velit ess
                                </i>
                              </p>
                              <div className="full text_align_center margin_top_30">
                                <img src="images/testimonial_qoute.png" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
           {/* 4 */}


          {/* end section */}
          {/* section */}


          {/* 5 */}
          <section
            id="contact"
            className="dark_bg_blue layout_padding cross_layout padding_top_0 margin_top_0"
          >
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="full center">
                    <h2 className="heading_main orange_heading">Contact Us</h2>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="full">
                    <div className="contact_form">
                      <form>
                        <fieldset className="row">
                          <div className="col-md-12">
                            <div className="full field">
                              <input
                                type="text"
                                placeholder="Your Name"
                                name="name"
                              />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="full field">
                              <input
                                type="email"
                                placeholder="Email"
                                name="email"
                              />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="full field">
                              <input
                                type="text"
                                placeholder="Phone"
                                name="number"
                              />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="full field">
                              <textarea
                                placeholder="Message"
                                defaultValue={""}
                              />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="full center">
                              <button className="submit_bt">Send</button>
                            </div>
                          </div>
                        </fieldset>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="full map_section">
                    <div id="map"></div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* 5 */}
          
          {/* end section */}
        </div>
    )
}

export default HomePage
