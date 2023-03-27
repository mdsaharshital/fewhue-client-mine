import React, { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import routes from "./routes/routes";
import { useDispatch } from "react-redux";
import { getLoggedInUserDB } from "./feature/auth/authSlice";

const Main = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("use");
    dispatch(getLoggedInUserDB());
  }, [dispatch]);
  return (
    <>
      <Toaster />
      <RouterProvider router={routes} />
    </>
  );
};

export default Main;
