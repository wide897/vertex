import React from "react";
import "../Css/Currentlyworking.css";
import Navbar from "../components/navbar";
import { Link } from "react-router-dom";
import { FaTools } from "react-icons/fa"; // Example for an icon

const Currentlyworking = () => {
  return (
    <>
      <Navbar />
      <section className="currently-working-hero">
        <div className="currently-working-hero-content">
          <div className="currently-working-hero-box">
            <FaTools className="working-icon" aria-hidden="true" size={50} />
            <h1>We are currently improving this page for you!</h1>
            <p>We’ll have it ready soon. Thank you for your patience.</p>
            <Link className="cta-button" to="/" aria-label="Book a call">
              Home
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Currentlyworking;
