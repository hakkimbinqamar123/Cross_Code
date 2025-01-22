import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // To handle navigation
import axios from "axios"; // For API calls
import logo from "../assets/images/crosscode_logo.png";

const Login = () => {
  const navigate = useNavigate(); // React Router's navigation hook
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const styles = {
    body: {
      margin: "0",
      padding: "0",
      fontFamily: "Arial, sans-serif",
      background: "linear-gradient(135deg, #000000, #1c1c1c)",
      color: "#ffffff",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
    },
    loginContainer: {
      backgroundColor: "#121212",
      padding: "40px",
      borderRadius: "10px",
      boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
      textAlign: "center",
      width: "450px",
    },
    logo: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginBottom: "20px",
    },
    logoImg: {
      width: "60px",
      height: "60px",
    },
    h2: {
      marginBottom: "20px",
      color: "#f3f3f3",
    },
    inputGroup: {
      marginBottom: "20px",
    },
    input: {
      width: "100%",
      padding: "10px",
      borderRadius: "5px",
      border: "1px solid #444",
      backgroundColor: "#222",
      color: "#fff",
    },
    loginButton: {
      backgroundColor: "#f39c12",
      color: "#ffffff",
      border: "none",
      borderRadius: "5px",
      padding: "10px 20px",
      fontSize: "16px",
      cursor: "pointer",
    },
    forgotPassword: {
      marginTop: "10px",
    },
    forgotPasswordLink: {
      color: "#f39c12",
      textDecoration: "none",
    },
    errorMessage: {
      color: "red",
      marginBottom: "10px",
    },
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setErrorMessage(""); // Clear any previous error message

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/login`,
        { email, password }
      );
      const { token } = response.data;

      // Store token in local storage
      localStorage.setItem("token", token);

      // Redirect to dashboard
      navigate("/dashboard");
    } catch (error) {
      if (error.response && error.response.status === 401) {
        setErrorMessage("Invalid email or password.");
      } else {
        setErrorMessage("An error occurred. Please try again.");
      }
    }
  };

  return (
    <div style={styles.body}>
      <div style={styles.loginContainer}>
        <div style={styles.logo}>
          <img src={logo} alt="CrossCode Logo" style={styles.logoImg} />
        </div>
        <h2 style={styles.h2}>Login</h2>
        {errorMessage && <div style={styles.errorMessage}>{errorMessage}</div>}
        <form onSubmit={handleLogin}>
          <div style={styles.inputGroup}>
            <input
              type="email"
              placeholder="Email"
              style={styles.input}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div style={styles.inputGroup}>
            <input
              type="password"
              placeholder="Password"
              style={styles.input}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            style={styles.loginButton}
          >
            Login
          </button>
          <div style={styles.forgotPassword}>
            <a href="#" style={styles.forgotPasswordLink}>
              Forgot Password?
            </a>
            <br />
            <a href="/" style={styles.forgotPasswordLink}>
              Home
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
