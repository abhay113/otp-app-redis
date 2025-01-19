const redisClient = require('../models/redisModel');
const mailer = require('../utils/mailer');
const { generateOtpCode } = require('../utils/otp');

exports.generateAndSendOtp = async (email) => {
  const otp = generateOtpCode();

  // Store OTP in Redis with 5-minute expiration
  await redisClient.set(email, otp, 'EX', 300);

  // Send OTP via email
  await mailer.sendMail(email, 'OTP for verification', `<p>Your OTP is: <strong>${otp}</strong></p>`);

  return otp;
};

exports.validateOtp = async (email, otp) => {
  const storedOtp = await redisClient.get(email);
  if (!storedOtp) throw new Error('OTP expired or not found');
  if (storedOtp !== otp) throw new Error('Invalid OTP');
  return true;
};
