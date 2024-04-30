import React, { useState, useContext } from "react";
import styles from "./SignUp.module.css";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../AuthContext";

const SignUp = () => {
  const navigate = useNavigate();
  const { setUserData } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    let newErrors = {};
    if (!formData.name) {
      newErrors.name = "Name is required";
    }
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters long";
    }
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    // If there are errors, set them and prevent signup
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      // Update userData with the form data
      setUserData(formData);

      // Proceed with signup process
      console.log("Form submitted:", formData);

      // Navigate to login page after form submission
      navigate("/login");
    }
  };

  return (
    <div className={styles.div}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.center}>
          <h4>Sign Up To Crypto Dashboard</h4>
        </div>
        <div>
          <label className={styles.label}>FullName:</label>
          <input
            placeholder="John Doe"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={styles.input}
          />
          {errors.name && <span className={styles.p}>{errors.name}</span>}{" "}
        </div>
        <div>
          <label>Email Address:</label>
          <input
            placeholder="johndoe@gmail.com"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={styles.input}
          />
          {errors.email && <span className={styles.p}>{errors.email}</span>}{" "}
        </div>
        <div>
          <label>Password:</label>
          <input
            placeholder="m#P52s@ap$V"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className={styles.input}
          />
          {errors.password && (
            <span className={styles.p}>{errors.password}</span>
          )}{" "}
        </div>
        <div>
          <label>Confirm Password:</label>
          <input
            placeholder="m#P52s@ap$V"
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            className={styles.input}
          />
          {errors.confirmPassword && (
            <span className={styles.p}>{errors.confirmPassword}</span>
          )}{" "}
        </div>
        <button type="submit" className={styles.button}>
          Sign Up
        </button>{" "}
      </form>
    </div>
  );
};

export default SignUp;
