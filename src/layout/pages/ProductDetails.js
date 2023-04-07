import React from "react";
import takaIcon from "../../assets/taka.svg";
import { Carousel, Offcanvas } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  decreaseCartProduct,
} from "../../feature/basket/basketSlice";
import { useGetProductPhotoQuery } from "../../feature/product/productSlice";
import { photoConverter } from "../../utils/photoConverter";
import "./productDetails.css";
import { toast } from "react-hot-toast";

const ProductDetails = (props) => {
  const dispatch = useDispatch();
  const { showProductDetails, handleProductDetailsClose } = props;
  const { productDetails } = useSelector((auth) => auth.basket);
  const { cart } = useSelector((auth) => auth.basket);
  const { quantity } = cart.find((c) => c._id === productDetails._id) || {};
  const { _id, name, price, description } = productDetails || {};
  const { data } = useGetProductPhotoQuery(_id);
  console.log("hey", productDetails);

  const ProductDetailsDemoData = [
    {
      ProductImgDemodata: [
        {
          id: 1,
          imgUrl: photoConverter(data),
        },
      ],
    },
  ];
  console.log(ProductDetailsDemoData[0].ProductImgDemodata);
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    toast.success("Added to cart");
  };
  return (
    <div>
      <Offcanvas
        className="px-2 shop_container"
        show={showProductDetails}
        placement="bottom"
        scroll={false}
        backdrop={true}
        onHide={handleProductDetailsClose}
      >
        <Offcanvas.Header className="p-4" closeButton>
          <Offcanvas.Title className="fs-1">Shop</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="product_details_container">
            <div className="">
              <Carousel className="caro w-100" variant="dark">
                {ProductDetailsDemoData[0].ProductImgDemodata.map((p) => (
                  <Carousel.Item key={p.id}>
                    <div className="w-75 mx-auto">
                      <img
                        className="d-block w-75 img-fluid"
                        src={p.imgUrl}
                        alt=""
                      />
                    </div>
                  </Carousel.Item>
                ))}
              </Carousel>
            </div>
            <div className="caro-details">
              <h2 className="prodcutName fs-1 font-bold">{name}</h2>
              {/* use only basic style to complete here */}
              <hr />
              <p className="prodcutName fs-3">
                <img
                  className=""
                  width="17px"
                  height="17px"
                  src={takaIcon}
                  alt=""
                />
                {price}
              </p>
              <hr />
              <p className="desc fs-4">
                Description: <br />
                {description}
              </p>
              <hr />
              {quantity > 0 && (
                <div className="quantity-control">
                  <svg
                    onClick={() =>
                      dispatch(decreaseCartProduct(productDetails))
                    }
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
                      strokeWidth="2"
                      strokeMiterlimit="10"
                    />
                    <path
                      d="M11 16H21"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <input
                    type="number"
                    className="qtn"
                    value={quantity || 0}
                    name=""
                    id=""
                  />
                  <svg
                    onClick={() => handleAddToCart(productDetails)}
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
                      strokeWidth="2"
                      strokeMiterlimit="10"
                    />
                    <path
                      d="M11 16H21"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M16 11V21"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              )}
              <br />

              <button
                className="btn fs-5 btn-dark "
                onClick={() => handleAddToCart(productDetails)}
              >
                {/* <svg
                  className="s-svg"
                  viewBox="45 60 400 320"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="#fff"
                    d="M 90 210 C 90 180 90 150 90 150 C 150 150 180 150 180 150 C 180 150 300 150 300 150 C 300 150 330 150 390 150 C 390 150 390 180 390 210 C 390 240 390 270 390 270 C 330 270 300 270 300 270 C 300 270 180 270 180 270 C 180 270 150 270 90 270 C 90 270 90 240 90 210"
                    mask="url(#knockout-text)"
                  ></path>
                  <mask id="knockout-text">
                    <rect width="100%" height="100%" fill="#fff" x="0" y="0" />
                    <text x="147" y="227" fill="#000">
                      Add To Cart
                    </text>
                  </mask>
                </svg> */}
                Add To Cart
              </button>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default ProductDetails;
