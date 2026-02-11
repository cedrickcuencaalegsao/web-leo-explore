import React from 'react';
import { Timer, BrainCircuit, Zap, FolderSearch } from 'lucide-react';
import './keyfeature.css';

const KeyFeature: React.FC = () => {
  return (
    <div className="key-feature-wrapper" id="features">
      <div className="key-feature-container">
        
        {/* Left Side: Branding and Messaging */}
        <div className="key-feature-content-left">
          <h1 className="key-feature-main-title">Tired of Clutterd Desktop?</h1>
          <h2 className="key-feature-sub-title">Rediscover KeyFeature.</h2>
          
          <div className="key-feature-description-list">
            <p>
              Lightning-fast performance that keeps your workflow smooth, focused, and distraction-free.
            </p>
            <p>
              Optimized for speed, built to keep you productive without slowing your system down.
            </p>
            <p>
              High performance. Low overhead. Pure desktop KeyFeature.
            </p>
            <p>
              Engineered to run fast, stay responsive, and maximize every system resource.
            </p>
            <p>
              A desktop experience designed for peak performance and effortless KeyFeature.
            </p>
          </div>
        </div>

        {/* Right Side: Feature Cards */}
        <div className="key-feature-grid-right">
          
          {/* Card 1 */}
          <div className="key-feature-card">
            <div className="key-feature-icon-box">
              <Timer size={54} strokeWidth={2.5} />
            </div>
            <p className="key-feature-card-text">
              High performance multithreading file search.
            </p>
            <button className="key-feature-btn">Learn More</button>
          </div>

          {/* Card 2 */}
          <div className="key-feature-card">
            <div className="key-feature-icon-box">
              <BrainCircuit size={54} strokeWidth={2.5} />
            </div>
            <p className="key-feature-card-text">
              Search a file content via Deep Search Algorithm fast and secure.
            </p>
            <button className="key-feature-btn">Learn More</button>
          </div>

          {/* Card 3 */}
          <div className="key-feature-card">
            <div className="key-feature-icon-box">
              <Zap size={54} strokeWidth={2.5} />
            </div>
            <p className="key-feature-card-text">
              Light and KeyFeature way to manage your files and drives
            </p>
            <button className="key-feature-btn">Learn More</button>
          </div>

          {/* Card 4 */}
          <div className="key-feature-card">
            <div className="key-feature-icon-box">
              <FolderSearch size={54} strokeWidth={2.5} />
            </div>
            <p className="key-feature-card-text">
              Explore every corner of your computer without leaking data.
            </p>
            <button className="key-feature-btn">Learn More</button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default KeyFeature;