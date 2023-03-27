import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import AddProduct from "../Dashboard/AddProduct";
import Dashboard from "../Dashboard/Dashboard";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/dashboard",
    element: (
      //   <PrivateRoute>
      <Dashboard />
      //   </PrivateRoute>
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
