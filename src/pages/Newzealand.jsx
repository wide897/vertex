import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../Css/newzealand.css";
import Navbar from "../components/navbar";
import Counsellingphoto from "../assets/552711453.png";
import Counsellingform from "../components/counsellingform";
import Contactusform from "../components/contactusform";
import { Link } from "react-router-dom";

const Newzealand = () => {
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
      <section id="home" className="newzland-hero">
        <div
          className="hero-content"
          data-aos="fade-up"
          data-aos-duration={1000}
        >
          <div className="hero-box">
            <h1>Study in New Zealand with Vertex Overseas</h1>
            <p>
              Your gateway to world-class education in a beautiful, friendly
              country
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
      {/* Why New Zealand Section */}
      <section id="why-newzealand" className="container my-5">
        <h2 className="text-center mb-4 section-title" data-aos="fade-up">
          Why Choose New Zealand for Your Education?
        </h2>
        <div className="row g-4">
          <div className="col-md-4" data-aos="fade-up" data-aos-delay={100}>
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">High-Quality Education</h5>
                <p className="card-text">
                  New Zealand offers world-class education with a focus on
                  practical skills and innovative thinking.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4" data-aos="fade-up" data-aos-delay={200}>
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Safe and Welcoming</h5>
                <p className="card-text">
                  One of the safest countries in the world with a warm, friendly
                  population and a high quality of life.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4" data-aos="fade-up" data-aos-delay={300}>
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Work Opportunities</h5>
                <p className="card-text">
                  Students can work part-time during studies and have post-study
                  work rights for up to 3 years.
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
            Understanding the New Zealand Education System
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
                    <td>5-6</td>
                    <td>Diploma</td>
                    <td>1-2 years</td>
                  </tr>
                  <tr>
                    <td>7</td>
                    <td>Bachelor's Degree</td>
                    <td>3 years</td>
                  </tr>
                  <tr>
                    <td>8</td>
                    <td>Postgraduate Diploma</td>
                    <td>1 year</td>
                  </tr>
                  <tr>
                    <td>9</td>
                    <td>Master's Degree</td>
                    <td>1-2 years</td>
                  </tr>
                  <tr>
                    <td>10</td>
                    <td>Doctoral Degree (PhD)</td>
                    <td>3-5 years</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="col-md-6" data-aos="fade-up" data-aos-delay={200}>
              <h3>Academic Calendar</h3>
              <ul className="list-group">
                <li className="list-group-item">
                  Semester 1: February to June
                </li>
                <li className="list-group-item">
                  Semester 2: July to November
                </li>
                <li className="list-group-item">
                  Summer School: November to February (optional)
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
        <div className="row g-4">
          <div className="col-md-4" data-aos="fade-up" data-aos-delay={100}>
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Undergraduate Programs</h5>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    Completed high school (10+2)
                  </li>
                  <li className="list-group-item">
                    IELTS score of 6.0 (no band less than 5.5)*
                  </li>
                  <li className="list-group-item">
                    Specific subject requirements may vary by program
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-4" data-aos="fade-up" data-aos-delay={200}>
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Postgraduate Programs</h5>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    Bachelor's degree in a relevant field
                  </li>
                  <li className="list-group-item">
                    IELTS score of 6.5 (no band less than 6.0)*
                  </li>
                  <li className="list-group-item">
                    Some programs may require work experience
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-4" data-aos="fade-up" data-aos-delay={300}>
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Doctoral Programs</h5>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    Master's degree with research component
                  </li>
                  <li className="list-group-item">
                    IELTS score of 6.5 (no band less than 6.0)*
                  </li>
                  <li className="list-group-item">
                    Research proposal and potential supervisor
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <p className="text-center mt-3">
          * Or equivalent English language proficiency test scores
        </p>
      </section>
      {/* Costs Section */}
      <section id="costs" className="bg-light py-5">
        <div className="container">
          <h2 className="text-center mb-4 section-title" data-aos="fade-up">
            Costs of Studying in New Zealand
          </h2>
          <div className="row justify-content-center">
            <div className="col-md-8" data-aos="fade-up" data-aos-delay={100}>
              <table className="table table-striped table-hover">
                <thead>
                  <tr>
                    <th>Study Level</th>
                    <th>Approximate Annual Tuition (NZD)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Undergraduate</td>
                    <td>$22,000 - $32,000</td>
                  </tr>
                  <tr>
                    <td>Postgraduate</td>
                    <td>$26,000 - $37,000</td>
                  </tr>
                  <tr>
                    <td>Doctoral</td>
                    <td>$6,500 - $9,000 (same as domestic students)</td>
                  </tr>
                </tbody>
              </table>
              <p className="text-center mt-3">
                Note: These are approximate figures. Actual costs may vary by
                institution and program.
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
                    Part-Time Work
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
                      <li>Work up to 20 hours per week during term time</li>
                      <li>Full-time during scheduled holidays</li>
                      <li>
                        Minimum wage: NZ $22.70 per hour (as of April 2023)*
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
                <h2 className="accordion-header" id="headingTwo">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="true"
                    aria-controls="collapseTwo"
                  >
                    Post-Study Work Visa
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse show"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionPostGrad"
                >
                  <div className="accordion-body">
                    <ul>
                      <li>
                        Up to 3 years depending on the level of qualification*
                      </li>
                      <li>Open work visa, allowing work for any employer</li>
                      <li>Opportunity to gain valuable work experience</li>
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
                  <h3>Choose Your Program and Institution</h3>
                  <p>
                    Research and select the program that aligns with your career
                    goals.
                  </p>
                </li>
                <li className="event" data-date="Step 2">
                  <h3>Check Admission Requirements</h3>
                  <p>
                    Ensure you meet academic and English language requirements.
                  </p>
                </li>
                <li className="event" data-date="Step 3">
                  <h3>Prepare Application Documents</h3>
                  <p>
                    Gather transcripts, test scores, and write your personal
                    statement.
                  </p>
                </li>
                <li className="event" data-date="Step 4">
                  <h3>Submit Your Application</h3>
                  <p>
                    Apply directly to the institution or through an agent like
                    Vertex Overseas.
                  </p>
                </li>
                <li className="event" data-date="Step 5">
                  <h3>Receive Offer Letter</h3>
                  <p>
                    If successful, you'll receive an offer of place from the
                    institution.
                  </p>
                </li>
                <li className="event" data-date="Step 6">
                  <h3>Apply for Student Visa</h3>
                  <p>Once you accept the offer, apply for your student visa.</p>
                </li>
                <li className="event" data-date="Step 7">
                  <h3>Prepare for Departure</h3>
                  <p>
                    Arrange accommodation, flights, and get ready for your New
                    Zealand adventure!
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

export default Newzealand;
