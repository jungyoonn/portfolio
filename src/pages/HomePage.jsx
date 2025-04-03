import React, { useEffect } from 'react';

// 섹션 컴포넌트 불러오기
import Hero from '../components/home/Hero';
import Counter from '../components/home/Counter';
import About from '../components/home/About';
import Skills from '../components/home/Skills';
import Services from '../components/home/Services';
import Projects from '../components/home/Projects';
import DeveloperJourney from '../components/home/DeveloperJourney';
import Contact from '../components/home/Contact';
import WorkExperience from '../components/home/WorkExperience ';
import HireMeSection from '../components/home/HireMeSection';

// 애니메이션 훅 불러오기
import { useScrollAnimation } from '../hooks/useAnimation';

const HomePage = () => {
  // 스크롤 애니메이션 적용
  useScrollAnimation();

  useEffect(() => {
    // 페이지 로드 시 상단으로 스크롤
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="home-page">
      <Hero />
      <Counter />
      <About />
      <Skills />
      <Services />
      <HireMeSection />
      <Projects />
      <DeveloperJourney />
      <WorkExperience />
      <Contact />
    </div>
  );
};

export default HomePage;