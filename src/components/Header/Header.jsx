import React, { useState } from 'react';
import { Offcanvas } from 'react-bootstrap';
import cartIcon from '../../assets/ShoppingCart.svg'
import takaIcon from '../../assets/taka.svg'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCoverflow, Pagination, Navigation } from "swiper";
import demoCap from '../../assets/YT1.png'
import './Header.css'

const Header = () => {
    const [showCart, setShowCart] = useState(false);

    const handleClose = () => setShowCart(false);
    const handleShow = () => setShowCart(true);

    const productDemoData = [
        {
            id: 1,
            price: 450,
            img: demoCap
        },
        {
            id: 2,
            price: 450,
            img: demoCap
        },
        {
            id: 3,
            price: 450,
            img: demoCap
        }
    ]
    return (
        <>
            <Offcanvas className='cart_container' show={showCart} placement='end' scroll={true} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Cart</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
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
                        {
                            productDemoData.map(s => <SwiperSlide
                                key={s.id}
                                productPrice={s.price}
                                productImg={s.img}
                            >
                                <div className='slider__container'>
                                    <button className='remove_btn'>
                                        <svg width="16" height="16" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M25 7L7 25" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M25 25L7 7" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </button>
                                    <div className='cart_des mt-4'>
                                        <div className="product_price_box_cart skew_md">
                                            <img className='me-1' width="15px" height="15px" src={takaIcon} alt="" />
                                            <h5>{s.price}</h5>
                                        </div>
                                    </div>
                                    <img className='slider__img w-100 img-fluid' src={s.img} alt="" />
                                    <div className="qtn_counter">
                                        <svg className='minus' width="20" height="20" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28Z" stroke="black" stroke-width="2" stroke-miterlimit="10" />
                                            <path d="M11 16H21" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        <span className='qtn'>
                                            1
                                        </span>
                                        <svg className='plus' width="20" height="20" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28Z" stroke="black" stroke-width="2" stroke-miterlimit="10" />
                                            <path d="M11 16H21" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M16 11V21" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </div>
                                </div>
                            </SwiperSlide>

                            )
                        }
                    </Swiper>
                    <div className="cart_total_container text-center mt-5">
                        <div className="cart_total_price_box">
                            <h5>Cart Total</h5>
                            <p className='price_box'>
                                <img width='15px' height='15px' src={takaIcon} alt="" />
                                <span className='ms-1'>
                                    5000
                                </span>
                            </p>
                        </div>
                        <button className='checkout_btn'>Proceed to checkout</button>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
            <div className='header_container fadeIn4'>
                <div className="logo_container">
                    <div className="logo shadow">
                        <img src="https://few-hue-client.vercel.app/assets/Asset%2027.png" alt="fewhew_logo" />
                    </div>
                    <div className="brand_name">FEWHEW</div>
                </div>
            </div>
            <div className="cart fadeIn4" onClick={handleShow}>
                <div className="cart_text me-3">Cart</div>
                <div className="cart_icon">
                    <img className='w-100 h-100' src={cartIcon} alt="" />
                </div>
                <sup className='ps-2 pb-4 counter'>12</sup>
            </div>
        </>
    );
};

export default Header;