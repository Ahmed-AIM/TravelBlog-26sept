import React, { useEffect, useState } from 'react';
import '../styles/Destinations.css';

const Destinations = () => {
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    // Fetch destinations data
    fetch('/data.json')
      .then(response => response.json())
      .then(data => setDestinations(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="destinations-container">
      <h1>Popular Destinations</h1>
      <div className="destinations-list">
        {destinations.map((destination, index) => (
          <div key={index} className="destination-card">
            <img src={destination.images[0]} alt={destination.title} className="destination-image" />
            <h2>{destination.title}</h2>
            <p>{destination.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Destinations;