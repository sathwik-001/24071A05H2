import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Simulate login
    navigate('/booking');
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Welcome Back</h2>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label className="form-label" htmlFor="email">Email</label>
          <input type="email" id="email" className="form-input" required placeholder="you@example.com" />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="password">Password</label>
          <input type="password" id="password" className="form-input" required placeholder="••••••••" />
        </div>
        <button type="submit" className="btn-primary">Sign In</button>
      </form>
      <p style={{ marginTop: '1rem', textAlign: 'center', color: 'var(--text-muted)' }}>
        Don't have an account? <Link to="/register" style={{ color: 'var(--primary-color)', fontWeight: '500' }}>Register here</Link>
      </p>
      <div id="kite">
        <footer>24071A05H2 @internal 2025-26</footer>
      </div>
    </div>
  );
}

export default Login;
