import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "../components/navbar";
import "../Css/unitedstates.css";
import Counsellingform from "../components/counsellingform";
import Contactusform from "../components/contactusform";
import { Link } from "react-router-dom";

const Unitedstates = () => {
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
      {/* Navigation */}
      <Navbar />
      {/* Hero Section */}
      <section id="home" className="unitedstates-hero">
        <div
          className="hero-content"
          data-aos="fade-up"
          data-aos-duration={1000}
        >
          <div className="hero-box">
            <h1>Study in USA with Vertex Overseas</h1>
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
      {/* Why USA Section */}
      <section id="why-usa" className="container my-5">
        <h2 className="text-center mb-4 section-title" data-aos="fade-up">
          Why Choose USA for Your Education?
        </h2>
        <div className="row g-4">
          <div className="col-md-4" data-aos="fade-up" data-aos-delay={100}>
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">World-Renowned Universities</h5>
                <p className="card-text">
                  Home to 8 of the top 10 universities globally, offering
                  cutting-edge research facilities and innovation hubs.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4" data-aos="fade-up" data-aos-delay={200}>
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Diverse Academic Programs</h5>
                <p className="card-text">
                  Flexible curriculum with thousands of majors to choose from,
                  allowing you to customize your degree.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4" data-aos="fade-up" data-aos-delay={300}>
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Cultural Melting Pot</h5>
                <p className="card-text">
                  Experience a rich tapestry of cultures and perspectives,
                  developing a global network of friends and professionals.
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
            Understanding the US Education System
          </h2>
          <div className="row g-4">
            <div className="col-md-6" data-aos="fade-up" data-aos-delay={100}>
              <h3>Grading System</h3>
              <table className="table table-striped table-hover">
                <thead>
                  <tr>
                    <th>Grade</th>
                    <th>Points</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>A</td>
                    <td>4</td>
                    <td>Excellent</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Above average</td>
                  </tr>
                  <tr>
                    <td>C</td>
                    <td>2</td>
                    <td>Average</td>
                  </tr>
                  <tr>
                    <td>D</td>
                    <td>1</td>
                    <td>Passing</td>
                  </tr>
                  <tr>
                    <td>F</td>
                    <td>0</td>
                    <td>Fail</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="col-md-6" data-aos="fade-up" data-aos-delay={200}>
              <h3>Academic Calendar</h3>
              <ul className="list-group">
                <li className="list-group-item">
                  Semester System: Two 16-week terms (Fall and Spring)
                </li>
                <li className="list-group-item">
                  Quarter System: Three terms from September to June
                </li>
              </ul>
              <h3 className="mt-4">Program Duration</h3>
              <ul className="list-group">
                <li className="list-group-item">Bachelor's Degree: 4 years</li>
                <li className="list-group-item">Master's Degree: 2 years</li>
                <li className="list-group-item">MBA: 2 to 3 years</li>
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
        <div className="row g-4">
          <div className="col-md-4" data-aos="fade-up" data-aos-delay={100}>
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Bachelor's Programs</h5>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    Completed high school (10+2)
                  </li>
                  <li className="list-group-item">
                    Good grades (usually 55% or higher)
                  </li>
                  <li className="list-group-item">
                    TOEFL (61-80) or IELTS (5.5-6.0)
                  </li>
                  <li className="list-group-item">SAT scores</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-4" data-aos="fade-up" data-aos-delay={200}>
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Master's Programs</h5>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">Bachelor's degree</li>
                  <li className="list-group-item">
                    Good grades (usually 55% or higher)
                  </li>
                  <li className="list-group-item">
                    TOEFL (61-80) or IELTS (6.0-6.5)
                  </li>
                  <li className="list-group-item">
                    GRE score (around 300 or higher)
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-4" data-aos="fade-up" data-aos-delay={300}>
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">MBA Programs</h5>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">Bachelor's degree</li>
                  <li className="list-group-item">
                    TOEFL (61-80) or IELTS (6.5)
                  </li>
                  <li className="list-group-item">GMAT score (320-600)</li>
                  <li className="list-group-item">
                    Work experience (helpful but not always required)
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Costs Section */}
      <section id="costs" className="bg-light py-5">
        <div className="container">
          <h2 className="text-center mb-4 section-title" data-aos="fade-up">
            Costs of Studying in the USA
          </h2>
          <div className="row justify-content-center">
            <div className="col-md-8" data-aos="fade-up" data-aos-delay={100}>
              <table className="table table-striped table-hover">
                <thead>
                  <tr>
                    <th>University Type</th>
                    <th>Approximate Tuition per Year</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Top universities</td>
                    <td>Rs. 30-35 Lakhs</td>
                  </tr>
                  <tr>
                    <td>Good universities</td>
                    <td>Rs. 18-22 Lakhs</td>
                  </tr>
                  <tr>
                    <td>Average universities</td>
                    <td>Rs. 12-15 Lakhs</td>
                  </tr>
                  <tr>
                    <td>Affordable options</td>
                    <td>Rs. 6-8 Lakhs</td>
                  </tr>
                </tbody>
              </table>
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
            <div className="accordion" id="accordionWork">
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    On-Campus Jobs
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse show"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionWork"
                >
                  <div className="accordion-body">
                    <ul>
                      <li>Work up to 20 hours per week during school</li>
                      <li>Full-time during holidays</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    Assistantships
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionWork"
                >
                  <div className="accordion-body">
                    <ul>
                      <li>
                        Teaching Assistantship (TA): Help professors with
                        classes
                      </li>
                      <li>
                        Research Assistantship (RA): Help with research projects
                      </li>
                      <li>
                        Graduate Assistantship (GA): For graduate students,
                        often pays more
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6" data-aos="fade-up" data-aos-delay={200}>
            <h3>After Graduation</h3>
            <div className="accordion" id="accordionPostGrad">
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="true"
                    aria-controls="collapseThree"
                  >
                    Optional Practical Training (OPT)
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse show"
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordionPostGrad"
                >
                  <div className="accordion-body">
                    <ul>
                      <li>Work in your field of study after graduation</li>
                      <li>Up to 12 months for most students</li>
                      <li>STEM students can get a 24-month extension</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
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
                  <h3>Research Universities and Programs</h3>
                  <p>
                    Explore options that match your academic goals and budget.
                  </p>
                </li>
                <li className="event" data-date="Step 2">
                  <h3>Take Required Tests</h3>
                  <p>
                    Prepare for and take tests like GRE/GMAT and TOEFL/IELTS.
                  </p>
                </li>
                <li className="event" data-date="Step 3">
                  <h3>Prepare Application Documents</h3>
                  <p>
                    Gather transcripts, write essays, and get recommendation
                    letters.
                  </p>
                </li>
                <li className="event" data-date="Step 4">
                  <h3>Apply to Chosen Universities</h3>
                  <p>Submit your applications before the deadlines.</p>
                </li>
                <li className="event" data-date="Step 5">
                  <h3>Accept Offer and Pay Deposit</h3>
                  <p>Choose your preferred university and secure your spot.</p>
                </li>
                <li className="event" data-date="Step 6">
                  <h3>Apply for F1 Student Visa</h3>
                  <p>Prepare for and attend your visa interview.</p>
                </li>
                <li className="event" data-date="Step 7">
                  <h3>Prepare for Your Journey</h3>
                  <p>
                    Arrange housing, book flights, and get ready for your USA
                    adventure!
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

export default Unitedstates;
