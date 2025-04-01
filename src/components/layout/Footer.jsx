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
          {/* <div className="col-md-1" /> */}
          <div className="col-md">
            <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2">About Me</h2>
              <p className=' noto-sans-kr'>풀스택 개발자로서 프론트엔드부터 백엔드까지 전반적인 웹 애플리케이션 개발에 집중하고 있습니다. 다양한 프론트엔드 기술과 백엔드 기술을 활용한 통합적인 웹 솔루션 구축에 관심이 많습니다.</p>
              {isHomePage ? (
                <p><a href="#about" onClick={(e) => scrollToSection(e, 'about')} className="btn btn-primary fw-bold">Learn more</a></p>
              ) : (
                <p><a href="/#about" className="btn btn-primary fw-bold">Learn more</a></p>
              )}
            </div>
          </div>
          <div className="col-md">
            <div className="ftco-footer-widget mb-4 ml-md-4 ps-5">
              <h2 className="ftco-heading-2">Links</h2>
              <ul className="list-unstyled">
                {isHomePage ? (
                  <>
                    <li><a href="#home" className='noto-sans-kr' onClick={(e) => scrollToSection(e, 'home')}><span className="fa fa-chevron-right mr-2"></span>Home</a></li>
                    <li><a href="#about" className='noto-sans-kr'  onClick={(e) => scrollToSection(e, 'about')}><span className="fa fa-chevron-right mr-2"></span>About</a></li>
                    {/* <li><a href="#skills" className='noto-sans-kr'  onClick={(e) => scrollToSection(e, 'skills')}><span className="fa fa-chevron-right mr-2"></span>Skills</a></li> */}
                    <li><a href="#services" className='noto-sans-kr'  onClick={(e) => scrollToSection(e, 'services')}><span className="fa fa-chevron-right mr-2"></span>Services</a></li>
                    <li><a href="#projects" className='noto-sans-kr'  onClick={(e) => scrollToSection(e, 'projects')}><span className="fa fa-chevron-right mr-2"></span>Projects</a></li>
                    <li><a href="#work-experience" className='noto-sans-kr'  onClick={(e) => scrollToSection(e, 'work-experience')}><span className="fa fa-chevron-right mr-2"></span>Work Experience</a></li>
                    <li><a href="#contact" className='noto-sans-kr'  onClick={(e) => scrollToSection(e, 'contact')}><span className="fa fa-chevron-right mr-2"></span>Contact</a></li>
                  </>
                ) : (
                  <>
                    <li><a href="/#home" className='noto-sans-kr' ><span className="fa fa-chevron-right mr-2"></span>Home</a></li>
                    <li><a href="/#about" className='noto-sans-kr' ><span className="fa fa-chevron-right mr-2"></span>About</a></li>
                    {/* <li><a href="/#skills" className='noto-sans-kr' ><span className="fa fa-chevron-right mr-2"></span>Skills</a></li> */}
                    <li><a href="/#services" className='noto-sans-kr' ><span className="fa fa-chevron-right mr-2"></span>Services</a></li>
                    <li><a href="/#projects" className='noto-sans-kr' ><span className="fa fa-chevron-right mr-2"></span>Projects</a></li>
                    <li><a href="/#work-experience" className='noto-sans-kr' ><span className="fa fa-chevron-right mr-2"></span>Work Experience</a></li>
                    <li><a href="/#contact" className='noto-sans-kr' ><span className="fa fa-chevron-right mr-2"></span>Contact</a></li>
                  </>
                )}
              </ul>
            </div>
          </div>
          <div className="col-md">
            <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2">Technical Expertise</h2>
              {/* 버전 1 */}
              {/* <ul className="list-unstyled">
                <li><span className="fa fa-laptop mr-2 list-align"></span><span className="noto-sans-kr">웹 애플리케이션</span></li>
                <li><span className="fa fa-server mr-2 list-align"></span><span className="noto-sans-kr">API 개발</span></li>
                <li><span className="fa fa-database mr-2 list-align"></span><span className="noto-sans-kr">데이터 모델링</span></li>
                <li><span className="fa fa-mobile mr-2 fa-lg list-align"></span><span className="noto-sans-kr">모바일 앱</span></li>
                <li><span className="fa fa-paint-brush mr-2 list-align"></span><span className="noto-sans-kr">UI 컴포넌트</span></li>
              </ul> */}

              {/* 버전 2 */}
              <div className="dev-areas noto-sans-kr fw-bold">
                <div className="dev-area-item">
                  <span className="fa fa-laptop fa-fw fa-lg"></span> 웹 애플리케이션
                </div>
                <div className="dev-area-item">
                  <span className="fa fa-server fa-fw fa-lg"></span> API 개발
                </div>
                <div className="dev-area-item">
                  <span className="fa fa-database fa-fw fa-lg"></span> 데이터 모델링
                </div>
                <div className="dev-area-item">
                  <span className="fa fa-mobile fa-fw fa-lg"></span> 모바일 앱
                </div>
                <div className="dev-area-item">
                  <span className="fa fa-paint-brush fa-fw fa-lg"></span> UI 컴포넌트
                </div>
              </div>
            </div>
          </div>
          <div className="col-md">
            <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2">Have a Questions?</h2>
              <div className="block-23 mb-3">
                <ul>
                  <li>
                    <span className="icon fa fa-map-marker"></span>
                    <span className="text noto-sans-kr">서울특별시 동작구 여의대방로 26길 56, 대한민국</span>
                  </li>
                  <li>
                    <span className="icon fa fa-phone mb-4"></span>
                    <span className="text noto-sans-kr mb-4">010-5191-9852</span>
                  </li>
                  <li>
                    <a href="mailto:sophia76256@gmail.com">
                      <span className="icon fa fa-paper-plane pr-4"></span>
                      <span className="text noto-sans-kr">sophia76256@gmail.com</span>
                    </a>
                  </li>
                </ul>
              </div>
              <ul className="ftco-footer-social mt-2 p-0">
                <li className="ftco-animate"><a href="https://github.com/jungyoonn" target="_blank" rel="noopener noreferrer"><span className="fa fa-github"></span></a></li>
                <li className="ftco-animate"><a href="mailto:sophia76256@gmail.com"><span className="fa fa-envelope"></span></a></li>
              </ul>
            </div>
          </div>
          {/* <div className="col-md-1" /> */}
        </div>
        <div className="row">
          <div className="col-md-12 text-center noto-sans-kr">
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