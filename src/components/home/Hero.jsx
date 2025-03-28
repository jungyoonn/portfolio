import React, { useState, useEffect } from 'react';
import '../../css/hero.css';
import profileImg1 from '../../img/slider_profile_img2.png';
import profileImg2 from '../../img/slider_profile_img3.png';
import profileImg3 from '../../img/slider_profile_img1.png';
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // 슬라이드 데이터
  const slides = [
    {
      subheading: "Creative Full Stack Developer",
      heading: "안녕하세요! 풀스택 개발자 허정윤입니다.",
      highlight: "허정윤",
      image: profileImg1
    },
    {
      subheading: "Learning is the driving force of life",
      heading: "빠르게 변하는 기술 트렌드를 연구하고 공부합니다.",
      highlight: "연구하고 공부",
      image: profileImg2
    },
    {
      subheading: "Backend & Frontend",
      heading: "책임감을 가지고 꾸준히 노력하여 성장하는 인재가 되겠습니다.",
      highlight: "성장하는 인재",
      image: profileImg3
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
    <section id="home-section" className="hero">
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
                <div className="text-area">
                  <p className="subheading">{slide.subheading}</p>
                  <h1 className="main-heading noto-sans-kr">
                    {slide.heading.split(slide.highlight)[0]}
                    <span className="highlight">{slide.highlight}</span>
                    {slide.heading.split(slide.highlight)[1]}
                  </h1>
                  <div className="button-group">
                    <a href="#contact-section" className="btn btn-primary">Hire me</a>
                    {/* <a href="#" className="btn btn-outline-primary">Visit github</a> */}
                    <Link to={"https://github.com/jungyoonn"} className="btn btn-outline-primary">Visit github <FontAwesomeIcon icon={faGithub} className='fa-xl' /></Link>
                  </div>
                </div>
                <div className="image-area">
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