import React, { useEffect } from "react";
import "../Css/workvisa.css";
import Navbar from "../components/navbar";
import { Link, useLocation } from "react-router-dom";
import Masonry from "masonry-layout";

const Workvisa = () => {
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

    const initializeMasonry = () => {
      const grid = document.querySelector(".workvisa-comparison-grid");
      if (grid) {
        new Masonry(grid, {
          itemSelector: ".workvisa-country-card",
          columnWidth: ".workvisa-grid-sizer",
          gutter: ".workvisa-gutter-sizer",
          percentPosition: true,
        });
      }
    };

    hideLoadingOverlay();
    initializeMasonry();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location.pathname]);

  useEffect(() => {
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

    return () => {
      anchors.forEach((anchor) =>
        anchor.removeEventListener("click", handleSmoothScroll)
      );
    };
  }, []);
  return (
    <>
      {/* Loading Overlay */}
      <div className="loading-overlay">
        <div className="loading-spinner" />
      </div>
      {/* Top Bar */}
      <div className="workvisa-top-bar">
        <div className="workvisa-container">
          <div className="workvisa-top-bar-content">
            <div className="contact-info">
              <a href="tel:+918143256666" className="highlight">
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
            <div className="workvisa-social-links">
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
        className="workvisa-whatsapp-float"
        target="_blank"
      >
        <i className="bi bi-whatsapp" />
      </a>
      {/* Hero Section */}
      <section className="workvisa-hero">
        <div className="workvisa-hero-content">
          <div className="workvisa-hero-box">
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
      <div className="workvisa-comparison-grid" id="compare">
        <div className="workvisa-grid-sizer" />
        <div className="workvisa-gutter-sizer" />
        {/* USA Card */}
        <div className="workvisa-country-card">
          <div className="workvisa-country-header">
            <span className="workvisa-country-flag">🇺🇸</span>
            <div className="workvisa-country-title">
              <h2>United States</h2>
              <p>H-1B Work Visa</p>
            </div>
          </div>
          <div className="workvisa-country-content">
            <div className="workvisa-info-section">
              <h3>Visa Requirements</h3>
              <ul className="workvisa-requirements-list">
                <li>Job offer from US employer</li>
                <li>Bachelor's degree or equivalent</li>
                <li>Employer sponsorship</li>
                <li>Labor Condition Application (LCA)</li>
                <li>Relevant work experience</li>
                <li>Valid passport</li>
                <li>Qualification evaluation</li>
              </ul>
            </div>
            <div className="workvisa-info-section">
              <h3>Employment Rights</h3>
              <ul className="workvisa-work-rights-list">
                <li>Initial stay of up to 3 years</li>
                <li>Extendable up to 6 years total</li>
                <li>Spouse eligible for H-4 visa</li>
                <li>Possibility for Green Card sponsorship</li>
              </ul>
            </div>
            <div className="workvisa-stats-box">
              <div className="stat-item">
                <div className="stat-number">85,000</div>
                <div className="stat-label">Annual H-1B Cap</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">6-8 months</div>
                <div className="stat-label">Processing Time</div>
              </div>
            </div>
            <div className="workvisa-action-buttons">
              <a href="#" className="know-more-btn">
                Know More
              </a>
            </div>
          </div>
        </div>
        {/* UK Card */}
        <div className="workvisa-country-card">
          <div className="workvisa-country-header">
            <span className="workvisa-country-flag">🇬🇧</span>
            <div className="workvisa-country-title">
              <h2>United Kingdom</h2>
              <p>Skilled Worker Visa</p>
            </div>
          </div>
          <div className="workvisa-country-content">
            <div className="workvisa-info-section">
              <h3>Visa Requirements</h3>
              <ul className="workvisa-requirements-list">
                <li>Job offer from licensed UK sponsor</li>
                <li>Certificate of Sponsorship (CoS)</li>
                <li>Minimum skill level - RQF 3 or above</li>
                <li>English language proficiency</li>
                <li>Minimum salary requirement</li>
                <li>Proof of funds maintenance</li>
                <li>Valid passport</li>
              </ul>
            </div>
            <div className="workvisa-info-section">
              <h3>Employment Rights</h3>
              <ul className="workvisa-work-rights-list">
                <li>Up to 5 years initial stay</li>
                <li>Can change employers if new sponsor found</li>
                <li>Path to settlement after 5 years</li>
                <li>Dependents can work full-time</li>
              </ul>
            </div>
            <div className="workvisa-stats-box">
              <div className="stat-item">
                <div className="stat-number">£26,200</div>
                <div className="stat-label">Min. Salary Requirement</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">3-8 weeks</div>
                <div className="stat-label">Processing Time</div>
              </div>
            </div>
            <div className="workvisa-action-buttons">
              <a href="#" className="know-more-btn">
                Know More
              </a>
            </div>
          </div>
        </div>
        {/* Canada Card */}
        <div className="workvisa-country-card">
          <div className="workvisa-country-header">
            <span className="workvisa-country-flag">🇨🇦</span>
            <div className="workvisa-country-title">
              <h2>Canada</h2>
              <p>LMIA Work Permit</p>
            </div>
          </div>
          <div className="workvisa-country-content">
            <div className="workvisa-info-section">
              <h3>Visa Requirements</h3>
              <ul className="workvisa-requirements-list">
                <li>Valid job offer from Canadian employer</li>
                <li>Positive LMIA from employer</li>
                <li>Educational credentials assessment</li>
                <li>Proof of relevant experience</li>
                <li>Language proficiency (IELTS/TEF)</li>
                <li>Clean police certificate</li>
                <li>Medical examination</li>
              </ul>
            </div>
            <div className="workvisa-info-section">
              <h3>Employment Rights</h3>
              <ul className="workvisa-work-rights-list">
                <li>Work full-time for specific employer</li>
                <li>Duration based on job contract</li>
                <li>Spouse eligible for open work permit</li>
                <li>Path to permanent residency</li>
              </ul>
            </div>
            <div className="workvisa-stats-box">
              <div className="stat-item">
                <div className="stat-number">500K+</div>
                <div className="stat-label">Work Permits (2023)</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">8-16 weeks</div>
                <div className="stat-label">Processing Time</div>
              </div>
            </div>
            <div className="workvisa-action-buttons">
              <a href="#" className="know-more-btn">
                Know More
              </a>
            </div>
          </div>
        </div>
        {/* New Zealand Card */}
        <div className="workvisa-country-card">
          <div className="workvisa-country-header">
            <span className="workvisa-country-flag">🇳🇿</span>
            <div className="workvisa-country-title">
              <h2>New Zealand</h2>
              <p>Essential Skills Work Visa</p>
            </div>
          </div>
          <div className="workvisa-country-content">
            <div className="workvisa-info-section">
              <h3>Visa Requirements</h3>
              <ul className="workvisa-requirements-list">
                <li>Job offer from NZ employer</li>
                <li>Proof of job advertisement</li>
                <li>Relevant qualifications</li>
                <li>Work experience documentation</li>
                <li>Full medical examination</li>
                <li>Police clearance certificate</li>
                <li>English language proficiency</li>
              </ul>
            </div>
            <div className="workvisa-info-section">
              <h3>Employment Rights</h3>
              <ul className="workvisa-work-rights-list">
                <li>Full-time work for specified employer</li>
                <li>Duration based on skill level</li>
                <li>Partner/dependent visas available</li>
                <li>Pathway to residence possible</li>
              </ul>
            </div>
            <div className="workvisa-stats-box">
              <div className="stat-item">
                <div className="stat-number">165,000</div>
                <div className="stat-label">Work Visa Holders</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">4-8 weeks</div>
                <div className="stat-label">Processing Time</div>
              </div>
            </div>
            <div className="workvisa-action-buttons">
              <a href="#" className="know-more-btn">
                Know More
              </a>
            </div>
          </div>
        </div>
        {/* Ireland Card */}
        <div className="workvisa-country-card">
          <div className="workvisa-country-header">
            <span className="workvisa-country-flag">🇮🇪</span>
            <div className="workvisa-country-title">
              <h2>Ireland</h2>
              <p>Critical Skills Permit</p>
            </div>
          </div>
          <div className="workvisa-country-content">
            <div className="workvisa-info-section">
              <h3>Visa Requirements</h3>
              <ul className="workvisa-requirements-list">
                <li>Job offer in critical skills occupation</li>
                <li>Minimum annual salary €32,000+</li>
                <li>Relevant qualification (Level 7+)</li>
                <li>Valid passport</li>
                <li>Clean police certificate</li>
                <li>Proof of qualifications</li>
                <li>Employment contract</li>
              </ul>
            </div>
            <div className="workvisa-info-section">
              <h3>Employment Rights</h3>
              <ul className="workvisa-work-rights-list">
                <li>2-year initial permit</li>
                <li>Immediate family reunification</li>
                <li>Spouse can work without permit</li>
                <li>Path to permanent residence</li>
              </ul>
            </div>
            <div className="workvisa-stats-box">
              <div className="stat-item">
                <div className="stat-number">€32,000</div>
                <div className="stat-label">Min. Salary Required</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">6-8 weeks</div>
                <div className="stat-label">Processing Time</div>
              </div>
            </div>
            <div className="workvisa-action-buttons">
              <a href="#" className="know-more-btn">
                Know More
              </a>
            </div>
          </div>
        </div>
        {/* France Card */}
        <div className="workvisa-country-card">
          <div className="workvisa-country-header">
            <span className="workvisa-country-flag">🇫🇷</span>
            <div className="workvisa-country-title">
              <h2>France</h2>
              <p>Talent Passport</p>
            </div>
          </div>
          <div className="workvisa-country-content">
            <div className="workvisa-info-section">
              <h3>Visa Requirements</h3>
              <ul className="workvisa-requirements-list">
                <li>Qualifying project or skills</li>
                <li>Master's degree or equivalent</li>
                <li>Proof of financial resources</li>
                <li>Employment contract</li>
                <li>Health insurance</li>
                <li>Valid passport</li>
                <li>Proof of accommodation</li>
              </ul>
            </div>
            <div className="workvisa-info-section">
              <h3>Employment Rights</h3>
              <ul className="workvisa-work-rights-list">
                <li>4-year renewable permit</li>
                <li>Family can join immediately</li>
                <li>Spouse gets automatic work rights</li>
                <li>Can change employers freely</li>
              </ul>
            </div>
            <div className="workvisa-stats-box">
              <div className="stat-item">
                <div className="stat-number">35,000+</div>
                <div className="stat-label">Talent Passports Issued</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">3-4 weeks</div>
                <div className="stat-label">Processing Time</div>
              </div>
            </div>
            <div className="workvisa-action-buttons">
              <a href="#" className="know-more-btn">
                Know More
              </a>
            </div>
          </div>
        </div>
        {/* Germany Card */}
        <div className="workvisa-country-card">
          <div className="workvisa-country-header">
            <span className="workvisa-country-flag">🇩🇪</span>
            <div className="workvisa-country-title">
              <h2>Germany</h2>
              <p>EU Blue Card</p>
            </div>
          </div>
          <div className="workvisa-country-content">
            <div className="workvisa-info-section">
              <h3>Visa Requirements</h3>
              <ul className="workvisa-requirements-list">
                <li>University degree</li>
                <li>Employment contract</li>
                <li>Minimum salary €56,400/year</li>
                <li>Health insurance</li>
                <li>Proof of accommodation</li>
                <li>Valid passport</li>
                <li>Degree recognition</li>
              </ul>
            </div>
            <div className="workvisa-info-section">
              <h3>Employment Rights</h3>
              <ul className="workvisa-work-rights-list">
                <li>4-year initial permit</li>
                <li>Fast-track to permanent residence</li>
                <li>Spouse can work without restrictions</li>
                <li>EU-wide mobility possible</li>
              </ul>
            </div>
            <div className="workvisa-stats-box">
              <div className="stat-item">
                <div className="stat-number">€56,400</div>
                <div className="stat-label">Min. Annual Salary</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">2-3 months</div>
                <div className="stat-label">Processing Time</div>
              </div>
            </div>
            <div className="workvisa-action-buttons">
              <a href="#" className="know-more-btn">
                Know More
              </a>
            </div>
          </div>
        </div>
        {/* Singapore Card */}
        <div className="workvisa-country-card">
          <div className="workvisa-country-header">
            <span className="workvisa-country-flag">🇸🇬</span>
            <div className="workvisa-country-title">
              <h2>Singapore</h2>
              <p>Employment Pass</p>
            </div>
          </div>
          <div className="workvisa-country-content">
            <div className="workvisa-info-section">
              <h3>Visa Requirements</h3>
              <ul className="workvisa-requirements-list">
                <li>Job offer from local employer</li>
                <li>Minimum salary S$5,000/month</li>
                <li>Acceptable qualifications</li>
                <li>Relevant work experience</li>
                <li>Company's quota eligibility</li>
                <li>Valid passport</li>
                <li>Educational certificates</li>
              </ul>
            </div>
            <div className="workvisa-info-section">
              <h3>Employment Rights</h3>
              <ul className="workvisa-work-rights-list">
                <li>Up to 2-year initial pass</li>
                <li>Renewable for up to 3 years</li>
                <li>Dependents' Pass for family</li>
                <li>Path to permanent residence</li>
              </ul>
            </div>
            <div className="workvisa-stats-box">
              <div className="stat-item">
                <div className="stat-number">S$5,000</div>
                <div className="stat-label">Min. Monthly Salary</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">3-5 weeks</div>
                <div className="stat-label">Processing Time</div>
              </div>
            </div>
            <div className="workvisa-action-buttons">
              <a href="#" className="know-more-btn">
                Know More
              </a>
            </div>
          </div>
        </div>
        {/* Dubai (UAE) Card */}
        <div className="workvisa-country-card">
          <div className="workvisa-country-header">
            <span className="workvisa-country-flag">🇦🇪</span>
            <div className="workvisa-country-title">
              <h2>Dubai (UAE)</h2>
              <p>Employment Visa</p>
            </div>
          </div>
          <div className="workvisa-country-content">
            <div className="workvisa-info-section">
              <h3>Visa Requirements</h3>
              <ul className="workvisa-requirements-list">
                <li>Job offer from UAE company</li>
                <li>Entry permit approval</li>
                <li>Medical fitness certificate</li>
                <li>Emirates ID registration</li>
                <li>Labor card application</li>
                <li>Valid passport</li>
                <li>Educational certificates attested</li>
              </ul>
            </div>
            <div className="workvisa-info-section">
              <h3>Employment Rights</h3>
              <ul className="workvisa-work-rights-list">
                <li>2-year renewable visa</li>
                <li>Family sponsorship possible</li>
                <li>No income tax benefits</li>
                <li>End of service benefits</li>
              </ul>
            </div>
            <div className="workvisa-stats-box">
              <div className="stat-item">
                <div className="stat-number">2.2M+</div>
                <div className="stat-label">Work Visa Holders</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">2-3 weeks</div>
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
      </div>
      <footer className="text-white text-center py-3">
        <p>© 2023 Vertex Overseas Consultancy. All rights reserved.</p>
      </footer>
    </>
  );
};

export default Workvisa;
