// server/models/Complaint.js

const mongoose = require('mongoose');

const complaintSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  problemType: { type: String, required: true },
  description: { type: String, required: true },
  time: { type: Date, default: Date.now }
});

const Complaint = mongoose.model('Complaint', complaintSchema);

module.exports = Complaint;
