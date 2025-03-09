import React from 'react';
import './Team.css';
import TeamMember from '../TeamMember/TeamMember';

// Lưu ý: Đường dẫn hình ảnh có thể cần điều chỉnh
import team1 from '../../assets/images/team-1.jpg';
import team2 from '../../assets/images/team-2.jpg';
import team3 from '../../assets/images/team-3.jpg';
import team4 from '../../assets/images/team-4.jpg';

function Team() {
    const teamMembers = [
        {
            image: team1,
            name: "Full Name",
            position: "Designation",
            delay: "0.1s"
        },
        {
            image: team2,
            name: "Full Name",
            position: "Designation",
            delay: "0.3s"
        },
        {
            image: team3,
            name: "Full Name",
            position: "Designation",
            delay: "0.5s"
        },
        {
            image: team4,
            name: "Full Name",
            position: "Designation",
            delay: "0.7s"
        }
    ];

    return (
        <div className="container-xxl pt-5 pb-3">
            <div className="container">
                <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                    <h5 className="section-title ff-secondary text-center text-primary fw-normal">Team Members</h5>
                    <h1 className="mb-5">Our Master Chefs</h1>
                </div>
                <div className="row g-4">
                    {teamMembers.map((member, index) => (
                        <TeamMember
                            key={index}
                            image={member.image}
                            name={member.name}
                            position={member.position}
                            delay={member.delay}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Team;