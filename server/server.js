// server/server.js

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth');
const cors = require('cors');
const app = express();

// Enable CORS for all routes
app.use(cors());

// Your other middleware and route handlers...


// Load environment variables from .env file
dotenv.config();

// Initialize Express app

// Connect to MongoDB database
mongoose.connect("mongodb+srv://motogapp2019:F6xxRj9ljeyPSwWJ@cluster0.uqnmxpw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  //useCreateIndex: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.error('MongoDB connection error:', error.message);
  process.exit(1); // Exit process with failure
});

// Middleware to parse request body
app.use(bodyParser.json());

// Define API routes
app.use('/api/auth', authRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

