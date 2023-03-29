import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
  return <div className="container">
    <h2 className="text-center fw-bold pt-5">Dashboard</h2>
    <Row>
      <Col className="border">
        <ul>
          <li ><Link className="fs-5 btn btn-outline-dark d-block g-2 m-2" to='/dashboard'>Manage Orders</Link></li>
          <li ><Link className="fs-5 btn btn-outline-dark d-block g-2 m-2" to='/dashboard/manage-products'>Manage Product</Link></li>
          <li ><Link className="fs-5 btn btn-outline-dark d-block g-2 m-2" to='/dashboard/add-product'>Add New Item</Link></li>
        </ul>
      </Col>
      <Col xs={9} className="border">
        <Outlet></Outlet>
      </Col>
    </Row>

  </div>;
};

export default Dashboard;
