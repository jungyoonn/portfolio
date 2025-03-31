import React from 'react';
import { useScrollAnimation } from '../../hooks/useAnimation';

const WorkExperience = () => {
  // 스크롤 애니메이션 적용
  useScrollAnimation();
  
  // 직장 경력 데이터
  const workExperience = {
    company: "ABC Technology",
    position: "Junior Frontend Developer",
    period: "April 2023 - October 2023",
    location: "Seoul, South Korea",
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
    skills: ["React", "TypeScript", "JavaScript", "HTML/CSS", "Git", "Jira"]
  };

  return (
    <section className="ftco-section bg-light" id="work-experience-section">
      <div className="container">
        <div className="row justify-content-center mb-5 pb-5">
          <div className="col-md-7 heading-section text-center ftco-animate">
            <span className="subheading">Experience</span>
            <h2 className="mb-4 text-dark">Work Experience</h2>
            <p className="noto-sans-kr">웹 개발자로서의 실무 경험과 성과를 소개합니다.</p>
          </div>
        </div>
        
        <div className="row d-flex">
          <div className="col-md-12 ftco-animate">
            <div className="work-experience-card p-4 shadow-sm bg-white rounded">
              <div className="d-flex justify-content-between align-items-center mb-4">
                <div>
                  <h3 className="mb-0">{workExperience.position}</h3>
                  <h4 className="company-name text-primary">{workExperience.company}</h4>
                </div>
                <div className="text-right">
                  <span className="badge badge-light p-2">{workExperience.period}</span>
                  <p className="mb-0"><i className="fa fa-map-marker mr-1"></i>{workExperience.location}</p>
                </div>
              </div>
              
              <div className="row">
                <div className="col-md-8">
                  <div className="responsibilities mb-4">
                    <h5><i className="fa fa-tasks mr-2"></i>주요 업무</h5>
                    <ul className="noto-sans-kr">
                      {workExperience.responsibilities.map((responsibility, index) => (
                        <li key={index}>{responsibility}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="achievements mb-4">
                    <h5><i className="fa fa-trophy mr-2"></i>주요 성과</h5>
                    <ul className="noto-sans-kr">
                      {workExperience.achievements.map((achievement, index) => (
                        <li key={index}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="col-md-4">
                  <div className="skills-used">
                    <h5><i className="fa fa-code mr-2"></i>사용 기술</h5>
                    <div className="skills-container">
                      {workExperience.skills.map((skill, index) => (
                        <span key={index} className="badge badge-primary mr-2 mb-2 p-2">{skill}</span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <a href="#contact-section" className="btn btn-primary btn-sm">
                      <i className="fa fa-envelope mr-1"></i> 연락하기
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="testimonial mt-4 p-3 bg-light rounded">
                <blockquote className="mb-0 font-italic">
                  <i className="fa fa-quote-left mr-2"></i>
                  <span className="noto-sans-kr">짧은 기간이었지만 다양한 프로젝트에 참여하며 실무 경험을 쌓을 수 있었습니다. 특히 팀 협업을 통한 문제 해결 능력과 새로운 기술 습득에 큰 성장이 있었습니다.</span>
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