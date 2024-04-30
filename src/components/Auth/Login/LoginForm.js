import React, { useState, useContext } from "react";
import { AuthContext } from "../../../AuthContext";
import { useNavigate } from "react-router-dom";
import styles from "./LoginForm.module.css";

const LoginPage = () => {
  const { setUserData } = useContext(AuthContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
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
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }
    if (!formData.password) {
      newErrors.password = "Password is required";
    }

    // If there are errors, set them and prevent login
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      // Proceed with login process
      // Here you can make an API call to authenticate the user
      console.log("Form submitted:", formData);

      // Simulate successful login by setting userData
      setUserData({ email: formData.email });

      // Redirect to the homepage
      navigate("/dashboard");
    }
  };

  return (
    <div className={styles.div}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h2>Login To Crypto Dashboard</h2>
        <div>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className={styles.input}
          />
          {errors.email && <p className={styles.p}>{errors.email}</p>}
        </div>
        <div>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            className={styles.input}
          />
          {errors.password && <p className={styles.p}>{errors.password}</p>}
        </div>
        <button type="submit" className={styles.button}>
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
