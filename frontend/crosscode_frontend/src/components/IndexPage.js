import React, { useEffect, useState } from "react";
import "../styles/style.css";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Services from "./Service";
import About from "./About";
import crosscode_logo from "../assets/images/crosscode_logo.png";
import teammember1 from "../assets/images/teammember1.jpg";
import Team from "./Team";
import Portfolio from "./Portfolio";

const IndexPage = () => {
    const [name, setName] = useState("");
    const [comment, setComment] = useState("");
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [comments, setComments] = useState([]);
    const [logoVisible, setLogoVisible] = useState(false);
    const [showModal, setShowModal] = useState(false);

    // useEffect(() => {
    //     window.scrollTo(0, 0);
    // }, []);

    // Fetch comments from API
    useEffect(() => {
        const fetchComments = async () => {
            try {
                const response = await fetch(`${process.env.REACT_APP_API_URL}/api/crosscode/comments`);
                if (response.ok) {
                    const data = await response.json();
                    setComments(data);
                } else {
                    console.error("Failed to fetch comments");
                }
            } catch (err) {
                console.error("An error occurred while fetching comments:", err);
            }
        };
        fetchComments();
    }, []);

    useEffect(() => {
        // Trigger logo visibility after a delay to create an animation effect
        const timeout = setTimeout(() => setLogoVisible(true), 500);
        return () => clearTimeout(timeout);
    }, []);


    const handleSubmit = async () => {
        if (!name || !comment || !email) {
            setError("Every fields are required!");
            return;
        }

        try {
            const response = await fetch(`${process.env.REACT_APP_API_URL}/api/crosscode/comments`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ name, comment, email }),
            });

            if (response.ok) {
                setSuccess("Comment submitted successfully!");
                setName("");
                setComment("");
                setEmail("");  // Reset email as well
                setError("");  // Reset any previous errors

                // Fetch updated comments
                const updatedComments = await fetch(`${process.env.REACT_APP_API_URL}/api/crosscode/comments`);
                setComments(await updatedComments.json());

                // Hide the testimonial modal
                const testimonialModal = document.getElementById("testimonialModal");
                const modal = window.bootstrap.Modal.getInstance(testimonialModal);
                modal.hide();

                // Show success message modal
                const successModal = new window.bootstrap.Modal(document.getElementById("successModal"));
                successModal.show();
            } else {
                const data = await response.json();
                setError(data.message || "Failed to submit comment.");
                // Ensure the modal remains open if submission fails
                const testimonialModal = new window.bootstrap.Modal(document.getElementById("testimonialModal"));
                testimonialModal.show();
            }
        } catch (err) {
            setError("An error occurred. Please try again.");
            // Ensure the modal remains open if submission fails
            const testimonialModal = new window.bootstrap.Modal(document.getElementById("testimonialModal"));
            testimonialModal.show();
        }
    };

    return (
        <>
            <Navbar />
            {/* Home Section */}
            <section id="home" className="py-5">
                <div className="container text-center">
                    <div
                        style={{
                            opacity: logoVisible ? 1 : 0,
                            transform: logoVisible ? "scale(1)" : "scale(0.5)",
                            transition: "opacity 1s ease, transform 1s ease",
                        }}
                    >
                        <img
                            style={{ height: "500px", width: "500px" }}
                            src={crosscode_logo}
                            alt="CrossCode Logo"
                        />
                    </div>
                    <p>Your trusted partner for digital transformation.</p>
                </div>
            </section>

            <Services />
            <About />
            <Portfolio />

            {/* Testimonials Section */}
            <section id="testimonials" className="py-5 bg-white text-white">
                <div className="container">
                    <h2 style={{ color: "black" }} className="text-center mb-4">
                        What Our Clients Say
                    </h2>
                    <div id="testimonialCarousel" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            {comments.length > 0 ? (
                                comments.map((comment, index) => (
                                    <div
                                        key={index}
                                        className={`carousel-item ${index === 0 ? "active" : ""} text-center`}
                                    >
                                        <img
                                            src={teammember1}
                                            alt="Default User"
                                            className="rounded-circle mb-3"
                                            width="100"
                                            height="100"
                                        />
                                        <h5>{comment.name}</h5>
                                        <p className="text-muted">Customer</p>
                                        <p className="fst-italic">{comment.comment}</p>
                                    </div>
                                ))
                            ) : (
                                <div className="carousel-item active text-center">
                                    <p>No comments available</p>
                                </div>
                            )}
                        </div>
                        {/* Carousel Controls */}
                        <button
                            className="carousel-control-prev"
                            type="button"
                            data-bs-target="#testimonialCarousel"
                            data-bs-slide="prev"
                            style={{
                                backgroundColor: "transparent",
                                border: "none",
                                color: "black",  // Optional: Change the icon color to black or your preferred color
                                position: "absolute",
                                top: "50%",  // Adjust this value to move the button up or down
                                transform: "translateY(-50%)",  // Center the button vertically
                            }}
                        >
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button
                            className="carousel-control-next"
                            type="button"
                            data-bs-target="#testimonialCarousel"
                            data-bs-slide="next"
                            style={{
                                backgroundColor: "transparent",
                                border: "none",
                                color: "black",  // Optional: Change the icon color to black or your preferred color
                                position: "absolute",
                                top: "50%",  // Adjust this value to move the button up or down
                                transform: "translateY(-50%)",  // Center the button vertically
                            }}
                        >
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>


                    </div>

                    <div className="text-center mt-4">
                        <button
                            style={{
                                color: "white",
                                backgroundColor: "black",
                                border: "none",
                                padding: "10px 20px",
                                borderRadius: "5px",
                                fontWeight: "bold",
                                cursor: "pointer",
                                textTransform: "uppercase",
                                transition: "all 0.3s",
                                width: "150px", // Ensures consistent width with "View All" button
                            }}
                            onMouseEnter={(e) => {
                                e.target.style.color = "black";
                                e.target.style.backgroundColor = "white";
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.color = "white";
                                e.target.style.backgroundColor = "black";
                            }}
                            data-bs-toggle="modal"
                            data-bs-target="#testimonialModal"
                        >
                            Share Yours
                        </button>
                    </div>

                </div>
            </section>

            {/* Modal for Thoughts */}
            <div
                className="modal fade"
                id="testimonialModal"
                aria-hidden="true"
                aria-labelledby="testimonialModalLabel"
                tabIndex="-1"
            >
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="testimonialModalLabel">Your Thoughts</h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                {error && <p className="text-danger">{error}</p>}
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="comment" className="form-label">Comment</label>
                                    <textarea
                                        className="form-control"
                                        id="comment"
                                        rows="3"
                                        value={comment}
                                        onChange={(e) => setComment(e.target.value)}
                                    ></textarea>
                                </div>
                                <button
                                    type="button"
                                    className="btn btn-primary"
                                    onClick={handleSubmit}
                                >
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {/* Success Modal */}
            <div
                className="modal fade"
                id="successModal"
                aria-hidden="true"
                aria-labelledby="successModalLabel"
                tabIndex="-1"
            >
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="successModalLabel">Success!</h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body">
                            <p>{success}</p>
                        </div>
                    </div>
                </div>
            </div>

            <Team />
            <Footer />

            {/* WhatsApp Icon */}
            <a
    href="https://wa.me/7356692214"
    target="_blank"
    rel="noopener noreferrer"
    style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        zIndex: 1000,
    }}
>
<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#25D366" class="bi bi-whatsapp" viewBox="0 0 16 16">
  <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
</svg>


</a>

        </>
    );
};

export default IndexPage;
