import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { pathname } = useLocation();
  // const email = "";
  // const email = "anabil@gmail.com";

  const { user, isLoading } = useSelector((state) => state.auth);
  const { email } = user;
  console.log("eem", user);
  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!isLoading && !email) {
    return <Navigate to="/login" state={{ path: pathname }} />;
  }
  // if (!email) {
  //   return <Navigate to="/login" state={{ path: pathname }} />;
  // }

  return children;
};

export default PrivateRoute;
