import React from 'react';
import './FooterPages.css';

const Contact = () => {
  return (
    <div className="footer-page-container">
      <h1>Contact Us</h1>
      
      <p>
        We are always here to help! Whether you have a question about setting up your profile, encountering an issue with a match request, or just want to provide feedback on how we can improve the platform, our support team is ready to assist you.
      </p>

      <div className="contact-info-box">
        <p><strong>Email Support:</strong> support@playpartner.example.com</p>
        <p><strong>Phone:</strong> +1 (555) 123-4567</p>
        <p><strong>Working Hours:</strong> Monday - Friday, 9:00 AM to 6:00 PM (EST)</p>
      </div>

      <h2>Send Us a Message</h2>
      <p>
        Currently, direct messaging through the platform is under development. Please use the email provided above to reach out to our internship support team directly. We aim to respond to all inquiries within 24 hours.
      </p>
    </div>
  );
};

export default Contact;
