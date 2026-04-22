import React, { useState } from 'react';
import './screens.css';

interface CommunityScreenProps {
  onNavigate: (screen: string) => void;
  isAuthenticated: boolean;
}

interface Post {
  id: string;
  author: string;
  avatar: string;
  content: string;
  timestamp: string;
  likes: number;
  comments: number;
}

export default function CommunityScreen({ onNavigate, isAuthenticated }: CommunityScreenProps) {
  const [posts] = useState<Post[]>([
    { id: '1', author: 'Alex Surf', avatar: '👨‍🦱', content: 'Just got back from Pipeline! Incredible waves today, 8-10ft sets. 🌊', timestamp: '2 hours ago', likes: 24, comments: 5 },
    { id: '2', author: 'Sarah Wave', avatar: '👩‍🦰', content: 'Anyone surfing Jeffreys Bay this weekend? Looking for surf buddies!', timestamp: '4 hours ago', likes: 18, comments: 8 },
    { id: '3', author: 'Mike Tide', avatar: '👨‍🦲', content: 'Pro tip: Check the tide charts before heading out. Makes a huge difference!', timestamp: '6 hours ago', likes: 45, comments: 12 },
    { id: '4', author: 'Lisa Beach', avatar: '👩‍🦱', content: 'New personal best at Trestles! Finally nailed that cutback. 🏄‍♀️', timestamp: '8 hours ago', likes: 67, comments: 15 },
  ]);

  return (
    <div className="screen">
      {/* Header */}
      <header className="header">
        <h1 className="greeting">👥 Surf Community</h1>
        <button className="map-button" onClick={() => onNavigate('home')}>
          Home
        </button>
      </header>

      {/* Quick Stats */}
      <section className="section">
        <div className="community-stats">
          <div className="stat-card">
            <span className="stat-icon">👥</span>
            <span className="stat-number">12.5K</span>
            <span className="stat-label">Members</span>
          </div>
          <div className="stat-card">
            <span className="stat-icon">📍</span>
            <span className="stat-number">156</span>
            <span className="stat-label">Spots</span>
          </div>
          <div className="stat-card">
            <span className="stat-icon">📸</span>
            <span className="stat-number">842</span>
            <span className="stat-label">Posts Today</span>
          </div>
        </div>
      </section>

      {/* Posts Feed */}
      <section className="section">
        <h2 className="section-title">📋 Recent Posts</h2>
        
        {posts.map((post) => (
          <div key={post.id} className="post-card">
            <div className="post-header">
              <div className="post-author">
                <span className="avatar">{post.avatar}</span>
                <div>
                  <span className="author-name">{post.author}</span>
                  <span className="post-time">{post.timestamp}</span>
                </div>
              </div>
              <button className="more-btn">⋯</button>
            </div>
            <p className="post-content">{post.content}</p>
            <div className="post-actions">
              <button className="action-btn">
                <span>❤️</span>
                <span>{post.likes}</span>
              </button>
              <button className="action-btn">
                <span>💬</span>
                <span>{post.comments}</span>
              </button>
              <button className="action-btn">
                <span>🔄</span>
              </button>
            </div>
          </div>
        ))}
      </section>

      {/* New Post Button */}
      <button className="fab-button" onClick={() => !isAuthenticated && onNavigate('profile')}>
        {isAuthenticated ? '➕ New Post' : 'Login to Post'}
      </button>
    </div>
  );
}