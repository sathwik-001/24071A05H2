import React from 'react';
import { useNavigate } from 'react-router-dom';

function Booking() {
  const navigate = useNavigate();

  const handleBooking = (e) => {
    e.preventDefault();
    navigate('/payment');
  };

  return (
    <div className="form-container" style={{ maxWidth: '500px' }}>
      <h2 className="form-title">Plan Your Trip</h2>
      <form onSubmit={handleBooking}>
        <div className="form-group">
          <label className="form-label" htmlFor="destination">Destination</label>
          <select id="destination" className="form-input" required>
            <option value="">Select a destination...</option>
            <option value="paris">Paris, France</option>
            <option value="tokyo">Tokyo, Japan</option>
            <option value="newyork">New York, USA</option>
            <option value="bali">Singapore, Indonesia</option>
          </select>
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="date">Travel Date</label>
          <input type="date" id="date" className="form-input" required />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="guests">Number of Guests</label>
          <input type="number" id="guests" min="1" max="10" className="form-input" required placeholder="1" />
        </div>
        <button type="submit" className="btn-primary">Proceed to Payment</button>
      </form>
      <div id="kite">
        <footer>24071A05H2 @internal 2025-26</footer>
      </div>
    </div>
  );
}

export default Booking;
