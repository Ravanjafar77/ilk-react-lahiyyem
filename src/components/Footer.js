import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h3 className="footer-logo">oxcare</h3>
          <p className="footer-description">
            Eu sit proin amet quis malesuada vitae elit.
            Vel consectetur nibh quis ullamcorper quis.
            Quam enim tortor, id sed
          </p>
          <div className="social-icons">
            <a href="/" className="social-icon"><i className="fab fa-facebook-f"></i></a>
            <a href="/" className="social-icon"><i className="fab fa-linkedin-in"></i></a>
            <a href="/" className="social-icon"><i className="fab fa-instagram"></i></a>
            <a href="/" className="social-icon"><i className="fab fa-twitter"></i></a>
          </div>
        </div>

        <div className="footer-column">
          <h4 className="footer-title">Quick Links</h4>
          <ul className="footer-links">
            <li><button onClick={scrollToTop} className="footer-link-btn">Home</button></li>
            <li><Link to="/about" className="footer-link">About</Link></li>
            <li><Link to="/doctors" className="footer-link">Doctors</Link></li>
            <li><button onClick={() => scrollToSection('services')} className="footer-link-btn">Services</button></li>
            <li><Link to="/contact" className="footer-link">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4 className="footer-title">Services</h4>
          <ul className="footer-links">
            <li><Link to="/vaccination" className="footer-link">Vaccination</Link></li>
            <li><Link to="/ndd" className="footer-link">NDD</Link></li>
            <li><Link to="/prescription" className="footer-link">Filled Prescription As Is</Link></li>
            <li><Link to="/referral" className="footer-link">Patient Referral</Link></li>
            <li><Link to="/roofing" className="footer-link">Other roofing</Link></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4 className="footer-title">Location</h4>
          <address className="footer-address">
            2972 Westheimer Rd.<br />
            Santa Ana, Illinois<br />
            85486
          </address>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="copyright">©2022 All Right Reserved</p>
      </div>
    </footer>
  );
}

export default Footer;