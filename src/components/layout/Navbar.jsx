import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // 홈페이지일 때만 현재 보이는 섹션 감지
      if (isHomePage) {
        const sections = document.querySelectorAll('section[id]');
        const scrollPosition = window.pageYOffset + 200; // 약간의 오프셋 추가
        
        sections.forEach(section => {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          const sectionId = section.getAttribute('id');
          
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveSection(sectionId);
          }
        });
      }
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  // 맨 위로 스크롤하는 함수 추가
  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // 상세 페이지에서 홈 페이지의 특정 섹션으로 이동하는 함수
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
  
  // 홈 페이지 진입 시 스크롤 처리
  useEffect(() => {
    if (isHomePage && location.state && location.state.scrollToSection) {
      // location.state에서 스크롤할 섹션 ID를 가져옴
      const sectionId = location.state.scrollToSection;
      const section = document.getElementById(sectionId);
      
      if (section) {
        // 약간의 딜레이 후 스크롤 (페이지 로딩 완료 후 스크롤하기 위함)
        setTimeout(() => {
          window.scrollTo({
            top: section.offsetTop,
            behavior: 'smooth'
          });
        }, 100);
      }
      
      // state 초기화 (히스토리에 남지 않도록)
      navigate('/', { replace: true });
    }
  }, [isHomePage, location.state, navigate]);
  
  return (
    <nav 
      className={`navbar navbar-expand-lg navbar-dark ftco_navbar ftco-navbar-light site-navbar-target ${isScrolled ? 'scrolled awake' : ''}`} 
      id="ftco-navbar"
    >
      <div className="container">
        {isHomePage ? (
          <a 
            className="navbar-brand" 
            href="/" 
            onClick={scrollToTop}
          >
            Jungyoon<span>.</span>
          </a>
        ) : (
          <Link className="navbar-brand" to="/">Jungyoon<span>.</span></Link>
        )}
        
        <button 
          className="navbar-toggler js-ftco-nav-toggle ftco-nav-toggle" 
          type="button" 
          onClick={toggleMenu}
          aria-expanded={isMenuOpen ? 'true' : 'false'}
          aria-label="Toggle navigation"
        >
          <span className="fa fa-bars"></span> Menu
        </button>

        <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="ftco-nav">
          <ul className="navbar-nav nav ml-auto">
            <li className="nav-item">
              <a 
                href="#home" 
                className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}
                onClick={(e) => handleNavLinkClick(e, 'home')}
              >
                <span>Home</span>
              </a>
            </li>
            <li className="nav-item">
              <a 
                href="#about" 
                className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
                onClick={(e) => handleNavLinkClick(e, 'about')}
              >
                <span>About</span>
              </a>
            </li>
            <li className="nav-item">
              <a 
                href="#skills" 
                className={`nav-link ${activeSection === 'skills' ? 'active' : ''}`}
                onClick={(e) => handleNavLinkClick(e, 'skills')}
              >
                <span>Skills</span>
              </a>
            </li>
            <li className="nav-item">
              <a 
                href="#services" 
                className={`nav-link ${activeSection === 'services' ? 'active' : ''}`}
                onClick={(e) => handleNavLinkClick(e, 'services')}
              >
                <span>Services</span>
              </a>
            </li>
            <li className="nav-item">
              <a 
                href="#projects" 
                className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`}
                onClick={(e) => handleNavLinkClick(e, 'projects')}
              >
                <span>Projects</span>
              </a>
            </li>
            <li className="nav-item">
              <a 
                href="#timeline" 
                className={`nav-link ${activeSection === 'timeline' ? 'active' : ''}`}
                onClick={(e) => handleNavLinkClick(e, 'timeline')}
              >
                <span>Timeline</span>
              </a>
            </li>
            <li className="nav-item">
              <a 
                href="#work-experience" 
                className={`nav-link ${activeSection === 'work-experience' ? 'active' : ''}`}
                onClick={(e) => handleNavLinkClick(e, 'work-experience')}
              >
                <span>Work Experience</span>
              </a>
            </li>
            <li className="nav-item">
              <a 
                href="#contact" 
                className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
                onClick={(e) => handleNavLinkClick(e, 'contact')}
              >
                <span>Contact</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;