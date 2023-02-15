import Offcanvas from 'react-bootstrap/Offcanvas';
import React, { useState } from 'react';
import './Navigation.css'

const Navigation = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Offcanvas className='px-2  menu' show={show} placement='bottom' scroll={false} backdrop={true} onHide={handleClose}>
                <Offcanvas.Header className='p-4' closeButton>
                    <Offcanvas.Title>Menu</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <div className="menu_container">
                        <div>
                            <nav>
                                <ul>
                                    <li>
                                        <a href="#" class="link link--ersa">
                                            <span>Shop</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" class="link link--ersa">
                                            <span>Categories</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" class="link link--ersa">
                                            <span>Latest Drops</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" class="link link--ersa">
                                            <span>About Us</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" class="link link--ersa">
                                            <span>Contact Us</span>
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div>
                            <div className="query">
                                <a href="#">terms</a>
                                <a href="#">terms</a>
                            </div>
                        </div>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
            <div className='navigation fadeIn4'>
                <div className="nav shadow" onClick={handleShow}>
                    <svg width="25" height="25" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.5 14C11.9853 14 14 11.9853 14 9.5C14 7.01472 11.9853 5 9.5 5C7.01472 5 5 7.01472 5 9.5C5 11.9853 7.01472 14 9.5 14Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M22.5 14C24.9853 14 27 11.9853 27 9.5C27 7.01472 24.9853 5 22.5 5C20.0147 5 18 7.01472 18 9.5C18 11.9853 20.0147 14 22.5 14Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M9.5 27C11.9853 27 14 24.9853 14 22.5C14 20.0147 11.9853 18 9.5 18C7.01472 18 5 20.0147 5 22.5C5 24.9853 7.01472 27 9.5 27Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M22.5 27C24.9853 27 27 24.9853 27 22.5C27 20.0147 24.9853 18 22.5 18C20.0147 18 18 20.0147 18 22.5C18 24.9853 20.0147 27 22.5 27Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>
            </div>
        </>
    );
};

export default Navigation;