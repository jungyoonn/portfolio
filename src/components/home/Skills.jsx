import React, { useEffect, useState } from 'react';

const Skills = () => {
  // 스킬 데이터
  const [skills, setSkills] = useState([
    { name: 'HTML', value: 97, style: {} },
    { name: 'C', value: 95, style: {} },
    { name: 'Spring', value: 92, style: {} },
    { name: 'JPA, JPQL', value: 92, style: {} },
    { name: 'CSS', value: 91, style: {} },
    { name: 'Nodejs', value: 90, style: {} },
    { name: 'Javascript', value: 89, style: {} },
    { name: 'jQuery', value: 89, style: {} },
    { name: 'MyBatis', value: 88, style: {} },
    { name: 'Servlet', value: 88, style: {} },
    { name: 'C++', value: 88, style: {} },
    { name: 'JSP', value: 88, style: {} },
    { name: 'SQL', value: 87, style: {} },
    { name: 'Java', value: 85, style: {} },
    { name: 'Ubuntu', value: 85, style: {} },
    { name: 'AWS', value: 82, style: {} },
    { name: 'React', value: 80, style: {} },
    { name: 'NginX', value: 79, style: {} },
    { name: 'Mustache', value: 76, style: {} },
    { name: 'NoSQL', value: 72, style: {} },
    { name: 'Kotlin', value: 71, style: {} },
    { name: 'Querydsl', value: 70, style: {} },
    { name: 'C#', value: 68, style: {} },
    { name: 'Thymeleaf', value: 69, style: {} },
  ]);


  useEffect(() => {
    // 스킬 스타일 업데이트
    setSkills(prevSkills => 
      prevSkills.map(skill => {
        const leftStyle = {};
        const rightStyle = {};
        
        if (skill.value > 0) {
          if (skill.value <= 50) {
            rightStyle.transform = `rotate(${skill.value * 3.6}deg)`;
          } else {
            rightStyle.transform = 'rotate(180deg)';
            leftStyle.transform = `rotate(${(skill.value - 50) * 3.6}deg)`;
          }
        }
        
        return {
          ...skill,
          leftStyle,
          rightStyle
        };
      })
    );
  }, []);

  return (
    <section className="ftco-section bg-light" id="skills-section">
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