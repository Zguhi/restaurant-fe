import React, { useEffect, useRef } from 'react';
import './Testimonial.css';
import TestimonialItem from '../TestimonialItem/TestimonialItem';

// Lưu ý: Đường dẫn hình ảnh có thể cần điều chỉnh
import testimonial1 from '../../assets/images/testimonial-1.jpg';
import testimonial2 from '../../assets/images/testimonial-2.jpg';
import testimonial3 from '../../assets/images/testimonial-3.jpg';
import testimonial4 from '../../assets/images/testimonial-4.jpg';

function Testimonial() {
    const carouselRef = useRef(null);

    useEffect(() => {
        // Khởi tạo Owl Carousel (cần jQuery và owl carousel)
        if (window.jQuery && window.jQuery.fn.owlCarousel && carouselRef.current) {
            const $ = window.jQuery;
            $(carouselRef.current).owlCarousel({
                autoplay: true,
                smartSpeed: 1000,
                center: true,
                margin: 24,
                dots: true,
                loop: true,
                nav: false,
                responsive: {
                    0: { items: 1 },
                    768: { items: 2 },
                    992: { items: 3 }
                }
            });
        }
    }, []);

    const testimonials = [
        {
            image: testimonial1,
            text: "Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam",
            name: "Client Name",
            profession: "Profession"
        },
        {
            image: testimonial2,
            text: "Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam",
            name: "Client Name",
            profession: "Profession"
        },
        {
            image: testimonial3,
            text: "Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam",
            name: "Client Name",
            profession: "Profession"
        },
        {
            image: testimonial4,
            text: "Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam",
            name: "Client Name",
            profession: "Profession"
        }
    ];

    return (
        <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
            <div className="container">
                <div className="text-center">
                    <h5 className="section-title ff-secondary text-center text-primary fw-normal">Testimonial</h5>
                    <h1 className="mb-5">Our Clients Say!!!</h1>
                </div>
                <div ref={carouselRef} className="owl-carousel testimonial-carousel">
                    {testimonials.map((testimonial, index) => (
                        <TestimonialItem
                            key={index}
                            image={testimonial.image}
                            text={testimonial.text}
                            name={testimonial.name}
                            profession={testimonial.profession}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Testimonial;