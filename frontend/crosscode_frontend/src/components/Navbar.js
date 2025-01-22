import React from "react";
import { Link as ScrollLink } from "react-scroll"; // Import Link from react-scroll
import "../styles/style.css";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            {/* Navbar */}
            <nav className="navbar navbar-expand-lg fixed-top custom-navbar">
                <div className="container">
                    <Link
                        className="navbar-brand"
                        as={Link}
                        to="/"
                        style={{
                            display: "inline-flex",
                            flexDirection: "column",
                            alignItems: "flex-end",
                            lineHeight: 1,
                            fontFamily: "'Roboto', sans-serif",
                            cursor: "pointer",
                        }}
                    >
                        <span
                            style={{
                                fontSize: "1.5rem",
                                fontWeight: "bold",
                                fontStyle: "italic",
                            }}
                        >
                            CrossCodes
                        </span>
                        <span
                            style={{
                                fontSize: "0.8rem",
                                fontStyle: "italic",
                                marginTop: "-5px",
                            }}
                        >
                            technologies
                        </span>
                    </Link>

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <ScrollLink
                                    className="nav-link active"
                                    to="home"
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                >
                                    Home
                                </ScrollLink>
                            </li>
                            <li className="nav-item">
                                <ScrollLink
                                    className="nav-link"
                                    to="services"
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                >
                                    Services
                                </ScrollLink>
                            </li>
                            <li className="nav-item">
                                <ScrollLink
                                    className="nav-link"
                                    to="portfolio"
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                >
                                    Portfolio
                                </ScrollLink>
                            </li>
                            <li className="nav-item">
                                <ScrollLink
                                    className="nav-link"
                                    to="team"
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                >
                                    Team
                                </ScrollLink>
                            </li>
                            <li className="nav-item">
                                <ScrollLink
                                    className="nav-link"
                                    to="contact"
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                >
                                    Contact
                                </ScrollLink>
                            </li>
                            <li className="nav-item">
                                <a href="/login" className="nav-link">Login</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
