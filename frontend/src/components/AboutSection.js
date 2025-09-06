import React, { useState, useEffect } from 'react';
import { MapPin, Users, Calendar, TrendingUp } from 'lucide-react';

const AboutSection = () => {
  const [counters, setCounters] = useState({
    accounts: 0,
    management: 0,
    orders: 0,
    revenue: 0
  });

  const finalValues = {
    accounts: 43000,
    management: 550,
    orders: 440000,
    revenue: 22
  };

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const increment = {
      accounts: finalValues.accounts / steps,
      management: finalValues.management / steps,
      orders: finalValues.orders / steps,
      revenue: finalValues.revenue / steps
    };

    let step = 0;
    const timer = setInterval(() => {
      step++;
      setCounters({
        accounts: Math.min(Math.floor(increment.accounts * step), finalValues.accounts),
        management: Math.min(Math.floor(increment.management * step), finalValues.management),
        orders: Math.min(Math.floor(increment.orders * step), finalValues.orders),
        revenue: Math.min(Math.floor(increment.revenue * step), finalValues.revenue)
      });

      if (step >= steps) {
        clearInterval(timer);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num) => {
    if (num >= 100000) return `${(num / 100000).toFixed(1)}L+`;
    if (num >= 1000) return `${(num / 1000).toFixed(0)}K+`;
    return `${num}+`;
  };

  return (
    <section className="about-section section">
      <div className="container">
        <div className="about-header text-center mb-12">
          <h2 className="display-md mb-6">
            Transforming E-Commerce Dreams into 
            <span className="text-accent"> Success Stories</span>
          </h2>
          <p className="body-lg max-width-700">
            Since 2017, A2Z Aaradhya has been the trusted partner for thousands of sellers 
            across India, providing comprehensive e-commerce solutions with unmatched expertise.
          </p>
        </div>

        <div className="about-content">
          <div className="stats-grid grid grid-4 mb-12">
            <div className="stat-card card text-center">
              <TrendingUp size={40} className="stat-icon" />
              <div className="stat-number heading-lg">
                {formatNumber(counters.accounts)}
              </div>
              <div className="stat-label body-sm">Account Openings</div>
            </div>
            <div className="stat-card card text-center">
              <Users size={40} className="stat-icon" />
              <div className="stat-number heading-lg">
                {counters.management}+
              </div>
              <div className="stat-label body-sm">Account Management</div>
            </div>
            <div className="stat-card card text-center">
              <div className="stat-icon">📦</div>
              <div className="stat-number heading-lg">
                {formatNumber(counters.orders)}
              </div>
              <div className="stat-label body-sm">Orders Managed</div>
            </div>
            <div className="stat-card card text-center">
              <div className="stat-icon">💰</div>
              <div className="stat-number heading-lg">
                {counters.revenue}CR+
              </div>
              <div className="stat-label body-sm">Revenue Generated</div>
            </div>
          </div>

          <div className="about-details grid grid-2 gap-8">
            <div className="company-info">
              <h3 className="heading-lg mb-4">Our Journey</h3>
              <p className="body-md mb-4">
                Founded in 2017, A2Z Aaradhya has grown from a small startup to a leading 
                e-commerce service provider with over 8 years of industry experience.
              </p>
              <p className="body-md mb-6">
                Our team of 50+ dedicated professionals works tirelessly to manage 1000+ 
                active accounts across Amazon, Flipkart, and Meesho platforms.
              </p>
              
              <div className="features-list">
                <div className="feature-item flex items-center gap-4 mb-3">
                  <Calendar className="feature-icon" size={20} />
                  <span>8+ Years of E-commerce Excellence</span>
                </div>
                <div className="feature-item flex items-center gap-4 mb-3">
                  <Users className="feature-icon" size={20} />
                  <span>50+ Expert Professionals</span>
                </div>
                <div className="feature-item flex items-center gap-4 mb-3">
                  <TrendingUp className="feature-icon" size={20} />
                  <span>1000+ Active Account Management</span>
                </div>
              </div>
            </div>

            <div className="office-locations">
              <h3 className="heading-lg mb-4">Our Presence</h3>
              <p className="body-md mb-6">
                With strategic locations across Gujarat and Delhi, we serve clients 
                pan-India with localized support and personalized service.
              </p>
              
              <div className="locations-list">
                <div className="location-item flex items-center gap-4 mb-4">
                  <MapPin className="location-icon" size={20} />
                  <div>
                    <div className="location-name heading-sm">Surat (Headquarters)</div>
                    <div className="location-details body-sm">Simada, Bhatar, Katargam</div>
                  </div>
                </div>
                <div className="location-item flex items-center gap-4 mb-4">
                  <MapPin className="location-icon" size={20} />
                  <div>
                    <div className="location-name heading-sm">Rajkot</div>
                    <div className="location-details body-sm">Regional Operations</div>
                  </div>
                </div>
                <div className="location-item flex items-center gap-4 mb-4">
                  <MapPin className="location-icon" size={20} />
                  <div>
                    <div className="location-name heading-sm">Ahmedabad</div>
                    <div className="location-details body-sm">Business Development Hub</div>
                  </div>
                </div>
                <div className="location-item flex items-center gap-4">
                  <MapPin className="location-icon" size={20} />
                  <div>
                    <div className="location-name heading-sm">Delhi</div>
                    <div className="location-details body-sm">Northern Operations</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .about-section {
          background: var(--bg-secondary);
        }
        
        .max-width-700 {
          max-width: 700px;
          margin: 0 auto;
        }
        
        .text-accent {
          color: var(--accent-primary);
        }
        
        .stats-grid {
          margin-bottom: 4rem;
        }
        
        .stat-card {
          text-align: center;
          padding: 2rem 1.5rem;
          background: var(--bg-primary);
          border: 1px solid var(--border-subtle);
          border-radius: 16px;
          transition: all 0.3s ease;
        }
        
        .stat-card:hover {
          transform: translateY(-4px);
          border-color: var(--accent-primary);
          box-shadow: 0 8px 32px rgba(88, 197, 198, 0.2);
        }
        
        .stat-icon {
          color: var(--accent-primary);
          margin-bottom: 1rem;
          font-size: 2.5rem;
        }
        
        .stat-number {
          color: var(--accent-primary);
          margin-bottom: 0.5rem;
        }
        
        .stat-label {
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        
        .feature-icon, .location-icon {
          color: var(--accent-primary);
          flex-shrink: 0;
        }
        
        .feature-item, .location-item {
          transition: all 0.2s ease;
        }
        
        .feature-item:hover, .location-item:hover {
          transform: translateX(8px);
          color: var(--text-primary);
        }
        
        .location-name {
          color: var(--text-primary);
          margin-bottom: 0.25rem;
        }
        
        .location-details {
          color: var(--text-muted);
        }
        
        @media (max-width: 768px) {
          .about-details {
            grid-template-columns: 1fr;
          }
          
          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1rem;
          }
          
          .stat-card {
            padding: 1.5rem 1rem;
          }
        }
        
        @media (max-width: 480px) {
          .stats-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default AboutSection;