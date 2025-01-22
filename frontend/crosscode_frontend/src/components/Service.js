import React from "react";
import "../styles/style.css";

const Services = () => {
    return (
        //  {/* Services Section */}
        <section id="services" className="py-5 bg-light">
            <div className="container">
                <h2 className="text-center">Our Services</h2>
                <div className="row mt-4">
                    <div className="col-md-3">
                        <div className="card border-0 shadow">
                            <div className="card-body text-center">
                                <i className="bi bi-laptop display-4 mb-3 text-primary"></i>
                                <h5>Web Development</h5>
                                <p>Custom websites designed for your needs.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card border-0 shadow">
                            <div className="card-body text-center">
                                <i className="bi bi-phone display-4 mb-3 text-success"></i>
                                <h5>App Development</h5>
                                <p>Innovative and user-friendly mobile apps.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card border-0 shadow">
                            <div className="card-body text-center">
                                <i className="bi bi-bar-chart-line display-4 mb-3 text-warning"></i>
                                <h5>Digital Marketing</h5>
                                <p>Grow your brand with our expert strategies.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card border-0 shadow">
                            <div className="card-body text-center">
                                <i className="bi bi-badge-ad display-4 mb-3 text-warning"></i>
                                <h5>Branding</h5>
                                <p>Build a strong identity for your business.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services;