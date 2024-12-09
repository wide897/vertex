import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "../components/navbar";
import "../Css/dubai.css";
import Counsellingform from "../components/counsellingform";
import { Link } from "react-router-dom";
const Dubai = () => {
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
      <section id="home" className="dubai-hero">
        <div
          className="hero-content"
          data-aos="fade-up"
          data-aos-duration={1000}
        >
          <div className="hero-box">
            <h1>Study in Dubai with Vertex Overseas</h1>
            <p>Your gateway to world-class education in the City of Gold</p>
            <Link to="/bookform" className="cta-button">
              Register Now - Get a Call
            </Link>
          </div>
        </div>
      </section>
      {/* Quick Facts Section */}
      <section className="container my-5">
        <h2 className="text-center mb-4 section-title" data-aos="fade-up">
          Quick Facts about Dubai
        </h2>
        <div className="row g-4">
          <div className="col-md-4" data-aos="fade-up" data-aos-delay={100}>
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Global Standing</h5>
                <ul className="list-unstyled">
                  <li>🏆 Global Business Hub</li>
                  <li>🌍 Part of UAE's Seven Emirates</li>
                  <li>🏢 World's Tallest Building (Burj Khalifa)</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-4" data-aos="fade-up" data-aos-delay={200}>
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Education Benefits</h5>
                <ul className="list-unstyled">
                  <li>📚 65+ Colleges and Universities</li>
                  <li>🗣️ English-Taught Programs</li>
                  <li>💰 Affordable Education</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-4" data-aos="fade-up" data-aos-delay={300}>
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Student Life</h5>
                <ul className="list-unstyled">
                  <li>🌞 Year-round Sunshine</li>
                  <li>🏰 Modern Infrastructure</li>
                  <li>🌍 International Community</li>
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
            Dubai Education System
          </h2>
          <div className="row g-4">
            <div className="col-md-6" data-aos="fade-up" data-aos-delay={100}>
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">Education Structure</h5>
                  <div className="mb-4">
                    <h6 className="fw-bold">Public Universities</h6>
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item">
                        Arabic medium instruction
                      </li>
                      <li className="list-group-item">
                        Strong emphasis on English
                      </li>
                      <li className="list-group-item">Government supported</li>
                    </ul>
                  </div>
                  <div>
                    <h6 className="fw-bold">Private Universities</h6>
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item">
                        English medium instruction
                      </li>
                      <li className="list-group-item">
                        International curriculum
                      </li>
                      <li className="list-group-item">Industry partnerships</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6" data-aos="fade-up" data-aos-delay={200}>
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">Program Features</h5>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                      <i className="bi bi-check-circle-fill text-success me-2" />
                      Full and part-time options
                    </li>
                    <li className="list-group-item">
                      <i className="bi bi-check-circle-fill text-success me-2" />
                      Evening classes available
                    </li>
                    <li className="list-group-item">
                      <i className="bi bi-check-circle-fill text-success me-2" />
                      Accelerated programs
                    </li>
                    <li className="list-group-item">
                      <i className="bi bi-check-circle-fill text-success me-2" />
                      Year-round attendance
                    </li>
                    <li className="list-group-item">
                      <i className="bi bi-check-circle-fill text-success me-2" />
                      Professional development focus
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
                      <td>IT</td>
                      <td>2 years</td>
                      <td>Industry focus</td>
                    </tr>
                    <tr>
                      <td>Business</td>
                      <td>1-2 years</td>
                      <td>Management focus</td>
                    </tr>
                    <tr>
                      <td>Marketing</td>
                      <td>2 years</td>
                      <td>Practical training</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="col-md-6" data-aos="fade-up" data-aos-delay={200}>
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">Costs &amp; Fees</h5>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <i className="bi bi-currency-dollar me-2" />
                    Initial Deposit: 7000-9000 AED
                  </li>
                  <li className="list-group-item">
                    <i className="bi bi-cash me-2" />
                    Tuition Fee: ~10,000 USD/year
                  </li>
                  <li className="list-group-item">
                    <i className="bi bi-house-door me-2" />
                    Living Cost: 3000-6000 AED/month
                  </li>
                  <li className="list-group-item">
                    <i className="bi bi-book me-2" />
                    Affordable compared to US/UK
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Work Opportunities Section */}
      <section id="work-opportunities" className="bg-light py-5">
        <div className="container">
          <h2 className="text-center mb-4 section-title" data-aos="fade-up">
            Part-Time Work Opportunities
          </h2>
          <div className="row g-4">
            <div className="col-md-4" data-aos="fade-up" data-aos-delay={100}>
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">Creative &amp; Media</h5>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">Web Design</li>
                    <li className="list-group-item">Graphic Design</li>
                    <li className="list-group-item">Content Writing</li>
                    <li className="list-group-item">Photography</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-4" data-aos="fade-up" data-aos-delay={200}>
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">Service Sector</h5>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">Tour Guide</li>
                    <li className="list-group-item">Call Center Roles</li>
                    <li className="list-group-item">Customer Service</li>
                    <li className="list-group-item">Event Management</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-4" data-aos="fade-up" data-aos-delay={300}>
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">Education</h5>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">Private Tutoring</li>
                    <li className="list-group-item">Language Training</li>
                    <li className="list-group-item">Skills Instruction</li>
                    <li className="list-group-item">Academic Support</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Why Choose Dubai Section */}
      <section className="container my-5">
        <h2 className="text-center mb-4 section-title" data-aos="fade-up">
          Why Choose Dubai?
        </h2>
        <div className="row g-4">
          <div className="col-md-4" data-aos="fade-up" data-aos-delay={100}>
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">Academic Excellence</h5>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <i className="bi bi-check-circle-fill text-success me-2" />
                    World-class universities
                  </li>
                  <li className="list-group-item">
                    <i className="bi bi-check-circle-fill text-success me-2" />
                    Diverse program options
                  </li>
                  <li className="list-group-item">
                    <i className="bi bi-check-circle-fill text-success me-2" />
                    International faculty
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-4" data-aos="fade-up" data-aos-delay={200}>
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">Career Growth</h5>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <i className="bi bi-check-circle-fill text-success me-2" />
                    Fast-growing economy
                  </li>
                  <li className="list-group-item">
                    <i className="bi bi-check-circle-fill text-success me-2" />
                    Global business hub
                  </li>
                  <li className="list-group-item">
                    <i className="bi bi-check-circle-fill text-success me-2" />
                    Networking opportunities
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-4" data-aos="fade-up" data-aos-delay={300}>
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">Lifestyle Benefits</h5>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <i className="bi bi-check-circle-fill text-success me-2" />
                    Safe environment
                  </li>
                  <li className="list-group-item">
                    <i className="bi bi-check-circle-fill text-success me-2" />
                    Multicultural atmosphere
                  </li>
                  <li className="list-group-item">
                    <i className="bi bi-check-circle-fill text-success me-2" />
                    Modern infrastructure
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
            Application Process
          </h2>
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="timeline">
                <div className="event" data-aos="fade-up">
                  <h4>1. Program Selection</h4>
                  <p>Choose from over 65 colleges and universities in Dubai</p>
                </div>
                <div className="event" data-aos="fade-up">
                  <h4>2. Documentation</h4>
                  <p>
                    Prepare academic transcripts, English proficiency test
                    scores, and other required documents
                  </p>
                </div>
                <div className="event" data-aos="fade-up">
                  <h4>3. Initial Payment</h4>
                  <p>
                    Pay the initial deposit (7000-9000 AED) to confirm
                    enrollment
                  </p>
                </div>
                <div className="event" data-aos="fade-up">
                  <h4>4. Visa Application</h4>
                  <p>Apply for student visa with university assistance</p>
                </div>
                <div className="event" data-aos="fade-up">
                  <h4>5. Arrival Planning</h4>
                  <p>
                    Arrange accommodation and prepare for your journey to Dubai
                  </p>
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

export default Dubai;
