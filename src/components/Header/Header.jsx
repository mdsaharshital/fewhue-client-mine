import React, { useState } from 'react';
import { Offcanvas } from 'react-bootstrap';
import cartIcon from '../../assets/ShoppingCart.svg'
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCoverflow, Pagination, Navigation } from "swiper";
import './Header.css'
import { useSelector } from 'react-redux';
import takaIcon from "../../assets/taka.svg";
import { Swiper, SwiperSlide } from 'swiper/react';
import CartSlide from './CartSlide';
import CheckOut from '../CheckOut/CheckOut';
import emptyCartImg from '../../assets/emptyCart.png'

const Header = ({ handleShowCheckoutClose, handleShowCheckout, showCheckout, handleShopShow }) => {
    const [showCart, setShowCart] = useState(false);
    const handleClose = () => setShowCart(false);
    const handleShow = () => setShowCart(true);
    const { cart } = useSelector((auth) => auth.basket);
    const totalPrice = cart.reduce(
        (acc, product) => acc + (product.price * product.quantity || 0),
        0
    );
    console.log("totalPrice", totalPrice);

    return (
        <>
            {/* checkout  canvas */}
            <Offcanvas className='checkout_modal' show={showCheckout} placement='end' scroll={true} onHide={handleShowCheckoutClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title className='fs-1'>Checkout</Offcanvas.Title>
                </Offcanvas.Header>
                <hr />
                <Offcanvas.Body>
                    {/* checkout compo */}
                    <CheckOut totalPrice={totalPrice} />
                </Offcanvas.Body>
            </Offcanvas>
            <Offcanvas className='cart_container' show={showCart} placement='end' scroll={true} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Cart</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    {
                        cart.length > 0 ?
                            <>
                                <Swiper
                                    modules={[EffectCoverflow, Pagination, Navigation]}
                                    effect={"coverflow"}
                                    grabCursor={true}
                                    centeredSlides={true}
                                    slidesPerView={"auto"}
                                    coverflowEffect={{
                                        rotate: 0,
                                        stretch: 0,
                                        depth: 100,
                                        modifier: 1,
                                        slideShadows: true,
                                    }}
                                    pagination={true}
                                    navigation
                                    className="mySwiper"
                                >
                                    {cart.map((product) => (
                                        <SwiperSlide productPrice={product.price} productImg={product.photo}>
                                            <CartSlide product={product} />
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                                <div className="cart_total_container text-center mt-5">
                                    <div className="cart_total_price_box">
                                        <h5>Cart Total</h5>
                                        <p className="price_box">
                                            <img width="15px" height="15px" src={takaIcon} alt="" />
                                            <span className="ms-1">{totalPrice}</span>
                                        </p>
                                    </div>
                                    <button className="checkout_btn" onClick={handleShowCheckout}>Proceed to checkout</button>
                                </div></>
                            :
                            <div className="empty-cart h-full">
                                <img src={emptyCartImg} alt="" width={'250px'} />
                                <h1 className='empty_cart_text'>Your cart is empty.</h1>
                                <button onClick={handleShopShow} className='btn btn-dark btn-lg my-5 '>Shop Now</button>
                            </div>
                    }
                </Offcanvas.Body>
            </Offcanvas>
            <div className='header_container fadeIn4'>
                <div className="logo_container">
                    <div className="logo shadow">
                        <img src="https://few-hue-client.vercel.app/assets/Asset%2027.png" alt="fewheu_logo" />
                    </div>
                    <div className="brand_name">FEWHEU</div>
                </div>
            </div>
            <div className="cart fadeIn4" onClick={handleShow}>
                <div className="cart_text me-3">Cart</div>
                <div className="cart_icon">
                    <img className='w-100 h-100' src={cartIcon} alt="" />
                </div>
                <sup className='ps-2 pb-4 counter'>{cart.length}</sup>
            </div>
        </>
    );
};

export default Header;