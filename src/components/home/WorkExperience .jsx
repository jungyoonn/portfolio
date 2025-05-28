import React from 'react';
import { useScrollAnimation } from '../../hooks/useAnimation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrophy, faEnvelope, faMapMarker, faClock, faBuilding, faProjectDiagram, faFileAlt, faSitemap, faPencilRuler } from '@fortawesome/free-solid-svg-icons';
import companyLogo from '../../img/logo.svg';
import '../../css/work-experience.css';

const WorkExperience = () => {
  // 스크롤 애니메이션 적용
  useScrollAnimation();
  
  // 직장 경력 데이터
  const workExperience = {
    company: "(주)클로잇",
    position: "클라우드 엔지니어",
    period: "September 2022 - February 2023",
    location: "서울특별시, 대한민국",
    jobDescription: "사내 관리 페이지 개편 및 클라우드 환경 마이그레이션 프로젝트의 기획/설계 담당",
    projects: [
      {
        name: "사내 PMS(Project Management System) 개편 프로젝트",
        description: "기존 레거시 시스템을 클라우드 기반 최신 기술 스택으로 마이그레이션하고 기능 개편, 업무 표준화 및 UI/UX를 개선하는 프로젝트",
        role: "기획 및 설계, 문서화, 산출물 관리",
        tasks: [
          "AS-IS 기능 분석 및 분류",
          "각 부서별/계열사별 회의를 통한 요구사항 수집",
          "요구사항 정의 및 정의서 작성",
          "요구사항별 우선순위 부여",
          "TO-BE 기능 정의",
          "화면 설계 및 설계서 작성",
          "각종 산출물 관리"
        ],
        technologies: ["Google Sheets", "Google Slides", "Coda", "Slack", "MS Office"]
      }
    ],
    responsibilities: [
      "프로젝트 요구사항 수집 및 분석",
      "요구사항 정의서 작성 및 관리",
      "UI/UX 화면 설계 및 화면 설계서 작성",
      "이해관계자와의 효율적인 커뮤니케이션",
      "프로젝트 산출물 문서화 및 관리",
      "클라우드 엔지니어링 교육 참여"
    ],
    achievements: [
      "다수의 본사 부서 및 계열사의 요구사항을 성공적으로 수집 및 통합",
      "150개 이상의 요구사항을 분석하고 우선순위화하여 개발 로드맵 수립에 기여",
      "직관적인 화면 설계를 통해 사용자 경험 개선 방향 제시",
      "클라우드 기반 시스템으로의 전환을 위한 명확한 요구사항 정의에 기여",
    ],
    skills: ["요구사항 분석", "화면 설계", "문서화", "Slack", "Coda", "MS Office", "클라우드 인프라 이해", "AWS 기초 지식"],
    testimonial: "짧은 기간이었지만 프로젝트 기획 단계에서 중요한 역할을 수행하며 분석 및 문서화 능력을 키울 수 있었습니다. 특히 다양한 이해관계자들과의 소통을 통해 효과적인 요구사항 수집 및 정의 역량을 향상시킬 수 있었습니다. 또한 클라우드 기반 시스템으로의 마이그레이션 프로젝트에 참여함으로써 클라우드 인프라에 대한 이해도를 높이고, 확장성과 효율성을 고려한 설계 방법론을 배울 수 있었던 소중한 경험이었습니다."
  };

  return (
    <section className="ftco-section" id="work-experience">
      <div className="container">
        <div className="row justify-content-center pb-5">
          <div className="col-md-12 heading-section text-center ftco-animate">
            <span className="subheading">Experience</span>
            <h2 className="mb-4 text-dark">Work Experience</h2>
            <p className='noto-sans-kr'>기획과 설계 단계에서의 실무 경험과 성과를 소개합니다. 프로젝트 초기 단계에서 요구사항 수집부터 화면 설계까지 다양한 업무를 담당했습니다.</p>
          </div>
        </div>
        
        <div className="row d-flex">
          <div className="col-md-12 ftco-animate">
            <div className="work-experience-card p-4 shadow bg-white">
              {/* 회사 및 직위 정보 */}
              <div className="row mb-4">
                <div className="col-md-9">
                  <div className="d-flex align-items-center mb-2">
                    <div className="company-logo mr-3">
                      <img src={companyLogo} alt="Company Logo" className="img-fluid mt-3" />
                    </div>
                    <div>
                      {/* <h3 className="mb-1 text-dark noto-sans-kr fw-bold">{workExperience.position}</h3> */}
                      <h4 className="company-name text-dark fw-bold noto-sans-kr">
                        <FontAwesomeIcon icon={faBuilding} className="mr-2" />
                        {workExperience.company}
                      </h4>
                      <p className="job-description noto-sans-kr mt-2">
                        {workExperience.jobDescription}
                      </p>
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
              
              {/* 프로젝트 정보 */}
              <div className="projects-section mb-4">
                <h5 className="section-title noto-sans-kr">
                  <FontAwesomeIcon icon={faProjectDiagram} className="mr-2" />
                  참여 프로젝트
                </h5>
                
                {workExperience.projects.map((project, index) => (
                  <div key={index} className="project-item p-3 mb-3 bg-light rounded">
                    <h6 className="project-name noto-sans-kr fw-bold">
                      <FontAwesomeIcon icon={faFileAlt} className="mr-2" />
                      {project.name}
                    </h6>
                    <p className="project-description noto-sans-kr mb-2">{project.description}</p>
                    <p className="project-role noto-sans-kr mb-2"><strong>역할:</strong> {project.role}</p>
                    
                    <div className="project-tasks mb-3">
                      <strong className="noto-sans-kr">담당 업무:</strong>
                      <ul className="noto-sans-kr small-list">
                        {project.tasks.map((task, taskIndex) => (
                          <li key={taskIndex}>{task}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="project-technologies fw-bold">
                      {project.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="row">
                <div className="col-md-8 pr-md-5">
                  {/* 주요 업무 */}
                  <div className="responsibilities mb-4">
                    <h5 className="section-title noto-sans-kr">
                      <FontAwesomeIcon icon={faSitemap} className="mr-2" />
                      주요 업무 및 책임
                    </h5>
                    <ul className="noto-sans-kr work-list">
                      {workExperience.responsibilities.map((responsibility, index) => (
                        <li key={index}>{responsibility}</li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* 주요 성과 */}
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
                  {/* 사용 기술 */}
                  <div className="skills-used">
                    <h5 className="section-title mb-3 noto-sans-kr">
                      <FontAwesomeIcon icon={faPencilRuler} className="mr-2" />
                      보유 역량
                    </h5>
                    <div className="skills-container noto-sans-kr fw-bold">
                      {workExperience.skills.map((skill, index) => (
                        <span key={index} className="skill-badge">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* 연락하기 버튼 */}
                  <div className="contact-action mt-4 text-center noto-sans-kr">
                    <a href="#contact" className="contact-btn">
                      <FontAwesomeIcon icon={faEnvelope} className="mr-2" /> 연락하기
                    </a>
                  </div>
                </div>
              </div>
              
              {/* 소감 */}
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