import React from "react";
import bibin from "../assets/images/bibin.jpeg";
import hakeem from "../assets/images/hakeem.jpg";
import amal from "../assets/images/teammember1.jpg";

export default function Team() {
    return (
        <section
            id="team"
            style={{
                padding: "50px 0",
                backgroundColor: "#f8f9fa",
                textAlign: "center",
            }}
        >
            <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
                <h2 style={{ fontSize: "2rem", marginBottom: "30px" }}>
                    Our Team
                </h2>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        flexWrap: "wrap",
                    }}
                >
                    {/* Team Member 1 */}
                    <div
                        style={{
                            backgroundColor: "#fff",
                            borderRadius: "10px",
                            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                            padding: "20px",
                            width: "30%",
                            marginBottom: "20px",
                            textAlign: "center",
                        }}
                    >
                        <div
                            style={{
                                width: "200px",
                                height: "200px",
                                margin: "0 auto 15px",
                                borderRadius: "0%",
                                overflow: "hidden",
                                border: "2px solid #ddd",
                            }}
                        >
                            <img
                                src={bibin}
                                alt="Bibin"
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover",
                                }}
                            />
                        </div>
                        <h5 style={{ fontSize: "1.25rem", margin: "10px 0" }}>
                            Bibin
                        </h5>
                        <p style={{ color: "#666", marginBottom: "15px" }}>
                            Marketing Head
                        </p>
                        <div>
                            <a
                                href="#"
                                style={{
                                    color: "#555",
                                    fontSize: "1.2rem",
                                    margin: "0 10px",
                                    textDecoration: "none",
                                }}
                            >
                                <i className="fab fa-facebook"></i>
                            </a>
                            <a
                                href="#"
                                style={{
                                    color: "#555",
                                    fontSize: "1.2rem",
                                    margin: "0 10px",
                                    textDecoration: "none",
                                }}
                            >
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a
                                href="#"
                                style={{
                                    color: "#555",
                                    fontSize: "1.2rem",
                                    margin: "0 10px",
                                    textDecoration: "none",
                                }}
                            >
                                <i className="fab fa-linkedin"></i>
                            </a>
                        </div>
                    </div>

                    {/* Team Member 2 */}
                    <div
                        style={{
                            backgroundColor: "#fff",
                            borderRadius: "10px",
                            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                            padding: "20px",
                            width: "30%",
                            marginBottom: "20px",
                            textAlign: "center",
                        }}
                    >
                        <div
                            style={{
                                width: "200px",
                                height: "200px",
                                margin: "0 auto 15px",
                                borderRadius: "0%",
                                overflow: "hidden",
                                border: "2px solid #ddd",
                            }}
                        >
                            <img
                                src={amal}
                                alt="Amal"
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover",
                                }}
                            />
                        </div>
                        <h5 style={{ fontSize: "1.25rem", margin: "10px 0" }}>
                            Amal
                        </h5>
                        <p style={{ color: "#666", marginBottom: "15px" }}>
                            Lead Developer
                        </p>
                        <div>
                            <a
                                href="#"
                                style={{
                                    color: "#555",
                                    fontSize: "1.2rem",
                                    margin: "0 10px",
                                    textDecoration: "none",
                                }}
                            >
                                <i className="fab fa-facebook"></i>
                            </a>
                            <a
                                href="#"
                                style={{
                                    color: "#555",
                                    fontSize: "1.2rem",
                                    margin: "0 10px",
                                    textDecoration: "none",
                                }}
                            >
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a
                                href="#"
                                style={{
                                    color: "#555",
                                    fontSize: "1.2rem",
                                    margin: "0 10px",
                                    textDecoration: "none",
                                }}
                            >
                                <i className="fab fa-linkedin"></i>
                            </a>
                        </div>
                    </div>

                    {/* Team Member 3 */}
                    <div
                        style={{
                            backgroundColor: "#fff",
                            borderRadius: "10px",
                            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                            padding: "20px",
                            width: "30%",
                            marginBottom: "20px",
                            textAlign: "center",
                        }}
                    >
                        <div
                            style={{
                                width: "200px",
                                height: "200px",
                                margin: "0 auto 15px",
                                borderRadius: "0%",
                                overflow: "hidden",
                                border: "2px solid #ddd",
                            }}
                        >
                            <img
                                src={hakeem}
                                alt="Hakeem"
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover",
                                }}
                            />
                        </div>
                        <h5 style={{ fontSize: "1.25rem", margin: "10px 0" }}>
                            Abdul Hakeem
                        </h5>
                        <p style={{ color: "#666", marginBottom: "15px" }}>
                            Jr. Developer
                        </p>
                        <div>
                            <a
                                href="#"
                                style={{
                                    color: "#555",
                                    fontSize: "1.2rem",
                                    margin: "0 10px",
                                    textDecoration: "none",
                                }}
                            >
                                <i className="fab fa-facebook"></i>
                            </a>
                            <a
                                href="#"
                                style={{
                                    color: "#555",
                                    fontSize: "1.2rem",
                                    margin: "0 10px",
                                    textDecoration: "none",
                                }}
                            >
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a
                                href="#"
                                style={{
                                    color: "#555",
                                    fontSize: "1.2rem",
                                    margin: "0 10px",
                                    textDecoration: "none",
                                }}
                            >
                                <i className="fab fa-linkedin"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <style jsx>{`
                @media (max-width: 768px) {
                    #team .team-member {
                        width: 100% !important;
                        margin-bottom: 30px;
                    }
                }

                @media (max-width: 576px) {
                    #team h2 {
                        font-size: 1.5rem;
                    }

                    #team .team-member {
                        width: 100% !important;
                    }
                }
            `}</style>
        </section>
    );
}
