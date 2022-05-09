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
            <section className='container mt-5'>
                <h1 className='text-center'>Leader in Technology Distribution</h1>
                <p>
                    Laptop Stock BD Pvt. Ltd is always dedicated to present world’s best IT products and most renowned brands like ASUS, DELL, BROTHER, LG, VIVItek, A4TECH, ADATA, MICRONET, QNAP, Maipu and many more in Bangladesh since its inception in 1996. Achieving customer satisfaction through efficient workforce and coordination is our topmost priority. With a strong quality focus backed by highly specialized professionals, the company endeavors to provide products and services of the highest quality to its customers. Being the Leading IT organization, GBPL is always ready to provide its best support and committed to make revolutionary contribution towards building a Digital Bangladesh.
                </p>
            </section>

            <section className='container mt-5'>
                <h1 className='text-center'>Chat With An Expert</h1>
                <h2 className='text-center'>LIVE CHAT & HOTLINE SUPPORT</h2>
                <p>
                    For any kind of ICT help whatever it is purchase, information about any product, service, enterprise solutions or online shop related issues, Laptop Stock BD welcomes you all.


                </p>
            </section>

        </div>
    );
};

export default Home;