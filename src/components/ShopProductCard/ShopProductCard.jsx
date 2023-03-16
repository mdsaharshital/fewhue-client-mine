import React from 'react';
import takaIcon from '../../assets/taka.svg'
import caretRight from '../../assets/CaretRight.svg'

import './ShopProductCard.css'
import { useGetProductPhotoQuery } from '../../feature/product/productSlice';
import { photoConverter } from '../../utils/photoConverter';

const ShopProductCard = (props) => {
    const { productPrice, productId } = props
    const {data}=useGetProductPhotoQuery(productId)
    console.log('pid',data);
    return (
        <div className="shop_product_card">
            <div className="shop_product_price_box">
                <img className='me-2' width="20px" height="20px" src={takaIcon} alt="" />
                <h5>{productPrice}</h5>
            </div>
            <div className="shop_product_img">
            {/* product-photo/:pid */}
            {/* 
            http://localhost:5000/product/product-photo/${productId}
            */}
                <img className='w-100 img-fluid' 
                src={photoConverter(data)}
                 alt="" />
                <div className="shop_product_details_btn text-end px-2 py-2">
                    <h5>view product</h5>
                    <img src={caretRight} alt="" />
                </div>
            </div>
        </div>
    );
};

export default ShopProductCard;