import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
// Import jQuery và Bootstrap JS
import $ from 'jquery';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// Import CSS tùy chỉnh
import './styles/style.css';

// Import CSS của OwlCarousel
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

// Import thư viện OwlCarousel sau khi đã khai báo jQuery
import 'owl.carousel';

window.jQuery = window.$ = $; // Cần thiết cho các plugin jQuery


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(



);

reportWebVitals();