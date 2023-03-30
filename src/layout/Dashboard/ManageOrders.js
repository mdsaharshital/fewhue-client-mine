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
      <Table responsive>
        <thead>
          <tr>
            <th className="fs-3">#</th>
            <th className="fs-3">Email</th>
            <th className="fs-3">Total Price</th>
            <th className="fs-3">Details</th>
            <th className="fs-3">Status</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((order, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{order.email}</td>
              <td>{order.totalPrice}</td>
              <td><Link to={`manage-order/${order._id}`} className="btn btn-sm btn-outline-dark">Details</Link></td>
              <td>{order.status}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ManageOrders;
