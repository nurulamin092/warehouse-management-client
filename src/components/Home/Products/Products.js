import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './products.css'
const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const localhostUrl = `http://localhost:5000/products`;
        // const serverUrl = `https://serene-brook-28678.herokuapp.com/products`;
        fetch(localhostUrl)
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])
    return (
        <div id='products' className='container'>
            <h2 className='text-primary text-center mt-5'>Our Products:{products.length}</h2>
            <div className='products-container'>
                {
                    products.slice(0, 6).map(product => <Product key={product._id}
                        product={product}>

                    </Product>)
                }
            </div>
        </div>
    );
};

export default Products;