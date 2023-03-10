import React from 'react';
import './HighLightedTitle.css'

const HighLightedTitle = ({ title1, title2 }) => {
    return (
        <div className="highlighted_title_first">
            <span className="highlighted_text-inner" data-scroll data-scroll-speed="3">{title1}</span>
            <span data-scroll data-scroll-speed="1" className="gallery__text-inner">{title2}</span>
        </div>
    );
};

export default HighLightedTitle;