import React from 'react';
import { Card } from 'react-bootstrap';
import { useGetProductPhotoQuery } from '../../../feature/product/productSlice';
import { photoConverter } from './../../../utils/photoConverter';

const OrderCard = ({ cart }) => {

    const { data } = useGetProductPhotoQuery(cart._id);

    return (

        <div>
            <div className='d-flex' style={{ width: '18rem' }}>
                <img width={'100px'} variant="top" src={photoConverter(data)} />
                <div>
                    <p>{cart.name}</p>
                    <p> Price: ${cart.price}</p>
                    <p>Quantity: {cart.quantity}</p>
                </div>
            </div>
        </div>
    );
};

export default OrderCard;