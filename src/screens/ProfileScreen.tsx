import React, { useState } from 'react';
import './screens.css';

interface ProfileScreenProps {
  onNavigate: (screen: string) => void;
  isAuthenticated: boolean;
  setIsAuthenticated: (value: boolean) => void;
}

interface Session {
  id: string;
  date: string;
  spot: string;
  duration: string;
  rating: number;
}

export default function ProfileScreen({ onNavigate, isAuthenticated, setIsAuthenticated }: ProfileScreenProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const [sessions] = useState<Session[]>([
    { id: '1', date: 'Apr 21, 2026', spot: 'Pipeline, Hawaii', duration: '2.5 hours', rating: 5 },
    { id: '2', date: 'Apr 19, 2026', spot: 'Trestles, CA', duration: '3 hours', rating: 4 },
    { id: '3', date: 'Apr 17, 2026', spot: 'Uluwatu, Bali', duration: '4 hours', rating: 5 },
    { id: '4', date: 'Apr 15, 2026', spot: 'Jeffreys Bay, SA', duration: '2 hours', rating: 4 },
  ]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setEmail('');
    setPassword('');
  };

  return (
    <div className="screen">
      {/* Header */}
      <header className="header">
        <h1 className="greeting">👤 Profile</h1>
        <button className="map-button" onClick={() => onNavigate('home')}>
          Home
        </button>
      </header>

      {!isAuthenticated ? (
        /* Login Form */
        <section className="section">
          <div className="login-card">
            <h2>Sign In</h2>
            <p className="login-desc">Access your surf sessions and community posts</p>
            
            <form onSubmit={handleLogin} className="login-form">
              <div className="form-group">
                <label>Email</label>
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                />
              </div>
              <button type="submit" className="btn-primary" style={{width: '100%'}}>
                Sign In
              </button>
            </form>
            
            <p className="register-link">
              No account? <span onClick={() => alert('Registration coming soon!')}>Sign up</span>
            </p>
          </div>
        </section>
      ) : (
        /* User Profile */
        <>
          {/* User Info */}
          <section className="section">
            <div className="profile-header">
              <div className="profile-avatar">🏄‍♂️</div>
              <div className="profile-info">
                <h2>Surfer John</h2>
                <p className="profile-stats">24 Surf Sessions • 5 Spots Explored</p>
              </div>
              <button className="btn-outline" onClick={handleLogout}>
                Logout
              </button>
            </div>
          </section>

          {/* Surf Sessions */}
          <section className="section">
            <h2 className="section-title">📋 My Sessions</h2>
            {sessions.map((session) => (
              <div key={session.id} className="session-card">
                <div className="session-info">
                  <span className="session-spot">{session.spot}</span>
                  <span className="session-date">{session.date}</span>
                </div>
                <div className="session-details">
                  <span className="session-duration">⏱️ {session.duration}</span>
                  <span className="session-rating">⭐ {session.rating}/5</span>
                </div>
              </div>
            ))}
          </section>

          {/* Favorites */}
          <section className="section">
            <h2 className="section-title">❤️ Favorite Spots</h2>
            <div className="favorite-grid">
              <div className="favorite-spot">
                <span className="spot-icon">🌊</span>
                <span className="spot-name">Pipeline</span>
              </div>
              <div className="favorite-spot">
                <span className="spot-icon">🌊</span>
                <span className="spot-name">Uluwatu</span>
              </div>
              <div className="favorite-spot">
                <span className="spot-icon">🌊</span>
                <span className="spot-name">Trestles</span>
              </div>
              <div className="favorite-spot">
                <span className="spot-icon">➕</span>
                <span className="spot-name">Add More</span>
              </div>
            </div>
          </section>
        </>
      )}
    </div>
  );
}