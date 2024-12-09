import React, { useEffect } from "react";
import "../Css/touristvisa.css";
import { Link, useLocation } from "react-router-dom";
import Masonry from "masonry-layout";
import Navbar from "../components/navbar";
const TouristVisa = () => {
  const location = useLocation();

  useEffect(() => {
    const hideLoadingOverlay = () => {
      setTimeout(() => {
        const overlay = document.querySelector(".loading-overlay");
        if (overlay) overlay.style.display = "none";
      }, 1000);
    };

    // Initialize Masonry
    const initializeMasonry = () => {
      const grid = document.querySelector(".touristvisa-comparison-grid");
      if (grid) {
        new Masonry(grid, {
          itemSelector: ".touristvisa-country-card",
          columnWidth: ".touristvisa-grid-sizer",
          gutter: ".touristvisa-gutter-sizer",
          percentPosition: true,
        });
      }
    };

    // Execute functions on route change
    hideLoadingOverlay();
    initializeMasonry();

    return () => {};
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
      <div className="touristvisa-top-bar">
        <div className="touristvisa-container">
          <div className="touristvisa-top-bar-content">
            <div className="contact-info">
              <a href="tel:+918143256666" className="touristvisa-highlight">
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
            <div className="touristvisa-social-links">
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
        className="touristvisa-whatsapp-float"
        target="_blank"
      >
        <i className="bi bi-whatsapp" />
      </a>
      {/* Hero Section */}
      <section className="touristvisa-hero">
        <div className="touristvisa-hero-content">
          <div className="touristvisa-hero-box">
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
      <div className="touristvisa-comparison-grid" id="compare">
        <div className="touristvisa-grid-sizer" />
        <div className="touristvisa-gutter-sizer" />
        {/* Fixed USA Card */}
        <div className="touristvisa-country-card">
          <div className="touristvisa-country-header">
            <span className="touristvisa-country-flag">🇺🇸</span>
            <div className="touristvisa-country-title">
              <h2>United States</h2>
              <p>B-2 Medical Visa</p>
            </div>
          </div>
          <div className="touristvisa-country-content">
            <div className="touristvisa-info-section">
              <h3>Visa Requirements</h3>
              <ul className="touristvisa-requirements-list">
                <li>Valid passport with 6 months validity</li>
                <li>Completed DS-160 form</li>
                <li>Medical diagnosis documents</li>
                <li>Letter from home country doctor</li>
                <li>US hospital appointment letter</li>
                <li>Proof of financial arrangements</li>
                <li>Medical insurance coverage</li>
              </ul>
            </div>
            <div className="touristvisa-info-section">
              <h3>Medical Visit Conditions</h3>
              <ul className="touristvisa-work-rights-list">
                <li>Stay duration based on treatment</li>
                <li>Extensions possible if needed</li>
                <li>Caregiver can accompany</li>
                <li>Emergency treatment covered</li>
              </ul>
            </div>
            <div className="touristvisa-stats-box">
              <div className="stat-item">
                <div className="stat-number">$160</div>
                <div className="stat-label">Visa Fee</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">2-3 weeks</div>
                <div className="stat-label">Processing Time</div>
              </div>
            </div>
            <div className="touristvisa-action-buttons">
              <a href="#" className="know-more-btn">
                Know More
              </a>
            </div>
          </div>
        </div>
        {/* Fixed UK Card */}
        <div className="touristvisa-country-card">
          <div className="touristvisa-country-header">
            <span className="touristvisa-country-flag">🇬🇧</span>
            <div className="touristvisa-country-title">
              <h2>United Kingdom</h2>
              <p>Medical Visit Visa</p>
            </div>
          </div>
          <div className="touristvisa-country-content">
            <div className="touristvisa-info-section">
              <h3>Visa Requirements</h3>
              <ul className="touristvisa-requirements-list">
                <li>Valid passport</li>
                <li>Detailed medical reports</li>
                <li>UK hospital confirmation</li>
                <li>Treatment cost estimates</li>
                <li>Proof of funding</li>
                <li>Travel insurance</li>
                <li>Accommodation arrangements</li>
              </ul>
            </div>
            <div className="touristvisa-info-section">
              <h3>Medical Visit Conditions</h3>
              <ul className="touristvisa-work-rights-list">
                <li>Up to 6 months stay</li>
                <li>Treatment plan must be specified</li>
                <li>Follow-up visits allowed</li>
                <li>Caregiver visa available</li>
              </ul>
            </div>
            <div className="touristvisa-stats-box">
              <div className="stat-item">
                <div className="stat-number">£95</div>
                <div className="stat-label">Visa Fee</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">3 weeks</div>
                <div className="stat-label">Processing Time</div>
              </div>
            </div>
            <div className="touristvisa-action-buttons">
              <a href="#" className="know-more-btn">
                Know More
              </a>
            </div>
          </div>
        </div>
        {/* Fixed Canada Card */}
        <div className="touristvisa-country-card">
          <div className="touristvisa-country-header">
            <span className="touristvisa-country-flag">🇨🇦</span>
            <div className="touristvisa-country-title">
              <h2>Canada</h2>
              <p>Temporary Resident Visa (Medical)</p>
            </div>
          </div>
          <div className="touristvisa-country-content">
            <div className="touristvisa-info-section">
              <h3>Visa Requirements</h3>
              <ul className="touristvisa-requirements-list">
                <li>Valid passport</li>
                <li>Medical diagnosis and records</li>
                <li>Canadian hospital acceptance</li>
                <li>Treatment cost estimation</li>
                <li>Proof of financial means</li>
                <li>Medical insurance</li>
                <li>Letter from home physician</li>
              </ul>
            </div>
            <div className="touristvisa-info-section">
              <h3>Medical Visit Conditions</h3>
              <ul className="touristvisa-work-rights-list">
                <li>Duration as per treatment plan</li>
                <li>Family member can accompany</li>
                <li>Multiple entry available</li>
                <li>Extension possible if needed</li>
              </ul>
            </div>
            <div className="touristvisa-stats-box">
              <div className="stat-item">
                <div className="stat-number">CAD 100</div>
                <div className="stat-label">Visa Fee</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">4-6 weeks</div>
                <div className="stat-label">Processing Time</div>
              </div>
            </div>
            <div className="touristvisa-action-buttons">
              <a href="#" className="know-more-btn">
                Know More
              </a>
            </div>
          </div>
        </div>
        {/* New Zealand Card */}
        <div className="touristvisa-country-card">
          <div className="touristvisa-country-header">
            <span className="touristvisa-country-flag">🇳🇿</span>
            <div className="touristvisa-country-title">
              <h2>New Zealand</h2>
              <p>Medical Treatment Visitor Visa</p>
            </div>
          </div>
          <div className="touristvisa-country-content">
            <div className="touristvisa-info-section">
              <h3>Visa Requirements</h3>
              <ul className="touristvisa-requirements-list">
                <li>Valid passport</li>
                <li>Medical documentation</li>
                <li>NZ healthcare provider letter</li>
                <li>Treatment plan and timeline</li>
                <li>Financial proof</li>
                <li>Health insurance</li>
                <li>Return travel arrangements</li>
              </ul>
            </div>
            <div className="touristvisa-info-section">
              <h3>Medical Visit Conditions</h3>
              <ul className="touristvisa-work-rights-list">
                <li>Stay based on treatment length</li>
                <li>Support person can apply</li>
                <li>No work permitted</li>
                <li>Extensions case-by-case</li>
              </ul>
            </div>
            <div className="touristvisa-stats-box">
              <div className="stat-item">
                <div className="stat-number">NZD 246</div>
                <div className="stat-label">Visa Fee</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">25 days</div>
                <div className="stat-label">Processing Time</div>
              </div>
            </div>
            <div className="touristvisa-action-buttons">
              <a href="#" className="know-more-btn">
                Know More
              </a>
            </div>
          </div>
        </div>
        {/* Ireland Card */}
        <div className="touristvisa-country-card">
          <div className="touristvisa-country-header">
            <span className="touristvisa-country-flag">🇮🇪</span>
            <div className="touristvisa-country-title">
              <h2>Ireland</h2>
              <p>Medical Treatment Visa</p>
            </div>
          </div>
          <div className="touristvisa-country-content">
            <div className="touristvisa-info-section">
              <h3>Visa Requirements</h3>
              <ul className="touristvisa-requirements-list">
                <li>Valid passport</li>
                <li>Medical condition evidence</li>
                <li>Irish hospital confirmation</li>
                <li>Cost estimate and payment plan</li>
                <li>Insurance coverage</li>
                <li>Accommodation proof</li>
                <li>Financial documentation</li>
              </ul>
            </div>
            <div className="touristvisa-info-section">
              <h3>Medical Visit Conditions</h3>
              <ul className="touristvisa-work-rights-list">
                <li>Stay matches treatment duration</li>
                <li>Companion visa possible</li>
                <li>Extensions available</li>
                <li>Return after treatment required</li>
              </ul>
            </div>
            <div className="touristvisa-stats-box">
              <div className="stat-item">
                <div className="stat-number">€60</div>
                <div className="stat-label">Visa Fee</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">2-4 weeks</div>
                <div className="stat-label">Processing Time</div>
              </div>
            </div>
            <div className="touristvisa-action-buttons">
              <a href="#" className="know-more-btn">
                Know More
              </a>
            </div>
          </div>
        </div>
        {/* France Card */}
        <div className="touristvisa-country-card">
          <div className="touristvisa-country-header">
            <span className="touristvisa-country-flag">🇫🇷</span>
            <div className="touristvisa-country-title">
              <h2>France</h2>
              <p>Healthcare Visitor Visa</p>
            </div>
          </div>
          <div className="touristvisa-country-content">
            <div className="touristvisa-info-section">
              <h3>Visa Requirements</h3>
              <ul className="touristvisa-requirements-list">
                <li>Valid passport</li>
                <li>Medical certificates</li>
                <li>French hospital admission letter</li>
                <li>Treatment schedule</li>
                <li>Financial guarantee</li>
                <li>Health insurance</li>
                <li>Accommodation proof</li>
              </ul>
            </div>
            <div className="touristvisa-info-section">
              <h3>Medical Visit Conditions</h3>
              <ul className="touristvisa-work-rights-list">
                <li>Validity as per treatment</li>
                <li>Accompanying person allowed</li>
                <li>Multiple entry possible</li>
                <li>Extension based on medical needs</li>
              </ul>
            </div>
            <div className="touristvisa-stats-box">
              <div className="stat-item">
                <div className="stat-number">€99</div>
                <div className="stat-label">Visa Fee</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">15 days</div>
                <div className="stat-label">Processing Time</div>
              </div>
            </div>
            <div className="touristvisa-action-buttons">
              <a href="#" className="know-more-btn">
                Know More
              </a>
            </div>
          </div>
        </div>
        {/* Germany Card */}
        <div className="touristvisa-country-card">
          <div className="touristvisa-country-header">
            <span className="touristvisa-country-flag">🇩🇪</span>
            <div className="touristvisa-country-title">
              <h2>Germany</h2>
              <p>Medical Treatment Visa</p>
            </div>
          </div>
          <div className="touristvisa-country-content">
            <div className="touristvisa-info-section">
              <h3>Visa Requirements</h3>
              <ul className="touristvisa-requirements-list">
                <li>Valid passport</li>
                <li>Medical reports and diagnosis</li>
                <li>German hospital acceptance</li>
                <li>Treatment cost coverage proof</li>
                <li>Health insurance</li>
                <li>Accommodation proof</li>
                <li>Financial means evidence</li>
              </ul>
            </div>
            <div className="touristvisa-info-section">
              <h3>Medical Visit Conditions</h3>
              <ul className="touristvisa-work-rights-list">
                <li>Duration based on treatment</li>
                <li>Family member can accompany</li>
                <li>Multiple entry possible</li>
                <li>Extension based on medical need</li>
              </ul>
            </div>
            <div className="touristvisa-stats-box">
              <div className="stat-item">
                <div className="stat-number">€75</div>
                <div className="stat-label">Visa Fee</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">2 weeks</div>
                <div className="stat-label">Processing Time</div>
              </div>
            </div>
            <div className="touristvisa-action-buttons">
              <a href="#" className="know-more-btn">
                Know More
              </a>
            </div>
          </div>
        </div>
        {/* Singapore Card */}
        <div className="touristvisa-country-card">
          <div className="touristvisa-country-header">
            <span className="touristvisa-country-flag">🇸🇬</span>
            <div className="touristvisa-country-title">
              <h2>Singapore</h2>
              <p>Medical Treatment Visa</p>
            </div>
          </div>
          <div className="touristvisa-country-content">
            <div className="touristvisa-info-section">
              <h3>Visa Requirements</h3>
              <ul className="touristvisa-requirements-list">
                <li>Valid passport</li>
                <li>Medical documents</li>
                <li>Hospital appointment letter</li>
                <li>Treatment cost estimation</li>
                <li>Financial proof</li>
                <li>Travel insurance</li>
                <li>Local doctor referral</li>
              </ul>
            </div>
            <div className="touristvisa-info-section">
              <h3>Medical Visit Conditions</h3>
              <ul className="touristvisa-work-rights-list">
                <li>30-day initial stay</li>
                <li>Extensions for treatment</li>
                <li>One companion allowed</li>
                <li>Multiple entry available</li>
              </ul>
            </div>
            <div className="touristvisa-stats-box">
              <div className="stat-item">
                <div className="stat-number">SGD 30</div>
                <div className="stat-label">Visa Fee</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">3 days</div>
                <div className="stat-label">Processing Time</div>
              </div>
            </div>
            <div className="touristvisa-action-buttons">
              <a href="#" className="know-more-btn">
                Know More
              </a>
            </div>
          </div>
        </div>
        {/* Dubai (UAE) Card with Complete Structure */}
        <div className="touristvisa-country-card">
          <div className="touristvisa-country-header">
            <span className="touristvisa-country-flag">🇦🇪</span>
            <div className="touristvisa-country-title">
              <h2>Dubai (UAE)</h2>
              <p>Medical Tourism Visa</p>
            </div>
          </div>
          <div className="touristvisa-country-content">
            <div className="touristvisa-info-section">
              <h3>Visa Requirements</h3>
              <ul className="touristvisa-requirements-list">
                <li>Valid passport</li>
                <li>Medical reports</li>
                <li>Dubai hospital letter</li>
                <li>Treatment plan</li>
                <li>Insurance coverage</li>
                <li>Financial documents</li>
                <li>Hospital appointment proof</li>
              </ul>
            </div>
            <div className="touristvisa-info-section">
              <h3>Medical Visit Conditions</h3>
              <ul className="touristvisa-work-rights-list">
                <li>90-day validity</li>
                <li>Extendable if required</li>
                <li>Companion visa available</li>
                <li>Multiple entry options</li>
              </ul>
            </div>
            <div className="touristvisa-stats-box">
              <div className="stat-item">
                <div className="stat-number">USD 250</div>
                <div className="stat-label">Visa Fee</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">2-4 days</div>
                <div className="stat-label">Processing Time</div>
              </div>
            </div>
            <div className="touristvisa-action-buttons">
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

export default TouristVisa;
