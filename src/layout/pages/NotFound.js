import React from "react";
import { Link } from "react-router-dom";
import "../../App.css";

const NotFound = () => {
  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <h1>Oops! Page not found</h1>
        <p>We're sorry, the page you're looking for cannot be found.</p>
        <Link to="/" className="not-found-link">
          Go back to the homepage
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
