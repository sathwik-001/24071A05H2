import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="hero">
      <h1 className="hero-title">Explore the World with Us</h1>
      <p className="hero-subtitle">Book your dream vacation today and create unforgettable memories.</p>
      <Link to="/booking" className="hero-btn">Start Booking</Link>
      <div id="kite">
        <footer>24071A05H2 @internal 2025-26</footer>
      </div>
    </div>
  );
}

export default Home;
