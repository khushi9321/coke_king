import React from 'react';
import './Signup.css';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <div className="signin-page">
      <h2>Sign Up</h2>
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" placeholder="Enter your name" required />
        
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" placeholder="Enter your email" required />
        
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" placeholder="Create a password" required />
        
        <button type="submit">Sign Up</button>
         <div className="login-choice">
                <p>Already have an account? <Link to="/login">Login here</Link></p>
              </div>
      </form>
    </div>
  );
};

export default Signup;
