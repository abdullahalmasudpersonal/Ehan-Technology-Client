import React from 'react';
import Banner from '../Banner/Banner';
import HomeProduct from '../HomeProduct/HomeProduct';
import ProductCategory from '../ProductCategory/ProductCategory';

const Home = () => {
    return (
        <div>
            <Banner/>
            <ProductCategory/>
            <HomeProduct/>
        </div>
    );
};

export default Home;