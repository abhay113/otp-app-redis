const otpService = require('../services/otpService');

const generateOtp = async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: 'Email is required!' });
  }

  try {
    await otpService.generateAndSendOtp(email);
    res.status(200).json({ message: 'OTP sent successfully!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to generate OTP!', error: error.message });
  }
};

module.exports = { generateOtp };
