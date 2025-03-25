import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const PortfolioPage = () => {
  // 페이지 로드 시 상단으로 스크롤
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // 블로그 게시물 데이터
  const [portfolioPosts] = useState([
    {
      id: 1,
      title: 'Why Lead Generation is Key for Business Growth',
      excerpt: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
      date: 'July 03, 2020',
      author: 'Admin',
      comments: 3,
      image: 'images/image_1.jpg',
      category: 'Web Design'
    },
    {
      id: 2,
      title: 'Why Lead Generation is Key for Business Growth',
      excerpt: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
      date: 'July 03, 2020',
      author: 'Admin',
      comments: 3,
      image: 'images/image_2.jpg',
      category: 'Web Development'
    },
    {
      id: 3,
      title: 'Why Lead Generation is Key for Business Growth',
      excerpt: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
      date: 'July 03, 2020',
      author: 'Admin',
      comments: 3,
      image: 'images/image_3.jpg',
      category: 'Branding'
    },
    {
      id: 4,
      title: 'Why Lead Generation is Key for Business Growth',
      excerpt: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
      date: 'July 03, 2020',
      author: 'Admin',
      comments: 3,
      image: 'images/image_4.jpg',
      category: 'Marketing'
    },
    {
      id: 5,
      title: 'Why Lead Generation is Key for Business Growth',
      excerpt: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
      date: 'July 03, 2020',
      author: 'Admin',
      comments: 3,
      image: 'images/image_5.jpg',
      category: 'UX Design'
    },
    {
      id: 6,
      title: 'Why Lead Generation is Key for Business Growth',
      excerpt: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
      date: 'July 03, 2020',
      author: 'Admin',
      comments: 3,
      image: 'images/image_6.jpg',
      category: 'Photography'
    }
  ]);

  // 카테고리 데이터
  const categories = [
    { name: 'Web Design', count: 12 },
    { name: 'Web Development', count: 22 },
    { name: 'Branding', count: 37 },
    { name: 'Graphic Design', count: 42 }
  ];

  return (
    <>
      <section className="hero-wrap hero-wrap-2" style={{ backgroundImage: "url('images/bg_4.jpg')" }} data-stellar-background-ratio="0.5">
        <div className="overlay"></div>
        <div className="container">
          <div className="row no-gutters slider-text align-items-end justify-content-center">
            <div className="col-md-9 ftco-animate pb-5 text-center">
              <p className="breadcrumbs">
                <span className="mr-2"><Link to="/">Home <i className="fa fa-chevron-right"></i></Link></span>
                <span>portfolio <i className="fa fa-chevron-right"></i></span>
              </p>
              <h1 className="mb-0 bread">Portfolio</h1>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 ftco-animate">
              <div className="row">
                {portfolioPosts.map(post => (
                  <div className="col-md-6 d-flex ftco-animate" key={post.id}>
                    <div className="portfolio-entry justify-content-end">
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
              
              {/* 페이지네이션 */}
              <div className="row mt-5">
                <div className="col text-center">
                  <div className="block-27">
                    <ul>
                      <li><a href="#">&lt;</a></li>
                      <li className="active"><span>1</span></li>
                      <li><a href="#">2</a></li>
                      <li><a href="#">3</a></li>
                      <li><a href="#">4</a></li>
                      <li><a href="#">5</a></li>
                      <li><a href="#">&gt;</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* 사이드바 */}
            <div className="col-lg-4 sidebar ftco-animate">
              <div className="sidebar-box">
                <form action="#" className="search-form">
                  <div className="form-group">
                    <span className="icon icon-search"></span>
                    <input type="text" className="form-control" placeholder="Type a keyword and hit enter" />
                  </div>
                </form>
              </div>
              
              {/* 카테고리 */}
              <div className="sidebar-box ftco-animate">
                <h3 className="heading-sidebar">Categories</h3>
                <ul className="categories">
                  {categories.map((category, index) => (
                    <li key={index}>
                      <a href="#">{category.name} <span>({category.count})</span></a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 최근 블로그 */}
              <div className="sidebar-box ftco-animate">
                <h3 className="heading-sidebar">Recent Portfolio</h3>
                {portfolioPosts.slice(0, 3).map(post => (
                  <div className="block-21 mb-4 d-flex" key={post.id}>
                    <a className="portfolio-img mr-4" style={{ backgroundImage: `url(${post.image})` }}></a>
                    <div className="text">
                      <h3 className="heading"><a href="#">{post.title}</a></h3>
                      <div className="meta">
                        <div><a href="#"><span className="icon-calendar"></span> {post.date}</a></div>
                        <div><a href="#"><span className="icon-person"></span> {post.author}</a></div>
                        <div><a href="#"><span className="icon-chat"></span> {post.comments}</a></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* 태그 클라우드 */}
              <div className="sidebar-box ftco-animate">
                <h3 className="heading-sidebar">Tag Cloud</h3>
                <div className="tagcloud">
                  <a href="#" className="tag-cloud-link">tech</a>
                  <a href="#" className="tag-cloud-link">office</a>
                  <a href="#" className="tag-cloud-link">building</a>
                  <a href="#" className="tag-cloud-link">land</a>
                  <a href="#" className="tag-cloud-link">table</a>
                  <a href="#" className="tag-cloud-link">web</a>
                  <a href="#" className="tag-cloud-link">design</a>
                  <a href="#" className="tag-cloud-link">application</a>
                </div>
              </div>

              {/* 단락 */}
              <div className="sidebar-box ftco-animate">
                <h3 className="heading-sidebar">Paragraph</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus itaque, autem necessitatibus voluptate quod mollitia delectus aut, sunt placeat nam vero culpa sapiente consectetur similique, inventore eos fugit cupiditate numquam!</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PortfolioPage;