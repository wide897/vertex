import React, { useEffect } from "react";
import "../Css/businessvisa.css";
import Navbar from "../components/navbar";
import { useLocation } from "react-router-dom";
import Masonry from "masonry-layout";
const Buisnessvisa = () => {
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
      const grid = document.querySelector(".businessvisa-comparison-grid");
      if (grid) {
        new Masonry(grid, {
          itemSelector: ".businessvisa-country-card",
          columnWidth: ".businessvisa-grid-sizer",
          gutter: ".businessvisa-gutter-sizer",
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
      <div className="businessvisa-top-bar">
        <div className="businessvisa-container">
          <div className="businessvisa-top-bar-content">
            <div className="contact-info">
              <a href="tel:+918143256666" className="businessvisa-highlight">
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
            <div className="businessvisa-social-links">
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
        className="businessvisa-whatsapp-float"
        target="_blank"
      >
        <i className="bi bi-whatsapp" />
      </a>
      {/* Hero Section */}
      <section className="businessvisa-hero">
        <div className="businessvisa-hero-content">
          <div className="businessvisa-hero-box">
            <h1>Welcome to Vertex Overseas Consultancy</h1>
            <p>
              Your journey to a brighter future starts here. We provide expert
              guidance and support for studying abroad.
            </p>
            <a href="Student Form.html" className="cta-button">
              Book a call
            </a>
          </div>
        </div>
      </section>
      {/* Country Cards Grid */}
      <div className="businessvisa-container">
        <div className="businessvisa-comparison-grid" id="compare">
          <div className="businessvisa-grid-sizer" />
          <div className="businessvisa-gutter-sizer" />
          {/* USA Card */}
          <div className="businessvisa-country-card">
            <div className="businessvisa-country-header">
              <span className="businessvisa-country-flag">🇺🇸</span>
              <div className="businessvisa-country-title">
                <h2>United States</h2>
                <p>B-1 Business Visa</p>
              </div>
            </div>
            <div className="businessvisa-country-content">
              <div className="businessvisa-info-section">
                <h3>Visa Requirements</h3>
                <ul className="businessvisa-requirements-list">
                  <li>Valid passport (6 months validity)</li>
                  <li>Completed DS-160 form</li>
                  <li>Business invitation letter</li>
                  <li>Company letter stating purpose</li>
                  <li>Bank statements (6 months)</li>
                  <li>Business registration documents</li>
                  <li>Meeting/conference details</li>
                </ul>
              </div>
              <div className="businessvisa-info-section">
                <h3>Business Activities Allowed</h3>
                <ul className="businessvisa-work-rights-list">
                  <li>Attend business meetings</li>
                  <li>Negotiate contracts</li>
                  <li>Attend conferences</li>
                  <li>No direct work permitted</li>
                </ul>
              </div>
              <div className="businessvisa-stats-box">
                <div className="stat-item">
                  <div className="stat-number">$160</div>
                  <div className="stat-label">Visa Fee</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">2-3 weeks</div>
                  <div className="stat-label">Processing Time</div>
                </div>
              </div>
              <div className="businessvisa-action-buttons">
                <a href="#" className="know-more-btn">
                  Know More
                </a>
              </div>
            </div>
          </div>
          {/* UK Card */}
          <div className="businessvisa-country-card">
            <div className="businessvisa-country-header">
              <span className="businessvisa-country-flag">🇬🇧</span>
              <div className="businessvisa-country-title">
                <h2>United Kingdom</h2>
                <p>Standard Visitor (Business)</p>
              </div>
            </div>
            <div className="businessvisa-country-content">
              <div className="businessvisa-info-section">
                <h3>Visa Requirements</h3>
                <ul className="businessvisa-requirements-list">
                  <li>Valid passport</li>
                  <li>UK business invitation</li>
                  <li>Employment proof</li>
                  <li>Business registration docs</li>
                  <li>Financial statements</li>
                  <li>Travel history evidence</li>
                  <li>Meeting agenda/schedule</li>
                </ul>
              </div>
              <div className="businessvisa-info-section">
                <h3>Business Activities Allowed</h3>
                <ul className="businessvisa-work-rights-list">
                  <li>Business meetings</li>
                  <li>Sign contracts/deals</li>
                  <li>Site visits</li>
                  <li>Conference attendance</li>
                </ul>
              </div>
              <div className="businessvisa-stats-box">
                <div className="stat-item">
                  <div className="stat-number">£100</div>
                  <div className="stat-label">Visa Fee</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">15 days</div>
                  <div className="stat-label">Processing Time</div>
                </div>
              </div>
              <div className="businessvisa-action-buttons">
                <a href="#" className="know-more-btn">
                  Know More
                </a>
              </div>
            </div>
          </div>
          {/* Canada Card */}
          <div className="businessvisa-country-card">
            <div className="businessvisa-country-header">
              <span className="businessvisa-country-flag">🇨🇦</span>
              <div className="businessvisa-country-title">
                <h2>Canada</h2>
                <p>Business Visitor Visa</p>
              </div>
            </div>
            <div className="businessvisa-country-content">
              <div className="businessvisa-info-section">
                <h3>Visa Requirements</h3>
                <ul className="businessvisa-requirements-list">
                  <li>Valid passport</li>
                  <li>Invitation from Canadian company</li>
                  <li>Company registration proof</li>
                  <li>Business trip itinerary</li>
                  <li>Bank statements</li>
                  <li>Employment letter</li>
                  <li>Travel insurance</li>
                </ul>
              </div>
              <div className="businessvisa-info-section">
                <h3>Business Activities Allowed</h3>
                <ul className="businessvisa-work-rights-list">
                  <li>Purchase Canadian goods</li>
                  <li>Meet business associates</li>
                  <li>Training sessions</li>
                  <li>Trade conventions</li>
                </ul>
              </div>
              <div className="businessvisa-stats-box">
                <div className="stat-item">
                  <div className="stat-number">CAD 100</div>
                  <div className="stat-label">Visa Fee</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">20 days</div>
                  <div className="stat-label">Processing Time</div>
                </div>
              </div>
              <div className="businessvisa-action-buttons">
                <a href="#" className="know-more-btn">
                  Know More
                </a>
              </div>
            </div>
          </div>
          {/* New Zealand Card */}
          <div className="businessvisa-country-card">
            <div className="businessvisa-country-header">
              <span className="businessvisa-country-flag">🇳🇿</span>
              <div className="businessvisa-country-title">
                <h2>New Zealand</h2>
                <p>Business Visitor Visa</p>
              </div>
            </div>
            <div className="businessvisa-country-content">
              <div className="businessvisa-info-section">
                <h3>Visa Requirements</h3>
                <ul className="businessvisa-businessvisa-requirements-list">
                  <li>Valid passport</li>
                  <li>NZ business invitation</li>
                  <li>Company letter</li>
                  <li>Business purpose proof</li>
                  <li>Financial documents</li>
                  <li>Return travel booking</li>
                  <li>Business background proof</li>
                </ul>
              </div>
              <div className="businessvisa-info-section">
                <h3>Business Activities Allowed</h3>
                <ul className="businessvisa-work-rights-list">
                  <li>Business consultations</li>
                  <li>Conference attendance</li>
                  <li>Contract negotiations</li>
                  <li>Market research</li>
                </ul>
              </div>
              <div className="businessvisa-stats-box">
                <div className="stat-item">
                  <div className="stat-number">NZD 246</div>
                  <div className="stat-label">Visa Fee</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">20 days</div>
                  <div className="stat-label">Processing Time</div>
                </div>
              </div>
              <div className="businessvisa-action-buttons">
                <a href="#" className="know-more-btn">
                  Know More
                </a>
              </div>
            </div>
          </div>
          {/* Ireland Card */}
          <div className="businessvisa-country-card">
            <div className="businessvisa-country-header">
              <span className="businessvisa-country-flag">🇮🇪</span>
              <div className="businessvisa-country-title">
                <h2>Ireland</h2>
                <p>Business 'C' Visa</p>
              </div>
            </div>
            <div className="businessvisa-country-content">
              <div className="businessvisa-info-section">
                <h3>Visa Requirements</h3>
                <ul className="businessvisa-requirements-list">
                  <li>Valid passport</li>
                  <li>Irish company invitation</li>
                  <li>Business mission statement</li>
                  <li>Company registration</li>
                  <li>Financial statements</li>
                  <li>Travel insurance</li>
                  <li>Meeting schedule</li>
                </ul>
              </div>
              <div className="businessvisa-info-section">
                <h3>Business Activities Allowed</h3>
                <ul className="businessvisa-work-rights-list">
                  <li>Business meetings</li>
                  <li>Training programs</li>
                  <li>Trade fair participation</li>
                  <li>Contract negotiations</li>
                </ul>
              </div>
              <div className="businessvisa-stats-box">
                <div className="stat-item">
                  <div className="stat-number">€60</div>
                  <div className="stat-label">Visa Fee</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">15 days</div>
                  <div className="stat-label">Processing Time</div>
                </div>
              </div>
              <div className="businessvisa-action-buttons">
                <a href="#" className="know-more-btn">
                  Know More
                </a>
              </div>
            </div>
          </div>
          {/* France Card */}
          <div className="businessvisa-country-card">
            <div className="businessvisa-country-header">
              <span className="businessvisa-country-flag">🇫🇷</span>
              <div className="businessvisa-country-title">
                <h2>France</h2>
                <p>Schengen Business Visa</p>
              </div>
            </div>
            <div className="businessvisa-country-content">
              <div className="businessvisa-info-section">
                <h3>Visa Requirements</h3>
                <ul className="businessvisa-requirements-list">
                  <li>Valid passport</li>
                  <li>French business invitation</li>
                  <li>Company documentation</li>
                  <li>Business purpose statement</li>
                  <li>Bank statements</li>
                  <li>Travel insurance</li>
                  <li>Accommodation proof</li>
                </ul>
              </div>
              <div className="businessvisa-info-section">
                <h3>Business Activities Allowed</h3>
                <ul className="businessvisa-work-rights-list">
                  <li>Business meetings</li>
                  <li>Trade shows</li>
                  <li>Professional training</li>
                  <li>Business negotiations</li>
                </ul>
              </div>
              <div className="businessvisa-stats-box">
                <div className="stat-item">
                  <div className="stat-number">€80</div>
                  <div className="stat-label">Visa Fee</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">15 days</div>
                  <div className="stat-label">Processing Time</div>
                </div>
              </div>
              <div className="businessvisa-action-buttons">
                <a href="#" className="know-more-btn">
                  Know More
                </a>
              </div>
            </div>
          </div>
          {/* Germany Card */}
          <div className="businessvisa-country-card">
            <div className="businessvisa-country-header">
              <span className="businessvisa-country-flag">🇩🇪</span>
              <div className="businessvisa-country-title">
                <h2>Germany</h2>
                <p>Business Schengen Visa</p>
              </div>
            </div>
            <div className="businessvisa-country-content">
              <div className="businessvisa-info-section">
                <h3>Visa Requirements</h3>
                <ul className="businessvisa-requirements-list">
                  <li>Valid passport</li>
                  <li>German company invitation</li>
                  <li>Business intent proof</li>
                  <li>Company registration</li>
                  <li>Financial statements</li>
                  <li>Travel insurance</li>
                  <li>Itinerary details</li>
                </ul>
              </div>
              <div className="businessvisa-info-section">
                <h3>Business Activities Allowed</h3>
                <ul className="businessvisa-work-rights-list">
                  <li>Business meetings</li>
                  <li>Trade fairs</li>
                  <li>Contract signing</li>
                  <li>Business training</li>
                </ul>
              </div>
              <div className="businessvisa-stats-box">
                <div className="stat-item">
                  <div className="stat-number">€80</div>
                  <div className="stat-label">Visa Fee</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">15 days</div>
                  <div className="stat-label">Processing Time</div>
                </div>
              </div>
              <div className="businessvisa-action-buttons">
                <a href="#" className="know-more-btn">
                  Know More
                </a>
              </div>
            </div>
          </div>
          {/* Singapore Card */}
          <div className="businessvisa-country-card">
            <div className="businessvisa-country-header">
              <span className="businessvisa-country-flag">🇸🇬</span>
              <div className="businessvisa-country-title">
                <h2>Germany</h2>
                <p>Business Schengen Visa</p>
              </div>
            </div>
            <div className="businessvisa-country-content">
              <div className="businessvisa-info-section">
                <h3>Visa Requirements</h3>
                <ul className="businessvisa-requirements-list">
                  <li>Valid passport</li>
                  <li>Local company invitation</li>
                  <li>Business proof documents</li>
                  <li>Bank statements</li>
                  <li>Travel itinerary</li>
                  <li>Company registration</li>
                  <li>Return ticket booking</li>
                </ul>
              </div>
              <div className="businessvisa-info-section">
                <h3>Business Activities Allowed</h3>
                <ul className="businessvisa-work-rights-list">
                  <li>Business meetings</li>
                  <li>Conference attendance</li>
                  <li>Trade exhibitions</li>
                  <li>Business negotiations</li>
                </ul>
              </div>
              <div className="businessvisa-stats-box">
                <div className="stat-item">
                  <div className="stat-number">SGD 30</div>
                  <div className="stat-label">Visa Fee</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">3 days</div>
                  <div className="stat-label">Processing Time</div>
                </div>
              </div>
              <div className="businessvisa-action-buttons">
                <a href="#" className="know-more-btn">
                  Know More
                </a>
              </div>
            </div>
          </div>
          {/* Dubai (UAE) Card */}
          <div className="businessvisa-country-card">
            <div className="businessvisa-country-header">
              <span className="businessvisa-country-flag">🇦🇪</span>
              <div className="businessvisa-country-title">
                <h2>Dubai (UAE)</h2>
                <p>Business Visit Visa</p>
              </div>
            </div>
            <div className="businessvisa-country-content">
              <div className="businessvisa-info-section">
                <h3>Visa Requirements</h3>
                <ul className="businessvisa-requirements-list">
                  <li>Valid passport</li>
                  <li>UAE company invitation</li>
                  <li>Trade license copy</li>
                  <li>Bank statements</li>
                  <li>Company profile</li>
                  <li>Insurance coverage</li>
                  <li>Business purpose letter</li>
                </ul>
              </div>
              <div className="businessvisa-info-section">
                <h3>Business Activities Allowed</h3>
                <ul className="businessvisa-work-rights-list">
                  <li>Business meetings</li>
                  <li>Property dealings</li>
                  <li>Trade shows</li>
                  <li>Contract negotiations</li>
                </ul>
              </div>
              <div className="businessvisa-stats-box">
                <div className="stat-item">
                  <div className="stat-number">USD 220</div>
                  <div className="stat-label">Visa Fee</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">3-5 days</div>
                  <div className="stat-label">Processing Time</div>
                </div>
              </div>
              <div className="businessvisa-action-buttons">
                <a href="#" className="know-more-btn">
                  Know More
                </a>
              </div>
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

export default Buisnessvisa;
