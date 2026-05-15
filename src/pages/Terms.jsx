import React from 'react';
import './FooterPages.css';

const Terms = () => {
  return (
    <div className="footer-page-container">
      <h1>Terms of Service</h1>
      
      <h2>1. Respectful Behavior</h2>
      <p>
        PlayPartner is a community-first platform. All users are expected to treat each other with respect, both online when sending match requests, and offline when meeting for games. Any form of harassment, discrimination, or abusive behavior will result in immediate account termination.
      </p>

      <h2>2. Fair Use and Matching</h2>
      <p>
        Users should accurately represent their skill levels to ensure fair and enjoyable matches. Spamming match requests to users without the intent to play is strictly prohibited and degrades the platform experience.
      </p>

      <h2>3. Community Safety</h2>
      <p>
        While we strive to verify users, PlayPartner is not responsible for the safety of offline meetings. We highly recommend meeting new sports partners in public spaces, such as well-lit local grounds or recognized sports complexes, especially for your first match.
      </p>

      <h2>4. No Misuse</h2>
      <p>
        The platform is designed exclusively for finding sports partners. Misusing the platform for commercial advertising, dating, or any other non-sports related activities is a violation of these terms.
      </p>
    </div>
  );
};

export default Terms;
