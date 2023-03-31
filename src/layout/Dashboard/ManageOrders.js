import React from "react";
import { Table } from "react-bootstrap";
import {
  useGetAllOrdersQuery,
  useUpdateOrderStatusMutation,
} from "../../feature/product/productSlice";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";
import "./Dashboard.css";

const ManageOrders = () => {
  const getOrderStatusColor = (status) => {
    switch (status) {
      case "Not Processed":
        return "text-danger"; // red color
      case "Processing":
        return "text-warning"; // yellow color
      case "Shipped":
        return "text-info"; // blue color
      case "Delivered":
        return "text-success"; // green color
      case "Cancelled":
        return "text-secondary"; // gray color
      default:
        return "";
    }
  };
  const { data } = useGetAllOrdersQuery();
  const [updateStatus] = useUpdateOrderStatusMutation();

  const handleSelectStatus = async (value, id) => {
    const newData = { status: value, id };
    const { data } = await updateStatus(newData);
    console.log("sta", data);
    if (data.success) {
      toast.success("Updated Successfully");
    }
  };

  return (
    <div>
      <h3 className="text-center fs-1 fw-bold">Orders</h3>
      <Table striped borderless hover responsive>
        <thead>
          <tr>
            <th className="fs-4">#</th>
            <th className="fs-4">Email</th>
            <th className="fs-4">Total Price</th>
            <th className="fs-4">Details</th>
            <th className="fs-4">Status</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((order, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td className={getOrderStatusColor(order.status)}>
                {order.email}
              </td>
              <td>{order.totalPrice}</td>
              <td>
                <Link
                  to={`manage-order/${order._id}`}
                  className="btn btn-md btn-outline-dark"
                >
                  Details
                </Link>
              </td>
              <td>
                <div className="select-wrapper">
                  <select
                    id="status"
                    name="status"
                    defaultValue={order.status}
                    onChange={(e) =>
                      handleSelectStatus(e.target.value, order._id)
                    }
                  >
                    <option value="Not Processed">Not Processed</option>
                    <option value="Processing">Processing</option>
                    <option value="Shipped">Shipped</option>
                    <option value="Delivered">Delivered</option>
                    <option value="Cancelled">Cancelled</option>
                  </select>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ManageOrders;
