import React from 'react';
import './Service.css';
import ServiceItem from '../ServiceItem/ServiceItem';

function Service() {
    const services = [
        {
            icon: "fa fa-3x fa-user-tie text-primary mb-4",
            title: "Master Chefs",
            description: "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam",
            delay: "0.1s"
        },
        {
            icon: "fa fa-3x fa-utensils text-primary mb-4",
            title: "Quality Food",
            description: "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam",
            delay: "0.3s"
        },
        {
            icon: "fa fa-3x fa-cart-plus text-primary mb-4",
            title: "Online Order",
            description: "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam",
            delay: "0.5s"
        },
        {
            icon: "fa fa-3x fa-headset text-primary mb-4",
            title: "24/7 Service",
            description: "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam",
            delay: "0.7s"
        }
    ];

    return (
        <div className="container-xxl py-5">
            <div className="container">
                <div className="row g-4">
                    {services.map((service, index) => (
                        <ServiceItem
                            key={index}
                            icon={service.icon}
                            title={service.title}
                            description={service.description}
                            delay={service.delay}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Service;