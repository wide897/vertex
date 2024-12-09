import React, { useEffect } from "react";
import Masonry from "masonry-layout";
import "../Css/visitvisa.css";
import { Link, useLocation } from "react-router-dom";
import Navbar from "../components/navbar";

const Visitvisa = () => {
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
      const grid = document.querySelector(".visitvisa-comparison-grid");
      if (grid) {
        new Masonry(grid, {
          itemSelector: ".visitvisa-country-card",
          columnWidth: ".visitvisa-grid-sizer",
          gutter: ".visitvisa-gutter-sizer",
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
      <div className="loading-overlay">
        <div className="loading-spinner" />
      </div>
      {/* Top Bar */}
      <div className="top-bar">
        <div className="container">
          <div className="top-bar-content">
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
            <div className="social-links">
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
        className="visitvisa-whatsapp-float"
        target="_blank"
      >
        <i className="bi bi-whatsapp" />
      </a>
      {/* Hero Section */}
      <section className="visitvisa-hero">
        <div className="visitvisa-hero-content">
          <div className="visitvisa-hero-box">
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
      <div className="visitvisa-comparison-grid" id="compare">
        <div className="visitvisa-grid-sizer" />
        <div className="visitvisa-gutter-sizer" />
        ```html
        {/* USA Card */}
        <div className="visitvisa-country-card">
          <div className="visitvisa-country-header">
            <span className="visitvisa-country-flag">🇺🇸</span>
            <div className="visitvisa-country-title">
              <h2>United States</h2>
              <p>B-1/B-2 Visitor Visa</p>
            </div>
          </div>
          <div className="visitvisa-country-content">
            <div className="visitvisa-info-section">
              <h3>Visa Requirements</h3>
              <ul className="visitvisa-requirements-list">
                <li>Valid passport with 6 months validity</li>
                <li>Completed DS-160 form</li>
                <li>Proof of funds for stay</li>
                <li>Travel itinerary</li>
                <li>Evidence of ties to home country</li>
                <li>Proof of accommodation</li>
                <li>Interview at US embassy</li>
              </ul>
            </div>
            <div className="visitvisa-info-section">
              <h3>Visit Conditions</h3>
              <ul className="visitvisa-work-rights-list">
                <li>Maximum stay of 6 months</li>
                <li>No work permitted</li>
                <li>Business meetings allowed</li>
                <li>Multiple entry possible</li>
              </ul>
            </div>
            <div className="visitvisa-stats-box">
              <div className="stat-item">
                <div className="stat-number">$160</div>
                <div className="stat-label">Visa Fee</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">3-4 weeks</div>
                <div className="stat-label">Processing Time</div>
              </div>
            </div>
            <div className="visitvisa-action-buttons">
              <a href="#" className="know-more-btn">
                Know More
              </a>
            </div>
            visitvisa-
          </div>
        </div>
        {/* UK Card */}
        <div className="visitvisa-country-card">
          <div className="visitvisa-country-header">
            <span className="visitvisa-country-flag">🇬🇧</span>
            <div className="visitvisa-country-title">
              <h2>United Kingdom</h2>
              <p>Standard Visitor Visa</p>
            </div>
          </div>
          <div className="visitvisa-country-content">
            <div className="visitvisa-info-section">
              <h3>Visa Requirements</h3>
              <ul className="visitvisa-requirements-list">
                <li>Valid passport</li>
                <li>Proof of financial means</li>
                <li>Accommodation details</li>
                <li>Travel itinerary</li>
                <li>Return ticket booking</li>
                <li>Bank statements (6 months)</li>
                <li>Purpose of visit documentation</li>
              </ul>
            </div>
            <div className="visitvisa-info-section">
              <h3>Visit Conditions</h3>
              <ul className="visitvisa-work-rights-list">
                <li>Stay up to 6 months</li>
                <li>Tourism and business visits</li>
                <li>No paid or unpaid work</li>
                <li>Can't study for &gt; 30 days</li>
              </ul>
            </div>
            <div className="visitvisa-stats-box">
              <div className="stat-item">
                <div className="stat-number">£100</div>
                <div className="stat-label">Visa Fee</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">3 weeks</div>
                <div className="stat-label">Processing Time</div>
              </div>
            </div>
            <div className="visitvisa-action-buttons">
              <a href="#" className="know-more-btn">
                Know More
              </a>
            </div>
          </div>
        </div>
        {/* Canada Card */}
        <div className="visitvisa-country-card">
          <div className="visitvisa-country-header">
            <span className="visitvisa-country-flag">🇨🇦</span>
            <div className="visitvisa-country-title">
              <h2>Canada</h2>
              <p>Temporary Resident Visa</p>
            </div>
          </div>
          <div className="visitvisa-country-content">
            <div className="visitvisa-info-section">
              <h3>Visa Requirements</h3>
              <ul className="visitvisa-requirements-list">
                <li>Valid passport</li>
                <li>Proof of funds</li>
                <li>Purpose of travel documents</li>
                <li>Travel history</li>
                <li>Clean police certificate</li>
                <li>Return travel booking</li>
                <li>Family information form</li>
              </ul>
            </div>
            <div className="visitvisa-info-section">
              <h3>Visit Conditions</h3>
              <ul className="visitvisa-work-rights-list">
                <li>Stay up to 6 months</li>
                <li>Extendable while in Canada</li>
                <li>Multiple entry available</li>
                <li>No work permitted</li>
              </ul>
            </div>
            <div className="visitvisa-stats-box">
              <div className="stat-item">
                <div className="stat-number">CAD 100</div>
                <div className="stat-label">Visa Fee</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">4-8 weeks</div>
                <div className="stat-label">Processing Time</div>
              </div>
            </div>
            <div className="visitvisa-action-buttons">
              <a href="#" className="know-more-btn">
                Know More
              </a>
            </div>
          </div>
        </div>
        {/* New Zealand Card */}
        <div className="visitvisa-country-card">
          <div className="visitvisa-country-header">
            <span className="visitvisa-country-flag">🇳🇿</span>
            <div className="visitvisa-country-title">
              <h2>New Zealand</h2>
              <p>Visitor Visa</p>
            </div>
          </div>
          <div className="visitvisa-country-content">
            <div className="visitvisa-info-section">
              <h3>Visa Requirements</h3>
              <ul className="visitvisa-requirements-list">
                <li>Valid passport</li>
                <li>Proof of funds (NZD 1000/month)</li>
                <li>Return travel tickets</li>
                <li>Health insurance</li>
                <li>Character requirements</li>
                <li>Accommodation plans</li>
                <li>Genuine tourist intent proof</li>
              </ul>
            </div>
            <div className="visitvisa-info-section">
              <h3>Visit Conditions</h3>
              <ul className="visitvisa-work-rights-list">
                <li>Stay up to 9 months</li>
                <li>18-month maximum in 3 years</li>
                <li>No work rights</li>
                <li>Study up to 3 months allowed</li>
              </ul>
            </div>
            <div className="visitvisa-stats-box">
              <div className="stat-item">
                <div className="stat-number">NZD 220</div>
                <div className="stat-label">Visa Fee</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">2-3 weeks</div>
                <div className="stat-label">Processing Time</div>
              </div>
            </div>
            <div className="visitvisa-action-buttons">
              <a href="#" className="know-more-btn">
                Know More
              </a>
            </div>
          </div>
        </div>
        {/* Ireland Card */}
        <div className="visitvisa-country-card">
          <div className="visitvisa-country-header">
            <span className="visitvisa-country-flag">🇮🇪</span>
            <div className="visitvisa-country-title">
              <h2>Ireland</h2>
              <p>Short Stay 'C' Visa</p>
            </div>
          </div>
          <div className="visitvisa-country-content">
            <div className="visitvisa-info-section">
              <h3>Visa Requirements</h3>
              <ul className="visitvisa-requirements-list">
                <li>Valid passport</li>
                <li>Financial proof (min €3,000)</li>
                <li>Travel insurance</li>
                <li>Detailed travel itinerary</li>
                <li>Accommodation bookings</li>
                <li>Return flight tickets</li>
                <li>Letter of invitation (if applicable)</li>
              </ul>
            </div>
            <div className="visitvisa-info-section">
              <h3>Visit Conditions</h3>
              <ul className="visitvisa-work-rights-list">
                <li>Maximum stay of 90 days</li>
                <li>Single/multiple entry options</li>
                <li>No employment permitted</li>
                <li>Study up to 90 days allowed</li>
              </ul>
            </div>
            <div className="visitvisa-stats-box">
              <div className="stat-item">
                <div className="stat-number">€60</div>
                <div className="stat-label">Visa Fee</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">2-4 weeks</div>
                <div className="stat-label">Processing Time</div>
              </div>
            </div>
            <div className="visitvisa-action-buttons">
              <a href="#" className="know-more-btn">
                Know More
              </a>
            </div>
          </div>
        </div>
        {/* France Card */}
        <div className="visitvisa-country-card">
          <div className="visitvisa-country-header">
            <span className="visitvisa-country-flag">🇫🇷</span>
            <div className="visitvisa-country-title">
              <h2>France</h2>
              <p>Schengen Tourist Visa</p>
            </div>
          </div>
          <div className="visitvisa-country-content">
            <div className="visitvisa-info-section">
              <h3>Visa Requirements</h3>
              <ul className="visitvisa-requirements-list">
                <li>Valid passport</li>
                <li>Travel insurance</li>
                <li>Proof of accommodation</li>
                <li>Financial means proof</li>
                <li>Return flight booking</li>
                <li>Travel itinerary</li>
                <li>Employment status proof</li>
              </ul>
            </div>
            <div className="visitvisa-info-section">
              <h3>Visit Conditions</h3>
              <ul className="visitvisa-work-rights-list">
                <li>90 days in 180-day period</li>
                <li>Valid for Schengen area</li>
                <li>No work permitted</li>
                <li>Multiple entry possible</li>
              </ul>
            </div>
            <div className="visitvisa-stats-box">
              <div className="stat-item">
                <div className="stat-number">€80</div>
                <div className="stat-label">Visa Fee</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">15 days</div>
                <div className="stat-label">Processing Time</div>
              </div>
            </div>
            <div className="visitvisa-action-buttons">
              <a href="#" className="know-more-btn">
                Know More
              </a>
            </div>
          </div>
        </div>
        {/* Germany Card */}
        <div className="visitvisa-country-card">
          <div className="visitvisa-country-header">
            <span className="visitvisa-country-flag">🇩🇪</span>
            <div className="visitvisa-country-title">
              <h2>Germany</h2>
              <p>Schengen Tourist Visa</p>
            </div>
          </div>
          <div className="visitvisa-country-content">
            <div className="visitvisa-info-section">
              <h3>Visa Requirements</h3>
              <ul className="visitvisa-requirements-list">
                <li>Valid passport</li>
                <li>Travel insurance coverage</li>
                <li>Financial sufficiency proof</li>
                <li>Hotel reservations</li>
                <li>Round-trip flight tickets</li>
                <li>Bank statements (3 months)</li>
                <li>Cover letter</li>
              </ul>
            </div>
            <div className="visitvisa-info-section">
              <h3>Visit Conditions</h3>
              <ul className="visitvisa-work-rights-list">
                <li>90 days in 180-day period</li>
                <li>Schengen area travel allowed</li>
                <li>Business meetings permitted</li>
                <li>No employment allowed</li>
              </ul>
            </div>
            <div className="visitvisa-stats-box">
              <div className="stat-item">
                <div className="stat-number">€80</div>
                <div className="stat-label">Visa Fee</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">2 weeks</div>
                <div className="stat-label">Processing Time</div>
              </div>
            </div>
            <div className="visitvisa-action-buttons">
              <a href="#" className="know-more-btn">
                Know More
              </a>
            </div>
          </div>
        </div>
        {/* Singapore Card */}
        <div className="visitvisa-country-card">
          <div className="visitvisa-country-header">
            <span className="visitvisa-country-flag">🇸🇬</span>
            <div className="visitvisa-country-title">
              <h2>Singapore</h2>
              <p>Tourist Visa</p>
            </div>
          </div>
          <div className="visitvisa-country-content">
            <div className="visitvisa-info-section">
              <h3>Visa Requirements</h3>
              <ul className="visitvisa-requirements-list">
                <li>Valid passport</li>
                <li>Completed visa application</li>
                <li>Recent photograph</li>
                <li>Flight itinerary</li>
                <li>Hotel bookings</li>
                <li>Bank statements</li>
                <li>Travel insurance</li>
              </ul>
            </div>
            <div className="visitvisa-info-section">
              <h3>Visit Conditions</h3>
              <ul className="visitvisa-work-rights-list">
                <li>Stay up to 30 days</li>
                <li>Extension possible in-country</li>
                <li>No work allowed</li>
                <li>Social visits only</li>
              </ul>
            </div>
            <div className="visitvisa-stats-box">
              <div className="stat-item">
                <div className="stat-number">SGD 30</div>
                <div className="stat-label">Visa Fee</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">3-5 days</div>
                <div className="stat-label">Processing Time</div>
              </div>
            </div>
            <div className="visitvisa-action-buttons">
              <a href="#" className="know-more-btn">
                Know More
              </a>
            </div>
          </div>
        </div>
        {/* Dubai (UAE) Card */}
        <div className="visitvisa-country-card">
          <div className="visitvisa-country-header">
            <span className="visitvisa-country-flag">🇦🇪</span>
            <div className="visitvisa-country-title">
              <h2>Dubai (UAE)</h2>
              <p>Tourist Visa</p>
            </div>
          </div>
          <div className="visitvisa-country-content">
            <div className="visitvisa-info-section">
              <h3>Visa Requirements</h3>
              <ul className="visitvisa-requirements-list">
                <li>Valid passport (6 months validity)</li>
                <li>Colored photograph</li>
                <li>Return flight tickets</li>
                <li>Hotel reservations</li>
                <li>Bank statements (3 months)</li>
                <li>Travel insurance</li>
                <li>UAE sponsor/hotel booking</li>
              </ul>
            </div>
            <div className="visitvisa-info-section">
              <h3>Visit Conditions</h3>
              <ul className="visitvisa-work-rights-list">
                <li>30/60/90 day options available</li>
                <li>Multiple entry options</li>
                <li>No work permitted</li>
                <li>Extension possible in-country</li>
              </ul>
            </div>
            <div className="visitvisa-stats-box">
              <div className="stat-item">
                <div className="stat-number">USD 90</div>
                <div className="stat-label">Visa Fee</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">3-4 days</div>
                <div className="stat-label">Processing Time</div>
              </div>
            </div>
            <div className="visitvisa-action-buttons">
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

export default Visitvisa;
