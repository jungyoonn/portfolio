import React, { useState } from 'react';
import { useScrollAnimation } from '../../hooks/useAnimation';

const Contact = () => {
  useScrollAnimation();

  // 폼 상태 관리
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  // 폼 제출 상태
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // 입력 변경 핸들러
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // 폼 제출 핸들러
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    
    // 실제 구현에서는 이 부분에 API 호출 또는 이메일 전송 로직 추가
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setSubmitted(true);
      setLoading(false);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 1000);
  };

  return (
    <section className="ftco-section contact-section ftco-no-pb" id="contact-section">
      <div className="container">
        <div className="row justify-content-center mb-5 pb-3">
          <div className="col-md-7 heading-section text-center ftco-animate">
            <span className="subheading">Contact us</span>
            <h2 className="mb-4">Have a Project?</h2>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
          </div>
        </div>

        <div className="row block-9">
          <div className="col-md-8">
            <form onSubmit={handleSubmit} className="bg-light p-4 p-md-5 contact-form">
              {submitted && (
                <div className="alert alert-success mb-4" role="alert">
                  Thank you for your message! We'll get back to you soon.
                </div>
              )}
              {error && (
                <div className="alert alert-danger mb-4" role="alert">
                  {error}
                </div>
              )}
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <input 
                      type="text" 
                      className="form-control" 
                      placeholder="Your Name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <input 
                      type="email" 
                      className="form-control" 
                      placeholder="Your Email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <input 
                      type="text" 
                      className="form-control" 
                      placeholder="Subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <textarea 
                      name="message" 
                      id="message" 
                      cols="30" 
                      rows="7" 
                      className="form-control" 
                      placeholder="Message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                    ></textarea>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <button 
                      type="submit" 
                      className="btn btn-primary py-3 px-5"
                      disabled={loading}
                    >
                      {loading ? 'Sending...' : 'Send Message'}
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>

          <div className="col-md-4 d-flex pl-md-5">
            <div className="row">
              <div className="dbox w-100 d-flex">
                <div className="icon d-flex align-items-center justify-content-center">
                  <span className="fa fa-map-marker"></span>
                </div>
                <div className="text">
                  <p><span>Address:</span> 198 West 21th Street, Suite 721 New York NY 10016</p>
                </div>
              </div>
              <div className="dbox w-100 d-flex">
                <div className="icon d-flex align-items-center justify-content-center">
                  <span className="fa fa-phone"></span>
                </div>
                <div className="text">
                  <p><span>Phone:</span> <a href="tel://1234567920">+ 1235 2355 98</a></p>
                </div>
              </div>
              <div className="dbox w-100 d-flex">
                <div className="icon d-flex align-items-center justify-content-center">
                  <span className="fa fa-paper-plane"></span>
                </div>
                <div className="text">
                  <p><span>Email:</span> <a href="mailto:info@yoursite.com">info@yoursite.com</a></p>
                </div>
              </div>
              <div className="dbox w-100 d-flex">
                <div className="icon d-flex align-items-center justify-content-center">
                  <span className="fa fa-globe"></span>
                </div>
                <div className="text">
                  <p><span>Website</span> <a href="#">yoursite.com</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;