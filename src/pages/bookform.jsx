import React, { useState } from "react";
import "../Css/bookform.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Navbar from "../components/navbar";
import { db } from "../firebaseConfig";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { ToastContainer, toast } from "react-toastify";

const Bookform = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    college: "",
    location: "",
    passedOutYear: "",
    studyCountry: "",
    contacted: false,
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    let formErrors = {};
    if (!formData.name) formErrors.name = "Name is required";
    if (!formData.phone || !/^\d{10}$/.test(formData.phone))
      formErrors.phone = "Enter a valid 10-digit phone number";
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email))
      formErrors.email = "Enter a valid email address";
    if (!formData.college) formErrors.college = "College name is required";
    if (!formData.location) formErrors.location = "Location is required";
    if (
      !formData.passedOutYear ||
      formData.passedOutYear < 1900 ||
      formData.passedOutYear > 2099
    )
      formErrors.passedOutYear = "Enter a valid year between 1900 and 2099";
    if (!formData.studyCountry)
      formErrors.studyCountry = "Select a preferred country";

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    try {
      const dataToSubmit = {
        ...formData,
        date: Timestamp.now(),
      };

      const docRef = await addDoc(
        collection(db, "counsellingForms"),
        dataToSubmit
      );
      console.log("Document written with ID: ", docRef.id);

      toast.success("Form submitted successfully!", {
        position: "bottom-right",
      });

      setFormData({
        name: "",
        phone: "",
        email: "",
        university: "",
        location: "",
        passout: "",
        country: "",
        contacted: false,
      });
      setErrors({});
    } catch (error) {
      console.error("Error adding document: ", error);
      toast.error("Failed to submit the form. Please try again.", {
        position: "bottom-right",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="bookform-top-bar">
        <div className="container">
          <div className="bookform-top-bar-content">
            <div className="bookform-contact-info">
              <a href="tel:+918143256666" className="bookform-highlight">
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
            <div className="bookform-social-links">
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

      {/* Hero Section with Student Form */}
      <section className="bookform-hero" id="home">
        <div className="container">
          <div className="bookform-hero-content">
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <div className="student-form">
                  <h2>Start Your Journey</h2>
                  {successMessage && (
                    <p className="success-message">{successMessage}</p>
                  )}
                  <form onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label htmlFor="name">Name:</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                      />
                      {errors.name && <p className="error">{errors.name}</p>}
                    </div>
                    <div className="form-group">
                      <label htmlFor="phone">Phone Number:</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                      />
                      {errors.phone && <p className="error">{errors.phone}</p>}
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email:</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                      />
                      {errors.email && <p className="error">{errors.email}</p>}
                    </div>
                    <div className="form-group">
                      <label htmlFor="college">College Name:</label>
                      <input
                        type="text"
                        id="college"
                        name="college"
                        value={formData.college}
                        onChange={handleInputChange}
                      />
                      {errors.college && (
                        <p className="error">{errors.college}</p>
                      )}
                    </div>
                    <div className="form-group">
                      <label htmlFor="location">Resident Location:</label>
                      <input
                        type="text"
                        id="location"
                        name="location"
                        value={formData.location}
                        onChange={handleInputChange}
                      />
                      {errors.location && (
                        <p className="error">{errors.location}</p>
                      )}
                    </div>
                    <div className="form-group">
                      <label htmlFor="passedOutYear">Passed Out Year:</label>
                      <input
                        type="number"
                        id="passedOutYear"
                        name="passedOutYear"
                        value={formData.passedOutYear}
                        onChange={handleInputChange}
                        min={1900}
                        max={2099}
                      />
                      {errors.passedOutYear && (
                        <p className="error">{errors.passedOutYear}</p>
                      )}
                    </div>
                    <div className="form-group">
                      <label htmlFor="studyCountry">
                        Preferred Country to Study:
                      </label>
                      <select
                        id="studyCountry"
                        name="studyCountry"
                        value={formData.studyCountry}
                        onChange={handleInputChange}
                      >
                        <option value="">Select a country</option>
                        <option value="usa">United States</option>
                        <option value="uk">United Kingdom</option>
                        <option value="canada">Canada</option>
                        <option value="australia">Australia</option>
                        <option value="germany">Germany</option>
                        <option value="france">France</option>
                        <option value="japan">Japan</option>
                        <option value="other">Other</option>
                      </select>
                      {errors.studyCountry && (
                        <p className="error">{errors.studyCountry}</p>
                      )}
                    </div>
                    <button
                      type="submit"
                      className="cta-button"
                      disabled={loading}
                    >
                      {loading ? (
                        <>
                          <span
                            className="spinner-border spinner-border-sm me-2"
                            role="status"
                            aria-hidden="true"
                          ></span>
                          Submitting...
                        </>
                      ) : (
                        "Start My Journey"
                      )}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ToastContainer />
    </>
  );
};

export default Bookform;
