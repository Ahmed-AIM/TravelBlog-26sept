import React from 'react';
import '../styles/Destinations.css';

const destinations = [
  {
    name: 'Cairo',
    description: 'Explore the bustling capital of Egypt, home to the iconic Pyramids of Giza and the Sphinx.',
    image: 'path/to/cairo.jpg'
  },
  {
    name: 'Luxor',
    description: 'Discover the ancient city of Luxor, known for its stunning temples and the Valley of the Kings.',
    image: 'path/to/luxor.jpg'
  },
  {
    name: 'Aswan',
    description: 'Experience the beauty of Aswan, with its picturesque Nile views and historic sites.',
    image: 'path/to/aswan.jpg'
  },
  {
    name: 'Sharm El Sheikh',
    description: 'Relax in the resort town of Sharm El Sheikh, famous for its beautiful beaches and coral reefs.',
    image: 'path/to/sharm.jpg'
  }
];

const Destinations = () => {
  return (
    <div className="destinations-container">
      <h1>Popular Destinations</h1>
      <div className="destinations-list">
        {destinations.map((destination, index) => (
          <div key={index} className="destination-card">
            <img src={destination.image} alt={destination.name} className="destination-image" />
            <h2>{destination.name}</h2>
            <p>{destination.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Destinations;