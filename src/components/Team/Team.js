import React from 'react';
import './Team.css';
import team1 from '../../assets/images/team-1.jpg';
import team2 from '../../assets/images/team-2.jpg';
import team3 from '../../assets/images/team-3.jpg';
import team4 from '../../assets/images/team-4.jpg';

function Team() {
    return (
        <div className="container-xxl pt-5 pb-3">
            <div className="container">
                <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                    <h5 className="section-title ff-secondary text-center text-primary fw-normal">Team Members</h5>
                    <h1 className="mb-5">Our Master Chefs</h1>
                </div>
                <div className="row g-4">
                    <TeamMember image={team1} delay="0.1s" />
                    <TeamMember image={team2} delay="0.3s" />
                    <TeamMember image={team3} delay="0.5s" />
                    <TeamMember image={team4} delay="0.7s" />
                </div>
            </div>
        </div>
    );
}

// TeamMember Component
function TeamMember({ image, delay }) {
    return (
        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay={delay}>
            <div className="team-item text-center rounded overflow-hidden">
                <div className="rounded-circle overflow-hidden m-4">
                    <img className="img-fluid" src={image} alt="" />
                </div>
                <h5 className="mb-0">Full Name</h5>
                <small>Designation</small>
                <div className="d-flex justify-content-center mt-3">
                    <a className="btn btn-square btn-primary mx-1" href=""><i className="fab fa-facebook-f"></i></a>
                    <a className="btn btn-square btn-primary mx-1" href=""><i className="fab fa-twitter"></i></a>
                    <a className="btn btn-square btn-primary mx-1" href=""><i className="fab fa-instagram"></i></a>
                </div>
            </div>
        </div>
    );
}

export default Team;