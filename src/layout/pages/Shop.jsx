import React from 'react';
import { Col, Offcanvas, Row } from 'react-bootstrap';
import ShopProductCard from '../../components/ShopProductCard/ShopProductCard';
import ShopCard from '../../components/ShopCard/ShopCard';

const Shop = ({ showShop, handleShopClose, handleShowProductDetails, data }) => {
    return (
        <Offcanvas className='px-2 shop_container' show={showShop} placement='bottom' scroll={false} backdrop={true} onHide={handleShopClose}>
            <Offcanvas.Header className='p-4' closeButton>
                <Offcanvas.Title className='fs-1'>Shop</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <div className='card-grid w-90 mx-auto'>
                    {
                        data?.products?.map(product => <div
                            key={product._id}
                            sm={12}
                            md={4}
                            className="cursor_hover"
                            onClick={handleShowProductDetails}
                        >
                            <ShopCard
                                product={product}
                            >
                            </ShopCard>
                        </div>)
                    }
                </div>
            </Offcanvas.Body>
        </Offcanvas>
    );
};

export default Shop;