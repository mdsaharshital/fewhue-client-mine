import React from 'react';
import { Col, Offcanvas, Row } from 'react-bootstrap';
import demoCap from '../assets/YT1.png'
import ShopProductCard from '../components/ShopProductCard/ShopProductCard';

const Shop = ({ showShop, handleShopClose }) => {
    const productDemoData = [
        {
            id: 1,
            price: 450,
            img: demoCap
        },
        {
            id: 2,
            price: 450,
            img: demoCap
        },
        {
            id: 3,
            price: 450,
            img: demoCap
        },
        {
            id: 4,
            price: 450,
            img: demoCap
        },
        {
            id: 5,
            price: 450,
            img: demoCap
        },
        {
            id: 6,
            price: 450,
            img: demoCap
        },
        {
            id: 7,
            price: 450,
            img: demoCap
        },
        {
            id: 8,
            price: 450,
            img: demoCap
        },
        {
            id: 7,
            price: 450,
            img: demoCap
        },
        {
            id: 9,
            price: 450,
            img: demoCap
        },
    ]
    return (
        <Offcanvas className='px-2 shop_container' show={showShop} placement='bottom' scroll={false} backdrop={true} onHide={handleShopClose}>
            <Offcanvas.Header className='p-4' closeButton>
                <Offcanvas.Title className='fs-1'>Shop</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <Row className='w-90 mx-auto'>
                    {
                        productDemoData.map(product => <Col
                            key={product.id}
                            sm={12}
                            md={4}
                        >
                            <ShopProductCard
                                productPrice={product.price}
                                productImg={product.img}
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