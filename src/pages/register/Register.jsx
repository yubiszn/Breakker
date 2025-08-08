import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Register.scss";

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [agreePrivacy, setAgreePrivacy] = useState(false);

  const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = "First Name required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last Name required";
    if (!validateEmail(formData.email)) newErrors.email = "Invalid email";
    if (formData.username.length < 3)
      newErrors.username = "Username must be 3+ chars";
    if (formData.password.length < 6)
      newErrors.password = "Password must be 6+ chars";
    if (!agreeTerms) newErrors.agreeTerms = "You must agree to Terms";
    if (!agreePrivacy) newErrors.agreePrivacy = "You must agree to Privacy";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    if (name === "agreeTerms") setAgreeTerms(checked);
    if (name === "agreePrivacy") setAgreePrivacy(checked);
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    console.log("Registering", formData);
    // Your API call here
  };

  return (
    <div className="Register">
      <div className="card">
        <div className="left">
          <h1>BREAKKER</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cum,
            alias totam numquam ipsa exercitationem dignissimos, error nam,
            consequatur.
          </p>
          <span>Do you have an account?</span>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>

        <div className="right">
          <h1 className="register-title">Sign up to stay connected!</h1>
          <form onSubmit={handleSubmit}>
            <div className="name-entry">
              <input
                type="text"
                placeholder="First Name"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
              />
              <input
                type="text"
                placeholder="Last Name"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>
            {errors.firstName && (
              <small className="error-message">{errors.firstName}</small>
            )}
            {errors.lastName && (
              <small className="error-message">{errors.lastName}</small>
            )}

            <input
              type="email"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <small className="error-message">{errors.email}</small>}

            <input
              type="text"
              placeholder="Username"
              name="username"
              value={formData.username}
              onChange={handleChange}
            />
            {errors.username && (
              <small className="error-message">{errors.username}</small>
            )}

            <input
              type="password"
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && (
              <small className="error-message">{errors.password}</small>
            )}

            <div className="checkboxes">
              <label className="terms-checkbox">
                <input
                  type="checkbox"
                  name="agreeTerms"
                  checked={agreeTerms}
                  onChange={handleCheckboxChange}
                />
                I agree to the{" "}
                <Link to="/terms" className="link">
                  Terms and Conditions
                </Link>
              </label>
              {errors.agreeTerms && (
                <small className="error-message">{errors.agreeTerms}</small>
              )}

              <label className="privacy-checkbox">
                <input
                  type="checkbox"
                  name="agreePrivacy"
                  checked={agreePrivacy}
                  onChange={handleCheckboxChange}
                />
                I agree to the{" "}
                <Link to="/privacy" className="link">
                  Privacy Policy
                </Link>
              </label>
              {errors.agreePrivacy && (
                <small className="error-message">{errors.agreePrivacy}</small>
              )}
            </div>

            <button type="submit">Register</button>

            <p className="login-redirect">
              Already have an account?{" "}
              <Link to="/login" className="link">
                Login
              </Link>{" "}
              instead
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
