import React, { useEffect } from "react";
import Navbar from "../components/navbar";
import "../Css/france.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Counsellingphoto from "../assets/552711453.png";
import Counsellingform from "../components/counsellingform";
import { Link } from "react-router-dom";

const France = () => {
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
      <section id="home" className="france-hero">
        <div
          className="hero-content"
          data-aos="fade-up"
          data-aos-duration={1000}
        >
          <div className="france-hero-box">
            <h1>Study in France with Vertex Overseas</h1>
            <p>
              Your gateway to world-class education in Europe's cultural heart
            </p>
            <Link to="/bookform" className="cta-button">
              Register Now - Get a Call
            </Link>
          </div>
        </div>
      </section>
      {/* Quick Facts Section */}
      <section className="container my-5">
        <h2 className="text-center mb-4 section-title" data-aos="fade-up">
          Quick Facts about France
        </h2>
        <div className="row g-4">
          <div className="col-md-4" data-aos="fade-up" data-aos-delay={100}>
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Global Standing</h5>
                <ul className="list-unstyled">
                  <li>🏆 5th Largest Economy Worldwide</li>
                  <li>🌍 2nd Largest Economy in Europe</li>
                  <li>🏢 31 Fortune 500 Companies</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-4" data-aos="fade-up" data-aos-delay={200}>
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Student Benefits</h5>
                <ul className="list-unstyled">
                  <li>💰 Government Subsidized Education</li>
                  <li>🗣️ Free French Language Classes</li>
                  <li>🌍 Global Business Language</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-4" data-aos="fade-up" data-aos-delay={300}>
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Program Features</h5>
                <ul className="list-unstyled">
                  <li>✈️ Foreign Industrial Tours</li>
                  <li>💼 Paid Internship Options</li>
                  <li>📚 1-2 Year Programs</li>
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
            French Education System
          </h2>
          <div className="row g-4">
            <div className="col-md-6" data-aos="fade-up" data-aos-delay={100}>
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">Types of Institutions</h5>
                  <div className="mb-4">
                    <h6 className="fw-bold">Grand Ecoles</h6>
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item">
                        Most prestigious institutions
                      </li>
                      <li className="list-group-item">
                        Highly competitive selection process
                      </li>
                      <li className="list-group-item">
                        Strong industry connections
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h6 className="fw-bold">Universities</h6>
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item">
                        Government-funded institutions
                      </li>
                      <li className="list-group-item">
                        Wide range of programs
                      </li>
                      <li className="list-group-item">
                        Research-focused education
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6" data-aos="fade-up" data-aos-delay={200}>
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">Educational Philosophy</h5>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                      <i className="bi bi-check-circle-fill text-success me-2" />
                      Strong emphasis on analytical thinking
                    </li>
                    <li className="list-group-item">
                      <i className="bi bi-check-circle-fill text-success me-2" />
                      High academic expectations
                    </li>
                    <li className="list-group-item">
                      <i className="bi bi-check-circle-fill text-success me-2" />
                      Individual competition focus
                    </li>
                    <li className="list-group-item">
                      <i className="bi bi-check-circle-fill text-success me-2" />
                      Continuous assessment system
                    </li>
                    <li className="list-group-item">
                      <i className="bi bi-check-circle-fill text-success me-2" />
                      Strong practical orientation
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
                <h5 className="card-title">Program Types</h5>
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th>Level</th>
                      <th>Duration</th>
                      <th>Features</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Taught Masters</td>
                      <td>1-2 years</td>
                      <td>MA/MSc/MEng</td>
                    </tr>
                    <tr>
                      <td>Research Masters</td>
                      <td>2 years</td>
                      <td>MRes/MA Research</td>
                    </tr>
                    <tr>
                      <td>Doctorate</td>
                      <td>3-4 years</td>
                      <td>PhD Programs</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="col-md-6" data-aos="fade-up" data-aos-delay={200}>
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">Tuition &amp; Costs</h5>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <i className="bi bi-currency-euro me-2" />
                    Program costs: 10,000-20,000 EUR total
                  </li>
                  <li className="list-group-item">
                    <i className="bi bi-patch-check me-2" />
                    Government subsidized education
                  </li>
                  <li className="list-group-item">
                    <i className="bi bi-graph-up me-2" />
                    Lower than other major destinations
                  </li>
                  <li className="list-group-item">
                    <i className="bi bi-book me-2" />
                    Free language courses included
                  </li>
                  <li className="list-group-item">
                    <i className="bi bi-cash me-2" />
                    Paid internship opportunities
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Why France Section */}
      <section id="why-france" className="bg-light py-5">
        <div className="container">
          <h2 className="text-center mb-4 section-title" data-aos="fade-up">
            Why Choose France?
          </h2>
          <div className="row g-4">
            <div className="col-md-4" data-aos="fade-up" data-aos-delay={100}>
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">Academic Excellence</h5>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                      World-renowned education system
                    </li>
                    <li className="list-group-item">
                      Research-intensive universities
                    </li>
                    <li className="list-group-item">
                      International recognition
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-4" data-aos="fade-up" data-aos-delay={200}>
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">Career Opportunities</h5>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                      Strong industry connections
                    </li>
                    <li className="list-group-item">
                      Global business exposure
                    </li>
                    <li className="list-group-item">
                      Extensive alumni network
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
                    <li className="list-group-item">Rich cultural heritage</li>
                    <li className="list-group-item">
                      Central European location
                    </li>
                    <li className="list-group-item">
                      International environment
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Application Process */}
      <section id="application-process" className="container my-5">
        <h2 className="text-center mb-4 section-title" data-aos="fade-up">
          Application Process
        </h2>
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="timeline">
              <div className="event" data-aos="fade-up">
                <h4>1. Choose Your Program</h4>
                <p>
                  Select between Grand Ecoles or Universities based on your
                  career goals
                </p>
              </div>
              <div className="event" data-aos="fade-up">
                <h4>2. Prepare Documents</h4>
                <p>
                  Academic transcripts, CV, motivation letter, and language
                  certifications
                </p>
              </div>
              <div className="event" data-aos="fade-up">
                <h4>3. Submit Application</h4>
                <p>Apply through the institution's portal or Campus France</p>
              </div>
              <div className="event" data-aos="fade-up">
                <h4>4. Admission Decision</h4>
                <p>Receive and accept your offer of admission</p>
              </div>
              <div className="event" data-aos="fade-up">
                <h4>5. Visa Application</h4>
                <p>Apply for your student visa at the French embassy</p>
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

export default France;
