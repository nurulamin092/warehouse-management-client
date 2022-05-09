import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const ProductDetail = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState({});
    useEffect(() => {
        const localhostUrl = `http://localhost:5000/products/${productId}`;
        // const url = `https://serene-brook-28678.herokuapp.com/products/${productId}`;
        fetch(localhostUrl)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [product]);

    const handleUpdateQuantity = (e) => {
        e.preventDefault();
        const previousQuantity = parseInt(product.quantity);
        const newQuantity = parseInt(e.target.quantity.value);
        const quantity = (previousQuantity + newQuantity);
        const updateQuantity = { quantity }
        const url = `http://localhost:5000/products/${productId}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateQuantity)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data);
                toast('quantity added successfully!!!');
                e.target.reset();
            })
    }
    const handleDeliveredQuantity = (e) => {
        e.preventDefault();
        const quantity = parseInt(product.quantity);
        const quantityDelivered = (quantity - 1);
        const delivered = { quantityDelivered }
        const url = `http://localhost:5000/products/${productId}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(delivered)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data);
                toast('quantity added successfully!!!');

            })
    }
    return (
        <div>
            <div className='w-50 mx-auto mt-4'>
                <div className='product-container'>
                    <img height={300} src={product.photoUrl} alt="" />
                    <h1>{product.name}</h1>
                    <h2>Price $<span>{product.price}</span></h2>
                    <p>Description {product.description}</p>
                    <p>Supplier Name: {product.supplierName}</p>
                    <p>Quantity {product.quantity}</p>
                </div>
                {/*   <input className='my-3' onClick={handleDeliveredQuantity} type="submit" value="Delivered" /> */}
            </div>
            <div className='d-flex'>
                <form className='w-50 mx-auto' onSubmit={handleUpdateQuantity}>
                    <input className='mb-3' type="number" name="quantity" placeholder='Quantity' />
                    <br />
                    <input className='btn btn-success' type="submit" value="Update Quantity" />
                </form>

            </div>
        </div>


    );
};

export default ProductDetail;