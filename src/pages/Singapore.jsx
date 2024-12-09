import React, { useEffect } from "react";
import "../Css/singapore.css";
import AOS from "aos";
import "aos/dist/aos.css";
import "../Css/singapore.css";
import Navbar from "../components/navbar";
import Counsellingphoto from "../assets/552711453.png";
import Counsellingform from "../components/counsellingform";
import { Link } from "react-router-dom";

const Singapore = () => {
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
      <section id="home" className="singapore-hero">
        <div
          className="hero-content"
          data-aos="fade-up"
          data-aos-duration={1000}
        >
          <div className="hero-box">
            <h1>Study in Singapore with Vertex Overseas</h1>
            <p>Your gateway to world-class education in Asia's education hub</p>
            <Link to="/bookform" className="cta-button">
              Register Now - Get a Call
            </Link>
          </div>
        </div>
      </section>
      {/* Quick Facts Section */}
      <section className="container my-5">
        <h2 className="text-center mb-4 section-title" data-aos="fade-up">
          Quick Facts about Singapore
        </h2>
        <div className="row g-4">
          <div className="col-md-4" data-aos="fade-up" data-aos-delay={100}>
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Global Standing</h5>
                <ul className="list-unstyled">
                  <li>🏆 4th Leading Financial Center</li>
                  <li>🌍 One of Four Asian Tiger Economies</li>
                  <li>📚 96% Literacy Rate</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-4" data-aos="fade-up" data-aos-delay={200}>
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Student Benefits</h5>
                <ul className="list-unstyled">
                  <li>🔒 Safest City for Students</li>
                  <li>🗣️ English-Speaking Environment</li>
                  <li>🌍 Multicultural Experience</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-4" data-aos="fade-up" data-aos-delay={300}>
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Living Environment</h5>
                <ul className="list-unstyled">
                  <li>🌡️ Year-round Warm Climate</li>
                  <li>🚇 Efficient Transportation</li>
                  <li>🏥 World-class Healthcare</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Education System Section */}
      <section id="education-system" className="bg-light py-5">
        <div className="container">
          <h2 className="text-center mb-4 section-title" data-aos="fade-up">
            Singapore Education System
          </h2>
          <div className="row g-4">
            <div className="col-md-6" data-aos="fade-up" data-aos-delay={100}>
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">Education Excellence</h5>
                  <div className="mb-4">
                    <h6 className="fw-bold">Meritocracy System</h6>
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item">
                        Equal opportunities for all
                      </li>
                      <li className="list-group-item">
                        Excellence-driven approach
                      </li>
                      <li className="list-group-item">
                        Strong academic foundation
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h6 className="fw-bold">Global Recognition</h6>
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item">
                        World-class universities
                      </li>
                      <li className="list-group-item">
                        International accreditation
                      </li>
                      <li className="list-group-item">
                        Industry-aligned programs
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6" data-aos="fade-up" data-aos-delay={200}>
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">Key Features</h5>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                      <i className="bi bi-check-circle-fill text-success me-2" />
                      State-of-the-art infrastructure
                    </li>
                    <li className="list-group-item">
                      <i className="bi bi-check-circle-fill text-success me-2" />
                      Distinguished faculty members
                    </li>
                    <li className="list-group-item">
                      <i className="bi bi-check-circle-fill text-success me-2" />
                      Cutting-edge research facilities
                    </li>
                    <li className="list-group-item">
                      <i className="bi bi-check-circle-fill text-success me-2" />
                      Innovation-focused learning
                    </li>
                    <li className="list-group-item">
                      <i className="bi bi-check-circle-fill text-success me-2" />
                      Global industry connections
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Programs and Costs Section */}
      <section id="programs-costs" className="container my-5">
        <h2 className="text-center mb-4 section-title" data-aos="fade-up">
          Programs and Costs
        </h2>
        <div className="row g-4">
          <div className="col-md-6" data-aos="fade-up" data-aos-delay={100}>
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">Popular Programs</h5>
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th>Field</th>
                      <th>Duration</th>
                      <th>Features</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Business</td>
                      <td>3-4 years</td>
                      <td>Industry internships</td>
                    </tr>
                    <tr>
                      <td>Engineering</td>
                      <td>4 years</td>
                      <td>Research focus</td>
                    </tr>
                    <tr>
                      <td>Technology</td>
                      <td>3-4 years</td>
                      <td>Innovation-driven</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="col-md-6" data-aos="fade-up" data-aos-delay={200}>
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">Living &amp; Study Costs</h5>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <i className="bi bi-currency-dollar me-2" />
                    Average living costs: US$8,000/year
                  </li>
                  <li className="list-group-item">
                    <i className="bi bi-house-door me-2" />
                    Housing and utilities included
                  </li>
                  <li className="list-group-item">
                    <i className="bi bi-book me-2" />
                    Competitive tuition fees
                  </li>
                  <li className="list-group-item">
                    <i className="bi bi-cash me-2" />
                    More affordable than US/UK
                  </li>
                  <li className="list-group-item">
                    <i className="bi bi-graph-up me-2" />
                    High ROI on education
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Why Choose Singapore Section */}
      <section id="why-singapore" className="bg-light py-5">
        <div className="container">
          <h2 className="text-center mb-4 section-title" data-aos="fade-up">
            Why Choose Singapore?
          </h2>
          <div className="row g-4">
            <div className="col-md-4" data-aos="fade-up" data-aos-delay={100}>
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">Academic Excellence</h5>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                      Premium educational institutions
                    </li>
                    <li className="list-group-item">
                      Globally-renowned universities
                    </li>
                    <li className="list-group-item">
                      Innovation-focused curriculum
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-4" data-aos="fade-up" data-aos-delay={200}>
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">Quality of Life</h5>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                      One of the safest cities globally
                    </li>
                    <li className="list-group-item">Modern infrastructure</li>
                    <li className="list-group-item">
                      Excellent healthcare system
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-4" data-aos="fade-up" data-aos-delay={300}>
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">Cultural Experience</h5>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                      Vibrant multicultural environment
                    </li>
                    <li className="list-group-item">Four official languages</li>
                    <li className="list-group-item">Rich cultural heritage</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Student Life Section */}
      <section className="container my-5">
        <h2 className="text-center mb-4 section-title" data-aos="fade-up">
          Life in Singapore
        </h2>
        <div className="row g-4">
          <div className="col-md-6" data-aos="fade-up" data-aos-delay={100}>
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">Living Experience</h5>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <i className="bi bi-house-door me-2" />
                    Modern student accommodation
                  </li>
                  <li className="list-group-item">
                    <i className="bi bi-train me-2" />
                    Efficient public transportation
                  </li>
                  <li className="list-group-item">
                    <i className="bi bi-heart-pulse me-2" />
                    World-class healthcare facilities
                  </li>
                  <li className="list-group-item">
                    <i className="bi bi-shop me-2" />
                    Vibrant shopping and entertainment
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-6" data-aos="fade-up" data-aos-delay={200}>
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">Climate &amp; Environment</h5>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <i className="bi bi-thermometer-half me-2" />
                    Temperature: 23-31°C year-round
                  </li>
                  <li className="list-group-item">
                    <i className="bi bi-clock me-2" />
                    2.5 hours ahead of IST
                  </li>
                  <li className="list-group-item">
                    <i className="bi bi-globe me-2" />
                    63 islands composition
                  </li>
                  <li className="list-group-item">
                    <i className="bi bi-calendar me-2" />
                    Hottest months: May to August
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Application Process */}
      <section id="application-process" className="bg-light py-5">
        <div className="container">
          <h2 className="text-center mb-4 section-title" data-aos="fade-up">
            Visa &amp; Application Process
          </h2>
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="timeline">
                <div className="event" data-aos="fade-up">
                  <h4>1. University Application</h4>
                  <p>
                    Apply to recognized universities with required academic
                    qualifications
                  </p>
                </div>
                <div className="event" data-aos="fade-up">
                  <h4>2. Acceptance Letter</h4>
                  <p>Receive in-principle approval (IPA) from the university</p>
                </div>
                <div className="event" data-aos="fade-up">
                  <h4>3. Student Pass</h4>
                  <p>
                    Apply for student pass through university after acceptance
                  </p>
                </div>
                <div className="event" data-aos="fade-up">
                  <h4>4. Documentation</h4>
                  <p>
                    Submit proof of English proficiency and financial capability
                  </p>
                </div>
                <div className="event" data-aos="fade-up">
                  <h4>5. Arrival Preparation</h4>
                  <p>Complete medical examination and housing arrangements</p>
                </div>
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
      {/* Footer */}
      <footer className="py-4 text-center">
        <div className="container">
          <p>© 2024 Vertex Overseas Consultancy. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Singapore;
