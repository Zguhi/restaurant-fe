import React from 'react';
import './TestimonialItem.css';

function TestimonialItem({ image, text, name, profession }) {
    return (
        <div className="testimonial-item bg-transparent border rounded p-4">
            <i className="fa fa-quote-left fa-2x text-primary mb-3"></i>
            <p>{text}</p>
            <div className="d-flex align-items-center">
                <img className="img-fluid flex-shrink-0 rounded-circle" src={image} style={{ width: '50px', height: '50px' }} alt={name} />
                <div className="ps-3">
                    <h5 className="mb-1">{name}</h5>
                    <small>{profession}</small>
                </div>
            </div>
        </div>
    );
}

export default TestimonialItem;