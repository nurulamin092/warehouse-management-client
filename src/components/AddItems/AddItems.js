import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useForm } from "react-hook-form";
const AddItems = () => {

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data)
        //const localhostUrl = `http://localhost:5000/products`;
        const serverUrl = `https://serene-brook-28678.herokuapp.com/products`;
        fetch(serverUrl, {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
            })

    };
    return (
        <div className='w-50 mx-auto'>
            <Helmet><title>Add Items</title></Helmet>
            <h2>Please add a service</h2>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2' placeholder='Name' {...register("name", { required: true, maxLength: 50 })} />
                <input className='mb-2' placeholder='Supplier Name' {...register("supplierName", { required: true, maxLength: 50 })} />
                <input className='mb-2' placeholder='Price' type="number" {...register("price")} />
                <input className='mb-2' placeholder='Quantity' type="number" {...register("quantity")} />
                <input className='mb-2' placeholder='Photo URL' type="text" {...register("photoUrl")} />
                <textarea className='mb-2' placeholder='Description' {...register("description")} />
                <input type="submit" value="Add Items" />
            </form>
        </div>
    );
};

export default AddItems;