import React from "react";

const OrderStat = ({ orderData }) => {
  const totalPriceSum = orderData?.reduce(
    (acc, item) => acc + item.totalPrice,
    0
  );
  return (
    <div className="d-flex flex-wrap justify-content-evenly">
      <div className="order-card-stat first-stat-card mb-3 mb-md-0 ">
        <h1 className="fw-bold">{orderData?.length}</h1>
        <h5 className="fw-bold opacity-50">Orders</h5>
      </div>
      <div className="order-card-stat second-stat-card">
        <h1>
          {totalPriceSum} <span className="fs-5 fw-bold">Tk.</span>
        </h1>
        <h5 className="fw-bold opacity-50">Sales</h5>
      </div>
      <div className="order-card-stat third-stat-card">
        <h1>
          {totalPriceSum / orderData?.length}{" "}
          <span className="fs-5 fw-bold">Tk.</span>
        </h1>
        <h5 className="fw-bold opacity-50">Avg Sales</h5>
      </div>
    </div>
  );
};

export default OrderStat;
