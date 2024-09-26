import React from 'react';
import '../styles/Sidebar.css';

const Sidebar = ({ recentPosts }) => {
  return (
    <aside className="sidebar">
      <div className="about-author">
        <h2>About the Author</h2>
        <p>Short bio about the author...</p>
      </div>
      <div className="recent-posts">
        <h2>Recent Posts</h2>
        <ul>
          {recentPosts.map(post => (
            <li key={post.id}><a href={`/post/${post.id}`}>{post.title}</a></li>
          ))}
        </ul>
      </div>
      <div className="categories">
        <h2>Categories</h2>
        <ul>
          <li><a href="/category/egypt">Egypt</a></li>
          <li><a href="/category/travel">Travel</a></li>
          <li><a href="/category/adventure">Adventure</a></li>
        </ul>
      </div>
      <div className="social-media">
        <h2>Follow Us</h2>
        <a href="https://facebook.com" className="social-link">Facebook</a>
        <a href="https://twitter.com" className="social-link">Twitter</a>
        <a href="https://instagram.com" className="social-link">Instagram</a>
      </div>
    </aside>
  );
};

export default Sidebar;