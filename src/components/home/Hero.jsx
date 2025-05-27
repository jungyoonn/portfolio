import React, { useState, useEffect } from 'react';
import '../../css/hero.css';
// import profileImg1 from '../../img/slider_profile_img2.png';
import profileImg2 from '../../img/slider_profile_img10.png';
// import profileImg3 from '../../img/slider_profile_img1.png';
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // 슬라이드 데이터
  const slides = [
    {
      subheading: "Creative Full Stack Developer",
      heading: (
        <>
          안녕하세요! 풀스택 개발자<br />
          <span className="highlight">허정윤</span>입니다.
        </>
      ),
      image: profileImg2
    },
    {
      subheading: "Learning is the driving force of life",
      heading: (
        <>
          빠르게 변하는 기술 트렌드를<br />
          <span className="highlight">연구하고 공부</span>합니다.
        </>
      ),
      image: profileImg2
    },
    {
      subheading: "Major of Information and Communication Engineering.",
      heading: (
        <>
          책임감을 가지고 꾸준히 노력하여<br />
          <span className="highlight">성장하는 인재</span>가 되겠습니다.
        </>
      ),
      image: profileImg2
    }
  ];
  
  // 자동 슬라이드 설정
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [slides.length]);
  
  // 수동 슬라이드 변경
  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section id="home" className="hero">
      <div className="simple-slider">
        {slides.map((slide, index) => (
          <div 
            key={index} 
            className={`slider-item ${index === currentSlide ? 'active' : ''}`}
            style={{ display: index === currentSlide ? 'block' : 'none' }}
          >
            <div className="diagonal-layout">
            {/* <div 
              className="blurred-background"
              style={{ backgroundImage: `url(${slide.image})` }}
            ></div> */}
              <div className="content-wrapper">
                <div className="text-area col-md-7">
                  <p className="subheading">{slide.subheading}</p>
                  <h1 className="main-heading noto-sans-kr">
                    {slide.heading}
                  </h1>
                  <div className="button-group">
                    <a href="#contact" className="btn btn-primary">Hire me</a>
                    {/* <a href="#" className="btn btn-outline-primary">Visit github</a> */}
                    <Link to={"https://s3.ap-northeast-2.amazonaws.com/eeerrorcode.bucket/uploads/portfolio/resume_%ED%97%88%EC%A0%95%EC%9C%A4.zip"} className="btn btn-secondary">Download resume</Link>
                    <Link to={"https://github.com/jungyoonn"} className="btn btn-outline-primary">Visit github <FontAwesomeIcon icon={faGithub} className='fa-xl' /></Link>
                  </div>
                </div>
                <div className="image-area col-md-5">
                  <img src={slide.image} alt="Profile" className="profile-img" />
                </div>
              </div>
            </div>
          </div>
        ))}
        
        {/* 슬라이드 인디케이터 (점) */}
        <div className="slider-dots">
          {slides.map((_, index) => (
            <span 
              key={index} 
              className={`dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;