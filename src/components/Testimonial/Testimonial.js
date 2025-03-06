import React, { useEffect, useRef } from 'react';
import './Testimonial.css';
import testimonial1 from '../../assets/images/testimonial-1.jpg';
import testimonial2 from '../../assets/images/testimonial-2.jpg';
import testimonial3 from '../../assets/images/testimonial-3.jpg';
import testimonial4 from '../../assets/images/testimonial-4.jpg';

function Testimonial() {
    const owlCarouselRef = useRef(null);

    useEffect(() => {
        // Khởi tạo OwlCarousel
        // Bạn có thể cần thêm jQuery và thư viện OwlCarousel
        if (window.jQuery && window.jQuery.fn.owlCarousel && owlCarouselRef.current) {
            window.jQuery(owlCarouselRef.current).owlCarousel({
                autoplay: true,
                smartSpeed: 1000,
                center: true,
                margin: 24,
                dots: true,
                loop: true,
                nav: false,
                responsive: {
                    0: {
                        items: 1
                    },
                    768: {
                        items: 2
                    },
                    992: {
                        items: 3
                    }
                }
            });
        }
    }, []);

    return (
        <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
            <div className="container">
                <div className="text-center">
                    <h5 className="section-title ff-secondary text-center text-primary fw-normal">Testimonial</h5>
                    <h1 className="mb-5">Our Clients Say!!!</h1>
                </div>
                <div ref={owlCarouselRef} className="owl-carousel testimonial-carousel">
                    <TestimonialItem image={testimonial1} />
                    <TestimonialItem image={testimonial2} />
                    <TestimonialItem image={testimonial3} />
                    <TestimonialItem image={testimonial4} />
                </div>
            </div>
        </div>
    );
}

// TestimonialItem Component
function TestimonialItem({ image }) {
    return (
        <div className="testimonial-item bg-transparent border rounded p-4">
            <i className="fa fa-quote-left fa-2x text-primary mb-3"></i>
            <p>Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</p>
            <div className="d-flex align-items-center">
                <img className="img-fluid flex-shrink-0 rounded-circle" src={image} style={{ width: '50px', height: '50px' }} alt="" />
                <div className="ps-3">
                    <h5 className="mb-1">Client Name</h5>
                    <small>Profession</small>
                </div>
            </div>
        </div>
    );
}

export default Testimonial;