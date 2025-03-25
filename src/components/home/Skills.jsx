import React, { useEffect } from 'react';

const Skills = () => {
  useEffect(() => {
    // 원형 진행 막대 초기화 함수
    const initializeProgressCircle = () => {
      document.querySelectorAll('.progress').forEach(progress => {
        const value = progress.getAttribute('data-value');
        const left = progress.querySelector('.progress-left .progress-bar');
        const right = progress.querySelector('.progress-right .progress-bar');
        
        if (value > 0) {
          if (value <= 50) {
            right.style.transform = `rotate(${value * 3.6}deg)`;
          } else {
            right.style.transform = 'rotate(180deg)';
            left.style.transform = `rotate(${(value - 50) * 3.6}deg)`;
          }
        }
      });
    };

    // 컴포넌트가 마운트된 후 진행 원형 초기화
    initializeProgressCircle();
    
    // 윈도우 리사이즈 시 다시 초기화
    window.addEventListener('resize', initializeProgressCircle);
    
    return () => {
      window.removeEventListener('resize', initializeProgressCircle);
    };
  }, []);

  // 스킬 데이터
  const skills = [
    { name: 'CSS', value: 95 },
    { name: 'HTML', value: 98 },
    { name: 'jQuery', value: 68 },
    { name: 'Photoshop', value: 92 },
    { name: 'WordPress', value: 83 },
    { name: 'SEO', value: 95 }
  ];

  return (
    <section className="ftco-section bg-light" id="skills-section">
      <div className="container">
        <div className="row justify-content-center pb-5">
          <div className="col-md-12 heading-section text-center ftco-animate">
            <span className="subheading">Skills</span>
            <h2 className="mb-4">My Skills</h2>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
          </div>
        </div>
        <div className="row progress-circle mb-5">
          {skills.map((skill, index) => (
            <div className="col-lg-4 mb-4" key={index}>
              <div className="bg-white rounded-lg shadow p-4">
                <h2 className="h5 font-weight-bold text-center mb-4">{skill.name}</h2>

                {/* Progress bar */}
                <div className="progress mx-auto" data-value={skill.value}>
                  <span className="progress-left">
                    <span className="progress-bar border-primary"></span>
                  </span>
                  <span className="progress-right">
                    <span className="progress-bar border-primary"></span>
                  </span>
                  <div className="progress-value w-100 h-100 rounded-circle d-flex align-items-center justify-content-center">
                    <div className="h2 font-weight-bold">{skill.value}<sup className="small">%</sup></div>
                  </div>
                </div>

                {/* Demo info */}
                <div className="row text-center mt-4">
                  <div className="col-6 border-right">
                    <div className="h4 font-weight-bold mb-0">28%</div><span className="small text-gray">Last week</span>
                  </div>
                  <div className="col-6">
                    <div className="h4 font-weight-bold mb-0">60%</div><span className="small text-gray">Last month</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;