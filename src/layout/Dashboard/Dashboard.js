import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signOutuser } from "../../feature/auth/authSlice";
import DashFooter from "./Comp/DashFooter";
import './Dashboard.css'

const Dashboard = () => {
  const dispatch = useDispatch();
  return (
    <div className="pt-5 dash">
      <div className="container">
        <h2 className="text-center fw-bold pt-5">Dashboard</h2>
        <div className="d-flex justify-content-end">
          <h5 className="m-2">
            <Link to="/" className="text-black">
              Home
            </Link>
          </h5>
          <h5 className="m-2">
            <Link
              to="/"
              className="text-black"
              onClick={() => dispatch(signOutuser())}
            >
              LogOut
            </Link>
          </h5>
        </div>
        <Row className="justify-content-center ">
          <Col md={3} xs={12}>
            <ul>
              <li>
                <Link
                  className="fs-5 btn btn-outline-dark d-block g-2 m-2"
                  to="/dashboard"
                >
                  Manage Orders
                </Link>
              </li>
              <li>
                <Link
                  className="fs-5 btn btn-outline-dark d-block g-2 m-2"
                  to="/dashboard/manage-products"
                >
                  Manage Product
                </Link>
              </li>
              <li>
                <Link
                  className="fs-5 btn btn-outline-dark d-block g-2 m-2"
                  to="/dashboard/add-product"
                >
                  Add New Item
                </Link>
              </li>
              <li>
                <Link
                  className="fs-5 btn btn-outline-dark d-block g-2 m-2"
                  to="/dashboard/manage-category"
                >
                  Manage Category
                </Link>
              </li>
            </ul>
          </Col>
          <Col md={9} xs={12} className="">
            <Outlet></Outlet>
          </Col>
        </Row>
      </div>
      <DashFooter />
    </div>
  );
};

export default Dashboard;
