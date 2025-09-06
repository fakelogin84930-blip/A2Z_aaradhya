import React, { useState, useEffect } from 'react';
import { 
  UserPlus, 
  Package, 
  ShoppingCart, 
  Star, 
  Globe, 
  TrendingUp, 
  Target, 
  Search,
  Award,
  CheckCircle
} from 'lucide-react';

const ProcessSection = () => {
  const [visibleSteps, setVisibleSteps] = useState([]);

  const processSteps = [
    {
      step: 1,
      title: "Registration",
      icon: <UserPlus size={32} />,
      description: "Complete business registration with all legal documentation and compliance setup.",
      details: ["Business license", "Tax registration", "Legal compliance", "Documentation"]
    },
    {
      step: 2,
      title: "Packaging & Photography",
      icon: <Package size={32} />,
      description: "Professional packaging design and high-quality product photography for market appeal.",
      details: ["Brand packaging design", "Product photography", "Label creation", "Quality assurance"]
    },
    {
      step: 3,
      title: "Live on E-Commerce",
      icon: <ShoppingCart size={32} />,
      description: "Launch your products on Amazon, Flipkart, and Meesho with optimized listings.",
      details: ["Platform setup", "Product listings", "Pricing strategy", "Inventory management"]
    },
    {
      step: 4,
      title: "Reviews Management",
      icon: <Star size={32} />,
      description: "Comprehensive review monitoring and reputation management across all platforms.",
      details: ["Review monitoring", "Response management", "Rating improvement", "Feedback analysis"]
    },
    {
      step: 5,
      title: "Website Development",
      icon: <Globe size={32} />,
      description: "Custom website development to establish your online presence and brand identity.",
      details: ["Custom design", "Mobile responsive", "SEO optimized", "User-friendly interface"]
    },
    {
      step: 6,
      title: "Digital Marketing",
      icon: <TrendingUp size={32} />,
      description: "Strategic digital marketing campaigns to increase visibility and drive sales.",
      details: ["Social media marketing", "PPC campaigns", "Content marketing", "Brand promotion"]
    },
    {
      step: 7,
      title: "Traffic Conversion",
      icon: <Target size={32} />,
      description: "Optimize conversion rates and turn website visitors into paying customers.",
      details: ["Conversion optimization", "Sales funnel", "Customer journey", "Performance tracking"]
    },
    {
      step: 8,
      title: "SEO Optimization",
      icon: <Search size={32} />,
      description: "Search engine optimization to improve organic visibility and search rankings.",
      details: ["Keyword research", "On-page SEO", "Content optimization", "Search ranking"]
    },
    {
      step: 9,
      title: "D2C Brand Ready",
      icon: <Award size={32} />,
      description: "Transform into a complete D2C brand with independent sales channels and growth.",
      details: ["Brand independence", "Direct sales", "Customer loyalty", "Market expansion"]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const stepIndex = parseInt(entry.target.dataset.step);
            setVisibleSteps(prev => [...new Set([...prev, stepIndex])]);
          }
        });
      },
      { threshold: 0.3 }
    );

    const stepElements = document.querySelectorAll('.process-step');
    stepElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="process-section section">
      <div className="container">
        <div className="process-header text-center mb-12">
          <h2 className="display-md mb-6">
            Our Proven 
            <span className="text-accent"> 9-Step Process</span>
          </h2>
          <p className="body-lg max-width-800">
            From initial registration to becoming a fully independent D2C brand, our systematic 
            approach ensures every step is executed with precision and expertise.
          </p>
        </div>

        <div className="process-timeline">
          <div className="timeline-container">
            {processSteps.map((step, index) => (
              <div 
                key={step.step} 
                className={`process-step ${visibleSteps.includes(index) ? 'visible' : ''}`}
                data-step={index}
              >
                <div className="step-connector">
                  {index < processSteps.length - 1 && (
                    <div className="connector-line"></div>
                  )}
                </div>
                
                <div className="step-content">
                  <div className="step-number">
                    <span>{step.step}</span>
                  </div>
                  
                  <div className="step-card">
                    <div className="step-icon">
                      {step.icon}
                    </div>
                    
                    <div className="step-info">
                      <h3 className="step-title heading-lg">
                        {step.title}
                      </h3>
                      <p className="step-description body-md">
                        {step.description}
                      </p>
                      
                      <div className="step-details">
                        <ul className="details-list">
                          {step.details.map((detail, detailIndex) => (
                            <li key={detailIndex} className="detail-item">
                              <CheckCircle size={16} />
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="process-summary mt-12">
          <div className="summary-card">
            <div className="summary-content">
              <h3 className="summary-title heading-lg">
                Ready to Start Your Journey?
              </h3>
              <p className="summary-description body-md">
                Our comprehensive 9-step process has helped 1000+ brands achieve e-commerce success. 
                From registration to D2C brand establishment, we guide you every step of the way.
              </p>
              
              <div className="process-stats">
                <div className="process-stat">
                  <span className="stat-number">1000+</span>
                  <span className="stat-label">Brands Launched</span>
                </div>
                <div className="process-stat">
                  <span className="stat-number">9</span>
                  <span className="stat-label">Step Process</span>
                </div>
                <div className="process-stat">
                  <span className="stat-number">95%</span>
                  <span className="stat-label">Success Rate</span>
                </div>
              </div>
            </div>
            
            <div className="summary-action">
              <button className="btn-primary">
                Get Started Today
                <Target size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .process-section {
          background: var(--bg-primary);
        }
        
        .max-width-800 {
          max-width: 800px;
          margin: 0 auto;
        }
        
        .text-accent {
          color: var(--accent-primary);
        }
        
        .timeline-container {
          max-width: 800px;
          margin: 0 auto;
          position: relative;
        }
        
        .process-step {
          position: relative;
          margin-bottom: 4rem;
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.6s ease;
        }
        
        .process-step.visible {
          opacity: 1;
          transform: translateY(0);
        }
        
        .process-step:nth-child(even) .step-content {
          flex-direction: row-reverse;
        }
        
        .process-step:nth-child(even) .step-card {
          margin-left: 0;
          margin-right: 2rem;
        }
        
        .step-connector {
          position: absolute;
          left: 50%;
          top: 0;
          transform: translateX(-50%);
          z-index: 1;
        }
        
        .connector-line {
          width: 2px;
          height: 120px;
          background: linear-gradient(to bottom, var(--accent-primary), var(--accent-hover));
          margin: 0 auto;
          position: relative;
          top: 60px;
        }
        
        .step-content {
          display: flex;
          align-items: center;
          gap: 2rem;
          position: relative;
        }
        
        .step-number {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: var(--accent-primary);
          color: var(--bg-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.25rem;
          font-weight: 700;
          position: relative;
          z-index: 2;
          flex-shrink: 0;
          box-shadow: 0 4px 16px rgba(88, 197, 198, 0.3);
        }
        
        .step-card {
          background: var(--bg-secondary);
          border: 1px solid var(--border-subtle);
          border-radius: 16px;
          padding: 2rem;
          flex: 1;
          margin-left: 2rem;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        
        .step-card:hover {
          transform: translateY(-4px);
          border-color: var(--accent-primary);
          box-shadow: 0 12px 32px rgba(88, 197, 198, 0.15);
        }
        
        .step-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: var(--accent-primary);
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        
        .step-card:hover::before {
          opacity: 1;
        }
        
        .step-icon {
          color: var(--accent-primary);
          background: rgba(88, 197, 198, 0.1);
          padding: 1rem;
          border-radius: 12px;
          display: inline-block;
          margin-bottom: 1.5rem;
        }
        
        .step-title {
          color: var(--text-primary);
          margin-bottom: 1rem;
        }
        
        .step-description {
          color: var(--text-secondary);
          margin-bottom: 1.5rem;
        }
        
        .details-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 0.5rem;
        }
        
        .detail-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--text-muted);
          font-size: 0.875rem;
        }
        
        .detail-item svg {
          color: var(--accent-primary);
          flex-shrink: 0;
        }
        
        .summary-card {
          background: linear-gradient(135deg, var(--bg-secondary) 0%, var(--bg-tertiary) 100%);
          border: 2px solid var(--accent-primary);
          border-radius: 20px;
          padding: 3rem;
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        
        .summary-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(ellipse at center, rgba(88, 197, 198, 0.05) 0%, transparent 70%);
          pointer-events: none;
        }
        
        .summary-content {
          position: relative;
          z-index: 1;
        }
        
        .summary-title {
          color: var(--text-primary);
          margin-bottom: 1rem;
        }
        
        .summary-description {
          color: var(--text-secondary);
          max-width: 600px;
          margin: 0 auto 2rem;
        }
        
        .process-stats {
          display: flex;
          justify-content: center;
          gap: 3rem;
          margin-bottom: 2rem;
        }
        
        .process-stat {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
        }
        
        .stat-number {
          font-size: 2rem;
          font-weight: 700;
          color: var(--accent-primary);
        }
        
        .stat-label {
          font-size: 0.875rem;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        
        .summary-action {
          position: relative;
          z-index: 1;
        }
        
        @media (max-width: 768px) {
          .process-step:nth-child(even) .step-content,
          .step-content {
            flex-direction: column;
            text-align: center;
          }
          
          .process-step:nth-child(even) .step-card,
          .step-card {
            margin-left: 0;
            margin-right: 0;
            margin-top: 1rem;
          }
          
          .step-number {
            width: 50px;
            height: 50px;
            font-size: 1rem;
          }
          
          .step-card {
            padding: 1.5rem;
          }
          
          .details-list {
            grid-template-columns: 1fr;
          }
          
          .process-stats {
            flex-direction: column;
            gap: 1.5rem;
          }
          
          .summary-card {
            padding: 2rem;
          }
        }
        
        @media (max-width: 480px) {
          .connector-line {
            height: 80px;
            top: 40px;
          }
          
          .process-step {
            margin-bottom: 3rem;
          }
        }
      `}</style>
    </section>
  );
};

export default ProcessSection;