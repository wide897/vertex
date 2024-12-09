import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../Css/uk.css";
import Navbar from "../components/navbar";
import Counsellingform from "../components/counsellingform";
import Contactusform from "../components/contactusform";
import { Link } from "react-router-dom";

const Unitedkingdom = () => {
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
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/919390292090"
        className="whatsapp-btn"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="bi bi-whatsapp" />
      </a>
      {/* Hero Section */}
      <section id="home" className="uk-hero">
        <div
          className="hero-content"
          data-aos="fade-up"
          data-aos-duration={1000}
        >
          <div className="hero-box">
            <h1>Study in UK with Vertex Overseas</h1>
            <p>
              Your gateway to world-class education and endless opportunities
            </p>
            <Link to="/bookform" className="cta-button">
              Register Now - Get a Call
            </Link>
          </div>
        </div>
      </section>
      {/* Why UK Section */}
      <section id="why-uk" className="container my-5">
        <h2 className="text-center mb-4 section-title" data-aos="fade-up">
          Why Choose UK for Your Education?
        </h2>
        <div className="row g-4">
          <div className="col-md-4" data-aos="fade-up" data-aos-delay={100}>
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">World-Renowned Universities</h5>
                <p className="card-text">
                  Home to prestigious institutions like Oxford and Cambridge,
                  offering centuries-old tradition and cutting-edge research.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4" data-aos="fade-up" data-aos-delay={200}>
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Flexible Education System</h5>
                <p className="card-text">
                  Choose from a wide range of courses and benefit from
                  industry-focused curriculum and strong research
                  infrastructure.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4" data-aos="fade-up" data-aos-delay={300}>
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Cultural Experience</h5>
                <p className="card-text">
                  Immerse yourself in a diverse, multicultural environment and
                  build a global network while enjoying rich history and
                  culture.
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
            Understanding the UK Education System
          </h2>
          <div className="row g-4">
            <div className="col-md-6" data-aos="fade-up" data-aos-delay={100}>
              <h3>Undergraduate Programs</h3>
              <ul className="list-group">
                <li className="list-group-item">
                  Mostly 3 years in duration (4 years in Scotland)
                </li>
                <li className="list-group-item">
                  Honours programs at bachelor's level
                </li>
                <li className="list-group-item">
                  120 credits per year (360 credits total)
                </li>
                <li className="list-group-item">
                  Assessment through presentations and essays
                </li>
              </ul>
            </div>
            <div className="col-md-6" data-aos="fade-up" data-aos-delay={200}>
              <h3>Postgraduate Programs</h3>
              <ul className="list-group">
                <li className="list-group-item">
                  Masters by instruction or research
                </li>
                <li className="list-group-item">
                  1 year for ordinary Masters, 2 years for MPhil
                </li>
                <li className="list-group-item">
                  180 credits for 12 months of study
                </li>
                <li className="list-group-item">
                  Option to exit with PGDip after 120 credits
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
          <div className="col-md-6" data-aos="fade-up" data-aos-delay={100}>
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Undergraduate Programs</h5>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    Completed high school (10+2) with 60% and above
                  </li>
                  <li className="list-group-item">
                    IELTS score (usually 6.0-6.5 overall)
                  </li>
                  <li className="list-group-item">Personal statement</li>
                  <li className="list-group-item">Letters of recommendation</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-6" data-aos="fade-up" data-aos-delay={200}>
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Postgraduate Programs</h5>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    Bachelor's degree with 55% and above
                  </li>
                  <li className="list-group-item">
                    IELTS score (usually 6.5 overall, no band less than 6.0)
                  </li>
                  <li className="list-group-item">Statement of purpose</li>
                  <li className="list-group-item">Two academic references</li>
                  <li className="list-group-item">CV/Resume</li>
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
            Costs of Studying in the UK
          </h2>
          <div className="row justify-content-center">
            <div className="col-md-8" data-aos="fade-up" data-aos-delay={100}>
              <table className="table table-striped table-hover">
                <thead>
                  <tr>
                    <th>Expense Type</th>
                    <th>Approximate Cost (per year)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Tuition fees (Undergraduate)</td>
                    <td>£10,000 - £20,000</td>
                  </tr>
                  <tr>
                    <td>Tuition fees (Postgraduate)</td>
                    <td>£11,000 - £25,000</td>
                  </tr>
                  <tr>
                    <td>Living expenses (London)</td>
                    <td>£15,180</td>
                  </tr>
                  <tr>
                    <td>Living expenses (Outside London)</td>
                    <td>£12,180</td>
                  </tr>
                </tbody>
              </table>
              <p className="mt-3">
                Note: These are approximate figures. Actual costs may vary
                depending on the institution and location.
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
                Work up to 20 hours per week during term time
              </li>
              <li className="list-group-item">
                Full-time work allowed during holidays
              </li>
              <li className="list-group-item">
                On-campus and off-campus job opportunities available
              </li>
            </ul>
          </div>
          <div className="col-md-6" data-aos="fade-up" data-aos-delay={200}>
            <h3>After Graduation</h3>
            <ul className="list-group">
              <li className="list-group-item">
                Graduate Immigration Route (GIR) allows 2 years of post-study
                work
              </li>
              <li className="list-group-item">3 years for doctoral students</li>
              <li className="list-group-item">
                Opportunity to gain valuable work experience and enhance your
                resume
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
                  <h3>Choose Your Course and University</h3>
                  <p>
                    Research and select the program that best fits your academic
                    goals and career aspirations.
                  </p>
                </li>
                <li className="event" data-date="Step 2">
                  <h3>Prepare Required Documents</h3>
                  <p>
                    Gather transcripts, write personal statement, and obtain
                    recommendation letters.
                  </p>
                </li>
                <li className="event" data-date="Step 3">
                  <h3>Take English Language Test</h3>
                  <p>
                    Take IELTS or equivalent test and achieve the required
                    score.
                  </p>
                </li>
                <li className="event" data-date="Step 4">
                  <h3>Submit Application</h3>
                  <p>
                    Apply through UCAS for undergraduate programs or directly to
                    the university for postgraduate courses.
                  </p>
                </li>
                <li className="event" data-date="Step 5">
                  <h3>Receive Offer and Accept</h3>
                  <p>
                    Upon receiving an offer, accept it and pay any required
                    deposit.
                  </p>
                </li>
                <li className="event" data-date="Step 6">
                  <h3>Apply for Student Visa</h3>
                  <p>
                    Apply for your UK student visa (Tier 4) and prepare for your
                    visa interview.
                  </p>
                </li>
                <li className="event" data-date="Step 7">
                  <h3>Prepare for Departure</h3>
                  <p>
                    Arrange accommodation, book flights, and get ready for your
                    UK adventure!
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* Scholarships Section */}
      <section id="scholarships" className="container my-5">
        <h2 className="text-center mb-4 section-title" data-aos="fade-up">
          Scholarships for International Students
        </h2>
        <div className="row g-4">
          <div className="col-md-6" data-aos="fade-up" data-aos-delay={100}>
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Chevening Scholarships</h5>
                <p className="card-text">
                  Fully-funded scholarships for outstanding emerging leaders to
                  pursue a one-year master's at any UK university.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6" data-aos="fade-up" data-aos-delay={200}>
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Commonwealth Scholarships</h5>
                <p className="card-text">
                  For students from Commonwealth countries to pursue Master's or
                  PhD degrees in the UK.
                </p>
              </div>
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

export default Unitedkingdom;
