import React from 'react';
import takaIcon from '../../assets/taka.svg'
import { Carousel, Offcanvas } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, decreaseCartProduct,  } from '../../feature/basket/basketSlice';
import { useGetProductPhotoQuery } from '../../feature/product/productSlice';
import { photoConverter } from '../../utils/photoConverter';


const ProductDetails = (props) => {
    const dispatch = useDispatch()
    const { showProductDetails, handleProductDetailsClose } = props;
    const { productDetails } = useSelector(auth => auth.basket);
    const { cart } = useSelector((auth) => auth.basket);
    const {quantity}= cart.find(c=> c._id === productDetails._id)|| {};
    const { _id, name, price, description } = productDetails || {};
    const { data } = useGetProductPhotoQuery(_id);
    console.log('hey', productDetails);

    const ProductDetailsDemoData = [
        {
            ProductImgDemodata: [
                {
                    id: 1,
                    imgUrl: photoConverter(data)
                },

            ]
        }
    ]
    console.log(ProductDetailsDemoData[0].ProductImgDemodata)
    return (
        <div>
            <Offcanvas className='px-2 shop_container' show={showProductDetails} placement='bottom' scroll={false} backdrop={true} onHide={handleProductDetailsClose}>
                <Offcanvas.Header className='p-4' closeButton>
                    <Offcanvas.Title className='fs-1'>Shop</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <div className="product_details_container">
                        <div className='w-70 caro'>
                            <Carousel className='w-100' variant="dark">

                                {
                                    ProductDetailsDemoData[0].ProductImgDemodata.map(p => <Carousel.Item
                                        key={p.id}
                                    >
                                        <div className='w-75 mx-auto'>
                                            <img
                                                className="d-block w-75 img-fluid"
                                                src={p.imgUrl}
                                                alt=""
                                            />
                                        </div>
                                    </Carousel.Item>)
                                }


                            </Carousel>
                        </div>
                        <div className="w-30 px-5 py-4">
                            <h2 className='prodcutName fs-1 font-bold'>{name}</h2>
                            {/* use only basic style to complete here */}
                            <hr />
                            <p className='prodcutName fs-3'><img className='' width="17px" height="17px" src={takaIcon} alt="" />{price}</p>
                            <hr />
                            <p className='prodcutName fs-4'>Description: <br />{description}</p>
                            <hr />
                            <div className="quantity-control">
                                <svg
                                     onClick={() => dispatch(decreaseCartProduct(productDetails))}
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
                                <input type="number" value={quantity || 0} name="" id="" />
                                <svg
                                    onClick={() => dispatch(addToCart(productDetails))}
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
                            <br />
                            <button className='btn fs-5 btn-outline-dark' onClick={() => dispatch(addToCart(productDetails))}>Add to cart</button>
                        </div>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    );
};

export default ProductDetails;