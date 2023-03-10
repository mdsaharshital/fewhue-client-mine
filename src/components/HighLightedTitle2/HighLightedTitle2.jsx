import React from 'react';
import './HighLightedTitle2.css'
const HighLightedTitle2 = ({ title1, title2 }) => {
    return (
        <div className="highlighted_text text-center">
            <span className="highlighted_text-inner" data-scroll data-scroll-speed="1">{title1}</span>
            <span data-scroll data-scroll-speed="3" className="gallery__text-inner">{title2}</span>
        </div>
    );
};

export default HighLightedTitle2;