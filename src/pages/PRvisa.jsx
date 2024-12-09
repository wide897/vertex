import React, { useEffect } from "react";
import "../Css/PRvisa.css";
import Navbar from "../components/navbar";
import { Link, useLocation } from "react-router-dom";
import Masonry from "masonry-layout";
const PRvisa = () => {
  const location = useLocation();

  useEffect(() => {
    const hideLoadingOverlay = () => {
      setTimeout(() => {
        const overlay = document.querySelector(".loading-overlay");
        if (overlay) overlay.style.display = "none";
      }, 1000);
    };

    const initializeMasonry = () => {
      const grid = document.querySelector(".PRvisa-comparison-grid");
      if (grid) {
        new Masonry(grid, {
          itemSelector: ".PRvisa-country-card",
          columnWidth: ".PRvisa-grid-sizer",
          gutter: ".PRvisa-gutter-sizer",
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
      <div className="PRvisa-top-bar">
        <div className="PRvisa-container">
          <div className="PRvisa-top-bar-content">
            <div className="contact-info">
              <a href="tel:+918143256666" className="PRvisa-highlight">
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
            <div className="PRvisa-social-links">
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
        className="PRvisa-whatsapp-float"
        target="_blank"
      >
        <i className="bi bi-whatsapp" />
      </a>
      {/* Hero Section */}
      <section className="PRvisa-hero">
        <div className="PRvisa-hero-content">
          <div className="PRvisa-hero-box">
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
      <div className="PRvisa-comparison-grid" id="compare">
        <div className="PRvisa-grid-sizer" />
        <div className="PRvisa-gutter-sizer" />
        {/* Country Cards Grid */}
        <div className="PRvisa-comparison-grid" id="compare">
          <div className="PRvisa-grid-sizer" />
          <div className="PRvisa-gutter-sizer" />
          {/* USA Card */}
          <div className="PRvisa-country-card">
            <div className="country-header">
              <span className="PRvisa-country-flag">🇺🇸</span>
              <div className="PRvisa-country-title">
                <h2>United States</h2>
                <p>Green Card (Permanent Resident)</p>
              </div>
            </div>
            <div className="PRvisa-country-content">
              <div className="PRvisa-info-section">
                <h3>PR Requirements</h3>
                <ul className="PRvisa-requirements-list">
                  <li>Eligibility category qualification</li>
                  <li>Valid passport &amp; photographs</li>
                  <li>Medical examination</li>
                  <li>Police clearance certificates</li>
                  <li>Affidavit of support (I-864)</li>
                  <li>Employment verification</li>
                  <li>Tax returns (if applicable)</li>
                </ul>
              </div>
              <div className="PRvisa-info-section">
                <h3>PR Benefits</h3>
                <ul className="PRvisa-work-rights-list">
                  <li>Permanent work authorization</li>
                  <li>Social security benefits</li>
                  <li>Education access rights</li>
                  <li>Path to citizenship (5 years)</li>
                </ul>
              </div>
              <div className="PRvisa-stats-box">
                <div className="stat-item">
                  <div className="stat-number">$1,225</div>
                  <div className="stat-label">Filing Fee</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">12-36 months</div>
                  <div className="stat-label">Processing Time</div>
                </div>
              </div>
              <div className="PRvisa-action-buttons">
                <a href="#" className="know-more-btn">
                  Know More
                </a>
              </div>
            </div>
          </div>
          {/* UK Card */}
          <div className="PRvisa-country-card">
            <div className="PRvisa-country-header">
              <span className="PRvisa-country-flag">🇬🇧</span>
              <div className="PRvisa-country-title">
                <h2>United Kingdom</h2>
                <p>Indefinite Leave to Remain</p>
              </div>
            </div>
            <div className="PRvisa-country-content">
              <div className="PRvisa-info-section">
                <h3>PR Requirements</h3>
                <ul className="PRvisa-requirements-list">
                  <li>5 years continuous residence</li>
                  <li>Life in the UK test pass</li>
                  <li>English language proof</li>
                  <li>Valid visa status</li>
                  <li>No criminal record</li>
                  <li>Financial requirement</li>
                  <li>Knowledge of Life in UK</li>
                </ul>
              </div>
              <div className="PRvisa-info-section">
                <h3>PR Benefits</h3>
                <ul className="PRvisa-work-rights-list">
                  <li>Unrestricted work rights</li>
                  <li>NHS healthcare access</li>
                  <li>State education access</li>
                  <li>Path to citizenship (1 year)</li>
                </ul>
              </div>
              <div className="PRvisa-stats-box">
                <div className="stat-item">
                  <div className="stat-number">£2,404</div>
                  <div className="stat-label">ILR Fee</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">6 months</div>
                  <div className="stat-label">Processing Time</div>
                </div>
              </div>
              <div className="PRvisa-action-buttons">
                <a href="#" className="know-more-btn">
                  Know More
                </a>
              </div>
            </div>
          </div>
          {/* Canada Card */}
          <div className="PRvisa-country-card">
            <div className="PRvisa-country-header">
              <span className="PRvisa-country-flag">🇨🇦</span>
              <div className="PRvisa-country-title">
                <h2>Canada</h2>
                <p>Permanent Residence (Express Entry)</p>
              </div>
            </div>
            <div className="PRvisa-country-content">
              <div className="PRvisa-info-section">
                <h3>PR Requirements</h3>
                <ul className="PRvisa-requirements-list">
                  <li>67 points minimum score</li>
                  <li>Language proficiency (IELTS)</li>
                  <li>Education assessment (ECA)</li>
                  <li>Work experience proof</li>
                  <li>Medical examination</li>
                  <li>Police certificates</li>
                  <li>Proof of funds</li>
                </ul>
              </div>
              <div className="PRvisa-info-section">
                <h3>PR Benefits</h3>
                <ul className="PRvisa-work-rights-list">
                  <li>Healthcare coverage</li>
                  <li>Social benefits access</li>
                  <li>Education rights</li>
                  <li>Path to citizenship (3 years)</li>
                </ul>
              </div>
              <div className="PRvisa-stats-box">
                <div className="stat-item">
                  <div className="stat-number">CAD 1,365</div>
                  <div className="stat-label">PR Fee</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">6 months</div>
                  <div className="stat-label">Processing Time</div>
                </div>
              </div>
              <div className="PRvisa-action-buttons">
                <a href="#" className="know-more-btn">
                  Know More
                </a>
              </div>
            </div>
          </div>
          {/* New Zealand Card */}
          <div className="PRvisa-country-card">
            <div className="PRvisa-country-header">
              <span className="PRvisa-country-flag">🇳🇿</span>
              <div className="PRvisa-country-title">
                <h2>New Zealand</h2>
                <p>Skilled Migrant PR</p>
              </div>
            </div>
            <div className="PRvisa-country-content">
              <div className="PRvisa-info-section">
                <h3>PR Requirements</h3>
                <ul className="PRvisa-requirements-list">
                  <li>160 points minimum</li>
                  <li>Job offer/skilled employment</li>
                  <li>Under 55 years age</li>
                  <li>English proficiency</li>
                  <li>Health requirements</li>
                  <li>Character requirements</li>
                  <li>Settlement funds proof</li>
                </ul>
              </div>
              <div className="PRvisa-info-section">
                <h3>PR Benefits</h3>
                <ul className="PRvisa-work-rights-list">
                  <li>Public healthcare access</li>
                  <li>Education benefits</li>
                  <li>Social security access</li>
                  <li>Path to citizenship (5 years)</li>
                </ul>
              </div>
              <div className="PRvisa-stats-box">
                <div className="stat-item">
                  <div className="stat-number">NZD 4,280</div>
                  <div className="stat-label">PR Fee</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">6-12 months</div>
                  <div className="stat-label">Processing Time</div>
                </div>
              </div>
              <div className="PRvisa-action-buttons">
                <a href="#" className="know-more-btn">
                  Know More
                </a>
              </div>
            </div>
          </div>
          {/* Ireland Card */}
          <div className="PRvisa-country-card">
            <div className="PRvisa-country-header">
              <span className="PRvisa-country-flag">🇮🇪</span>
              <div className="PRvisa-country-title">
                <h2>Ireland</h2>
                <p>Long Term Residency</p>
              </div>
            </div>
            <div className="PRvisa-country-content">
              <div className="PRvisa-info-section">
                <h3>PR Requirements</h3>
                <ul className="PRvisa-requirements-list">
                  <li>5 years legal residence</li>
                  <li>Continuous employment</li>
                  <li>Good character proof</li>
                  <li>Financial self-sufficiency</li>
                  <li>Private health insurance</li>
                  <li>English language ability</li>
                  <li>Integration evidence</li>
                </ul>
              </div>
              <div className="PRvisa-info-section">
                <h3>PR Benefits</h3>
                <ul className="PRvisa-work-rights-list">
                  <li>Unrestricted work rights</li>
                  <li>Social welfare access</li>
                  <li>Education benefits</li>
                  <li>Healthcare access</li>
                </ul>
              </div>
              <div className="PRvisa-stats-box">
                <div className="stat-item">
                  <div className="stat-number">€500</div>
                  <div className="stat-label">Application Fee</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">6-12 months</div>
                  <div className="stat-label">Processing Time</div>
                </div>
              </div>
              <div className="PRvisa-action-buttons">
                <a href="#" className="know-more-btn">
                  Know More
                </a>
              </div>
            </div>
          </div>
          {/* Germany Card */}
          <div className="PRvisa-country-card">
            <div className="PRvisa-country-header">
              <span className="PRvisa-country-flag">🇩🇪</span>
              <div className="PRvisa-country-title">
                <h2>Germany</h2>
                <p>Settlement Permit (Niederlassungserlaubnis)</p>
              </div>
            </div>
            <div className="PRvisa-country-content">
              <div className="PRvisa-info-section">
                <h3>PR Requirements</h3>
                <ul className="PRvisa-requirements-list">
                  <li>5 years residence permit</li>
                  <li>B1 German language</li>
                  <li>Integration course completion</li>
                  <li>Secure livelihood</li>
                  <li>Pension contributions</li>
                  <li>Clean criminal record</li>
                  <li>Adequate housing</li>
                </ul>
              </div>
              <div className="PRvisa-info-section">
                <h3>PR Benefits</h3>
                <ul className="PRvisa-work-rights-list">
                  <li>Unlimited work permit</li>
                  <li>Social security access</li>
                  <li>Healthcare benefits</li>
                  <li>Education access</li>
                </ul>
              </div>
              <div className="PRvisa-stats-box">
                <div className="stat-item">
                  <div className="stat-number">€250</div>
                  <div className="stat-label">Application Fee</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">3-6 months</div>
                  <div className="stat-label">Processing Time</div>
                </div>
              </div>
              <div className="PRvisa-action-buttons">
                <a href="#" className="know-more-btn">
                  Know More
                </a>
              </div>
            </div>
          </div>
          {/* Singapore Card */}
          <div className="PRvisa-country-card">
            <div className="PRvisa-country-header">
              <span className="PRvisa-country-flag">🇸🇬</span>
              <div className="PRvisa-country-title">
                <h2>Singapore</h2>
                <p>Permanent Residence Status</p>
              </div>
            </div>
            <div className="PRvisa-country-content">
              <div className="PRvisa-info-section">
                <h3>PR Requirements</h3>
                <ul className="PRvisa-requirements-list">
                  <li>Employment Pass holder</li>
                  <li>Stable income proof</li>
                  <li>Educational qualifications</li>
                  <li>Professional experience</li>
                  <li>Family ties (if any)</li>
                  <li>Integration potential</li>
                  <li>Economic contributions</li>
                </ul>
              </div>
              <div className="PRvisa-info-section">
                <h3>PR Benefits</h3>
                <ul className="PRvisa-work-rights-list">
                  <li>CPF contributions</li>
                  <li>Healthcare subsidies</li>
                  <li>Housing benefits</li>
                  <li>Education privileges</li>
                </ul>
              </div>
              <div className="PRvisa-stats-box">
                <div className="stat-item">
                  <div className="stat-number">SGD 100</div>
                  <div className="stat-label">Application Fee</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">6-12 months</div>
                  <div className="stat-label">Processing Time</div>
                </div>
              </div>
              <div className="PRvisa-action-buttons">
                <a href="#" className="know-more-btn">
                  Know More
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* France Card */}
        <div className="PRvisa-country-card">
          <div className="PRvisa-country-header">
            <span className="PRvisa-country-flag">🇫🇷</span>
            <div className="PRvisa-country-title">
              <h2>France</h2>
              <p>Carte de Résident (Permanent Residence)</p>
            </div>
          </div>
          <div className="PRvisa-country-content">
            <div className="PRvisa-info-section">
              <h3>PR Requirements</h3>
              <ul className="PRvisa-requirements-list">
                <li>5 years legal residence</li>
                <li>French language test (B1)</li>
                <li>Integration into French society</li>
                <li>Stable employment history</li>
                <li>Tax compliance proof</li>
                <li>No criminal record</li>
                <li>Sufficient income proof</li>
              </ul>
            </div>
            <div className="PRvisa-info-section">
              <h3>PR Benefits</h3>
              <ul className="PRvisa-work-rights-list">
                <li>10-year renewable permit</li>
                <li>Universal healthcare access</li>
                <li>Social security benefits</li>
                <li>Path to citizenship (5 years)</li>
              </ul>
            </div>
            <div className="PRvisa-stats-box">
              <div className="stat-item">
                <div className="stat-number">€269</div>
                <div className="stat-label">Card Fee</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">3-6 months</div>
                <div className="stat-label">Processing Time</div>
              </div>
            </div>
            <div className="PRvisa-action-buttons">
              <a href="#" className="know-more-btn">
                Know More
              </a>
            </div>
          </div>
        </div>
        {/* Dubai (UAE) Card */}
        <div className="PRvisa-country-card">
          <div className="PRvisa-country-header">
            <span className="PRvisa-country-flag">🇦🇪</span>
            <div className="PRvisa-country-title">
              <h2>Dubai (UAE)</h2>
              <p>Golden Visa / Long-Term Residence</p>
            </div>
          </div>
          <div className="PRvisa-country-content">
            <div className="PRvisa-info-section">
              <h3>PR Requirements</h3>
              <ul className="PRvisa-requirements-list">
                <li>Investment of AED 2M+ OR</li>
                <li>Specialized talents/skills OR</li>
                <li>Outstanding students OR</li>
                <li>Executive specialists</li>
                <li>Clean background check</li>
                <li>Valid health insurance</li>
                <li>Proof of accommodation</li>
              </ul>
            </div>
            <div className="PRvisa-info-section">
              <h3>PR Benefits</h3>
              <ul className="PRvisa-work-rights-list">
                <li>5-10 year renewable visa</li>
                <li>100% business ownership</li>
                <li>Family sponsorship rights</li>
                <li>No sponsor requirement</li>
              </ul>
            </div>
            <div className="PRvisa-stats-box">
              <div className="stat-item">
                <div className="stat-number">AED 2,800</div>
                <div className="stat-label">Visa Fee</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">30-45 days</div>
                <div className="stat-label">Processing Time</div>
              </div>
            </div>
            <div className="PRvisa-action-buttons">
              <a href="#" className="know-more-btn">
                Know More
              </a>
            </div>
          </div>
        </div>
        {/* WhatsApp Float Button */}
        <a
          href="https://wa.me/919390292090"
          className="PRvisa-whatsapp-float"
          target="_blank"
        >
          <i className="bi bi-whatsapp" />
        </a>
      </div>
      
    </>
  );
};

export default PRvisa;
