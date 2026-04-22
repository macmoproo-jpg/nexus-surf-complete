import React, { useState } from 'react';
import './App.css';

// Screen components
import HomeScreen from './screens/HomeScreen';
import MapScreen from './screens/MapScreen';
import ForecastScreen from './screens/ForecastScreen';
import CommunityScreen from './screens/CommunityScreen';
import ProfileScreen from './screens/ProfileScreen';

interface ScreenProps {
  onNavigate: (screen: string) => void;
  isAuthenticated?: boolean;
  setIsAuthenticated?: (value: boolean) => void;
}

// Navigation types
type ScreenName = 'home' | 'map' | 'forecast' | 'community' | 'profile';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<ScreenName>('home');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Navigation function
  const navigateTo = (screen: string) => {
    setCurrentScreen(screen as ScreenName);
  };

  // Render current screen
  const renderScreen = () => {
    switch (currentScreen) {
      case 'home':
        return <HomeScreen onNavigate={navigateTo} isAuthenticated={isAuthenticated} />;
      case 'map':
        return <MapScreen onNavigate={navigateTo} />;
      case 'forecast':
        return <ForecastScreen onNavigate={navigateTo} />;
      case 'community':
        return <CommunityScreen onNavigate={navigateTo} isAuthenticated={isAuthenticated} />;
      case 'profile':
        return <ProfileScreen onNavigate={navigateTo} isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />;
      default:
        return <HomeScreen onNavigate={navigateTo} isAuthenticated={isAuthenticated} />;
    }
  };

  return (
    <div className="app">
      {/* Bottom Navigation */}
      <nav className="bottom-nav">
        <button 
          className={`nav-item ${currentScreen === 'home' ? 'active' : ''}`}
          onClick={() => navigateTo('home')}
        >
          <span className="nav-icon">🏠</span>
          <span className="nav-label">Home</span>
        </button>
        <button 
          className={`nav-item ${currentScreen === 'map' ? 'active' : ''}`}
          onClick={() => navigateTo('map')}
        >
          <span className="nav-icon">🗺️</span>
          <span className="nav-label">Map</span>
        </button>
        <button 
          className={`nav-item ${currentScreen === 'forecast' ? 'active' : ''}`}
          onClick={() => navigateTo('forecast')}
        >
          <span className="nav-icon">⛅</span>
          <span className="nav-label">Forecast</span>
        </button>
        <button 
          className={`nav-item ${currentScreen === 'community' ? 'active' : ''}`}
          onClick={() => navigateTo('community')}
        >
          <span className="nav-icon">👥</span>
          <span className="nav-label">Community</span>
        </button>
        <button 
          className={`nav-item ${currentScreen === 'profile' ? 'active' : ''}`}
          onClick={() => navigateTo('profile')}
        >
          <span className="nav-icon">👤</span>
          <span className="nav-label">Profile</span>
        </button>
      </nav>

      {/* Main Content */}
      <main className="main-content">
        {renderScreen()}
      </main>
    </div>
  );
}