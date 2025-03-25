import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Hero = () => {
  // 슬라이더 설정
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000
  };

  return (
    <section id="home-section" className="hero">
      <Slider {...settings} className="home-slider">
        {/* 슬라이더 항목들 */}
        <div className="slider-item">
          <div className="overlay"></div>
          <div className="container-fluid px-md-0">
            <div className="row d-md-flex no-gutters slider-text align-items-end justify-content-end">
              <div className="one-third order-md-last img" style={{backgroundImage: "url(images/bg_1.jpg)"}}>
                <div className="overlay"></div>
                <div className="overlay-1"></div>
              </div>
              <div className="one-forth d-flex align-items-center ftco-animate">
                <div className="text">
                  <span className="subheading">Hello! This is Clyde</span>
                  <h1 className="mb-4 mt-3">Creative <span>UI/UX</span> Designer &amp; Developer</h1>
                  <p><a href="#" className="btn btn-primary">Hire me</a> <a href="#" className="btn btn-primary btn-outline-primary">Download CV</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="slider-item">
          <div className="overlay"></div>
          <div className="container-fluid px-md-0">
            <div className="row d-flex no-gutters slider-text align-items-end justify-content-end">
              <div className="one-third order-md-last img" style={{backgroundImage: "url(images/bg_2.jpg)"}}>
                <div className="overlay"></div>
                <div className="overlay-1"></div>
              </div>
              <div className="one-forth d-flex align-items-center ftco-animate">
                <div className="text">
                  <span className="subheading">We Design &amp; Build Brands</span>
                  <h1 className="mb-4 mt-3">Hi, I am <span>Clyde</span> This is my favorite work.</h1>
                  <p><a href="#" className="btn btn-primary">Hire me</a> <a href="#" className="btn btn-primary btn-outline-primary">Download CV</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </section>
  );
};

export default Hero;