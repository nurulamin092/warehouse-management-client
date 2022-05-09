import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState({});
    useEffect(() => {
        // const localhostUrl = `http://localhost:5000/products/${productId}`;
        const url = `https://serene-brook-28678.herokuapp.com/products/${productId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])
    return (
        <div className='w-50 mx-auto mt-4'>
            <div className='product-container'>
                <img height={300} src={product.photoUrl} alt="" />
                <h1>{product.name}</h1>
                <h2>Price $<span>{product.price}</span></h2>
                <p>Description {product.description}</p>
                <p>Supplier Name: {product.supplierName}</p>
                <p>Quantity {product.quantity}</p>
            </div>
        </div>
    );
};

export default ProductDetail;