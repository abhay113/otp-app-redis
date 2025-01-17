const express = require('express');
const { generateOtp } = require('../controllers/otpController');

const router = express.Router();

router.post('/generate', generateOtp);

module.exports = router;
