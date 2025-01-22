import React from "react";
import crosscode from "../assets/images/crosscode.jpg";

const About = () => {
    return (
        <section
            id="about"
            style={{
                padding: "50px 15px",
                backgroundColor: "#f8f9fa",
            }}
        >
            <div
                style={{
                    maxWidth: "1140px",
                    margin: "0 auto",
                }}
            >
                <h2
                    style={{
                        color: "#343a40",
                        textAlign: "center",
                        marginBottom: "30px",
                        fontSize: "36px",
                        fontWeight: "bold",
                    }}
                >
                    About Us
                </h2>
                <div
                    style={{
                        display: "flex",
                        flexWrap: "wrap",
                        alignItems: "center",
                        gap: "20px",
                    }}
                >
                    {/* Text Content */}
                    <div
                        style={{
                            flex: "1",
                            textAlign: "justify",
                            fontSize: "18px",
                            lineHeight: "1.8",
                            color: "#495057",
                        }}
                    >
                        <p>
                            At <strong>CrossCodes Technologies</strong>, we are passionate
                            about creating innovative and tailored solutions for businesses
                            of all sizes. Our team of experts specializes in web and app
                            development, digital marketing, branding, and more. With a
                            focus on quality and creativity, we strive to deliver excellence
                            and help our clients achieve their goals in today's competitive
                            digital landscape.
                        </p>
                        <p>
                            Founded in 2023, CrossCodes has worked
                            with numerous clients across industries, earning a reputation
                            for reliability and cutting-edge solutions. Join us on a journey
                            to transform your vision into reality!
                        </p>
                    </div>

                    {/* Image Content */}
                    <div
                        style={{
                            flex: "1",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            position: "relative",
                        }}
                    >
                        <img
                            src={crosscode}
                            alt="About Us"
                            style={{
                                height: "400px",
                                maxWidth: "100%",
                                borderRadius: "12px",
                                boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)",
                                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                            }}
                            onMouseOver={(e) => {
                                e.currentTarget.style.transform = "scale(1.05)";
                                e.currentTarget.style.boxShadow =
                                    "0px 8px 20px rgba(0, 0, 0, 0.3)";
                            }}
                            onMouseOut={(e) => {
                                e.currentTarget.style.transform = "scale(1)";
                                e.currentTarget.style.boxShadow =
                                    "0px 4px 15px rgba(0, 0, 0, 0.2)";
                            }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
