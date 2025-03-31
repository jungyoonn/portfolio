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
            <span className="subheading">Accomplishments</span>
            <h2 className="mb-4">Our Projects</h2>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
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
                    {/* 접근성 문제를 해결하기 위해 유효한 링크 경로 사용 또는 버튼으로 대체 */}
                    <Link to={`/project/${project.id}`}>{project.title}</Link>
                  </h3>
                  <span>{project.category}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;