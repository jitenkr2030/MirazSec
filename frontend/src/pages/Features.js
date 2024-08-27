import React from 'react';
import './Features.css';
import SecurityIcon from '@mui/icons-material/Security';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import SpeedIcon from '@mui/icons-material/Speed';

function Features() {
  return (
    <div className="features">
      <h2>Our Features</h2>
      <div className="features-grid">
        <div className="feature-item">
          <SecurityIcon className="feature-icon" />
          <h3>Advanced Security</h3>
          <p>AI-driven security features to keep your premises safe and secure.</p>
        </div>
        <div className="feature-item">
          <IntegrationInstructionsIcon className="feature-icon" />
          <h3>Seamless Integration</h3>
          <p>Integrates effortlessly with your existing security systems.</p>
        </div>
        <div className="feature-item">
          <AccessibilityNewIcon className="feature-icon" />
          <h3>User-Friendly Interface</h3>
          <p>Designed with a user-centric approach for ease of use.</p>
        </div>
        <div className="feature-item">
          <SpeedIcon className="feature-icon" />
          <h3>High Performance</h3>
          <p>Optimized for fast performance and reliability.</p>
        </div>
      </div>
    </div>
  );
}

export default Features;
