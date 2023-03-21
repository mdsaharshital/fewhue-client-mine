import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from "swiper";
import './Checkout.css'
import CartSlide from '../Header/CartSlide';
import { useSelector } from 'react-redux';

const CheckOut = () => {
    
    const { cart } = useSelector((auth) => auth.basket);
    return (
        <div className="mt-5">
           {/* form */}
   <div className="form_checkout">
        <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Full name</Form.Label>
                    <Form.Control type="text" placeholder="Enter full name eg:  Abul Hasan" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Address</Form.Label>
                    <Form.Control type="text" placeholder="Address eg: 31/D, Dhanmondi, Dhaka" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Postal Code</Form.Label>
                    <Form.Control type="text" placeholder="Postal Code eg: 1200" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                    <Button variant="primary" type="submit">Order</Button>
        </Form>
        <div className='swiper_checkout'>
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
        </div>
   </div>
           {/* <h1></h1> */}
        </div>
    );
};

export default CheckOut;