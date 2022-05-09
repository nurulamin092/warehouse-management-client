import React from 'react';
import { Helmet } from 'react-helmet-async';
import Footer from '../../Shared/Footer/Footer';
import Banner from '../Banner/Banner';
import Products from '../Products/Products';

const Home = () => {
    return (
        <div>
            <Helmet><title>Home</title></Helmet>
            <Banner></Banner>
            <Products></Products>
        </div>
    );
};

export default Home;