import React from 'react';

const Product = ({ product }) => {
    const { _id, name, price, img, description, suppiler, quantity } = product;
    return (
        <div>
            <img height={300} src={img} alt="" />
            <h1>{name}</h1>
            <h2>$<span>{price}</span></h2>
            <p>{description}</p>
            <button className='btn btn-primary'>Stock Update</button>
        </div>
    );
};

export default Product;