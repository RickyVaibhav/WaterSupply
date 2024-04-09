import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Import your component-specific CSS file
import Navbar from './Navbar';

function Home() {
  return (
    <>
    <Navbar/>
    <div className="home-container">
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Welcome to Water Management System</h1>
          <p className="hero-description">Efficiently managing water resources for a sustainable future.</p>
        </div>
      </section>

      <section className="features-section">
        {/* <div className="feature">
          <h2 className="feature-title">Report a Problem</h2>
          <p className="feature-description">Report water-related issues such as supply disruptions, low pressure, or water quality problems online.</p>
          <Link to="/view-complain" className="feature-link">View Complain</Link>
        </div> */}
        <div className="feature">
          <h2 className="feature-title">Water Quality Check</h2>
          <p className="feature-description">Monitor the quality of water supplied to your area with real-time updates and testing results.</p>
        </div>
        <div className="feature">
          <h2 className="feature-title">Notices</h2>
          <p className="feature-description">Check the latest notices and updates regarding water management.</p>
          <Link to="/notice-view" className="feature-link">View Notices</Link>
        </div>
      </section>
    </div>
    </>
  );
}

export default Home;
