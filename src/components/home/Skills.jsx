import React from 'react';
import { useSite } from '../../context/SiteContext';

const Skills = () => {
  // SiteContext에서 skills 데이터 가져오기
  const { state } = useSite();
  const { skills } = state;

  return (
    <section className="ftco-section bg-light" id="skills">
      <div className="container">
        <div className="row justify-content-center pb-5">
          <div className="col-md-12 heading-section text-center ftco-animate">
            <span className="subheading">Skills</span>
            <h2 className="mb-4 text-dark">My Skills</h2>
            <p className='noto-sans-kr'>백엔드는 Java와 Spring framework, 프론트엔드는 HTML, JSP, Javascript, React 활용에 강점을 가지고 있습니다.</p>
          </div>
        </div>
        <div className="row progress-circle mb-5">
          {skills.map((skill, index) => (
            <div className="col-lg-4 mb-4" key={index}>
              <div className="bg-white rounded-lg shadow p-4 ">
                <h2 className="h5 font-weight-bold text-center mb-4 text-dark">{skill.name}</h2>

                {/* Progress bar */}
                <div className="progress mx-auto text-dark mb-4" data-value={skill.value}>
                  <span className="progress-left">
                    <span className="progress-bar border-primary" style={skill.leftStyle}></span>
                  </span>
                  <span className="progress-right">
                    <span className="progress-bar border-primary" style={skill.rightStyle}></span>
                  </span>
                  <div className="progress-value w-100 h-100 rounded-circle d-flex align-items-center justify-content-center">
                    <div className="h2 font-weight-bold">{skill.value}<sup className="small">%</sup></div>
                  </div>
                </div>

                {/* Demo info */}
                {/* <div className="row text-center mt-4">
                  <div className="col-6 border-right">
                    <div className="h4 font-weight-bold mb-0">28%</div><span className="small text-gray">Last week</span>
                  </div>
                  <div className="col-6">
                    <div className="h4 font-weight-bold mb-0">60%</div><span className="small text-gray">Last month</span>
                  </div>
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;