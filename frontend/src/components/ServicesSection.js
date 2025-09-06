import React from 'react';
import { ShoppingCart, Package, TrendingUp, Target, BarChart3, Shield } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      title: "Amazon Account Management",
      icon: <ShoppingCart size={40} />,
      description: "Complete Amazon marketplace management with professional expertise",
      features: [
        "Account setup & verification",
        "Product listing optimization",
        "Brand registry & A+ content",
        "PPC campaigns & advertising",
        "Safe-T claim handling",
        "POA & suspension recovery",
        "FBA shipment management",
        "Feedback & review management"
      ]
    },
    {
      title: "Flipkart Account Management",
      icon: <Package size={40} />,
      description: "Comprehensive Flipkart marketplace solutions for maximum growth",
      features: [
        "Account setup & onboarding",
        "Listing optimization",
        "FBF shipment coordination",
        "Campaign creation & management",
        "Safe-T claim resolution",
        "POA assistance",
        "Performance monitoring",
        "Customer service support"
      ]
    },
    {
      title: "Meesho Account Management",
      icon: <TrendingUp size={40} />,
      description: "Specialized Meesho platform management for emerging sellers",
      features: [
        "Account setup & configuration",
        "Returns management",
        "Claims processing",
        "Payment reconciliation",
        "Performance optimization",
        "Campaign management",
        "Supplier coordination",
        "Growth strategy planning"
      ]
    }
  ];

  return (
    <section className="services-section section">
      <div className="container">
        <div className="services-header text-center mb-12">
          <h2 className="display-md mb-6">
            Comprehensive E-Commerce 
            <span className="text-accent"> Management Services</span>
          </h2>
          <p className="body-lg max-width-700">
            From account setup to advanced optimization, we provide end-to-end solutions 
            across all major e-commerce platforms in India.
          </p>
        </div>

        <div className="services-grid grid grid-3">
          {services.map((service, index) => (
            <div key={index} className="service-card card">
              <div className="service-header mb-6">
                <div className="service-icon mb-4">
                  {service.icon}
                </div>
                <h3 className="service-title heading-lg mb-3">
                  {service.title}
                </h3>
                <p className="service-description body-md">
                  {service.description}
                </p>
              </div>

              <div className="service-features">
                <h4 className="features-title heading-sm mb-4">What's Included:</h4>
                <ul className="features-list">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="feature-item body-sm">
                      <span className="feature-check">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="service-action mt-6">
                <button className="btn-secondary w-full">
                  Learn More
                  <Target size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="services-footer text-center mt-12">
          <div className="additional-services">
            <h3 className="heading-lg mb-4">Additional Expert Services</h3>
            <div className="extra-services-grid grid grid-4">
              <div className="extra-service">
                <BarChart3 className="extra-icon" size={24} />
                <span className="extra-title">Analytics & Reporting</span>
              </div>
              <div className="extra-service">
                <Shield className="extra-icon" size={24} />
                <span className="extra-title">Account Protection</span>
              </div>
              <div className="extra-service">
                <Target className="extra-icon" size={24} />
                <span className="extra-title">Performance Optimization</span>
              </div>
              <div className="extra-service">
                <TrendingUp className="extra-icon" size={24} />
                <span className="extra-title">Growth Strategy</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .services-section {
          background: var(--bg-primary);
        }
        
        .max-width-700 {
          max-width: 700px;
          margin: 0 auto;
        }
        
        .text-accent {
          color: var(--accent-primary);
        }
        
        .service-card {
          background: var(--bg-secondary);
          border: 1px solid var(--border-subtle);
          border-radius: 16px;
          padding: 2rem;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
          height: 100%;
          display: flex;
          flex-direction: column;
        }
        
        .service-card:hover {
          transform: translateY(-8px);
          border-color: var(--accent-primary);
          box-shadow: 0 12px 40px rgba(88, 197, 198, 0.15);
        }
        
        .service-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, var(--accent-primary), var(--accent-hover));
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        
        .service-card:hover::before {
          opacity: 1;
        }
        
        .service-icon {
          color: var(--accent-primary);
          padding: 12px;
          background: rgba(88, 197, 198, 0.1);
          border-radius: 12px;
          display: inline-block;
        }
        
        .service-title {
          color: var(--text-primary);
        }
        
        .service-description {
          color: var(--text-secondary);
        }
        
        .features-title {
          color: var(--text-primary);
          border-bottom: 2px solid var(--border-subtle);
          padding-bottom: 0.5rem;
        }
        
        .features-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        
        .feature-item {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          margin-bottom: 0.75rem;
          color: var(--text-secondary);
          transition: all 0.2s ease;
        }
        
        .feature-item:hover {
          color: var(--text-primary);
          transform: translateX(4px);
        }
        
        .feature-check {
          color: var(--accent-primary);
          font-weight: bold;
          background: rgba(88, 197, 198, 0.1);
          border-radius: 50%;
          width: 20px;
          height: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
          flex-shrink: 0;
          margin-top: 2px;
        }
        
        .service-action {
          margin-top: auto;
        }
        
        .w-full {
          width: 100%;
        }
        
        .additional-services {
          background: var(--bg-secondary);
          border-radius: 16px;
          padding: 3rem 2rem;
          border: 1px solid var(--border-subtle);
        }
        
        .extra-services-grid {
          gap: 2rem;
        }
        
        .extra-service {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.75rem;
          padding: 1.5rem;
          background: var(--bg-primary);
          border-radius: 12px;
          border: 1px solid var(--border-subtle);
          transition: all 0.3s ease;
          cursor: pointer;
        }
        
        .extra-service:hover {
          transform: translateY(-4px);
          border-color: var(--accent-primary);
          box-shadow: 0 8px 24px rgba(88, 197, 198, 0.1);
        }
        
        .extra-icon {
          color: var(--accent-primary);
        }
        
        .extra-title {
          font-size: 0.875rem;
          font-weight: 500;
          color: var(--text-secondary);
          text-align: center;
        }
        
        @media (max-width: 1024px) {
          .services-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          
          .extra-services-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        
        @media (max-width: 768px) {
          .services-grid {
            grid-template-columns: 1fr;
          }
          
          .extra-services-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1rem;
          }
          
          .service-card {
            padding: 1.5rem;
          }
        }
        
        @media (max-width: 480px) {
          .extra-services-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default ServicesSection;