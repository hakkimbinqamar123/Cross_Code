import React, { useState, useEffect } from "react";

const TestimonialsTable = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [testimonialSearch, setTestimonialSearch] = useState("");
  const [testimonialPage, setTestimonialPage] = useState(1);
  const [commentToDelete, setCommentToDelete] = useState(null);
  const [testimonialConfirmationVisible, setTestimonialConfirmationVisible] = useState(false);
  const itemsPerPage = 5;

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/api/crosscode/comments`)
      .then((response) => response.json())
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

  const filteredTestimonials = filterItems(testimonials, testimonialSearch);
  const paginatedTestimonials = filteredTestimonials.slice(
    (testimonialPage - 1) * itemsPerPage,
    testimonialPage * itemsPerPage
  );

  const handleDeleteComment = (id) => {
    setCommentToDelete(id);
    setTestimonialConfirmationVisible(true);
  };

  const confirmDeleteComment = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/crosscode/comments/${commentToDelete}`, {
        method: "DELETE",
      });
      const data = await response.json();
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

  const cancelDeleteComment = () => {
    setTestimonialConfirmationVisible(false);
    setCommentToDelete(null);
  };
  
  return (
    <>
      <h3>Testimonials</h3>
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
            <th>Name</th>
            <th>Comment</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {paginatedTestimonials.map((testimonial, index) => (
            <tr key={testimonial._id}>
              <td>{(testimonialPage - 1) * itemsPerPage + index + 1}</td>
              <td>{testimonial.name}</td>
              <td>{testimonial.comment}</td>
              <td>{testimonial.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default TestimonialsTable;
