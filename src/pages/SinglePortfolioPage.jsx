import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const SinglePortfolioPage = () => {
  useEffect(() => {
    // 페이지 로드 시 상단으로 스크롤
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <section className="hero-wrap hero-wrap-2" style={{ backgroundImage: "url('images/bg_4.jpg')" }} data-stellar-background-ratio="0.5">
        <div className="overlay"></div>
        <div className="container">
          <div className="row no-gutters slider-text align-items-end justify-content-center">
            <div className="col-md-9 ftco-animate pb-5 text-center">
              <p className="breadcrumbs">
                <span className="mr-2"><Link to="/">Home <i className="fa fa-chevron-right"></i></Link></span> 
                <span className="mr-2"><Link to="/portfolio">portfolio <i className="fa fa-chevron-right"></i></Link></span> 
                <span>portfolio Single <i className="fa fa-chevron-right"></i></span>
              </p>
              <h1 className="mb-0 bread">portfolio details</h1>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 ftco-animate">
              <h2 className="mb-3">It is a long established fact a reader be distracted</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, eius mollitia suscipit, quisquam doloremque distinctio perferendis et doloribus unde architecto optio laboriosam porro adipisci sapiente officiis nemo accusamus ad praesentium? Esse minima nisi et. Dolore perferendis, enim praesentium omnis, iste doloremque quia officia optio deserunt molestiae voluptates soluta architecto tempora.</p>
              <p>
                <img src="images/image_3.jpg" alt="" className="img-fluid" />
              </p>
              <p>Molestiae cupiditate inventore animi, maxime sapiente optio, illo est nemo veritatis repellat sunt doloribus nesciunt! Minima laborum magni reiciendis qui voluptate quisquam voluptatem soluta illo eum ullam incidunt rem assumenda eveniet eaque sequi deleniti tenetur dolore amet fugit perspiciatis ipsa, odit. Nesciunt dolor minima esse vero ut ea, repudiandae suscipit!</p>
              
              <h2 className="mb-3 mt-5">#2. Creative WordPress Themes</h2>
              <p>Temporibus ad error suscipit exercitationem hic molestiae totam obcaecati rerum, eius aut, in. Exercitationem atque quidem tempora maiores ex architecto voluptatum aut officia doloremque. Error dolore voluptas, omnis molestias odio dignissimos culpa ex earum nisi consequatur quos odit quasi repellat qui officiis reiciendis incidunt hic non? Debitis commodi aut, adipisci.</p>
              <p>
                <img src="images/image_4.jpg" alt="" className="img-fluid" />
              </p>
              <p>Quisquam esse aliquam fuga distinctio, quidem delectus veritatis reiciendis. Nihil explicabo quod, est eos ipsum. Unde aut non tenetur tempore, nisi culpa voluptate maiores officiis quis vel ab consectetur suscipit veritatis nulla quos quia aspernatur perferendis, libero sint. Error, velit, porro. Deserunt minus, quibusdam iste enim veniam, modi rem maiores.</p>
              
              {/* 태그 위젯 */}
              <div className="tag-widget post-tag-container mb-5 mt-5">
                <div className="tagcloud">
                  <a href="#" className="tag-cloud-link">Life</a>
                  <a href="#" className="tag-cloud-link">Sport</a>
                  <a href="#" className="tag-cloud-link">Tech</a>
                  <a href="#" className="tag-cloud-link">Travel</a>
                </div>
              </div>
              
              {/* 작성자 소개 */}
              <div className="about-author d-flex p-4 bg-light">
                <div className="bio mr-5">
                  <img src="images/person_1.jpg" alt="Image placeholder" className="img-fluid mb-4" />
                </div>
                <div className="desc">
                  <h3>George Washington</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus itaque, autem necessitatibus voluptate quod mollitia delectus aut, sunt placeat nam vero culpa sapiente consectetur similique, inventore eos fugit cupiditate numquam!</p>
                </div>
              </div>

              {/* 댓글 섹션 */}
              <div className="pt-5 mt-5">
                <h4 className="mb-5 font-weight-bold">6 Comments</h4>
                <ul className="comment-list">
                  <li className="comment">
                    <div className="vcard bio">
                      <img src="images/person_1.jpg" alt="Image placeholder" />
                    </div>
                    <div className="comment-body">
                      <h3>John Doe</h3>
                      <div className="meta">July 03, 2020 at 2:21pm</div>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?</p>
                      <p><a href="#" className="reply">Reply</a></p>
                    </div>
                  </li>
                  
                  {/* 더 많은 댓글과 대댓글 구조 */}
                  {/* ... 생략 ... */}
                </ul>
                
                {/* 댓글 폼 */}
                <div className="comment-form-wrap pt-5">
                  <h3 className="mb-5">Leave a comment</h3>
                  <form action="#" className="p-5 bg-light">
                    <div className="form-group">
                      <label htmlFor="name">Name *</label>
                      <input type="text" className="form-control" id="name" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email *</label>
                      <input type="email" className="form-control" id="email" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="website">Website</label>
                      <input type="url" className="form-control" id="website" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="message">Message</label>
                      <textarea id="message" cols="30" rows="10" className="form-control"></textarea>
                    </div>
                    <div className="form-group">
                      <input type="submit" value="Post Comment" className="btn py-3 px-4 btn-primary" />
                    </div>
                  </form>
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
                  <li><a href="#">Web Design <span>(12)</span></a></li>
                  <li><a href="#">Web Development <span>(22)</span></a></li>
                  <li><a href="#">Branding <span>(37)</span></a></li>
                  <li><a href="#">Graphic Design <span>(42)</span></a></li>
                </ul>
              </div>

              {/* 최근 블로그 */}
              <div className="sidebar-box ftco-animate">
                <h3 className="heading-sidebar">Recent portfolio</h3>
                {/* 최근 블로그 항목들 */}
                {/* ... 생략 ... */}
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

export default SinglePortfolioPage;