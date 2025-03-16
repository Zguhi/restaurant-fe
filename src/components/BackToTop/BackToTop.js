import React, { useEffect, useState } from 'react';
import './BackToTop.scss';

function BackToTop() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);

        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <a
            href="#"
            className={`btn btn-lg btn-primary btn-lg-square back-to-top ${isVisible ? 'active' : ''}`}
            onClick={(e) => {
                e.preventDefault();
                scrollToTop();
            }}
        >
            <i className="bi bi-arrow-up"></i>
        </a>
    );
}

export default BackToTop;