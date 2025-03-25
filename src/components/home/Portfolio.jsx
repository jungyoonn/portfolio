import React from 'react';
import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../../hooks/useAnimation';
import { useSite } from '../../context/SiteContext';

const Portfolio = () => {
  // 스크롤 애니메이션 적용
  useScrollAnimation();
  
  // 컨텍스트에서 블로그 게시물 데이터 가져오기
  const { state } = useSite();
  const { portfolios } = state;

  // 홈페이지에는 최신 3개 게시물만 표시
  const recentPosts = portfolios ? portfolios.slice(0, 3) : [];

  return (
    <section className="ftco-section bg-light" id="portfolio-section">
      <div className="container">
        <div className="row justify-content-center mb-5 pb-5">
          <div className="col-md-7 heading-section text-center ftco-animate">
            <span className="subheading">Portfolio</span>
            <h2 className="mb-4">Our Portfolio</h2>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
          </div>
        </div>
        <div className="row d-flex">
          {recentPosts.map((post, index) => (
            <div className="col-md-4 d-flex ftco-animate" key={post.id}>
              <div className={`portfolio-entry ${index === 2 ? '' : 'justify-content-end'}`}>
                <Link to={`/portfolio/${post.id}`} className="block-20" style={{ backgroundImage: `url('${post.image}')` }}>
                </Link>
                <div className="text mt-3 float-right d-block">
                  <div className="d-flex align-items-center mb-3 meta">
                    <p className="mb-0">
                      <span className="mr-2">{post.date}</span>
                      <a href="#" className="mr-2">{post.author}</a>
                      <a href="#" className="meta-chat"><span className="icon-chat"></span> {post.comments}</a>
                    </p>
                  </div>
                  <h3 className="heading"><Link to={`/portfolio/${post.id}`}>{post.title}</Link></h3>
                  <p>{post.excerpt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;