import React from 'react';
import useProducts from '../../hooks/useProducts';
import ManageProduct from '../ManageProduct/ManageProduct';
import './ManageProducts.css'
const ManageProducts = () => {
    const [products, setProducts] = useProducts();
    const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure delete this product?');
        if (proceed) {
            //const localhostUrl = `http://localhost:5000/products/${id}`;
            const serverUrl = `https://serene-brook-28678.herokuapp.com/products/${id}`;
            fetch(serverUrl, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = products.filter(product => product._id !== id);
                    setProducts(remaining);
                })
        }
    }
    return (
        <div className='w-50 mx-auto'>
            <h1>This is mange product</h1>
            {
                products.map(product => <ManageProduct key={product._id}
                    product={product} handleDelete={handleDelete} />)
            }
        </div>
    );
};

export default ManageProducts;