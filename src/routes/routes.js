import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import AddProduct from "../layout/Dashboard/AddProduct";
import Dashboard from "../layout/Dashboard/Dashboard";
import PrivateRoute from "../utils/PrivateRoutes";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  // {
  //   path: "/login",
  //   element: <App />,
  // },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    children: [
      {
        path: "add-product",
        element: <AddProduct />,
      },
    ],
  },
]);

export default routes;
