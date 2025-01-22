import React from "react";
import { Link } from "react-router-dom";
import "../styles/style.css";

const Footer = () => {
    return (
        // Contact Section
        <footer id="contact" className="py-5 bg-dark text-white">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mb-4">
                        <h4>Get in Touch</h4>
                        <form>
                            <input
                                type="text"
                                className="form-control mb-3"
                                placeholder="Your Name"
                            />
                            <input
                                type="email"
                                className="form-control mb-3"
                                placeholder="Your Email"
                            />
                            <textarea
                                className="form-control mb-3"
                                rows="5"
                                placeholder="Your Message"
                            ></textarea>
                            <button type="submit" className="btn btn-primary w-100">
                                Send Message
                            </button>
                        </form>
                    </div>
                    <div className="col-md-6">
                        <h4>Contact Information</h4>
                        <h4 style={{ color: "grey", fontWeight: "bold"}}>ADDRESS</h4>
                        <p>
                            <strong>Madivala</strong>
                            <br />
                            Banglore, Centennial, CO 80112
                        </p>
                        <p>
                            <strong>Mulamoottil Building</strong>
                            <br />
                            Mundakayam, Kottayam, 686513
                        </p>
                        <h4 style={{ color: "grey", fontWeight: "bold"}}>EMAIL</h4>
                        <p>Email: crosscode@gmail.com</p>
                        <h4 style={{ color: "grey", fontWeight: "bold"}}>PHONE</h4>
                        <p>Phone: +91-7356692214</p>
                        <p>Phone: +91-8113035426</p>
                    </div>
                </div>
            </div>
            <div className="text-center">
                <div className="mb-3">
                    <Link to="https://wa.me/7356692214" className="text-white me-3" target="_blank" aria-label="WhatsApp">
                        <i className="bi bi-whatsapp display-6"></i>
                    </Link>
                    <Link to="https://instagram.com/yourprofile" className="text-white me-3" target="_blank"
                        aria-label="Instagram">
                        <i className="bi bi-instagram display-6"></i>
                    </Link>
                    <Link to="https://twitter.com/yourprofile" className="text-white" target="_blank" aria-label="Twitter">
                        <i className="bi bi-twitter display-6"></i>
                    </Link>
                </div>
                <p className="mb-0">&copy; 2024 CrossCodes Group Contracting. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
