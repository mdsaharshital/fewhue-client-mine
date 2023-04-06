import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from "swiper";
import './Checkout.css'
import CartSlide from '../Header/CartSlide';
import { useDispatch, useSelector } from 'react-redux';
import { useOrderProductMutation } from '../../feature/product/productSlice';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { emptyCart } from '../../feature/basket/basketSlice';
import { InputGroup } from 'react-bootstrap';
import SubTotal from './SubTotal';

const CheckOut = ({ totalPrice }) => {
    const dispatch = useDispatch()
    const { register, handleSubmit, reset } = useForm();
    const { cart } = useSelector((auth) => auth.basket);
    const [placeOrder, { isLoading, }] = useOrderProductMutation();

    async function onSubmit(formData) {
        const timestamp = Date.now().toString();
        const randomString = Math.random().toString(36).substring(2, 8);
        const orderNumber = `${timestamp}-${randomString}`;
        console.log('order', orderNumber);
        const newData = {
            ...formData,
            totalPrice,
            orderNumber,
            products: cart
        }
        console.log('newdata', newData);
        const { data } = await placeOrder(newData)
        console.log('order', data);
        if (data.success) {
            toast.success(`${data.message}`)
            reset()
            dispatch(emptyCart())
        } else {
            toast.error(`${data.message}`)

        }
    }

    return (
        <div className="mt-5">
            {/* form */}
            <div className="form_checkout">
                <Form className='form-input form_checkout_child' onSubmit={handleSubmit(onSubmit)}>
                       <div className="input-flex-container">
                                <Form.Group controlId="formBasicEmail" className='input-flex'>
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control className='mb-3 w-full' type="email" {...register("email", { required: true })} placeholder="Enter email" />
                                </Form.Group>

                                <Form.Group controlId="formBasicName" className='input-flex'>
                                    <Form.Label>Full name</Form.Label>
                                    <Form.Control className='mb-3 w-full' type="text" {...register("name", { required: true })} placeholder="Enter full name" />
                                </Form.Group>
                       </div>
                       <div className='input-flex-container'> 
                            <div className='input-flex'>
                                <Form.Group controlId="formBasicAddress">
                                    <Form.Label>Address</Form.Label>
                                    <Form.Control className='mb-3 ' type="text" {...register("address", { required: true })} placeholder="Eg: 31/D, Dhanmondi, Dhaka-1200" />
                                </Form.Group>
                                <Form.Group controlId="formBasicPhone" >
                                    <Form.Label>Phone</Form.Label>
                                    <Form.Control className='mb-3 ' type="text" {...register("phone", { required: true })} placeholder="Phone eg: 01723XXXXXX" />
                                </Form.Group>
                            </div>
                        </div>
                        <Button variant="primary" className='order-btn' type="submit" disabled={isLoading}>
                            {isLoading ? 'Placing Order...' : 'Place Order'}
                        </Button>
                </Form>
                <div className="input-flex mt-4 form_checkout_child">
                        <ol class="list-group list-group-numbered">
                           {cart.map((product)=>( <SubTotal product={product}/>))}
                        </ol>
                        <div className="list-group">
                            <div  class="list-group-item d-flex justify-content-between align-items-start">
                                <div class="ms-2 me-auto my-2">
                                    <div class="fw-bold ">Total Price</div>
                                </div>
                                <span class="fw-bold">{totalPrice} Tk</span>
                            </div>
                        </div>
                </div>
                {/* <div className='swiper_checkout'>
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
                </div> */}
            </div>
            {/* <h1></h1> */}
        </div>
    );
};

export default CheckOut;