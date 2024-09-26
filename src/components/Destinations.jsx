import React, { useEffect, useState } from 'react';
import '../styles/Destinations.css';
import BlogPost from './BlogPost';

const Destinations = () => {
  const [destinations, setDestinations] = useState([]);
  const [uniqueDestinations, setUniqueDestinations] = useState([]);
  const [selectedCity, setSelectedCity] = useState(null);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch destinations data
    fetch('/data.json')
      .then(response => response.json())
      .then(data => {
        setDestinations(data);
        const allDestinations = data.flatMap(post => post.Destination);
        const uniqueDestinations = [...new Set(allDestinations)];
        setUniqueDestinations(uniqueDestinations);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleCityClick = (city) => {
    setSelectedCity(city);
    const cityPosts = destinations.filter(post => post.Destination.includes(city));
    setPosts(cityPosts);
  };

  return (
    <div className="destinations-container">
      <h1>Popular Destinations</h1>
      <div className="destinations-list">
        {uniqueDestinations.map((destination, index) => (
          <div key={index} className="destination-card" onClick={() => handleCityClick(destination)}>
            <h2>{destination}</h2>
          </div>
        ))}
      </div>
      {selectedCity && (
        <div className="dest-post-container">
          <h2>Blog Posts about {selectedCity}</h2>
          <div className="destination-posts">
          {posts.map((post, index) => (
            <div className="post-card" key={post.id}>
            <BlogPost key={post.id} post={post} />
          </div>
            
          ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Destinations;