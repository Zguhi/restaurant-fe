import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.scss';
import logoImg from '../assets/images/logo.png'; // Cập nhật đường dẫn tới logo của bạn

const Header = () => {
    const [isSticky, setIsSticky] = useState(false);
    const [showSpinner, setShowSpinner] = useState(true);

    useEffect(() => {
        // Xử lý hiệu ứng sticky cho navigation
        const handleScroll = () => {
            if (window.scrollY > 200) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        // Xử lý ẩn spinner sau khi trang đã load xong
        const hideSpinner = () => {
            setTimeout(() => {
                setShowSpinner(false);
            }, 1000);
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('load', hideSpinner);
        hideSpinner(); // Gọi ngay để đảm bảo spinner ẩn đi sau khi component mount

        // Cleanup event listeners
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('load', hideSpinner);
        };
    }, []);

    return (
        <>
            {/* Spinner Start */}
            {showSpinner && (
                <div id="spinner" className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
                    <div className="spinner-border text-primary" style={{ width: '3rem', height: '3rem' }} role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
            )}
            {/* Spinner End */}

            {/* Navbar & Hero Start */}
            <div className="container-xxl position-relative p-0">
                <nav className={`navbar navbar-expand-lg navbar-dark bg-dark px-4 px-lg-5 py-3 py-lg-0 ${isSticky ? 'sticky-top' : ''}`}>
                    <Link to="/" className="navbar-brand p-0">
                        <h1 className="text-primary m-0"><i className="fa fa-utensils me-3"></i>Restoran</h1>
                        {/* <img src={logoImg} alt="Logo" /> */}
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span className="fa fa-bars"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <div className="navbar-nav ms-auto py-0 pe-4">
                            <NavLink to="/" className={({isActive}) =>
                                isActive ? "nav-item nav-link active" : "nav-item nav-link"
                            }>
                                Trang chủ
                            </NavLink>
                            <NavLink to="/about" className={({isActive}) =>
                                isActive ? "nav-item nav-link active" : "nav-item nav-link"
                            }>
                                Giới thiệu
                            </NavLink>
                            <NavLink to="/service" className={({isActive}) =>
                                isActive ? "nav-item nav-link active" : "nav-item nav-link"
                            }>
                                Dịch vụ
                            </NavLink>
                            <NavLink to="/menu" className={({isActive}) =>
                                isActive ? "nav-item nav-link active" : "nav-item nav-link"
                            }>
                                Thực đơn
                            </NavLink>
                            <div className="nav-item dropdown">
                                <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Trang</a>
                                <div className="dropdown-menu m-0">
                                    <Link to="/booking" className="dropdown-item">Đặt bàn</Link>
                                    <Link to="/team" className="dropdown-item">Đầu bếp</Link>
                                    <Link to="/testimonial" className="dropdown-item">Đánh giá</Link>
                                </div>
                            </div>
                            <NavLink to="/contact" className={({isActive}) =>
                                isActive ? "nav-item nav-link active" : "nav-item nav-link"
                            }>
                                Liên hệ
                            </NavLink>
                        </div>
                        <Link to="/booking" className="btn btn-primary py-2 px-4">Đặt bàn ngay</Link>
                    </div>
                </nav>

                <div className="container-xxl py-5 bg-dark hero-header mb-5">
                    <div className="container my-5 py-5">
                        <div className="row align-items-center g-5">
                            <div className="col-lg-6 text-center text-lg-start">
                                <h1 className="display-3 text-white animated slideInLeft">Thưởng thức<br />Món ăn ngon</h1>
                                <p className="text-white animated slideInLeft mb-4 pb-2">
                                    Nhà hàng chúng tôi tự hào mang đến cho quý khách những trải nghiệm ẩm thực tuyệt vời nhất với các món ăn được chế biến từ nguyên liệu tươi ngon nhất.
                                </p>
                                <Link to="/booking" className="btn btn-primary py-sm-3 px-sm-5 me-3 animated slideInLeft">Đặt bàn ngay</Link>
                            </div>
                            <div className="col-lg-6 text-center text-lg-end overflow-hidden">
                                <img className="img-fluid" src="/img/hero.png" alt="Hero" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Navbar & Hero End */}
        </>
    );
};

export default Header;