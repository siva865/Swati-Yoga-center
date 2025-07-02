const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// 👉 Use your Gmail & App Password directly here
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'siranjeevisabapathi@gmail.com',
    pass: 'nomt zjrm fmym efru' // Go to https://myaccount.google.com/apppasswords
  }
});

app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, location, phone, message, subject } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ message: 'Required fields missing' });
    }

    await transporter.sendMail({
      from: email,
      to: 'siranjeevisabapathi@gmail.com',
      subject: subject || 'New Contact Form Submission',
      text: `
        Name: ${name}
        Email: ${email}
        Location: ${location}
        Phone: ${phone}
        Message: ${message}
      `
    });

    res.status(200).json({ message: 'Email sent' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to send message' });
  }
});

app.listen(5000, () => {
  console.log('Server running on port 5000');
});
