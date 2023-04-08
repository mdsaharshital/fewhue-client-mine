import React from 'react';
import { Offcanvas } from 'react-bootstrap';
import ShopCard from '../../components/ShopCard/ShopCard';
import { useDispatch, useSelector } from 'react-redux';
import { categorySortByTag, resetCategoryFilter } from '../../feature/basket/basketSlice';

const Shop = ({ showShop, handleShopClose, handleShowProductDetails, data,category }) => {
    const dispatch=useDispatch()
    const sortByTag = useSelector((state) => state.basket.filter.category.sortByTag);
    console.log('cat',data);
    const {products}= data || []
    let filterProduct; 
    if (!products) {
        return <div></div>;
      }
    if(products.length){
        filterProduct=products?.map(product => <div
            key={product._id}
            sm={12}
            md={4}
            className="cursor_hover"
            onClick={handleShowProductDetails}
        >
            <ShopCard
                product={product}
            >
            </ShopCard>
        </div>)
    }
    if(products?.length && sortByTag){
        filterProduct= products?.filter((pro) => {
            if (sortByTag.length) {
              return sortByTag.includes(pro.category.name);
            } else {
              return pro;
            }
          })?.map(product => <div
            key={product._id}
            sm={12}
            md={4}
            className="cursor_hover"
            onClick={handleShowProductDetails}
        >
            <ShopCard
                product={product}
            >
            </ShopCard>
        </div>)
    }
    if(!products.length){
        filterProduct=<h1 className='text-danger'>No products available</h1>
    }



    return (
        <Offcanvas className='px-2 shop_container' show={showShop} placement='bottom' scroll={false} backdrop={true} onHide={handleShopClose}>
            <Offcanvas.Header className='p-4' closeButton>
                <Offcanvas.Title className='fs-1'>Shop</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
            <div class="d-flex align-items-center gap-2 mt-3 mb-5 w-90">
            <div className='bg-white px-4 py-1 rounded-pill'>Filter</div>
               {
                category?.category?.map(cat=>(
                    <button onClick={()=>dispatch(categorySortByTag(cat.name))} className={`btn btn-outline-dark 
                    ${sortByTag.includes(cat.name) && 'btn btn-dark text-white'} btn-sm rounded-pill`}>{cat.name}</button>
                ))
               }
            <button onClick={()=>dispatch(resetCategoryFilter())} className={`btn btn-sm cursor-not-allowed bg-danger text-white px-4 py-1 rounded-pill ${sortByTag.length>0 && 'opacity-100'}`} disabled={!sortByTag.length>0 }>Reset</button>
            </div>

                <div className='card-grid w-90 mx-auto'>
                    {filterProduct}
                </div>
            </Offcanvas.Body>
        </Offcanvas>
    );
};

export default Shop;