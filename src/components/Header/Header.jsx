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
                                    <div className='cart_des mt-4'>
                                        <div className="product_price_box_cart skew_md">
                                            <img className='me-1' width="15px" height="15px" src={takaIcon} alt="" />
                                            <h5>{s.price}</h5>
                                        </div>
                                    </div>
                                    <img className='slider__img w-100 img-fluid' src={s.img} alt="" />
                                </div>
                            </SwiperSlide>

                            )
                        }
                    </Swiper>
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