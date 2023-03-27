import React from "react";
import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import routes from "./routes/routes";

const Main = () => {
  return (
    <>
      <Toaster />
      <RouterProvider router={routes} />
    </>
  );
};

export default Main;
