import React from 'react';
import { useScrollAnimation } from '../../hooks/useAnimation';
import { useSite } from '../../context/SiteContext';
import { Link } from 'react-router-dom';

const Projects = () => {
  useScrollAnimation();
  
  // SiteContext에서 projects 데이터 가져오기
  const { state } = useSite();
  const { projects } = state;

  return (
    <section className="ftco-section ftco-project" id="projects-section">
      <div className="container-fluid px-md-4">
        <div className="row justify-content-center pb-5">
          <div className="col-md-12 heading-section text-center ftco-animate">
            <span className="subheading">My Work</span>
            <h2 className="mb-4 text-dark">Featured Projects</h2>
            <p className='noto-sans-kr'>개발자로서 성장해온 여정 속에서 진행한 다양한 프로젝트들을 소개합니다. 팀 협업과 개인 학습을 통해 웹/앱 개발 역량을 키우고 문제 해결 능력을 향상시켜 왔습니다. 각 프로젝트는 저의 기술적 성장과 도전 정신을 담고 있습니다.</p>
          </div>
        </div>
        <div className="row">
          {projects.map(project => (
            <div className="col-md-3" key={project.id}>
              <div 
                className="project img shadow ftco-animate d-flex justify-content-center align-items-center" 
                style={{ backgroundImage: `url(${project.image})` }}
              >
                <div className="overlay"></div>
                <div className="text text-center p-4">
                  <h3>
                    <Link to={`/project/${project.id}`}>{project.title}</Link>
                  </h3>
                  
                  {/* 카테고리는 한 줄에 표시되도록 처리 */}
                  <div className="category-wrapper" style={{ marginBottom: '10px' }}>
                    {project.category.split(', ').map((cat, index) => (
                      <span key={index} className="badge badge-light mr-1 mb-1">{cat}</span>
                    ))}
                  </div>
                  
                  {/* 추가 정보 표시 - 간결하게 */}
                  {project.completed && (
                    <div className="project-completed">
                      <small><i className="fa fa-calendar mr-1"></i>마지막 작업 - {project.completed}</small>
                    </div>
                  )}
                  {project.position && (
                    <div className="project-position">
                      <small><i className="fa fa-user mr-1"></i> {project.position}</small>
                    </div>
                  )}
                  
                  <div className="mt-3">
                    <Link to={`/project/${project.id}`} className="btn btn-outline-light btn-sm">
                      Details <i className="fa fa-arrow-right ml-1"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="row mt-5">
          <div className="col-md-12 text-center">
          <p className="noto-sans-kr">
            더 자세한 프로젝트 정보는 <a href="https://github.com/jungyoonn" target="_blank" rel="noopener noreferrer" style={{ color: '#9ea17e' }} className='fw-bold'>
              <i className="fa fa-github"></i> GitHub
            </a>에서 확인하실 수 있습니다.
          </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;