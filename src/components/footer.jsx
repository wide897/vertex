import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-grid">
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/currentlyworking">About us</Link>
              </li>
              <li>
                <a href="#destinations">Destinations</a>
              </li>
              <li>
                <a href="#services">Our Services</a>
              </li>
              <li>
                <a href="https://wa.me/918143256666">Contact Us</a>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Popular Destinations</h3>
            <ul className="footer-links">
              <li>
                <Link to="/destinations/USA">Study in USA</Link>
              </li>
              <li>
                <Link to="/destinations/UK">Study in UK</Link>
              </li>
              <li>
                <Link to="/destinations/Canada">Study in Canada</Link>
              </li>
              <li>
                <Link to="/destinations/Germany">Study in Singapore</Link>
              </li>
              <li>
                <Link to="/destinations/UK">Study in Germany</Link>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Visa Services</h3>
            <ul className="footer-links">
              <li>
                <Link to="/visa/studyvisa">Study Visa</Link>
              </li>
              <li>
                <Link to="/visa/workvisa">Work Visa</Link>
              </li>
              <li>
                <Link to="/visa/PRvisa">PR Visa</Link>
              </li>
              <li>
                <Link to="/visa/touristvisit">Tourist Visa</Link>
              </li>
              <li>
                <Link to="/visa/businessvisa">Business Visa</Link>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Contact Information</h3>
            <div className="footer-contact">
              <p>
                <i className="bi bi-geo-alt" /> Peda Parimi, Guntur District
              </p>
              <p>
                <i className="bi bi-telephone" /> +91 8143256666
              </p>
              <p>
                <i className="bi bi-envelope" /> info@vertexoverseas.in
              </p>
              <div className="footer-social">
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
        <div className="footer-bottom">
          <p>© 2024 Vertex Overseas Consultancy. All rights reserved.</p>
          <p>© Designed &amp; Developed by the Wide Support.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
