import React from 'react';
import './FooterPages.css';

const PrivacyPolicy = () => {
  return (
    <div className="footer-page-container">
      <h1>Privacy Policy</h1>
      
      <p>Last updated: {new Date().toLocaleDateString()}</p>

      <h2>1. User Data Safety</h2>
      <p>
        At PlayPartner, we prioritize your data safety. The information you provide—such as your name, preferred sports, and location—is used exclusively to match you with nearby players. We do not sell your personal data to third parties.
      </p>

      <h2>2. Profile Privacy</h2>
      <p>
        Your profile information is visible to other registered users of the platform to facilitate match requests. You have full control over the skill level, availability, and location data you choose to share.
      </p>

      <h2>3. Responsible Platform Usage</h2>
      <p>
        We track basic platform analytics and match request data (currently simulated locally for this MVP phase) to improve our matching algorithms and platform performance. By using PlayPartner, you agree to this standard data processing.
      </p>

      <h2>4. Data Storage</h2>
      <p>
        For the purpose of this frontend demonstration, your data is stored locally in your browser's LocalStorage. Clearing your browser data will result in the loss of your profile and match history.
      </p>
    </div>
  );
};

export default PrivacyPolicy;
