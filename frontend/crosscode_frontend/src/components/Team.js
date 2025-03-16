import React from "react";
import bibin from "../assets/images/bibin.jpeg";
import hakeem from "../assets/images/hakeem.jpg";
import amal from "../assets/images/teammember1.jpg";

export default function Team() {
    return (
        <section id="team" className="team-section">
            <div className="container">
                <h2>Our Team</h2>
                <div className="team-grid">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="team-card">
                            <div className="image-container">
                                <img src={member.image} alt={member.name} />
                            </div>
                            <h5>{member.name}</h5>
                            <p>{member.role}</p>
                            <div className="social-links">
                                <a href="#"><i className="fab fa-facebook"></i></a>
                                <a href="#"><i className="fab fa-twitter"></i></a>
                                <a href="#"><i className="fab fa-linkedin"></i></a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <style jsx>{`
                .team-section {
                    padding: 50px 0;
                    background-color: #f8f9fa;
                    text-align: center;
                }
                .container {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 0 20px;
                }
                .team-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                    gap: 20px;
                    justify-content: center;
                }
                .team-card {
                    background-color: #fff;
                    border-radius: 10px;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                    padding: 20px;
                    text-align: center;
                }
                .image-container {
                    width: 100%;
                    max-width: 200px;
                    height: 200px;
                    margin: 0 auto 15px;
                    overflow: hidden;
                    border-radius: 50%;
                    border: 2px solid #ddd;
                }
                .image-container img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
                .social-links a {
                    color: #555;
                    font-size: 1.2rem;
                    margin: 0 10px;
                    text-decoration: none;
                }
            `}</style>
        </section>
    );
}

const teamMembers = [
    { name: "Bibin", role: "Marketing Head", image: bibin },
    { name: "Amal", role: "Lead Developer", image: amal },
    { name: "Abdul Hakeem", role: "Jr. Developer", image: hakeem },
];
