import React, { useState, useEffect } from 'react';
import { useSite } from '../../context/SiteContext';
import '../../css/skills.css'; 

const Skills = () => {
  const { state } = useSite();
  const { skills } = state;
  
  const [isMobile, setIsMobile] = useState(false);
  const [skillCategories, setSkillCategories] = useState({});
  const [selectedCategory, setSelectedCategory] = useState('');
  
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkIfMobile();
    
    window.addEventListener('resize', checkIfMobile);
    
    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);
  
  useEffect(() => {
    if (skills && skills.length > 0) {
      const categories = {};
      
      skills.forEach(skill => {
        // 카테고리가 문자열인 경우와 배열인 경우 모두 처리
        const skillCategories = Array.isArray(skill.category) 
          ? skill.category 
          : [skill.category || 'Other'];
        
        // 각 카테고리에 스킬 추가
        skillCategories.forEach(category => {
          if (!categories[category]) {
            categories[category] = [];
          }
          
          categories[category].push(skill);
        });
      });
      
      setSkillCategories(categories);
      
      // 첫 번째 카테고리를 기본 선택
      if (Object.keys(categories).length > 0) {
        setSelectedCategory(Object.keys(categories)[0]);
      }
    }
  }, [skills]);
  
  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const renderDesktopView = () => {
    const categorySkillCounts = Object.entries(skillCategories).reduce((acc, [category, skills]) => {
      acc[category] = skills.length;
      return acc;
    }, {});
    
    return (
      <div className="desktop-skills-container">
        <div className="category-nav">
          {Object.keys(skillCategories).map((category) => (
            <button
              key={category}
              className={`btn ${selectedCategory === category ? 'btn-primary' : 'btn-outline-primary'}`}
              onClick={() => handleCategorySelect(category)}
            >
              {category} ({categorySkillCounts[category]})
            </button>
          ))}
        </div>
        
        <div className="row progress-circle mb-5">
          {skillCategories[selectedCategory]?.map((skill, index) => (
            <div className="col-lg-4 col-md-6 mb-4" key={index}>
              <div className="bg-white rounded-lg shadow p-4 skill-card-desktop">
                <h2 className="h5 font-weight-bold text-center mb-4 text-dark skill-name">{skill.name}</h2>

                <div className="circular-progress mx-auto" data-percentage={skill.value}>
                  <span className="circular-progress-left">
                    <span className="circular-progress-bar" style={{ 
                      transform: `rotate(${skill.value <= 50 ? skill.value * 3.6 : 180}deg)`
                    }}></span>
                  </span>
                  <span className="circular-progress-right">
                    <span className="circular-progress-bar" style={{ 
                      transform: `rotate(${skill.value <= 50 ? 0 : (skill.value - 50) * 3.6}deg)`
                    }}></span>
                  </span>
                  <div className="circular-progress-value">
                    <div className="circular-progress-percentage">{skill.value}<sup className="small">%</sup></div>
                  </div>
                </div>

                <div className="skill-categories text-center mt-3">
                  {Array.isArray(skill.category) ? (
                    skill.category.map((cat, idx) => (
                      <span key={idx} className="badge badge-light mr-1">
                        {cat}
                      </span>
                    ))
                  ) : (
                    <span className="badge badge-light mr-1">
                      {skill.category || 'Other'}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderMobileView = () => {
    const categorySkillCounts = Object.entries(skillCategories).reduce((acc, [category, skills]) => {
      acc[category] = skills.length;
      return acc;
    }, {});
    
    return (
      <div className="mobile-skills-container">
        <div className="category-tabs">
          {Object.keys(skillCategories).map((category) => (
            <button
              key={category}
              className={`btn ${selectedCategory === category ? 'btn-primary' : 'btn-outline-primary'}`}
              onClick={() => handleCategorySelect(category)}
            >
              {category} ({categorySkillCounts[category]})
            </button>
          ))}
        </div>
        
        <div className="skills-scroll-container">
          <div className="d-flex">
            {skillCategories[selectedCategory]?.map((skill, index) => (
              <div className="skill-card" key={index}>
                <div className="bg-white">
                  <h3>{skill.name}</h3>
                  
                  <div className="mobile-circular-progress" data-percentage={skill.value}>
                    <span className="mobile-circular-progress-left">
                      <span className="mobile-circular-progress-bar" style={{ 
                        transform: `rotate(${skill.value <= 50 ? skill.value * 3.6 : 180}deg)`
                      }}></span>
                    </span>
                    <span className="mobile-circular-progress-right">
                      <span className="mobile-circular-progress-bar" style={{ 
                        transform: `rotate(${skill.value <= 50 ? 0 : (skill.value - 50) * 3.6}deg)`
                      }}></span>
                    </span>
                    <div className="mobile-circular-progress-value">
                      <div className="mobile-circular-progress-percentage">{skill.value}<sup>%</sup></div>
                    </div>
                  </div>
                  
                  <div className="skill-categories-mobile text-center mt-2">
                    {Array.isArray(skill.category) ? (
                      skill.category.map((cat, idx) => (
                        <span key={idx} className="badge badge-light badge-sm mr-1">
                          {cat}
                        </span>
                      ))
                    ) : (
                      <span className="badge badge-light badge-sm mr-1">
                        {skill.category || 'Other'}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="swipe-hint">
          <i className="fa fa-arrow-right"></i> 옆으로 스와이프하여 더 보기
        </div>
      </div>
    );
  };

  return (
    <section className="ftco-section bg-light" id="skills">
      <div className="container">
        <div className="row justify-content-center pb-5">
          <div className="col-md-12 heading-section text-center ftco-animate">
            <span className="subheading">Skills</span>
            <h2 className="mb-4 text-dark">My Skills</h2>
            <p className='noto-sans-kr'>백엔드는 Java와 Spring framework, 프론트엔드는 HTML, JSP, Javascript, React 활용에 강점을 가지고 있습니다.</p>
          </div>
        </div>
        
        {isMobile ? renderMobileView() : renderDesktopView()}
      </div>
    </section>
  );
};

export default Skills;