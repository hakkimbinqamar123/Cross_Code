import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

const AddClient = () => {
    const [clientName, setClientName] = useState("");
    const [siteLink, setSiteLink] = useState("");
    const [phone, setPhone] = useState("");
    const [logo, setLogo] = useState(null);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!clientName || !siteLink || !phone || !logo) {
            setError("All fields are required, including logo");
            return;
        }
        setError("");

        const formData = new FormData();
        formData.append("ClientName", clientName);
        formData.append("SiteLink", siteLink);
        formData.append("Phone", phone);
        formData.append("logo", logo);

        try {
            const response = await fetch(`${process.env.REACT_APP_API_URL}/portfolio`, {
                method: "POST",
                body: formData,
            });

            if (response.ok) {
                const data = await response.json();
                setSuccess("Client added successfully");
                setTimeout(() => navigate("/dashboard"), 2000);
            } else {
                const errorData = await response.json();
                setError(errorData.message || "Failed to add client");
            }
        } catch (err) {
            setError("An error occurred while adding the client");
            console.error(err);
        }
    };

    const goToDashboard = () => {
        navigate("/dashboard");
    };

    return (
        <div className="container mt-5">
            <h2>Add Client</h2>
            {error && <div className="alert alert-danger">{error}</div>}
            {success && <div className="alert alert-success">{success}</div>}
            <form onSubmit={handleSubmit} encType="multipart/form-data">
                <div className="mb-3">
                    <label htmlFor="clientName" className="form-label">Client Name</label>
                    <input
                        type="text"
                        id="clientName"
                        className="form-control"
                        value={clientName}
                        onChange={(e) => setClientName(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="siteLink" className="form-label">Site Link</label>
                    <input
                        type="url"
                        id="siteLink"
                        className="form-control"
                        value={siteLink}
                        onChange={(e) => setSiteLink(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="phone" className="form-label">Phone</label>
                    <input
                        type="text"
                        id="phone"
                        className="form-control"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="logo" className="form-label">Logo</label>
                    <input
                        type="file"
                        id="logo"
                        className="form-control"
                        onChange={(e) => setLogo(e.target.files[0])}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Add Client</button>
                <a> </a>
                <button
                    type="button"
                    className="btn btn-primary"
                    onClick={goToDashboard}
                >
                    Home
                </button>
            </form>
        </div>
    );
};

export default AddClient;
