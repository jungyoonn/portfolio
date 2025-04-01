import React from 'react';
import { useScrollAnimation } from '../../hooks/useAnimation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTasks, faTrophy, faCode, faEnvelope, faMapMarker, faClock, faBuilding } from '@fortawesome/free-solid-svg-icons';
import companyLogo from '../../img/logo.svg';
import '../../css/work-experience.css';

const WorkExperience = () => {
  // 스크롤 애니메이션 적용
  useScrollAnimation();
  
  // 직장 경력 데이터 - 실제 정보로 수정
  const workExperience = {
    company: "(주)클로잇",
    position: "클라우드 엔지니어",
    period: "September 2022 - February 2023",
    location: "서울특별시, 대한민국",
    responsibilities: [
      "React와 TypeScript를 활용한 웹 애플리케이션 개발",
      "REST API 연동 및 데이터 시각화 컴포넌트 구현",
      "사용자 인터페이스 개선 및 반응형 웹 디자인 적용",
      "코드 리뷰 및 테스트 주도 개발 참여",
      "애자일 스크럼 방법론 기반 프로젝트 협업"
    ],
    achievements: [
      "주요 페이지 로딩 시간 30% 개선",
      "접근성 표준 준수를 통한 웹 사이트 품질 향상",
      "재사용 가능한 컴포넌트 라이브러리 구축에 기여"
    ],
    skills: ["React", "TypeScript", "JavaScript", "HTML/CSS", "Git", "Jira"],
    testimonial: "짧은 기간이었지만 다양한 프로젝트에 참여하며 실무 경험을 쌓을 수 있었습니다. 특히 팀 협업을 통한 문제 해결 능력과 새로운 기술 습득에 큰 성장이 있었습니다."
  };

  return (
    <section className="ftco-section" id="experience-section">
      <div className="container">
        <div className="row justify-content-center pb-5">
          <div className="col-md-12 heading-section text-center ftco-animate">
            <span className="subheading">Experience</span>
            <h2 className="mb-4 text-dark">Work Experience</h2>
            <p className='noto-sans-kr'>웹 개발자로서의 실무 경험과 성과를 소개합니다. 짧은 기간이지만 프로젝트 전반에 참여하며 다양한 기술을 실무에 적용해 보았습니다.</p>
          </div>
        </div>
        
        <div className="row d-flex">
          <div className="col-md-12 ftco-animate">
            <div className="work-experience-card p-4 shadow bg-white">
              <div className="row mb-4">
                <div className="col-md-9">
                  <div className="d-flex align-items-center mb-2">
                    <div className="company-logo mr-3">
                      <img src={companyLogo} alt="Company Logo" className="img-fluid mt-3" />
                    </div>
                    <div>
                      <h3 className="mb-0 text-dark noto-sans-kr">{workExperience.position}</h3>
                      <h4 className="company-name noto-sans-kr">
                        <FontAwesomeIcon icon={faBuilding} className="mr-2" />
                        {workExperience.company}
                      </h4>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 text-md-right">
                  <div className="work-meta">
                    <div className="mb-2">
                      <span className="period-badge noto-sans-kr">
                        <FontAwesomeIcon icon={faClock} className="mr-1" />
                        {workExperience.period}
                      </span>
                    </div>
                    <p className="mb-0 location noto-sans-kr">
                      <FontAwesomeIcon icon={faMapMarker} className="mr-1" />
                      <span className="noto-sans-kr">{workExperience.location}</span>
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="row">
                <div className="col-md-8 pr-md-5">
                  <div className="responsibilities mb-4">
                    <h5 className="section-title noto-sans-kr">
                      <FontAwesomeIcon icon={faTasks} className="mr-2" />
                      주요 업무
                    </h5>
                    <ul className="noto-sans-kr work-list">
                      {workExperience.responsibilities.map((responsibility, index) => (
                        <li key={index}>{responsibility}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="achievements mb-4">
                    <h5 className="section-title noto-sans-kr">
                      <FontAwesomeIcon icon={faTrophy} className="mr-2" />
                      주요 성과
                    </h5>
                    <ul className="noto-sans-kr work-list">
                      {workExperience.achievements.map((achievement, index) => (
                        <li key={index}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="col-md-4">
                  <div className="skills-used">
                    <h5 className="section-title mb-3 noto-sans-kr">
                      <FontAwesomeIcon icon={faCode} className="mr-2" />
                      사용 기술
                    </h5>
                    <div className="skills-container noto-sans-kr">
                      {workExperience.skills.map((skill, index) => (
                        <span key={index} className="skill-badge">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="contact-action mt-4 text-center noto-sans-kr">
                    <a href="#contact" className="contact-btn">
                      <FontAwesomeIcon icon={faEnvelope} className="mr-2" /> 연락하기
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="testimonial mt-4">
                <blockquote className="mb-0">
                  <i className="fa fa-quote-left mr-2"></i>
                  <span className="noto-sans-kr">{workExperience.testimonial}</span>
                  <i className="fa fa-quote-right ml-2"></i>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;