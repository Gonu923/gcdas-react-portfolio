import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="contact-content">
        <h2>Contact Information</h2>
        <p>You can reach out to me through the following channels:</p>
        <ul className="contact-list">
          <li>
            <a href="https://www.linkedin.com/in/gonesh-web/" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </li>
          <li>
            <a href="https://github.com/Gonu923" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </li>
          <li>
            <a href="mailto:gonesh.chandra.das.cse@gmail.com">
              Email
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Contact;
