import React from 'react';
import takaIcon from '../../assets/taka.svg'
import caretRight from '../../assets/CaretRight.svg'
import './ShopCard.css'
import { useDispatch } from 'react-redux';
import { setProductDetails } from '../../feature/basket/basketSlice';
import { photoConverter } from '../../utils/photoConverter';
import { useGetProductPhotoQuery } from '../../feature/product/productSlice';

const ShopCard = ({ product }) => {
    const dispatch = useDispatch();
    const { data } = useGetProductPhotoQuery(product._id);
    return (
        <>
            <div className="shoppp-card"
                onClick={() =>
                    dispatch(setProductDetails({ ...product }))
                }>
                <div className="shop_product_price_boxx">
                    <img width="20px" height="20px" src={takaIcon} alt="" />
                    <h5>{product.price}</h5>
                </div>
                <div>
                    <img className='produc-img' src={photoConverter(data)} alt="Placeholder" />
                    <div className='produc-btn  '>
                        <span>VIEW PRODUCT</span>
                        <img src={caretRight} alt="" />
                    </div>
                </div>
            </div>
            {/* product-photo/:pid */}
            {/* http://localhost:5000/product/product-photo/${productId} */}
        </>
    );
};

export default ShopCard;