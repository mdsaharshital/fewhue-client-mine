import React from 'react';
import fewhue1 from '../../assets/fewhue1.png'
import fewhue2 from '../../assets/fewhue2.png'
import fewhue3 from '../../assets/fewhue3.png'

import './WhyFewhew.css'

const WhyFewhew = () => {
    return (
        <div className="why_fh_container">
            <div data-scroll data-scroll-speed="3" className='why_fh'>
                <div className='why_fh_img'>
                    <img className='w-100 img-fluid' src={fewhue1} alt="" />
                </div>
                <div className="why_fh_title text-end">100% Primium</div>
            </div>
            <div data-scroll data-scroll-speed="2" className='why_fh'>
                <div className='why_fh_img'>
                    <img className='w-100 img-fluid' src={fewhue2} alt="" />
                </div>
                <div className="why_fh_title">100% Stylish</div>
            </div>
            <div data-scroll data-scroll-speed="3" className='why_fh'>
                <div className='why_fh_img'>
                    <img className='w-100 img-fluid' src={fewhue3} alt="" />
                </div>
                <div className="why_fh_title text-end">100% Comfortabale</div>
            </div>
        </div>
    );
};

export default WhyFewhew;