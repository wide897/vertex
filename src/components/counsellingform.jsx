import React, { useState } from "react";
import { db } from "../firebaseConfig";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import Counsellingphoto from "../assets/552711453.png";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Counsellingform = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    university: "",
    location: "",
    passout: "",
    country: "",
    contacted: false,
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
    }
    if (!formData.phone.trim() || !/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone number must be a valid 10-digit number.";
    }
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "A valid email is required.";
    }
    if (!formData.university.trim()) {
      newErrors.university = "College/University is required.";
    }
    if (!formData.location.trim()) {
      newErrors.location = "Resident location is required.";
    }
    if (!formData.passout.trim() || isNaN(formData.passout)) {
      newErrors.passout = "Passed Out Year must be a valid number.";
    }
    if (!formData.country.trim()) {
      newErrors.country = "Please select a country.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

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
      <div className="container my-5">
        <div className="row g-4 align-items-center">
          <div className="col-lg-6">
            <div className="form-container">
              <h2 className="mb-4">Book Free Counselling</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                  {errors.name && (
                    <div className="text-danger mt-1">{errors.name}</div>
                  )}
                </div>
                <div className="mb-3">
                  <label htmlFor="phone" className="form-label">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="form-control"
                    id="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                  {errors.phone && (
                    <div className="text-danger mt-1">{errors.phone}</div>
                  )}
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {errors.email && (
                    <div className="text-danger mt-1">{errors.email}</div>
                  )}
                </div>
                <div className="mb-3">
                  <label htmlFor="university" className="form-label">
                    College/University
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="university"
                    value={formData.university}
                    onChange={handleChange}
                  />
                  {errors.university && (
                    <div className="text-danger mt-1">{errors.university}</div>
                  )}
                </div>
                <div className="mb-3">
                  <label htmlFor="location" className="form-label">
                    Resident Location
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="location"
                    value={formData.location}
                    onChange={handleChange}
                  />
                  {errors.location && (
                    <div className="text-danger mt-1">{errors.location}</div>
                  )}
                </div>
                <div className="mb-3">
                  <label htmlFor="passout" className="form-label">
                    Passed Out Year
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="passout"
                    value={formData.passout}
                    onChange={handleChange}
                  />
                  {errors.passout && (
                    <div className="text-danger mt-1">{errors.passout}</div>
                  )}
                </div>
                <div className="mb-3">
                  <label htmlFor="country" className="form-label">
                    Select Country
                  </label>
                  <select
                    className="form-select"
                    id="country"
                    value={formData.country}
                    onChange={handleChange}
                  >
                    <option value="">Select your country</option>
                    <option value="canada">Canada</option>
                    <option value="usa">United States</option>
                    <option value="uk">United Kingdom</option>
                    <option value="aus">Australia</option>
                  </select>
                  {errors.country && (
                    <div className="text-danger mt-1">{errors.country}</div>
                  )}
                </div>
                <button type="submit" className="cta-button" disabled={loading}>
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
                    "Submit"
                  )}
                </button>
              </form>
            </div>
          </div>
          <div className="col-lg-6 d-none d-lg-block">
            <img
              src={Counsellingphoto}
              alt="Counselling Image"
              className="img-fluid rounded"
            />
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Counsellingform;
