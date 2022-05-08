import React from 'react';

const AddItems = () => {
    return (
        <div className='w-50 mx-auto'>
            <h2>Please add a service</h2>
            <form className='d-flex flex-column'>
                <input className='mb-2' placeholder='Name' />
                <textarea className='mb-2' placeholder='Description' />
                <input className='mb-2' placeholder='Price' type="number" />
                <input className='mb-2' placeholder='Quantity' type="number" />
                <input className='mb-2' placeholder='Supplier Name' type="text" />
                <input className='mb-2' placeholder='Photo URL' type="text" />
                <input className='btn btn-primary' type="submit" value="Add Items" />

            </form>
        </div>
    );
};

export default AddItems;