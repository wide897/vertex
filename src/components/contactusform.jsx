import React, { useState } from "react";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { getApp } from "firebase/app";
import { toast, ToastContainer } from "react-toastify";
import { db } from "../firebaseConfig"; // Adjust the path based on your project structure

const Contactusform = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await addDoc(collection(db, "contactForms"), formData);
      toast.success("Form submitted successfully!", {
        position: "bottom-right",
      });
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      console.error("Error saving contact form: ", error);
      toast.error("Error adding document", {
        position: "bottom-right",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section id="contact" className="container my-5">
        <h2 className="text-center mb-4 section-title" data-aos="fade-up">
          Contact Us
        </h2>
        <div className="row justify-content-center">
          <div className="col-md-8" data-aos="fade-up" data-aos-delay={100}>
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
                  onChange={handleInputChange}
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
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="phone" className="form-label">
                  Phone
                </label>
                <input
                  type="tel"
                  className="form-control"
                  id="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                />
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
              {/* <button
                type="submit"
                className="btn btn-primary"
                disabled={loading}
              >
                {loading ? "Sending..." : ""}
              </button> */}
            </form>
          </div>
        </div>
      </section>
      <ToastContainer />
    </>
  );
};

export default Contactusform;
