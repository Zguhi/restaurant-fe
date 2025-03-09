import React, { useState } from 'react';
import './Menu.css';
import MenuItem from '../MenuItem/MenuItem';

// Lưu ý: Đường dẫn hình ảnh có thể cần điều chỉnh
import menu1 from '../../assets/images/menu-1.jpg';
import menu2 from '../../assets/images/menu-2.jpg';
import menu3 from '../../assets/images/menu-3.jpg';
import menu4 from '../../assets/images/menu-4.jpg';
import menu5 from '../../assets/images/menu-5.jpg';
import menu6 from '../../assets/images/menu-6.jpg';
import menu7 from '../../assets/images/menu-7.jpg';
import menu8 from '../../assets/images/menu-8.jpg';

function Menu() {
    const [activeTab, setActiveTab] = useState('tab-1');

    const menuItems = {
        breakfast: [
            { image: menu1, name: "Chicken Burger", price: "$115" },
            { image: menu2, name: "Chicken Burger", price: "$115" },
            { image: menu3, name: "Chicken Burger", price: "$115" },
            { image: menu4, name: "Chicken Burger", price: "$115" },
            { image: menu5, name: "Chicken Burger", price: "$115" },
            { image: menu6, name: "Chicken Burger", price: "$115" },
            { image: menu7, name: "Chicken Burger", price: "$115" },
            { image: menu8, name: "Chicken Burger", price: "$115" }
        ],
        lunch: [
            { image: menu1, name: "Chicken Burger", price: "$115" },
            { image: menu2, name: "Chicken Burger", price: "$115" },
            { image: menu3, name: "Chicken Burger", price: "$115" },
            { image: menu4, name: "Chicken Burger", price: "$115" },
            { image: menu5, name: "Chicken Burger", price: "$115" },
            { image: menu6, name: "Chicken Burger", price: "$115" },
            { image: menu7, name: "Chicken Burger", price: "$115" },
            { image: menu8, name: "Chicken Burger", price: "$115" }
        ],
        dinner: [
            { image: menu1, name: "Chicken Burger", price: "$115" },
            { image: menu2, name: "Chicken Burger", price: "$115" },
            { image: menu3, name: "Chicken Burger", price: "$115" },
            { image: menu4, name: "Chicken Burger", price: "$115" },
            { image: menu5, name: "Chicken Burger", price: "$115" },
            { image: menu6, name: "Chicken Burger", price: "$115" },
            { image: menu7, name: "Chicken Burger", price: "$115" },
            { image: menu8, name: "Chicken Burger", price: "$115" }
        ]
    };

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
                            <a
                                className={`d-flex align-items-center text-start mx-3 ms-0 pb-3 ${activeTab === 'tab-1' ? 'active' : ''}`}
                                onClick={() => setActiveTab('tab-1')}
                                href="#tab-1"
                                data-bs-toggle="pill"
                            >
                                <i className="fa fa-coffee fa-2x text-primary"></i>
                                <div className="ps-3">
                                    <small className="text-body">Popular</small>
                                    <h6 className="mt-n1 mb-0">Breakfast</h6>
                                </div>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className={`d-flex align-items-center text-start mx-3 pb-3 ${activeTab === 'tab-2' ? 'active' : ''}`}
                                onClick={() => setActiveTab('tab-2')}
                                href="#tab-2"
                                data-bs-toggle="pill"
                            >
                                <i className="fa fa-hamburger fa-2x text-primary"></i>
                                <div className="ps-3">
                                    <small className="text-body">Special</small>
                                    <h6 className="mt-n1 mb-0">Launch</h6>
                                </div>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className={`d-flex align-items-center text-start mx-3 me-0 pb-3 ${activeTab === 'tab-3' ? 'active' : ''}`}
                                onClick={() => setActiveTab('tab-3')}
                                href="#tab-3"
                                data-bs-toggle="pill"
                            >
                                <i className="fa fa-utensils fa-2x text-primary"></i>
                                <div className="ps-3">
                                    <small className="text-body">Lovely</small>
                                    <h6 className="mt-n1 mb-0">Dinner</h6>
                                </div>
                            </a>
                        </li>
                    </ul>
                    <div className="tab-content">
                        <div id="tab-1" className={`tab-pane fade show p-0 ${activeTab === 'tab-1' ? 'active' : ''}`}>
                            <div className="row g-4">
                                {menuItems.breakfast.map((item, index) => (
                                    <MenuItem
                                        key={index}
                                        image={item.image}
                                        name={item.name}
                                        price={item.price}
                                    />
                                ))}
                            </div>
                        </div>
                        <div id="tab-2" className={`tab-pane fade show p-0 ${activeTab === 'tab-2' ? 'active' : ''}`}>
                            <div className="row g-4">
                                {menuItems.lunch.map((item, index) => (
                                    <MenuItem
                                        key={index}
                                        image={item.image}
                                        name={item.name}
                                        price={item.price}
                                    />
                                ))}
                            </div>
                        </div>
                        <div id="tab-3" className={`tab-pane fade show p-0 ${activeTab === 'tab-3' ? 'active' : ''}`}>
                            <div className="row g-4">
                                {menuItems.dinner.map((item, index) => (
                                    <MenuItem
                                        key={index}
                                        image={item.image}
                                        name={item.name}
                                        price={item.price}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Menu;