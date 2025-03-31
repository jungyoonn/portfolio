import React from 'react';
import { useSite } from '../../context/SiteContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCode, 
  faServer, 
  faDatabase, 
  faCloud, 
  faExchangeAlt, 
  faMobileAlt, 
  faPencilRuler, 
  faTools,
  faSitemap
} from '@fortawesome/free-solid-svg-icons';

const Services = () => {
  // 컨텍스트에서 서비스 데이터 가져오기
  const { state } = useSite();
  const { services } = state;

  // 아이콘 맵핑 함수
  const getIcon = (iconType) => {
    const iconMap = {
      faCode: faCode,
      faServer: faServer,
      faDatabase: faDatabase,
      faCloud: faCloud,
      faExchangeAlt: faExchangeAlt,
      faMobileAlt: faMobileAlt,
      faPencilRuler: faPencilRuler,
      faTools: faTools,
      faSitemap: faSitemap
    };
    
    return <FontAwesomeIcon icon={iconMap[iconType]} className='text-white fa-xl icon-fixed' />;
  };

  return (
    <section className="ftco-section" id="services-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-12 heading-section text-center ftco-animate mb-5">
            <span className="subheading">Services</span>
            <h2 className="mb-4 text-dark">My Services</h2>
            <p className="noto-sans-kr">다양한 기술 스택을 활용하여 기획부터 배포까지 원스톱 개발 프로세스를 연구하고 있습니다.</p>
          </div>
        </div>

        <div className="row">
          {services && services.slice(0, 4).map((service, index) => (
            <div className="col-md-6 col-lg-3 mb-4 d-flex" key={index}>
              <div className="media block-6 services d-block bg-white rounded-lg shadow ftco-animate w-100">
                <div className="icon d-flex align-items-center justify-content-center">
                  {getIcon(service.iconType)}
                </div>
                <div className="media-body px-3 py-2">
                  <h3 className="heading mb-3 noto-sans-kr text-dark">{service.title}</h3>
                  <p className='noto-sans-kr service-description'>{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="row mt-5">
          {services && services.slice(4).map((service, index) => (
            <div className="col-md-6 col-lg-3 mb-4" key={index + 4}>
              <div className="media block-6 services d-block bg-white rounded-lg shadow ftco-animate">
                <div className="icon d-flex align-items-center justify-content-center">
                  {getIcon(service.iconType)}
                </div>
                <div className="media-body px-3 py-2">
                  <h3 className="heading mb-3 noto-sans-kr text-dark">{service.title}</h3>
                  <p className='noto-sans-kr service-description'>{service.description}</p>
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