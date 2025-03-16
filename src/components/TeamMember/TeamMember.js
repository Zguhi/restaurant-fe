import React from 'react';
import './TeamMember.scss';

function TeamMember({ image, name, position, delay }) {
    return (
        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay={delay}>
            <div className="team-item text-center rounded overflow-hidden">
                <div className="rounded-circle overflow-hidden m-4">
                    <img className="img-fluid" src={image} alt={name} />
                </div>
                <h5 className="mb-0">{name}</h5>
                <small>{position}</small>
                <div className="d-flex justify-content-center mt-3">
                    <a className="btn btn-square btn-primary mx-1" href="#"><i className="fab fa-facebook-f"></i></a>
                    <a className="btn btn-square btn-primary mx-1" href="#"><i className="fab fa-twitter"></i></a>
                    <a className="btn btn-square btn-primary mx-1" href="#"><i className="fab fa-instagram"></i></a>
                </div>
            </div>
        </div>
    );
}

export default TeamMember;