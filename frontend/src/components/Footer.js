import React from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Instagram, 
  Linkedin,
  MessageSquare,
  ArrowRight,
  Heart
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Process", href: "#process" },
    { name: "Contact", href: "#contact" }
  ];

  const services = [
    { name: "Amazon Management", href: "#amazon" },
    { name: "Flipkart Management", href: "#flipkart" },
    { name: "Meesho Management", href: "#meesho" },
    { name: "Brand Development", href: "#branding" },
    { name: "Account Recovery", href: "#recovery" }
  ];

  const socialLinks = [
    { 
      name: "WhatsApp", 
      icon: <MessageSquare size={20} />, 
      href: "https://wa.me/917802077444",
      color: "#25D366"
    },
    { 
      name: "Instagram", 
      icon: <Instagram size={20} />, 
      href: "https://instagram.com/a2zaaradhya",
      color: "#E4405F"
    },
    { 
      name: "Facebook", 
      icon: <Facebook size={20} />, 
      href: "https://facebook.com/a2zaaradhya",
      color: "#1877F2"
    },
    { 
      name: "LinkedIn", 
      icon: <Linkedin size={20} />, 
      href: "https://linkedin.com/company/a2zaaradhya",
      color: "#0A66C2"
    }
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Company Info Section */}
          <div className="footer-section company-info">
            <div className="company-logo mb-6">
              <img 
                src="https://customer-assets.emergentagent.com/job_onlinesuccess/artifacts/6ysexw8h_Screenshot%202025-09-06%20143300.png" 
                alt="A2Z Aaradhya Logo" 
                className="footer-logo"
              />
            </div>
            
            <p className="company-description body-md mb-6">
              Your trusted partner for Amazon, Flipkart & Meesho growth. With 8+ years of 
              experience, we make online selling simple, scalable & successful.
            </p>
            
            <div className="company-tagline">
              <h4 className="tagline-text">
                "Making Online Selling Simple, Scalable & Successful."
              </h4>
            </div>
            
            <div className="contact-info mt-6">
              <div className="contact-item">
                <Phone size={16} />
                <span>+91 78020 77444</span>
              </div>
              <div className="contact-item">
                <Mail size={16} />
                <span>a2zaaradhya895@gmail.com</span>
              </div>
              <div className="contact-item">
                <MapPin size={16} />
                <span>Surat, Gujarat, India</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h3 className="footer-title">Quick Links</h3>
            <ul className="footer-links">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="footer-link">
                    <ArrowRight size={14} />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="footer-section">
            <h3 className="footer-title">Our Services</h3>
            <ul className="footer-links">
              {services.map((service, index) => (
                <li key={index}>
                  <a href={service.href} className="footer-link">
                    <ArrowRight size={14} />
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Office Locations */}
          <div className="footer-section">
            <h3 className="footer-title">Office Locations</h3>
            <div className="office-locations">
              <div className="location">
                <h4 className="location-title">Head Office - Simada, Surat</h4>
                <p className="location-details">144, 1st Floor, Pramukh Park Soc, Opp. Royal Plaza, Bapa Sitaram Chowk, Simada, Surat – 395010</p>
              </div>
              <div className="location">
                <h4 className="location-title">Other Locations</h4>
                <p className="location-details">Katargam • Bhatar • Rajkot • Ahmedabad • Delhi</p>
              </div>
            </div>
            
            <div className="business-hours mt-4">
              <h4 className="hours-title">Business Hours</h4>
              <p className="hours-details">
                Mon – Sat: 9:00 AM – 6:30 PM<br />
                Sunday: Closed
              </p>
            </div>
          </div>
        </div>

        {/* Social Media & Newsletter */}
        <div className="footer-middle">
          <div className="social-section">
            <h3 className="social-title">Stay Connected</h3>
            <p className="social-description">
              Follow us on social media for the latest updates and e-commerce tips
            </p>
            <div className="social-links">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  style={{ '--hover-color': social.color }}
                >
                  {social.icon}
                  <span>{social.name}</span>
                </a>
              ))}
            </div>
          </div>
          
          <div className="newsletter-section">
            <h3 className="newsletter-title">Get E-commerce Insights</h3>
            <p className="newsletter-description">
              Subscribe to receive the latest tips, trends, and success stories
            </p>
            <div className="newsletter-form">
              <input 
                type="email" 
                placeholder="Enter your email address"
                className="newsletter-input"
              />
              <button className="newsletter-btn">
                Subscribe
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <div className="copyright">
              <p>
                © {currentYear} A2Z Aaradhya. All rights reserved. Made with{' '}
                <Heart size={16} className="heart-icon" /> in India.
              </p>
            </div>
            
            <div className="footer-legal">
              <a href="#privacy" className="legal-link">Privacy Policy</a>
              <span className="separator">•</span>
              <a href="#terms" className="legal-link">Terms of Service</a>
              <span className="separator">•</span>
              <a href="#refund" className="legal-link">Refund Policy</a>
            </div>
          </div>
          
          <div className="achievement-banner">
            <div className="achievement-stats">
              <div className="achievement-stat">
                <span className="stat-number">8+</span>
                <span className="stat-label">Years</span>
              </div>
              <div className="achievement-stat">
                <span className="stat-number">1000+</span>
                <span className="stat-label">Clients</span>
              </div>
              <div className="achievement-stat">
                <span className="stat-number">22CR+</span>
                <span className="stat-label">Revenue</span>
              </div>
              <div className="achievement-stat">
                <span className="stat-number">100+</span>
                <span className="stat-label">Recoveries</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .footer {
          background: linear-gradient(135deg, var(--bg-secondary) 0%, var(--bg-tertiary) 100%);
          border-top: 2px solid var(--border-subtle);
          padding: 4rem 0 2rem;
          margin-top: 6rem;
          position: relative;
          overflow: hidden;
        }
        
        .footer::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(ellipse at top center, rgba(88, 197, 198, 0.03) 0%, transparent 60%);
          pointer-events: none;
        }
        
        .footer-content {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1.5fr;
          gap: 3rem;
          margin-bottom: 3rem;
          position: relative;
          z-index: 1;
        }
        
        .footer-section {
          display: flex;
          flex-direction: column;
        }
        
        .company-info {
          max-width: 400px;
        }
        
        .footer-logo {
          width: 150px;
          height: auto;
          filter: drop-shadow(0 2px 8px rgba(88, 197, 198, 0.2));
        }
        
        .company-description {
          color: var(--text-secondary);
          line-height: 1.6;
        }
        
        .company-tagline {
          background: rgba(88, 197, 198, 0.1);
          border-left: 4px solid var(--accent-primary);
          padding: 1rem;
          border-radius: 8px;
        }
        
        .tagline-text {
          color: var(--accent-primary);
          font-size: 1rem;
          font-weight: 500;
          font-style: italic;
          margin: 0;
        }
        
        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        
        .contact-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          color: var(--text-secondary);
          font-size: 0.875rem;
        }
        
        .contact-item svg {
          color: var(--accent-primary);
          flex-shrink: 0;
        }
        
        .footer-title {
          color: var(--text-primary);
          font-size: 1.125rem;
          font-weight: 600;
          margin-bottom: 1.5rem;
          position: relative;
          padding-bottom: 0.5rem;
        }
        
        .footer-title::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 30px;
          height: 2px;
          background: var(--accent-primary);
        }
        
        .footer-links {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        
        .footer-link {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--text-secondary);
          text-decoration: none;
          font-size: 0.875rem;
          transition: all 0.3s ease;
          padding: 0.25rem 0;
        }
        
        .footer-link:hover {
          color: var(--accent-primary);
          transform: translateX(4px);
        }
        
        .footer-link svg {
          transition: all 0.3s ease;
          opacity: 0;
        }
        
        .footer-link:hover svg {
          opacity: 1;
        }
        
        .location {
          margin-bottom: 1rem;
        }
        
        .location-title,
        .hours-title {
          color: var(--text-primary);
          font-size: 0.875rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
        }
        
        .location-details,
        .hours-details {
          color: var(--text-secondary);
          font-size: 0.875rem;
          line-height: 1.5;
        }
        
        .footer-middle {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          padding: 2rem 0;
          border-top: 1px solid var(--border-subtle);
          border-bottom: 1px solid var(--border-subtle);
          margin-bottom: 2rem;
          position: relative;
          z-index: 1;
        }
        
        .social-title,
        .newsletter-title {
          color: var(--text-primary);
          font-size: 1.125rem;
          font-weight: 600;
          margin-bottom: 0.75rem;
        }
        
        .social-description,
        .newsletter-description {
          color: var(--text-secondary);
          font-size: 0.875rem;
          margin-bottom: 1.5rem;
        }
        
        .social-links {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }
        
        .social-link {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1rem;
          background: var(--bg-primary);
          border: 1px solid var(--border-subtle);
          border-radius: 8px;
          color: var(--text-secondary);
          text-decoration: none;
          font-size: 0.875rem;
          transition: all 0.3s ease;
        }
        
        .social-link:hover {
          background: var(--hover-color, var(--accent-primary));
          color: var(--bg-primary);
          border-color: var(--hover-color, var(--accent-primary));
          transform: translateY(-2px);
        }
        
        .newsletter-form {
          display: flex;
          gap: 0.75rem;
        }
        
        .newsletter-input {
          flex: 1;
          padding: 0.75rem;
          background: var(--bg-primary);
          border: 2px solid var(--border-primary);
          border-radius: 8px;
          color: var(--text-primary);
          font-size: 0.875rem;
          transition: all 0.3s ease;
        }
        
        .newsletter-input:focus {
          outline: none;
          border-color: var(--accent-primary);
        }
        
        .newsletter-input::placeholder {
          color: var(--text-muted);
        }
        
        .newsletter-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1.5rem;
          background: var(--accent-primary);
          color: var(--bg-primary);
          border: none;
          border-radius: 8px;
          font-size: 0.875rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
          white-space: nowrap;
        }
        
        .newsletter-btn:hover {
          background: var(--accent-hover);
          transform: translateY(-1px);
        }
        
        .footer-bottom {
          position: relative;
          z-index: 1;
        }
        
        .footer-bottom-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid var(--border-subtle);
        }
        
        .copyright {
          color: var(--text-muted);
          font-size: 0.875rem;
        }
        
        .copyright p {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          margin: 0;
        }
        
        .heart-icon {
          color: #EF4444;
          animation: heartbeat 2s ease-in-out infinite;
        }
        
        @keyframes heartbeat {
          0%, 50%, 100% { transform: scale(1); }
          25%, 75% { transform: scale(1.1); }
        }
        
        .footer-legal {
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        
        .legal-link {
          color: var(--text-muted);
          text-decoration: none;
          font-size: 0.875rem;
          transition: color 0.3s ease;
        }
        
        .legal-link:hover {
          color: var(--accent-primary);
        }
        
        .separator {
          color: var(--text-muted);
        }
        
        .achievement-banner {
          background: var(--bg-primary);
          border: 1px solid var(--border-subtle);
          border-radius: 12px;
          padding: 1.5rem;
        }
        
        .achievement-stats {
          display: flex;
          justify-content: space-around;
          align-items: center;
        }
        
        .achievement-stat {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.25rem;
          text-align: center;
        }
        
        .stat-number {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--accent-primary);
        }
        
        .stat-label {
          font-size: 0.75rem;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        
        @media (max-width: 1024px) {
          .footer-content {
            grid-template-columns: 1fr 1fr;
            gap: 2rem;
          }
          
          .footer-middle {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
        }
        
        @media (max-width: 768px) {
          .footer {
            padding: 3rem 0 1.5rem;
          }
          
          .footer-content {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          
          .footer-bottom-content {
            flex-direction: column;
            gap: 1rem;
            text-align: center;
          }
          
          .footer-legal {
            justify-content: center;
          }
          
          .newsletter-form {
            flex-direction: column;
          }
          
          .achievement-stats {
            flex-wrap: wrap;
            gap: 1rem;
          }
        }
        
        @media (max-width: 480px) {
          .social-links {
            flex-direction: column;
          }
          
          .social-link {
            justify-content: center;
          }
          
          .achievement-stats {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;