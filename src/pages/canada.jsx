import React, { useEffect } from "react";
import "../Css/canada.css";
import Navbar from "../components/navbar";
import AOS from "aos";
import "aos/dist/aos.css";
import Counsellingphoto from "../assets/552711453.png";
import { Link } from "react-router-dom";
import Counsellingform from "../components/counsellingform";
import Contactusform from "../components/contactusform";

const Canada = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <div className="canada-top-bar">
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
      <section id="home" className="canada-hero">
        <div
          className="canada-hero-content"
          data-aos="fade-up"
          data-aos-duration={1000}
        >
          <div className="canada-hero-box">
            <h1>Study in Canada with Vertex Overseas</h1>
            <p>
              Your gateway to world-class education and endless opportunities
            </p>
            <Link to="/bookform" className="cta-button">
              Register Now - Get a Call
            </Link>
          </div>
        </div>
      </section>
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/919390292090"
        className="whatsapp-btn"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="bi bi-whatsapp" />
      </a>
      {/* Why Canada Section */}
      <section id="why-canada" className="container my-5">
        <h2 className="text-center mb-4 section-title" data-aos="fade-up">
          Why Choose Canada for Your Education?
        </h2>
        <div className="row g-4">
          <div className="col-md-4" data-aos="fade-up" data-aos-delay={100}>
            <div classclass="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">World-Renowned Universities</h5>
                <p className="card-text">
                  26 Canadian institutions are ranked among the world's best
                  universities, offering cutting-edge research facilities and
                  innovative programs.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4" data-aos="fade-up" data-aos-delay={200}>
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Multicultural Environment</h5>
                <p className="card-text">
                  Experience a rich tapestry of cultures in one of the world's
                  most diverse and welcoming countries.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4" data-aos="fade-up" data-aos-delay={300}>
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Post-Graduation Opportunities</h5>
                <p className="card-text">
                  Benefit from extensive post-study work options and potential
                  pathways to permanent residency.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Counselling Form */}
      <Counsellingform />
      {/* Education System Section */}
      <section id="education-system" className="bg-light py-5">
        <div className="container">
          <h2 className="text-center mb-4 section-title" data-aos="fade-up">
            Canadian Education System
          </h2>
          <div className="row g-4">
            <div className="col-md-6" data-aos="fade-up" data-aos-delay={100}>
              <h3>Universities</h3>
              <ul className="list-group">
                <li className="list-group-item">
                  Research-oriented institutions
                </li>
                <li className="list-group-item">
                  Offer undergraduate, graduate, and doctoral programs
                </li>
                <li className="list-group-item">
                  Strong emphasis on research and development
                </li>
                <li className="list-group-item">
                  Bachelor's: 4 years, Master's: 1-2 years, Doctoral: 3-6 years
                </li>
                <li className="list-group-item">
                  Average tuition: CAD 20,000 to CAD 40,000 per year
                </li>
              </ul>
            </div>
            <div className="col-md-6" data-aos="fade-up" data-aos-delay={200}>
              <h3>Community Colleges</h3>
              <ul className="list-group">
                <li className="list-group-item">
                  Focus on practical skills and career-oriented programs
                </li>
                <li className="list-group-item">
                  Offer diploma, certificate, and associate degree programs
                </li>
                <li className="list-group-item">
                  Hands-on projects, internships, and co-op placements
                </li>
                <li className="list-group-item">Duration: 1-3 years</li>
                <li className="list-group-item">
                  Average tuition: CAD 8,000 to CAD 20,000 per year
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* Admission Requirements Section */}
      <section id="admission" className="container my-5">
        <h2 className="text-center mb-4 section-title" data-aos="fade-up">
          Admission Requirements
        </h2>
        <div data-aos="fade-up" data-aos-delay={100}>
          <h3>General Requirements</h3>
          <ul className="list-group mb-4">
            <li className="list-group-item">
              Completed secondary education (10+2)
            </li>
            <li className="list-group-item">
              Proof of English proficiency (IELTS/TOEFL)
            </li>
            <li className="list-group-item">Academic transcripts</li>
            <li className="list-group-item">
              Letter of Intent / Statement of Purpose
            </li>
            <li className="list-group-item">Letters of recommendation</li>
          </ul>
        </div>
        <div data-aos="fade-up" data-aos-delay={200}>
          <h3>Study Permit Application Options</h3>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">SDS vs Non-SDS</h5>
              <p>
                Canada offers two streams for international students to apply
                for a study permit:
              </p>
              <div className="row">
                <div className="col-md-6">
                  <h6>Student Direct Stream (SDS):</h6>
                  <ul>
                    <li>Faster processing (typically within 20 days)</li>
                    <li>Available to residents of specific countries</li>
                    <li>
                      Requires a Guaranteed Investment Certificate (GIC) of CAD
                      20,635
                    </li>
                    <li>First year tuition payment in advance</li>
                    <li>
                      Higher language proficiency requirements (e.g., IELTS
                      score of 6.0 in each skill)
                    </li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <h6>Regular Stream (Non-SDS):</h6>
                  <ul>
                    <li>Standard processing time</li>
                    <li>Available to students from all countries</li>
                    <li>More flexible financial requirements</li>
                    <li>More flexible language proficiency requirements</li>
                  </ul>
                </div>
              </div>
              <p className="mt-3">
                The choice between SDS and Non-SDS depends on your country of
                residence, financial situation, and language proficiency. Our
                counselors can guide you on the best option for your
                circumstances.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Costs Section */}
      <section id="costs" className="bg-light py-5">
        <div className="container">
          <h2 className="text-center mb-4 section-title" data-aos="fade-up">
            Costs of Studying in Canada
          </h2>
          <div className="row justify-content-center">
            <div className="col-md-8" data-aos="fade-up" data-aos-delay={100}>
              <table className="table table-striped table-hover">
                <thead>
                  <tr>
                    <th>Expense Type</th>
                    <th>Estimated Cost (CAD) per Year</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Tuition (Undergraduate)</td>
                    <td>20,000 - 35,000</td>
                  </tr>
                  <tr>
                    <td>Tuition (Graduate)</td>
                    <td>20,000 - 40,000</td>
                  </tr>
                  <tr>
                    <td>Living Expenses</td>
                    <td>10,000 - 15,000</td>
                  </tr>
                  <tr>
                    <td>Health Insurance</td>
                    <td>600 - 900</td>
                  </tr>
                </tbody>
              </table>
              <p className="text-muted">
                Note: Costs may vary depending on the institution, program, and
                city of study.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Work Opportunities Section */}
      <section id="work-opportunities" className="container my-5">
        <h2 className="text-center mb-4 section-title" data-aos="fade-up">
          Work Opportunities
        </h2>
        <div className="row g-4">
          <div className="col-md-6" data-aos="fade-up" data-aos-delay={100}>
            <h3>During Studies</h3>
            <ul className="list-group">
              <li className="list-group-item">
                Up to 20 hours per week during academic sessions
              </li>
              <li className="list-group-item">
                Full-time during scheduled breaks
              </li>
              <li className="list-group-item">
                On-campus and off-campus work options
              </li>
              <li className="list-group-item">
                Co-op work terms (require separate work permit)
              </li>
            </ul>
          </div>
          <div className="col-md-6" data-aos="fade-up" data-aos-delay={200}>
            <h3>Post-Graduation</h3>
            <ul className="list-group">
              <li className="list-group-item">
                Post-Graduation Work Permit (PGWP)
              </li>
              <li className="list-group-item">
                Work for up to 3 years after graduation
              </li>
              <li className="list-group-item">
                Open work permit (can work for any employer)
              </li>
              <li className="list-group-item">
                Potential pathway to permanent residency
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/* Application Process Section */}
      <section id="application-process" className="bg-light py-5">
        <div className="container">
          <h2 className="text-center mb-4 section-title" data-aos="fade-up">
            Application Process
          </h2>
          <div className="row justify-content-center">
            <div className="col-md-8" data-aos="fade-up" data-aos-delay={100}>
              <ul className="timeline">
                <li className="event" data-date="Step 1">
                  <h3>Research and Choose Programs</h3>
                  <p>
                    Explore universities and colleges that match your academic
                    goals and budget.
                  </p>
                </li>
                <li className="event" data-date="Step 2">
                  <h3>Prepare Required Documents</h3>
                  <p>
                    Gather transcripts, write Statement of Purpose, and obtain
                    recommendation letters.
                  </p>
                </li>
                <li className="event" data-date="Step 3">
                  <h3>Take Language Proficiency Test</h3>
                  <p>Prepare for and take IELTS or TOEFL exam.</p>
                </li>
                <li className="event" data-date="Step 4">
                  <h3>Apply to Chosen Institutions</h3>
                  <p>Submit your applications before the deadlines.</p>
                </li>
                <li className="event" data-date="Step 5">
                  <h3>Accept Offer and Pay Deposit</h3>
                  <p>Choose your preferred institution and secure your spot.</p>
                </li>
                <li className="event" data-date="Step 6">
                  <h3>Apply for Study Permit</h3>
                  <p>
                    Prepare documents and apply for your Canadian study permit.
                  </p>
                </li>
                <li className="event" data-date="Step 7">
                  <h3>Prepare for Your Journey</h3>
                  <p>
                    Arrange housing, book flights, and get ready for your
                    Canadian adventure!
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Section */}
      <Contactusform />
      <footer className="text-white text-center py-3">
        <p>© 2023 Vertex Overseas Consultancy. All rights reserved.</p>
      </footer>
    </>
  );
};

export default Canada;
