import React from 'react';
import useProducts from '../../hooks/useProducts';

const ManageProduct = () => {
    const [products] = useProducts();
    return (
        <div className='w-50 mx-auto'>
            <h1>This is mange product</h1>
            {
                products.map(product => <div key={product._id}>

                    <h5>{product.name}<button>X</button></h5>
                </div>)
            }
        </div>
    );
};

export default ManageProduct;