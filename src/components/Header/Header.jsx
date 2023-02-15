import React, { useState } from 'react';
import { Offcanvas } from 'react-bootstrap';
import cartIcon from '../../assets/ShoppingCart.svg'
import './Header.css'

const Header = () => {
    const [showCart, setShowCart] = useState(false);

    const handleClose = () => setShowCart(false);
    const handleShow = () => setShowCart(true);
    return (
        <>
            <Offcanvas className='cart_container h-75' show={showCart} placement='end' scroll={true} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Menu</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    Some text as placeholder. In real life you can have the elements you
                    have chosen. Like, text, images, lists, etc.
                </Offcanvas.Body>
            </Offcanvas>
            <div className='header_container fadeIn4'>
                <div className="logo_container">
                    <div className="logo shadow">
                        <img src="https://few-hue-client.vercel.app/assets/Asset%2027.png" alt="fewhew_logo" />
                    </div>
                    <div className="brand_name">FEWHEW</div>
                </div>
            </div>
            <div className="cart fadeIn4" onClick={handleShow}>
                <div className="cart_text me-3">Cart</div>
                <div className="cart_icon">
                    <img className='w-100 h-100' src={cartIcon} alt="" />
                </div>
                <sup className='ps-2 pb-4 counter'>12</sup>
            </div>
        </>
    );
};

export default Header;