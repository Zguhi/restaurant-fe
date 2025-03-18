import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Import các trang
import HomePage from './pages/HomePage/HomePage';
import AboutPage from './pages/AboutPage/AboutPage';
import ServicePage from './pages/ServicePage/ServicePage';
import MenuPage from './pages/MenuPage/MenuPage';
import BookingPage from './pages/BookingPage/BookingPage';
import TeamPage from './pages/TeamPage/TeamPage';
import TestimonialPage from './pages/TestimonialPage/TestimonialPage';
import ContactPage from './pages/ContactPage/ContactPage';

// Import Spinner component
import Spinner from './components/Spinner/Spinner';

// Import scrollToTop utility
import { initScrollToTop } from './utils/scrollToTop';

function App() {
  useEffect(() => {
    // Ẩn spinner sau khi tải trang
    const spinner = document.getElementById('spinner');
    if (spinner) {
      setTimeout(() => {
        spinner.classList.remove('show');
      }, 1000);
    }

    // Khởi tạo scroll to top button
    initScrollToTop();
  }, []);

  return (
      <Router>
        <div className="App">
          <Spinner />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/service" element={<ServicePage />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/booking" element={<BookingPage />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/testimonial" element={<TestimonialPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </div>
      </Router>
  );
}

export default App;