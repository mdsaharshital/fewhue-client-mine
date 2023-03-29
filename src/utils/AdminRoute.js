import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const AdminRoute = ({ children }) => {
  const { pathname } = useLocation();

  const { user, isLoading } = useSelector((state) => state.auth);
  const { email, role } = user;
  console.log("eem", user);
  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!isLoading && !email && role !== 1) {
    return <Navigate to="/login" state={{ path: pathname }} />;
  }

  return children;
};

export default AdminRoute;
