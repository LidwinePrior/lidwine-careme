//routes/contactRoutes.js
const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const contactController = require('../controllers/contactController');

router.post(
  '/contact',
  [
    body('name').notEmpty().withMessage('Name is required'),
    body('firstname').notEmpty().withMessage('Firstname is required'),
    body('email').isEmail().withMessage('Enter a valid email'),
    body('phone').notEmpty().withMessage('Phone is required'),
    body('message').notEmpty().withMessage('Message is required')
  ],
  contactController.createContact
);

module.exports = router;
