import React, { useEffect } from "react";
import "../Css/temporaryvisa.css";
import { Link, useLocation } from "react-router-dom";
import Masonry from "masonry-layout";
import Navbar from "../components/navbar";

const Temporaryvisa = () => {
  const location = useLocation();

  useEffect(() => {
    const hideLoadingOverlay = () => {
      setTimeout(() => {
        const overlay = document.querySelector(".loading-overlay");
        if (overlay) overlay.style.display = "none";
      }, 1000);
    };

    const initializeMasonry = () => {
      const grid = document.querySelector(".temporaryvisa-comparison-grid");
      if (grid) {
        new Masonry(grid, {
          itemSelector: ".temporaryvisa-country-card",
          columnWidth: ".temporaryvisa-grid-sizer",
          gutter: ".temporaryvisa-gutter-sizer",
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
      <div className="temporaryvisa-top-bar">
        <div className="temporaryvisa-container">
          <div className="temporaryvisa-top-bar-content">
            <div className="contact-info">
              <a href="tel:+918143256666" className="temporaryvisa-highlight">
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
            <div className="temporaryvisa-social-links">
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
      {/* <Navbar /> */}
      {/* WhatsApp Float Button */}
      <a
        href="https://wa.me/919390292090"
        className="temporaryvisa-whatsapp-float"
        target="_blank"
      >
        <i className="bi bi-whatsapp" />
      </a>
      {/* Hero Section */}
      <section className="temporaryvisa-hero">
        <div className="temporaryvisa-hero-content">
          <div className="temporaryvisa-hero-box">
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
      <div className="temporaryvisa-comparison-grid" id="compare">
        <div className="temporaryvisa-grid-sizer" />
        <div className="temporaryvisa-gutter-sizer" />
        {/* Country Cards Grid */}
        <div className="temporaryvisa-comparison-grid" id="compare">
          <div className="temporaryvisa-grid-sizer" />
          <div className="temporaryvisa-gutter-sizer" />
          {/* USA Card */}
          <div className="temporaryvisa-country-card">
            <div className="temporaryvisa-country-header">
              <span className="temporaryvisa-country-flag">🇺🇸</span>
              <div className="temporaryvisa-country-title">
                <h2>United States</h2>
                <p>Temporary Non-Immigrant Visas</p>
              </div>
            </div>
            <div className="temporaryvisa-country-content">
              <div className="temporaryvisa-info-section">
                <h3>Visa Types</h3>
                <ul className="temporaryvisa-requirements-list">
                  <li>H-1B (Specialty Occupations)</li>
                  <li>L-1 (Intracompany Transfer)</li>
                  <li>J-1 (Exchange Visitor)</li>
                  <li>F-1 (Student Visa)</li>
                  <li>B-1/B-2 (Business/Tourist)</li>
                  <li>E-2 (Treaty Investor)</li>
                  <li>O-1 (Extraordinary Ability)</li>
                </ul>
              </div>
              <div className="temporaryvisa-info-section">
                <h3>General Requirements</h3>
                <ul className="temporaryvisa-work-rights-list">
                  <li>Valid passport (6 months)</li>
                  <li>Purpose-specific documentation</li>
                  <li>Financial sufficiency proof</li>
                  <li>Return travel intention</li>
                </ul>
              </div>
              <div className="temporaryvisa-stats-box">
                <div className="stat-item">
                  <div className="stat-number">$160-190</div>
                  <div className="stat-label">Base Fee</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">2-6 months</div>
                  <div className="stat-label">Processing Time</div>
                </div>
              </div>
              <div className="temporaryvisa-action-buttons">
                <a href="#" className="know-more-btn">
                  Know More
                </a>
              </div>
            </div>
          </div>
          {/* UK Card */}
          <div className="temporaryvisa-country-card">
            <div className="temporaryvisa-country-header">
              <span className="temporaryvisa-country-flag">🇬🇧</span>
              <div className="temporaryvisa-country-title">
                <h2>United Kingdom</h2>
                <p>Temporary Work Visas</p>
              </div>
            </div>
            <div className="temporaryvisa-country-content">
              <div className="temporaryvisa-info-section">
                <h3>Visa Types</h3>
                <ul className="temporaryvisa-requirements-list">
                  <li>Skilled Worker Visa</li>
                  <li>Youth Mobility Scheme</li>
                  <li>Graduate Visa</li>
                  <li>Seasonal Worker Visa</li>
                  <li>Creative Worker Visa</li>
                  <li>Student Visa</li>
                  <li>Visitor Visa</li>
                </ul>
              </div>
              <div className="temporaryvisa-info-section">
                <h3>Key Requirements</h3>
                <ul className="temporaryvisa-work-rights-list">
                  <li>Valid Certificate of Sponsorship</li>
                  <li>English language proficiency</li>
                  <li>Maintenance funds</li>
                  <li>Specific qualifications</li>
                </ul>
              </div>
              <div className="temporaryvisa-stats-box">
                <div className="stat-item">
                  <div className="stat-number">£259-1,235</div>
                  <div className="stat-label">Visa Fee</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">3-8 weeks</div>
                  <div className="stat-label">Processing Time</div>
                </div>
              </div>
              <div className="temporaryvisa-action-buttons">
                <a href="#" className="know-more-btn">
                  Know More
                </a>
              </div>
            </div>
          </div>
          {/* Canada Card */}
          <div className="temporaryvisa-country-card">
            <div className="temporaryvisa-country-header">
              <span className="temporaryvisa-country-flag">🇨🇦</span>
              <div className="temporaryvisa-country-title">
                <h2>Canada</h2>
                <p>Temporary Resident Visas</p>
              </div>
            </div>
            <div className="temporaryvisa-country-content">
              <div className="temporaryvisa-info-section">
                <h3>Visa Types</h3>
                <ul className="temporaryvisa-requirements-list">
                  <li>Work Permit (LMIA based)</li>
                  <li>Study Permit</li>
                  <li>Working Holiday Visa</li>
                  <li>Super Visa (Parents/Grandparents)</li>
                  <li>Visitor Visa</li>
                  <li>Business Visitor</li>
                  <li>International Experience</li>
                </ul>
              </div>
              <div className="temporaryvisa-info-section">
                <h3>Basic Requirements</h3>
                <ul className="temporaryvisa-work-rights-list">
                  <li>Purpose-specific documents</li>
                  <li>Biometrics submission</li>
                  <li>Financial proof</li>
                  <li>Clean background check</li>
                </ul>
              </div>
              <div className="temporaryvisa-stats-box">
                <div className="stat-item">
                  <div className="stat-number">CAD 100-155</div>
                  <div className="stat-label">Visa Fee</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">2-12 weeks</div>
                  <div className="stat-label">Processing Time</div>
                </div>
              </div>
              <div className="temporaryvisa-action-buttons">
                <a href="#" className="know-more-btn">
                  Know More
                </a>
              </div>
            </div>
          </div>
          {/* Ireland Card */}
          <div className="temporaryvisa-country-card">
            <div className="temporaryvisa-country-header">
              <span className="temporaryvisa-country-flag">🇮🇪</span>
              <div className="temporaryvisa-country-title">
                <h2>Ireland</h2>
                <p>Short Stay 'C' Visas</p>
              </div>
            </div>
            <div className="temporaryvisa-country-content">
              <div className="temporaryvisa-info-section">
                <h3>Visa Categories</h3>
                <ul className="temporaryvisa-requirements-list">
                  <li>Tourist Visa</li>
                  <li>Business Visa</li>
                  <li>Study Visa (under 90 days)</li>
                  <li>Conference/Event Visa</li>
                  <li>Training Visa</li>
                  <li>Medical Treatment Visa</li>
                  <li>Performance/Cultural Visa</li>
                </ul>
              </div>
              <div className="temporaryvisa-info-section">
                <h3>Basic Requirements</h3>
                <ul className="temporaryvisa-work-rights-list">
                  <li>Valid passport</li>
                  <li>Financial sustenance proof</li>
                  <li>Travel insurance</li>
                  <li>Purpose documentation</li>
                </ul>
              </div>
              <div className="temporaryvisa-stats-box">
                <div className="stat-item">
                  <div className="stat-number">€60-100</div>
                  <div className="stat-label">Visa Fee</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">4-8 weeks</div>
                  <div className="stat-label">Processing Time</div>
                </div>
              </div>
              <div className="temporaryvisa-action-buttons">
                <a href="#" className="know-more-btn">
                  Know More
                </a>
              </div>
            </div>
          </div>
          {/* France Card */}
          <div className="temporaryvisa-country-card">
            <div className="temporaryvisa-country-header">
              <span className="temporaryvisa-country-flag">🇫🇷</span>
              <div className="temporaryvisa-country-title">
                <h2>France</h2>
                <p>Short-Stay Schengen Visa</p>
              </div>
            </div>
            <div className="temporaryvisa-country-content">
              <div className="temporaryvisa-info-section">
                <h3>Visa Categories</h3>
                <ul className="temporaryvisa-requirements-list">
                  <li>Tourist Visa</li>
                  <li>Business Visa</li>
                  <li>Student Visa (short courses)</li>
                  <li>Working Holiday Visa</li>
                  <li>Medical Visit Visa</li>
                  <li>Cultural/Sports Events</li>
                  <li>Transit Visa</li>
                </ul>
              </div>
              <div className="temporaryvisa-info-section">
                <h3>Key Requirements</h3>
                <ul className="temporaryvisa-work-rights-list">
                  <li>Valid passport (3 months extra)</li>
                  <li>Travel insurance</li>
                  <li>Accommodation proof</li>
                  <li>Financial means proof</li>
                </ul>
              </div>
              <div className="temporaryvisa-stats-box">
                <div className="stat-item">
                  <div className="stat-number">€80</div>
                  <div className="stat-label">Visa Fee</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">15 days</div>
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
          {/* Germany Card */}
          <div className="temporaryvisa-country-card">
            <div className="temporaryvisa-country-header">
              <span className="temporaryvisa-country-flag">🇩🇪</span>
              <div className="temporaryvisa-country-title">
                <h2>Germany</h2>
                <p>Temporary Residence Permits</p>
              </div>
            </div>
            <div className="temporaryvisa-country-content">
              <div className="temporaryvisa-info-section">
                <h3>Permit Types</h3>
                <ul className="temporaryvisa-requirements-list">
                  <li>Job Seeker Visa</li>
                  <li>Student Visa</li>
                  <li>Working Holiday Visa</li>
                  <li>Research Visa</li>
                  <li>Training/Internship Visa</li>
                  <li>Language Course Visa</li>
                  <li>Business Visa</li>
                </ul>
              </div>
              <div className="temporaryvisa-info-section">
                <h3>Basic Requirements</h3>
                <ul className="temporaryvisa-work-rights-list">
                  <li>Health insurance coverage</li>
                  <li>Financial stability proof</li>
                  <li>Purpose-specific documents</li>
                  <li>Accommodation proof</li>
                </ul>
              </div>
              <div className="temporaryvisa-stats-box">
                <div className="stat-item">
                  <div className="stat-number">€75-100</div>
                  <div className="stat-label">Visa Fee</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">4-12 weeks</div>
                  <div className="stat-label">Processing Time</div>
                </div>
              </div>
              <div className="temporaryvisa-action-buttons">
                <a href="#" className="know-more-btn">
                  Know More
                </a>
              </div>
            </div>
          </div>
          {/* Singapore Card */}
          <div className="temporaryvisa-country-card">
            <div className="temporaryvisa-country-header">
              <span className="temporaryvisa-country-flag">🇸🇬</span>
              <div className="temporaryvisa-country-title">
                <h2>Singapore</h2>
                <p>Temporary Work Passes</p>
              </div>
            </div>
            <div className="temporaryvisa-country-content">
              <div className="temporaryvisa-info-section">
                <h3>Pass Types</h3>
                <ul className="temporaryvisa-requirements-list">
                  <li>Work Permit</li>
                  <li>S Pass</li>
                  <li>Training Employment Pass</li>
                  <li>Work Holiday Pass</li>
                  <li>Training Visit Pass</li>
                  <li>Professional Visit Pass</li>
                  <li>Short Term Visit Pass</li>
                </ul>
              </div>
              <div className="temporaryvisa-info-section">
                <h3>General Requirements</h3>
                <ul className="temporaryvisa-work-rights-list">
                  <li>Valid passport</li>
                  <li>Employer sponsorship</li>
                  <li>Qualification documents</li>
                  <li>Medical examination</li>
                </ul>
              </div>
              <div className="temporaryvisa-stats-box">
                <div className="stat-item">
                  <div className="stat-number">SGD 35-105</div>
                  <div className="stat-label">Application Fee</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">3-5 weeks</div>
                  <div className="stat-label">Processing Time</div>
                </div>
              </div>
              <div className="temporaryvisa-action-buttons">
                <a href="#" className="know-more-btn">
                  Know More
                </a>
              </div>
            </div>
          </div>
          {/* Dubai (UAE) Card */}
          <div className="temporaryvisa-country-card">
            <div className="temporaryvisa-country-header">
              <span className="temporaryvisa-country-flag">🇦🇪</span>
              <div className="temporaryvisa-country-title">
                <h2>Dubai (UAE)</h2>
                <p>Short-Term Visas</p>
              </div>
            </div>
            <div className="temporaryvisa-country-content">
              <div className="temporaryvisa-info-section">
                <h3>Visa Types</h3>
                <ul className="temporaryvisa-requirements-list">
                  <li>Tourist Visa (30/90 days)</li>
                  <li>Visit Visa</li>
                  <li>Transit Visa</li>
                  <li>Mission Visa</li>
                  <li>Multiple Entry Visa</li>
                  <li>Student Visa</li>
                  <li>Medical Treatment Visa</li>
                </ul>
              </div>
              <div className="temporaryvisa-info-section">
                <h3>Basic Requirements</h3>
                <ul className="temporaryvisa-work-rights-list">
                  <li>Valid passport</li>
                  <li>Photograph requirements</li>
                  <li>Purpose documentation</li>
                  <li>Financial stability proof</li>
                </ul>
              </div>
              <div className="temporaryvisa-stats-box">
                <div className="stat-item">
                  <div className="stat-number">AED 200-500</div>
                  <div className="stat-label">Visa Fee</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">3-5 days</div>
                  <div className="stat-label">Processing Time</div>
                </div>
              </div>
              <div className="temporaryvisa-action-buttons">
                <a href="#" className="know-more-btn">
                  Know More
                </a>
              </div>
            </div>
          </div>
          {/* New Zealand Card */}
          <div className="temporaryvisa-country-card">
            <div className="temporaryvisa-country-header">
              <span className="temporaryvisa-country-flag">🇳🇿</span>
              <div className="temporaryvisa-country-title">
                <h2>New Zealand</h2>
                <p>Temporary Visas</p>
              </div>
            </div>
            <div className="temporaryvisa-country-content">
              <div className="temporaryvisa-info-section">
                <h3>Visa Categories</h3>
                <ul className="temporaryvisa-requirements-list">
                  <li>Working Holiday Visa</li>
                  <li>Essential Skills Work Visa</li>
                  <li>Student Visa</li>
                  <li>Visitor Visa</li>
                  <li>Specific Purpose Work Visa</li>
                  <li>Post-Study Work Visa</li>
                  <li>Business Visitor Visa</li>
                </ul>
              </div>
              <div className="temporaryvisa-info-section">
                <h3>General Requirements</h3>
                <ul className="temporaryvisa-work-rights-list">
                  <li>Good health and character</li>
                  <li>Genuine intention proof</li>
                  <li>Sufficient funds evidence</li>
                  <li>Return travel arrangements</li>
                </ul>
              </div>
              <div className="temporaryvisa-stats-box">
                <div className="stat-item">
                  <div className="stat-number">NZD 170-495</div>
                  <div className="stat-label">Visa Fee Range</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">20-60 days</div>
                  <div className="stat-label">Processing Time</div>
                </div>
              </div>
              <div className="temporaryvisa-info-section">
                <h3>Key Benefits</h3>
                <ul className="temporaryvisa-work-rights-list">
                  <li>Work rights (visa specific)</li>
                  <li>Study options available</li>
                  <li>Healthcare access</li>
                  <li>Pathway to residency possible</li>
                </ul>
              </div>
              <div className="temporaryvisa-info-section">
                <h3>Additional Requirements</h3>
                <ul className="temporaryvisa-requirements-list">
                  <li>Job offer (work visas)</li>
                  <li>English proficiency proof</li>
                  <li>Qualification assessment</li>
                  <li>Medical certificates</li>
                  <li>Police clearances</li>
                  <li>Insurance coverage</li>
                  <li>Sponsorship (if applicable)</li>
                </ul>
              </div>
              <div className="temporaryvisa-action-buttons">
                <a href="#" className="know-more-btn">
                  Know More
                </a>
              </div>
            </div>
          </div>
          {/* WhatsApp Float Button */}
          <a
            href="https://wa.me/919390292090"
            className="temporaryvisa-whatsapp-float"
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

export default Temporaryvisa;
