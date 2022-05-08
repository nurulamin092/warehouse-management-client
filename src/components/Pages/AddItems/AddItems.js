import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const AddItems = () => {
    const [user] = useAuthState(auth);

    return (
        <div className='w-50 mx-auto'>
            <h2>Please add a service</h2>
            <form className='d-flex flex-column' >
                <input className='mb-2' name="name" placeholder='Name' />
                <textarea className='mb-2' name='description' placeholder='Description' />
                <input className='mb-2' name='price' placeholder='Price' type="number" />
                <input className='mb-2' name='quantity' placeholder='Quantity' type="number" />
                <input className='mb-2' name='supplier' placeholder='Supplier Name' type="text" />
                <input className='mb-2' name='photo' placeholder='Photo URL' type="text" />
                <input className='btn btn-primary' type="submit" value="Add Items" />
            </form>
        </div>
    );
};

export default AddItems;