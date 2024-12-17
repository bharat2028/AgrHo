import './Signup.css';
import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Signup = () => {
  const navigate = useNavigate();
  const [signupData, setSignupData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignupData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  

    try {
      const response = await axios.post('http://localhost:8080/api/signup', signupData);
 // Show success message
      navigate('/land'); // Redirect to login page after successful signup
    } catch (error) {
      console.error('Error during signup:', error);
      alert('Error signing up!');
    }
  };
  return (
    <div className="s9g3p-container">
      <div className="l9g8o">
        <span className="a8g6r">Agr</span><span className="h5o2">Ho</span>
      </div>
      <form className="s3g6p-form" >
        <h2>Create Your Account</h2>
        <div className="i7n2p-group">
          <label htmlFor="name">Name</label>
          <input type="text"
          name="name"
          value={signupData.name}
          onChange={handleChange}
          placeholder="Enter your name"
          required/>
        </div>
        <div className="i7n2p-group">
          <label htmlFor="email">Email</label>
          <input type="email"
          name="email"
          value={signupData.email}
          onChange={handleChange}
          placeholder="Enter your email"
          required />
        </div>
        <div className="i7n2p-group">
          <label htmlFor="password">Password</label>
          <input type="password"
          name="password"
          value={signupData.password}
          onChange={handleChange}
          placeholder="Enter your password"
          required/>
        </div>
        <button type="submit" className="s9g8p-button" onClick={handleSubmit}>Sign Up</button>
        <p className="l8n3g-text">
          Already have an account? <a href="/">Log in</a>
        </p>
      </form>
    </div>
  );
};

export default Signup;
