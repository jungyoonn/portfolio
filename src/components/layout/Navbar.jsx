import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSleeping, setIsSleeping] = useState(false);
  const location = useLocation();
  
  // useEffect(() => {
  //   let prevScrollpos = window.pageYOffset;
  //   // 초기 스크롤 위치 체크 (페이지 리로드 시 스크롤 위치가 이미 아래에 있을 수 있음)
  //   if (prevScrollpos > 100) {
  //     setIsScrolled(true);
  //     setIsSleeping(false);
  //   }
    
  //   const handleScroll = () => {
  //     const currentScrollPos = window.pageYOffset;
      
  //     // 스크롤이 100px 이상 내려갔는지 확인
  //     if (currentScrollPos > 100) {
  //       setIsScrolled(true);
        
  //       // 스크롤 방향 감지 (위로 스크롤하는지 아래로 스크롤하는지)
  //       if (prevScrollpos > currentScrollPos) {
  //         // 위로 스크롤 - 네비게이션 보이기 (awake)
  //         setIsSleeping(false);
  //       } else {
  //         // 아래로 스크롤 - 네비게이션 숨기기 (sleep)
  //         setIsSleeping(true);
  //       }
  //     } else {
  //       // 상단으로 돌아왔을 때
  //       setIsScrolled(false);
  //       setIsSleeping(false);
  //     }
      
  //     prevScrollpos = currentScrollPos;
  //   };
    
  //   // 즉시 첫 번째 체크 실행
  //   handleScroll();
    
  //   // 스크롤 이벤트 리스너 등록
  //   window.addEventListener('scroll', handleScroll, { passive: true });
  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  return (
    <nav 
      className={`navbar navbar-expand-lg navbar-dark ftco_navbar ftco-navbar-light site-navbar-target 
        ${isScrolled ? 'scrolled' : ''} 
        ${isScrolled && !isSleeping ? 'awake' : ''} 
        ${isScrolled && isSleeping ? 'sleep' : ''}`} 
      id="ftco-navbar"
    >
      <div className="container">
        <Link className="navbar-brand" to="/">Jungyoon<span>.</span></Link>
        <button 
          className="navbar-toggler js-fh5co-nav-toggle fh5co-nav-toggle" 
          type="button" 
          onClick={toggleMenu}
          aria-expanded={isMenuOpen ? 'true' : 'false'}
          aria-label="Toggle navigation"
        >
          <span className="fa fa-bars"></span> Menu
        </button>

        <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="ftco-nav">
          <ul className="navbar-nav nav ml-auto">
            {location.pathname === '/' ? (
              // Home page navigation
              <>
                <li className="nav-item"><a href="#home-section" className="nav-link"><span>Home</span></a></li>
                <li className="nav-item"><a href="#about-section" className="nav-link"><span>About</span></a></li>
                <li className="nav-item"><a href="#skills-section" className="nav-link"><span>Skills</span></a></li>
                <li className="nav-item"><a href="#services-section" className="nav-link"><span>Services</span></a></li>
                <li className="nav-item"><a href="#projects-section" className="nav-link"><span>Projects</span></a></li>
                <li className="nav-item"><a href="#portfolio-section" className="nav-link"><span>Portfolio</span></a></li>
                <li className="nav-item"><a href="#contact-section" className="nav-link"><span>Contact</span></a></li>
              </>
            ) : (
              // Other pages navigation
              <>
                <li className="nav-item"><Link to="/#home-section" className="nav-link"><span>Home</span></Link></li>
                <li className="nav-item"><Link to="/#about-section" className="nav-link"><span>About</span></Link></li>
                <li className="nav-item"><Link to="/#skills-section" className="nav-link"><span>Skills</span></Link></li>
                <li className="nav-item"><Link to="/#services-section" className="nav-link"><span>Services</span></Link></li>
                <li className="nav-item"><Link to="/#projects-section" className="nav-link"><span>Projects</span></Link></li>
                <li className="nav-item"><Link to="/#portfolio-section" className="nav-link"><span>Portfolio</span></Link></li>
                <li className="nav-item"><Link to="/#contact-section" className="nav-link"><span>Contact</span></Link></li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;