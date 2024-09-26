import 'bootstrap-icons/font/bootstrap-icons.css';
import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import About from './components/About';
import BlogPostForm from './components/BlogPostForm';
import BlogPostPage from './components/BlogPostPage';
import Contact from './components/Contact'; // Added import
import Destinations from './components/Destinations'; // Added import
import Footer from './components/Footer';
import Homepage from './components/Homepage';
import NavBar from './components/NavBar';
import SearchResults from './components/SearchResults';
import UserDashboard from './components/UserDashboard';
import './fontawesome';
import './styles/App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <main>
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/new-post" element={<BlogPostForm />} />
            <Route path="/dashboard" element={<UserDashboard userId={1} />} />
            <Route path="/" element={<Homepage />} />
            <Route path="/destinations" element={<Destinations />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/search" element={<SearchResults />} />
            <Route path="/:postId" element={<BlogPostPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
