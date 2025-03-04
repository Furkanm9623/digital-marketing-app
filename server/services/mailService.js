const nodemailer = require("nodemailer");
require("dotenv").config();

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.ADMIN_EMAIL,
        pass: process.env.EMAIL_PASS,
    },
});

/**
 * Function to send emails
 * @param {string} to - Receiver's email
 * @param {string} from - Sender's email
 * @param {string} subject - Email subject
 * @param {string} text - Email body
 */
const sendMail = async (to, from, subject, text) => {
    try {
        await transporter.sendMail({
            from: from, // The actual sender's email
            to: to, // Recipient email
            subject: subject,
            text: text,
            replyTo: from, // Admin's reply goes to the user
        });

        return { success: true, message: "Email sent successfully!" };
    } catch (error) {
        return { success: false, message: "Error sending email", error };
    }
};

module.exports = sendMail;
