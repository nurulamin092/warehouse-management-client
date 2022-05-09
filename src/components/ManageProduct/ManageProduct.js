import React from 'react';
import './ManageProduct.css'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const ManageProduct = ({ product, handleDelete }) => {
    const { name, photoUrl, quantity } = product;
    return (
        <div className='manage-product'>
            <div>
                <img src={photoUrl} alt="" />
            </div>
            <div className="manage-product-details-container">
                <div className="manage-product-details">
                    <p className="product-name" title={name}>
                        {name.length > 20 ? name.slice(0, 20) + '...' : name}
                    </p>
                    <p><small>Quantity: {quantity}</small></p>
                </div>
                <div className="delete-container">
                    <button onClick={() => handleDelete(product._id)} className='delete-button'>
                        <FontAwesomeIcon className='delete-icon' icon={faTrashAlt}></FontAwesomeIcon>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ManageProduct;