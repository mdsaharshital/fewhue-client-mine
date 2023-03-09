import React from 'react';
import takaIcon from '../../assets/taka.svg'
import caretRight from '../../assets/CaretRight.svg'

import './ProductCard.css'

const ProductCard = (props) => {
    const { productPrice, productImg } = props
    return (
        <div className="product_card">
            <div className="product_price_box">
                <img className='me-2' width="20px" height="20px" src={takaIcon} alt="" />
                <h5>{productPrice}</h5>
            </div>
            <div className="product_img">
                <img className='w-100 img-fluid' src={productImg} alt="" />
                <div className="product_details_btn text-end px-2 py-2">
                    <h5>view product</h5>
                    <img src={caretRight} alt="" />
                </div>
            </div>
        </div>
    );
};

export default ProductCard;