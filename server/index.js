const express = require('express');
const cors = require('cors');
const { google } = require('googleapis');
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config({ path: path.join(__dirname, '.env') });

const app = express();
app.use(cors({
  origin: ['http://localhost:5173', 'http://127.0.0.1:5173'],
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());

// Request logging to help debug
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
  next();
});

const PORT = process.env.PORT || 5001;

// Google Sheets Configuration
const auth = new google.auth.GoogleAuth({
  keyFile: path.join(__dirname, 'credentials.json'),
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

const sheets = google.sheets({ version: 'v4', auth });

// Nodemailer Configuration
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

app.post('/api/bookings', async (req, res) => {
  const { name, phone, service, brand, date, time, address } = req.body;

  try {
    // 1. Append to Google Sheets
    const spreadsheetId = process.env.SPREADSHEET_ID;
    const range = 'Sheet1!A:H';
    const values = [
      [new Date().toLocaleString(), name, phone, service, brand || 'N/A', date || 'N/A', time || 'N/A', address || 'N/A']
    ];

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range,
      valueInputOption: 'RAW',
      requestBody: { values },
    });

    // 2. Send Notification Email
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.NOTIFICATION_EMAIL,
      subject: `New Customer Request - ${service}`,
      text: `
        A new service request has been received:

        Customer Name: ${name}
        Phone Number: ${phone}
        Service Type: ${service}
        Appliance Brand: ${brand || 'N/A'}
        Preferred Date: ${date || 'N/A'}
        Preferred Time: ${time || 'N/A'}
        Address: ${address || 'N/A'}

        Timestamp: ${new Date().toLocaleString()}
      `,
      html: `
        <h3>New Customer Service Request</h3>
        <table border="1" cellpadding="10" style="border-collapse: collapse;">
          <tr><td><strong>Customer Name</strong></td><td>${name}</td></tr>
          <tr><td><strong>Phone Number</strong></td><td>${phone}</td></tr>
          <tr><td><strong>Service Type</strong></td><td>${service}</td></tr>
          <tr><td><strong>Appliance Brand</strong></td><td>${brand || 'N/A'}</td></tr>
          <tr><td><strong>Preferred Date</strong></td><td>${date || 'N/A'}</td></tr>
          <tr><td><strong>Preferred Time</strong></td><td>${time || 'N/A'}</td></tr>
          <tr><td><strong>Address</strong></td><td>${address || 'N/A'}</td></tr>
          <tr><td><strong>Timestamp</strong></td><td>${new Date().toLocaleString()}</td></tr>
        </table>
      `,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ success: true, message: 'Booking saved and notification sent' });
  } catch (error) {
    console.error('Error processing booking:', error);
    res.status(500).json({ success: false, message: 'Internal Server Error', error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
