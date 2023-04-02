import React from 'react';

import './SocialGroup.css'

const SocialGroup = () => {
    return (
        <div className="social_icon_container skew">
            <div className="social_icon_box">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 7H28V24C28 24.2652 27.8946 24.5196 27.7071 24.7071C27.5196 24.8946 27.2652 25 27 25H5C4.73478 25 4.48043 24.8946 4.29289 24.7071C4.10536 24.5196 4 24.2652 4 24V7Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M28 7L16 18L4 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <h6 className='text-white mt-2'>Mail</h6>
            </div>
            <div className="social_icon_box">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M21 11H19C18.6056 10.9984 18.2147 11.0748 17.85 11.225C17.4853 11.3752 17.1539 11.5961 16.875 11.875C16.5961 12.1539 16.3752 12.4853 16.225 12.85C16.0748 13.2147 15.9983 13.6056 16 14V28" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12 18H20" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <h6 className='text-white mt-2'>Facebook</h6>
            </div>
            <div className="social_icon_box">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 21C18.7614 21 21 18.7614 21 16C21 13.2386 18.7614 11 16 11C13.2386 11 11 13.2386 11 16C11 18.7614 13.2386 21 16 21Z" stroke="white" strokeWidth="2" strokeMiterlimit="10" />
                    <path d="M21.5 4.5H10.5C7.18629 4.5 4.5 7.18629 4.5 10.5V21.5C4.5 24.8137 7.18629 27.5 10.5 27.5H21.5C24.8137 27.5 27.5 24.8137 27.5 21.5V10.5C27.5 7.18629 24.8137 4.5 21.5 4.5Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M22.5 11C23.3284 11 24 10.3284 24 9.5C24 8.67157 23.3284 8 22.5 8C21.6716 8 21 8.67157 21 9.5C21 10.3284 21.6716 11 22.5 11Z" fill="white" />
                </svg>
                <h6 className='text-white mt-2'>Instagram</h6>
            </div>
            <div className="social_icon_box">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.675 22.125C4.18611 19.613 3.66531 16.6439 4.21039 13.7752C4.75546 10.9064 6.32891 8.33525 8.63535 6.54438C10.9418 4.75352 13.8226 3.86611 16.737 4.04875C19.6513 4.2314 22.3988 5.47153 24.4636 7.53634C26.5284 9.60115 27.7686 12.3486 27.9512 15.263C28.1339 18.1774 27.2465 21.0582 25.4556 23.3646C23.6647 25.6711 21.0936 27.2445 18.2248 27.7896C15.3561 28.3347 12.387 27.8139 9.875 26.325V26.325L5.725 27.5C5.55497 27.5497 5.3747 27.5528 5.20307 27.5089C5.03145 27.465 4.87479 27.3757 4.74953 27.2504C4.62426 27.1252 4.535 26.9685 4.4911 26.7969C4.4472 26.6253 4.45027 26.445 4.5 26.275L5.675 22.125Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M19.0125 23C17.6967 23.0033 16.3932 22.7466 15.177 22.2446C13.9607 21.7426 12.8556 21.0052 11.9252 20.0748C10.9948 19.1444 10.2574 18.0393 9.75544 16.823C9.25343 15.6068 8.9967 14.3033 9 12.9875C9.00331 12.0614 9.37352 11.1744 10.0295 10.5207C10.6856 9.86705 11.5739 9.50002 12.5 9.50003V9.50003C12.6528 9.49881 12.8031 9.5388 12.9351 9.61579C13.0671 9.69278 13.1759 9.80392 13.25 9.93753L14.7125 12.4875C14.7995 12.6425 14.8441 12.8177 14.8419 12.9955C14.8397 13.1732 14.7908 13.3472 14.7 13.5L13.525 15.4625C14.1268 16.8014 15.1986 17.8732 16.5375 18.475L18.5 17.3C18.6528 17.2093 18.8268 17.1603 19.0046 17.1581C19.1823 17.1559 19.3575 17.2006 19.5125 17.2875L22.0625 18.75C22.1961 18.8242 22.3072 18.933 22.3842 19.0649C22.4612 19.1969 22.5012 19.3472 22.5 19.5C22.4967 20.4251 22.1286 21.3116 21.4757 21.9669C20.8227 22.6222 19.9376 22.9934 19.0125 23V23Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <h6 className='text-white mt-2'>WhatsApp</h6>
            </div>
        </div>
    );
};

export default SocialGroup;