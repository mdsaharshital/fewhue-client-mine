import React from "react";
import takaIcon from "../../assets/taka.svg";
import { useGetProductPhotoQuery } from "../../feature/product/productSlice";
import { photoConverter } from "../../utils/photoConverter";

const CartSlide = ({ product }) => {
  const { data } = useGetProductPhotoQuery(product._id);
  return (
    <div className="slider__container">
      <button className="remove_btn">
        <svg
          width="16"
          height="16"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M25 7L7 25"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M25 25L7 7"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
      <div className="cart_des mt-4">
        <div className="product_price_box_cart skew_md">
          <img
            className="me-1"
            width="15px"
            height="15px"
            src={takaIcon}
            alt=""
          />
          <h5>{product.price}</h5>
        </div>
      </div>
      <img
        className="slider__img w-100 img-fluid"
        src={photoConverter(data)}
        alt=""
      />
      <div className="qtn_counter">
        <svg
          className="minus"
          width="20"
          height="20"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28Z"
            stroke="black"
            stroke-width="2"
            stroke-miterlimit="10"
          />
          <path
            d="M11 16H21"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <span className="qtn">1</span>
        <svg
          className="plus"
          width="20"
          height="20"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28Z"
            stroke="black"
            stroke-width="2"
            stroke-miterlimit="10"
          />
          <path
            d="M11 16H21"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M16 11V21"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </div>
  );
};

export default CartSlide;
