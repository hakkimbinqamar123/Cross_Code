import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function ViewAllClients() {
  const [data, setData] = useState([]);

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

  // Styles
  const styles = {
    section: {
      backgroundColor: "#000",
      color: "#fff",
      padding: "50px 0",
    },
    container: {
      maxWidth: "1140px",
      margin: "0 auto",
    },
    heading: {
      textAlign: "center",
      marginBottom: "30px",
      color: "#fff",
    },
    row: {
      display: "flex",
      flexWrap: "wrap",
      gap: "20px",
      justifyContent: "center",
    },
    card: {
      perspective: "1000px",
      width: "350px",
      height: "300px",
    },
    cardInner: {
      position: "relative",
      width: "100%",
      height: "100%",
      transformStyle: "preserve-3d",
      transition: "transform 0.6s",
    },
    cardFrontBack: {
      position: "absolute",
      width: "100%",
      height: "100%",
      backfaceVisibility: "hidden",
      borderRadius: "5px",
    },
    cardFront: {
      backgroundColor: "#1a1a1a",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      overflow: "hidden",
    },
    cardBack: {
      backgroundColor: "#333",
      color: "#fff",
      transform: "rotateY(180deg)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      padding: "20px",
    },
    cardImg: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
    },
    cardTitle: {
      fontSize: "18px",
      marginBottom: "15px",
    },
    button: {
      border: "1px solid #fff",
      color: "#fff",
      backgroundColor: "transparent",
      padding: "10px 20px",
      textDecoration: "none",
      borderRadius: "5px",
      transition: "all 0.3s",
    },
    buttonHover: {
      backgroundColor: "#fff",
      color: "#000",
    },
  };

  return (
    <>
      <Navbar />
      <section style={styles.section}>
        <div style={styles.container}>
          <h2 style={styles.heading}>All Clients</h2>
          <div style={styles.row}>
            {data &&
              data.map((item, index) => {
                const imagePath = `http://192.168.1.6:5000/images/${item.Logo}`;
                return (
                  <div
                    style={styles.card}
                    key={index}
                    onMouseEnter={(e) =>
                      (e.currentTarget.firstChild.style.transform =
                        "rotateY(180deg)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.firstChild.style.transform =
                        "rotateY(0deg)")
                    }
                  >
                    <div style={styles.cardInner}>
                      <div style={{ ...styles.cardFrontBack, ...styles.cardFront }}>
                        <img
                          src={imagePath}
                          alt={item.ClientName}
                          style={styles.cardImg}
                        />
                      </div>
                      <div style={{ ...styles.cardFrontBack, ...styles.cardBack }}>
                        <h5 style={styles.cardTitle}>{item.ClientName}</h5>
                        <Link
                          to={item.SiteLink}
                          style={styles.button}
                          onMouseEnter={(e) =>
                            Object.assign(
                              e.target.style,
                              styles.buttonHover
                            )
                          }
                          onMouseLeave={(e) =>
                            Object.assign(
                              e.target.style,
                              styles.button
                            )
                          }
                        >
                          Visit Site
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
}
