import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetAllOrdersQuery } from '../../feature/product/productSlice';
import OrderCard from './Comp/OrderCard';
import './OrderDetails.css';

const OrderDetails = () => {
    const { id } = useParams();
    const { data } = useGetAllOrdersQuery();
    // const { data } = useGetProductPhotoQuery(data._id);
    console.log('orderrrr', data);
    const order = data?.find(order => order._id === id) || [];
    return (
        <div>
            <h2 className='fs-1 fw-bold text-center'>Order Details</h2>
            <p className='fs-2'><b>Name:</b> {order.name}</p>
            <p className='fs-2'><b>Email: </b> {order.email} </p>
            <p className='fs-2'><b>Phone: </b> {order.phone}</p>
            <p className='fs-2'><b>Total Price: </b> {order.totalPrice}</p>
            <p className='fs-2'><b>Ordered Items: </b></p>

            <div className='cardss'>
                {
                    order?.products?.map((c, i) => (
                        <OrderCard key={i} cart={c}></OrderCard>
                    ))
                }
            </div>
        </div>
    );
};

export default OrderDetails;