import React from 'react';
import hireMeImg from '../../img/slider_profile_img1.png';

const HireMeSection = () => {
  return (
    <section className="ftco-hireme">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-md-8 col-lg-8 d-flex align-items-center">
            <div className="w-100 py-4">
              <h2 className='noto-sans-kr'>기업의 성장과 더불어 함께 발전해 나가고 싶습니다!</h2>
              <p className='noto-sans-kr'>열정과 잠재력을 갖춘 풀스택 개발자로서 새로운 도전에 참여하고 싶습니다. 6개월의 실무 경험과 교육 과정에서 쌓은 기술력을 바탕으로, 프로젝트에 신선한 관점과 배움에 대한 의지를 더하겠습니다. 성장하는 팀의 일원이 되어 함께 가치 있는 경험을 쌓고 싶습니다.</p>
              <p className="mb-0">
              <a href="#contact" className="btn btn-white py-3 px-4">Contact me</a>
              </p>
            </div>
          </div>
          <div className="col-md-4 col-lg-4 d-flex align-items-end">
            <img src={hireMeImg} className="img-fluid" alt="Author" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HireMeSection;