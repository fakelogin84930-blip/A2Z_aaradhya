import React from 'react';
import { ArrowRight, PlayCircle } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-background">
        <div className="wave-animation"></div>
        <div className="gradient-overlay"></div>
      </div>
      
      <div className="container">
        <div className="hero-content">
          <div className="hero-logo">
            <img 
              src="https://customer-assets.emergentagent.com/job_onlinesuccess/artifacts/6ysexw8h_Screenshot%202025-09-06%20143300.png" 
              alt="A2Z Aaradhya Logo" 
              className="logo-image"
            />
          </div>
          
          <div className="hero-text">
            <h1 className="hero-title display-xl">
              Your One-Stop Partner for 
              <span className="text-accent"> Amazon, Flipkart & Meesho </span>
              Growth
            </h1>
            
            <p className="hero-subtitle body-lg">
              Empowering Your E-Commerce Success from A to Z
            </p>
            <p className="hero-description body-md">
              8+ years of e-commerce excellence with 50+ professionals managing 1000+ accounts. 
              From account setup to brand development, we make online selling simple, scalable & successful.
            </p>
            
            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-number">43K+</span>
                <span className="stat-label">Accounts Opened</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">22CR+</span>
                <span className="stat-label">Revenue Generated</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">100+</span>
                <span className="stat-label">Successful Reinstatements</span>
              </div>
            </div>
            
            <div className="hero-actions">
              <button className="btn-primary">
                Get Started
                <ArrowRight size={20} />
              </button>
              <button className="btn-secondary">
                <PlayCircle size={20} />
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .hero-section {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          overflow: hidden;
          background: linear-gradient(135deg, var(--brand-navy) 0%, var(--brand-dark-navy) 100%);
        }
        
        .hero-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(ellipse 80% 50% at 50% 20%, rgba(88, 197, 198, 0.1) 0%, transparent 60%);
          animation: heroGlow 8s ease-in-out infinite alternate;
        }
        
        @keyframes heroGlow {
          0% { opacity: 0.3; transform: scale(1); }
          100% { opacity: 0.6; transform: scale(1.1); }
        }
        
        .hero-background {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 1;
        }
        
        .wave-animation {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 200px;
          background: linear-gradient(45deg, var(--brand-teal), var(--brand-light-teal));
          opacity: 0.1;
          clip-path: polygon(0 60%, 100% 40%, 100% 100%, 0 100%);
          animation: wave 3s ease-in-out infinite alternate;
        }
        
        .gradient-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(ellipse at center, rgba(88, 197, 198, 0.05) 0%, transparent 70%);
        }
        
        .hero-content {
          position: relative;
          z-index: 2;
          text-align: center;
          max-width: 900px;
          margin: 0 auto;
        }
        
        .hero-logo {
          margin-bottom: 2rem;
        }
        
        .logo-image {
          width: 200px;
          height: auto;
          filter: drop-shadow(0 4px 12px rgba(88, 197, 198, 0.3));
        }
        
        .hero-title {
          margin-bottom: 1.5rem;
          animation: heroTitleReveal 1.2s var(--ease-out-expo) forwards;
          opacity: 0;
          transform: translateY(40px);
        }
        
        @keyframes heroTitleReveal {
          0% {
            opacity: 0;
            transform: translateY(40px) scale(0.95);
          }
          60% {
            opacity: 0.8;
            transform: translateY(-5px) scale(1.02);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        .text-accent {
          color: var(--accent-primary);
          background: linear-gradient(135deg, var(--brand-teal), var(--brand-light-teal));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .hero-subtitle {
          margin-bottom: 1.5rem;
          max-width: 700px;
          margin-left: auto;
          margin-right: auto;
          animation: heroSubtitleReveal 1.0s var(--ease-out-expo) 0.3s both;
          font-size: 1.5rem;
          font-weight: 600;
          background: linear-gradient(135deg, var(--accent-primary), var(--accent-hover));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-align: center;
        }
        
        .hero-description {
          margin-bottom: 3rem;
          max-width: 700px;
          margin-left: auto;
          margin-right: auto;
          animation: heroDescriptionReveal 1.0s var(--ease-out-expo) 0.6s both;
          opacity: 0.9;
        }
        
        @keyframes heroSubtitleReveal {
          0% {
            opacity: 0;
            transform: translateY(30px);
            filter: blur(10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
            filter: blur(0);
          }
        }
        
        @keyframes heroDescriptionReveal {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 0.9;
            transform: translateY(0);
          }
        }
        
        .hero-stats {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
          gap: 3rem;
          margin-bottom: 3rem;
          animation: heroStatsReveal 1.2s var(--ease-out-expo) 0.9s both;
          padding: 2rem;
          background: var(--glass-bg);
          backdrop-filter: var(--backdrop-blur);
          -webkit-backdrop-filter: var(--backdrop-blur);
          border-radius: 24px;
          border: 1px solid var(--glass-border);
        }
        
        @keyframes heroStatsReveal {
          0% {
            opacity: 0;
            transform: translateY(30px) scale(0.9);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        .stat-item {
          text-align: center;
        }
        
        .stat-number {
          display: block;
          font-size: 2.5rem;
          font-weight: 700;
          color: var(--accent-primary);
          margin-bottom: 0.5rem;
        }
        
        .stat-label {
          font-size: 0.875rem;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        
        .hero-actions {
          display: flex;
          justify-content: center;
          gap: 1.5rem;
          flex-wrap: wrap;
          animation: fade-in-up 0.8s ease-out 0.6s both;
        }
        
        @keyframes wave {
          0% { transform: translateY(0) scaleY(1); }
          100% { transform: translateY(-20px) scaleY(1.1); }
        }
        
        @media (max-width: 768px) {
          .logo-image {
            width: 150px;
          }
          
          .hero-stats {
            grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
            gap: 1.5rem;
          }
          
          .stat-number {
            font-size: 2rem;
          }
          
          .hero-actions {
            flex-direction: column;
            align-items: center;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;