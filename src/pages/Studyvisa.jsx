import React, { useState, useEffect } from "react";
import "../Css/studyvisa.css";
import { Link, useLocation } from "react-router-dom";
import Masonry from "masonry-layout";
import Navbar from "../components/navbar";

const Studyvisa = () => {
  const location = useLocation();

  useEffect(() => {
    const hideLoadingOverlay = () => {
      setTimeout(() => {
        const overlay = document.querySelector(".loading-overlay");
        if (overlay) overlay.style.display = "none";
      }, 1000);
    };

    const handleScroll = () => {
      const navbar = document.querySelector(".studyvisa-navbar");
      if (navbar) {
        if (window.scrollY > 50) {
          navbar.classList.add("scrolled");
        } else {
          navbar.classList.remove("scrolled");
        }
      }
    };

    // Initialize Masonry
    const initializeMasonry = () => {
      const grid = document.querySelector(".studyvisa-comparison-grid");
      if (grid) {
        new Masonry(grid, {
          itemSelector: ".studyvisa-country-card",
          columnWidth: ".studyvisa-grid-sizer",
          gutter: ".studyvisa-gutter-sizer",
          percentPosition: true,
        });
      }
    };

    // Execute functions on route change
    hideLoadingOverlay();
    initializeMasonry();
    window.addEventListener("scroll", handleScroll);

    // Cleanup event listeners on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location.pathname]); //

  useEffect(() => {
    // Smooth scroll
    const anchors = document.querySelectorAll('a[href^="#"]');
    const handleSmoothScroll = (e) => {
      e.preventDefault();
      const targetId = e.currentTarget.getAttribute("href");
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    };
    anchors.forEach((anchor) =>
      anchor.addEventListener("click", handleSmoothScroll)
    );

    // Cleanup smooth scroll listeners
    return () => {
      anchors.forEach((anchor) =>
        anchor.removeEventListener("click", handleSmoothScroll)
      );
    };
  }, []);
  return (
    <>
      <div className="loading-spinner" />
      {/* Top Bar */}
      <div className="studyvisa-top-bar">
        <div className="studyvisa-container">
          <div className="studyvisa-top-bar-content">
            <div className="contact-info">
              <a href="tel:+918143256666" className="studyvisa-highlight ">
                <i className="bi bi-telephone" />
                +91 8143256666
              </a>
              <a href="https://wa.me/918143256666">
                <i className="bi bi-whatsapp" />
                WhatsApp
              </a>
              <a href="mailto:info@vertexoverseas.in">
                <i className="bi bi-envelope" />
                info@vertexoverseas.in
              </a>
            </div>
            <div className="studyvisa-social-links">
              <a href="#">
                <i className="bi bi-facebook" />
              </a>
              <a href="#">
                <i className="bi bi-instagram" />
              </a>
              <a href="#">
                <i className="bi bi-linkedin" />
              </a>
              <a href="#">
                <i className="bi bi-youtube" />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Navigation */}
      <Navbar />

      {/* WhatsApp Float Button */}
      <a
        href="https://wa.me/919390292090"
        className="studyvisa-whatsapp-float "
        target="_blank"
      >
        <i className="bi bi-whatsapp" />
      </a>
      {/* Hero Section */}
      <section className="studyvisa-hero">
        <div className="studyvisa-hero-content">
          <div className="studyvisa-hero-box">
            <h1>Welcome to Vertex Overseas Consultancy</h1>
            <p>
              Your journey to a brighter future starts here. We provide expert
              guidance and support for studying abroad.
            </p>
            <Link to="/bookform" className="cta-button">
              Book a call
            </Link>
          </div>
        </div>
      </section>
      {/* Country Cards Grid */}
      <div className="studyvisa-comparison-grid" id="compare">
        <div className="studyvisa-grid-sizer" />
        <div className="studyvisa-gutter-sizer" />
        {/* USA Card */}
        <div className="studyvisa-country-card">
          <div className="studyvisa-country-header">
            <span className="studyvisa-country-flag">🇺🇸</span>
            <div className="studyvisa-country-title">
              <h2>United States</h2>
              <p>F-1 Student Visa</p>
            </div>
          </div>
          <div className="studyvisa-country-content">
            <div className="studyvisa-info-section">
              <h3>Visa Requirements</h3>
              <ul className="studyvisa-requirements-list">
                <li>Acceptance letter from SEVP-approved institution</li>
                <li>Completed I-20 form</li>
                <li>Proof of financial support for entire course</li>
                <li>Valid passport (min. 6 months validity)</li>
                <li>SEVIS fee payment receipt</li>
                <li>Demonstrated English proficiency</li>
                <li>Proof of ties to home country</li>
              </ul>
            </div>
            <div className="studyvisa-info-section">
              <h3>Work Rights</h3>
              <ul className="studyvisa-work-rights-list">
                <li>On-campus: Up to 20 hours/week during semester</li>
                <li>Off-campus: Not permitted in first year</li>
                <li>OPT: 12 months post-graduation work permit</li>
                <li>STEM OPT: Additional 24 months for STEM</li>
              </ul>
            </div>
            <div className="studyvisa-stats-box">
              <div className="stat-item">
                <div className="stat-number">948,519</div>
                <div className="stat-label">International Students</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">2-4 months</div>
                <div className="stat-label">Processing Time</div>
              </div>
            </div>
            <div className="studyvisa-action-buttons">
              <a href="#" className="know-more-btn">
                Know More
              </a>
            </div>
          </div>
        </div>
        {/* UK Card */}
        <div className="studyvisa-country-card">
          <div className="studyvisa-country-header">
            <span className="studyvisa-country-flag">🇬🇧</span>
            <div className="studyvisa-country-title">
              <h2>United Kingdom</h2>
              <p>Student Visa</p>
            </div>
          </div>
          <div className="studyvisa-country-content">
            <div className="studyvisa-info-section">
              <h3>Visa Requirements</h3>
              <ul className="studyvisa-requirements-list">
                <li>CAS from licensed sponsor institution</li>
                <li>Proof of funds (tuition + living costs)</li>
                <li>English language proficiency</li>
                <li>Valid passport</li>
                <li>TB test results (if applicable)</li>
                <li>Maintenance funds for 28 days</li>
                <li>Police clearance certificate</li>
              </ul>
            </div>
            <div className="studyvisa-info-section">
              <h3>Work Rights</h3>
              <ul className="studyvisa-work-rights-list">
                <li>20 hours/week during term time</li>
                <li>Full-time during holidays</li>
                <li>Graduate Route: 2 years post-study work</li>
                <li>PhD graduates: 3 years post-study work</li>
              </ul>
            </div>
            <div className="studyvisa-stats-box">
              <div className="stat-item">
                <div className="stat-number">679,970</div>
                <div className="stat-label">International Students</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">3-4 weeks</div>
                <div className="stat-label">Processing Time</div>
              </div>
            </div>
            <div className="studyvisa-action-buttons">
              <a href="#" className="studyvisa-know-more-btn">
                Know More
              </a>
            </div>
          </div>
        </div>
        {/* Canada Card */}
        <div className="studyvisa-country-card">
          <div className="studyvisa-country-header">
            <span className="studyvisa-country-flag">🇨🇦</span>
            <div className="studyvisa-country-title">
              <h2>Canada</h2>
              <p>Study Permit</p>
            </div>
          </div>
          <div className="studyvisa-country-content">
            <div className="studyvisa-info-section">
              <h3>Visa Requirements</h3>
              <ul className="studyvisa-requirements-list">
                <li>Acceptance letter from DLI</li>
                <li>Proof of funds (tuition + living expenses)</li>
                <li>Clean criminal record</li>
                <li>Medical examination</li>
                <li>Language proficiency proof</li>
                <li>Letter of explanation</li>
                <li>Biometrics</li>
              </ul>
            </div>
            <div className="studyvisa-info-section">
              <h3>Work Rights</h3>
              <ul className="studyvisa-work-rights-list">
                <li>20 hours/week during semester</li>
                <li>Full-time during scheduled breaks</li>
                <li>PGWP: Up to 3 years post-graduation</li>
                <li>Spouse/partner eligible for work permit</li>
              </ul>
            </div>
            <div className="studyvisa-stats-box">
              <div className="stat-item">
                <div className="stat-number">807,750</div>
                <div className="stat-label">International Students</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">8-16 weeks</div>
                <div className="stat-label">Processing Time</div>
              </div>
            </div>
            <div className="studyvisa-action-buttons">
              <a href="#" className="know-more-btn">
                Know More
              </a>
            </div>
          </div>
        </div>
        {/* New Zealand Card */}
        <div className="studyvisa-country-card">
          <div className="studyvisa-country-header">
            <span className="studyvisa-country-flag">🇳🇿</span>
            <div className="studyvisa-country-title">
              <h2>New Zealand</h2>
              <p>Student Visa</p>
            </div>
          </div>
          <div className="studyvisa-country-content">
            <div className="studyvisa-info-section">
              <h3>Visa Requirements</h3>
              <ul className="studyvisa-requirements-list">
                <li>Offer of place from approved institution</li>
                <li>Proof of sufficient funds</li>
                <li>Health insurance coverage</li>
                <li>Medical examination results</li>
                <li>Police clearance certificate</li>
                <li>English language proficiency</li>
                <li>Return travel arrangements</li>
              </ul>
            </div>
            <div className="studyvisa-info-section">
              <h3>Work Rights</h3>
              <ul className="studyvisa-work-rights-list">
                <li>20 hours/week during semester</li>
                <li>Full-time during holidays</li>
                <li>Post-study work visa: 1-3 years</li>
                <li>Partner may be eligible for work visa</li>
              </ul>
            </div>
            <div className="studyvisa-stats-box">
              <div className="stat-item">
                <div className="stat-number">145,000</div>
                <div className="stat-label">International Students</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">4-8 weeks</div>
                <div className="stat-label">Processing Time</div>
              </div>
            </div>
            <div className="action-buttons">
              <a href="#" className="know-more-btn">
                Know More
              </a>
            </div>
          </div>
        </div>
        {/* Ireland Card */}
        <div className="studyvisa-country-card">
          <div className="studyvisa-country-header">
            <span className="studyvisa-country-flag">🇮🇪</span>
            <div className="studyvisa-country-title">
              <h2>Ireland</h2>
              <p>Study Visa</p>
            </div>
          </div>
          <div className="studyvisa-country-content">
            <div className="studyvisa-info-section">
              <h3>Visa Requirements</h3>
              <ul className="studyvisa-requirements-list">
                <li>Letter of acceptance from institution</li>
                <li>Proof of tuition fee payment</li>
                <li>Evidence of financial means</li>
                <li>Private medical insurance</li>
                <li>English language proficiency</li>
                <li>Valid passport</li>
                <li>Proof of accommodation</li>
              </ul>
            </div>
            <div className="studyvisa-info-section">
              <h3>Work Rights</h3>
              <ul className="studyvisa-work-rights-list">
                <li>20 hours/week during term</li>
                <li>40 hours/week during holidays</li>
                <li>Stay Back Option: 24 months for masters</li>
                <li>Third Level Graduate Scheme</li>
              </ul>
            </div>
            <div className="studyvisa-stats-box">
              <div className="stat-item">
                <div className="stat-number">32,000</div>
                <div className="stat-label">International Students</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">4-6 weeks</div>
                <div className="stat-label">Processing Time</div>
              </div>
            </div>
            <div className="studyvisa-action-buttons">
              <a href="#" className="know-more-btn">
                Know More
              </a>
            </div>
          </div>
        </div>
        {/* France Card */}
        <div className="studyvisa-country-card">
          <div className="studyvisa-country-header">
            <span className="studyvisa-country-flag">🇫🇷</span>
            <div className="studyvisa-country-title">
              <h2>France</h2>
              <p>VLS-TS Student Visa</p>
            </div>
          </div>
          <div className="studyvisa-country-content">
            <div className="studyvisa-info-section">
              <h3>Visa Requirements</h3>
              <ul className="studyvisa-requirements-list">
                <li>Acceptance letter from French institution</li>
                <li>Proof of financial resources</li>
                <li>Campus France registration</li>
                <li>Health insurance</li>
                <li>Accommodation proof</li>
                <li>French/English proficiency</li>
                <li>Valid passport</li>
              </ul>
            </div>
            <div className="studyvisa-info-section">
              <h3>Work Rights</h3>
              <ul className="studyvisa-work-rights-list">
                <li>20 hours/week during studies</li>
                <li>Full-time during holidays</li>
                <li>APS: 12-month job search visa</li>
                <li>Talent Passport available for graduates</li>
              </ul>
            </div>
            <div className="studyvisa-stats-box">
              <div className="stat-item">
                <div className="stat-number">370,000</div>
                <div className="stat-label">International Students</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">2-3 weeks</div>
                <div className="stat-label">Processing Time</div>
              </div>
            </div>
            <div className="studyvisa-action-buttons">
              <a href="#" className="know-more-btn">
                Know More
              </a>
            </div>
          </div>
        </div>
        {/* Germany Card */}
        <div className="studyvisa-country-card">
          <div className="studyvisa-country-header">
            <span className="studyvisa-country-flag">🇩🇪</span>
            <div className="studyvisa-country-title">
              <h2>Germany</h2>
              <p>Student Visa</p>
            </div>
          </div>
          <div className="studyvisa-country-content">
            <div className="studyvisa-info-section">
              <h3>Visa Requirements</h3>
              <ul className="studyvisa-requirements-list">
                <li>University admission letter</li>
                <li>Blocked account (10,332 EUR/year)</li>
                <li>Health insurance proof</li>
                <li>German language proficiency</li>
                <li>Academic transcripts</li>
                <li>Motivation letter</li>
                <li>Valid passport</li>
              </ul>
            </div>
            <div className="studyvisa-info-section">
              <h3>Work Rights</h3>
              <ul className="studyvisa-work-rights-list">
                <li>120 full days or 240 half days per year</li>
                <li>Full-time during semester breaks</li>
                <li>18-month job search visa after graduation</li>
                <li>EU Blue Card eligibility</li>
              </ul>
            </div>
            <div className="studyvisa-stats-box">
              <div className="stat-item">
                <div className="stat-number">416,000</div>
                <div className="stat-label">International Students</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">6-12 weeks</div>
                <div className="stat-label">Processing Time</div>
              </div>
            </div>
            <div className="studyvisa-action-buttons">
              <a href="#" className="know-more-btn">
                Know More
              </a>
            </div>
          </div>
        </div>
        {/* Singapore Card */}
        <div className="studyvisa-country-card">
          <div className="studyvisa-country-header">
            <span className="studyvisa-country-flag">🇸🇬</span>
            <div className="studyvisa-country-title">
              <h2>Singapore</h2>
              <p>Student Pass</p>
            </div>
          </div>
          <div className="studyvisa-country-content">
            <div className="studyvisa-info-section">
              <h3>Visa Requirements</h3>
              <ul className="studyvisa-requirements-list">
                <li>In-Principle Approval (IPA) letter</li>
                <li>Acceptance from approved institution</li>
                <li>Financial proof</li>
                <li>Medical examination report</li>
                <li>Academic certificates</li>
                <li>English proficiency proof</li>
                <li>Valid passport</li>
              </ul>
            </div>
            <div className="studyvisa-info-section">
              <h3>Work Rights</h3>
              <ul className="studyvisa-work-rights-list">
                <li>16 hours/week during term</li>
                <li>Full-time during vacations</li>
                <li>1-year post-study work pass</li>
                <li>Training Employment Pass available</li>
              </ul>
            </div>
            <div className="studyvisa-stats-box">
              <div className="stat-item">
                <div className="stat-number">85,000</div>
                <div className="stat-label">International Students</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">2-4 weeks</div>
                <div className="stat-label">Processing Time</div>
              </div>
            </div>
            <div className="studyvisa-action-buttons">
              <a href="#" className="know-more-btn">
                Know More
              </a>
            </div>
          </div>
        </div>
        {/* Dubai (UAE) Card */}
        <div className="studyvisa-country-card">
          <div className="studyvisa-country-header">
            <span className="studyvisa-country-flag">🇦🇪</span>
            <div className="studyvisa-country-title">
              <h2>Dubai (UAE)</h2>
              <p>Student Residence Visa</p>
            </div>
          </div>
          <div className="studyvisa-country-content">
            <div className="studyvisa-info-section">
              <h3>Visa Requirements</h3>
              <ul className="studyvisa-requirements-list">
                <li>Acceptance from licensed institution</li>
                <li>Passport with 6-month validity</li>
                <li>Medical fitness certificate</li>
                <li>Emirates ID registration</li>
                <li>Proof of tuition payment</li>
                <li>Bank statements</li>
                <li>Health insurance</li>
              </ul>
            </div>
            <div className="studyvisa-info-section">
              <h3>Work Rights</h3>
              <ul className="studyvisa-work-rights-list">
                <li>Part-time work permit available</li>
                <li>Internship opportunities</li>
                <li>10-year Golden Visa opportunity</li>
                <li>Post-study work options available</li>
              </ul>
            </div>
            <div className="studyvisa-stats-box">
              <div className="stat-item">
                <div className="stat-number">58,000</div>
                <div className="stat-label">International Students</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">2-3 weeks</div>
                <div className="stat-label">Processing Time</div>
              </div>
            </div>
            <div className="studyvisa-action-buttons">
              <a href="#" className="know-more-btn">
                Know More
              </a>
            </div>
          </div>
        </div>
      </div>
      <footer className="text-white text-center py-3">
        <p>© 2023 Vertex Overseas Consultancy. All rights reserved.</p>
      </footer>
    </>
  );
};

export default Studyvisa;
