import React from 'react';
import "./OrderCard.css";
import { useGetProductPhotoQuery } from '../../../feature/product/productSlice';
import { photoConverter } from './../../../utils/photoConverter';

const OrderCard = ({ cart }) => {

    const { data } = useGetProductPhotoQuery(cart._id);

    return (
        <div>
            <div className="cardd">
                <img width={"130px"} src={photoConverter(data)} alt="..." />
                <div className="cardd-details">
                    <h3>{cart.name}</h3>
                    <h3> Price: ${cart.price}</h3>
                    <h3>Quantity: {cart.quantity}</h3>
                </div>
            </div>
        </div>
    );
};

export default OrderCard;