import React from 'react';
import { useLocation } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const location = useLocation();
  
  // 현재 경로가 홈 페이지인지 확인
  const isHomePage = location.pathname === '/';
  
  // 링크 클릭 시 해당 섹션으로 스크롤하는 함수
  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <footer className="ftco-footer ftco-section">
      <div className="container">
        <div className="row mb-5">
          <div className="col-md">
            <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2">About Me</h2>
              <p>풀스택 개발자로서 프론트엔드부터 백엔드까지 전반적인 웹 애플리케이션 개발에 집중하고 있습니다. 다양한 프론트엔드 기술과 백엔드 기술을 활용한 통합적인 웹 솔루션 구축에 관심이 많습니다.</p>
              {isHomePage ? (
                <p><a href="#about-section" onClick={(e) => scrollToSection(e, 'about-section')} className="btn btn-primary">자세히 보기</a></p>
              ) : (
                <p><a href="/#about-section" className="btn btn-primary">자세히 보기</a></p>
              )}
            </div>
          </div>
          <div className="col-md">
            <div className="ftco-footer-widget mb-4 ml-md-4">
              <h2 className="ftco-heading-2">Links</h2>
              <ul className="list-unstyled">
                {isHomePage ? (
                  <>
                    <li><a href="#home-section" onClick={(e) => scrollToSection(e, 'home-section')}><span className="fa fa-chevron-right mr-2"></span>Home</a></li>
                    <li><a href="#about-section" onClick={(e) => scrollToSection(e, 'about-section')}><span className="fa fa-chevron-right mr-2"></span>About</a></li>
                    <li><a href="#skills-section" onClick={(e) => scrollToSection(e, 'skills-section')}><span className="fa fa-chevron-right mr-2"></span>Skills</a></li>
                    <li><a href="#projects-section" onClick={(e) => scrollToSection(e, 'projects-section')}><span className="fa fa-chevron-right mr-2"></span>Projects</a></li>
                    <li><a href="#contact-section" onClick={(e) => scrollToSection(e, 'contact-section')}><span className="fa fa-chevron-right mr-2"></span>Contact</a></li>
                  </>
                ) : (
                  <>
                    <li><a href="/#home-section"><span className="fa fa-chevron-right mr-2"></span>Home</a></li>
                    <li><a href="/#about-section"><span className="fa fa-chevron-right mr-2"></span>About</a></li>
                    <li><a href="/#skills-section"><span className="fa fa-chevron-right mr-2"></span>Skills</a></li>
                    <li><a href="/#projects-section"><span className="fa fa-chevron-right mr-2"></span>Projects</a></li>
                    <li><a href="/#contact-section"><span className="fa fa-chevron-right mr-2"></span>Contact</a></li>
                  </>
                )}
              </ul>
            </div>
          </div>
          <div className="col-md">
          <div className="ftco-footer-widget mb-4">
            <h2 className="ftco-heading-2">Development Philosophy</h2>
            <ul className="list-unstyled">
              <li><span className="fa fa-check-circle mr-2"></span>사용자 중심의 직관적인 인터페이스 설계</li>
              <li><span className="fa fa-check-circle mr-2"></span>확장 가능하고 유지보수 용이한 아키텍처</li>
              <li><span className="fa fa-check-circle mr-2"></span>성능과 보안을 고려한 최적화된 코드</li>
              <li><span className="fa fa-check-circle mr-2"></span>지속적인 학습과 기술 트렌드 적용</li>
              <li><span className="fa fa-check-circle mr-2"></span>협업과 코드 리뷰를 통한 품질 향상</li>
            </ul>
          </div>
          </div>
          <div className="col-md">
            <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2">Contact Me</h2>
              <div className="block-23 mb-3">
                <ul>
                  <li>
                    <span className="icon fa fa-map-marker"></span>
                    <span className="text">서울특별시 동작구 여의대방로 26길 56, 대한민국</span>
                  </li>
                  <li>
                    <a href="mailto:sophia76256@gmail.com">
                      <span className="icon fa fa-paper-plane pr-4"></span>
                      <span className="text">sophia76256@gmail.com</span>
                    </a>
                  </li>
                </ul>
              </div>
              <ul className="ftco-footer-social list-unstyled mt-2">
                <li className="ftco-animate"><a href="https://github.com/jungyoonn" target="_blank" rel="noopener noreferrer"><span className="fa fa-github"></span></a></li>
                <li className="ftco-animate"><a href="mailto:sophia76256@gmail.com"><span className="fa fa-envelope"></span></a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-center">
            <p>
              Copyright &copy;{currentYear} All rights reserved | Jungyoon
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;