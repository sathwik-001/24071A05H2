import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Registration() {
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    // Simulate registration
    navigate('/login');
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Create an Account</h2>
      <form onSubmit={handleRegister}>
        <div className="form-group">
          <label className="form-label" htmlFor="name">Full Name</label>
          <input type="text" id="name" className="form-input" required placeholder="John Doe" />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="email">Email</label>
          <input type="email" id="email" className="form-input" required placeholder="you@example.com" />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="password">Password</label>
          <input type="password" id="password" className="form-input" required placeholder="••••••••" />
        </div>
        <button type="submit" className="btn-primary">Register</button>
      </form>
      <p style={{ marginTop: '1rem', textAlign: 'center', color: 'var(--text-muted)' }}>
        Already have an account? <Link to="/login" style={{ color: 'var(--primary-color)', fontWeight: '500' }}>Login here</Link>
      </p>
      <div id="kite">
        <footer>24071A05H2 @internal 2025-26</footer>
      </div>
    </div>
  );
}

export default Registration;
