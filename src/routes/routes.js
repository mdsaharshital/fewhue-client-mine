import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import AddProduct from "../layout/Dashboard/AddProduct";
import Dashboard from "../layout/Dashboard/Dashboard";
import ManageProduct from "./../layout/Dashboard/ManageProduct";
import ManageOrders from "./../layout/Dashboard/ManageOrders";
import AdminRoute from "../utils/AdminRoute";
import AdminLogin from "../utils/AdminLogin";
import OrderDetails from "../layout/Dashboard/OrderDetails";
import ProductDetails from './../layout/Dashboard/ProductDetails';

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
        path: "manage-order/:id",
        element: <OrderDetails />,
      },
      {
        path: "manage-products",
        element: <ManageProduct />,
      },
      {
        path: "manage-products/product-details/:id",
        element: <ProductDetails />,
      },
      {
        path: "add-product",
        element: <AddProduct />,
      },
    ],
  },
]);

export default routes;
