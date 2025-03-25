import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../Css/SignUp.css";

const SignUp = () => {
  const [user, setUser] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (user.password !== user.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/UserDetails/",
        {
          UserFullName: user.fullName,
          UserEmail: user.email,
          UserPassword: user.password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log(response.data);
      alert("Signup successful!");
      setUser({fullName: "",email: "",password: "",confirmPassword: "",})
    } catch (error) {
      console.error("Signup failed:", error);
      alert("Signup failed. Please try again.");
    }
  };

  return (
    <div className="signup-container d-flex justify-content-center align-items-center min-vh-100 bg-light">
      <div className="card shadow-lg p-4 rounded-4 border-0" style={{ width: "400px", backgroundColor: "#ffffff" }}>
        <h2 className="text-center text-primary fw-bold mb-3">Create an Account</h2>
        <p className="text-center text-muted">Sign up to get started</p>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={user.fullName}
              onChange={handleChange}
              className="form-control p-2 rounded-3"
              placeholder="Enter your full name"
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleChange}
              className="form-control p-2 rounded-3"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              name="password"
              value={user.password}
              onChange={handleChange}
              className="form-control p-2 rounded-3"
              placeholder="Enter your password"
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={user.confirmPassword}
              onChange={handleChange}
              className="form-control p-2 rounded-3"
              placeholder="Confirm your password"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100 py-2 rounded-3 fw-bold">
            Sign Up
          </button>
          <p className="text-center mt-3">
            Already signed up? <Link to="/login" className="text-decoration-none text-primary fw-semibold">Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;

