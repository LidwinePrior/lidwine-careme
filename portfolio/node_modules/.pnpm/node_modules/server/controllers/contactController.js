//controllers/contactController.js
const { validationResult } = require('express-validator');
const Contact = require('../models/contactModel');
const nodemailer = require('nodemailer');
require('dotenv').config();

exports.createContact = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { name, firstname, email, phone, message } = req.body;

  try {
    const newContact = new Contact({
      name,
      firstname,
      email,
      phone,
      message
    });

    await newContact.save();

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS
        },
        tls: {
          rejectUnauthorized: false
        }
      });
      
      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER, 
        subject: 'Nouveau formulaire de contact soumis',
        text: `
          Name: ${name}
          Firstname: ${firstname}
          Email: ${email}
          Phone: ${phone}
          Message: ${message}`
      };
  
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log(error);
          return res.status(500).json({ error: 'Failed to send email' });
        } else {
          console.log('Email sent: ' + info.response);
          return res.status(201).json({ message: 'Contact saved and email sent successfully' });
        }
      });

  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};
