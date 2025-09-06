import React, { useState, useEffect } from 'react';
import { Award, ChevronLeft, ChevronRight, Star, Trophy, Medal } from 'lucide-react';

const AwardsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const awards = [
    {
      year: "2024",
      title: "Excellence in E-Commerce Solutions",
      organization: "India Digital Awards",
      description: "Recognized for outstanding contribution to e-commerce growth and innovation in India",
      icon: <Trophy size={40} />,
      category: "E-Commerce Excellence"
    },
    {
      year: "2023",
      title: "Best Customer Service Provider",
      organization: "Business Excellence Awards",
      description: "Awarded for exceptional customer service and support in marketplace management",
      icon: <Star size={40} />,
      category: "Customer Service"
    },
    {
      year: "2022",
      title: "Innovation in Digital Marketing",
      organization: "Marketing Innovation Awards",
      description: "Recognition for innovative approaches to digital marketing and brand development",
      icon: <Award size={40} />,
      category: "Digital Innovation"
    },
    {
      year: "2021",
      title: "Top Emerging Service Provider",
      organization: "Business Growth Awards",
      description: "Acknowledged as one of the fastest-growing e-commerce service providers",
      icon: <Medal size={40} />,
      category: "Business Growth"
    },
    {
      year: "2020",
      title: "Customer Choice Award",
      organization: "Client Satisfaction Awards",
      description: "Selected by clients for outstanding service quality and business results",
      icon: <Trophy size={40} />,
      category: "Client Satisfaction"
    }
  ];

  const testimonials = [
    {
      name: "Rajesh Kumar",
      company: "Fashion Hub India",
      rating: 5,
      text: "A2Z Aaradhya transformed our Amazon presence. From 50 orders/month to 2000+ orders. Outstanding service!"
    },
    {
      name: "Priya Sharma",
      company: "Home Decor Plus",
      rating: 5,
      text: "Their POA service saved our suspended account. Back to 5-star rating with their expert guidance."
    },
    {
      name: "Amit Patel",
      company: "Electronics Zone",
      rating: 5,
      text: "Complete brand development from packaging to website. Professional team with excellent results."
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % awards.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, awards.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % awards.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + awards.length) % awards.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  return (
    <section className="awards-section section">
      <div className="container">
        <div className="awards-header text-center mb-12">
          <h2 className="display-md mb-6">
            Awards & 
            <span className="text-accent"> Recognition</span>
          </h2>
          <p className="body-lg max-width-700">
            Our commitment to excellence has been recognized by industry leaders and clients alike. 
            These awards reflect our dedication to delivering exceptional e-commerce solutions.
          </p>
        </div>

        <div className="awards-carousel mb-12">
          <div className="carousel-container">
            <button 
              className="carousel-btn prev-btn" 
              onClick={prevSlide}
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
            >
              <ChevronLeft size={24} />
            </button>
            
            <div className="carousel-content">
              <div 
                className="carousel-track" 
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {awards.map((award, index) => (
                  <div key={index} className="carousel-slide">
                    <div className="award-card">
                      <div className="award-year">{award.year}</div>
                      
                      <div className="award-icon">
                        {award.icon}
                      </div>
                      
                      <div className="award-content">
                        <div className="award-category">{award.category}</div>
                        <h3 className="award-title heading-lg">
                          {award.title}
                        </h3>
                        <div className="award-organization">
                          {award.organization}
                        </div>
                        <p className="award-description body-md">
                          {award.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <button 
              className="carousel-btn next-btn" 
              onClick={nextSlide}
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
            >
              <ChevronRight size={24} />
            </button>
          </div>
          
          <div className="carousel-indicators">
            {awards.map((_, index) => (
              <button
                key={index}
                className={`indicator ${index === currentSlide ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>
        </div>

        <div className="testimonials-section">
          <h3 className="heading-lg text-center mb-8">
            What Our Clients Say
          </h3>
          
          <div className="testimonials-grid grid grid-3">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="testimonial-header">
                  <div className="client-info">
                    <div className="client-name">{testimonial.name}</div>
                    <div className="client-company">{testimonial.company}</div>
                  </div>
                  <div className="rating">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={16} className="star filled" />
                    ))}
                  </div>
                </div>
                
                <div className="testimonial-content">
                  <p className="testimonial-text body-md">
                    "{testimonial.text}"
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="recognition-stats mt-12">
          <div className="stats-container">
            <div className="stat-item">
              <Trophy className="stat-icon" size={32} />
              <div className="stat-content">
                <div className="stat-number">25+</div>
                <div className="stat-label">Awards Won</div>
              </div>
            </div>
            <div className="stat-item">
              <Star className="stat-icon" size={32} />
              <div className="stat-content">
                <div className="stat-number">4.9/5</div>
                <div className="stat-label">Client Rating</div>
              </div>
            </div>
            <div className="stat-item">
              <Medal className="stat-icon" size={32} />
              <div className="stat-content">
                <div className="stat-number">8+</div>
                <div className="stat-label">Years Excellence</div>
              </div>
            </div>
            <div className="stat-item">
              <Award className="stat-icon" size={32} />
              <div className="stat-content">
                <div className="stat-number">1000+</div>
                <div className="stat-label">Happy Clients</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .awards-section {
          background: var(--bg-secondary);
        }
        
        .max-width-700 {
          max-width: 700px;
          margin: 0 auto;
        }
        
        .text-accent {
          color: var(--accent-primary);
        }
        
        .awards-carousel {
          position: relative;
          max-width: 900px;
          margin: 0 auto;
        }
        
        .carousel-container {
          position: relative;
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }
        
        .carousel-content {
          flex: 1;
          overflow: hidden;
          border-radius: 20px;
        }
        
        .carousel-track {
          display: flex;
          transition: transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        
        .carousel-slide {
          min-width: 100%;
          padding: 0 1rem;
        }
        
        .award-card {
          background: linear-gradient(135deg, var(--bg-primary) 0%, var(--bg-tertiary) 100%);
          border: 2px solid var(--accent-primary);
          border-radius: 20px;
          padding: 3rem;
          text-align: center;
          position: relative;
          overflow: hidden;
          min-height: 400px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        
        .award-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(ellipse at top, rgba(88, 197, 198, 0.1) 0%, transparent 60%);
          pointer-events: none;
        }
        
        .award-year {
          position: absolute;
          top: 1.5rem;
          right: 1.5rem;
          background: var(--accent-primary);
          color: var(--bg-primary);
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-weight: 600;
          font-size: 0.875rem;
        }
        
        .award-icon {
          color: var(--accent-primary);
          margin-bottom: 1.5rem;
          position: relative;
          z-index: 1;
        }
        
        .award-content {
          position: relative;
          z-index: 1;
        }
        
        .award-category {
          color: var(--accent-primary);
          font-size: 0.875rem;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 1rem;
        }
        
        .award-title {
          color: var(--text-primary);
          margin-bottom: 1rem;
        }
        
        .award-organization {
          color: var(--text-secondary);
          font-weight: 500;
          margin-bottom: 1.5rem;
          font-size: 1.125rem;
        }
        
        .award-description {
          color: var(--text-muted);
          max-width: 400px;
          margin: 0 auto;
        }
        
        .carousel-btn {
          background: var(--bg-primary);
          border: 2px solid var(--border-primary);
          border-radius: 50%;
          width: 56px;
          height: 56px;
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
          gap: 1rem;
          margin-top: 2rem;
        }
        
        .indicator {
          width: 14px;
          height: 14px;
          border-radius: 50%;
          border: none;
          background: var(--border-primary);
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .indicator.active {
          background: var(--accent-primary);
          transform: scale(1.3);
        }
        
        .indicator:hover {
          background: var(--accent-hover);
        }
        
        .testimonials-grid {
          gap: 2rem;
        }
        
        .testimonial-card {
          background: var(--bg-primary);
          border: 1px solid var(--border-subtle);
          border-radius: 16px;
          padding: 2rem;
          transition: all 0.3s ease;
        }
        
        .testimonial-card:hover {
          transform: translateY(-4px);
          border-color: var(--accent-primary);
          box-shadow: 0 8px 24px rgba(88, 197, 198, 0.15);
        }
        
        .testimonial-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 1.5rem;
        }
        
        .client-name {
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 0.25rem;
        }
        
        .client-company {
          font-size: 0.875rem;
          color: var(--text-muted);
        }
        
        .rating {
          display: flex;
          gap: 0.25rem;
        }
        
        .star {
          color: var(--border-primary);
        }
        
        .star.filled {
          color: #F59E0B;
        }
        
        .testimonial-text {
          color: var(--text-secondary);
          font-style: italic;
        }
        
        .stats-container {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 2rem;
          background: var(--bg-primary);
          border-radius: 16px;
          padding: 3rem 2rem;
          border: 1px solid var(--border-subtle);
        }
        
        .stat-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          text-align: center;
          justify-content: center;
        }
        
        .stat-icon {
          color: var(--accent-primary);
          flex-shrink: 0;
        }
        
        .stat-number {
          font-size: 1.75rem;
          font-weight: 700;
          color: var(--accent-primary);
          line-height: 1;
          margin-bottom: 0.25rem;
        }
        
        .stat-label {
          font-size: 0.875rem;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        
        @media (max-width: 1024px) {
          .testimonials-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          
          .stats-container {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        
        @media (max-width: 768px) {
          .carousel-container {
            flex-direction: column;
            gap: 1rem;
          }
          
          .testimonials-grid {
            grid-template-columns: 1fr;
          }
          
          .award-card {
            padding: 2rem;
            min-height: 350px;
          }
          
          .carousel-btn {
            position: static;
            width: 48px;
            height: 48px;
          }
          
          .stats-container {
            grid-template-columns: 1fr;
            gap: 1.5rem;
            padding: 2rem;
          }
        }
        
        @media (max-width: 480px) {
          .award-card {
            padding: 1.5rem;
            min-height: 320px;
          }
          
          .testimonial-card {
            padding: 1.5rem;
          }
          
          .stat-item {
            flex-direction: column;
            gap: 0.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default AwardsSection;