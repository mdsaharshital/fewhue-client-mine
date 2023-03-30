import React from 'react';
import { useParams } from 'react-router-dom';

const OrderDetails = () => {
    const { id } = useParams();
    return (
        <div>
            Order Details {id}
        </div>
    );
};

export default OrderDetails;