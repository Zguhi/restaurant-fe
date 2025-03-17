import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Hero from '../../components/Hero/Hero';
import About from '../../components/About/About';
import Menu from '../../components/Menu/Menu';
import Reservation from '../../components/Reservation/Reservation';
import './HomePage.scss';

function HomePage() {
    return (
        <>
            <Header />
            <Hero />
            <About />
            <Menu />
            <Reservation />
            <Footer />
        </>
    );
}

export default HomePage;