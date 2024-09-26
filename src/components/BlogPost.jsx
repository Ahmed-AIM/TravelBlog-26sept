import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'bootstrap-icons/font/bootstrap-icons.css';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/BlogPost.css';
import BlogPostPage from './BlogPostPage';

const BlogPost = ({ post }) => {
  const navigate = useNavigate();

  const handleTitleClick = (postId) => {
    navigate(`/${postId}`);
  };

  return (
    <div className="blog-post">
      <h1 className="post-title" onClick={() => handleTitleClick(post.id)} style={{fontFamily:'comic sans ms', color:'#154360', cursor:'pointer'}}>{post.title}</h1>
      
      <div className="post-meta">
        <span>By: {post.author.Uname}</span> | <span>{post.date}</span> 
        <div>
        <span>Destination: {Array.isArray(post.Destination) ? post.Destination.join(', ') : post.Destination}</span> |  <span>Country: {post.Country}</span>
        <div>
        <span><span style={{color: 'blue'}}> Tags: </span> {post.tags.join(', ')}</span>
        </div>
          </div> 
        

      </div>
      <img src={post.images[0]} alt={post.title} className="featured-image" />
      {/* {post.images[0] && <img src={post.images[0]} alt={post.title} className="featured-image" />} */}
      <div className="post-content" dangerouslySetInnerHTML={{ __html: post.content }}></div>
      <div className="social-share">
      <span className="social-share-button">
      <FontAwesomeIcon style={{color:'blue', backgroundColor:'white', borderRadius:'50%', padding:'20px'}} icon="fa-brands fa-facebook-f" />
        
      </span>
      <span className="social-share-button" >
      <FontAwesomeIcon style={{color:'blue', backgroundColor:'white', borderRadius: '50%', padding:'20px'}} icon="fa-brands fa-twitter" />
      </span>
    </div>
    </div>
  );
};

export default BlogPost;