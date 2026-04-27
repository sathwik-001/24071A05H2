import React from 'react';

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent successfully!');
    e.target.reset();
  };

  return (
    <div className="form-container" style={{ maxWidth: '600px' }}>
      <h2 className="form-title">Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label" htmlFor="name">Your Name</label>
          <input type="text" id="name" className="form-input" required placeholder="John Doe" />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="email">Your Email</label>
          <input type="email" id="email" className="form-input" required placeholder="you@example.com" />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="message">Message</label>
          <textarea id="message" className="form-input" required placeholder="How can we help you?" rows="5" style={{ resize: 'vertical' }}></textarea>
        </div>
        <button type="submit" className="btn-primary">Send Message</button>
      </form>
      <div id="kite">
        <footer>24071A05H2 @internal 2025-26</footer>
      </div>
    </div>
  );
}

export default Contact;
