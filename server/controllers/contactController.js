const sendMail = require("../services/mailService");

const submitContactForm = async (req, res) => {
  const { name, email, phone, service, message } = req.body;

  try {
    // Send Email to Admin
    const adminEmailResponse = await sendMail(
      `"Digiflow Solutions" <${process.env.ADMIN_EMAIL}>`,
      email,
      "New Contact Form Submission - Digiflow Solutions",
      `Hello Digiflow Admin,

      A new inquiry has been submitted through the contact form.

      📝 **Contact Details:**
      ------------------------------------
      🔸 **Name:** ${name}
      🔸 **Email:** ${email}
      🔸 **Phone:** ${phone}
      🔸 **Website Type:** ${service || 'N/A'}

      💬 **User Message:**
      ------------------------------------
      ${message}

      🚀 **Next Steps:**
      Please review the inquiry and follow up with the user at your earliest convenience.

      Best regards,
      **Digiflow Solutions Notification System**
      `
    );

    // Send Confirmation Email to User
    const userEmailResponse = await sendMail(
      email,
      `"Digiflow Solutions" <${process.env.ADMIN_EMAIL}>`,
      "Thank You for Contacting Digiflow Solutions!",
      `Hello ${name},

      Thank you for reaching out to **Digiflow Solutions**! We’ve received your message and will get back to you shortly.

      📝 **Your Inquiry Details:**
      ------------------------------------
      🔸 **Name:** ${name}
      🔸 **Email:** ${email}
      🔸 **Phone:** ${phone}
      🔸 **Website Type:** ${service || 'N/A'}

      💬 **Your Message:**
      ------------------------------------
      ${message}

      If you need immediate assistance, feel free to contact us directly at **${process.env.ADMIN_EMAIL}**.

      Best regards,
      **The Digiflow Solutions Team**
      📧 https://furkanm9623.github.io/digital-marketing-app/
      📞 +91 8584009623
      `
    );

    // Handle response
    if (adminEmailResponse.success && userEmailResponse.success) {
      res.status(200).json({
        success: true,
        message: "Emails sent successfully!",
      });
    } else {
      res.status(500).json({
        success: false,
        message: "Failed to send one or more emails",
        errors: {
          admin: adminEmailResponse.message || 'Admin email failed',
          user: userEmailResponse.message || 'User email failed',
        },
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "An error occurred while sending the contact form",
      error: error.message,
    });
  }
};

module.exports = { submitContactForm };


module.exports = { submitContactForm };
