import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Testimonial from '../../components/Testimonial/Testimonial';
import './TestimonialPage.scss';

function TestimonialPage() {
    return (
        <>
            <Header />
            <div className="container-xxl py-5 bg-dark hero-header mb-5">
                <div className="container text-center my-5 pt-5 pb-4">
                    <h1 className="display-3 text-white mb-3 animated slideInDown">Testimonial</h1>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb justify-content-center text-uppercase">
                            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                            <li className="breadcrumb-item"><a href="#">Pages</a></li>
                            <li className="breadcrumb-item text-white active" aria-current="page">Testimonial</li>
                        </ol>
                    </nav>
                </div>
            </div>
            <Testimonial />
            <Footer />
        </>
    );
}

export default TestimonialPage;