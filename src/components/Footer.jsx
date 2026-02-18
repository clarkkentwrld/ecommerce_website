import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa6';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        
        {/* TOP SECTION: LINKS GRID */}
        <div className="footer-grid">
          
          {/* Column 1: Brand / Main Actions */}
          <div className="footer-col brand-col">
            <h3 className="footer-heading">FRESH.</h3>
            <ul className="footer-links">
              <li><Link to="/plans" className="primary-link">FIND A PLAN</Link></li>
              <li><Link to="/menu" className="primary-link">VIEW MENU</Link></li>
              <li><Link to="/signup" className="primary-link">BECOME A MEMBER</Link></li>
              <li><Link to="/feedback" className="primary-link">SEND US FEEDBACK</Link></li>
            </ul>
          </div>

          {/* Column 2: Help */}
          <div className="footer-col">
            <h3 className="footer-heading">GET HELP</h3>
            <ul className="footer-links">
              <li><Link to="/order-status">Order Status</Link></li>
              <li><Link to="/delivery">Delivery</Link></li>
              <li><Link to="/returns">Returns</Link></li>
              <li><Link to="/payment-options">Payment Options</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>

          {/* Column 3: About */}
          <div className="footer-col">
            <h3 className="footer-heading">ABOUT FRESH</h3>
            <ul className="footer-links">
              <li><Link to="/news">News</Link></li>
              <li><Link to="/careers">Careers</Link></li>
              <li><Link to="/investors">Investors</Link></li>
              <li><Link to="/sustainability">Sustainability</Link></li>
            </ul>
          </div>

          {/* Column 4: Social Icons (Right Aligned) */}
          <div className="footer-col social-col">
            <div className="social-icons">
              <a href="#" className="social-icon"><FaFacebookF /></a>
              <a href="#" className="social-icon"><FaTwitter /></a>
              <a href="#" className="social-icon"><FaInstagram /></a>
              <a href="#" className="social-icon"><FaLinkedinIn /></a>
            </div>
          </div>

        </div>

        {/* BOTTOM SECTION: COPYRIGHT & LEGAL */}
        <div className="footer-bottom">
          <div className="copyright">
            <span className="location">Philippines</span>
            <span className="copy-text">© 2026 Fresh Inc. All rights reserved</span>
          </div>
          
          <ul className="legal-links">
            <li><Link to="/guides">Guides</Link></li>
            <li><Link to="/terms">Terms of Sale</Link></li>
            <li><Link to="/terms-use">Terms of Use</Link></li>
            <li><Link to="/privacy">Privacy Policy</Link></li>
          </ul>
        </div>

      </div>
    </footer>
  );
};

export default Footer;