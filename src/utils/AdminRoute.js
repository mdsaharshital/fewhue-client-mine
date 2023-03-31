import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const AdminRoute = ({ children }) => {
  const { pathname } = useLocation();
  const { user, isLoading } = useSelector((state) => state.auth);
  const { email, role } = user;

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if ((!isLoading && !email) || role !== 1) {
    localStorage.removeItem("token");
    return <Navigate to="/" state={{ path: pathname }} />;
  }

  return children;
};

export default AdminRoute;
