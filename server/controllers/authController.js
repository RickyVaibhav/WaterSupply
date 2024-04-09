// server/controllers/authController.js

const bcrypt = require('bcryptjs');
const User = require('../models/User');

// Signup controller function
const signup = async (req, res) => {
  const { username, email, password, role } = req.body;

  try {
    // Check if the email is already registered
    let user = await User.findOne({ email });

    if (user) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user instance
    user = new User({
      username,
      email,
      password: hashedPassword,
      role
    });

    // Save the user to the database
    await user.save();

    // Return success response
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: 'Server Error' });
  }
};

module.exports = { signup };

