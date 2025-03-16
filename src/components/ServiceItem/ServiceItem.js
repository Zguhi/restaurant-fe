import React from 'react';
import './ServiceItem.scss';

function ServiceItem({ icon, title, description, delay }) {
    return (
        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay={delay}>
            <div className="service-item rounded pt-3">
                <div className="p-4">
                    <i className={icon}></i>
                    <h5>{title}</h5>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
}

export default ServiceItem;