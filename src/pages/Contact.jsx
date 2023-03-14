import React from 'react';
import { Offcanvas } from 'react-bootstrap';
import SocialGroup from '../components/SocialGroup/SocialGroup';

const Contact = ({ showContact, handleContactClose }) => {
    return (
        <Offcanvas className='contact_canvas' show={showContact} placement='bottom' backdrop={true} scroll={false} onHide={handleContactClose}>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title className=' fs-1'>
                    Contact Us
                </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <SocialGroup />
            </Offcanvas.Body>
        </Offcanvas>
    );
};

export default Contact;