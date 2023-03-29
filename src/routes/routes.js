import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import AddProduct from "../layout/Dashboard/AddProduct";
import Dashboard from "../layout/Dashboard/Dashboard";
import ManageProduct from "./../layout/Dashboard/ManageProduct";
import ManageOrders from "./../layout/Dashboard/ManageOrders";
import AdminRoute from "../utils/AdminRoute";
import AdminLogin from "../utils/AdminLogin";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <AdminLogin />,
  },
  {
    path: "/dashboard",
    element: (
      <AdminRoute>
        <Dashboard />
      </AdminRoute>
    ),
    children: [
      {
        path: "",
        element: <ManageOrders />,
      },
      {
        path: "manage-products",
        element: <ManageProduct />,
      },
      {
        path: "add-product",
        element: <AddProduct />,
      },
    ],
  },
]);

export default routes;
