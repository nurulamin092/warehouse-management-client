import React from 'react';
import './Product.css'
const Product = ({ product }) => {
    const { _id, name, price, photoUrl, description, supplierName, quantity } = product;
    return (
        <div className='product-container'>
            <img height={300} src={photoUrl} alt="" />
            <h1>{name}</h1>
            <h2>Price $<span>{price}</span></h2>
            <p>Description {description}</p>
            <p>Supplier Name: {supplierName}</p>
            <p>Quantity {quantity}</p>
            <button className='btn btn-primary'>Stock Update</button>
        </div>
    );
};

export default Product;