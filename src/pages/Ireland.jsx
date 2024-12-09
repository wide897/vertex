import React, { useEffect } from "react";
import Navbar from "../components/navbar";
import "../Css/ireland.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Counsellingphoto from "../assets/552711453.png";
import Counsellingform from "../components/counsellingform";
import { Link } from "react-router-dom";

const Ireland = () => {
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
      <section id="home" className="ireland-hero ">
        <div
          className="hero-content"
          data-aos="fade-up"
          data-aos-duration={1000}
        >
          <div className="hero-box">
            <h1>Study in Ireland with Vertex Overseas</h1>
            <p>
              Your gateway to world-class education in the friendliest country
              in Europe
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
          Quick Facts about Ireland
        </h2>
        <div className="row g-4">
          <div className="col-md-4" data-aos="fade-up" data-aos-delay={100}>
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Global Rankings</h5>
                <ul className="list-unstyled">
                  <li>🏆 3rd Most Friendly Country Worldwide</li>
                  <li>🌟 5th on Global Peace Index</li>
                  <li>😊 22nd in World Happiness Index</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-4" data-aos="fade-up" data-aos-delay={200}>
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Education Excellence</h5>
                <ul className="list-unstyled">
                  <li>📚 All Universities in Top 5% Globally</li>
                  <li>💻 2nd Largest IT Services Exporter</li>
                  <li>🎓 Education System in Top 20 Worldwide</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-4" data-aos="fade-up" data-aos-delay={300}>
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Student Benefits</h5>
                <ul className="list-unstyled">
                  <li>🗣️ English-Speaking Country in Eurozone</li>
                  <li>🌤️ Moderate Climate Year-Round</li>
                  <li>👥 Population: ~5.1 Million</li>
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
            Irish Education System
          </h2>
          <div className="row g-4">
            <div className="col-md-6" data-aos="fade-up" data-aos-delay={100}>
              <h3>Qualification Levels</h3>
              <table className="table table-striped table-hover">
                <thead>
                  <tr>
                    <th>Level</th>
                    <th>Qualification</th>
                    <th>Duration</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>7</td>
                    <td>Ordinary Bachelor's Degree</td>
                    <td>3 years</td>
                  </tr>
                  <tr>
                    <td>8</td>
                    <td>Honours Bachelor's Degree</td>
                    <td>3-4 years</td>
                  </tr>
                  <tr>
                    <td>8</td>
                    <td>Higher Diploma</td>
                    <td>1 year</td>
                  </tr>
                  <tr>
                    <td>9</td>
                    <td>Master's Degree</td>
                    <td>1-2 years</td>
                  </tr>
                  <tr>
                    <td>10</td>
                    <td>Doctoral Degree</td>
                    <td>4 years</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="col-md-6" data-aos="fade-up" data-aos-delay={200}>
              <h3>Academic Intakes</h3>
              <div className="card mb-3">
                <div className="card-body">
                  <h5 className="card-title">Autumn Intake (Semester 1)</h5>
                  <p>
                    <i className="bi bi-calendar-event" /> September to December
                  </p>
                  <p>
                    <i className="bi bi-clock" /> Application Deadline: February
                    - July
                  </p>
                </div>
              </div>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Spring Intake (Semester 2)</h5>
                  <p>
                    <i className="bi bi-calendar-event" /> January to May
                  </p>
                  <p>
                    <i className="bi bi-clock" /> Application Deadline:
                    September - October
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Admission Requirements Section */}
      <section id="admission-requirements" className="container my-5">
        <h2 className="text-center mb-4 section-title" data-aos="fade-up">
          Admission Requirements
        </h2>
        <div className="row g-4">
          <div className="col-md-6" data-aos="fade-up" data-aos-delay={100}>
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">Academic Requirements</h5>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <i className="bi bi-check-circle-fill text-success" />
                    70%+ for University admission
                  </li>
                  <li className="list-group-item">
                    <i className="bi bi-check-circle-fill text-success" />
                    60%+ for Institute of Technology
                  </li>
                  <li className="list-group-item">
                    <i className="bi bi-check-circle-fill text-success" />
                    Relevant bachelor's degree for postgraduate programs
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-6" data-aos="fade-up" data-aos-delay={200}>
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">Required Documents</h5>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <i className="bi bi-file-text" /> Statement of Purpose (SOP)
                  </li>
                  <li className="list-group-item">
                    <i className="bi bi-file-earmark-text" /> Academic
                    transcripts
                  </li>
                  <li className="list-group-item">
                    <i className="bi bi-translate" /> IELTS score of 6.5 (no
                    band below 6.0)
                  </li>
                  <li className="list-group-item">
                    <i className="bi bi-file-person" /> Two recommendation
                    letters
                  </li>
                  <li className="list-group-item">
                    <i className="bi bi-file-earmark-text" /> Updated CV/Resume
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Tuition & Costs Section */}
      <section id="costs" className="bg-light py-5">
        <div className="container">
          <h2 className="text-center mb-4 section-title" data-aos="fade-up">
            Tuition Fees &amp; Living Costs
          </h2>
          <div className="row g-4">
            <div className="col-md-6" data-aos="fade-up" data-aos-delay={100}>
              <h3>Undergraduate Programs</h3>
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>Program</th>
                    <th>Annual Fee (EUR)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Medicine and Related</td>
                    <td>45,000 - 52,000</td>
                  </tr>
                  <tr>
                    <td>Engineering</td>
                    <td>9,750 - 23,000</td>
                  </tr>
                  <tr>
                    <td>Science &amp; Technology</td>
                    <td>9,750 - 22,000</td>
                  </tr>
                  <tr>
                    <td>Arts &amp; Humanities</td>
                    <td>9,750 - 20,000</td>
                  </tr>
                  <tr>
                    <td>Business</td>
                    <td>9,750 - 18,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="col-md-6" data-aos="fade-up" data-aos-delay={200}>
              <h3>Postgraduate Programs</h3>
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>Program</th>
                    <th>Annual Fee (EUR)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Medicine and Related</td>
                    <td>14,000 - 31,000</td>
                  </tr>
                  <tr>
                    <td>Engineering</td>
                    <td>9,250 - 24,000</td>
                  </tr>
                  <tr>
                    <td>Science &amp; Technology</td>
                    <td>9,250 - 45,000</td>
                  </tr>
                  <tr>
                    <td>Arts &amp; Humanities</td>
                    <td>9,250 - 22,000</td>
                  </tr>
                  <tr>
                    <td>Business</td>
                    <td>9,250 - 34,500</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
      {/* Post-Study Work Options */}
      <section id="post-study" className="container my-5">
        <h2 className="text-center mb-4 section-title" data-aos="fade-up">
          Post-Study Work Opportunities
        </h2>
        <div className="row justify-content-center">
          <div className="col-md-8" data-aos="fade-up" data-aos-delay={100}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title mb-4">Stay Back Visa Options</h5>
                <div className="timeline">
                  <div className="event">
                    <h4>Level 8 Qualification</h4>
                    <p>
                      12-month stay back option for Honours Bachelor's degree
                      graduates
                    </p>
                  </div>
                  <div className="event">
                    <h4>Level 9 Qualification</h4>
                    <p>
                      24-month stay back option for Master's degree graduates
                    </p>
                  </div>
                  <div className="event">
                    <h4>Level 10 Qualification</h4>
                    <p>24-month stay back option for PhD graduates</p>
                  </div>
                </div>
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
                  <h4>Step 1: Program Selection</h4>
                  <p>Choose your desired program and university</p>
                </div>
                <div className="event" data-aos="fade-up">
                  <h4>Step 2: Document Preparation</h4>
                  <p>Gather all required documents and test scores</p>
                </div>
                <div className="event" data-aos="fade-up">
                  <h4>Step 3: Application Submission</h4>
                  <p>Submit your application through the university portal</p>
                </div>
                <div className="event" data-aos="fade-up">
                  <h4>Step 4: Offer Acceptance</h4>
                  <p>Accept your offer and pay deposit if required</p>
                </div>
                <div className="event" data-aos="fade-up">
                  <h4>Step 5: Visa Application</h4>
                  <p>Apply for your student visa with required documents</p>
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

export default Ireland;
