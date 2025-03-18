import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Bootstrap and Font Awesome (nếu cần)
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css';

// Import SCSS đã tùy chỉnh
import './styles/main.scss';

// Import jQuery và Bootstrap JS
import $ from 'jquery';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// Import thư viện OwlCarousel sau khi đã khai báo jQuery
import 'owl.carousel';

// Import CSS của OwlCarousel
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

window.jQuery = window.$ = $; // Cần thiết cho các plugin jQuery
//console.log($.fn.jquery);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

reportWebVitals();