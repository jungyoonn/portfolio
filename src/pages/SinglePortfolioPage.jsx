import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSite } from '../context/SiteContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faUser, faServer, faCode, faLightbulb, faTasks, faUsers, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import '../css/single-portfolio-page.css';

const SinglePortfolioPage = () => {
  const { id } = useParams();
  const { getProjectById } = useSite();
  const [project, setProject] = useState(null);
  
  useEffect(() => {
    // 페이지 로드 시 상단으로 스크롤
    window.scrollTo(0, 0);
    
    // 프로젝트 ID로 데이터 가져오기
    if (id) {
      const projectData = getProjectById(parseInt(id));
      setProject(projectData);
    }
  }, [id, getProjectById]);

  if (!project) {
    return (
      <div className="container text-center py-5 my-5 noto-sans-kr fw-bold">
        <h2>프로젝트를 불러오는 중입니다...</h2>
      </div>
    );
  }

  // 카테고리 분리 (배열로 변환)
  const categories = project.category ? project.category.split(', ') : [];

  return (
    <>
      <section className="hero-wrap hero-wrap-2" style={{ 
        backgroundImage: `url(${project.image})`
      }}>
        <div className="overlay"></div>
        <div className="container">
          <div className="row no-gutters slider-text align-items-end justify-content-center">
            <div className="col-md-9 ftco-animate pb-5 text-center">
              <p className="breadcrumbs">
                {/* <span className="mr-2 fw-bold"><Link to="/">Home <i className="fa fa-chevron-right"></i></Link></span> 
                <span className="mr-2 fw-bold"><Link to="/#projects">Projects <i className="fa fa-chevron-right"></i></Link></span> 
                <span className="noto-sans-kr fw-bold">Project Detail</span> */}
                {project.projectLink && (
                  <div className="mt-3 noto-sans-kr">
                    <Link to={project.projectLink} className="btn btn-outline-dark btn-sm fw-bold">
                      사이트 방문하기 <i className="fa fa-arrow-right ml-1"></i>
                    </Link>
                  </div>
                )}
              </p>
              <h1 className="mb-0 bread noto-sans-kr">{project.title}</h1>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 ftco-animate">
              {/* 프로젝트 이미지 */}
              <div className="project-img mb-5">
                <img src={project.image} alt={project.title} className="img-fluid" />
              </div>
              
              {/* 프로젝트 개요 */}
              <div className="project-overview mb-5">
                <h2 className="mb-4 noto-sans-kr fw-bold section-title">프로젝트 개요</h2>
                <p className="noto-sans-kr">{project.description}</p>
              </div>
              
              {/* 내 역할 */}
              <div className="my-role mb-5">
                <h2 className="mb-4 noto-sans-kr section-title">
                  <FontAwesomeIcon icon={faUser} className="mr-2" />
                  담당 역할
                </h2>
                <div className="role-card">
                  <div className="d-flex align-items-center mb-3">
                    <span className="badge badge-primary mr-2 p-2 noto-sans-kr">{project.position}</span>
                    <p className="mb-0 noto-sans-kr">{project.role}</p>
                  </div>
                </div>
              </div>
              
              {/* 문제 해결 */}
              {project.challenge && project.solution && (
                <div className="problem-solving mb-5">
                  <h2 className="mb-4 noto-sans-kr section-title">
                    <FontAwesomeIcon icon={faLightbulb} className="mr-2" />
                    문제 해결 과정
                  </h2>
                  <div className="card shadow-sm mb-3">
                    <div className="card-body">
                      <h5 className="card-title noto-sans-kr">도전 과제</h5>
                      <p className="card-text noto-sans-kr">{project.challenge}</p>
                    </div>
                  </div>
                  <div className="card shadow-sm">
                    <div className="card-body">
                      <h5 className="card-title noto-sans-kr">해결 방법</h5>
                      <p className="card-text noto-sans-kr">{project.solution}</p>
                    </div>
                  </div>
                </div>
              )}
              
              {/* 협업 과정 */}
              {project.collaboration && (
                <div className="collaboration mb-5">
                  <h2 className="mb-4 noto-sans-kr section-title">
                    <FontAwesomeIcon icon={faUsers} className="mr-2" />
                    협업 과정
                  </h2>
                  <div className="card shadow-sm">
                    <div className="card-body">
                      <p className="card-text noto-sans-kr">{project.collaboration}</p>
                    </div>
                  </div>
                </div>
              )}
              
              {/* 사용 기술 */}
              <div className="technologies mb-5">
                <h2 className="mb-4 noto-sans-kr section-title">
                  <FontAwesomeIcon icon={faCode} className="mr-2" />
                  사용 기술
                </h2>
                <div className="tech-container">
                  {categories.map((category, index) => (
                    <span key={index} className="badge p-2 mr-2 mb-2" style={{ backgroundColor: '#b1b493', color: 'white' }}>
                      {category}
                    </span>
                  ))}
                  
                  {project.deploy && project.deploy.split(', ').map((tech, index) => (
                    <span key={`deploy-${index}`} className="badge p-2 mr-2 mb-2" style={{ backgroundColor: '#9ea17e', color: 'white' }}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* 배포 환경 */}
              {project.deploymentDetails && (
                <div className="deployment mb-5">
                  <h2 className="mb-4 noto-sans-kr section-title">
                    <FontAwesomeIcon icon={faServer} className="mr-2" />
                    배포 환경
                  </h2>
                  <div className="card shadow-sm">
                    <div className="card-body">
                      <p className="card-text noto-sans-kr">{project.deploymentDetails}</p>
                    </div>
                  </div>
                </div>
              )}
              
              {/* 배움과 성장 */}
              {project.learning && (
                <div className="learning-growth mb-5">
                  <h2 className="mb-4 noto-sans-kr section-title">
                    <FontAwesomeIcon icon={faGraduationCap} className="mr-2" />
                    배움과 성장
                  </h2>
                  <div className="card shadow-sm">
                    <div className="card-body">
                      <p className="card-text noto-sans-kr">{project.learning}</p>
                    </div>
                  </div>
                </div>
              )}
              
              {/* 결과 및 성과 */}
              {project.results && (
                <div className="results mb-5">
                  <h2 className="mb-4 noto-sans-kr section-title">
                    <FontAwesomeIcon icon={faTasks} className="mr-2" />
                    결과 및 성과
                  </h2>
                  <div className="card shadow-sm">
                    <div className="card-body">
                      <p className="card-text noto-sans-kr">{project.results}</p>
                    </div>
                  </div>
                </div>
              )}

              {/* GitHub 링크 */}
              {project.githubLink ? (<>
                <div className="github-link text-center mb-4">
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn btn-lg btn-primary"
                  >
                    <FontAwesomeIcon icon={faGithub} className="mr-2" /> 
                    <span className="noto-sans-kr">이 프로젝트 GitHub Repository 보기</span>
                  </a>
                </div>

                {/* 해당 프로젝트 소스 링크 */}
                <div className="github-link text-center mb-5">
                  <a 
                    href="https://github.com/jungyoonn" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn btn-lg btn-outline-primary"
                  >
                    <FontAwesomeIcon icon={faGithub} className="mr-2" /> 
                    <span className="noto-sans-kr">GitHub에서 더 많은 프로젝트 보기</span>
                  </a>
                </div>
              </>) : (
                <div className="github-link text-center mb-4">
                  <a 
                    href="https://github.com/jungyoonn" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn btn-lg btn-primary"
                  >
                    <FontAwesomeIcon icon={faGithub} className="mr-2" /> 
                    <span className="noto-sans-kr">GitHub에서 더 많은 프로젝트 보기</span>
                  </a>
                </div>
              )}
            </div>

            {/* 사이드바 */}
            <div className="col-lg-4 sidebar ftco-animate">
              {/* 프로젝트 정보 */}
              <div className="sidebar-box ftco-animate mb-5">
                <h3 className="heading-sidebar mb-4 noto-sans-kr">프로젝트 정보</h3>
                <div className="project-info-list">
                  <div className="d-flex mb-3">
                    <div style={{ minWidth: '30px' }}>
                      <FontAwesomeIcon icon={faCalendarAlt} />
                    </div>
                    <div>
                      <p className="mb-0 noto-sans-kr"><strong>완료일:</strong> {project.completed}</p>
                    </div>
                  </div>
                  <div className="d-flex mb-3">
                    <div style={{ minWidth: '30px' }}>
                      <FontAwesomeIcon icon={faUser} />
                    </div>
                    <div>
                      <p className="mb-0 noto-sans-kr"><strong>포지션:</strong> {project.position}</p>
                    </div>
                  </div>
                  {project.deploy && (
                    <div className="d-flex mb-3">
                      <div style={{ minWidth: '30px' }}>
                        <FontAwesomeIcon icon={faServer} />
                      </div>
                      <div>
                        <p className="mb-0 noto-sans-kr"><strong>배포환경:</strong> {project.deploy}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              
              {/* 관련 기술 */}
              <div className="sidebar-box ftco-animate mb-5">
                <h3 className="heading-sidebar mb-4 noto-sans-kr">사용 기술</h3>
                <div className="tagcloud">
                  {categories.map((category, index) => (
                    <a 
                      key={index} 
                      href="/" 
                      className="tag-cloud-link"
                      onClick={(e) => e.preventDefault()}
                    >
                      {category}
                    </a>
                  ))}
                </div>
              </div>

              {/* 다른 프로젝트 */}
              <div className="sidebar-box ftco-animate">
                <h3 className="heading-sidebar mb-4 noto-sans-kr">다른 프로젝트</h3>
                <OtherProjects currentId={project.id} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

// 다른 프로젝트 컴포넌트
const OtherProjects = ({ currentId }) => {
  const { state } = useSite();
  const { projects } = state;
  
  // 현재 프로젝트를 제외한 다른 프로젝트 중 최대 3개 선택
  const otherProjects = projects
    .filter(project => project.id !== currentId)
    .slice(0, 3);
  
  return (
    <div>
      {otherProjects.map(project => (
        <div key={project.id} className="block-21 mb-4 d-flex">
          <div className="blog-img mr-4" style={{ 
            backgroundImage: `url(${project.image})`
          }}></div>
          <div className="text">
            <h3 className="heading noto-sans-kr">
              <Link to={`/portfolio/${project.id}`}>{project.title}</Link>
            </h3>
            <div className="meta">
              <div>
                <a href="/" onClick={(e) => e.preventDefault()}>
                  <span className="fa fa-calendar mr-2"></span>{project.completed}
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SinglePortfolioPage;