import React, { useState, useEffect } from "react";

const ClientDetailsTable = () => {
  const [clients, setClients] = useState([]);
  const [clientSearch, setClientSearch] = useState("");
  const [clientPage, setClientPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/portfolio`)
      .then((response) => response.json())
      .then((data) => setClients(data))
      .catch((error) => console.error("Error fetching clients:", error));
  }, []);

  const filterItems = (items, query) =>
    items.filter((item) =>
      Object.values(item)
        .join(" ")
        .toLowerCase()
        .includes(query.toLowerCase())
    );

  const filteredClients = filterItems(clients, clientSearch);
  const paginatedClients = filteredClients.slice(
    (clientPage - 1) * itemsPerPage,
    clientPage * itemsPerPage
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
                className={`page-item ${
                  currentPage === idx + 1 ? "active" : ""
                }`}
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
              className={`page-item ${
                currentPage === totalPages ? "disabled" : ""
              }`}
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

  return (
    <>
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
              <td>{client.logo}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {renderPagination(clientPage, filteredClients.length, setClientPage)}
    </>
  );
};

export default ClientDetailsTable;
