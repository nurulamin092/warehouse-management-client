import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Product.css'
const Product = ({ product }) => {
    const { _id, name, price, photoUrl, description, supplierName, quantity } = product;
    const navigate = useNavigate();
    const handleProductDetail = (id) => {
        navigate(`/product/${id}`);
    }
    return (
        <div className='product-container'>
            <img height={300} src={photoUrl} alt="" />
            <h1>{name}</h1>
            <h2>Price $<span>{price}</span></h2>
            <p>Description {description}</p>
            <p>Supplier Name: {supplierName}</p>
            <p>Quantity {quantity}</p>
            <button onClick={() => handleProductDetail(_id)} className='btn btn-primary'>Stock Update</button>
        </div>
    );
};

export default Product;