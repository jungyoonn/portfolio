import React, { useState } from 'react';
import { useAnimation } from '../../hooks/useAnimation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDatabase, faMicrochip, faLanguage, faCopy, faCheck } from '@fortawesome/free-solid-svg-icons';
import { faAws } from "@fortawesome/free-brands-svg-icons";
// import myProfileImg from '../../img/my-profile-img.jpg';
import myProfileImg from '../../img/about_profile_img.jpg';

const About = () => {
  const { ref: animRef } = useAnimation();
  const [copied, setCopied] = useState(false);

  // 이메일 복사 함수
  const copyToClipboard = (email) => {
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // 2초 후 상태 초기화
    });
  };

  // 자격증 데이터
  const interests = [
    // { icon: faCertificate, text: 'Certificates : ' },
    { icon: faDatabase, text: 'SQL Developer', link: "https://s3.ap-northeast-2.amazonaws.com/eeerrorcode.bucket/uploads/portfolio/SQLD_%EC%9E%90%EA%B2%A9%EC%A6%9D.pdf" },
    { icon: faMicrochip, text: '정보처리기사', font: 'noto-sans-kr', link: "https://s3.ap-northeast-2.amazonaws.com/eeerrorcode.bucket/uploads/portfolio/%EC%A0%95%EB%B3%B4%EC%B2%98%EB%A6%AC%EA%B8%B0%EC%82%AC_%EC%9E%90%EA%B2%A9%EC%A6%9D.pdf" },
    { icon: faAws, text: 'AWS Solutions Architect'},
    { icon: faLanguage, text: 'JLPT', link: "https://s3.ap-northeast-2.amazonaws.com/eeerrorcode.bucket/uploads/portfolio/JLPT_%EC%9E%90%EA%B2%A9%EC%A6%9D.pdf"},
  ];

  // 소개글
  const intro = (
    <>
      {/* 백엔드는 Spring 프레임워크, 프론트엔드는 HTML, JSP, JavaScript, React 활용에 강점이 있습니다. <br /> */}
      대학 시절에 성실히 배워 이론적 기반을 다졌으며, 교육 기관에서 두 번의 실무 중심 교육을 통해 현업 기술을 습득했습니다.
      이전 직장에서는 프로젝트 기획/설계 단계에서 요구사항 수집 및 정의, 화면 설계 경험을 쌓았고, 이후 교육 과정을 통해 DB 설계부터 전체적인 개발 프로세스를 경험했습니다. 
      클라우드 기술에도 관심을 가지고 있어 확장 가능한 서비스 개발에 역량을 발휘할 수 있습니다. 
      사용자에게 실질적인 가치를 제공하는 서비스 개발을 통해 기업의 성장에 기여하고 함께 발전해 나가고 싶습니다.
    </>
  )

  return (
    <section className="ftco-about ftco-section ftco-no-pt ftco-no-pb" id="about">
      <div className="container">
        <div className="row d-flex no-gutters">
          <div className="col-md-6 col-lg-5 d-flex">
            <div className="img-about img d-flex align-items-stretch">
              <div className="overlay"></div>
              <div className="img d-flex align-self-stretch align-items-center" style={{ backgroundImage: `url(${myProfileImg})` }}>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-7 pl-md-4 pl-lg-5 py-5">
            <div className="py-md-5">
              <div className="row justify-content-start pb-3">
                <div className="col-md-12 heading-section ftco-animate" ref={animRef}>
                  <span className="subheading">My Intro</span>
                  <h2 className="mb-4" style={{ fontSize: '34px', textTransform: 'capitalize', color: 'black' }}>About Me</h2>
                  <p className='noto-sans-kr'>{intro}</p>
                  <ul className="about-info mt-4 px-md-0 px-2">
                    <li className="d-flex"><span>Name:</span> <span className='noto-sans-kr'>허정윤</span></li>
                    <li className="d-flex"><span>Date of birth:</span> <span className='noto-sans-kr'>1998년 5월 2일</span></li>
                    <li className="d-flex"><span>Address:</span> <span className='noto-sans-kr'>서울특별시 동작구 여의대방로 26길 56</span></li>
                    <li className="d-flex"><span>Zip code:</span> <span>07055</span></li>
                    <li className="d-flex">
                      <span>Email:</span> 
                      <div className='fw-bold' style={{ color: '#BEB99E', marginRight: '40px', flex: '1' }}>sophia76256@gmail.com
                        <button 
                          onClick={() => copyToClipboard('sophia76256@gmail.com')} 
                          className="btn btn-sm bg-transparent border-0 px-3 text-secondary"
                          title="이메일 주소 복사"
                          style={{ cursor: 'pointer' }}
                        >
                          <FontAwesomeIcon icon={copied ? faCheck : faCopy} />
                        </button>
                        {copied && <small className="text-success ml-1">(복사됨)</small>}
                      </div>
                    </li>
                    <li className="d-flex"><span>Phone: </span> <span>010-5191-9852</span></li>
                  </ul>
                </div>
                <div className="col-md-12">
                  <div className="my-interest d-lg-flex w-100">
                    {interests.map((interest, index) => (
                      <div className="interest-wrap d-flex align-items-center" key={index}>
                        <div className="icon d-flex align-items-center justify-content-center">
                          <FontAwesomeIcon icon={interest.icon} className='mx-2 text-white'></FontAwesomeIcon>
                        </div>
                        <div className={`text fw-bold ${interest.font || ''}`}>
                          {interest.link ? (
                            <a 
                              href={`${interest.link}`} 
                              className='text-decoration-none text-dark'
                              target="_blank" 
                              rel="noopener noreferrer"
                            >
                              {interest.text}
                            </a>
                          ) : (
                            <span>{interest.text}</span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;