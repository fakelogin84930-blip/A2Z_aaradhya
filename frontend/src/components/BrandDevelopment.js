import React, { useState } from 'react';
import { 
  Building, 
  Package2, 
  Camera, 
  Globe, 
  Search, 
  Share2, 
  Target,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

const BrandDevelopment = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const services = [
    {
      title: "Company Registration",
      icon: <Building size={32} />,
      description: "Complete legal setup for your business with all regulatory compliance"
    },
    {
      title: "Packaging Design",
      icon: <Package2 size={32} />,
      description: "Eye-catching, professional packaging that stands out on shelves"
    },
    {
      title: "Product Photography",
      icon: <Camera size={32} />,
      description: "High-quality product images that drive conversions and sales"
    },
    {
      title: "Website Development",
      icon: <Globe size={32} />,
      description: "Modern, responsive websites that convert visitors into customers"
    },
    {
      title: "SEO Optimization",
      icon: <Search size={32} />,
      description: "Improve your online visibility and rank higher in search results"
    },
    {
      title: "Social Media Growth",
      icon: <Share2 size={32} />,
      description: "Build your brand presence across all social media platforms"
    },
    {
      title: "Marketing Campaigns",
      icon: <Target size={32} />,
      description: "Strategic campaigns that reach your target audience effectively"
    }
  ];

  const portfolioImages = [
    {
      title: "Premium Packaging Design",
      category: "Packaging",
      image: "https://images.unsplash.com/photo-1586880244386-8b3e34c8382c?w=500&h=400&fit=crop"
    },
    {
      title: "Product Photography",
      category: "Photography",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=500&h=400&fit=crop"
    },
    {
      title: "Brand Identity",
      category: "Branding",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=400&fit=crop"
    },
    {
      title: "E-commerce Store",
      category: "Website",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=400&fit=crop"
    },
    {
      title: "Marketing Materials",
      category: "Marketing",
      image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=500&h=400&fit=crop"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % portfolioImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + portfolioImages.length) % portfolioImages.length);
  };

  return (
    <section className="brand-development-section section">
      <div className="container">
        <div className="brand-header text-center mb-12">
          <h2 className="display-md mb-6">
            Complete Brand 
            <span className="text-accent"> Development Solutions</span>
          </h2>
          <p className="body-lg max-width-700">
            From concept to market-ready brand, we provide comprehensive services to build 
            your identity, create stunning visuals, and establish your digital presence.
          </p>
        </div>

        <div className="services-grid grid grid-3 mb-12">
          {services.map((service, index) => (
            <div key={index} className="brand-service-card">
              <div className="service-icon">
                {service.icon}
              </div>
              <h3 className="service-title heading-sm mb-3">
                {service.title}
              </h3>
              <p className="service-description body-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="portfolio-section">
          <h3 className="heading-lg text-center mb-8">Our Creative Portfolio</h3>
          
          <div className="portfolio-carousel">
            <div className="carousel-container">
              <button className="carousel-btn prev-btn" onClick={prevSlide}>
                <ChevronLeft size={24} />
              </button>
              
              <div className="carousel-content">
                <div 
                  className="carousel-track" 
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {portfolioImages.map((item, index) => (
                    <div key={index} className="carousel-slide">
                      <div className="portfolio-item">
                        <div className="portfolio-image">
                          <img src={item.image} alt={item.title} />
                          <div className="portfolio-overlay">
                            <div className="portfolio-info">
                              <span className="portfolio-category">{item.category}</span>
                              <h4 className="portfolio-title">{item.title}</h4>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <button className="carousel-btn next-btn" onClick={nextSlide}>
                <ChevronRight size={24} />
              </button>
            </div>
            
            <div className="carousel-indicators">
              {portfolioImages.map((_, index) => (
                <button
                  key={index}
                  className={`indicator ${index === currentSlide ? 'active' : ''}`}
                  onClick={() => setCurrentSlide(index)}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="brand-cta text-center mt-12">
          <button className="btn-primary">
            Start Your Brand Journey
            <Target size={20} />
          </button>
        </div>
      </div>

      <style jsx>{`
        .brand-development-section {
          background: var(--bg-secondary);
        }
        
        .max-width-700 {
          max-width: 700px;
          margin: 0 auto;
        }
        
        .text-accent {
          color: var(--accent-primary);
        }
        
        .brand-service-card {
          background: var(--bg-primary);
          border: 1px solid var(--border-subtle);
          border-radius: 16px;
          padding: 2rem;
          text-align: center;
          transition: all 0.3s ease;
          cursor: pointer;
        }
        
        .brand-service-card:hover {
          transform: translateY(-6px);
          border-color: var(--accent-primary);
          box-shadow: 0 10px 30px rgba(88, 197, 198, 0.15);
        }
        
        .service-icon {
          color: var(--accent-primary);
          background: rgba(88, 197, 198, 0.1);
          border-radius: 12px;
          width: 64px;
          height: 64px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.5rem;
          transition: all 0.3s ease;
        }
        
        .brand-service-card:hover .service-icon {
          background: var(--accent-primary);
          color: var(--bg-primary);
          transform: scale(1.1);
        }
        
        .service-title {
          color: var(--text-primary);
          margin-bottom: 1rem;
        }
        
        .service-description {
          color: var(--text-secondary);
        }
        
        .portfolio-section {
          background: var(--bg-primary);
          border-radius: 20px;
          padding: 3rem 2rem;
          border: 1px solid var(--border-subtle);
        }
        
        .portfolio-carousel {
          position: relative;
          max-width: 800px;
          margin: 0 auto;
        }
        
        .carousel-container {
          position: relative;
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        
        .carousel-content {
          flex: 1;
          overflow: hidden;
          border-radius: 16px;
        }
        
        .carousel-track {
          display: flex;
          transition: transform 0.5s ease;
        }
        
        .carousel-slide {
          min-width: 100%;
          padding: 0 0.5rem;
        }
        
        .portfolio-item {
          position: relative;
          border-radius: 12px;
          overflow: hidden;
        }
        
        .portfolio-image {
          position: relative;
          width: 100%;
          height: 300px;
          overflow: hidden;
        }
        
        .portfolio-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }
        
        .portfolio-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(
            to bottom,
            transparent 0%,
            rgba(14, 28, 37, 0.7) 50%,
            rgba(14, 28, 37, 0.9) 100%
          );
          display: flex;
          align-items: flex-end;
          padding: 2rem;
          opacity: 0;
          transition: all 0.3s ease;
        }
        
        .portfolio-item:hover .portfolio-overlay {
          opacity: 1;
        }
        
        .portfolio-item:hover img {
          transform: scale(1.05);
        }
        
        .portfolio-info {
          color: white;
        }
        
        .portfolio-category {
          font-size: 0.875rem;
          color: var(--accent-primary);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          font-weight: 500;
        }
        
        .portfolio-title {
          font-size: 1.25rem;
          font-weight: 600;
          margin-top: 0.5rem;
        }
        
        .carousel-btn {
          background: var(--bg-secondary);
          border: 2px solid var(--border-primary);
          border-radius: 50%;
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-secondary);
          cursor: pointer;
          transition: all 0.3s ease;
          flex-shrink: 0;
        }
        
        .carousel-btn:hover {
          background: var(--accent-primary);
          color: var(--bg-primary);
          border-color: var(--accent-primary);
          transform: scale(1.1);
        }
        
        .carousel-indicators {
          display: flex;
          justify-content: center;
          gap: 0.75rem;
          margin-top: 2rem;
        }
        
        .indicator {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          border: none;
          background: var(--border-primary);
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .indicator.active {
          background: var(--accent-primary);
          transform: scale(1.2);
        }
        
        .indicator:hover {
          background: var(--accent-hover);
        }
        
        @media (max-width: 768px) {
          .services-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1rem;
          }
          
          .brand-service-card {
            padding: 1.5rem;
          }
          
          .portfolio-section {
            padding: 2rem 1rem;
          }
          
          .carousel-btn {
            width: 40px;
            height: 40px;
          }
        }
        
        @media (max-width: 480px) {
          .services-grid {
            grid-template-columns: 1fr;
          }
          
          .carousel-container {
            flex-direction: column;
            gap: 1rem;
          }
          
          .carousel-btn {
            position: static;
          }
        }
      `}</style>
    </section>
  );
};

export default BrandDevelopment;