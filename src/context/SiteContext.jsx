import React, { createContext, useContext, useReducer, useEffect, useCallback } from 'react';

// 초기 상태 정의
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
    }
  ],
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
    }
  ],
  skills: [
    { name: 'CSS', value: 95, lastWeek: 28, lastMonth: 60 },
    { name: 'HTML', value: 98, lastWeek: 28, lastMonth: 60 },
    { name: 'jQuery', value: 68, lastWeek: 28, lastMonth: 60 },
    { name: 'Photoshop', value: 92, lastWeek: 28, lastMonth: 60 },
    { name: 'WordPress', value: 83, lastWeek: 28, lastMonth: 60 },
    { name: 'SEO', value: 95, lastWeek: 28, lastMonth: 60 }
  ],
  services: [
    {
      title: 'Web Design',
      icon: 'flaticon-3d-design',
      description: 'A small river named Duden flows by their place and supplies.'
    },
    {
      title: 'Web Application',
      icon: 'flaticon-app-development',
      description: 'A small river named Duden flows by their place and supplies.'
    },
    {
      title: 'Web Development',
      icon: 'flaticon-web-programming',
      description: 'A small river named Duden flows by their place and supplies.'
    },
    {
      title: 'Banner Design',
      icon: 'flaticon-branding',
      description: 'A small river named Duden flows by their place and supplies.'
    },
    {
      title: 'Branding',
      icon: 'flaticon-computer',
      description: 'A small river named Duden flows by their place and supplies.'
    },
    {
      title: 'Icon Design',
      icon: 'flaticon-vector',
      description: 'A small river named Duden flows by their place and supplies.'
    },
    {
      title: 'Graphic Design',
      icon: 'flaticon-vector',
      description: 'A small river named Duden flows by their place and supplies.'
    },
    {
      title: 'SEO',
      icon: 'flaticon-zoom',
      description: 'A small river named Duden flows by their place and supplies.'
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