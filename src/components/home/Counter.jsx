import React, { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faCalendarCheck, faCalendarAlt, faBookBookmark } from '@fortawesome/free-solid-svg-icons';

const Counter = () => {
  // 카운터 참조
  const counterRefs = useRef([]);

  useEffect(() => {
    const counters = counterRefs.current;
    
    const startCounting = () => {
      counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-number'), 10);
        let count = 0;
        const updateCount = () => {
          const increment = target / 100;
          if (count < target) {
            count += increment;
            counter.innerText = Math.ceil(count);
            setTimeout(updateCount, 20);
          } else {
            counter.innerText = target;
          }
        };
        updateCount();
      });
    };

    // Intersection Observer를 사용하여 카운터가 화면에 나타났을 때 실행
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            startCounting();
            observer.disconnect();
          }
        });
      },
      { threshold: 0.5 }
    );

    // 첫 번째 카운터 요소를 관찰
    if (counters.length > 0) {
      observer.observe(counters[0].parentElement);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  // 카운터 데이터 - 폰트어썸 아이콘으로 변경
  const counterData = [
    { icon: faBriefcase, number: 6, title: 'Project Complete' },
    { icon: faBookBookmark, number: 35, title: 'Github repositories' },
    { icon: faCalendarCheck, number: 1039, title: 'Contributions in 2024' },
    { icon: faCalendarAlt, number: 761, title: 'Contributions in 2025' }
  ];

  return (
    <section className="ftco-counter img bg-light" id="section-counter">
      <div className="container">
        <div className="row">
          {counterData.map((item, index) => (
            <div className="col-md-3 justify-content-center counter-wrap ftco-animate" key={index}>
              <div className="block-18 d-flex">
                <div className="icon d-flex justify-content-center align-items-center text-white">
                  <FontAwesomeIcon icon={item.icon} size="2x" />
                </div>
                <div className="text">
                  <strong 
                    className="number" 
                    data-number={item.number} 
                    ref={el => counterRefs.current[index] = el}
                  >
                    0
                  </strong>
                  <span>{item.title}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Counter;