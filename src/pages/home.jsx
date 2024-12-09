import React, { useEffect } from "react";
import "../Css/home.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import usaicon from "../assets/USAICON.jpg";
import ukicon from "../assets/UKICON.jpg";
import Canadaicon from "../assets/Canadaicon.jpg";
import NewzealandICON from "../assets/Newzealand ICON.jpg";
import FranceICON from "../assets/France ICON.jpg";
import IrelandICON from "../assets/Ireland ICON.jpg";
import GermanyICON from "../assets/Germany ICON.jpg";
import SingaporeICON from "../assets/Singapore ICON.jpg";
import DubaiICON from "../assets/Dubai ICON.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "bootstrap-icons/font/bootstrap-icons.css";
import Navbar from "../components/navbar";
import { Link } from "react-router-dom";

const Home = () => {
  useEffect(() => {
    const loader = document.querySelector(".loader-container");
    const navbar = document.querySelector(".navbar");

    const hideLoader = setTimeout(() => {
      if (loader) loader.style.display = "none";
    }, 2000);

    const handleScroll = () => {
      if (navbar) {
        if (window.scrollY > 50) {
          navbar.classList.add("scrolled");
        } else {
          navbar.classList.remove("scrolled");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      clearTimeout(hideLoader);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    centerMode: false,
    arrows: true,
  };

  return (
    <div>
      {/* Loader */}
      <div className="loader-container">
        <div className="loader" />
        <div className="loader-text">Book your Destination with Vertex...</div>
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
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-box">
            <h1>Welcome to Vertex Overseas Consultancy</h1>
            <p>
              Your journey to a brighter future starts here. We provide expert
              guidance and support for studying abroad.
            </p>
            <a href="/bookform" className="cta-button">
              Book a call
            </a>
          </div>
        </div>
      </section>
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/919390292090"
        className="whatsapp-btn"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="bi bi-whatsapp" />
      </a>
      {/* Stats Section */}
      <div className="stats-container">
        <div className="stats-wrapper">
          <div className="stat-item">
            <p className="stat-number">15,000+</p>
            <p className="stat-label">Happy Students</p>
          </div>
          <div className="stat-item">
            <p className="stat-number">10+</p>
            <p className="stat-label">Study Destinations</p>
          </div>
          <div className="stat-item">
            <p className="stat-number">400+</p>
            <p className="stat-label">Partnerships</p>
          </div>
          <div className="stat-item">
            <p className="stat-number">100%</p>
            <p className="stat-label">Student Satisfaction</p>
          </div>
        </div>
      </div>
      {/* Destinations Section */}
      <div className="destinations-heading" id="destinations">
        <h2>Explore Destinations</h2>
        <p>Discover amazing cities for your study abroad adventure</p>
      </div>
      <div className="study-in-container">
        <div className="country-card">
          <div className="country-card-inner">
            <div className="country-card-front">
              <div className="country-image">
                <LazyLoadImage src={usaicon} alt="USA" />
              </div>
              <div className="country-info">
                <h3>USA</h3>
              </div>
            </div>
            <div className="country-card-back">
              <h3>USA</h3>
              <Link to="/bookform" className="back-btn">
                Consultation
              </Link>
              <Link to="/destinations/USA" className="back-btn">
                {" "}
                Know More
              </Link>
            </div>
          </div>
        </div>
        <div className="country-card">
          <div className="country-card-inner">
            <div className="country-card-front">
              <div className="country-image">
                <LazyLoadImage src={ukicon} alt="UK" />
              </div>
              <div className="country-info">
                <h3>UK</h3>
              </div>
            </div>
            <div className="country-card-back">
              <h3>UK</h3>
              <Link to="/bookform" className="back-btn">
                Consultation
              </Link>
              <Link to="/destinations/UK" className="back-btn">
                {" "}
                Know More
              </Link>
            </div>
          </div>
        </div>
        <div className="country-card">
          <div className="country-card-inner">
            <div className="country-card-front">
              <div className="country-image">
                <LazyLoadImage src={Canadaicon} />
              </div>
              <div className="country-info">
                <h3>Canada</h3>
              </div>
            </div>
            <div className="country-card-back">
              <h3>Canada</h3>
              <Link to="/bookform" className="back-btn">
                Consultation
              </Link>
              <Link to="/destinations/Canada" className="back-btn">
                {" "}
                Know More
              </Link>
            </div>
          </div>
        </div>
        <div className="country-card">
          <div className="country-card-inner">
            <div className="country-card-front">
              <div className="country-image">
                <LazyLoadImage src={NewzealandICON} alt="Newzealand" />
              </div>
              <div className="country-info">
                <h3>Newzealand</h3>
              </div>
            </div>
            <div className="country-card-back">
              <h3>Newzealand</h3>
              <Link to="/bookform" className="back-btn">
                Consultation
              </Link>
              <Link to="/destinations/Newzealand" className="back-btn">
                Know More
              </Link>
            </div>
          </div>
        </div>
        <div className="country-card">
          <div className="country-card-inner">
            <div className="country-card-front">
              <div className="country-image">
                <LazyLoadImage src={FranceICON} alt="France" />
              </div>
              <div className="country-info">
                <h3>France</h3>
              </div>
            </div>
            <div className="country-card-back">
              <h3>France</h3>
              <Link to="/bookform" className="back-btn">
                Consultation
              </Link>
              <Link to="/destinations/France" className="back-btn">
                {" "}
                Know More
              </Link>
            </div>
          </div>
        </div>
        <div className="country-card">
          <div className="country-card-inner">
            <div className="country-card-front">
              <div className="country-image">
                <LazyLoadImage src={IrelandICON} alt="Ireland" />
              </div>
              <div className="country-info">
                <h3>Ireland</h3>
              </div>
            </div>
            <div className="country-card-back">
              <h3>Ireland</h3>
              <Link to="/bookform" className="back-btn">
                Consultation
              </Link>
              <Link to="/destinations/Ireland" className="back-btn">
                {" "}
                Know More
              </Link>
            </div>
          </div>
        </div>
        <div className="country-card">
          <div className="country-card-inner">
            <div className="country-card-front">
              <div className="country-image">
                <LazyLoadImage src={GermanyICON} alt="Germany" />
              </div>
              <div className="country-info">
                <h3>Germany</h3>
              </div>
            </div>
            <div className="country-card-back">
              <h3>Germany</h3>
              <Link to="/bookform" className="back-btn">
                Consultation
              </Link>
              <Link to="/destinations/Germany" className="back-btn">
                {" "}
                Know More
              </Link>
            </div>
          </div>
        </div>
        <div className="country-card">
          <div className="country-card-inner">
            <div className="country-card-front">
              <div className="country-image">
                <LazyLoadImage src={SingaporeICON} alt="Singapore" />
              </div>
              <div className="country-info">
                <h3>Singapore</h3>
              </div>
            </div>
            <div className="country-card-back">
              <h3>Singapore</h3>
              <Link to="/bookform" className="back-btn">
                Consultation
              </Link>
              <Link to="/destinations/Singapore" className="back-btn">
                {" "}
                Know More
              </Link>
            </div>
          </div>
        </div>
        <div className="country-card">
          <div className="country-card-inner">
            <div className="country-card-front">
              <div className="country-image">
                <LazyLoadImage src={DubaiICON} alt="Dubai" />
              </div>
              <div className="country-info">
                <h3>Dubai</h3>
              </div>
            </div>
            <div className="country-card-back">
              <h3>Dubai</h3>
              <Link to="/bookform" className="back-btn">
                Consultation
              </Link>
              <Link to="/destinations/Dubai" className="back-btn">
                {" "}
                Know More
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Visa Services Section */}
      <section className="visa-services" id="services">
        <h2>Visa Services</h2>
        <div className="visa-carousel">
          <Slider {...settings}>
            <div className="visa-card">
              <div className="visa-icon">🎓</div>
              <div className="visa-info">
                <h3>Study Visa</h3>
                <p>Pursue your academic dreams abroad</p>
                <Link to="/visa/studyvisa" className="visa-btn">
                  {" "}
                  Learn More{" "}
                </Link>
              </div>
            </div>
            <div className="visa-card">
              <div className="visa-icon">💼</div>
              <div className="visa-info">
                <h3>Work Visa</h3>
                <p>Explore international career opportunities</p>
                {/* <Link> Learn More</Link> */}
                <Link to="/visa/workvisa" className="visa-btn">
                  {" "}
                  Learn More{" "}
                </Link>
              </div>
            </div>
            <div className="visa-card">
              <div className="visa-icon">✈️</div>
              <div className="visa-info">
                <h3>Visiting Visa</h3>
                <p>Short-term visits made easy</p>
                <Link to="/visa/visitvisa" className="visa-btn">
                  {" "}
                  Learn More{" "}
                </Link>
              </div>
            </div>
            <div className="visa-card">
              <div className="visa-icon">⚕️</div>
              <div className="visa-info">
                <h3>Medical Visa</h3>
                <p>Access quality healthcare services abroad</p>
                <Link to="/visa/medicalvisa" className="visa-btn">
                  {" "}
                  Learn More{" "}
                </Link>
              </div>
            </div>
            <div className="visa-card">
              <div className="visa-icon">🏖️</div>
              <div className="visa-info">
                <h3>Tourist Visa</h3>
                <p>Explore new destinations with ease</p>
                <Link to="/visa/touristvisit" className="visa-btn">
                  {" "}
                  Learn More{" "}
                </Link>
              </div>
            </div>
            <div className="visa-card">
              <div className="visa-icon">🏢</div>
              <div className="visa-info">
                <h3>Business Visa</h3>
                <p>Facilitate your international business ventures</p>
                <Link to="/visa/businessvisa" className="visa-btn">
                  {" "}
                  Learn More{" "}
                </Link>
              </div>
            </div>
            <div className="visa-card">
              <div className="visa-icon">🏠</div>
              <div className="visa-info">
                <h3>Permanent Resident Visa</h3>
                <p>Make a new country your home</p>
                <Link to="/visa/PRvisa" className="visa-btn">
                  {" "}
                  Learn More{" "}
                </Link>
              </div>
            </div>
            <div className="visa-card">
              <div className="visa-icon">👨‍👩‍👧‍👦</div>
              <div className="visa-info">
                <h3>Dependent/Family Visa</h3>
                <p>Reunite with your loved ones</p>
                <Link to="/visa/dependentvisa" className="visa-btn">
                  {" "}
                  Learn More{" "}
                </Link>
              </div>
            </div>
            <div className="visa-card">
              <div className="visa-icon">⏳</div>
              <div className="visa-info">
                <h3>Temporary Visa</h3>
                <p>Short-term solutions for various needs</p>
                <Link to="/visa/temporaryvisa" className="visa-btn">
                  {" "}
                  Learn More{" "}
                </Link>
              </div>
            </div>
          </Slider>
        </div>
      </section>
      {/* Other Services Section */}
      <section className="visa-services">
        <h2>Other Services</h2>
        <div className="visa-carousel">
          <Slider {...settings}>
            <div className="visa-card">
              <div className="visa-icon">🎯</div>
              <div className="visa-info">
                <h3>Career Counseling</h3>
                <p>Expert guidance for your career path</p>
                <Link className="visa-btn" to="/careercouselling">
                  Learn More
                </Link>
              </div>
            </div>
            <div className="visa-card">
              <div className="visa-icon">🎓</div>
              <div className="visa-info">
                <h3>University Admissions</h3>
                <p>Secure your place at top institutions</p>
                <Link className="visa-btn" to="/currentlyworking">
                  Learn More
                </Link>
              </div>
            </div>
            <div className="visa-card">
              <div className="visa-icon">💰</div>
              <div className="visa-info">
                <h3>Financial Assistance</h3>
                <p>Navigate funding and scholarship options</p>
                <Link className="visa-btn" to="/currentlyworking">
                  Learn More
                </Link>
              </div>
            </div>
            <div className="visa-card">
              <div className="visa-icon">✈️</div>
              <div className="visa-info">
                <h3>Pre &amp; Post Services</h3>
                <p>Support before and after arrival</p>
                <Link className="visa-btn" to="/currentlyworking">
                  Learn More
                </Link>
              </div>
            </div>
            <div className="visa-card">
              <div className="visa-icon">📄</div>
              <div className="visa-info">
                <h3>Documentation</h3>
                <p>Complete document assistance</p>
                <Link className="visa-btn" to="/currentlyworking">
                  Learn More
                </Link>
              </div>
            </div>
            <div className="visa-card">
              <div className="visa-icon">💼</div>
              <div className="visa-info">
                <h3>Job Placement</h3>
                <p>Find your dream job abroad</p>
                <Link className="visa-btn" to="/currentlyworking">
                  Learn More
                </Link>
              </div>
            </div>
            <div className="visa-card">
              <div className="visa-icon">🌟</div>
              <div className="visa-info">
                <h3>Internship Programs</h3>
                <p>Gain international work experience</p>
                <Link className="visa-btn" to="/currentlyworking">
                  Learn More
                </Link>
              </div>
              {/* Contact Section */}
              {/* <section id="contact" className="container my-5">
                <h2
                  className="text-center mb-4 section-title"
                  data-aos="fade-up"
                >
                  Contact Us
                </h2>
                <div className="row justify-content-center">
                  <div
                    className="col-md-8"
                    data-aos="fade-up"
                    data-aos-delay={100}
                  >
                    <form>
                      <div className="mb-3">
                        <label htmlFor="name" className="form-label">
                          Name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="email" className="form-label">
                          Email
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="phone" className="form-label">
                          Phone
                        </label>
                        <input type="tel" className="form-control" id="phone" />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="message" className="form-label">
                          Message
                        </label>
                        <textarea
                          className="form-control"
                          id="message"
                          rows={4}
                          required
                          defaultValue={""}
                        />
                      </div>
                      <button type="submit" className="btn btn-primary">
                        Send Message
                      </button>
                    </form>
                  </div>
                </div>
              </section> */}
            </div>
          </Slider>
        </div>
      </section>
      {/* Footer */}
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
    </div>
  );
};

export default Home;
