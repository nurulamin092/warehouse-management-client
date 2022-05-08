import React from 'react';

const Product = ({ product }) => {
    const { _id, name, price, img, description } = product;
    return (
        <div>
            <img height={300} src={img} alt="" />
            <h1>{name}</h1>
            <h2>$<span>{price}</span></h2>
            <p>{description}</p>
        </div>
    );
};

export default Product;