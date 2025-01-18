
const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8080;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 


const userRoutes = require('./routes/userRoutes');
const otpRoutes = require('./routes/otpRoutes');

app.use('/api/user', userRoutes);
app.use('/api/otp', otpRoutes);


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
