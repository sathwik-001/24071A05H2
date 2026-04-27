import React from 'react';
import { useNavigate } from 'react-router-dom';

function Payment() {
  const navigate = useNavigate();

  const handlePayment = (e) => {
    e.preventDefault();
    alert('Payment Successful! Your trip is booked.');
    navigate('/');
  };

  return (
    <div className="form-container" style={{ maxWidth: '500px' }}>
      <h2 className="form-title">Payment Details</h2>
      <form onSubmit={handlePayment}>
        <div className="form-group">
          <label className="form-label" htmlFor="cardName">Name on Card</label>
          <input type="text" id="cardName" className="form-input" required placeholder="John Doe" />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="cardNumber">Card Number</label>
          <input type="text" id="cardNumber" className="form-input" required placeholder="0000 0000 0000 0000" />
        </div>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <div className="form-group" style={{ flex: 1 }}>
            <label className="form-label" htmlFor="expiry">Expiry Date</label>
            <input type="text" id="expiry" className="form-input" required placeholder="MM/YY" />
          </div>
          <div className="form-group" style={{ flex: 1 }}>
            <label className="form-label" htmlFor="cvv">CVV</label>
            <input type="text" id="cvv" className="form-input" required placeholder="123" />
          </div>
        </div>
        <button type="submit" className="btn-primary">Confirm Payment</button>
      </form>
      <div id="kite">
        <footer>24071A05H2 @internal 2025-26</footer>
      </div>
    </div>
  );
}

export default Payment;
