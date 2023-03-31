import React from "react";
import { Table } from "react-bootstrap";
import { useGetAllOrdersQuery } from "../../feature/product/productSlice";
import { Link } from 'react-router-dom';

const ManageOrders = () => {
  const { data } = useGetAllOrdersQuery();
  console.log("order", data);
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
              <td className="fs-4">{index + 1}</td>
              <td className="fs-4">{order.email}</td>
              <td className="fs-4">{order.totalPrice}</td>
              <td className="fs-4"><Link to={`manage-order/${order._id}`} className="btn btn-sm btn-outline-dark">Details</Link></td>
              <td className="fs-4">{order.status}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ManageOrders;
