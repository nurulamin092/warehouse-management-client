import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './products.css'
const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('product.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])
    return (
        <div id='products' className='container'>
            <h2 className='text-primary text-center mt-5'>Our Products:{products.length}</h2>
            <div className='products-container'>
                {
                    products.map(product => <Product key={product.id}
                        product={product}>

                    </Product>)
                }
            </div>
        </div>
    );
};

export default Products;