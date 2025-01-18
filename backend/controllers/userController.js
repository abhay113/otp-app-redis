const userService = require('../services/userService');

const getUsers = async (req, res) => {
  try {
    const users = await userService.getUsers();
    res.status(200).json({ users });
  } catch (error) {
    console.error('Error fetching users:', error.message);
    res.status(500).json({ message: 'Failed to fetch users' });
  }
};

const createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: 'Name, email, and password are required!' });
    }

    const user = await userService.createUser({ name, email, password });
    res.status(201).json({ message: 'User created successfully!', user :user});
  } catch (error) {
    console.error('Error in createUser controller:', error.message);
    res.status(500).json({ message: 'Failed to create user!', error: error.message });
  }
};

const validateUser = async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: 'Email is required!' });
  }

  try {
    const user = await userService.getUserByEmail(email);
    res.status(200).json({ message: 'User is valid!', user: user });
    console.log(user);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

module.exports = { createUser, validateUser, getUsers };
