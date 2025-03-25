import React, { useState } from 'react';
import { useScrollAnimation } from '../../hooks/useAnimation';

const Projects = () => {
  useScrollAnimation();
  
  // 프로젝트 데이터
  const [projects] = useState([
    {
      id: 1,
      title: 'Branding & Illustration Design',
      category: 'Web Design',
      image: 'images/work-1.jpg'
    },
    {
      id: 2,
      title: 'Branding & Illustration Design',
      category: 'Web Design',
      image: 'images/work-2.jpg'
    },
    {
      id: 3,
      title: 'Branding & Illustration Design',
      category: 'Web Design',
      image: 'images/work-3.jpg'
    },
    {
      id: 4,
      title: 'Branding & Illustration Design',
      category: 'Web Design',
      image: 'images/work-4.jpg'
    },
    {
      id: 5,
      title: 'Branding & Illustration Design',
      category: 'Web Design',
      image: 'images/work-5.jpg'
    },
    {
      id: 6,
      title: 'Branding & Illustration Design',
      category: 'Web Design',
      image: 'images/work-6.jpg'
    },
    {
      id: 7,
      title: 'Branding & Illustration Design',
      category: 'Web Design',
      image: 'images/work-7.jpg'
    },
    {
      id: 8,
      title: 'Branding & Illustration Design',
      category: 'Web Design',
      image: 'images/work-8.jpg'
    }
  ]);

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
                  <h3><a href="#">{project.title}</a></h3>
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