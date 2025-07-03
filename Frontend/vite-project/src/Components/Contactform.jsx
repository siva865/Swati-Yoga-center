import React, { useState } from 'react';


const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    location: '',
    phone: '',
    message: ''
  });

  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: null });

    try {
      const response = await fetch('https://swati-yoga-center-backend.onrender.com/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          to: 'swati19391@gmail.com',
          subject: 'New Contact Form Submission',
        }),
      });

      if (!response.ok) throw new Error('Failed to send message');

      setStatus({ loading: false, success: true, error: null });
      setFormData({ name: '', email: '', location: '', phone: '', message: '' });

      setTimeout(() => {
        setStatus({ loading: false, success: false, error: null });
      }, 4000);
    } catch (err) {
      setStatus({ loading: false, success: false, error: 'Failed to send message' });
    }
  };

  return (
    <section className="contact-section" id="contact">
      <div className="form-container">
        <h2>Contact Us</h2>

        <form onSubmit={handleSubmit}>
          <div className="form-grid">
            <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
            <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
          </div>
          <div className="form-grid">
            <input type="text" name="location" placeholder="Location" value={formData.location} onChange={handleChange} />
            <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} />
          </div>
          <textarea name="message" placeholder="Your message..." value={formData.message} onChange={handleChange} rows="5" required />

          <button type="submit" disabled={status.loading}>
            {status.loading ? 'Sending...' : 'Send Message'}
          </button>

          {status.success && <p className="success-message">✅ Message sent successfully!</p>}
          {status.error && <p className="error-message">❌ {status.error}</p>}
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
