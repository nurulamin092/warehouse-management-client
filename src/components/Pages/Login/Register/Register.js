import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../../firebase.init';

const Register = () => {
    const [agree, setAgree] = useState(false);
    const [displayName, setDisplayName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const handleNameBlur = (e) => {
        setDisplayName(e.target.value);
    }
    const handleEmailBlur = (e) => {
        setEmail(e.target.value);
    }
    const handlePasswordBlur = (e) => {
        setPassword(e.target.value);
    }
    const handleRegister = async (e) => {
        e.preventDefault();
        await createUserWithEmailAndPassword(email, password)
        await updateProfile(displayName);
        e.target.reset();
        navigate('/home');
    }
    const navigateLogin = (e) => {
        navigate('/login');
    }
    return (
        <div>
            <div className='w-50 mx-auto mt-2'>
                <Form onSubmit={handleRegister}>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Control onBlur={handleNameBlur} type="text" placeholder="Enter Name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control onBlur={handleEmailBlur} type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control onBlur={handlePasswordBlur} type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className={`ps-2 ${agree ? '' : 'text-danger'} mb-3`} controlId="formBasicCheckbox">
                        <Form.Check onClick={() => setAgree(!agree)} type="checkbox" label="Accept Terms and Condition" />
                    </Form.Group>
                    <Button
                        disabled={!agree}
                        variant="primary" type="submit">
                        Register
                    </Button>
                </Form>
                <p className='d-flex'><span className='mx-2'>Already Have an Account?</span> <Link to='/login' className='text-danger pe-auto text-decoration-none' onClick={navigateLogin}>Please Login</Link></p>

            </div>
        </div>
    );
};

export default Register;