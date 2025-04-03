import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useSite } from '../../context/SiteContext';

const Testimonials = () => {
  // SiteContext에서 testimonials 데이터 가져오기
  const { state } = useSite();
  const { testimonials } = state;

  // 슬라이더 설정
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <section className="ftco-section testimony-section">
      <div className="container">
        <div className="row justify-content-center pb-5">
          <div className="col-md-12 heading-section heading-section-white text-center ftco-animate">
            <span className="subheading">Testimonies</span>
            <h2 className="mb-4">What client says about?</h2>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
          </div>
        </div>
        <div className="row ftco-animate">
          <div className="col-md-12">
            <Slider {...settings} className="carousel-testimony">
              {testimonials.map(testimonial => (
                <div className="item" key={testimonial.id}>
                  <div className="testimony-wrap py-4">
                    <div className="text">
                      <span className="fa fa-quote-left"></span>
                      <p className="mb-4 pl-5">{testimonial.text}</p>
                      <div className="d-flex align-items-center">
                        <div className="user-img" style={{ backgroundImage: `url(${testimonial.image})` }}></div>
                        <div className="pl-3">
                          <p className="name">{testimonial.name}</p>
                          <span className="position">{testimonial.position}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;