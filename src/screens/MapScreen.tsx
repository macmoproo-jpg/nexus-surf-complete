import React, { useState } from 'react';
import './screens.css';

interface MapScreenProps {
  onNavigate: (screen: string) => void;
}

interface SurfSpot {
  id: string;
  name: string;
  location: string;
  rating: number;
  lat: number;
  lng: number;
  waves: string;
  water: string;
  difficulty: string;
}

export default function MapScreen({ onNavigate }: MapScreenProps) {
  const [selectedSpot, setSelectedSpot] = useState<SurfSpot | null>(null);
  
  const surfSpots: SurfSpot[] = [
    { id: '1', name: 'Pipeline', location: 'Oahu, Hawaii', rating: 4.8, lat: 21.66, lng: -158.06, waves: '6-8ft', water: '78°F', difficulty: 'advanced' },
    { id: '2', name: 'Jeffreys Bay', location: 'South Africa', rating: 4.6, lat: -34.05, lng: 24.93, waves: '4-6ft', water: '68°F', difficulty: 'intermediate' },
    { id: '3', name: 'Trestles', location: 'California, USA', rating: 4.4, lat: 33.37, lng: -117.55, waves: '3-5ft', water: '65°F', difficulty: 'intermediate' },
    { id: '4', name: 'Uluwatu', location: 'Bali, Indonesia', rating: 4.7, lat: -8.82, lng: 115.09, waves: '4-7ft', water: '82°F', difficulty: 'advanced' },
    { id: '5', name: 'Superbank', location: 'Gold Coast, Australia', rating: 4.5, lat: -28.17, lng: 153.53, waves: '5-10ft', water: '72°F', difficulty: 'advanced' },
    { id: '6', name: 'Hanalei Bay', location: 'Kauai, Hawaii', rating: 4.3, lat: 22.21, lng: -159.50, waves: '3-5ft', water: '76°F', difficulty: 'beginner' },
  ];

  return (
    <div className="screen">
      {/* Header */}
      <header className="header">
        <h1 className="greeting">🌍 Surf Spots Map</h1>
        <button className="map-button" onClick={() => onNavigate('home')}>
          Home
        </button>
      </header>

      {/* Map Area (Visual Representation) */}
      <section className="map-section">
        <div className="map-visual">
          <div className="map-placeholder">
            <span className="map-icon">🗺️</span>
            <p>Interactive Map View</p>
            <p className="map-note">Select a spot below to see details</p>
          </div>
        </div>
      </section>

      {/* Surf Spots List */}
      <section className="section">
        <h2 className="section-title">🏄 Surf Spots ({surfSpots.length})</h2>
        
        {surfSpots.map((spot) => (
          <div 
            key={spot.id} 
            className={`spot-card ${selectedSpot?.id === spot.id ? 'selected' : ''}`}
            onClick={() => setSelectedSpot(spot)}
          >
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

      {/* Selected Spot Details */}
      {selectedSpot && (
        <div className="detail-overlay">
          <div className="detail-card">
            <div className="detail-header">
              <h2>{selectedSpot.name}</h2>
              <button className="close-btn" onClick={() => setSelectedSpot(null)}>×</button>
            </div>
            <p className="detail-location">📍 {selectedSpot.location}</p>
            <div className="detail-stats">
              <div className="stat">
                <span className="stat-label">Wave Height</span>
                <span className="stat-value">{selectedSpot.waves}</span>
              </div>
              <div className="stat">
                <span className="stat-label">Water Temp</span>
                <span className="stat-value">{selectedSpot.water}</span>
              </div>
              <div className="stat">
                <span className="stat-label">Difficulty</span>
                <span className="stat-value">{selectedSpot.difficulty}</span>
              </div>
            </div>
            <button className="btn-primary" style={{width: '100%'}} onClick={() => onNavigate('forecast')}>
              View Forecast →
            </button>
          </div>
        </div>
      )}
    </div>
  );
}