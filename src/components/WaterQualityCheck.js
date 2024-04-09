// WaterQualityCheck.js
import React, { useState, useEffect } from 'react';
import './WaterQualityCheck.css'; // Import your CSS file for water quality check page styles
import Navbar from './Navbar';

function WaterQualityCheck() {
  // Sample water quality data
  const [waterQualityData, setWaterQualityData] = useState([
    { date: '2024-02-01', result: 'Good' },
    { date: '2024-02-05', result: 'Moderate' },
    { date: '2024-02-10', result: 'Poor' },
  ]);

  // Function to fetch water quality data from the server
  useEffect(() => {
    // Implement logic to fetch water quality data from the server
    // Update the waterQualityData state with fetched data
  }, []);

  return (
    <>
    <Navbar/>
    <div className="water-quality-container">
      <h2>Check Water Quality</h2>
      <div className="water-quality-summary">
        <h3>Water Quality Summary</h3>
        <table className="water-quality-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Result</th>
            </tr>
          </thead>
          <tbody>
            {waterQualityData.map((entry, index) => (
              <tr key={index}>
                <td>{entry.date}</td>
                <td>{entry.result}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </>
  );
}

export default WaterQualityCheck;
