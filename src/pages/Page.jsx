
import demoCap from '../assets/YT1.png'
import ProductCard from '../components/ProductCard/ProductCard';
import '../../src/App.css'
import Shop from './Shop';
import Contact from './Contact';
import HighLightedTitle from '../components/HighLightedTitle/HighLightedTitle';
import HighLightedTitle2 from '../components/HighLightedTitle2/HighLightedTitle2';
import WhyFewhew from '../components/WhyFewheu/WhyFewhew';
import mail from '../assets/mail.svg'
import facebook from '../assets/FacebookLogo.svg'
import instagram from '../assets/InstagramLogo.svg'
import whatsapp from '../assets/WhatsappLogo.svg'

const catagoricsImg1 = 'https://images.pexels.com/photos/1460036/pexels-photo-1460036.jpeg?auto=compress&cs=tinysrgb&w=1600'
const catagoricsImg2 = 'https://images.pexels.com/photos/1215445/pexels-photo-1215445.jpeg?auto=compress&cs=tinysrgb&w=1600'
const catagoricsImg3 = 'https://images.pexels.com/photos/1296284/pexels-photo-1296284.jpeg?auto=compress&cs=tinysrgb&w=1600'
const catagoricsImg4 = 'https://images.pexels.com/photos/209943/pexels-photo-209943.jpeg?auto=compress&cs=tinysrgb&w=1600'

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
    }
]

const Page = (props) => {
    const { showShop, handleShopShow, handleShopClose, showContact, handleContactClose } = props
    return (
        <>
            <Shop showShop={showShop} handleShopClose={handleShopClose} />
            <Contact showContact={showContact} handleContactClose={handleContactClose} />
            <main data-scroll-section>
                <div className="content">
                    <div className="page_container">
                        <div className="landing">
                            <div className="cap">
                                <svg width="100%" height="100%" viewBox="0 0 713 470" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path className='draw' d="M1 332.931C17.5 339.431 123.1 348.6 149.5 333C166 331.833 131.5 332.831 125.5 346.431C121.333 376.431 118.6 437.231 141 440.431C147.667 443.265 162.3 443.731 167.5 422.931C179.833 394.265 189.5 354.431 246 329.931C246 329.931 301.2 314.031 354 322.431C427.333 334.431 576.3 352.431 585.5 328.431C593.833 231.765 553.673 92.9313 451.5 62.4313C373.5 39.1472 334.5 54.5313 302.5 98.9313C283.5 116.765 248.7 160.431 251.5 180.431C247.5 187.931 241.9 209.131 251.5 233.931C252.833 244.431 270.5 272.531 330.5 300.931C307.833 296.931 241.2 293.731 156 312.931C159.5 302.431 164.717 237.233 165 240.431C160.5 193.431 168.3 117.531 271.5 53.9313C247.833 61.4313 193.4 89.6313 165 142.431C150.333 166.765 135.225 240.431 138 224.431C136.167 236.931 123.6 291.531 138 315.931C133.5 318.431 123.9 321.931 121.5 315.931C112.5 311.431 121.6 228.6 134 157C147.5 110.667 177.5 63.5687 246 38.5C262 30.3333 298 22.7313 354 17.9313C369.833 19.7646 400.9 20.8313 398.5 10.4313C394.5 4.17229 380 -5.29033 354 6.9313C353.167 12.2646 360.3 22.4313 395.5 20.4313C443.5 26.598 546.8 53.5313 576 111.931C589 131.598 603.9 153.7 603.5 196.5L612.5 271.431C610.5 276.098 607.7 294.031 612.5 328.431C616.333 367.098 616.3 454 585.5 458C578.833 463.667 559.6 448.131 518 422.931C494.167 411.265 457.5 370 354 382.5C330.5 385.338 288.5 377.283 221 422.931C196.5 439.5 147.5 491.5 130 458C130 458 106.1 423.531 118.5 329.931C167 318.598 282 298.231 354 307.431L431.5 311.931C443.667 313.431 479.3 317.631 524.5 322.431C539.833 327.098 598.9 328.531 712.5 296.931" stroke="black" stroke-width="0.5" />
                                </svg>
                            </div>
                            <div className='intro'>
                                <h1 className='fadeIn1'
                                    data-scroll
                                    data-scroll-speed="3">DO</h1>
                                <h1 className='fadeIn2'
                                    data-scroll
                                    data-scroll-speed="2">WHAT YOU</h1>
                                <h1 data-scroll
                                    data-scroll-speed="1" className='love fadeIn3'>LOVE</h1>

                                <button onClick={handleShopShow} class="__button button--janus mx-auto d-block fadeIn4"><span className='shop'>Shop Now</span></button>
                            </div>
                        </div>
                        <HighLightedTitle title1={'Available'} title2={'categories'} />
                        <figure className="gallery__item">
                            <div className="gallery__item-img">
                                <div className="gallery__item-imginner skew">
                                    <img className="w-100" src={catagoricsImg1} alt="" />
                                </div>
                            </div>
                            <figcaption className="gallery__item-caption ">
                                <h2 className="gallery__item-title " data-scroll data-scroll-speed="1">Lycanthropy</h2>
                                {/* <span className="gallery__item-number">05</span> */}

                                {/* <a className="gallery__item-link">explore</a> */}
                            </figcaption>
                        </figure>
                        <figure className="gallery__item">
                            <div className="gallery__item-img">
                                <div className="gallery__item-imginner skew">
                                    <img className='w-100' src={catagoricsImg2} alt="" />
                                </div>
                            </div>
                            <figcaption className="gallery__item-caption ">
                                <h2 className="gallery__item-title" data-scroll data-scroll-speed="1">Mudlark</h2>
                                {/* <span className="gallery__item-number">06</span> */}

                                {/* <a className="gallery__item-link">explore</a> */}
                            </figcaption>
                        </figure>
                        <figure className="gallery__item">
                            <div className="gallery__item-img">
                                <div className="gallery__item-imginner skew">
                                    <img className='w-100' src={catagoricsImg3} alt="" />
                                </div>
                            </div>
                            <figcaption className="gallery__item-caption ">
                                <h2 className="gallery__item-title" data-scroll data-scroll-speed="1">Illywhacker</h2>
                                {/* <span className="gallery__item-number">07</span> */}
                                <p className="gallery__item-tags">
                                    {/* <span>#water</span> */}
                                </p>
                                {/* <a className="gallery__item-link">explore</a> */}
                            </figcaption>
                        </figure>
                        <figure className="gallery__item">
                            <div className="gallery__item-img">
                                <div className="gallery__item-imginner skew">
                                    <img className='w-100' src={catagoricsImg4} alt="" />
                                </div>
                            </div>
                            <figcaption className="gallery__item-caption ">
                                <h2 className="gallery__item-title" data-scroll data-scroll-speed="1">Disenthral</h2>
                                {/* <span className="gallery__item-number">08</span> */}
                                <p className="gallery__item-tags skew">
                                    <span>#comming soon</span>
                                </p>
                                {/* <a className="gallery__item-link">explore</a> */}
                            </figcaption>
                        </figure>
                        <HighLightedTitle2 title1={'Latest'} title2={'Drops'} />
                        <div className="latest_products">
                            {
                                productDemoData.map(product => <ProductCard
                                    key={product.id}
                                    productPrice={product.price}
                                    productImg={product.img}
                                >
                                </ProductCard>)
                            }
                        </div>
                        <HighLightedTitle2 title1={'Why?'} title2={'Fewhew'} />
                        <WhyFewhew />
                        <div className="contact_container ps-5">
                            <HighLightedTitle2 title1={'Contact'} title2={'Us'} />
                            <div className="social_icon_container skew">
                                <div className="social_icon_box">
                                    <img src={mail} alt="" />
                                    <h6 className='text-white mt-2'>Mail</h6>
                                </div>
                                <div className="social_icon_box">
                                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M21 11H19C18.6056 10.9984 18.2147 11.0748 17.85 11.225C17.4853 11.3752 17.1539 11.5961 16.875 11.875C16.5961 12.1539 16.3752 12.4853 16.225 12.85C16.0748 13.2147 15.9983 13.6056 16 14V28" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M12 18H20" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <h6 className='text-white mt-2'>Facebook</h6>
                                </div>
                                <div className="social_icon_box">
                                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16 21C18.7614 21 21 18.7614 21 16C21 13.2386 18.7614 11 16 11C13.2386 11 11 13.2386 11 16C11 18.7614 13.2386 21 16 21Z" stroke="white" stroke-width="2" stroke-miterlimit="10" />
                                        <path d="M21.5 4.5H10.5C7.18629 4.5 4.5 7.18629 4.5 10.5V21.5C4.5 24.8137 7.18629 27.5 10.5 27.5H21.5C24.8137 27.5 27.5 24.8137 27.5 21.5V10.5C27.5 7.18629 24.8137 4.5 21.5 4.5Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M22.5 11C23.3284 11 24 10.3284 24 9.5C24 8.67157 23.3284 8 22.5 8C21.6716 8 21 8.67157 21 9.5C21 10.3284 21.6716 11 22.5 11Z" fill="white" />
                                    </svg>
                                    <h6 className='text-white mt-2'>Instagram</h6>
                                </div>
                                <div className="social_icon_box">
                                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5.675 22.125C4.18611 19.613 3.66531 16.6439 4.21039 13.7752C4.75546 10.9064 6.32891 8.33525 8.63535 6.54438C10.9418 4.75352 13.8226 3.86611 16.737 4.04875C19.6513 4.2314 22.3988 5.47153 24.4636 7.53634C26.5284 9.60115 27.7686 12.3486 27.9512 15.263C28.1339 18.1774 27.2465 21.0582 25.4556 23.3646C23.6647 25.6711 21.0936 27.2445 18.2248 27.7896C15.3561 28.3347 12.387 27.8139 9.875 26.325V26.325L5.725 27.5C5.55497 27.5497 5.3747 27.5528 5.20307 27.5089C5.03145 27.465 4.87479 27.3757 4.74953 27.2504C4.62426 27.1252 4.535 26.9685 4.4911 26.7969C4.4472 26.6253 4.45027 26.445 4.5 26.275L5.675 22.125Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M19.0125 23C17.6967 23.0033 16.3932 22.7466 15.177 22.2446C13.9607 21.7426 12.8556 21.0052 11.9252 20.0748C10.9948 19.1444 10.2574 18.0393 9.75544 16.823C9.25343 15.6068 8.9967 14.3033 9 12.9875C9.00331 12.0614 9.37352 11.1744 10.0295 10.5207C10.6856 9.86705 11.5739 9.50002 12.5 9.50003V9.50003C12.6528 9.49881 12.8031 9.5388 12.9351 9.61579C13.0671 9.69278 13.1759 9.80392 13.25 9.93753L14.7125 12.4875C14.7995 12.6425 14.8441 12.8177 14.8419 12.9955C14.8397 13.1732 14.7908 13.3472 14.7 13.5L13.525 15.4625C14.1268 16.8014 15.1986 17.8732 16.5375 18.475L18.5 17.3C18.6528 17.2093 18.8268 17.1603 19.0046 17.1581C19.1823 17.1559 19.3575 17.2006 19.5125 17.2875L22.0625 18.75C22.1961 18.8242 22.3072 18.933 22.3842 19.0649C22.4612 19.1969 22.5012 19.3472 22.5 19.5C22.4967 20.4251 22.1286 21.3116 21.4757 21.9669C20.8227 22.6222 19.9376 22.9934 19.0125 23V23Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <h6 className='text-white mt-2'>WhatsApp</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default Page;