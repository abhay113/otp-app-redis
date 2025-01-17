const redisClient = require('../models/redisModel');
const mailer = require('../utils/mailer');
const { generateOtpCode } = require('../utils/otp');

const generateAndSendOtp = async (email) => {
  const otp = generateOtpCode();

  // Send OTP via email
  await mailer.sendOtp(email, otp);
};

module.exports = { generateAndSendOtp };
