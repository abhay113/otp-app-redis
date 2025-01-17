// const express = require("express");
// const env = require("dotenv");
// const apiRoute = require("./routes/route");

// env.config();
// const app = express();
// const PORT = process.env.PORT;
// app.use(express.json());

// app.use("/api", apiRoute);

// app.get("/", (req, res) => {
//   res.send("Hello, world!");
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });



const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8080;

// Middleware
app.use(bodyParser.json());

// Routes
const userRoutes = require('./routes/userRoutes');
const otpRoutes = require('./routes/otpRoutes');

app.use('/api/user', userRoutes);
app.use('/api/otp', otpRoutes);

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
