import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Layout/Header'
import Footer from '../components/Layout/Footer'
import './Home.css'
import doshaImage from '../Assets/dosha.png';

const Home = () => {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="home-page">
      <Header />
      <main className="home-main">
        
        <section className="hero-section">
          <div className="hero-content-wrapper"> 
            
            <div className="hero-content">
              <div className="home-title-section">
                <div className="title-icon-box">
                  <span className="title-heart">❤️</span>
                </div>
                <h1 className="home-title">AyurSutra</h1>
              </div>
              <p className="home-subtitle">EMPOWERING PANCHAKARMA.</p>
              <p className="home-description">
                A chatbot that blends ancient Ayurvedic wisdom with cutting-edge intelligence. 
                Find your Prakriti, get rituals tailored to your dosha, and experience a new way 
                of personalized healthcare.
              </p>
              <Link to="/chat" className="open-chat-button">
                <span>Open Chat Bot</span>
                <span className="chat-icon">💬</span>
              </Link>
            </div>

            <div className="hero-image-container">
             <img 
               src={doshaImage}           
            />
             
              <Link to="/chat" className="chat-bot-on-graphic">
                  Chat Bot
              </Link>
            </div>

          </div>
        </section>

        <section className="about-section">
          <div className="section-container">
            <h2 className="section-title">About Us</h2>
            <div className="title-underline"></div>
            <p className="about-text">
              Welcome to AyurSutra, your gateway to the harmonious fusion of ancient Ayurvedic 
              wisdom and modern technology. At AyurSutra, we're dedicated to empowering individuals 
              with profound insights into their well-being, health, and constitution. Our journey 
              began with a simple yet powerful question: how can we blend the timeless principles 
              of Ayurveda with the precision of modern machine learning to enhance lives?
            </p>
            <p className="about-text">
              We believe that understanding your unique Dosha (Prakriti) is the first step toward 
              achieving optimal health and wellness. Through our AI-powered assessment, we help you 
              discover your mind-body constitution and provide personalized Panchakarma therapy 
              recommendations tailored to your specific needs.
            </p>
          </div>
        </section>

        <section className="dosha-cards-section">
          <div className="section-container">
            <h2 className="section-title">Understanding Your Dosha</h2>
            <div className="title-underline"></div>
            <p className="section-subtitle">
              The three fundamental energies that govern your physical and mental characteristics
            </p>
            
            <div className="dosha-cards-grid">
              <div className="dosha-card vata-card">
                <div className="dosha-card-header">
                  <div className="dosha-icon vata-icon">🌬️</div>
                  <h3 className="dosha-name">VATA</h3>
                  <p className="dosha-elements">Air & Ether</p>
                </div>
                <div className="dosha-card-body">
                  <div className="dosha-characteristics">
                    <h4>Characteristics:</h4>
                    <ul>
                      <li>Light, thin build</li>
                      <li>Dry skin and hair</li>
                      <li>Creative and quick-thinking</li>
                      <li>Variable appetite</li>
                      <li>Irregular sleep patterns</li>
                      <li>Enthusiastic and energetic</li>
                    </ul>
                  </div>
                  <div className="dosha-balance">
                    <h4>When Balanced:</h4>
                    <p>Creative, enthusiastic, flexible, and full of joy</p>
                  </div>
                  <div className="dosha-imbalance">
                    <h4>When Imbalanced:</h4>
                    <p>Anxiety, restlessness, constipation, and insomnia</p>
                  </div>
                </div>
                <div className="dosha-glow vata-glow"></div>
              </div>

              <div className="dosha-card pitta-card">
                <div className="dosha-card-header">
                  <div className="dosha-icon pitta-icon">🔥</div>
                  <h3 className="dosha-name">PITTA</h3>
                  <p className="dosha-elements">Fire & Water</p>
                </div>
                <div className="dosha-card-body">
                  <div className="dosha-characteristics">
                    <h4>Characteristics:</h4>
                    <ul>
                      <li>Medium build</li>
                      <li>Oily, sensitive skin</li>
                      <li>Sharp intellect</li>
                      <li>Strong appetite</li>
                      <li>Moderate sleep</li>
                      <li>Ambitious and focused</li>
                    </ul>
                  </div>
                  <div className="dosha-balance">
                    <h4>When Balanced:</h4>
                    <p>Intelligent, confident, and natural leaders</p>
                  </div>
                  <div className="dosha-imbalance">
                    <h4>When Imbalanced:</h4>
                    <p>Irritability, anger, inflammation, and skin issues</p>
                  </div>
                </div>
                <div className="dosha-glow pitta-glow"></div>
              </div>

              <div className="dosha-card kapha-card">
                <div className="dosha-card-header">
                  <div className="dosha-icon kapha-icon">🌊</div>
                  <h3 className="dosha-name">KAPHA</h3>
                  <p className="dosha-elements">Earth & Water</p>
                </div>
                <div className="dosha-card-body">
                  <div className="dosha-characteristics">
                    <h4>Characteristics:</h4>
                    <ul>
                      <li>Heavy, solid build</li>
                      <li>Smooth, oily skin</li>
                      <li>Calm and stable</li>
                      <li>Steady appetite</li>
                      <li>Deep, sound sleep</li>
                      <li>Loving and compassionate</li>
                    </ul>
                  </div>
                  <div className="dosha-balance">
                    <h4>When Balanced:</h4>
                    <p>Stable, grounded, loving, and compassionate</p>
                  </div>
                  <div className="dosha-imbalance">
                    <h4>When Imbalanced:</h4>
                    <p>Lethargy, weight gain, congestion, and attachment</p>
                  </div>
                </div>
                <div className="dosha-glow kapha-glow"></div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Link 
        to="/chat" 
        className={`sticky-chat-button ${scrollY > 100 ? 'visible' : ''}`}
      >
        <span className="chat-button-icon">💬</span>
        <span className="chat-button-text">Chat Bot</span>
      </Link>

      <Footer />
    </div>
  )
}

export default Home
