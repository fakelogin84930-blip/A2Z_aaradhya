import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  MessageSquare,
  User,
  Building
} from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const offices = [
    {
      city: "Head Office - Simada, Surat",
      address: "144, 1st Floor, Pramukh Park Soc, Opp. Royal Plaza, Bapa Sitaram Chowk, Simada, Surat – 395010",
      phone: "+91 78020 77444",
      email: "a2zaaradhya895@gmail.com",
      hours: "Mon – Sat: 9:00 AM – 6:30 PM",
      isHQ: true
    },
    {
      city: "Surat Katargam Office",
      address: "307, Elephanta Business Hub, Opp. Hari Darshan No Khado, Dabholi, Katargam, Surat – 395004",
      phone: "+91 78020 77444",
      email: "katargam@a2zaaradhya.com",
      hours: "Mon – Sat: 9:00 AM – 6:30 PM",
      isHQ: false
    },
    {
      city: "Surat Bhatar Office",
      address: "302-303, Meghana Complex, Olive Circle, Nr. Bharat Petrol Pump, U-M Road, Bhatar, Surat – 395007",
      phone: "+91 78020 77444",
      email: "bhatar@a2zaaradhya.com",
      hours: "Mon – Sat: 9:00 AM – 6:30 PM",
      isHQ: false
    },
    {
      city: "Rajkot Office",
      address: "911, Sanskar Heights, Between Mavdi Circle and Umiya Circle, 150 Feet Ring Road, Rajkot – 360007",
      phone: "+91 78020 77444",
      email: "rajkot@a2zaaradhya.com",
      hours: "Mon – Sat: 9:00 AM – 6:30 PM",
      isHQ: false
    },
    {
      city: "Ahmedabad Office",
      address: "607, Blueberry, Nr. Bhojaldham Residency, Gurukul Circle, Nikol, Ahmedabad – 382350",
      phone: "+91 78020 77444",
      email: "ahmedabad@a2zaaradhya.com",
      hours: "Mon – Sat: 9:00 AM – 6:30 PM",
      isHQ: false
    },
    {
      city: "Delhi Office",
      address: "Kinari Bazar, Chandni Chowk, Delhi – 110006",
      phone: "+91 78020 77444",
      email: "delhi@a2zaaradhya.com",
      hours: "Mon – Sat: 9:00 AM – 6:30 PM",
      isHQ: false
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
      setFormData({ name: '', email: '', phone: '', message: '' });
      alert('Thank you for your message! We will get back to you soon.');
    }, 2000);
  };

  return (
    <section className="contact-section section">
      <div className="container">
        <div className="contact-header text-center mb-12">
          <h2 className="display-md mb-6">
            Get In Touch 
            <span className="text-accent"> With Us</span>
          </h2>
          <p className="body-lg max-width-700">
            Ready to start your e-commerce journey? Contact our experts today for a free consultation 
            and discover how we can help you achieve online success.
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="info-header mb-8">
              <h3 className="heading-lg mb-4">
                Let's Discuss Your Business Goals
              </h3>
              <p className="body-md text-secondary">
                Our team of experts is ready to help you grow your e-commerce business. 
                Reach out to us through any of these channels.
              </p>
            </div>

            <div className="contact-methods mb-8">
              <div className="contact-method">
                <div className="method-icon">
                  <Phone size={24} />
                </div>
                <div className="method-info">
                  <div className="method-title">Phone Support</div>
                  <div className="method-details">+91 78020 77444</div>
                  <div className="method-note">Mon – Sat: 9:00 AM – 6:30 PM, Sunday: Closed</div>
                </div>
              </div>

              <div className="contact-method">
                <div className="method-icon">
                  <Mail size={24} />
                </div>
                <div className="method-info">
                  <div className="method-title">Email Support</div>
                  <div className="method-details">a2zaaradhya895@gmail.com</div>
                  <div className="method-note">We respond within 2 hours</div>
                </div>
              </div>

              <div className="contact-method">
                <div className="method-icon">
                  <MessageSquare size={24} />
                </div>
                <div className="method-info">
                  <div className="method-title">WhatsApp Business</div>
                  <div className="method-details">Quick consultation</div>
                  <div className="method-note">Instant messaging support</div>
                </div>
              </div>
            </div>

            <div className="offices-section">
              <h4 className="heading-md mb-6">Our Office Locations</h4>
              <div className="offices-grid">
                {offices.map((office, index) => (
                  <div key={index} className={`office-card ${office.isHQ ? 'headquarters' : ''}`}>
                    <div className="office-header">
                      <div className="office-city">
                        {office.city}
                        {office.isHQ && <span className="hq-badge">HQ</span>}
                      </div>
                      <div className="office-areas">
                        {office.areas.join(", ")}
                      </div>
                    </div>
                    
                    <div className="office-details">
                      <div className="office-detail">
                        <Phone size={16} />
                        <span>{office.phone}</span>
                      </div>
                      <div className="office-detail">
                        <Mail size={16} />
                        <span>{office.email}</span>
                      </div>
                      <div className="office-detail">
                        <Clock size={16} />
                        <span>{office.hours}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="contact-form-section">
            <div className="form-container">
              <h3 className="form-title heading-lg mb-6">
                Send Us a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">
                    <User size={18} />
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="form-input"
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    <Mail size={18} />
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="form-input"
                    placeholder="Enter your email address"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone" className="form-label">
                    <Phone size={18} />
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="form-input"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">
                    <MessageSquare size={18} />
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows="5"
                    className="form-textarea"
                    placeholder="Tell us about your business and how we can help you..."
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="form-submit btn-primary w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="spinner"></div>
                      Sending Message...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send size={20} />
                    </>
                  )}
                </button>
              </form>

              <div className="form-note">
                <p>
                  * Required fields. We respect your privacy and will never share your information.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Google Maps Embed */}
        <div className="map-section mt-12">
          <h3 className="heading-lg text-center mb-8">
            Visit Our Surat Headquarters
          </h3>
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.8637366716896!2d72.7885!3d21.1959!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDExJzQ1LjMiTiA3MsKwNDcnMTguNiJF!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="400"
              style={{ border: 0, borderRadius: '16px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="A2Z Aaradhya Surat Office Location"
            ></iframe>
          </div>
        </div>
      </div>

      <style jsx>{`
        .contact-section {
          background: var(--bg-primary);
        }
        
        .max-width-700 {
          max-width: 700px;
          margin: 0 auto;
        }
        
        .text-accent {
          color: var(--accent-primary);
        }
        
        .text-secondary {
          color: var(--text-secondary);
        }
        
        .contact-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: start;
        }
        
        .contact-methods {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        
        .contact-method {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          padding: 1.5rem;
          background: var(--bg-secondary);
          border: 1px solid var(--border-subtle);
          border-radius: 12px;
          transition: all 0.3s ease;
        }
        
        .contact-method:hover {
          border-color: var(--accent-primary);
          transform: translateX(8px);
        }
        
        .method-icon {
          color: var(--accent-primary);
          background: rgba(88, 197, 198, 0.1);
          padding: 0.75rem;
          border-radius: 8px;
          flex-shrink: 0;
        }
        
        .method-title {
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 0.25rem;
        }
        
        .method-details {
          color: var(--accent-primary);
          font-weight: 500;
          margin-bottom: 0.25rem;
        }
        
        .method-note {
          font-size: 0.875rem;
          color: var(--text-muted);
        }
        
        .offices-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1rem;
        }
        
        .office-card {
          background: var(--bg-secondary);
          border: 1px solid var(--border-subtle);
          border-radius: 12px;
          padding: 1.5rem;
          transition: all 0.3s ease;
        }
        
        .office-card:hover {
          border-color: var(--accent-primary);
          transform: translateY(-2px);
        }
        
        .office-card.headquarters {
          border-color: var(--accent-primary);
          background: linear-gradient(135deg, var(--bg-secondary) 0%, rgba(88, 197, 198, 0.05) 100%);
        }
        
        .office-city {
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 0.25rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        
        .hq-badge {
          background: var(--accent-primary);
          color: var(--bg-primary);
          font-size: 0.75rem;
          padding: 0.25rem 0.5rem;
          border-radius: 4px;
          font-weight: 500;
        }
        
        .office-areas {
          font-size: 0.875rem;
          color: var(--text-muted);
          margin-bottom: 1rem;
        }
        
        .office-detail {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 0.5rem;
          font-size: 0.875rem;
          color: var(--text-secondary);
        }
        
        .office-detail svg {
          color: var(--accent-primary);
          flex-shrink: 0;
        }
        
        .form-container {
          background: var(--bg-secondary);
          border: 2px solid var(--border-subtle);
          border-radius: 20px;
          padding: 3rem;
          position: sticky;
          top: 2rem;
        }
        
        .form-title {
          color: var(--text-primary);
          text-align: center;
        }
        
        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        
        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        
        .form-label {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-weight: 500;
          color: var(--text-primary);
          font-size: 0.875rem;
        }
        
        .form-label svg {
          color: var(--accent-primary);
        }
        
        .form-input,
        .form-textarea {
          background: var(--bg-primary);
          border: 2px solid var(--border-primary);
          border-radius: 12px;
          padding: 1rem;
          font-size: 1rem;
          color: var(--text-primary);
          transition: all 0.3s ease;
          resize: vertical;
        }
        
        .form-input::placeholder,
        .form-textarea::placeholder {
          color: var(--text-muted);
        }
        
        .form-input:focus,
        .form-textarea:focus {
          outline: none;
          border-color: var(--accent-primary);
          box-shadow: 0 0 0 3px rgba(88, 197, 198, 0.1);
        }
        
        .form-submit {
          margin-top: 1rem;
          position: relative;
        }
        
        .form-submit:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }
        
        .spinner {
          width: 20px;
          height: 20px;
          border: 2px solid transparent;
          border-top: 2px solid currentColor;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }
        
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        
        .w-full {
          width: 100%;
        }
        
        .form-note {
          margin-top: 1rem;
          text-align: center;
        }
        
        .form-note p {
          font-size: 0.875rem;
          color: var(--text-muted);
        }
        
        .map-container {
          border-radius: 16px;
          overflow: hidden;
          border: 2px solid var(--border-subtle);
          transition: all 0.3s ease;
        }
        
        .map-container:hover {
          border-color: var(--accent-primary);
          box-shadow: 0 8px 32px rgba(88, 197, 198, 0.15);
        }
        
        @media (max-width: 1024px) {
          .contact-content {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
          
          .form-container {
            position: static;
          }
          
          .offices-grid {
            grid-template-columns: 1fr;
          }
        }
        
        @media (max-width: 768px) {
          .form-container {
            padding: 2rem;
          }
          
          .contact-method {
            padding: 1rem;
          }
          
          .office-card {
            padding: 1rem;
          }
        }
        
        @media (max-width: 480px) {
          .offices-grid {
            gap: 0.75rem;
          }
          
          .form-container {
            padding: 1.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default ContactSection;