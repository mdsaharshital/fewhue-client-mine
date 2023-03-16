import React from 'react';
import { Col, Offcanvas, Row } from 'react-bootstrap';
import ShopProductCard from '../components/ShopProductCard/ShopProductCard';
import { useGetAllProductsQuery } from '../feature/product/productSlice';

const Shop = ({ showShop, handleShopClose,handleShowProductDetails,data }) => {
    
   
    return (
        <Offcanvas className='px-2 shop_container' show={showShop} placement='bottom' scroll={false} backdrop={true} onHide={handleShopClose}>
            <Offcanvas.Header className='p-4' closeButton>
                <Offcanvas.Title className='fs-1'>Shop</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <Row className='w-90 mx-auto'>
                    {
                        data?.products?.map(product => <Col
                            key={product._id}
                            sm={12}
                            md={4}
                            className="cursor_hover"
                            onClick={handleShowProductDetails}
                        >
                            <ShopProductCard
                                product={product}
                            >
                            </ShopProductCard>
                        </Col>)
                    }
                </Row>
            </Offcanvas.Body>
        </Offcanvas>
    );
};

export default Shop;