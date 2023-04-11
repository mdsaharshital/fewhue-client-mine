import React, { useState } from "react";
import { Container, ListGroup, Table } from "react-bootstrap";
import {
  useGetAllOrdersQuery,
  useUpdateOrderStatusMutation,
} from "../../feature/product/productSlice";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";
import "./Dashboard.css";
import { useSelector } from "react-redux";
import OrderStat from "./Comp/OrderStat";
import ReactPaginate from "react-paginate";
import Loading from "../../utils/Loading";

const ManageOrders = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const { data } = useGetAllOrdersQuery();
  const [updateStatus] = useUpdateOrderStatusMutation();
  const { user, isLoading } = useSelector((state) => state.auth);
  //
  const pageCount = Math.ceil(data?.length / itemsPerPage);
  const offset = currentPage * itemsPerPage;
  const ordersToShow = data?.slice(offset, offset + itemsPerPage);
  //
  const getOrderStatusColor = (status) => {
    switch (status) {
      case "Not Processed":
        return "text-secondary"; // grey color
      case "Processing":
        return "text-primary"; // blue color
      case "Shipped":
        return "text-info"; // blue color
      case "Delivered":
        return "text-success"; // green color
      case "Cancelled":
        return "text-danger"; // red color
      default:
        return "";
    }
  };

  const handleSelectStatus = async (value, id) => {
    const newData = { status: value, id };
    const { data } = await updateStatus(newData);
    console.log("sta", data);
    if (data.success) {
      toast.success("Updated Successfully");
    }
  };
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <h3 className="text-center fs-3 fw-bold">Admin ID</h3>
      <div className="w-100 w-md-50 mx-auto my-5 ">
        <ListGroup className="list-group-flush">
          <ListGroup.Item className="py-2" variant="primary">
            Name: {user.name}
          </ListGroup.Item>
          <ListGroup.Item className="py-2" variant="success">
            Email: {user.email}
          </ListGroup.Item>
        </ListGroup>
      </div>
      <div className="my-5">
        <OrderStat orderData={data} />
      </div>
      <h3 className="text-center fs-1 fw-bold my-5">Orders</h3>
      <Container fluid>
        <div className="table-container">
          <Table striped borderless hover responsive>
            <thead>
              <tr>
                <th className="table_font_heading">#</th>
                <th className="table_font_heading">Email</th>
                <th className="table_font_heading">Total Price</th>
                <th className="table_font_heading">Details</th>
                <th className="table_font_heading">Status</th>
              </tr>
            </thead>
            <tbody>
              {ordersToShow?.map((order, index) => (
                <tr key={offset + index}>
                  <td>{offset + index + 1}</td>
                  <td
                    className={`${getOrderStatusColor(order.status)} fw-bold`}
                  >
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
          <ReactPaginate
            pageCount={pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={({ selected }) => setCurrentPage(selected)}
            containerClassName="pagination justify-content-center"
            pageClassName="page-item"
            pageLinkClassName="btn btn-outline-dark mx-1"
            previousClassName="page-item"
            previousLinkClassName="btn btn-outline-dark"
            nextClassName="page-item"
            nextLinkClassName="btn btn-outline-dark"
            activeClassName="active"
            activeLinkClassName="btn btn-dark text-white"
            disabledLinkClassName="disabled"
          />
        </div>
      </Container>
      <p className="text-center mb-5">Maintain order status carefully</p>
      <p className="text-center mb-5">
        For any queries contact us{" "}
        <a
          href="mailto:mdsaharshitol@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          Send email
        </a>
      </p>
    </div>
  );
};

export default ManageOrders;
