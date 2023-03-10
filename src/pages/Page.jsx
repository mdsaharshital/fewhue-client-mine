
import demoCap from '../assets/YT1.png'
import ProductCard from '../components/ProductCard/ProductCard';
import '../../src/App.css'
import Shop from './Shop';
import Contact from './Contact';
import HighLightedTitle from '../components/HighLightedTitle/HighLightedTitle';
import HighLightedTitle2 from '../components/HighLightedTitle2/HighLightedTitle2';
import WhyFewhew from '../components/WhyFewheu/WhyFewhew';

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
                            <div className="contact-form ms-5 mt-5 shadow">
                                <div className="pt-5">
                                    <form id='from' className="py-5" >
                                        <input name="name" placeholder="Your name" type="text" required />
                                        <input name="user_email" placeholder="Your email" type="email" required />
                                        <textarea name="message" rows="4" placeholder="Message" type="text" required />
                                        <button type="submit" className="contact_btn">Send<i className="arrow ms-3 fas fa-long-arrow-alt-right"></i></button>                                </form>
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