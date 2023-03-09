import React from 'react';
import { Offcanvas } from 'react-bootstrap';

const Shop = ({ showShop, handleShopClose }) => {
    return (
        <Offcanvas className='px-2 shop_container' show={showShop} placement='bottom' scroll={false} backdrop={true} onHide={handleShopClose}>
            <Offcanvas.Header className='p-4' closeButton>
                <Offcanvas.Title className='fs-1'>Shop</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>

            </Offcanvas.Body>
        </Offcanvas>
    );
};

export default Shop;