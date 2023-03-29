import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import AddProduct from "../layout/Dashboard/AddProduct";
import Dashboard from "../layout/Dashboard/Dashboard";
import PrivateRoute from "../utils/PrivateRoutes";
import Login from "./../utils/Login";
import ManageProduct from './../layout/Dashboard/ManageProduct';
import ManageOrders from './../layout/Dashboard/ManageOrders';

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
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
