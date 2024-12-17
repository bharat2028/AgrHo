import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const Login = () => {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/api/login', loginData);
       // Show success message
      navigate('/land'); // Redirect to the landing page after successful login
    } catch (error) {
      console.error('Error during login:', error);
      alert('Invalid email or password!');
    }
  };
  return (
    <div className="login-container">
      <div className="image-section"></div>
      <div className="form-section">
        <div className="logo">
          <span className="agr">Agr</span><span className="ho">Ho</span>
        </div>
        <div className="form-content">
          <form className="login-form"  >
            <h2>Welcome Back!</h2>
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input  type="email"
              name="email"
              value={loginData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required/>
            </div>
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input type="password"
              name="password"
              value={loginData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              required/>
            </div>
            <button type="submit" className="login-button" onClick={handleSubmit}>Login</button>
            <p className="signup-text">
              Don't have an account? <a href="/up">Sign up</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
