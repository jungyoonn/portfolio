// import React from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import '../../css/hero.css';
// import profileImg from '../../img/my-profile-img.jpg'; 

// const Hero = () => {
//   // 슬라이더 설정
//   // const settings = {
//   //   dots: true,
//   //   infinite: true,
//   //   speed: 500,
//   //   slidesToShow: 1,
//   //   slidesToScroll: 1,
//   //   autoplay: true,
//   //   autoplaySpeed: 5000
//   // };

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 5000,
//     cssEase: 'ease',
//     arrows: true,
//     adaptiveHeight: true,
//     className: 'slider-main'
//   };

//   return (
//     <section id="home-section" className="hero">
//       <Slider 
//         {...settings} 
//         className="home-slider"
//         style={{ width: '100%', height: 'auto' }}
//       >
//         {/* 슬라이더 항목들 */}
//         <div className="slider-item">
//           <div className="overlay"></div>
//           <div className="container-fluid px-md-0">
//             <div className="row d-md-flex no-gutters slider-text align-items-end justify-content-end">
//               <div className="one-third order-md-last img" style={{backgroundImage: `url(${profileImg})`}}>
//                 <div className="overlay"></div>
//                 <div className="overlay-1"></div>
//               </div>
//               <div className="one-forth d-flex align-items-center ftco-animate">
//                 <div className="text">
//                   <span className="subheading">신입 개발자 허정윤입니다!</span>
//                   <h1 className="mb-4 mt-3">Creative <span>UI/UX</span> Designer &amp; Developer</h1>
//                   <p><a href="#" className="btn btn-primary">Hire me</a> <a href="#" className="btn btn-primary btn-outline-primary">Download CV</a></p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
        
//         <div className="slider-item">
//           <div className="overlay"></div>
//           <div className="container-fluid px-md-0">
//             <div className="row d-flex no-gutters slider-text align-items-end justify-content-end">
//               <div className="one-third order-md-last img" style={{backgroundImage: `url(${profileImg})`}}>
//                 <div className="overlay"></div>
//                 <div className="overlay-1"></div>
//               </div>
//               <div className="one-forth d-flex align-items-center ftco-animate">
//                 <div className="text">
//                   <span className="subheading">We Design &amp; Build Brands</span>
//                   <h1 className="mb-4 mt-3">Hi, I am <span>Clyde</span> This is my favorite work.</h1>
//                   <p><a href="#" className="btn btn-primary">Hire me</a> <a href="#" className="btn btn-primary btn-outline-primary">Download CV</a></p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </Slider>
//     </section>
//   );
// };

// export default Hero;

import React, { useState, useEffect } from 'react';
import '../../css/hero.css';
import profileImg1 from '../../img/slider_profile_img2.png';
import profileImg2 from '../../img/slider_profile_img3.png';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // 슬라이드 데이터에 이미지 정보 추가
  const slides = [
    {
      subheading: "Creative Full Stack Developer",
      heading: "안녕하세요! 신입 개발자 허정윤입니다.",
      highlight: "허정윤",
      image: profileImg1  // 첫 번째 슬라이드에 profileImg1 추가
    },
    {
      subheading: "backend & frontend",
      heading: "꾸준히 노력하고 성장하는 인재가 되겠습니다.",
      highlight: "인재",
      image: profileImg2  // 두 번째 슬라이드에 profileImg2 추가
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
            <div className="container-fluid">
              <div className="row hero-row overlay">
                {/* 텍스트 영역 (왼쪽) */}
                <div className="col-md-7 text-area d-flex align-items-center">
                  <div className="text-content ftco-animate">
                    <span className="subheading">{slide.subheading}</span>
                    <h1 className="mb-4 mt-3">
                      {slide.heading.split(slide.highlight)[0]}
                      <span>{slide.highlight}</span>
                      {slide.heading.split(slide.highlight)[1]}
                    </h1>
                    <p>
                      <a href="#contact-section" className="btn btn-primary me-2">Hire me</a> 
                      <a href="#" className="btn btn-primary btn-outline-primary">Download CV</a>
                    </p>
                  </div>
                </div>
                
                {/* 이미지 영역 (오른쪽) - 각 슬라이드의 이미지 사용 */}
                <div className="col-md-5 image-area">
                  <div className="profile-image-container">
                    <img src={slide.image} alt="Profile" className="profile-img" />
                    <div className=""></div>
                  </div>
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