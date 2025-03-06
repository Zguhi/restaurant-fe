import React, { useEffect } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Hero from '../../components/Hero/Hero';
import Service from '../../components/Service/Service';
import About from '../../components/About/About';
import Menu from '../../components/Menu/Menu';
import Reservation from '../../components/Reservation/Reservation';
import Team from '../../components/Team/Team';
import Testimonial from '../../components/Testimonial/Testimonial';
import Footer from '../../components/Footer/Footer';
import './HomePage.css';

// Import WOW.js nếu cần
import WOW from 'wowjs';

function HomePage() {
    useEffect(() => {
        // Khởi tạo WOW.js
        if (typeof WOW === 'function') {
            new WOW.WOW({
                live: false
            }).init();
        }
    }, []);

    return (
        <>
            <Navbar />
            <Hero />
            <Service />
            <About />
            <Menu />
            <Reservation />
            <Team />
            <Testimonial />
            <Footer />
        </>
    );
}

export default HomePage;