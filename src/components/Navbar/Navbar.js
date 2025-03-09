import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    const [isSticky, setIsSticky] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="container-xxl position-relative p-0">
            <nav className={`navbar navbar-expand-lg navbar-dark ${isSticky ? 'sticky-top' : ''} bg-dark px-4 px-lg-5 py-3 py-lg-0`}>
                <Link to="/" className="navbar-brand p-0">
                    <h1 className="text-primary m-0"><i className="fa fa-utensils me-3"></i>Restoran</h1>
                    {/* <img src="img/logo.png" alt="Logo" /> */}
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="fa fa-bars"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto py-0 pe-4">
                        <Link to="/" className={`nav-item nav-link ${location.pathname === '/' ? 'active' : ''}`}>Home</Link>
                        <Link to="/about" className={`nav-item nav-link ${location.pathname === '/about' ? 'active' : ''}`}>About</Link>
                        <Link to="/service" className={`nav-item nav-link ${location.pathname === '/service' ? 'active' : ''}`}>Service</Link>
                        <Link to="/menu" className={`nav-item nav-link ${location.pathname === '/menu' ? 'active' : ''}`}>Menu</Link>
                        <div className="nav-item dropdown">
                            <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                            <div className="dropdown-menu m-0">
                                <Link to="/booking" className="dropdown-item">Booking</Link>
                                <Link to="/team" className="dropdown-item">Our Team</Link>
                                <Link to="/testimonial" className="dropdown-item">Testimonial</Link>
                            </div>
                        </div>
                        <Link to="/contact" className={`nav-item nav-link ${location.pathname === '/contact' ? 'active' : ''}`}>Contact</Link>
                    </div>
                    <Link to="/booking" className="btn btn-primary py-2 px-4">Book A Table</Link>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;