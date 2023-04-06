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
      <div class="ms-2 me-auto d-flex justify-content-center align-items-center">
        <img src={photoConverter(data)} width={"100px"} alt="" />
        <div className="ms-2">
          <div class="fw-bold fs-5">{product.name}</div>
          <div className="">
            Quantity: <span className="fw-bold">{product.quantity}</span>{" "}
            <span>
              Price: <span className="fw-bold">{product.price}</span>
            </span>
          </div>
        </div>
      </div>
      <span class="fw-bold">{product.price * product.quantity} Tk</span>
    </li>
  );
};

export default SubTotal;
