import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faXTwitter } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
          <div className="footer-column">
            <h3>Demo General Hospital Inc.</h3>
            <p className="address-link">
              <a 
                href="https://www.google.com/maps/search/?api=1&query=No.+68+Sampaloc+Extension,+North+Signal+Village,+Taguig+City,+Metro+Manila,+1630" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <span className="line">No. 68 Sampaloc Extension, North Signal Village,</span>
                <span className="line">Taguig City, Metro Manila, 1630</span>
              </a>
            </p>
          </div>
          <div className="footer-column contact-center">
            <div className="contact-inner">
              <div className="contact-row">
                <span className="contact-label">Email:</span>
                <a 
                  href="https://mail.google.com/mail/?view=cm&to=recuencomedical@gmail.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Demomedical@gmail.com
                </a>
              </div>
              <div className="contact-row">
              <span className="contact-label">Phone:</span>
              <div className="contact-values phone-numbers">
                <a href="tel:0288085950">(02) 8808-5950</a>
                <a href="tel:0288379769">(02) 8837-9769</a>
              </div>
            </div>
            </div>
          </div>
        <div className="footer-column footer-socials">
          <div className="social-inner">
            <div className="social-row">
              <FontAwesomeIcon icon={faFacebookF} className="social-icon"/>
              <a href="https://www.facebook.com/recuencogenhospital" target="_blank" rel="noopener noreferrer">
                Demo General Hospital Inc.
              </a>
            </div>
            <div className="social-row">
              <FontAwesomeIcon icon={faInstagram} className="social-icon"/>
              <a href="https://www.instagram.com/rghi.2025" target="_blank" rel="noopener noreferrer">
                Demo General Hospital Inc.
              </a>
            </div>
            <div className="social-row">
              <FontAwesomeIcon icon={faXTwitter} className="social-icon"/>
              <a href="https://x.com/RGHI2025" target="_blank" rel="noopener noreferrer">
                Demo General Hospital Inc.
              </a>
            </div>
          </div>
        </div>
        </div>

      <div className="footer-bottom">
        © Demo General Hospital | All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;