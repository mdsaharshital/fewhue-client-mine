import React from 'react';
import takaIcon from '../../assets/taka.svg'
import caretRight from '../../assets/CaretRight.svg'

import './ProductCard.css'
import { useGetProductPhotoQuery } from '../../feature/product/productSlice';
import { photoConverter } from '../../utils/photoConverter';
import { useDispatch } from 'react-redux';
import { setProductDetails } from '../../feature/basket/basketSlice';

const ProductCard = ({product}) => {
    const dispatch = useDispatch()
  const { data } = useGetProductPhotoQuery(product._id);
    console.log('data',data);
    return (
        <div className="product_card" onClick={()=> dispatch(setProductDetails({...product}))}>

            <div className="product_price_box">
                <img className='me-2' width="20px" height="20px" src={takaIcon} alt="" />
                <h5>{product.price}</h5>
            </div>
            <div className="product_img">
                <img className='w-100 img-fluid' 
                src={photoConverter(data)}
                 alt="ee" />
                <div className="product_details_btn text-end px-2 py-2">
                    <h5>view product</h5>
                    <img src={caretRight} alt="" />
                </div>
            </div>
        </div>
    );
};

export default ProductCard;