const userService = require('../services/userService');

const createUser = (req, res) => {
  const { email, name } = req.body;

  if (!email || !name) {
    return res.status(400).json({ message: 'Email and name are required!' });
  }

  try {
    userService.createUser(email, name);
    res.status(201).json({ message: 'User created successfully!' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const validateUser = (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: 'Email is required!' });
  }

  try {
    userService.checkUser(email);
    res.status(200).json({ message: 'User is valid!' });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

module.exports = { createUser, validateUser };
