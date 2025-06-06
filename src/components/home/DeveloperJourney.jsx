import React from 'react';
import { FaCode, FaServer, FaDatabase, FaDesktop, FaMobileAlt, FaGraduationCap } from 'react-icons/fa';
import { IoRocketSharp } from 'react-icons/io5';
import '../../css/developer-journey.css';
import { useSite } from '../../context/SiteContext';

const DeveloperJourney = () => {
  // SiteContext에서 journeyEvents 데이터 가져오기
  const { state } = useSite();
  const { journeyEvents } = state;

  // 아이콘 타입에 따라 적절한 아이콘 컴포넌트 반환
  const getIconComponent = (iconType) => {
    switch(iconType) {
      case 'code':
        return <FaCode />;
      case 'server':
        return <FaServer />;
      case 'database':
        return <FaDatabase />;
      case 'desktop':
        return <FaDesktop />;
      case 'mobileAlt':
        return <FaMobileAlt />;
      case 'graduationCap':
        return <FaGraduationCap />;
      case 'rocket':
        return <IoRocketSharp />;
      default:
        return <FaCode />;
    }
  };

  return (
    <section className="ftco-section developer-journey-section" id="timeline">
      <div className="container">
        <div className="row justify-content-center pb-5">
          <div className="col-md-12 heading-section text-center ftco-animate">
            <span className="subheading">Developer Journey</span>
            <h2 className="mb-4">My Technical Growth Timeline</h2>
            <p className='noto-sans-kr'>대학교 새내기 시절부터 현재 시점까지, 끊임없는 기술적 성장과 도전 여정입니다. 정보보안, 웹 개발, 클라우드 인프라 구축 경험을 통해 끊임없이 발전하는 개발자로서의 열정과 여정을 담았습니다.</p>
          </div>
        </div>
        
        <div className="journey-timeline noto-sans-kr">
          {journeyEvents && journeyEvents.map((event, index) => (
            <div 
              key={event.id} 
              className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
            >
              <div className="timeline-item-content">
                <div className="timeline-icon">
                  {getIconComponent(event.iconType)}
                </div>
                <time>{event.date}</time>
                <h3>{event.title}</h3>
                <p>{event.description}</p>
                <div className="technology-tags">
                  {event.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag fw-bold">{tech}</span>
                  ))}
                </div>
                <span className="circle"></span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DeveloperJourney;