import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import './ContactPage.scss';

function ContactPage() {
    return (
        <>
            <Header />
            <div className="container-xxl py-5 bg-dark hero-header mb-5">
                <div className="container text-center my-5 pt-5 pb-4">
                    <h1 className="display-3 text-white mb-3 animated slideInDown">Contact Us</h1>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb justify-content-center text-uppercase">
                            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                            <li className="breadcrumb-item"><a href="#">Pages</a></li>
                            <li className="breadcrumb-item text-white active" aria-current="page">Contact</li>
                        </ol>
                    </nav>
                </div>
            </div>
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                        <h5 className="section-title ff-secondary text-center text-primary fw-normal">Contact Us</h5>
                        <h1 className="mb-5">Contact For Any Query</h1>
                    </div>
                    {/* Form và thông tin liên hệ */}
                </div>
            </div>
            <Footer />
        </>
    );
}

export default ContactPage;