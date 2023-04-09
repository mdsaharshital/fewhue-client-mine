import React from "react";
import { useGetProductPhotoQuery } from "../../feature/product/productSlice";
import { photoConverter } from "../../utils/photoConverter";

const SubTotal = ({ product }) => {
  const { data } = useGetProductPhotoQuery(product._id);
  return (
    <li
      key={product._id}
      class="list-group-item d-flex justify-content-between align-items-start"
    >
      <div class="ms-3 me-auto d-flex justify-content-center align-items-center w-full">
        <div className="me-3">
          <img src={photoConverter(data)} width={"50px"} alt="" />
        </div>
        <div className="ms-2 w-full">
          <div class="fw-bold fs-5">{product.name}</div>
          <div className="d-flex w-full justify-content-center mt-2">
            <span>
              Price: <span className="fw-bold">{product.price}</span>
            </span>
            <span className="ms-5">
              Quantity: <span className="fw-bold">{product.quantity}</span>{" "}
            </span>
          </div>
        </div>
      </div>
      <div class="fw-bold fs-5">{product.price * product.quantity} Tk</div>
    </li>
  );
};

export default SubTotal;
