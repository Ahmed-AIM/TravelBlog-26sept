import React, { useState, useEffect } from 'react';
import '../styles/UserDashboard.css'; // Update the import path

const UserDashboard = ({ userId }) => {
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Fetch user data
    fetch('/users.json')
      .then(response => response.json())
      .then(data => {
        const currentUser = data.find(user => user.id === userId);
        setUser(currentUser);
      })
      .catch(error => console.error('Error fetching user data:', error));

    // Fetch posts data
    fetch('/data.json')
      .then(response => response.json())
      .then(data => {
        const userPosts = data.filter(post => post.author.uId === userId);
        setPosts(userPosts);
      })
      .catch(error => console.error('Error fetching posts data:', error));
  }, [userId]);

  return (
    <div className="dashboard-container">
      {user && (
        <div className="user-info">
          <h2>Welcome, {user.name}!</h2>
          <p>Email: {user.email}</p>
          <p>Member since: {new Date(user.createdAt).toLocaleDateString()}</p>
        </div>
      )}
      <div className="user-posts">
        <h3>Your Posts</h3>
        {posts.length > 0 ? (
          posts.map(post => (
            <div key={post.id} className="post-item">
              <h4>{post.title}</h4>
              <p>{post.content}</p>
              <p><strong>Tags:</strong> {post.tags.join(', ')}</p>
              <div className="post-images">
                {post.images.map((image, index) => (
                  <img key={index} src={image} alt={`Post ${index + 1}`} />
                ))}
              </div>
            </div>
          ))
        ) : (
          <p>You have not created any posts yet.</p>
        )}
      </div>
    </div>
  );
};

export default UserDashboard;
