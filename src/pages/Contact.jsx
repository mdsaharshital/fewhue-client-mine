import React from 'react';
import { Offcanvas } from 'react-bootstrap';

const Contact = ({ showContact, handleContactClose }) => {
    return (
        <Offcanvas className='shop_container' show={showContact} placement='bottom' backdrop={true} scroll={false} onHide={handleContactClose}>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title className='p-3'></Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <div>
                    <div className="gallery__text"><span className="gallery__text-inner">Contact</span><span
                        className="gallery__text-inner text-start">Us</span>
                    </div>
                    <div className="contact-form w-50 ms-auto mt-5 shadow">
                        <div className="pt-5">
                            <form id='from' className="py-5" >
                                <input name="name" placeholder="Your name" type="text" required />
                                <input name="user_email" placeholder="Your email" type="email" required />
                                <textarea name="message" rows="4" placeholder="Message" type="text" required />
                                <button type="submit" className="contact_btn">Send<i className="arrow ms-3 fas fa-long-arrow-alt-right"></i></button>                                </form>
                        </div>
                    </div>
                </div>
            </Offcanvas.Body>
        </Offcanvas>
    );
};

export default Contact;