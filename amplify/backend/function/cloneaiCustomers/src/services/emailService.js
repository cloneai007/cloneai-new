const nodemailer = require("nodemailer");
const emailConfig = require("../config/emailConfig");

const SOURCE_EMAIL = "support@cloneai.io";

class EmailService {
  constructor() {
    this.transporter = nodemailer.createTransport(emailConfig);
  }

  sendEmail = async (customerEmail, subject, message) => {
    console.log("sending email to", customerEmail, message);
    try {
      const mailOptions = {
        from: SOURCE_EMAIL,
        to: customerEmail,
        subject: subject,
        text: message,
      };

      await this.transporter.sendMail(mailOptions);
      console.log("Email sent successfully:", message);
    } catch (error) {
      console.error("Failed to send email:", error);
    }
  };

  sendContactUsEmail = async (req, res) => {
    try {
      const { firstName, lastName, email, message } = req.body;

      if (!firstName || !lastName || !email || !message) {
        return res.status(400).json({ error: "All fields are required." });
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return res.status(400).json({ error: "Invalid email address." });
      }

      const mailOptions = {
        from: SOURCE_EMAIL,
        to: "nickandless0@gmail.com",
        replyTo: email,
        subject: "Contact Us Form Submission",
        text: `Name: ${firstName} ${lastName}\nEmail: ${email}\nMessage: ${message}`,
      };

      const mailOptionUser = {
        from: SOURCE_EMAIL,
        to: email,
        replyTo: email,
        subject: "NewsLetter subscribed succesfully",
        text: `Thank you for subscribing our Newsletter ${firstName} ${lastName}. We will keep you updated with the latest updates.`,
      };

      const response = await this.transporter.sendMail(mailOptions);
      await this.transporter.sendMail(mailOptionUser);
      console.log("Email sent successfully:", response);
      res.status(200).json({ message: "Email sent successfully!", response });
    } catch (error) {
      console.error("Failed to send email:", error);
      res
        .status(500)
        .json({ message: error?.message || "Failed to send email." });
    }
  };
}

module.exports = new EmailService();
