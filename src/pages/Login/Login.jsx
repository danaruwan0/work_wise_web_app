import React from 'react';
import './styles.css';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

export default function Login() {

  const goLogin = useNavigate();
  return (
    <div className="container">
      <div className="login-card">
        <div className="logo">
          
          <div className="logo-word">
            <p className='logo-name'>workWise</p>
          </div>

        </div>
        <br />
        <h1>Welcome Back</h1>
        <p className="subtitle">Please enter your details</p>
        
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
            <a href="#" className="forgot-password">Forgot password?</a>
          </div>
          
          <button type="button" className="login-btn" >
            Sign In
          </button>

        </form>
        
        
        <p className="signup-link">
          Don't have an account? <Link to="/register">Sign up</Link>
        </p>


      </div>
    </div>
  );
}