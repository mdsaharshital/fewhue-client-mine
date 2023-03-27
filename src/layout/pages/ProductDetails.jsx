import React from 'react';
import { Carousel, Offcanvas } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../feature/basket/basketSlice';
import { useGetProductPhotoQuery } from '../../feature/product/productSlice';
import { photoConverter} from '../../utils/photoConverter';


const ProductDetails = (props) => {
    const dispatch= useDispatch()
    const { showProductDetails, handleProductDetailsClose } = props
    const {productDetails}= useSelector(auth=> auth.basket)
    const {_id, name,price, description, categoy,slug}= productDetails || {}
    const { data } = useGetProductPhotoQuery(_id);

    console.log('hey',productDetails);
        const ProductDetailsDemoData = [
            {
                ProductImgDemodata: [
                    {
                        id: 1,
                        imgUrl: photoConverter(data)
                    },

                ]
            }
        ]
    console.log(ProductDetailsDemoData[0].ProductImgDemodata)
    return (
        <div>
            <Offcanvas className='px-2 shop_container' show={showProductDetails} placement='bottom' scroll={false} backdrop={true} onHide={handleProductDetailsClose}>
                <Offcanvas.Header className='p-4' closeButton>
                    <Offcanvas.Title className='fs-1'>Shop</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <div className="product_details_container">
                        <div className='w-70 caro'>
                            <Carousel className='w-100' variant="dark">

                                {
                                    ProductDetailsDemoData[0].ProductImgDemodata.map(p => <Carousel.Item
                                        key={p.id}
                                    >
                                        <div className='w-75 mx-auto'>
                                            <img
                                                className="d-block w-75 img-fluid"
                                                src={p.imgUrl}
                                                alt=""
                                            />
                                        </div>
                                    </Carousel.Item>)
                                }


                            </Carousel>
                        </div>
                        <div className="w-30 px-5 py-4">
                            <h2 className='prodcutName font-bold'>{name}</h2>
                            {/* use only basic style to complete here  */}

                            <p className='prodcutName'>price: {price}$</p>
                            <p className='prodcutName'>Description: {description}</p>
                            <button onClick={()=>dispatch(addToCart(productDetails))}>Add to cart</button>
                        </div>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    );
};

export default ProductDetails;