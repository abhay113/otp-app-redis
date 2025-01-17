const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

const sendmail = (to, sub, msg) => {
  transporter.sendMail({
    to: to,
    subject: sub,
    html: msg
  })
  console.log("mail sent !");
}