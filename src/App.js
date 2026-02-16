import React, { useState, useEffect, useRef } from 'react';
import './App.css';

// Main App Component
export default function Portfolio() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [heroText, setHeroText] = useState('');
  const [aboutText, setAboutText] = useState('');
  const [heroVisible, setHeroVisible] = useState(false);
  const [aboutVisible, setAboutVisible] = useState(false);
  
  const heroRef =  useRef(null);
  const aboutRef =  useRef(null);
  
  const heroFullText = "Crafting robust, scalable applications from concept to deployment. Passionate about clean code, innovative solutions, and pushing the boundaries of what's possible.";
  const aboutFullText = "Final-year B.Tech student specializing in Full-Stack Development with hands-on experience in the MERN stack. I have built interactive dashboards, data-driven applications, and secure backend systems with authentication and role-based access control.";
useEffect(() => {
  const heroEl = heroRef.current;
  const aboutEl = aboutRef.current;

  const heroObserver = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        setHeroVisible(true);
      }
    },
    { threshold: 0.3, rootMargin: '0px 0px -100px 0px' }
  );

  const aboutObserver = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        setAboutVisible(true);
      }
    },
    { threshold: 0.3, rootMargin: '0px 0px -100px 0px' }
  );

  if (heroEl) heroObserver.observe(heroEl);
  if (aboutEl) aboutObserver.observe(aboutEl);

  return () => {
    if (heroEl) heroObserver.unobserve(heroEl);
    if (aboutEl) aboutObserver.unobserve(aboutEl);
  };
}, []);   // ← keep empty


  // Typewriter effect for hero description
  useEffect(() => {
    if (heroVisible && heroText.length < heroFullText.length) {
      const timer = setTimeout(() => {
        setHeroText(heroFullText.slice(0, heroText.length + 1));
      }, 30);
      return () => clearTimeout(timer);
    }
  }, [heroVisible, heroText]);

  // Typewriter effect for about text
  useEffect(() => {
    if (aboutVisible && aboutText.length < aboutFullText.length) {
      const timer = setTimeout(() => {
        setAboutText(aboutFullText.slice(0, aboutText.length + 1));
      }, 20);
      return () => clearTimeout(timer);
    }
  }, [aboutVisible, aboutText]);

  useEffect(() => {
    // Smooth scroll for navigation
    const handleClick = (e) => {
      const href = e.target.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Create mailto link with form data
    const mailtoLink = `mailto:suvabiswas246@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
    window.location.href = mailtoLink;
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <>
      <div className="bg-animation"></div>

      <nav>
        <div className="container">
          <div className="logo">SUVA</div>
          <ul>
            <li><a href="#hero">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      <section id="hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">FULL-STACK<br/>DEVELOPER</h1>
            <div className="profile-picture">
              <img src="/mine.jpeg" alt="Suvajit Biswas" />
            </div>
            <p className="hero-subtitle">Building digital experiences that matter</p>
            <p ref={heroRef} className="hero-description typewriter">
              {heroText}
            </p>
            <a href="#projects" className="cta-button">View My Work</a>
          </div>
        </div>
      </section>

      <section id="about">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">Code. Create. Innovate.</p>
          
          <div className="about-content">
            <div className="about-text">
              <p ref={aboutRef} className="typewriter">
                {aboutText}
              </p>
              <p>
                I enjoy solving complex problems, optimizing performance, and designing systems that are both scalable 
                and user-centric.
              </p>
            </div>
            
            <div className="about-stats">
              <div className="stat-box">
                <span className="stat-number">10+</span>
                <span className="stat-label">Projects Completed</span>
              </div>
              <div className="stat-box">
                <span className="stat-number">3+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat-box">
                <span className="stat-number">100%</span>
                <span className="stat-label">Client Satisfaction</span>
              </div>
              <div className="stat-box">
                <span className="stat-number">24/7</span>
                <span className="stat-label">Learning Mode</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="skills">
        <div className="container">
          <h2 className="section-title">Tech Stack</h2>
          <p className="section-subtitle">Tools & Technologies I Work With</p>
          
          <div className="skills-grid">
            <div className="skill-category">
              <h3>Frontend</h3>
              <div className="skill-tags">
                <span className="skill-tag">React</span>
                <span className="skill-tag">Vue.js</span>
                <span className="skill-tag">TypeScript</span>
                <span className="skill-tag">JavaScript</span>
                <span className="skill-tag">HTML5</span>
                <span className="skill-tag">CSS3</span>
                <span className="skill-tag">Tailwind CSS</span>
                <span className="skill-tag">Next.js</span>
              </div>
            </div>
            
            <div className="skill-category">
              <h3>Backend</h3>
              <div className="skill-tags">
                <span className="skill-tag">Node.js</span>
                <span className="skill-tag">Express</span>
                
                <span className="skill-tag">REST APIs</span>
                <span className="skill-tag">NoSQL</span>
                <span className="skill-tag">PostgreSQL</span>
                <span className="skill-tag">MongoDB</span>
              </div>
            </div>
            
            <div className="skill-category">
              <h3>DevOps & Tools</h3>
              <div className="skill-tags">
                <span className="skill-tag">Docker</span>
          
                <span className="skill-tag">Git</span>
                <span className="skill-tag">CI/CD</span>
                <span className="skill-tag">Linux</span>
                <span className="skill-tag">Nginx</span>
                <span className="skill-tag">Redis</span>
                <span className="skill-tag">Kubernetes</span>
              </div>
            </div>
            
            <div className="skill-category">
              <h3>Other Skills</h3>
              <div className="skill-tags">
                <span className="skill-tag">Agile/Scrum</span>
                <span className="skill-tag">UI/UX Design</span>
                <span className="skill-tag">Java</span>
                
                <span className="skill-tag">WebSockets</span>
                <span className="skill-tag">OAuth</span>
              
                <span className="skill-tag">Performance</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects">
        <div className="container">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">Bringing ideas to life through code</p>
          
          <div className="projects-grid">
            <div className="project-card">
              <div className="project-image">PROJECT 01</div>
              <div className="project-content">
                <h3>ShopSphere</h3>
                <p>A full-featured online shopping platform with real-time inventory management, secure payment integration, and an intuitive admin dashboard.</p>
                <div className="project-tech">
                  <span className="tech-badge">React</span>
                  <span className="tech-badge">Node.js</span>
                  <span className="tech-badge">MongoDB</span>
                  <span className="tech-badge">Stripe</span>
                </div>
                <div className="project-links">
                
                  <a href="https://github.com/ursuva/E-commerce" className="project-link" >Code</a>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-image">PROJECT 02</div>
              <div className="project-content">
                <h3>Stay-Direct</h3>
                <p>Hotel Management System is a full-stack web application designed to streamline hotel operations such as room booking, guest management, check-in/check-out, and billing. The system provides an intuitive admin dashboard for tracking room availability and customer records, helping hotels manage their workflow efficiently and digitally.</p>
                <div className="project-tech">
                  <span className="tech-badge">Express.js</span>
                  <span className="tech-badge">React.js</span>
                  <span className="tech-badge">Clerk</span>
                  <span className="tech-badge">Node.js</span>
                </div>
                <div className="project-links">
                  
                  <a href="https://github.com/ursuva/HotelBooking-System" className="project-link">Code</a>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-image">PROJECT 03</div>
              <div className="project-content">
                <h3>Movie-Pickup</h3>
                <p>Movie Recommendation System is a analytical application that suggests personalized movies based on user preferences and viewing history. It uses data analysis and recommendation algorithms to enhance user experience and content discovery.</p>
                <div className="project-tech">
                  <span className="tech-badge">Python</span>
                  <span className="tech-badge">Streamlit</span>
                  <span className="tech-badge">Web Scraping</span>
                  <span className="tech-badge">TMDB API</span>
                </div>
                <div className="project-links">
                  
                  <a href="https://github.com/ursuva/ev-dashboard" className="project-link">Code</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">Let's build something amazing together</p>
          
          <div className="contact-content">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleInputChange}
                  required 
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required 
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required 
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea 
                  id="message" 
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                ></textarea>
              </div>
              
              <button type="submit" className="submit-button">Send Message</button>
            </form>
          </div>
        </div>
      </section>

      <footer>
        <div className="container">
          <div className="social-links">
            <a href="https://github.com/ursuva" target="_blank" rel="noopener noreferrer" className="social-link" title="GitHub">GH</a>
            <a href="https://www.linkedin.com/in/suvajit-biswas-32a175353/" target="_blank" rel="noopener noreferrer" className="social-link" title="LinkedIn">LI</a>
            <a href="https://x.com/ursuva3000" target="_blank" rel="noopener noreferrer" className="social-link" title="Twitter">TW</a>
            <a href="mailto:suvabiswas246@gmail.com" className="social-link" title="Email">EM</a>
          </div>
          <p>&copy; 2026 SUVA - Full-Stack Developer Portfolio. Designed & Built with passion.</p>
        </div>
      </footer>
    </>
  );
}