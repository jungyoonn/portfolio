import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home-section');
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // 현재 보이는 섹션 감지
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
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
  
  return (
    <nav 
      className={`navbar navbar-expand-lg navbar-dark ftco_navbar ftco-navbar-light site-navbar-target ${isScrolled ? 'scrolled awake' : ''}`} 
      id="ftco-navbar"
    >
      <div className="container">
        {location.pathname === '/' ? (
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
          {location.pathname === '/' ? (
              // Home page navigation
              <>
                <li className="nav-item">
                  <a href="#home-section" className={`nav-link ${activeSection === 'home-section' ? 'active' : ''}`}>
                    <span>Home</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#about-section" className={`nav-link ${activeSection === 'about-section' ? 'active' : ''}`}>
                    <span>About</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#skills-section" className={`nav-link ${activeSection === 'skills-section' ? 'active' : ''}`}>
                    <span>Skills</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#services-section" className={`nav-link ${activeSection === 'services-section' ? 'active' : ''}`}>
                    <span>Services</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#projects-section" className={`nav-link ${activeSection === 'projects-section' ? 'active' : ''}`}>
                    <span>Projects</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#work-experience-section" className={`nav-link ${activeSection === 'work-experience-section' ? 'active' : ''}`}>
                    <span>WorkExperience</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#contact-section" className={`nav-link ${activeSection === 'contact-section' ? 'active' : ''}`}>
                    <span>Contact</span>
                  </a>
                </li>
              </>
            ) : (
              // Other pages navigation
              <>
                <li className="nav-item"><Link to="/#home-section" className="nav-link"><span>Home</span></Link></li>
                <li className="nav-item"><Link to="/#about-section" className="nav-link"><span>About</span></Link></li>
                <li className="nav-item"><Link to="/#skills-section" className="nav-link"><span>Skills</span></Link></li>
                <li className="nav-item"><Link to="/#services-section" className="nav-link"><span>Services</span></Link></li>
                <li className="nav-item"><Link to="/#projects-section" className="nav-link"><span>Projects</span></Link></li>
                <li className="nav-item"><Link to="/#work-experience-section" className="nav-link"><span>WorkExperience</span></Link></li>
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