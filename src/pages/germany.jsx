import React, { useEffect } from "react";
import "../Css/germany.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "../components/navbar";
import Counsellingform from "../components/counsellingform";
import { Link } from "react-router-dom";

const Germany = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <div className="top-bar">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <div className="contact-info">
              <a href="tel:+918143256666" className="text-white me-3">
                <i className="bi bi-telephone" />
                +91 8143256666
              </a>
              <a href="mailto:info@vertexoverseas.in" className="text-white">
                <i className="bi bi-envelope" />
                info@vertexoverseas.in
              </a>
            </div>
            <div className="social-links">
              <a href="#" className="text-white me-2">
                <i className="bi bi-facebook" />
              </a>
              <a href="#" className="text-white me-2">
                <i className="bi bi-instagram" />
              </a>
              <a href="#" className="text-white me-2">
                <i className="bi bi-linkedin" />
              </a>
              <a href="#" className="text-white">
                <i className="bi bi-youtube" />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Navigation */}
      <Navbar />
      {/* Hero Section */}
      <section id="home" className="germany-hero">
        <div
          className="hero-content"
          data-aos="fade-up"
          data-aos-duration={1000}
        >
          <div className="hero-box">
            <h1>Study in Germany</h1>
            <p>Your Gateway to Excellence in Education and Innovation</p>
            <Link to="/bookform" className="cta-button">
              Register Now - Get a Call
            </Link>
          </div>
        </div>
      </section>
      {/* Quick Facts */}
      <section className="container my-5">
        <h2 className="text-center mb-4 section-title" data-aos="fade-up">
          Why Choose Germany?
        </h2>
        <div className="row g-4">
          <div className="col-md-4" data-aos="fade-up" data-aos-delay={100}>
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">Academic Excellence</h5>
                <ul className="list-unstyled">
                  <li>🎓 World-renowned education system</li>
                  <li>🔬 Pioneer in research and innovation</li>
                  <li>🌍 Globally recognized degrees</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-4" data-aos="fade-up" data-aos-delay={200}>
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">Career Opportunities</h5>
                <ul className="list-unstyled">
                  <li>💼 Post-study work opportunities</li>
                  <li>🏢 Home to global companies</li>
                  <li>💰 Strong economy and job market</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-4" data-aos="fade-up" data-aos-delay={300}>
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">Student Benefits</h5>
                <ul className="list-unstyled">
                  <li>📚 Low or no tuition fees</li>
                  <li>🏥 Affordable health insurance</li>
                  <li>🌆 High quality of life</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Education System */}
      <section className="bg-light py-5">
        <div className="container">
          <h2 className="text-center mb-4 section-title" data-aos="fade-up">
            Education System
          </h2>
          <div className="row g-4">
            <div className="col-md-6" data-aos="fade-up" data-aos-delay={100}>
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">Universities</h5>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                      Technical Universities (TU)
                    </li>
                    <li className="list-group-item">
                      Universities of Applied Sciences
                    </li>
                    <li className="list-group-item">Research Universities</li>
                    <li className="list-group-item">
                      Art, Film &amp; Music Schools
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6" data-aos="fade-up" data-aos-delay={200}>
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">Popular Programs</h5>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                      Engineering &amp; Technology
                    </li>
                    <li className="list-group-item">
                      Business &amp; Management
                    </li>
                    <li className="list-group-item">
                      Computer Science &amp; IT
                    </li>
                    <li className="list-group-item">Natural Sciences</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Work Opportunities */}
      <section className="container my-5">
        <h2 className="text-center mb-4 section-title" data-aos="fade-up">
          Work Opportunities
        </h2>
        <div className="row g-4">
          <div className="col-md-6" data-aos="fade-up" data-aos-delay={100}>
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">During Studies</h5>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    120 full days or 240 half days per year
                  </li>
                  <li className="list-group-item">
                    Student assistant positions
                  </li>
                  <li className="list-group-item">
                    Campus jobs and internships
                  </li>
                  <li className="list-group-item">
                    Part-time work opportunities
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-6" data-aos="fade-up" data-aos-delay={200}>
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">After Graduation</h5>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">18-month job search visa</li>
                  <li className="list-group-item">
                    Full-time employment opportunities
                  </li>
                  <li className="list-group-item">
                    Path to permanent residency
                  </li>
                  <li className="list-group-item">Access to EU job market</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Application Process */}
      <section className="bg-light py-5">
        <div className="container">
          <h2 className="text-center mb-4 section-title" data-aos="fade-up">
            Application Process
          </h2>
          <div className="timeline">
            <div className="event" data-aos="fade-up">
              <h4>1. Program Selection</h4>
              <p>
                Choose your desired program and university based on your
                academic background and career goals
              </p>
            </div>
            <div className="event" data-aos="fade-up">
              <h4>2. Document Preparation</h4>
              <p>
                Gather required documents including academic transcripts,
                language certificates, and letters of recommendation
              </p>
            </div>
            <div className="event" data-aos="fade-up">
              <h4>3. University Application</h4>
              <p>
                Submit applications to chosen universities through uni-assist or
                directly to the university
              </p>
            </div>
            <div className="event" data-aos="fade-up">
              <h4>4. Acceptance Letter</h4>
              <p>Receive and accept admission offer from the university</p>
            </div>
            <div className="event" data-aos="fade-up">
              <h4>5. Visa Application</h4>
              <p>
                Apply for German student visa with acceptance letter and other
                required documents
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Requirements Section */}
      <section className="container my-5">
        <h2 className="text-center mb-4 section-title" data-aos="fade-up">
          Requirements
        </h2>
        <div className="row g-4">
          <div className="col-md-6" data-aos="fade-up" data-aos-delay={100}>
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">Academic Requirements</h5>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    Bachelor's degree with minimum 60%
                  </li>
                  <li className="list-group-item">
                    Strong academic background
                  </li>
                  <li className="list-group-item">Relevant coursework</li>
                  <li className="list-group-item">
                    German or English proficiency
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-6" data-aos="fade-up" data-aos-delay={200}>
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">Language Requirements</h5>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    German: TestDaF or DSH certificate
                  </li>
                  <li className="list-group-item">
                    English: IELTS/TOEFL scores
                  </li>
                  <li className="list-group-item">
                    Program-specific requirements
                  </li>
                  <li className="list-group-item">
                    Foundation courses available
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Counselling Form */}
      <Counsellingform />
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/919390292090"
        className="whatsapp-btn"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="bi bi-whatsapp" />
      </a>
      <footer className="text-white text-center py-3">
        <p>© 2023 Vertex Overseas Consultancy. All rights reserved.</p>
      </footer>
    </>
  );
};

export default Germany;
