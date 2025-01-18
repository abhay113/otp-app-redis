const express = require('express');
const otpController = require('../controllers/otpController');
const router = express.Router();

router.post('/generate-otp', otpController.generateOtp);
router.post('/validate-otp', otpController.validateOtp);

module.exports = router;
