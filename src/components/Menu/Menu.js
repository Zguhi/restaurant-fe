import React from 'react';
import './Menu.css';
import menu1 from '../../assets/images/menu-1.jpg';
import menu2 from '../../assets/images/menu-2.jpg';
import menu3 from '../../assets/images/menu-3.jpg';
import menu4 from '../../assets/images/menu-4.jpg';
import menu5 from '../../assets/images/menu-5.jpg';
import menu6 from '../../assets/images/menu-6.jpg';
import menu7 from '../../assets/images/menu-7.jpg';
import menu8 from '../../assets/images/menu-8.jpg';

function Menu() {
    return (
        <div className="container-xxl py-5">
            <div className="container">
                <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                    <h5 className="section-title ff-secondary text-center text-primary fw-normal">Food Menu</h5>
                    <h1 className="mb-5">Most Popular Items</h1>
                </div>
                <div className="tab-class text-center wow fadeInUp" data-wow-delay="0.1s">
                    <ul className="nav nav-pills d-inline-flex justify-content-center border-bottom mb-5">
                        <li className="nav-item">
                            <a className="d-flex align-items-center text-start mx-3 ms-0 pb-3 active" data-bs-toggle="pill" href="#tab-1">
                                <i className="fa fa-coffee fa-2x text-primary"></i>
                                <div className="ps-3">
                                    <small className="text-body">Popular</small>
                                    <h6 className="mt-n1 mb-0">Breakfast</h6>
                                </div>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="d-flex align-items-center text-start mx-3 pb-3" data-bs-toggle="pill" href="#tab-2">
                                <i className="fa fa-hamburger fa-2x text-primary"></i>
                                <div className="ps-3">
                                    <small className="text-body">Special</small>
                                    <h6 className="mt-n1 mb-0">Launch</h6>
                                </div>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="d-flex align-items-center text-start mx-3 me-0 pb-3" data-bs-toggle="pill" href="#tab-3">
                                <i className="fa fa-utensils fa-2x text-primary"></i>
                                <div className="ps-3">
                                    <small className="text-body">Lovely</small>
                                    <h6 className="mt-n1 mb-0">Dinner</h6>
                                </div>
                            </a>
                        </li>
                    </ul>
                    <div className="tab-content">
                        <div id="tab-1" className="tab-pane fade show p-0 active">
                            <div className="row g-4">
                                {/* Breakfast menu items */}
                                <MenuItem image={menu1} name="Chicken Burger" price="$115" />
                                <MenuItem image={menu2} name="Chicken Burger" price="$115" />
                                <MenuItem image={menu3} name="Chicken Burger" price="$115" />
                                <MenuItem image={menu4} name="Chicken Burger" price="$115" />
                                <MenuItem image={menu5} name="Chicken Burger" price="$115" />
                                <MenuItem image={menu6} name="Chicken Burger" price="$115" />
                                <MenuItem image={menu7} name="Chicken Burger" price="$115" />
                                <MenuItem image={menu8} name="Chicken Burger" price="$115" />
                            </div>
                        </div>
                        <div id="tab-2" className="tab-pane fade show p-0">
                            <div className="row g-4">
                                {/* Launch menu items */}
                                <MenuItem image={menu1} name="Chicken Burger" price="$115" />
                                <MenuItem image={menu2} name="Chicken Burger" price="$115" />
                                <MenuItem image={menu3} name="Chicken Burger" price="$115" />
                                <MenuItem image={menu4} name="Chicken Burger" price="$115" />
                                <MenuItem image={menu5} name="Chicken Burger" price="$115" />
                                <MenuItem image={menu6} name="Chicken Burger" price="$115" />
                                <MenuItem image={menu7} name="Chicken Burger" price="$115" />
                                <MenuItem image={menu8} name="Chicken Burger" price="$115" />
                            </div>
                        </div>
                        <div id="tab-3" className="tab-pane fade show p-0">
                            <div className="row g-4">
                                {/* Dinner menu items */}
                                <MenuItem image={menu1} name="Chicken Burger" price="$115" />
                                <MenuItem image={menu2} name="Chicken Burger" price="$115" />
                                <MenuItem image={menu3} name="Chicken Burger" price="$115" />
                                <MenuItem image={menu4} name="Chicken Burger" price="$115" />
                                <MenuItem image={menu5} name="Chicken Burger" price="$115" />
                                <MenuItem image={menu6} name="Chicken Burger" price="$115" />
                                <MenuItem image={menu7} name="Chicken Burger" price="$115" />
                                <MenuItem image={menu8} name="Chicken Burger" price="$115" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

// MenuItem Component
function MenuItem({ image, name, price }) {
    return (
        <div className="col-lg-6">
            <div className="d-flex align-items-center">
                <img className="flex-shrink-0 img-fluid rounded" src={image} alt="" style={{ width: '80px' }} />
                <div className="w-100 d-flex flex-column text-start ps-4">
                    <h5 className="d-flex justify-content-between border-bottom pb-2">
                        <span>{name}</span>
                        <span className="text-primary">{price}</span>
                    </h5>
                    <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                </div>
            </div>
        </div>
    );
}

export default Menu;