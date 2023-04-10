import React from 'react';
import takaIcon from '../../assets/taka.svg'
import caretRight from '../../assets/CaretRight.svg'
import './ShopProductCard.css'
import { useDispatch } from 'react-redux';
import { setProductDetails } from '../../feature/basket/basketSlice';
import { photoConverter } from '../../utils/photoConverter';
import { useGetProductPhotoQuery } from '../../feature/product/productSlice';

const ShopProductCard = ({ product }) => {
    const dispatch = useDispatch();
    const { data } = useGetProductPhotoQuery(product._id);
    return (
        <div className="shop_product_card"
            onClick={() =>
                dispatch(setProductDetails({ ...product }))
            }>
            <div className="shop_product_price_box">
                <img className='me-2' width="20px" height="20px" src={takaIcon} alt="" />
                <h5>{product.price}</h5>
            </div>
            <div className="shop_product_img">
                <img className='w-100 img-fluid'
                    src={photoConverter(data)}
                    alt="" />
                <div className="shop_product_details_btn text-end px-2 py-2"
                >
                    <h5>{product.name}</h5>
                    <img src={caretRight} alt="" />
                </div>
            </div>
            {/* product-photo/:pid */}
            {/* http://localhost:5000/product/product-photo/${productId} */}
        </div>
    );
};

export default ShopProductCard;