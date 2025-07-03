import React, { useState } from 'react';

const Classes = () => {
  const [country, setCountry] = useState('');
  const [forms, setForms] = useState({});

  const handleCountryChange = (e) => {
    setCountry(e.target.value);
    setForms({});
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

  const sharedStyles = {
    card: {
      background: 'white',
      borderRadius: '15px',
      padding: '25px',
      boxShadow: '0 5px 20px rgba(0,0,0,0.1)',
      marginBottom: '30px'
    },
    title: {
      fontSize: '22px',
      fontWeight: '600',
      color: '#2c3e50',
      marginBottom: '10px'
    },
    sectionTitle: {
      fontSize: '26px',
      textAlign: 'center',
      fontWeight: 'bold',
      marginBottom: '30px',
      color: '#8F501B'
    },
    label: {
      fontWeight: 'bold'
    },
    input: {
      width: '100%',
      padding: '10px',
      border: '1px solid #ccc',
      borderRadius: '6px',
      fontSize: '14px',
      marginBottom: '12px'
    },
    button: {
      width: '100%',
      padding: '12px',
      backgroundColor: '#25D366',
      color: 'white',
      border: 'none',
      borderRadius: '6px',
      fontWeight: 'bold',
      fontSize: '15px',
      cursor: 'pointer'
    }
  };

  const renderClassCard = (type, title, descLines, schedule, price) => (
    <div style={sharedStyles.card}>
      <h3 style={sharedStyles.title}>{title}</h3>
      <div style={{ marginBottom: '10px' }}>
        {descLines.map((line, idx) => (
          <p key={idx} style={{ margin: '5px 0', color: '#444' }}>{line}</p>
        ))}
      </div>
      <div style={{ fontSize: '14px', color: '#666', marginBottom: '10px' }}>
        {schedule}
      </div>
      <p style={{ fontWeight: 'bold', marginBottom: '12px' }}>
        {country ? price : 'Select country to view pricing'}
      </p>
      {country && (
        <div>
          <input
            type="text"
            placeholder="Your Name"
            value={forms[type]?.name || ''}
            onChange={(e) => handleInputChange(type, 'name', e.target.value)}
            style={sharedStyles.input}
          />
          <input
            type="email"
            placeholder="Your Email"
            value={forms[type]?.email || ''}
            onChange={(e) => handleInputChange(type, 'email', e.target.value)}
            style={sharedStyles.input}
          />
          <button style={sharedStyles.button} onClick={() => handleSubmit(type)}>
            Join via WhatsApp
          </button>
        </div>
      )}
    </div>
  );

  return (
    <section style={{ padding: '50px 20px', background: '#f9f7f3' }} id="classes">
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <h2 style={sharedStyles.sectionTitle}>Explore Our Yoga Classes</h2>

        <p style={{ textAlign: 'center', color: '#666', marginBottom: '20px' }}>
          Choose your country to view correct pricing & session details.
        </p>

        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '12px',
          marginBottom: '40px'
        }}>
          <label style={sharedStyles.label}>Select Country:</label>
          <select
            value={country}
            onChange={handleCountryChange}
            style={{ padding: '10px', borderRadius: '6px', border: '1px solid #ccc' }}
          >
            <option value="">-- Choose --</option>
            <option value="india">India 🇮🇳</option>
            <option value="other">Other 🌍</option>
          </select>
        </div>

        {/* Group Class */}
        {renderClassCard(
          'group',
          'Group Yoga Classes',
          [
            "Perfect for all levels — beginner to advanced.",
            "Focus on flexibility, breath awareness, and inner calm.",
            "Includes Asanas, Pranayama, Meditation, and Chanting."
          ],
          <>
            <p><strong>Timing:</strong></p>
            <ul style={{ paddingLeft: '20px' }}>
              <li>Morning: 6am BST / 10:30am IST</li>
              <li>Evening: 6pm BST / 1:30pm IST</li>
              <li>5 days a week</li>
            </ul>
          </>,
          country === 'india' ? '₹3500/month' : '£40/month'
        )}

        {/* Private Class */}
        {renderClassCard(
          'private',
          '1-on-1 Personalized Yoga',
          [
            "Tailored sessions based on your needs and goals.",
            "Ideal for injury recovery, deeper focus, or flexible timings.",
            "Includes Meditation, Deep Breathing, and Relaxation."
          ],
          <>
            <p><strong>Schedule:</strong> 3 sessions/week, flexible timing</p>
          </>,
          country === 'india' ? '₹10000 for 12 sessions' : '£120 for 12 sessions / £15 per session'
        )}

        {/* Pre/Post Natal */}
        {renderClassCard(
          'prenatal',
          'Pre & Post-Natal Yoga',
          [
            "Safe, guided practices for mothers-to-be and new moms.",
            "Gentle Asanas and breathwork to support recovery and strength.",
            "Includes Relaxation, Breathing, and Pelvic floor focus."
          ],
          <>
            <p><strong>Schedule:</strong> 3 sessions/week</p>
          </>,
          country === 'india' ? '₹10000 for 12 sessions' : '£120 for 12 sessions / £15 per session'
        )}
      </div>
    </section>
  );
};

export default Classes;
