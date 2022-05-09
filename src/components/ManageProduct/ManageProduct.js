import React from 'react';
import useProducts from '../../hooks/useProducts';

const ManageProduct = () => {
    const [products, setProducts] = useProducts();
    const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const localhostUrl = `http://localhost:5000/products/${id}`;
            //const serverUrl = `https://serene-brook-28678.herokuapp.com/products/${id}`;
            fetch(localhostUrl, {
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
                products.map(product => <div key={product._id}>
                    <h5>{product.name}<button onClick={() => handleDelete(product._id)}>X</button></h5>
                </div>)
            }
        </div>
    );
};

export default ManageProduct;