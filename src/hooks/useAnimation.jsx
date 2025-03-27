import { useEffect, useRef, useState, useCallback } from 'react';

/**
 * 요소의 뷰포트 내 가시성을 감지하여 애니메이션 적용
 * @param {string} animation - 적용할 애니메이션 클래스 (기본값: 'fadeInUp')
 * @param {Object} options - IntersectionObserver 옵션
 * @returns {Object} ref - 적용할 요소의 ref
 */
export const useAnimation = (animation = 'fadeInUp', options = {}) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            // 요소가 화면에 들어오면 애니메이션 클래스 추가
            entry.target.classList.add('animated', animation);
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1, // 10% 이상 보일 때 실행
        ...options
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [animation, isVisible, options]);

  return { ref, isVisible };
};

/**
 * 스크롤 애니메이션 감지를 위한 훅
 * @param {string} selector - 애니메이션을 적용할 요소의 선택자 (기본값: '.ftco-animate')
 * @param {string} animation - 적용할 애니메이션 클래스 (기본값: 'fadeInUp')
 */
export const useScrollAnimation = (selector = '.ftco-animate', animation = 'fadeInUp') => {
  const [elements, setElements] = useState([]);
  
  // 요소가 뷰포트 내에 있는지 확인하는 함수
  const elementInView = useCallback((el, dividend = 1) => {
    const rect = el.getBoundingClientRect();
    return (
      rect.top <= (window.innerHeight || document.documentElement.clientHeight) / dividend &&
      rect.bottom >= 0 &&
      rect.left <= (window.innerWidth || document.documentElement.clientWidth) / dividend &&
      rect.right >= 0
    );
  }, []);

  // 애니메이션 적용 함수
  const displayScrollElement = useCallback((element) => {
    if (!element.classList.contains('animated')) {
      element.classList.add('animated', animation);
    }
  }, [animation]);

  // useEffect 하나로 통합
  useEffect(() => {
    // DOM이 로드된 후 요소 수집
    const scrollElements = Array.from(document.querySelectorAll(selector));
    setElements(scrollElements);
    
    // 스크롤 핸들러 정의
    const handleScrollAnimation = () => {
      scrollElements.forEach((el) => {
        if (elementInView(el, 1.25)) {
          displayScrollElement(el);
        }
      });
    };

    // 초기 실행
    setTimeout(() => {
      handleScrollAnimation();
    }, 300);
    
    // 스크롤 이벤트 리스너 등록
    window.addEventListener('scroll', handleScrollAnimation, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScrollAnimation);
    };
  }, [selector, elementInView, displayScrollElement]); // 불필요한 의존성 제거
};

/**
 * 원형 진행 막대 초기화를 위한 훅
 * @param {string} selector - 진행 막대 요소의 선택자 (기본값: '.progress')
 * @param {number} delay - 초기화 지연 시간 (ms) (기본값: 500)
 */
export const useProgressCircle = (selector = '.progress', delay = 500) => {
  const [isInitialized, setIsInitialized] = useState(false);

  // 진행 막대 초기화 함수
  const initializeProgressCircle = useCallback(() => {
    const progressBars = document.querySelectorAll(selector);
    
    progressBars.forEach(progress => {
      const value = parseInt(progress.getAttribute('data-value') || '0', 10);
      const left = progress.querySelector('.progress-left .progress-bar');
      const right = progress.querySelector('.progress-right .progress-bar');
      
      if (!left || !right) return;
      
      // 애니메이션 효과를 위해 초기화
      left.style.transform = 'rotate(0deg)';
      right.style.transform = 'rotate(0deg)';
      
      // 약간의 지연 후 애니메이션 적용
      setTimeout(() => {
        if (value > 0) {
          if (value <= 50) {
            right.style.transform = `rotate(${value * 3.6}deg)`;
          } else {
            right.style.transform = 'rotate(180deg)';
            left.style.transform = `rotate(${(value - 50) * 3.6}deg)`;
          }
        }
      }, 100);
    });

    setIsInitialized(true);
  }, [selector]);

  // 초기화 및 이벤트 리스너
  useEffect(() => {
    // DOM이 로드된 후 지연 시간을 두고 초기화
    const timer = setTimeout(() => {
      initializeProgressCircle();
    }, delay);
    
    // 리사이즈 이벤트 시 다시 초기화
    window.addEventListener('resize', initializeProgressCircle);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', initializeProgressCircle);
    };
  }, [delay, initializeProgressCircle]);

  // 수동으로 초기화 트리거할 수 있는 함수 제공
  return { 
    initializeProgressCircle,
    isInitialized
  };
};