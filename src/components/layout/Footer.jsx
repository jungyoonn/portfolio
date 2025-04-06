import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const location = useLocation();
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  
  // 현재 경로가 홈 페이지인지 확인
  const isHomePage = location.pathname === '/';
  
  // 화면 크기 변경 감지
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // 링크 클릭 시 해당 섹션으로 스크롤하는 함수 - Navbar와 일관성 있게 수정
  const handleNavLinkClick = (e, sectionId) => {
    e.preventDefault();
    if (!isHomePage) {
      // 상세 페이지에서는 홈으로 이동한 후 해당 섹션으로 스크롤
      navigate('/', { state: { scrollToSection: sectionId } });
    } else {
      // 홈 페이지에서는 해당 섹션으로 스크롤
      const section = document.getElementById(sectionId);
      if (section) {
        window.scrollTo({
          top: section.offsetTop,
          behavior: 'smooth'
        });
      }
    }
  };
  
  // 모바일 버전 푸터
  if (isMobile) {
    return (
      <footer className="ftco-footer ftco-section py-4">
        <div className="container">
          {/* 모바일 소개 섹션 */}
          <div className="row mb-4">
            <div className="col-12 text-center">
              <h2 className="ftco-heading-2 mb-3">Jungyoon</h2>
              <p className="mb-3 px-3 noto-sans-kr" style={{ fontSize: '0.9rem' }}>
                풀스택 개발자로서 프론트엔드부터 백엔드까지 웹 애플리케이션 개발에 집중하고 있습니다.
              </p>
              <div className="d-flex justify-content-center mb-3">
                <a href="https://github.com/jungyoonn" target="_blank" rel="noopener noreferrer" className="mx-2">
                  <span className="fa fa-github fa-2x"></span>
                </a>
                <a href="mailto:sophia76256@gmail.com" className="mx-2">
                  <span className="fa fa-envelope fa-2x"></span>
                </a>
              </div>
            </div>
          </div>
          
          {/* 모바일 간소화된 링크 */}
          <div className="row mb-4">
            <div className="col-12">
              <div className="d-flex flex-wrap justify-content-center">
                {isHomePage ? (
                  <>
                    <a href="#home" onClick={(e) => handleNavLinkClick(e, 'home')} className="btn btn-sm btn-outline-light m-1 noto-sans-kr">Home</a>
                    <a href="#about" onClick={(e) => handleNavLinkClick(e, 'about')} className="btn btn-sm btn-outline-light m-1 noto-sans-kr">About</a>
                    <a href="#projects" onClick={(e) => handleNavLinkClick(e, 'projects')} className="btn btn-sm btn-outline-light m-1 noto-sans-kr">Projects</a>
                    <a href="#timeline" onClick={(e) => handleNavLinkClick(e, 'timeline')} className="btn btn-sm btn-outline-light m-1 noto-sans-kr">Timeline</a>
                    <a href="#contact" onClick={(e) => handleNavLinkClick(e, 'contact')} className="btn btn-sm btn-outline-light m-1 noto-sans-kr">Contact</a>
                  </>
                ) : (
                  <>
                    <a href="/#home" onClick={(e) => handleNavLinkClick(e, 'home')} className="btn btn-sm btn-outline-light m-1 noto-sans-kr">Home</a>
                    <a href="/#about" onClick={(e) => handleNavLinkClick(e, 'about')} className="btn btn-sm btn-outline-light m-1 noto-sans-kr">About</a>
                    <a href="/#projects" onClick={(e) => handleNavLinkClick(e, 'projects')} className="btn btn-sm btn-outline-light m-1 noto-sans-kr">Projects</a>
                    <a href="/#timeline" onClick={(e) => handleNavLinkClick(e, 'timeline')} className="btn btn-sm btn-outline-light m-1 noto-sans-kr">Timeline</a>
                    <a href="/#contact" onClick={(e) => handleNavLinkClick(e, 'contact')} className="btn btn-sm btn-outline-light m-1 noto-sans-kr">Contact</a>
                  </>
                )}
              </div>
            </div>
          </div>
          
          {/* 모바일 연락처 정보 (간소화) */}
          <div className="row">
            <div className="col-12 text-center">
              <p className="noto-sans-kr" style={{ fontSize: '0.85rem' }}>
                <a href="mailto:sophia76256@gmail.com" className="text-light">
                  sophia76256@gmail.com
                </a>
              </p>
              <p className="noto-sans-kr mb-2" style={{ fontSize: '0.85rem' }}>
                Copyright &copy;{currentYear} All rights reserved | Jungyoon
              </p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
  
  // 데스크톱 버전 푸터 (기존 코드)
  return (
    <footer className="ftco-footer ftco-section">
      <div className="container">
        <div className="row mb-5">
          <div className="col-md">
            <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2">About Me</h2>
              <p className='noto-sans-kr'>풀스택 개발자로서 프론트엔드부터 백엔드까지 전반적인 웹 애플리케이션 개발에 집중하고 있습니다. 다양한 프론트엔드 기술과 백엔드 기술을 활용한 통합적인 웹 솔루션 구축에 관심이 많습니다.</p>
              {isHomePage ? (
                <p><a href="#about" onClick={(e) => handleNavLinkClick(e, 'about')} className="btn btn-primary fw-bold">Learn more</a></p>
              ) : (
                <p><a href="/#about" onClick={(e) => handleNavLinkClick(e, 'about')} className="btn btn-primary fw-bold">Learn more</a></p>
              )}
            </div>
          </div>
          <div className="col-md">
            <div className="ftco-footer-widget mb-4 ml-md-4 ps-5">
              <h2 className="ftco-heading-2">Links</h2>
              <ul className="list-unstyled">
                {isHomePage ? (
                  <>
                    <li><a href="#home" className='noto-sans-kr' onClick={(e) => handleNavLinkClick(e, 'home')}><span className="fa fa-chevron-right mr-2"></span>Home</a></li>
                    <li><a href="#about" className='noto-sans-kr' onClick={(e) => handleNavLinkClick(e, 'about')}><span className="fa fa-chevron-right mr-2"></span>About</a></li>
                    <li><a href="#services" className='noto-sans-kr' onClick={(e) => handleNavLinkClick(e, 'services')}><span className="fa fa-chevron-right mr-2"></span>Services</a></li>
                    <li><a href="#projects" className='noto-sans-kr' onClick={(e) => handleNavLinkClick(e, 'projects')}><span className="fa fa-chevron-right mr-2"></span>Projects</a></li>
                    <li><a href="#timeline" className='noto-sans-kr' onClick={(e) => handleNavLinkClick(e, 'timeline')}><span className="fa fa-chevron-right mr-2"></span>Timeline</a></li>
                    <li><a href="#work-experience" className='noto-sans-kr' onClick={(e) => handleNavLinkClick(e, 'work-experience')}><span className="fa fa-chevron-right mr-2"></span>Work Experience</a></li>
                    <li><a href="#contact" className='noto-sans-kr' onClick={(e) => handleNavLinkClick(e, 'contact')}><span className="fa fa-chevron-right mr-2"></span>Contact</a></li>
                  </>
                ) : (
                  <>
                    <li><a href="/#home" className='noto-sans-kr' onClick={(e) => handleNavLinkClick(e, 'home')}><span className="fa fa-chevron-right mr-2"></span>Home</a></li>
                    <li><a href="/#about" className='noto-sans-kr' onClick={(e) => handleNavLinkClick(e, 'about')}><span className="fa fa-chevron-right mr-2"></span>About</a></li>
                    <li><a href="/#services" className='noto-sans-kr' onClick={(e) => handleNavLinkClick(e, 'services')}><span className="fa fa-chevron-right mr-2"></span>Services</a></li>
                    <li><a href="/#projects" className='noto-sans-kr' onClick={(e) => handleNavLinkClick(e, 'projects')}><span className="fa fa-chevron-right mr-2"></span>Projects</a></li>
                    <li><a href="/#timeline" className='noto-sans-kr' onClick={(e) => handleNavLinkClick(e, 'timeline')}><span className="fa fa-chevron-right mr-2"></span>Timeline</a></li>
                    <li><a href="/#work-experience" className='noto-sans-kr' onClick={(e) => handleNavLinkClick(e, 'work-experience')}><span className="fa fa-chevron-right mr-2"></span>Work Experience</a></li>
                    <li><a href="/#contact" className='noto-sans-kr' onClick={(e) => handleNavLinkClick(e, 'contact')}><span className="fa fa-chevron-right mr-2"></span>Contact</a></li>
                  </>
                )}
              </ul>
            </div>
          </div>
          <div className="col-md">
            <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2">Technical Expertise</h2>
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