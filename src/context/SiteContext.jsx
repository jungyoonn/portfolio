import React, { createContext, useContext, useReducer, useEffect, useCallback } from 'react';

// 초기 상태 정의 - 각 컴포넌트의 데이터 통합
const initialState = {
  isLoading: true,
  activeSection: 'home',
  isDarkMode: false,
  blogs: [
    {
      id: 1,
      title: 'Why Lead Generation is Key for Business Growth',
      excerpt: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
      date: 'July 03, 2020',
      author: 'Admin',
      comments: 3,
      image: 'images/image_1.jpg',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, eius mollitia suscipit, quisquam doloremque distinctio perferendis et doloribus unde architecto optio laboriosam porro adipisci sapiente officiis nemo accusamus ad praesentium? Esse minima nisi et. Dolore perferendis, enim praesentium omnis, iste doloremque quia officia optio deserunt molestiae voluptates soluta architecto tempora.',
      tags: ['Business', 'Marketing', 'Growth']
    },
    {
      id: 2,
      title: 'Why Lead Generation is Key for Business Growth',
      excerpt: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
      date: 'July 03, 2020',
      author: 'Admin',
      comments: 3,
      image: 'images/image_2.jpg',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, eius mollitia suscipit, quisquam doloremque distinctio perferendis et doloribus unde architecto optio laboriosam porro adipisci sapiente officiis nemo accusamus ad praesentium? Esse minima nisi et. Dolore perferendis, enim praesentium omnis, iste doloremque quia officia optio deserunt molestiae voluptates soluta architecto tempora.',
      tags: ['Web', 'Design', 'Development']
    },
    {
      id: 3,
      title: 'Why Lead Generation is Key for Business Growth',
      excerpt: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
      date: 'July 03, 2020',
      author: 'Admin',
      comments: 3,
      image: 'images/image_3.jpg',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, eius mollitia suscipit, quisquam doloremque distinctio perferendis et doloribus unde architecto optio laboriosam porro adipisci sapiente officiis nemo accusamus ad praesentium? Esse minima nisi et. Dolore perferendis, enim praesentium omnis, iste doloremque quia officia optio deserunt molestiae voluptates soluta architecto tempora.',
      tags: ['Tech', 'SEO', 'Marketing']
    }
  ],
  // Projects.jsx
  projects: [
    {
      id: 1,
      title: 'Branding & Illustration Design',
      category: 'Web Design',
      image: 'images/work-1.jpg',
      client: 'XYZ Company',
      completed: 'July 2020',
      description: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.'
    },
    {
      id: 2,
      title: 'Branding & Illustration Design',
      category: 'Web Design',
      image: 'images/work-2.jpg',
      client: 'ABC Corporation',
      completed: 'June 2020',
      description: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.'
    },
    {
      id: 3,
      title: 'Branding & Illustration Design',
      category: 'Web Design',
      image: 'images/work-3.jpg',
      client: '123 Industries',
      completed: 'May 2020',
      description: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.'
    },
    {
      id: 4,
      title: 'Branding & Illustration Design',
      category: 'Web Design',
      image: 'images/work-4.jpg',
      client: 'Creative Studio',
      completed: 'April 2020',
      description: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.'
    },
    {
      id: 5,
      title: 'Branding & Illustration Design',
      category: 'Web Design',
      image: 'images/work-5.jpg',
      client: 'Design Lab',
      completed: 'March 2020',
      description: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.'
    },
    {
      id: 6,
      title: 'Branding & Illustration Design',
      category: 'Web Design',
      image: 'images/work-6.jpg',
      client: 'Marketing Pro',
      completed: 'February 2020',
      description: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.'
    },
    {
      id: 7,
      title: 'Branding & Illustration Design',
      category: 'Web Design',
      image: 'images/work-7.jpg'
    },
    {
      id: 8,
      title: 'Branding & Illustration Design',
      category: 'Web Design',
      image: 'images/work-8.jpg'
    }
  ],
  // Testimonials.jsx
  testimonials: [
    {
      id: 1,
      name: 'Roger Scott',
      position: 'Marketing Manager',
      image: 'images/person_1.jpg',
      text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.'
    },
    {
      id: 2,
      name: 'Roger Scott',
      position: 'Marketing Manager',
      image: 'images/person_2.jpg',
      text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.'
    },
    {
      id: 3,
      name: 'Roger Scott',
      position: 'Marketing Manager',
      image: 'images/person_3.jpg',
      text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.'
    },
    {
      id: 4,
      name: 'Roger Scott',
      position: 'Marketing Manager',
      image: 'images/person_1.jpg',
      text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.'
    },
    {
      id: 5,
      name: 'Roger Scott',
      position: 'Marketing Manager',
      image: 'images/person_2.jpg',
      text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.'
    }
  ],
  // Skills.jsx
  skills: [
    { 
      name: 'HTML', 
      value: 97, 
      leftStyle: { transform: 'rotate(169.2deg)' },
      rightStyle: { transform: 'rotate(180deg)' }
    },
    { 
      name: 'C', 
      value: 95, 
      leftStyle: { transform: 'rotate(162deg)' },
      rightStyle: { transform: 'rotate(180deg)' } 
    },
    { 
      name: 'Spring', 
      value: 92, 
      leftStyle: { transform: 'rotate(151.2deg)' },
      rightStyle: { transform: 'rotate(180deg)' } 
    },
    { 
      name: 'JPA, JPQL', 
      value: 92, 
      leftStyle: { transform: 'rotate(151.2deg)' },
      rightStyle: { transform: 'rotate(180deg)' } 
    },
    { 
      name: 'CSS', 
      value: 91, 
      leftStyle: { transform: 'rotate(147.6deg)' },
      rightStyle: { transform: 'rotate(180deg)' } 
    },
    { 
      name: 'Nodejs', 
      value: 90, 
      leftStyle: { transform: 'rotate(144deg)' },
      rightStyle: { transform: 'rotate(180deg)' } 
    },
    { 
      name: 'Javascript', 
      value: 89, 
      leftStyle: { transform: 'rotate(140.4deg)' },
      rightStyle: { transform: 'rotate(180deg)' } 
    },
    { 
      name: 'jQuery', 
      value: 89, 
      leftStyle: { transform: 'rotate(140.4deg)' },
      rightStyle: { transform: 'rotate(180deg)' } 
    },
    { 
      name: 'MyBatis', 
      value: 88, 
      leftStyle: { transform: 'rotate(136.8deg)' },
      rightStyle: { transform: 'rotate(180deg)' } 
    },
    { 
      name: 'Servlet', 
      value: 88, 
      leftStyle: { transform: 'rotate(136.8deg)' },
      rightStyle: { transform: 'rotate(180deg)' } 
    },
    { 
      name: 'C++', 
      value: 88, 
      leftStyle: { transform: 'rotate(136.8deg)' },
      rightStyle: { transform: 'rotate(180deg)' } 
    },
    { 
      name: 'JSP', 
      value: 88, 
      leftStyle: { transform: 'rotate(136.8deg)' },
      rightStyle: { transform: 'rotate(180deg)' } 
    },
    { 
      name: 'SQL', 
      value: 87, 
      leftStyle: { transform: 'rotate(133.2deg)' },
      rightStyle: { transform: 'rotate(180deg)' } 
    },
    { 
      name: 'Java', 
      value: 85, 
      leftStyle: { transform: 'rotate(126deg)' },
      rightStyle: { transform: 'rotate(180deg)' } 
    },
    { 
      name: 'Ubuntu', 
      value: 85, 
      leftStyle: { transform: 'rotate(126deg)' },
      rightStyle: { transform: 'rotate(180deg)' } 
    },
    { 
      name: 'AWS', 
      value: 82, 
      leftStyle: { transform: 'rotate(115.2deg)' },
      rightStyle: { transform: 'rotate(180deg)' } 
    },
    { 
      name: 'React', 
      value: 80, 
      leftStyle: { transform: 'rotate(108deg)' },
      rightStyle: { transform: 'rotate(180deg)' } 
    },
    { 
      name: 'NginX', 
      value: 79, 
      leftStyle: { transform: 'rotate(104.4deg)' },
      rightStyle: { transform: 'rotate(180deg)' } 
    },
    { 
      name: 'Mustache', 
      value: 76, 
      leftStyle: { transform: 'rotate(93.6deg)' },
      rightStyle: { transform: 'rotate(180deg)' } 
    },
    { 
      name: 'NoSQL', 
      value: 72, 
      leftStyle: { transform: 'rotate(79.2deg)' },
      rightStyle: { transform: 'rotate(180deg)' } 
    },
    { 
      name: 'Kotlin', 
      value: 71, 
      leftStyle: { transform: 'rotate(75.6deg)' },
      rightStyle: { transform: 'rotate(180deg)' } 
    },
    { 
      name: 'Querydsl', 
      value: 70, 
      leftStyle: { transform: 'rotate(72deg)' },
      rightStyle: { transform: 'rotate(180deg)' } 
    },
    { 
      name: 'C#', 
      value: 68, 
      leftStyle: { transform: 'rotate(64.8deg)' },
      rightStyle: { transform: 'rotate(180deg)' } 
    },
    { 
      name: 'Thymeleaf', 
      value: 69, 
      leftStyle: { transform: 'rotate(68.4deg)' },
      rightStyle: { transform: 'rotate(180deg)' } 
    }
  ],
  // Services.jsx
  services: [
    {
      iconType: 'faCode',
      title: "웹 애플리케이션 개발",
      description: "React, HTML, CSS, JavaScript를 활용한 반응형 웹 사이트 및 애플리케이션 개발"
    },
    {
      iconType: 'faServer',
      title: "백엔드 시스템 구축",
      description: "Spring Framework, Java를 활용한 안정적이고 확장 가능한 서버 시스템 구현"
    },
    {
      iconType: 'faDatabase',
      title: "데이터베이스 설계",
      description: "SQL, JPA, MyBatis를 활용한 효율적인 데이터베이스 모델링 및 쿼리 최적화"
    },
    {
      iconType: 'faCloud',
      title: "클라우드 인프라 구축",
      description: "AWS, Ubuntu, NginX를 활용한 확장 가능한 클라우드 환경 설정 및 배포"
    },
    {
      iconType: 'faExchangeAlt',
      title: "API 개발 및 통합",
      description: "RESTful API 설계 및 개발, 외부 시스템과의 효율적인 데이터 통합"
    },
    {
      iconType: 'faMobileAlt',
      title: "반응형 웹 구현",
      description: "다양한 디바이스와 화면 크기에 최적화된, 사용자 중심의 직관적이고 매력적인 반응형 웹 인터페이스 설계 및 구현"
    },
    {
      iconType: 'faSitemap',
      title: "프로젝트 기획 및 설계",
      description: "요구사항 분석, 기능 정의, 화면 설계 등 프로젝트의 초기 단계 기획 지원"
    },
    {
      iconType: 'faTools',
      title: "시스템 유지 보수",
      description: "기존 시스템의 성능 최적화, 버그 수정 및 새로운 기능 추가"
    }
  ],
  // Portfolio.jsx
  portfolios: [
    {
      id: 1,
      title: 'Why Lead Generation is Key for Business Growth',
      excerpt: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
      date: 'July 03, 2020',
      author: 'Admin',
      comments: 3,
      image: 'images/image_1.jpg'
    },
    {
      id: 2,
      title: 'Why Lead Generation is Key for Business Growth',
      excerpt: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
      date: 'July 03, 2020',
      author: 'Admin',
      comments: 3,
      image: 'images/image_2.jpg'
    },
    {
      id: 3,
      title: 'Why Lead Generation is Key for Business Growth',
      excerpt: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
      date: 'July 03, 2020',
      author: 'Admin',
      comments: 3,
      image: 'images/image_3.jpg'
    }
  ]
};

// 리듀서 정의
const siteReducer = (state, action) => {
  switch (action.type) {
    case 'SET_LOADING':
      return { ...state, isLoading: action.payload };
    case 'SET_ACTIVE_SECTION':
      return { ...state, activeSection: action.payload };
    case 'TOGGLE_DARK_MODE':
      return { ...state, isDarkMode: !state.isDarkMode };
    case 'ADD_BLOG':
      return { ...state, blogs: [...state.blogs, action.payload] };
    case 'UPDATE_BLOG':
      return {
        ...state,
        blogs: state.blogs.map(blog =>
          blog.id === action.payload.id ? { ...blog, ...action.payload } : blog
        )
      };
    case 'DELETE_BLOG':
      return {
        ...state,
        blogs: state.blogs.filter(blog => blog.id !== action.payload)
      };
    case 'ADD_PROJECT':
      return { ...state, projects: [...state.projects, action.payload] };
    case 'UPDATE_PROJECT':
      return {
        ...state,
        projects: state.projects.map(project =>
          project.id === action.payload.id ? { ...project, ...action.payload } : project
        )
      };
    case 'DELETE_PROJECT':
      return {
        ...state,
        projects: state.projects.filter(project => project.id !== action.payload)
      };
    default:
      return state;
  }
};

// Context 생성
const SiteContext = createContext();

// Context Provider 컴포넌트
export const SiteProvider = ({ children }) => {
  const [state, dispatch] = useReducer(siteReducer, initialState);

  // 다크 모드 상태가 변경될 때 body 클래스에 적용
  useEffect(() => {
    if (state.isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [state.isDarkMode]);

  // 페이지 로드 시 로딩 상태 변경
  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch({ type: 'SET_LOADING', payload: false });
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // 스크롤 시 액티브 섹션 결정
  const handleScroll = useCallback(() => {
    const sections = document.querySelectorAll('section[id]');
    const scrollPosition = window.scrollY + 200;

    sections.forEach(section => {
      const sectionId = section.getAttribute('id');
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        dispatch({ type: 'SET_ACTIVE_SECTION', payload: sectionId });
      }
    });
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // 초기 실행
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  // 블로그 관련 함수들
  const getBlogById = useCallback((id) => {
    return state.blogs.find(blog => blog.id === parseInt(id));
  }, [state.blogs]);

  // 프로젝트 관련 함수들
  const getProjectById = useCallback((id) => {
    return state.projects.find(project => project.id === parseInt(id));
  }, [state.projects]);

  // Context 값
  const contextValue = {
    state,
    dispatch,
    getBlogById,
    getProjectById
  };

  return (
    <SiteContext.Provider value={contextValue}>
      {children}
    </SiteContext.Provider>
  );
};

// Context를 사용하기 위한 커스텀 훅
export const useSite = () => {
  const context = useContext(SiteContext);
  if (!context) {
    throw new Error('useSite must be used within a SiteProvider');
  }
  return context;
};