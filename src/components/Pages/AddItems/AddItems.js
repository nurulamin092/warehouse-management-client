import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const AddItems = () => {
    const [user] = useAuthState(auth);
    const handleAddItems = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const description = e.target.description.value;
        const price = e.target.price.value;
        const quantity = e.target.quantity.value;
        const supplier = e.target.supplier.value;
        const photo = e.target.photo.value;

        console.log(name, description, price, quantity, supplier, photo);

        const url = `http://localhost:5000/products`;
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title: 'React POST Request Example' })
        };
        fetch(url, requestOptions)
            .then(res => res.json())
            .then()
    }
    return (
        <div className='w-50 mx-auto'>
            <h2>Please add a service</h2>
            <form className='d-flex flex-column' onSubmit={handleAddItems}>
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