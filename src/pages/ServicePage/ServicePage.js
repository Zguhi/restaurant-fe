import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Service from '../../components/Service/Service';
import './ServicePage.css';

function ServicePage() {
    return (
        <>
            <Header />
            <div className="container-xxl py-5 bg-dark hero-header mb-5">
                <div className="container text-center my-5 pt-5 pb-4">
                    <h1 className="display-3 text-white mb-3 animated slideInDown">Services</h1>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb justify-content-center text-uppercase">
                            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                            <li className="breadcrumb-item"><a href="#">Pages</a></li>
                            <li className="breadcrumb-item text-white active" aria-current="page">Service</li>
                        </ol>
                    </nav>
                </div>
            </div>
            <Service />
            <Footer />
        </>
    );
}

export default ServicePage;