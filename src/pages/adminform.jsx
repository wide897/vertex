import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";
import "../Css/adminform.css";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Adminform = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log("Logged in user:", userCredential.user);
      toast.success("login successfully!", {
        position: "bottom-right",
      });
      navigate("/adminhome");
    } catch (err) {
      console.error("Login error:", err.message);
      toast.error("Invalid username or password.", {
        position: "bottom-right",
      });
    }
  };

  return (
    <>
      <div className="login-container" id="loginContainer">
        <div className="login-box">
          <h2>Admin Login</h2>
          <form id="loginForm" onSubmit={handleLogin}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            {error && (
              <div className="error-message" id="errorMessage">
                {error}
              </div>
            )}
            <button type="submit" className="login-btn">
              Login
            </button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Adminform;
