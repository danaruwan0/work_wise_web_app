import React from 'react';
import './styles.css';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

export default function Register() {
  
  const goRegister = useNavigate();

  return (
    <div className="container">
      <div className="login-card">
        <div className="logo">
          <div className="logo-word">
            <p className="logo-name">workWise</p>
          </div>
        </div>
        <br />
        <h1>Welcome</h1>
        <p className="subtitle">Create your account</p>

        <form className="login-form">
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input 
              type="text" 
              id="username" 
              placeholder="Enter your username" 
              className="input-field"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input 
              type="password" 
              id="password" 
              placeholder="Enter your password" 
              className="input-field"
            />
          </div>

          <div className="form-group">
            <label htmlFor="confirm-password">Confirm Password</label>
            <input 
              type="password" 
              id="confirm-password" 
              placeholder="Re-enter your password" 
              className="input-field"
            />
          </div>
          
          <button type="button" className="login-btn" >
            Sign Up
          </button>

        </form>

        <p className="signup-link">
          Already have an account? <Link to="/login">Sign in</Link>
        </p>


      </div>
    </div>
  );
}
