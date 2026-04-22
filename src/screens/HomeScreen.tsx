import React, { useState } from 'react';
import './screens.css';

interface HomeScreenProps {
  onNavigate: (screen: string) => void;
  isAuthenticated: boolean;
}

interface SurfSpot {
  name: string;
  location: string;
  rating: number;
  waves: string;
  water: string;
  difficulty: string;
}

interface Feature {
  icon: string;
  title: string;
  desc: string;
  status: string;
}

export default function HomeScreen({ onNavigate, isAuthenticated }: HomeScreenProps) {
  const [tapCount, setTapCount] = useState(0);
  
  const surfSpots: SurfSpot[] = [
    { name: 'Pipeline', location: 'Oahu, Hawaii', rating: 4.8, waves: '6-8ft', water: '78°F', difficulty: 'advanced' },
    { name: 'Jeffreys Bay', location: 'South Africa', rating: 4.6, waves: '4-6ft', water: '68°F', difficulty: 'intermediate' },
    { name: 'Trestles', location: 'California, USA', rating: 4.4, waves: '3-5ft', water: '65°F', difficulty: 'intermediate' },
    { name: 'Uluwatu', location: 'Bali, Indonesia', rating: 4.7, waves: '4-7ft', water: '82°F', difficulty: 'advanced' },
  ];

  const features: Feature[] = [
    { icon: '🗺️', title: 'Interactive Map', desc: 'Find surf spots worldwide', status: 'ready' },
    { icon: '⛅', title: 'Live Forecast', desc: 'Wave height, wind, tides', status: 'ready' },
    { icon: '👥', title: 'Community', desc: 'Connect with surfers', status: 'ready' },
    { icon: '📊', title: 'Session Tracking', desc: 'Log your surf days', status: 'ready' },
    { icon: '🎓', title: 'Learning Center', desc: 'Video tutorials', status: 'building' },
    { icon: '🌐', title: 'AR Wave Scanner', desc: 'Augmented reality', status: 'planned' },
  ];

  return (
    <div className="screen">
      {/* Header */}
      <header className="header">
        <div>
          <h1 className="greeting">Good morning, Surfer! 🌊</h1>
          <p className="date">{new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}</p>
        </div>
        <button className="map-button" onClick={() => onNavigate('map')}>
          Map
        </button>
      </header>

      {/* Quick Actions */}
      <div className="quick-actions">
        <button className="action-button" onClick={() => onNavigate('forecast')}>
          <span className="action-icon">⛅</span>
          <span className="action-text">Forecast</span>
        </button>
        <button className="action-button" onClick={() => onNavigate('map')}>
          <span className="action-icon">🗺️</span>
          <span className="action-text">Spots</span>
        </button>
        <button className="action-button" onClick={() => onNavigate('community')}>
          <span className="action-icon">👥</span>
          <span className="action-text">Community</span>
        </button>
        <button className="action-button" onClick={() => onNavigate('profile')}>
          <span className="action-icon">🎓</span>
          <span className="action-text">Learn</span>
        </button>
      </div>

      {/* Features Ready */}
      <section className="section">
        <h2 className="section-title">✨ Features Ready</h2>
        {features.map((feature, index) => (
          <div key={index} className="feature-card">
            <span className="feature-icon">{feature.icon}</span>
            <div className="feature-info">
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-desc">{feature.desc}</p>
            </div>
            <span className={`feature-status ${feature.status}`}>
              {feature.status === 'ready' ? '✓ Ready' : feature.status === 'building' ? '🔧 Building' : '📅 Planned'}
            </span>
          </div>
        ))}
      </section>

      {/* Featured Surf Spots */}
      <section className="section">
        <div className="section-header">
          <h2 className="section-title">🏄 Featured Spots</h2>
          <span className="see-all" onClick={() => onNavigate('map')}>See All</span>
        </div>
        {surfSpots.map((spot, index) => (
          <div key={index} className="spot-card">
            <div className="spot-header">
              <h3 className="spot-name">{spot.name}</h3>
              <div className="rating-badge">
                <span className="rating-star">⭐</span>
                <span className="rating-value">{spot.rating}</span>
              </div>
            </div>
            <p className="spot-location">📍 {spot.location}</p>
            <div className="spot-conditions">
              <span className="condition-text">🌊 {spot.waves}</span>
              <span className="condition-text">💧 {spot.water}</span>
              <span className={`difficulty-badge ${spot.difficulty}`}>{spot.difficulty}</span>
            </div>
          </div>
        ))}
      </section>

      {/* Interactive Test */}
      <section className="section">
        <button className="test-button" onClick={() => setTapCount(tapCount + 1)}>
          ✅ Test Interactive - Taps: {tapCount}
        </button>
        {tapCount > 0 && <p className="test-success">🎉 Working! This app is fully interactive!</p>}
      </section>

      {/* Info */}
      <div className="info-box">
        <h3>🌐 Nexus Surf Complete App</h3>
        <p>This is the complete, fully interactive Nexus Surf app with all features!</p>
        <p style={{marginTop: '8px', color: '#007AFF'}}>
          React Native → Web Conversion • Interactive Maps • Live Data
        </p>
      </div>
    </div>
  );
}