import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BlogPost from './BlogPost';
import '../styles/BlogPostPage.css';

const BlogPostPage = () => {
  const { postId } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch('/data.json')
      .then(response => response.json())
      .then(data => {
        const foundPost = data.find(post => post.id === postId);
        setPost(foundPost);
      })
      .catch(error => console.error('Error fetching post data:', error));
  }, [postId]);

  return (
    <div className="blog-post-page">
      {post ? <BlogPost key={post.id} post={post} /> : <p>Loading...</p>}
    </div>
  );
};

export default BlogPostPage;

