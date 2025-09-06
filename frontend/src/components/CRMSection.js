import React from 'react';
import { 
  Users, 
  Target, 
  MessageSquare, 
  Star, 
  Gift, 
  BarChart3,
  TrendingUp,
  Zap
} from 'lucide-react';

const CRMSection = () => {
  const crmFeatures = [
    {
      icon: <Target size={32} />,
      title: "Campaign Planning",
      description: "Strategic campaign development with targeted messaging and optimal timing for maximum impact.",
      benefits: ["Audience segmentation", "Multi-channel campaigns", "Performance tracking", "A/B testing"]
    },
    {
      icon: <Users size={32} />,
      title: "Lead Generation",
      description: "Advanced lead generation techniques to build your customer base and increase sales opportunities.",
      benefits: ["Qualified leads", "Lead scoring", "Conversion optimization", "Follow-up automation"]
    },
    {
      icon: <MessageSquare size={32} />,
      title: "AI Chatbots",
      description: "Intelligent chatbot solutions for 24/7 customer support and engagement across all platforms.",
      benefits: ["24/7 availability", "Instant responses", "Multi-language support", "Integration ready"]
    },
    {
      icon: <Star size={32} />,
      title: "Review Monitoring",
      description: "Comprehensive review management system to monitor, respond, and improve your online reputation.",
      benefits: ["Real-time monitoring", "Response automation", "Sentiment analysis", "Reputation alerts"]
    },
    {
      icon: <Gift size={32} />,
      title: "Loyalty Programs",
      description: "Custom loyalty program development to retain customers and increase lifetime value.",
      benefits: ["Points system", "Rewards management", "Customer tiers", "Engagement tracking"]
    },
    {
      icon: <BarChart3 size={32} />,
      title: "Analytics Dashboard",
      description: "Comprehensive analytics and reporting tools to track performance and make data-driven decisions.",
      benefits: ["Real-time data", "Custom reports", "Performance metrics", "Predictive insights"]
    }
  ];

  const crmStats = [
    { number: "40%", label: "Average Increase in Customer Retention", icon: <Users size={24} /> },
    { number: "65%", label: "Improvement in Response Time", icon: <Zap size={24} /> },
    { number: "85%", label: "Customer Satisfaction Rate", icon: <Star size={24} /> },
    { number: "3.2x", label: "ROI on CRM Investment", icon: <TrendingUp size={24} /> }
  ];

  return (
    <section className="crm-section section">
      <div className="container">
        <div className="crm-header text-center mb-12">
          <h2 className="display-md mb-6">
            Advanced Customer Relationship 
            <span className="text-accent"> Management Solutions</span>
          </h2>
          <p className="body-lg max-width-800">
            Transform your customer relationships with our comprehensive CRM solutions. From lead generation 
            to loyalty programs, we help you build lasting connections that drive business growth.
          </p>
        </div>

        <div className="crm-stats mb-12">
          <div className="stats-grid grid grid-4">
            {crmStats.map((stat, index) => (
              <div key={index} className="stat-card">
                <div className="stat-icon">
                  {stat.icon}
                </div>
                <div className="stat-content">
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="crm-features">
          <div className="features-grid grid grid-3">
            {crmFeatures.map((feature, index) => (
              <div key={index} className="crm-feature-card">
                <div className="feature-header">
                  <div className="feature-icon">
                    {feature.icon}
                  </div>
                  <h3 className="feature-title heading-md mb-3">
                    {feature.title}
                  </h3>
                  <p className="feature-description body-md mb-4">
                    {feature.description}
                  </p>
                </div>

                <div className="feature-benefits">
                  <h4 className="benefits-title heading-sm mb-3">Key Benefits:</h4>
                  <ul className="benefits-list">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="benefit-item">
                        <span className="benefit-check">✓</span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="feature-action mt-6">
                  <button className="btn-secondary w-full">
                    Learn More
                    <Target size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="crm-demo mt-12">
          <div className="demo-card">
            <div className="demo-content">
              <div className="demo-text">
                <h3 className="demo-title heading-lg mb-4">
                  See Our CRM Solutions in Action
                </h3>
                <p className="demo-description body-md mb-6">
                  Experience the power of our CRM platform with a personalized demo. 
                  Discover how our solutions can transform your customer relationships and drive growth.
                </p>
                <ul className="demo-features">
                  <li>✓ Live platform walkthrough</li>
                  <li>✓ Customized to your business needs</li>
                  <li>✓ Free consultation included</li>
                  <li>✓ Implementation roadmap provided</li>
                </ul>
              </div>
              
              <div className="demo-actions">
                <button className="btn-primary">
                  Schedule Demo
                  <MessageSquare size={20} />
                </button>
                <button className="btn-ghost">
                  View Case Studies
                </button>
              </div>
            </div>
            
            <div className="demo-visual">
              <div className="dashboard-mockup">
                <div className="mockup-header">
                  <div className="mockup-controls">
                    <span className="control red"></span>
                    <span className="control yellow"></span>
                    <span className="control green"></span>
                  </div>
                  <span className="mockup-title">CRM Dashboard</span>
                </div>
                <div className="mockup-content">
                  <div className="mockup-charts">
                    <div className="chart-item">
                      <BarChart3 size={24} />
                      <span>Analytics</span>
                    </div>
                    <div className="chart-item">
                      <TrendingUp size={24} />
                      <span>Growth</span>
                    </div>
                    <div className="chart-item">
                      <Users size={24} />
                      <span>Customers</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .crm-section {
          background: var(--bg-secondary);
        }
        
        .max-width-800 {
          max-width: 800px;
          margin: 0 auto;
        }
        
        .text-accent {
          color: var(--accent-primary);
        }
        
        .stat-card {
          background: var(--bg-primary);
          border: 1px solid var(--border-subtle);
          border-radius: 16px;
          padding: 2rem;
          display: flex;
          align-items: center;
          gap: 1rem;
          transition: all 0.3s ease;
        }
        
        .stat-card:hover {
          transform: translateY(-4px);
          border-color: var(--accent-primary);
          box-shadow: 0 8px 24px rgba(88, 197, 198, 0.15);
        }
        
        .stat-icon {
          color: var(--accent-primary);
          background: rgba(88, 197, 198, 0.1);
          padding: 0.75rem;
          border-radius: 12px;
          flex-shrink: 0;
        }
        
        .stat-number {
          font-size: 2rem;
          font-weight: 700;
          color: var(--accent-primary);
          line-height: 1;
        }
        
        .stat-label {
          font-size: 0.875rem;
          color: var(--text-muted);
          margin-top: 0.25rem;
        }
        
        .crm-feature-card {
          background: var(--bg-primary);
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
        
        .crm-feature-card:hover {
          transform: translateY(-8px);
          border-color: var(--accent-primary);
          box-shadow: 0 12px 40px rgba(88, 197, 198, 0.15);
        }
        
        .crm-feature-card::before {
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
        
        .crm-feature-card:hover::before {
          opacity: 1;
        }
        
        .feature-icon {
          color: var(--accent-primary);
          background: rgba(88, 197, 198, 0.1);
          padding: 1rem;
          border-radius: 12px;
          display: inline-block;
          margin-bottom: 1.5rem;
        }
        
        .feature-title {
          color: var(--text-primary);
        }
        
        .feature-description {
          color: var(--text-secondary);
        }
        
        .benefits-title {
          color: var(--text-primary);
          border-bottom: 2px solid var(--border-subtle);
          padding-bottom: 0.5rem;
        }
        
        .benefits-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        
        .benefit-item {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          margin-bottom: 0.5rem;
          color: var(--text-secondary);
          font-size: 0.875rem;
        }
        
        .benefit-check {
          color: var(--accent-primary);
          font-weight: bold;
          background: rgba(88, 197, 198, 0.1);
          border-radius: 50%;
          width: 16px;
          height: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 10px;
          flex-shrink: 0;
          margin-top: 2px;
        }
        
        .feature-action {
          margin-top: auto;
        }
        
        .w-full {
          width: 100%;
        }
        
        .demo-card {
          background: linear-gradient(135deg, var(--bg-primary) 0%, var(--bg-tertiary) 100%);
          border: 2px solid var(--accent-primary);
          border-radius: 20px;
          padding: 3rem;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          align-items: center;
          position: relative;
          overflow: hidden;
        }
        
        .demo-card::before {
          content: '';
          position: absolute;
          top: 0;
          right: 0;
          width: 50%;
          height: 100%;
          background: radial-gradient(ellipse at center, rgba(88, 197, 198, 0.05) 0%, transparent 70%);
          pointer-events: none;
        }
        
        .demo-title {
          color: var(--text-primary);
        }
        
        .demo-description {
          color: var(--text-secondary);
        }
        
        .demo-features {
          list-style: none;
          padding: 0;
          margin: 0;
          color: var(--text-secondary);
        }
        
        .demo-features li {
          margin-bottom: 0.5rem;
          font-size: 0.875rem;
        }
        
        .demo-actions {
          display: flex;
          gap: 1rem;
          margin-top: 1.5rem;
        }
        
        .dashboard-mockup {
          background: var(--bg-secondary);
          border: 1px solid var(--border-primary);
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
        }
        
        .mockup-header {
          background: var(--bg-tertiary);
          padding: 1rem;
          display: flex;
          align-items: center;
          gap: 1rem;
          border-bottom: 1px solid var(--border-primary);
        }
        
        .mockup-controls {
          display: flex;
          gap: 0.5rem;
        }
        
        .control {
          width: 12px;
          height: 12px;
          border-radius: 50%;
        }
        
        .control.red { background: #EF4444; }
        .control.yellow { background: #F59E0B; }
        .control.green { background: #10B981; }
        
        .mockup-title {
          font-size: 0.875rem;
          color: var(--text-muted);
        }
        
        .mockup-content {
          padding: 2rem;
        }
        
        .mockup-charts {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
        }
        
        .chart-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          padding: 1rem;
          background: rgba(88, 197, 198, 0.05);
          border-radius: 8px;
          color: var(--accent-primary);
          font-size: 0.875rem;
        }
        
        @media (max-width: 1024px) {
          .features-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          
          .demo-card {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
        }
        
        @media (max-width: 768px) {
          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1rem;
          }
          
          .features-grid {
            grid-template-columns: 1fr;
          }
          
          .crm-feature-card {
            padding: 1.5rem;
          }
          
          .demo-card {
            padding: 2rem;
          }
          
          .demo-actions {
            flex-direction: column;
          }
        }
        
        @media (max-width: 480px) {
          .stats-grid {
            grid-template-columns: 1fr;
          }
          
          .stat-card {
            flex-direction: column;
            text-align: center;
          }
        }
      `}</style>
    </section>
  );
};

export default CRMSection;