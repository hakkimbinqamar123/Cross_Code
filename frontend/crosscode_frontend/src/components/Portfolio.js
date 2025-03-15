import React, { useEffect, useState } from "react";
import "../styles/style.css";
import { Link, useNavigate } from "react-router-dom";

export default function Portfolio() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/portfolio`);
        if (response.ok) {
          const data = await response.json();
          console.log("data: ", data);
          setData(data);
        } else {
          console.error("Failed to fetch clients");
        }
      } catch (err) {
        console.error("An error occurred while fetching clients:", err);
      }
    };
    fetchClients();
  }, []);

  return (
    <section id="portfolio" className="py-5 bg-dark text-white">
      <div className="container">
        <h2 className="text-center mb-4">Our Portfolio</h2>
        <div className="belt-container">
          <div className="belt">
            {data && data.length > 0
              ? [...data, ...data].map((item, index) => {
                const imagePath = `http://192.168.1.6:5000/images/${item.Logo}`;
                return (
                  <div className="belt-item" key={index}>
                    <Link to={item.SiteLink}>
                      <img
                        src={imagePath}
                        alt={item.ClientName}
                        className="img-fluid"
                      />
                    </Link>
                  </div>
                );
              })
              : null}
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
                width: "130px", // Set a fixed width
              }}
              onMouseEnter={(e) => {
                e.target.style.color = "black";
                e.target.style.backgroundColor = "white";
              }}
              onMouseLeave={(e) => {
                e.target.style.color = "white";
                e.target.style.backgroundColor = "black";
              }}
              onClick={() => (window.location.href = "/view-all")}
            >
              View All
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
