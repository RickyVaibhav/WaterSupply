// server/routes/complaint.js

const express = require('express');
const router = express.Router();
const Complaint = require('../models/Complaint');

// Route to handle report problem form submission
router.post('/complaints', async (req, res) => {
  try {
    const { name, email, problemType, description } = req.body;

    // Create new complaint instance
    const newComplaint = new Complaint({
      name,
      email,
      problemType,
      description,
      time: new Date() // Add current timestamp
    });

    // Save the complaint to the database
    await newComplaint.save();

    res.status(201).json({ message: 'Complaint submitted successfully' });
  } catch (error) {
    console.error('Error submitting complaint:', error);
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router;
