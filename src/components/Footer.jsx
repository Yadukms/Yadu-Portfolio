import React from 'react'
import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react'
import { LinkedinIcon } from './Icons'

export default function Footer() {
  return (
    <footer className="footer" id="contact-footer">
      <div className="container">
        {/* Top CTA Block */}
        <div className="footer-cta-section">
          <div>
            <div className="footer-label">LET'S CONNECT</div>
            <h2 className="footer-heading">
              Have a project<br />in mind?
            </h2>
            <p className="footer-subtext">
              I'm open to opportunities in web development, software testing, and technology-related roles. Let's build something useful together.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '2rem' }}>
            {/* Visual chevron accent from reference */}
            <div className="footer-arrow" aria-hidden="true">
              <svg width="84" height="84" viewBox="0 0 84 84" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 20L64 42L20 64" stroke="#1455F8" strokeWidth="8" strokeLinecap="square" strokeLinejoin="miter" />
              </svg>
            </div>
          </div>
        </div>

        {/* Contact info and links */}
        <div className="footer-bottom">
          <div className="footer-contact-list">
            <div className="footer-contact-item">
              <Mail className="footer-contact-icon" size={16} />
              <a href="mailto:yadums2003@gmail.com">yadums2003@gmail.com</a>
            </div>
            <div className="footer-contact-item">
              <Phone className="footer-contact-icon" size={16} />
              <a href="tel:+919778207311">+91 9778207311</a>
            </div>
            <div className="footer-contact-item">
              <MapPin className="footer-contact-icon" size={16} />
              <span>Kozhikode, Kerala, India</span>
            </div>
            <div className="footer-contact-item">
              <LinkedinIcon className="footer-contact-icon" size={16} />
              <a
                href="https://linkedin.com/in/yadu-krishna-m-s-849b92314/"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin.com/in/yadu-krishna-m-s-849b92314/
              </a>
            </div>
            <div style={{ marginTop: '0.75rem' }}>
              <a href="mailto:yadums2003@gmail.com" className="btn btn-dark">
                <span>Let's Talk</span>
                <ArrowUpRight size={15} />
              </a>
            </div>
          </div>

          <div className="footer-nav">
            <span className="mono" style={{ color: 'rgba(245,241,233,0.4)', marginBottom: '0.5rem' }}>NAVIGATION</span>
            <Link to="/about">About</Link>
            <Link to="/projects">Work & Projects</Link>
            <Link to="/experience">Experience</Link>
            <Link to="/skills">Skills & Tools</Link>
            <Link to="/resume">Resume (PDF)</Link>
            <Link to="/contact">Get in Touch</Link>
          </div>
        </div>

        {/* Copyright notice */}
        <div className="footer-copy">
          <div className="footer-copy-text">
            <strong>Yadu Krishna M S</strong> &nbsp;—&nbsp; © {new Date().getFullYear()} Yadu Krishna M. S. All rights reserved.
          </div>
          <div className="footer-copy-nav">
            <Link to="/about">About</Link>
            <Link to="/projects">Work</Link>
            <Link to="/experience">Skills</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
