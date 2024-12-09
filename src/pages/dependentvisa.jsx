import React, { useEffect } from "react";
import "../Css/dependentvisa.css";
import { Link, useLocation } from "react-router-dom";
import Masonry from "masonry-layout";
import Navbar from "../components/navbar";
const Dependentvisa = () => {
  const location = useLocation();

  useEffect(() => {
    const hideLoadingOverlay = () => {
      setTimeout(() => {
        const overlay = document.querySelector(".loading-overlay");
        if (overlay) overlay.style.display = "none";
      }, 1000);
    };

    const initializeMasonry = () => {
      const grid = document.querySelector(".dependentvisa-comparison-grid");
      if (grid) {
        new Masonry(grid, {
          itemSelector: ".dependentvisa-country-card",
          columnWidth: ".dependentvisa-grid-sizer",
          gutter: ".dependentvisa-gutter-sizer",
          percentPosition: true,
        });
      }
    };

    hideLoadingOverlay();
    initializeMasonry();

    return () => {};
  }, [location.pathname]);

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
      <div className="dependentvisa-top-bar">
        <div className="dependentvisa-container">
          <div className="dependentvisa-top-bar-content">
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
            <div className="dependentvisa-social-links">
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
        className="dependentvisa-whatsapp-float"
        target="_blank"
      >
        <i className="bi bi-whatsapp" />
      </a>
      {/* Hero Section */}
      <section className="dependentvisa-hero">
        <div className="dependentvisa-hero-content">
          <div className="dependentvisa-hero-box">
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
      <div className="dependentvisa-comparison-grid" id="compare">
        <div className="dependentvisa-grid-sizer" />
        <div className="dependentvisa-gutter-sizer" />
        {/* Country Cards Grid */}
        <div className="dependentvisa-comparison-grid" id="compare">
          <div className="dependentvisa-grid-sizer" />
          <div className="dependentvisa-gutter-sizer" />
          {/* USA Card */}
          <div className="dependentvisa-country-card">
            <div className="dependentvisa-country-header">
              <span className="dependentvisa-country-flag">🇺🇸</span>
              <div className="dependentvisa-country-title">
                <h2>United States</h2>
                <p>Family-Based Immigration Visa</p>
              </div>
            </div>
            <div className="dependentvisa-country-content">
              <div className="dependentvisa-info-section">
                <h3>Visa Requirements</h3>
                <ul className="dependentvisa-requirements-list">
                  <li>Qualifying family relationship</li>
                  <li>Sponsor's income proof (I-864)</li>
                  <li>Valid passport &amp; photographs</li>
                  <li>Birth/marriage certificates</li>
                  <li>Police clearance certificates</li>
                  <li>Medical examination</li>
                  <li>Proof of relationship</li>
                </ul>
              </div>
              <div className="dependentvisa-info-section">
                <h3>Family Categories</h3>
                <ul className="dependentvisa-work-rights-list">
                  <li>Spouse and minor children</li>
                  <li>Parents of US citizens</li>
                  <li>Siblings of US citizens</li>
                  <li>Adult children (married/unmarried)</li>
                </ul>
              </div>
              <div className="dependentvisa-stats-box">
                <div className="stat-item">
                  <div className="stat-number">$535</div>
                  <div className="stat-label">Petition Fee</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">6-24 months</div>
                  <div className="stat-label">Processing Time</div>
                </div>
              </div>
              <div className="dependentvisa-action-buttons">
                <a href="#" className="know-more-btn">
                  Know More
                </a>
              </div>
            </div>
          </div>
          {/* UK Card */}
          <div className="dependentvisa-country-card">
            <div className="dependentvisa-country-header">
              <span className="dependentvisa-country-flag">🇬🇧</span>
              <div className="dependentvisa-country-title">
                <h2>United Kingdom</h2>
                <p>Family Visa</p>
              </div>
            </div>
            <div className="dependentvisa-country-content">
              <div className="dependentvisa-info-section">
                <h3>Visa Requirements</h3>
                <ul className="dependentvisa-requirements-list">
                  <li>Financial requirement (£18,600+)</li>
                  <li>Adequate accommodation</li>
                  <li>English language requirement</li>
                  <li>Genuine relationship proof</li>
                  <li>Valid passport &amp; photographs</li>
                  <li>TB test (if applicable)</li>
                  <li>Biometric information</li>
                </ul>
              </div>
              <div className="dependentvisa-info-section">
                <h3>Family Categories</h3>
                <ul className="dependentvisa-work-rights-list">
                  <li>Spouse/Partner visa</li>
                  <li>Child dependent visa</li>
                  <li>Parent visa (exceptional)</li>
                  <li>Adult dependent relatives</li>
                </ul>
              </div>
              <div className="dependentvisa-stats-box">
                <div className="stat-item">
                  <div className="stat-number">£1,538</div>
                  <div className="stat-label">Visa Fee</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">12 weeks</div>
                  <div className="stat-label">Processing Time</div>
                </div>
              </div>
              <div className="dependentvisa-action-buttons">
                <a href="#" className="know-more-btn">
                  Know More
                </a>
              </div>
            </div>
          </div>
          {/* Canada Card */}
          <div className="dependentvisa-country-card">
            <div className="dependentvisa-country-header">
              <span className="dependentvisa-country-flag">🇨🇦</span>
              <div className="dependentvisa-country-title">
                <h2>Canada</h2>
                <p>Family Class Immigration</p>
              </div>
            </div>
            <div className="dependentvisa-country-content">
              <div className="dependentvisa-info-section">
                <h3>Visa Requirements</h3>
                <ul className="dependentvisa-requirements-list">
                  <li>Sponsorship undertaking</li>
                  <li>Relationship documents</li>
                  <li>Income requirements</li>
                  <li>Police certificates</li>
                  <li>Medical examination</li>
                  <li>Photos and ID proof</li>
                  <li>Marriage/birth certificates</li>
                </ul>
              </div>
              <div className="dependentvisa-info-section">
                <h3>Family Categories</h3>
                <ul className="dependentvisa-work-rights-list">
                  <li>Spouse/Common-law partner</li>
                  <li>Dependent children</li>
                  <li>Parents &amp; grandparents</li>
                  <li>Adopted children</li>
                </ul>
              </div>
              <div className="dependentvisa-stats-box">
                <div className="stat-item">
                  <div className="stat-number">CAD 1,050</div>
                  <div className="stat-label">Processing Fee</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">12 months</div>
                  <div className="stat-label">Processing Time</div>
                </div>
              </div>
              <div className="dependentvisa-action-buttons">
                <a href="#" className="know-more-btn">
                  Know More
                </a>
              </div>
            </div>
          </div>
          {/* Germany Card */}
          <div className="dependentvisa-country-card">
            <div className="dependentvisa-country-header">
              <span className="dependentvisa-country-flag">🇩🇪</span>
              <div className="dependentvisa-country-title">
                <h2>Germany</h2>
                <p>Family Reunification Visa</p>
              </div>
            </div>
            <div className="dependentvisa-country-content">
              <div className="dependentvisa-info-section">
                <h3>Visa Requirements</h3>
                <ul className="dependentvisa-requirements-list">
                  <li>Proof of relationship</li>
                  <li>Adequate living space</li>
                  <li>Financial stability proof</li>
                  <li>Health insurance</li>
                  <li>Basic German skills (A1)</li>
                  <li>Valid passport</li>
                  <li>Marriage/birth certificate</li>
                </ul>
              </div>
              <div className="dependentvisa-info-section">
                <h3>Family Categories</h3>
                <ul className="dependentvisa-work-rights-list">
                  <li>Spouse/Registered partner</li>
                  <li>Minor children</li>
                  <li>Parents of minor children</li>
                  <li>Other dependents (exceptional)</li>
                </ul>
              </div>
              <div className="dependentvisa-stats-box">
                <div className="stat-item">
                  <div className="stat-number">€75</div>
                  <div className="stat-label">Visa Fee</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">3-6 months</div>
                  <div className="stat-label">Processing Time</div>
                </div>
              </div>
              <div className="dependentvisa-action-buttons">
                <a href="#" className="know-more-btn">
                  Know More
                </a>
              </div>
            </div>
          </div>
          {/* France Card */}
          <div className="dependentvisa-country-card">
            <div className="dependentvisa-country-header">
              <span className="dependentvisa-country-flag">🇫🇷</span>
              <div className="dependentvisa-country-title">
                <h2>France</h2>
                <p>Family Reunification Visa</p>
              </div>
            </div>
            <div className="dependentvisa-country-content">
              <div className="dependentvisa-info-section">
                <h3>Visa Requirements</h3>
                <ul className="dependentvisa-requirements-list">
                  <li>18+ months residence in France</li>
                  <li>Stable regular income</li>
                  <li>Suitable accommodation</li>
                  <li>Health insurance coverage</li>
                  <li>Family relationship proof</li>
                  <li>Integration intention</li>
                  <li>Clean criminal record</li>
                </ul>
              </div>
              <div className="dependentvisa-info-section">
                <h3>Family Categories</h3>
                <ul className="dependentvisa-work-rights-list">
                  <li>Spouse and children</li>
                  <li>Minor dependent children</li>
                  <li>Parents (if dependent)</li>
                  <li>Right to work included</li>
                </ul>
              </div>
              <div className="dependentvisa-stats-box">
                <div className="stat-item">
                  <div className="stat-number">€99</div>
                  <div className="stat-label">Visa Fee</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">6-8 months</div>
                  <div className="stat-label">Processing Time</div>
                </div>
              </div>
              <div className="dependentvisa-action-buttons">
                <a href="#" className="know-more-btn">
                  Know More
                </a>
              </div>
            </div>
          </div>
          {/* Singapore Card */}
          <div className="dependentvisa-country-card">
            <div className="dependentvisa-country-header">
              <span className="dependentvisa-country-flag">🇸🇬</span>
              <div className="dependentvisa-country-title">
                <h2>Singapore</h2>
                <p>Dependant's Pass</p>
              </div>
            </div>
            <div className="dependentvisa-country-content">
              <div className="dependentvisa-info-section">
                <h3>Visa Requirements</h3>
                <ul className="dependentvisa-requirements-list">
                  <li>Valid work pass holder sponsor</li>
                  <li>Minimum salary requirement</li>
                  <li>Relationship documents</li>
                  <li>Educational certificates</li>
                  <li>Marriage/birth certificates</li>
                  <li>Passport validity</li>
                  <li>Recent photographs</li>
                </ul>
              </div>
              <div className="dependentvisa-info-section">
                <h3>Family Categories</h3>
                <ul className="dependentvisa-work-rights-list">
                  <li>Spouse of pass holder</li>
                  <li>Children under 21</li>
                  <li>Common-law spouse</li>
                  <li>Step-children under 21</li>
                </ul>
              </div>
              <div className="dependentvisa-stats-box">
                <div className="stat-item">
                  <div className="stat-number">SGD 105</div>
                  <div className="stat-label">Application Fee</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">3 weeks</div>
                  <div className="stat-label">Processing Time</div>
                </div>
              </div>
              <div className="dependentvisa-action-buttons">
                <a href="#" className="know-more-btn">
                  Know More
                </a>
              </div>
            </div>
          </div>
          {/* Dubai (UAE) Card */}
          <div className="dependentvisa-country-card">
            <div className="dependentvisa-country-header">
              <span className="dependentvisa-country-flag">🇦🇪</span>
              <div className="dependentvisa-country-title">
                <h2>Dubai (UAE)</h2>
                <p>Family Residence Visa</p>
              </div>
            </div>
            <div className="dependentvisa-country-content">
              <div className="dependentvisa-info-section">
                <h3>Visa Requirements</h3>
                <ul className="dependentvisa-requirements-list">
                  <li>Minimum salary (AED 4,000)</li>
                  <li>Housing contract</li>
                  <li>Marriage certificate (attested)</li>
                  <li>Birth certificates (attested)</li>
                  <li>Passport copies</li>
                  <li>Emirates ID</li>
                  <li>Health insurance coverage</li>
                </ul>
              </div>
              <div className="dependentvisa-info-section">
                <h3>Family Categories</h3>
                <ul className="dependentvisa-work-rights-list">
                  <li>Spouse sponsorship</li>
                  <li>Children under 18</li>
                  <li>Parents (special conditions)</li>
                  <li>Daughters (unmarried)</li>
                </ul>
              </div>
              <div className="dependentvisa-stats-box">
                <div className="stat-item">
                  <div className="stat-number">AED 1,100</div>
                  <div className="stat-label">Visa Fee</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">2-3 weeks</div>
                  <div className="stat-label">Processing Time</div>
                </div>
              </div>
              <div className="dependentvisa-action-buttons">
                <a href="#" className="know-more-btn">
                  Know More
                </a>
              </div>
            </div>
          </div>
          {/* Ireland Card */}
          <div className="dependentvisa-country-card">
            <div className="dependentvisa-country-header">
              <span className="dependentvisa-country-flag">🇮🇪</span>
              <div className="dependentvisa-country-title">
                <h2>Ireland</h2>
                <p>Join Family Visa</p>
              </div>
            </div>
            <div className="dependentvisa-country-content">
              <div className="dependentvisa-info-section">
                <h3>Visa Requirements</h3>
                <ul className="dependentvisa-requirements-list">
                  <li>Proof of relationship</li>
                  <li>Sponsor's employment details</li>
                  <li>Financial documentation</li>
                  <li>Health insurance coverage</li>
                  <li>Accommodation proof</li>
                  <li>Character references</li>
                  <li>Marriage/birth certificates</li>
                </ul>
              </div>
              <div className="dependentvisa-info-section">
                <h3>Family Categories</h3>
                <ul className="dependentvisa-work-rights-list">
                  <li>Spouse/De facto partner</li>
                  <li>Dependent children under 18</li>
                  <li>Dependent parents over 65</li>
                  <li>Other dependent relatives</li>
                </ul>
              </div>
              <div className="dependentvisa-stats-box">
                <div className="stat-item">
                  <div className="stat-number">€60</div>
                  <div className="stat-label">Visa Fee</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">6-12 months</div>
                  <div className="stat-label">Processing Time</div>
                </div>
              </div>
              <div className="dependentvisa-info-section">
                <h3>Benefits</h3>
                <ul className="dependentvisa-work-rights-list">
                  <li>Work authorization possible</li>
                  <li>Access to education</li>
                  <li>Healthcare benefits</li>
                  <li>Path to permanent residence</li>
                </ul>
              </div>
              <div className="dependentvisa-action-buttons">
                <a href="#" className="know-more-btn">
                  Know More
                </a>
              </div>
            </div>
          </div>
          {/* New Zealand Card */}
          <div className="dependentvisa-country-card">
            <div className="dependentvisa-country-header">
              <span className="dependentvisa-country-flag">🇳🇿</span>
              <div className="dependentvisa-country-title">
                <h2>New Zealand</h2>
                <p>Family Stream Visa</p>
              </div>
            </div>
            <div className="dependentvisa-country-content">
              <div className="dependentvisa-info-section">
                <h3>Visa Requirements</h3>
                <ul className="dependentvisa-requirements-list">
                  <li>Sponsorship form</li>
                  <li>Relationship evidence</li>
                  <li>Financial requirement proof</li>
                  <li>Health examinations</li>
                  <li>Police certificates</li>
                  <li>Character requirements</li>
                  <li>Genuine relationship proof</li>
                </ul>
              </div>
              <div className="dependentvisa-info-section">
                <h3>Family Categories</h3>
                <ul className="dependentvisa-work-rights-list">
                  <li>Partner of NZ citizen/resident</li>
                  <li>Dependent children</li>
                  <li>Parent Retirement Category</li>
                  <li>Siblings &amp; Adult Children</li>
                </ul>
              </div>
              <div className="dependentvisa-stats-box">
                <div className="stat-item">
                  <div className="stat-number">NZD 580</div>
                  <div className="stat-label">Application Fee</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">8-12 months</div>
                  <div className="stat-label">Processing Time</div>
                </div>
              </div>
              <div className="dependentvisa-info-section">
                <h3>Key Features</h3>
                <ul className="dependentvisa-work-rights-list">
                  <li>Full work rights</li>
                  <li>Public healthcare access</li>
                  <li>Education entitlements</li>
                  <li>Social security benefits</li>
                </ul>
              </div>
              <div className="dependentvisa-action-buttons">
                <a href="#" className="know-more-btn">
                  Know More
                </a>
              </div>
            </div>
          </div>
          {/* WhatsApp Float Button */}
          <a
            href="https://wa.me/919390292090"
            className="dependentvisa-whatsapp-float"
            target="_blank"
          >
            <i className="bi bi-whatsapp" />
          </a>
        </div>
      </div>
       <footer className="text-white text-center py-3">
        <p>© 2023 Vertex Overseas Consultancy. All rights reserved.</p>
      </footer>
    </>
  );
};

export default Dependentvisa;
