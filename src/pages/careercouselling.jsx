import React, { useEffect } from "react";
import "../Css/careercouselling.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "../components/navbar";
const Careercouselling = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <div className="main-display">
        <Navbar />
        <section className="process-section" id="process">
          <div className="container display-flex">
            <div className="section-title">
              <h2>Our Counselling Process</h2>
              <p>
                A comprehensive step-by-step approach to guide you towards your
                ideal career path and academic goals
              </p>
            </div>
            <div className="row">
              {/* Step 1: Career Assessment */}
              <div className="col-lg-4 col-md-6 mt-2">
                <div className="process-card" data-aos="fade-up">
                  <div className="process-icon">
                    <i className="bi bi-clipboard-check" />
                  </div>
                  <h3 className="process-title">Career Assessment</h3>
                  <p className="process-description">
                    Comprehensive analysis of your interests, skills, and goals
                    through advanced assessment tools.
                  </p>
                  <ul className="feature-list">
                    <li>Personality profiling</li>
                    <li>Aptitude testing</li>
                    <li>Interest assessment</li>
                    <li>Skills evaluation</li>
                  </ul>
                </div>
              </div>
              {/* Step 2: Academic Planning */}
              <div className="col-lg-4 col-md-6 mt-2">
                <div
                  className="process-card"
                  data-aos="fade-up"
                  data-aos-delay={100}
                >
                  <div className="process-icon">
                    <i className="bi bi-journal-text" />
                  </div>
                  <h3 className="process-title">Academic Planning</h3>
                  <p className="process-description">
                    Creating a tailored academic roadmap aligned with your
                    career aspirations.
                  </p>
                  <ul className="feature-list">
                    <li>Course selection</li>
                    <li>University shortlisting</li>
                    <li>Admission strategy</li>
                    <li>Timeline planning</li>
                  </ul>
                </div>
              </div>
              {/* Step 3: Application Process */}
              <div className="col-lg-4 col-md-6 mt-4">
                <div
                  className="process-card"
                  data-aos="fade-up"
                  data-aos-delay={200}
                >
                  <div className="process-icon">
                    <i className="bi bi-file-earmark-text" />
                  </div>
                  <h3 className="process-title">Application Process</h3>
                  <p className="process-description">
                    Expert guidance throughout your university application
                    journey.
                  </p>
                  <ul className="feature-list">
                    <li>Document preparation</li>
                    <li>SOP &amp; essay guidance</li>
                    <li>Application submission</li>
                    <li>Visa assistance</li>
                  </ul>
                </div>
              </div>
              {/* Step 4: Test Preparation */}
              <div className="col-lg-4 col-md-6 mt-4">
                <div
                  className="process-card"
                  data-aos="fade-up"
                  data-aos-delay={300}
                >
                  <div className="process-icon">
                    <i className="bi bi-book" />
                  </div>
                  <h3 className="process-title">Test Preparation</h3>
                  <p className="process-description">
                    Comprehensive preparation for required standardized tests.
                  </p>
                  <ul className="feature-list">
                    <li>IELTS/TOEFL training</li>
                    <li>GRE/GMAT coaching</li>
                    <li>Practice tests</li>
                    <li>Score improvement</li>
                  </ul>
                </div>
              </div>
              {/* Step 5: Financial Planning */}
              <div className="col-lg-4 col-md-6 mt-4">
                <div
                  className="process-card"
                  data-aos="fade-up"
                  data-aos-delay={400}
                >
                  <div className="process-icon">
                    <i className="bi bi-calculator" />
                  </div>
                  <h3 className="process-title">Financial Planning</h3>
                  <p className="process-description">
                    Assistance with budgeting and financial requirements.
                  </p>
                  <ul className="feature-list">
                    <li>Cost estimation</li>
                    <li>Scholarship guidance</li>
                    <li>Loan assistance</li>
                    <li>Budget planning</li>
                  </ul>
                </div>
              </div>
              {/* Step 6: Pre-Departure Support */}
              <div className="col-lg-4 col-md-6 mt-4">
                <div
                  className="process-card"
                  data-aos="fade-up"
                  data-aos-delay={500}
                >
                  <div className="process-icon">
                    <i className="bi bi-airplane" />
                  </div>
                  <h3 className="process-title">Pre-Departure Support</h3>
                  <p className="process-description">
                    Complete assistance before you begin your journey.
                  </p>
                  <ul className="feature-list">
                    <li>Travel arrangements</li>
                    <li>Accommodation guidance</li>
                    <li>Cultural orientation</li>
                    <li>Local support setup</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <footer className="py-4 text-center">
        <div className="container">
          <p>© 2024 Vertex Overseas Consultancy. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Careercouselling;
