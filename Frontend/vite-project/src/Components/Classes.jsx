import React, { useState } from 'react';

const Classes = () => {
  const [country, setCountry] = useState('');
  const [forms, setForms] = useState({});

  const handleCountryChange = (e) => {
    setCountry(e.target.value);
    setForms({}); // reset all forms on country switch
  };

  const handleInputChange = (type, field, value) => {
    setForms(prev => ({
      ...prev,
      [type]: {
        ...prev[type],
        [field]: value
      }
    }));
  };

  const handleSubmit = (type) => {
    const data = forms[type];
    if (!data?.name || !data?.email) return;

    const priceMap = {
      group: country === 'india' ? '₹3500/month' : '£40/month',
      private: country === 'india' ? '₹10000 for 12 sessions' : '£120 for 12 sessions / £15 per session',
      prenatal: country === 'india' ? '₹10000 for 12 sessions' : '£120 for 12 sessions / £15 per session',
    };

    const message = `Hello Swati, I am interested in the ${type} yoga classes.\nName: ${data.name}\nEmail: ${data.email}\nCountry: ${country}\nSelected Plan: ${priceMap[type]}`;
    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/447447850496?text=${encoded}`, '_blank');
  };

  const renderClassCard = (type, title, schedule, priceKey) => (
    <div className="class-card">
      <h3>{title}</h3>
      {schedule && <div className="schedule">{schedule}</div>}
      <p className="price" style={{ fontWeight: 'bold', color: country ? '#2c3e50' : '#888' }}>
        {country ? priceKey : 'Select country to view pricing'}
      </p>
      {country && (
        <div className="form" style={{ marginTop: '15px' }}>
          <input
            type="text"
            placeholder="Your Name"
            value={forms[type]?.name || ''}
            onChange={(e) => handleInputChange(type, 'name', e.target.value)}
            style={{
              width: '100%',
              padding: '8px',
              marginBottom: '10px',
              border: '1px solid #ddd',
              borderRadius: '4px',
              fontSize: '14px'
            }}
          />
          <input
            type="email"
            placeholder="Your Email"
            value={forms[type]?.email || ''}
            onChange={(e) => handleInputChange(type, 'email', e.target.value)}
            style={{
              width: '100%',
              padding: '8px',
              marginBottom: '10px',
              border: '1px solid #ddd',
              borderRadius: '4px',
              fontSize: '14px'
            }}
          />
          <button 
            onClick={() => handleSubmit(type)}
            style={{
              width: '100%',
              padding: '8px 12px',
              backgroundColor: '#25D366',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: 'bold'
            }}
          >
            Join via WhatsApp
          </button>
        </div>
      )}
    </div>
  );

  return (
    <section className="classes-section" id="classes">
      <div className="container">
        <p style={{ 
          textAlign: 'center', 
          marginBottom: '20px',
          color: '#555'
        }}>
          Please select your country to view accurate pricing & class schedule
        </p>
        <div className="country-selector" style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '10px',
          marginBottom: '20px'
        }}>
          <label style={{ fontWeight: 'bold' }}>Select Country:</label>
          <select 
            value={country} 
            onChange={handleCountryChange}
            style={{
              padding: '8px 12px',
              borderRadius: '4px',
              border: '1px solid #ddd',
              fontSize: '14px'
            }}
          >
            <option value="">-- Choose --</option>
            <option value="india">India 🇮🇳</option>
            <option value="other">Other 🌍</option>
          </select>
        </div>

        <div className="cards-wrapper">
          {renderClassCard(
            'group',
            'Group Classes',
            <>
              <p><strong>Asanas, Pranayama, Meditation</strong></p>
              <p>Morning: 6am BST / 10:30am IST</p>
              <p>Evening: 6pm IST / 1:30pm BST</p>
              <p>5 days a week</p>
            </>,
            country === 'india' ? '₹3500/month' : '£40/month'
          )}

          {renderClassCard(
            'private',
            '1-on-1 Classes',
            <>
              <p>Personalized Yoga Sessions</p>
              <p>3 days a week</p>
            </>,
            country === 'india' ? '₹10000 for 12 sessions' : '£120 for 12 sessions / £15 per session'
          )}

          {renderClassCard(
            'prenatal',
            'Pre & Post-Natal Yoga',
            <>
              <p>Specialized sessions for new and expecting mothers</p>
              <p>3 days a week</p>
            </>,
            country === 'india' ? '₹10000 for 12 sessions' : '£120 for 12 sessions / £15 per session'
          )}
        </div>
      </div>
    </section>
  );
};

export default Classes;