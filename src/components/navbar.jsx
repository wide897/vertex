import React, { useEffect, useState } from "react";
import "../Css/home.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const hideLoader = () => {
      const loader = document.querySelector(".loader-container");
      if (loader) {
        loader.style.display = "none";
      }
    };
    window.addEventListener("load", hideLoader);

    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("load", hideLoader);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""} navbar-expand-lg`}>
      <div className="container">
        <Link className="navbar-brand">
          <LazyLoadImage
            src="https://i.postimg.cc/8cwNVBDh/logo.jpg"
            alt="Vertex Overseas"
            effect="blur"
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Destinations
              </Link>

              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <Link className="dropdown-item" to="/destinations/USA">
                    USA
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/destinations/UK">
                    United Kingdom
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/destinations/Canada">
                    Canada
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/destinations/Newzealand">
                    New Zealand
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/destinations/Ireland">
                    Ireland
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/destinations/France">
                    France
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/destinations/Germany">
                    Germany
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/destinations/Singapore">
                    Singapore
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/destinations/Dubai">
                    Dubai
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Visa Services
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <Link className="dropdown-item" to="/visa/studyvisa">
                    Study Visa
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/visa/workvisa">
                    Work Visa
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/visa/visitvisa">
                    Visit Visa
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/visa/medicalvisa">
                    Medical Visa
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/visa/touristvisit">
                    Tourist Visa
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/visa/businessvisa">
                    Business Visa
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/visa/PRvisa">
                    Permanent Residency Visa
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/visa/dependentvisa">
                    Dependent/Family Visa
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/visa/temporaryvisa">
                    Temporary Visa
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Other Services
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <Link className="dropdown-item" to="/careercouselling">
                    Career Counseling and Guidance
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/currentlyworking">
                    University/College Admissions
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/currentlyworking">
                    Financial Assistance
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/currentlyworking">
                    Pre-Departure and Post-Arrival Services
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/currentlyworking">
                    Documentation Services
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/currentlyworking">
                    Job Placement Services
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/currentlyworking">
                    Internship/Volunteer Program Assistance
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                About Us
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <Link className="dropdown-item" to="/currentlyworking">
                    Our Mission
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/currentlyworking">
                    Meet the Team
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/currentlyworking">
                    Counseling
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://wa.me/919390292090">
                Contact Us
              </a>
            </li>
            <li className="nav-item">
              {/* <a className="nav-link" href="#Admin">
                Admin login
              </a> */}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
