import React, { useState } from 'react';
import './screens.css';

interface ForecastScreenProps {
  onNavigate: (screen: string) => void;
}

interface ForecastDay {
  day: string;
  date: string;
  waves: string;
  wind: string;
  tide: string;
  rating: number;
  icon: string;
}

export default function ForecastScreen({ onNavigate }: ForecastScreenProps) {
  const [selectedSpot] = useState('Pipeline, Hawaii');
  
  const forecastData: ForecastDay[] = [
    { day: 'Today', date: 'Apr 22', waves: '6-8ft', wind: '8mph NE', tide: 'High 3:45PM', rating: 5, icon: '☀️' },
    { day: 'Tomorrow', date: 'Apr 23', waves: '5-7ft', wind: '12mph E', tide: 'Low 9:30AM', rating: 4, icon: '⛅' },
    { day: 'Wednesday', date: 'Apr 24', waves: '4-6ft', wind: '10mph ENE', tide: 'High 4:15PM', rating: 4, icon: '🌤️' },
    { day: 'Thursday', date: 'Apr 25', waves: '7-9ft', wind: '15mph NE', tide: 'Low 10:00AM', rating: 5, icon: '🌊' },
    { day: 'Friday', date: 'Apr 26', waves: '5-7ft', wind: '8mph E', tide: 'High 5:00PM', rating: 4, icon: '☀️' },
    { day: 'Saturday', date: 'Apr 27', waves: '3-5ft', wind: '5mph SE', tide: 'Low 11:30AM', rating: 3, icon: '⛅' },
    { day: 'Sunday', date: 'Apr 28', waves: '4-6ft', wind: '7mph E', tide: 'High 5:45PM', rating: 4, icon: '🌤️' },
  ];

  return (
    <div className="screen">
      {/* Header */}
      <header className="header">
        <div>
          <h1 className="greeting">⛅ Surf Forecast</h1>
          <p className="date">{selectedSpot}</p>
        </div>
        <button className="map-button" onClick={() => onNavigate('home')}>
          Home
        </button>
      </header>

      {/* Spot Selector */}
      <section className="section">
        <div className="spot-selector">
          <span className="selector-label">Viewing:</span>
          <select className="spot-select">
            <option>Pipeline, Hawaii</option>
            <option>Jeffreys Bay, SA</option>
            <option>Trestles, CA</option>
            <option>Uluwatu, Bali</option>
          </select>
        </div>
      </section>

      {/* Current Conditions */}
      <section className="section">
        <div className="current-forecast">
          <div className="forecast-header">
            <span className="forecast-icon">🌊</span>
            <div>
              <h2>Today's Conditions</h2>
              <p className="forecast-date">{forecastData[0].date}</p>
            </div>
            <div className="rating-badge large">
              <span className="rating-star">⭐</span>
              <span className="rating-value">{forecastData[0].rating}/5</span>
            </div>
          </div>
          
          <div className="forecast-details">
            <div className="forecast-detail">
              <span className="detail-icon">🌊</span>
              <span className="detail-label">Waves</span>
              <span className="detail-value">{forecastData[0].waves}</span>
            </div>
            <div className="forecast-detail">
              <span className="detail-icon">💨</span>
              <span className="detail-label">Wind</span>
              <span className="detail-value">{forecastData[0].wind}</span>
            </div>
            <div className="forecast-detail">
              <span className="detail-icon">🌊</span>
              <span className="detail-label">Tide</span>
              <span className="detail-value">{forecastData[0].tide}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Weekly Forecast */}
      <section className="section">
        <h2 className="section-title">📅 7-Day Forecast</h2>
        {forecastData.map((day, index) => (
          <div key={index} className="forecast-day-card">
            <div className="forecast-day-info">
              <span className="forecast-day-name">{day.day}</span>
              <span className="forecast-day-date">{day.date}</span>
            </div>
            <span className="forecast-day-icon">{day.icon}</span>
            <div className="forecast-day-waves">
              <span className="waves-label">Waves</span>
              <span className="waves-value">{day.waves}</span>
            </div>
            <div className={`rating-badge ${day.rating >= 4 ? 'good' : 'medium'}`}>
              <span className="rating-value">{day.rating}</span>
            </div>
          </div>
        ))}
      </section>

      {/* Surf Rating Legend */}
      <div className="legend-box">
        <h3>Surf Rating Guide</h3>
        <div className="legend-items">
          <div className="legend-item">
            <div className="legend-rating good">5</div>
            <span>Perfect conditions</span>
          </div>
          <div className="legend-item">
            <div className="legend-rating medium">4</div>
            <span>Good conditions</span>
          </div>
          <div className="legend-item">
            <div className="legend-rating fair">3</div>
            <span>Fair conditions</span>
          </div>
        </div>
      </div>
    </div>
  );
}