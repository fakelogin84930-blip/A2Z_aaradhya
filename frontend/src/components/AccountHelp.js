import React from 'react';
import { Shield, CheckCircle, AlertTriangle, FileText, Award, Phone } from 'lucide-react';

const AccountHelp = () => {
  const trustBadges = [
    { icon: <FileText size={24} />, label: "PAN Verified", verified: true },
    { icon: <Shield size={24} />, label: "Aadhaar Verified", verified: true },
    { icon: <Award size={24} />, label: "GST Registered", verified: true },
    { icon: <CheckCircle size={24} />, label: "Trademark Protected", verified: true }
  ];

  const reinstatementServices = [
    {
      platform: "Amazon",
      color: "orange",
      services: [
        "Account suspension recovery",
        "POA (Plan of Action) creation",
        "ASIN reinstatement",
        "Policy violation resolution",
        "Performance improvement plans",
        "Appeal letter writing"
      ]
    },
    {
      platform: "Flipkart",
      color: "blue",
      services: [
        "Account reactivation",
        "Quality complaint resolution",
        "Policy compliance assistance",
        "Performance metric improvement",
        "Catalogue issue resolution",
        "Seller support coordination"
      ]
    },
    {
      platform: "Meesho",
      color: "purple",
      services: [
        "Account restoration",
        "Return rate optimization",
        "Quality score improvement",
        "Policy violation appeals",
        "Performance enhancement",
        "Compliance documentation"
      ]
    }
  ];

  return (
    <section className="account-help-section section">
      <div className="container">
        <div className="help-header text-center mb-12">
          <div className="success-badge mb-6">
            <Shield className="badge-icon" size={32} />
            <span className="badge-text">100+ Successful Reinstatements</span>
          </div>
          
          <h2 className="display-md mb-6">
            Expert Help for 
            <span className="text-accent"> Blocked/Suspended Accounts</span>
          </h2>
          
          <p className="body-lg max-width-800">
            Don't let account suspensions halt your business growth. Our specialized team has successfully 
            reinstated 100+ accounts across Amazon, Flipkart, and Meesho with proven POA strategies.
          </p>
        </div>

        <div className="trust-section mb-12">
          <h3 className="heading-lg text-center mb-8">
            Trusted & Verified Service Provider
          </h3>
          
          <div className="trust-badges grid grid-4">
            {trustBadges.map((badge, index) => (
              <div key={index} className="trust-badge">
                <div className="badge-icon-container">
                  {badge.icon}
                  {badge.verified && (
                    <CheckCircle className="verification-check" size={16} />
                  )}
                </div>
                <span className="badge-label">{badge.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="reinstatement-services">
          <h3 className="heading-lg text-center mb-8">
            Platform-Specific Reinstatement Services
          </h3>
          
          <div className="services-grid grid grid-3">
            {reinstatementServices.map((platform, index) => (
              <div key={index} className={`platform-card ${platform.color}`}>
                <div className="platform-header">
                  <h4 className="platform-name heading-md">
                    {platform.platform}
                  </h4>
                  <div className="platform-badge">
                    <Shield size={20} />
                    <span>Expert Support</span>
                  </div>
                </div>
                
                <div className="platform-services">
                  <ul className="services-list">
                    {platform.services.map((service, serviceIndex) => (
                      <li key={serviceIndex} className="service-item">
                        <CheckCircle className="service-check" size={16} />
                        <span>{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="platform-action">
                  <button className="btn-secondary w-full">
                    Get Help Now
                    <Phone size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="emergency-contact mt-12">
          <div className="emergency-card">
            <div className="emergency-content">
              <AlertTriangle className="emergency-icon" size={40} />
              <div className="emergency-text">
                <h3 className="emergency-title heading-lg">
                  Account Suspended? Need Immediate Help?
                </h3>
                <p className="emergency-description body-md">
                  Our emergency response team is available 24/7 for urgent account suspension cases. 
                  Get immediate assistance and start the recovery process today.
                </p>
              </div>
            </div>
            
            <div className="emergency-actions">
              <button className="btn-primary">
                Emergency Support
                <Phone size={20} />
              </button>
              <div className="contact-info">
                <span className="contact-number">+91 78020 77444</span>
                <span className="contact-availability">Available 24/7</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .account-help-section {
          background: var(--bg-primary);
        }
        
        .max-width-800 {
          max-width: 800px;
          margin: 0 auto;
        }
        
        .text-accent {
          color: var(--accent-primary);
        }
        
        .success-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          background: rgba(88, 197, 198, 0.1);
          border: 2px solid var(--accent-primary);
          border-radius: 50px;
          padding: 1rem 2rem;
          color: var(--accent-primary);
          font-weight: 600;
          font-size: 1.125rem;
        }
        
        .badge-icon {
          color: var(--accent-primary);
        }
        
        .trust-badges {
          gap: 2rem;
        }
        
        .trust-badge {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
          padding: 2rem 1rem;
          background: var(--bg-secondary);
          border: 1px solid var(--border-subtle);
          border-radius: 16px;
          transition: all 0.3s ease;
          cursor: pointer;
        }
        
        .trust-badge:hover {
          transform: translateY(-4px);
          border-color: var(--accent-primary);
          box-shadow: 0 8px 24px rgba(88, 197, 198, 0.15);
        }
        
        .badge-icon-container {
          position: relative;
          color: var(--accent-primary);
          background: rgba(88, 197, 198, 0.1);
          padding: 1rem;
          border-radius: 12px;
        }
        
        .verification-check {
          position: absolute;
          top: -4px;
          right: -4px;
          background: var(--bg-secondary);
          border-radius: 50%;
          color: #10B981;
        }
        
        .badge-label {
          font-weight: 500;
          color: var(--text-secondary);
          text-align: center;
        }
        
        .platform-card {
          background: var(--bg-secondary);
          border: 1px solid var(--border-subtle);
          border-radius: 16px;
          padding: 2rem;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        
        .platform-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          transition: opacity 0.3s ease;
          opacity: 0;
        }
        
        .platform-card.orange::before {
          background: #F97316;
        }
        
        .platform-card.blue::before {
          background: #3B82F6;
        }
        
        .platform-card.purple::before {
          background: #8B5CF6;
        }
        
        .platform-card:hover {
          transform: translateY(-6px);
          border-color: var(--accent-primary);
          box-shadow: 0 12px 32px rgba(88, 197, 198, 0.15);
        }
        
        .platform-card:hover::before {
          opacity: 1;
        }
        
        .platform-header {
          margin-bottom: 1.5rem;
        }
        
        .platform-name {
          color: var(--text-primary);
          margin-bottom: 0.75rem;
        }
        
        .platform-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(88, 197, 198, 0.1);
          color: var(--accent-primary);
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-size: 0.875rem;
          font-weight: 500;
        }
        
        .services-list {
          list-style: none;
          padding: 0;
          margin: 0 0 2rem 0;
        }
        
        .service-item {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          margin-bottom: 0.75rem;
          color: var(--text-secondary);
          font-size: 0.875rem;
        }
        
        .service-check {
          color: var(--accent-primary);
          flex-shrink: 0;
          margin-top: 2px;
        }
        
        .w-full {
          width: 100%;
        }
        
        .emergency-card {
          background: linear-gradient(135deg, var(--bg-secondary) 0%, var(--bg-tertiary) 100%);
          border: 2px solid var(--accent-primary);
          border-radius: 20px;
          padding: 3rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 3rem;
          position: relative;
          overflow: hidden;
        }
        
        .emergency-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(ellipse at top right, rgba(88, 197, 198, 0.05) 0%, transparent 50%);
          pointer-events: none;
        }
        
        .emergency-content {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          flex: 1;
          position: relative;
          z-index: 1;
        }
        
        .emergency-icon {
          color: #F59E0B;
          flex-shrink: 0;
        }
        
        .emergency-title {
          color: var(--text-primary);
          margin-bottom: 0.5rem;
        }
        
        .emergency-description {
          color: var(--text-secondary);
        }
        
        .emergency-actions {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
          position: relative;
          z-index: 1;
        }
        
        .contact-info {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.25rem;
        }
        
        .contact-number {
          font-size: 1.125rem;
          font-weight: 600;
          color: var(--accent-primary);
        }
        
        .contact-availability {
          font-size: 0.875rem;
          color: var(--text-muted);
        }
        
        @media (max-width: 1024px) {
          .services-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          
          .emergency-card {
            flex-direction: column;
            text-align: center;
            gap: 2rem;
          }
        }
        
        @media (max-width: 768px) {
          .trust-badges {
            grid-template-columns: repeat(2, 1fr);
            gap: 1rem;
          }
          
          .services-grid {
            grid-template-columns: 1fr;
          }
          
          .platform-card {
            padding: 1.5rem;
          }
          
          .emergency-card {
            padding: 2rem;
          }
          
          .emergency-content {
            flex-direction: column;
            text-align: center;
          }
        }
        
        @media (max-width: 480px) {
          .trust-badges {
            grid-template-columns: 1fr;
          }
          
          .success-badge {
            padding: 0.75rem 1.5rem;
            font-size: 1rem;
          }
        }
      `}</style>
    </section>
  );
};

export default AccountHelp;