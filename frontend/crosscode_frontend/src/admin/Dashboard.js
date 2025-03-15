import React, { useEffect, useState } from "react";
import { data, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Dashboard = () => {
    const [clients, setClients] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [testimonials, setTestimonials] = useState([]);
    const [clientSearch, setClientSearch] = useState("");
    const [testimonialSearch, setTestimonialSearch] = useState("");
    const [confirmationVisible, setConfirmationVisible] = useState(false);
    const [clientToDelete, setClientToDelete] = useState(null);
    const [commentToDelete, setCommentToDelete] = useState(null);
    const [testimonialConfirmationVisible, setTestimonialConfirmationVisible] = useState(false);

    // Pagination states
    const [clientPage, setClientPage] = useState(1);
    const [testimonialPage, setTestimonialPage] = useState(1);
    const itemsPerPage = 5;

    const navigate = useNavigate();

    // Check for login token
    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            navigate("/login"); // Redirect to login if no token is found
        }
    }, [navigate]);

    // Fetch Clients from API
    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/api/crosscode/portfolio`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Failed to fetch clients");
                }
                return response.json();
            })
            .then((data) => setClients(data))
            .catch((error) => console.error("Error fetching clients:", error));
    }, []);

    // Fetch Testimonials from API
    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/api/crosscode/comments`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Failed to fetch testimonials");
                }
                return response.json();
            })
            .then((data) => setTestimonials(data))
            .catch((error) => console.error("Error fetching testimonials:", error));
    }, []);

    const filterItems = (items, query) =>
        items.filter((item) =>
            Object.values(item)
                .join(" ")
                .toLowerCase()
                .includes(query.toLowerCase())
        );

    // Filtered and paginated data
    const filteredClients = filterItems(clients, clientSearch);
    const filteredTestimonials = filterItems(testimonials, testimonialSearch);

    const paginatedClients = filteredClients.slice(
        (clientPage - 1) * itemsPerPage,
        clientPage * itemsPerPage
    );
    const paginatedTestimonials = filteredTestimonials.slice(
        (testimonialPage - 1) * itemsPerPage,
        testimonialPage * itemsPerPage
    );

    const renderPagination = (currentPage, totalItems, setPage) => {
        const totalPages = Math.ceil(totalItems / itemsPerPage);
        return (
            <div className="d-flex justify-content-center">
                <nav>
                    <ul className="pagination">
                        <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
                            <button
                                className="page-link"
                                onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
                            >
                                Previous
                            </button>
                        </li>
                        {Array.from({ length: totalPages }, (_, idx) => (
                            <li
                                key={idx}
                                className={`page-item ${currentPage === idx + 1 ? "active" : ""}`}
                            >
                                <button
                                    className="page-link"
                                    onClick={() => setPage(idx + 1)}
                                >
                                    {idx + 1}
                                </button>
                            </li>
                        ))}
                        <li
                            className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}
                        >
                            <button
                                className="page-link"
                                onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
                            >
                                Next
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>
        );
    };

    const handleDeleteClient = (id) => {
        setClientToDelete(id);
        setConfirmationVisible(true);
    };

    const handleDeleteComment = (id) => {
        setCommentToDelete(id);
        setTestimonialConfirmationVisible(true);
    };

    const confirmDeleteClient = async () => {
        try {
            const response = await fetch(`${process.env.REACT_APP_API_URL}/portfolio/${clientToDelete}`, {
                method: "DELETE",
            });
            if (response.ok) {
                setClients((prev) =>
                    prev.filter((client) => client._id !== clientToDelete)
                );
            } else {
                alert("Failed to delete client");
            }
        } catch (error) {
            console.error("Error deleting client:", error);
        } finally {
            setConfirmationVisible(false);
            setClientToDelete(null);
        }
    };

    const confirmDeleteComment = async () => {
        try {
            const response = await fetch(`${process.env.REACT_APP_API_URL}//comments/${commentToDelete}`, {
                method: "DELETE",
            });
            if (response.ok) {
                setTestimonials((prev) =>
                    prev.filter((testimonial) => testimonial._id !== commentToDelete)
                );
            } else {
                alert("Failed to delete comment");
            }
        } catch (error) {
            console.error("Error deleting comment:", error);
        } finally {
            setTestimonialConfirmationVisible(false);
            setCommentToDelete(null);
        }
    };

    const cancelDeleteClient = () => {
        setConfirmationVisible(false);
        setClientToDelete(null);
    };

    const cancelDeleteComment = () => {
        setTestimonialConfirmationVisible(false);
        setCommentToDelete(null);
    };

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/login");
    };

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    const summaryCards = [
        {
            color: "#28a745",
            icon: "👤",
            title: "Total Clients",
            value: clients.length,
        },
        {
            color: "#007bff",
            icon: "💬",
            title: "Total Testimonials",
            value: testimonials.length,
        },
        {
            color: "#ffc107",
            icon: "📞",
            title: "Support Calls",
            value: 5, // Static for now
        },
        {
            color: "#dc3545",
            icon: "🔧",
            title: "Pending Tasks",
            value: 3, // Static for now
        },
    ];

    return (
        <div>
            {/* Sidebar */}
            <div className="sidebar" style={sidebarStyle}>
                <div
                    style={{
                        position: "relative",
                        display: "inline-block",
                        color: "white",
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
                            position: "absolute",
                            bottom: "-10px",
                            right: "0",
                        }}
                    >
                        technologies
                    </span>
                </div>
                <br />
                <a href="#" style={sidebarLinkStyle}>
                    Dashboard
                </a>
                <a href="addclients" style={sidebarLinkStyle}>
                    Add Clients
                </a>
                <a href="#" style={sidebarLinkStyle}>
                    Testimonials
                </a>
                <button
                    className="btn btn-danger mt-3"
                    style={{ width: "90%", marginLeft: "5%" }}
                    onClick={openModal} // Show the modal
                >
                    Logout
                </button>

                {/* Confirmation Modal for Logout */}
                {showModal && (
                    <div
                        style={{
                            position: "fixed",
                            top: "0",
                            left: "0",
                            width: "100%",
                            height: "100%",
                            backgroundColor: "rgba(0, 0, 0, 0.5)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            zIndex: "1000",
                        }}
                    >
                        <div
                            style={{
                                backgroundColor: "#fff",
                                borderRadius: "8px",
                                width: "400px",
                                padding: "20px",
                                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                                textAlign: "center",
                            }}
                        >
                            <h5 style={{ color: "black", marginBottom: "20px" }}>
                                Are you sure you want to logout?
                            </h5>
                            <div style={{ display: "flex", justifyContent: "space-around" }}>
                                <button
                                    className="btn btn-danger"
                                    onClick={handleLogout} // Perform logout
                                    style={{ width: "100px" }}
                                >
                                    Logout
                                </button>
                                <button
                                    className="btn btn-secondary"
                                    onClick={closeModal} // Close modal without logout
                                    style={{ width: "100px" }}
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                )}

            </div>

            {/* Main Content */}
            <div className="content" style={contentStyle}>
                <h2>Dashboard Summary</h2>
                <div className="row mb-4">
                    {summaryCards.map(({ color, icon, title, value }, idx) => (
                        <div className="col-md-3" key={idx}>
                            <div
                                className="card text-white"
                                style={{
                                    backgroundColor: color,
                                    textAlign: "center",
                                    padding: "20px",
                                }}
                            >
                                <div style={{ fontSize: "40px", marginBottom: "10px" }}>
                                    {icon}
                                </div>
                                <h5>{title}</h5>
                                <h3>{value}</h3>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Client Table */}
                <h3>Client Details</h3>
                <div className="search-bar">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search clients..."
                        value={clientSearch}
                        onChange={(e) => setClientSearch(e.target.value)}
                    />
                </div>
                <br />
                <table className="table table-bordered table-striped">
                    <thead className="table-dark">
                        <tr>
                            <th>#</th>
                            <th>Client Name</th>
                            <th>Site</th>
                            <th>Phone</th>
                            <th>Logo</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {paginatedClients.map((client, index) => (
                            <tr key={client._id}>
                                <td>{(clientPage - 1) * itemsPerPage + index + 1}</td>
                                <td>{client.ClientName}</td>
                                <td>
                                    <a
                                        href={client.SiteLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-primary"
                                    >
                                        Visit Site
                                    </a>
                                </td>
                                <td>{client.Phone}</td>
                                <td>
                                    <img
                                        src={client.logo}
                                        alt="Client Logo"
                                        style={{ width: "50px" }}
                                    />
                                </td>
                                <td>
                                    <button className="btn btn-success">Edit</button>
                                    <a> </a>
                                    <button
                                        className="btn btn-dark"
                                        onClick={() => handleDeleteClient(client._id)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {renderPagination(clientPage, filteredClients.length, setClientPage)}

                {/* Confirmation Modal for Client Deletion */}
                {confirmationVisible && (
                    <div className="modal" style={{ display: "block" }}>
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">Confirm Deletion</h5>
                                    <button
                                        type="button" className="btn-close"
                                        onClick={cancelDeleteClient}
                                    ></button>
                                </div>
                                <div className="modal-body">
                                    Are you sure you want to delete this client?
                                </div>
                                <div className="modal-footer">
                                    <button
                                        className="btn btn-secondary"
                                        onClick={cancelDeleteClient}
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        className="btn btn-danger"
                                        onClick={confirmDeleteClient}
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Testimonial Table */}
                <h3>Testimonial Details</h3>
                <div className="search-bar">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search testimonials..."
                        value={testimonialSearch}
                        onChange={(e) => setTestimonialSearch(e.target.value)}
                    />
                </div>
                <br />
                <table className="table table-bordered table-striped">
                    <thead className="table-dark">
                        <tr>
                            <th>#</th>
                            <th>Client Name</th>
                            <th>Testimonial</th>
                            <th>Email</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {paginatedTestimonials.map((testimonial, index) => (
                            <tr key={testimonial._id}>
                                <td>{(testimonialPage - 1) * itemsPerPage + index + 1}</td>
                                <td>{testimonial.name}</td>
                                <td>{testimonial.comment}</td>
                                <td>{testimonial.email}</td>
                                <td>
                                    <button className="btn btn-success">Edit</button>
                                    <a> </a>
                                    <button
                                        className="btn btn-dark"
                                        onClick={() => handleDeleteComment(testimonial._id)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {renderPagination(
                    testimonialPage,
                    filteredTestimonials.length,
                    setTestimonialPage
                )}

                {/* Confirmation Modal for Testimonial Deletion */}
                {testimonialConfirmationVisible && (
                    <div className="modal" style={{ display: "block" }}>
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">Confirm Deletion</h5>
                                    <button
                                        type="button"
                                        className="btn-close"
                                        onClick={cancelDeleteComment}
                                    ></button>
                                </div>
                                <div className="modal-body">
                                    Are you sure you want to delete this testimonial?
                                </div>
                                <div className="modal-footer">
                                    <button
                                        className="btn btn-secondary"
                                        onClick={cancelDeleteComment}
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        className="btn btn-danger"
                                        onClick={confirmDeleteComment}
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

// Styles
const sidebarStyle = {
    backgroundColor: "#333",
    color: "white",
    height: "100vh",
    width: "200px",
    position: "fixed",
    top: 0,
    left: 0,
    padding: "20px",
};

const sidebarLinkStyle = {
    color: "white",
    display: "block",
    margin: "10px 0",
    textDecoration: "none",
};

const contentStyle = {
    marginLeft: "220px",
    padding: "20px",
};

export default Dashboard;

