import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ClientDetailsTable from "./ClientDetailsTable";
import TestimonialsTable from "./TestimonialsTable";

const MainDashboard = () => {
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
        <a href="#" style={sidebarLinkStyle}>
          Portfolio
        </a>
        <a href="#" style={sidebarLinkStyle}>
          Testimonials
        </a>
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
        <ClientDetailsTable />
        <TestimonialsTable />
      </div>
    </div>
  );
};

// Styles
const sidebarStyle = {
  width: "250px",
  backgroundColor: "#2c3e50",
  height: "100vh",
  position: "fixed",
  paddingTop: "20px",
};

const sidebarLinkStyle = {
  color: "white",
  textDecoration: "none",
  display: "block",
  padding: "10px 20px",
};

const contentStyle = {
  marginLeft: "250px",
  padding: "20px",
};

const summaryCards = [
  { color: "#28a745", icon: "👁️", title: "Daily Visits", value: "8,457" },
  { color: "#007bff", icon: "🛒", title: "Sales", value: "52,160" },
  { color: "#dc3545", icon: "💬", title: "Comments", value: "15,823" },
  { color: "#ffc107", icon: "👥", title: "No. of Visits", value: "36,752" },
];

export default MainDashboard;
