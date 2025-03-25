import React from 'react';
import { useScrollAnimation } from '../../hooks/useAnimation';

const Services = () => {
  // 스크롤 애니메이션 적용
  useScrollAnimation();

  // 서비스 데이터
  const services = [
    {
      icon: 'flaticon-3d-design',
      title: 'Web Design',
      description: 'A small river named Duden flows by their place and supplies.'
    },
    {
      icon: 'flaticon-app-development',
      title: 'Web Application',
      description: 'A small river named Duden flows by their place and supplies.'
    },
    {
      icon: 'flaticon-web-programming',
      title: 'Web Development',
      description: 'A small river named Duden flows by their place and supplies.'
    },
    {
      icon: 'flaticon-branding',
      title: 'Banner Design',
      description: 'A small river named Duden flows by their place and supplies.'
    },
    {
      icon: 'flaticon-computer',
      title: 'Branding',
      description: 'A small river named Duden flows by their place and supplies.'
    },
    {
      icon: 'flaticon-vector',
      title: 'Icon Design',
      description: 'A small river named Duden flows by their place and supplies.'
    },
    {
      icon: 'flaticon-vector',
      title: 'Graphic Design',
      description: 'A small river named Duden flows by their place and supplies.'
    },
    {
      icon: 'flaticon-zoom',
      title: 'SEO',
      description: 'A small river named Duden flows by their place and supplies.'
    }
  ];

  return (
    <section className="ftco-section" id="services-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-12 heading-section text-center ftco-animate mb-5">
            <span className="subheading">I am grat at</span>
            <h2 className="mb-4">We do awesome services for our clients</h2>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
          </div>
        </div>

        <div className="row">
          {services.slice(0, 4).map((service, index) => (
            <div className="col-md-6 col-lg-3" key={index}>
              <div className="media block-6 services d-block bg-white rounded-lg shadow ftco-animate">
                <div className="icon d-flex align-items-center justify-content-center">
                  <span className={service.icon}></span>
                </div>
                <div className="media-body">
                  <h3 className="heading mb-3">{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="row">
          {services.slice(4).map((service, index) => (
            <div className="col-md-6 col-lg-3" key={index}>
              <div className="media block-6 services d-block bg-white rounded-lg shadow ftco-animate">
                <div className="icon shadow d-flex align-items-center justify-content-center">
                  <span className={service.icon}></span>
                </div>
                <div className="media-body">
                  <h3 className="heading mb-3">{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;